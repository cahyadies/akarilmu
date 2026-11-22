import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { PRODI_CLUSTERS } from '../data/knowledgeGraph';
import { KnowledgeEdge, KnowledgeNode, ProdiCluster, SavedNoteMap } from '../types/knowledge';
import {
  filterNodesBySearch,
  getConnectedChain,
  getMajorRootContributions
} from '../utils/graphHelpers';
import { CloseSketchIcon, RootSubjectIcon, SearchSketchIcon } from './DoodleIcons';

interface RoadmapCanvasProps {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  activeRootFilter: string | null;
  onSelectRootFilter: (rootId: string | null) => void;
  activeCluster: ProdiCluster | null;
  onSelectCluster: (cluster: ProdiCluster | null) => void;
  focusedNodeId: string | null;
  onFocusNode: (nodeId: string | null) => void;
  onOpenDetail: (nodeId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  savedNotes: SavedNoteMap;
}

interface MeasuredLine {
  id: string;
  d: string;
  strength: 'primary' | 'supporting';
  isHighlighted: boolean;
  isAccent: boolean;
  isDimmed: boolean;
}

const STATUS_LABELS: Record<string, string> = {
  tertarik: 'Tertarik',
  'sedang-dipelajari': 'Dipelajari',
  paham: 'Paham'
};

// Generates a slightly organic cubic curve so connectors feel sketched rather than rigid CAD lines.
function buildSketchCurve(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  seedIndex: number
): string {
  const dx = x2 - x1;
  const wobble = ((seedIndex % 5) - 2) * 2.2;
  const cx1 = x1 + dx * 0.44;
  const cy1 = y1 + wobble;
  const cx2 = x1 + dx * 0.58;
  const cy2 = y2 - wobble;
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${cx1.toFixed(1)} ${cy1.toFixed(1)}, ${cx2.toFixed(1)} ${cy2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

export const RoadmapCanvas: React.FC<RoadmapCanvasProps> = ({
  nodes,
  edges,
  activeRootFilter,
  onSelectRootFilter,
  activeCluster,
  onSelectCluster,
  focusedNodeId,
  onFocusNode,
  onOpenDetail,
  searchQuery,
  onSearchChange,
  savedNotes
}) => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isUpdatingView, setIsUpdatingView] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [mobileLayerTab, setMobileLayerTab] = useState<'root' | 'pillar' | 'major'>('root');
  const [lines, setLines] = useState<MeasuredLine[]>([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  const canvasRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const roots = useMemo(() => nodes.filter((n) => n.layer === 'root'), [nodes]);
  const pillars = useMemo(() => nodes.filter((n) => n.layer === 'pillar'), [nodes]);
  const majors = useMemo(() => nodes.filter((n) => n.layer === 'major'), [nodes]);

  const searchAllowedIds = useMemo(
    () => filterNodesBySearch(searchQuery, nodes, edges),
    [searchQuery, nodes, edges]
  );

  const rootFilterChain = useMemo(() => {
    if (!activeRootFilter) return null;
    return getConnectedChain(activeRootFilter, edges);
  }, [activeRootFilter, edges]);

  // When a prodi cluster is active, keep only the majors in that cluster and their upstream foundations.
  const clusterAllowedIds = useMemo(() => {
    if (!activeCluster) return null;
    const allowed = new Set<string>();
    const clusterMajors = majors.filter((m) => m.cluster === activeCluster);
    for (const major of clusterMajors) {
      const chain = getConnectedChain(major.id, edges);
      chain.nodeIds.forEach((id) => allowed.add(id));
    }
    return allowed;
  }, [activeCluster, majors, edges]);

  const visibleMajors = useMemo(() => {
    return majors.filter((n) => {
      if (!searchAllowedIds.has(n.id)) return false;
      if (rootFilterChain && !rootFilterChain.nodeIds.has(n.id)) return false;
      if (activeCluster && n.cluster !== activeCluster) return false;
      return true;
    });
  }, [majors, searchAllowedIds, rootFilterChain, activeCluster]);

  const visibleMajorIdSet = useMemo(
    () => new Set(visibleMajors.map((m) => m.id)),
    [visibleMajors]
  );

  const visiblePillars = useMemo(() => {
    return pillars.filter((n) => {
      if (!searchAllowedIds.has(n.id)) return false;
      if (rootFilterChain && !rootFilterChain.nodeIds.has(n.id)) return false;
      if (clusterAllowedIds && !clusterAllowedIds.has(n.id)) return false;
      if (activeCluster || activeRootFilter) {
        return edges.some((e) => e.from === n.id && visibleMajorIdSet.has(e.to));
      }
      return true;
    });
  }, [pillars, searchAllowedIds, rootFilterChain, clusterAllowedIds, activeCluster, activeRootFilter, edges, visibleMajorIdSet]);

  const visiblePillarIdSet = useMemo(
    () => new Set(visiblePillars.map((p) => p.id)),
    [visiblePillars]
  );

  const visibleRoots = useMemo(() => {
    return roots.filter((n) => {
      if (!searchAllowedIds.has(n.id)) return false;
      if (clusterAllowedIds && !clusterAllowedIds.has(n.id)) return false;
      if (activeRootFilter) {
        // Keep co-requisite roots visible when a filtered pillar also draws from them.
        if (n.id === activeRootFilter) return true;
        return edges.some((e) => e.from === n.id && visiblePillarIdSet.has(e.to));
      }
      if (activeCluster) {
        return edges.some((e) => e.from === n.id && visiblePillarIdSet.has(e.to));
      }
      return true;
    });
  }, [roots, searchAllowedIds, clusterAllowedIds, activeRootFilter, activeCluster, edges, visiblePillarIdSet]);

  const visibleIdSet = useMemo(() => {
    const set = new Set<string>();
    visibleRoots.forEach((n) => set.add(n.id));
    visiblePillars.forEach((n) => set.add(n.id));
    visibleMajors.forEach((n) => set.add(n.id));
    return set;
  }, [visibleRoots, visiblePillars, visibleMajors]);

  const activeTraceId = hoveredNodeId ?? focusedNodeId ?? activeRootFilter;

  const activeChain = useMemo(() => {
    if (!activeTraceId || !visibleIdSet.has(activeTraceId)) return null;
    return getConnectedChain(activeTraceId, edges);
  }, [activeTraceId, visibleIdSet, edges]);

  const visibleEdges = useMemo(
    () => edges.filter((e) => visibleIdSet.has(e.from) && visibleIdSet.has(e.to)),
    [edges, visibleIdSet]
  );

  const registerNodeRef = useCallback((id: string, el: HTMLButtonElement | null) => {
    if (el) {
      nodeRefs.current.set(id, el);
    } else {
      nodeRefs.current.delete(id);
    }
  }, []);

  const recomputeLines = useCallback(() => {
    const container = canvasRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    setSvgSize({ width: rect.width, height: rect.height });

    const nextLines: MeasuredLine[] = [];
    visibleEdges.forEach((edge, idx) => {
      const fromEl = nodeRefs.current.get(edge.from);
      const toEl = nodeRefs.current.get(edge.to);
      if (!fromEl || !toEl) return;

      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      const x1 = fromRect.right - rect.left;
      const y1 = fromRect.top + fromRect.height / 2 - rect.top;
      const x2 = toRect.left - rect.left;
      const y2 = toRect.top + toRect.height / 2 - rect.top;

      const isHighlighted = activeChain ? activeChain.edgeIds.has(edge.id) : false;
      const isAccent =
        activeTraceId !== null && (edge.from === activeTraceId || edge.to === activeTraceId);
      const isDimmed = activeChain !== null && !isHighlighted;

      nextLines.push({
        id: edge.id,
        d: buildSketchCurve(x1, y1, x2, y2, idx),
        strength: edge.strength,
        isHighlighted,
        isAccent,
        isDimmed
      });
    });

    // Draw dimmed lines underneath highlighted ones so active pathways stay crisp.
    nextLines.sort((a, b) => Number(a.isHighlighted) - Number(b.isHighlighted));
    setLines(nextLines);
  }, [visibleEdges, activeChain, activeTraceId]);

  useLayoutEffect(() => {
    recomputeLines();

    const container = canvasRef.current;
    if (!container || typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(() => {
      recomputeLines();
    });
    observer.observe(container);

    const onFontReady = () => recomputeLines();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(onFontReady);
    }

    return () => observer.disconnect();
  }, [recomputeLines]);

  const handleRootChipClick = (rootId: string | null) => {
    setIsUpdatingView(true);
    onSelectRootFilter(rootId);
    onFocusNode(rootId);
    if (rootId) setMobileLayerTab('major');
    window.requestAnimationFrame(() => setIsUpdatingView(false));
  };

  const handleClusterChipClick = (cluster: ProdiCluster | null) => {
    setIsUpdatingView(true);
    onSelectCluster(cluster);
    if (cluster) setMobileLayerTab('major');
    window.requestAnimationFrame(() => setIsUpdatingView(false));
  };

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setMobileLayerTab('major');
    }
  }, [searchQuery]);

  const activeFilterCount = (activeRootFilter ? 1 : 0) + (activeCluster ? 1 : 0);

  const handleNodeActivate = (nodeId: string) => {
    onFocusNode(nodeId);
    onOpenDetail(nodeId);
  };

  const focusedNode = useMemo(
    () => (focusedNodeId ? nodes.find((n) => n.id === focusedNodeId) ?? null : null),
    [focusedNodeId, nodes]
  );

  const hasResults = visibleMajors.length > 0;
  const hasActiveFilters = Boolean(activeRootFilter || activeCluster || searchQuery.trim());

  return (
    <section id="peta" className="section-block" aria-labelledby="peta-heading">
      <div className="container">
        <div className="section-header-row">
          <div>
            <h2 id="peta-heading" className="section-heading">
              Peta Cabang Keilmuan (60+ Prodi di Indonesia)
            </h2>
            <p className="section-sub">
              Saring dari kiri lewat ilmu dasar SMA/K atau sederajat, dari klaster fakultas, atau klik langsung kotak prodi untuk menelusuri seluruh jalur fondasinya.
            </p>
          </div>
        </div>

        <div className="roadmap-controls">
          <div className="controls-top-row">
            <div className="search-field-group">
              <label htmlFor="cari-ilmu" className="field-label">
                Cari pelajaran, klaster, topik, atau prodi
              </label>
              <div className="search-input-wrap">
                <span className="search-icon-slot">
                  <SearchSketchIcon size={18} />
                </span>
                <input
                  id="cari-ilmu"
                  type="text"
                  className="sketch-input"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Contoh: kedokteran, dkv, pangan, hukum"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="search-clear-btn"
                    onClick={() => onSearchChange('')}
                    aria-label="Hapus kata kunci pencarian"
                  >
                    <CloseSketchIcon size={16} />
                  </button>
                )}
              </div>
            </div>

            <div className="legend-inline" aria-label="Keterangan garis hubungan">
              <span className="legend-item">
                <span className="legend-line" aria-hidden="true" />
                Fondasi utama
              </span>
              <span className="legend-item">
                <span className="legend-line legend-line--dashed" aria-hidden="true" />
                Pendukung / lintas bidang
              </span>
            </div>
          </div>

          <button
            type="button"
            className="sketch-btn mobile-filter-toggle"
            aria-expanded={mobileFiltersOpen}
            aria-controls="roadmap-filter-groups"
            onClick={() => setMobileFiltersOpen((prev) => !prev)}
          >
            <span>
              Filter Akar & Klaster{activeFilterCount > 0 ? ` (${activeFilterCount} aktif)` : ''}
            </span>
            <span className="mobile-filter-state">{mobileFiltersOpen ? 'Tutup' : 'Buka'}</span>
          </button>

          <div
            id="roadmap-filter-groups"
            className={[
              'filter-groups-wrap',
              mobileFiltersOpen ? 'filter-groups-wrap--open' : ''
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div>
              <p className="filter-group-label">Saring berdasarkan ilmu dasar (SMA/K atau sederajat):</p>
              <div className="root-filter-bar" role="group" aria-label="Saring berdasarkan ilmu dasar SMA/K atau sederajat">
                <button
                  type="button"
                  className="root-chip"
                  aria-pressed={activeRootFilter === null}
                  onClick={() => handleRootChipClick(null)}
                >
                  Semua Akar ({roots.length})
                </button>
                {roots.map((root) => (
                  <button
                    key={root.id}
                    type="button"
                    className="root-chip"
                    aria-pressed={activeRootFilter === root.id}
                    onClick={() => handleRootChipClick(activeRootFilter === root.id ? null : root.id)}
                  >
                    <RootSubjectIcon rootId={root.id} size={16} />
                    <span>{root.shortLabel}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="cluster-filter-section">
              <p className="filter-group-label">Atau fokus ke klaster program studi:</p>
              <div className="cluster-filter-bar" role="group" aria-label="Saring berdasarkan klaster prodi">
                <button
                  type="button"
                  className="cluster-chip"
                  aria-pressed={activeCluster === null}
                  onClick={() => handleClusterChipClick(null)}
                >
                  Semua Klaster ({majors.length})
                </button>
                {PRODI_CLUSTERS.map((cluster) => {
                  const count = majors.filter((m) => m.cluster === cluster).length;
                  return (
                    <button
                      key={cluster}
                      type="button"
                      className="cluster-chip"
                      aria-pressed={activeCluster === cluster}
                      onClick={() => handleClusterChipClick(activeCluster === cluster ? null : cluster)}
                    >
                      {cluster} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {(focusedNode || hasActiveFilters) && hasResults && (
          <div className="selection-strip" role="status" aria-live="polite">
            <p className="selection-strip-text">
              {focusedNode ? (
                <>
                  Menyorot jalur terkait <strong>{focusedNode.title}</strong> ({visibleMajors.length} prodi tampil). Klik kotak mana pun untuk membuka rinciannya.
                </>
              ) : (
                <>
                  Menampilkan <strong>{visibleMajors.length} program studi</strong> dari filter aktif.
                </>
              )}
            </p>
            <div className="selection-strip-actions">
              {focusedNode && (
                <button
                  type="button"
                  className="sketch-btn"
                  onClick={() => onOpenDetail(focusedNode.id)}
                >
                  Buka rincian {focusedNode.shortLabel}
                </button>
              )}
              <button
                type="button"
                className="sketch-btn sketch-btn--ghost"
                onClick={() => {
                  onFocusNode(null);
                  onSelectRootFilter(null);
                  onSelectCluster(null);
                  onSearchChange('');
                }}
              >
                Reset semua filter
              </button>
            </div>
          </div>
        )}

        {isUpdatingView ? (
          <div className="state-panel" role="status" aria-live="polite">
            <p className="state-panel-title">Menyusun ulang garis cabang...</p>
            <p className="state-panel-desc">Menghubungkan ilmu dasar dengan pilar dan program studi yang relevan.</p>
          </div>
        ) : !hasResults ? (
          <div className="state-panel" role="status" aria-live="polite">
            <h3 className="state-panel-title">
              {searchQuery
                ? `Jalur untuk "${searchQuery}" belum ditemukan`
                : 'Tidak ada prodi yang cocok dengan kombinasi filter ini'}
            </h3>
            <p className="state-panel-desc">
              Coba lepas salah satu saringan (akar ilmu atau klaster prodi), atau cari kata kunci lain seperti "kimia", "dkv", "pangan", atau "hukum".
            </p>
            <button
              type="button"
              className="sketch-btn sketch-btn--primary"
              onClick={() => {
                onSearchChange('');
                onSelectRootFilter(null);
                onSelectCluster(null);
                onFocusNode(null);
              }}
            >
              Reset pencarian dan tampilkan semua peta
            </button>
          </div>
        ) : (
          <>
            <div className="roadmap-canvas-wrap" ref={canvasRef}>
              <svg
                className="roadmap-svg-layer"
                width={svgSize.width}
                height={svgSize.height}
                viewBox={`0 0 ${Math.max(svgSize.width, 1)} ${Math.max(svgSize.height, 1)}`}
                aria-hidden="true"
              >
                {lines.map((line) => {
                  const strokeColor = line.isAccent
                    ? 'var(--accent)'
                    : line.isHighlighted
                      ? 'var(--ink-blue)'
                      : 'var(--edge-idle)';
                  const strokeWidth = line.isAccent
                    ? 2.6
                    : line.isHighlighted
                      ? 2.1
                      : 1.15;
                  const opacity = line.isDimmed
                    ? 0.08
                    : line.isHighlighted
                      ? 0.92
                      : visibleMajors.length > 30
                        ? 0.22
                        : 0.42;

                  return (
                    <path
                      key={line.id}
                      d={line.d}
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeDasharray={line.strength === 'supporting' ? '6 5' : undefined}
                      strokeLinecap="round"
                      opacity={opacity}
                    />
                  );
                })}
              </svg>

              <div className="roadmap-columns">
                <div>
                  <div className="roadmap-col-header">
                    <h3 className="roadmap-col-title">1. Ilmu Dasar SMA/K ({visibleRoots.length})</h3>
                    <p className="roadmap-col-hint">Titik berangkat fundamental</p>
                  </div>
                  <div className="roadmap-node-list">
                    {visibleRoots.map((node) => {
                      const isActive = activeTraceId === node.id;
                      const isHighlighted = activeChain ? activeChain.nodeIds.has(node.id) : false;
                      const isDimmed = activeChain !== null && !isHighlighted;
                      const saved = savedNotes[node.id];

                      return (
                        <button
                          key={node.id}
                          ref={(el) => registerNodeRef(node.id, el)}
                          type="button"
                          className={[
                            'tree-node',
                            'tree-node--root',
                            isActive ? 'tree-node--active' : '',
                            isHighlighted && !isActive ? 'tree-node--highlighted' : '',
                            isDimmed ? 'tree-node--dimmed' : ''
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          onMouseEnter={() => setHoveredNodeId(node.id)}
                          onMouseLeave={() => setHoveredNodeId(null)}
                          onFocus={() => setHoveredNodeId(node.id)}
                          onBlur={() => setHoveredNodeId(null)}
                          onClick={() => handleNodeActivate(node.id)}
                        >
                          <span className="tree-node-top">
                            <span className="tree-node-title">
                              <RootSubjectIcon rootId={node.id} size={16} />
                              <span>{node.shortLabel}</span>
                            </span>
                            {saved && <span className="saved-tag">{STATUS_LABELS[saved]}</span>}
                          </span>
                          <span className="tree-node-meta">{node.group}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="roadmap-col-header">
                    <h3 className="roadmap-col-title">2. Pilar Keilmuan ({visiblePillars.length})</h3>
                    <p className="roadmap-col-hint">Fondasi cabang semester awal</p>
                  </div>
                  <div className="roadmap-node-list">
                    {visiblePillars.map((node) => {
                      const isActive = activeTraceId === node.id;
                      const isHighlighted = activeChain ? activeChain.nodeIds.has(node.id) : false;
                      const isDimmed = activeChain !== null && !isHighlighted;
                      const saved = savedNotes[node.id];

                      return (
                        <button
                          key={node.id}
                          ref={(el) => registerNodeRef(node.id, el)}
                          type="button"
                          className={[
                            'tree-node',
                            isActive ? 'tree-node--active' : '',
                            isHighlighted && !isActive ? 'tree-node--highlighted' : '',
                            isDimmed ? 'tree-node--dimmed' : ''
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          onMouseEnter={() => setHoveredNodeId(node.id)}
                          onMouseLeave={() => setHoveredNodeId(null)}
                          onFocus={() => setHoveredNodeId(node.id)}
                          onBlur={() => setHoveredNodeId(null)}
                          onClick={() => handleNodeActivate(node.id)}
                        >
                          <span className="tree-node-top">
                            <span className="tree-node-title">{node.shortLabel}</span>
                            {saved && <span className="saved-tag">{STATUS_LABELS[saved]}</span>}
                          </span>
                          <span className="tree-node-meta">{node.group}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="roadmap-col-header">
                    <h3 className="roadmap-col-title">3. Program Studi di Indonesia ({visibleMajors.length})</h3>
                    <p className="roadmap-col-hint">Arah kuliah dan spesialisasi kerja</p>
                  </div>
                  <div className="roadmap-majors-grid">
                    {visibleMajors.map((node) => {
                      const isActive = activeTraceId === node.id;
                      const isHighlighted = activeChain ? activeChain.nodeIds.has(node.id) : false;
                      const isDimmed = activeChain !== null && !isHighlighted;
                      const saved = savedNotes[node.id];
                      const rootContribs = getMajorRootContributions(node.id, nodes, edges);
                      const rootSummary = rootContribs
                        .slice(0, 3)
                        .map((rc) => roots.find((r) => r.id === rc.rootId)?.shortLabel)
                        .filter(Boolean)
                        .join(' + ');

                      return (
                        <button
                          key={node.id}
                          ref={(el) => registerNodeRef(node.id, el)}
                          type="button"
                          className={[
                            'tree-node',
                            'tree-node--major',
                            isActive ? 'tree-node--active' : '',
                            isHighlighted && !isActive ? 'tree-node--highlighted' : '',
                            isDimmed ? 'tree-node--dimmed' : ''
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          onMouseEnter={() => setHoveredNodeId(node.id)}
                          onMouseLeave={() => setHoveredNodeId(null)}
                          onFocus={() => setHoveredNodeId(node.id)}
                          onBlur={() => setHoveredNodeId(null)}
                          onClick={() => handleNodeActivate(node.id)}
                        >
                          <span className="tree-node-top">
                            <span className="tree-node-title">{node.shortLabel}</span>
                            {saved && <span className="saved-tag">{STATUS_LABELS[saved]}</span>}
                          </span>
                          <span className="tree-node-meta">
                            {node.cluster ? `${node.cluster}: ` : ''}
                            {rootSummary}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-roadmap-view" aria-label="Tampilan peta keilmuan bertab untuk ponsel">
              <div className="mobile-layer-tabs" role="tablist" aria-label="Pilih lapisan keilmuan">
                <button
                  type="button"
                  role="tab"
                  id="tab-layer-root"
                  aria-selected={mobileLayerTab === 'root'}
                  aria-controls="panel-layer-root"
                  className="mobile-layer-tab"
                  onClick={() => setMobileLayerTab('root')}
                >
                  <span>1. Dasar</span>
                  <span className="mobile-tab-count">{visibleRoots.length}</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  id="tab-layer-pillar"
                  aria-selected={mobileLayerTab === 'pillar'}
                  aria-controls="panel-layer-pillar"
                  className="mobile-layer-tab"
                  onClick={() => setMobileLayerTab('pillar')}
                >
                  <span>2. Pilar</span>
                  <span className="mobile-tab-count">{visiblePillars.length}</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  id="tab-layer-major"
                  aria-selected={mobileLayerTab === 'major'}
                  aria-controls="panel-layer-major"
                  className="mobile-layer-tab"
                  onClick={() => setMobileLayerTab('major')}
                >
                  <span>3. Prodi</span>
                  <span className="mobile-tab-count">{visibleMajors.length}</span>
                </button>
              </div>

              {mobileLayerTab === 'root' && (
                <div
                  id="panel-layer-root"
                  role="tabpanel"
                  aria-labelledby="tab-layer-root"
                  className="mobile-step-card"
                >
                  <h3 className="mobile-step-heading">1. Ilmu Dasar SMA/K ({visibleRoots.length})</h3>
                  <div className="mobile-node-stack">
                    {visibleRoots.map((node) => (
                      <button
                        key={node.id}
                        type="button"
                        className={[
                          'tree-node',
                          'tree-node--root',
                          focusedNodeId === node.id ? 'tree-node--active' : ''
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        onClick={() => handleNodeActivate(node.id)}
                      >
                        <span className="tree-node-top">
                          <span className="tree-node-title">
                            <RootSubjectIcon rootId={node.id} size={16} />
                            <span>{node.title}</span>
                          </span>
                          {savedNotes[node.id] && (
                            <span className="saved-tag">{STATUS_LABELS[savedNotes[node.id]]}</span>
                          )}
                        </span>
                        <span className="tree-node-meta">{node.group}</span>
                      </button>
                    ))}
                  </div>
                  <div className="mobile-tab-next-row">
                    <button
                      type="button"
                      className="sketch-btn sketch-btn--ghost"
                      onClick={() => setMobileLayerTab('pillar')}
                    >
                      Lanjut ke 2. Pilar Keilmuan ({visiblePillars.length})
                    </button>
                  </div>
                </div>
              )}

              {mobileLayerTab === 'pillar' && (
                <div
                  id="panel-layer-pillar"
                  role="tabpanel"
                  aria-labelledby="tab-layer-pillar"
                  className="mobile-step-card"
                >
                  <h3 className="mobile-step-heading">2. Pilar Keilmuan ({visiblePillars.length})</h3>
                  <div className="mobile-node-stack">
                    {visiblePillars.map((node) => (
                      <button
                        key={node.id}
                        type="button"
                        className={[
                          'tree-node',
                          focusedNodeId === node.id ? 'tree-node--active' : ''
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        onClick={() => handleNodeActivate(node.id)}
                      >
                        <span className="tree-node-top">
                          <span className="tree-node-title">{node.title}</span>
                          {savedNotes[node.id] && (
                            <span className="saved-tag">{STATUS_LABELS[savedNotes[node.id]]}</span>
                          )}
                        </span>
                        <span className="tree-node-meta">{node.group}</span>
                      </button>
                    ))}
                  </div>
                  <div className="mobile-tab-next-row">
                    <button
                      type="button"
                      className="sketch-btn sketch-btn--ghost"
                      onClick={() => setMobileLayerTab('major')}
                    >
                      Lanjut ke 3. Program Studi ({visibleMajors.length})
                    </button>
                  </div>
                </div>
              )}

              {mobileLayerTab === 'major' && (
                <div
                  id="panel-layer-major"
                  role="tabpanel"
                  aria-labelledby="tab-layer-major"
                  className="mobile-step-card"
                >
                  <h3 className="mobile-step-heading">3. Program Studi di Indonesia ({visibleMajors.length})</h3>
                  <div className="mobile-node-stack">
                    {visibleMajors.map((node) => {
                      const rootContribs = getMajorRootContributions(node.id, nodes, edges);
                      const rootSummary = rootContribs
                        .slice(0, 3)
                        .map((rc) => {
                          const label = roots.find((r) => r.id === rc.rootId)?.shortLabel;
                          return label ? `${label}${rc.strength === 'primary' ? '' : ' (pendukung)'}` : '';
                        })
                        .filter(Boolean)
                        .join(', ');

                      return (
                        <button
                          key={node.id}
                          type="button"
                          className={[
                            'tree-node',
                            'tree-node--major',
                            focusedNodeId === node.id ? 'tree-node--active' : ''
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          onClick={() => handleNodeActivate(node.id)}
                        >
                          <span className="tree-node-top">
                            <span className="tree-node-title">{node.title}</span>
                            {savedNotes[node.id] && (
                              <span className="saved-tag">{STATUS_LABELS[savedNotes[node.id]]}</span>
                            )}
                          </span>
                          <span className="tree-node-meta">
                            {node.cluster ? `${node.cluster} | ` : ''}Akar: {rootSummary}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
