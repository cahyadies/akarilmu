import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { KnowledgeEdge, KnowledgeNode, SavedNoteMap } from '../types/knowledge';
import { getDirectDownstream, getMajorRootContributions, getNodeById } from '../utils/graphHelpers';
import { CloseSketchIcon, RootSubjectIcon, SearchSketchIcon } from './DoodleIcons';

export type MapLayoutMode = 'tree-focused' | 'horizontal-columns';

interface MapModeSwitchProps {
  layoutMode: MapLayoutMode;
  onChangeLayoutMode: (mode: MapLayoutMode) => void;
}

export const MapModeSwitcher: React.FC<MapModeSwitchProps> = ({
  layoutMode,
  onChangeLayoutMode
}) => (
  <div className="vtree-mode-switch" role="group" aria-label="Pilih mode tampilan peta keilmuan">
    <button
      type="button"
      className="sketch-btn"
      aria-pressed={layoutMode === 'tree-focused'}
      style={{
        minHeight: '40px',
        padding: '0.4rem 0.95rem',
        fontSize: '0.86rem',
        background: layoutMode === 'tree-focused' ? 'var(--accent)' : 'var(--bg-card)',
        color: layoutMode === 'tree-focused' ? 'var(--accent-on)' : 'var(--ink)'
      }}
      onClick={() => onChangeLayoutMode('tree-focused')}
    >
      Pohon Atas-Bawah
    </button>
    <button
      type="button"
      className="sketch-btn"
      aria-pressed={layoutMode === 'horizontal-columns'}
      style={{
        minHeight: '40px',
        padding: '0.4rem 0.95rem',
        fontSize: '0.86rem',
        background: layoutMode === 'horizontal-columns' ? 'var(--accent)' : 'var(--bg-card)',
        color: layoutMode === 'horizontal-columns' ? 'var(--accent-on)' : 'var(--ink)'
      }}
      onClick={() => onChangeLayoutMode('horizontal-columns')}
    >
      Peta Kiri-Kanan
    </button>
  </div>
);

interface VerticalTreeProps {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  selectedRootId: string;
  onSelectRoot: (rootId: string) => void;
  selectedPillarId: string | null;
  onSelectPillar: (pillarId: string | null) => void;
  layoutMode: MapLayoutMode;
  onChangeLayoutMode: (mode: MapLayoutMode) => void;
  onOpenDetail: (nodeId: string) => void;
  savedNotes: SavedNoteMap;
}

interface TopBranchCoords {
  svgWidth: number;
  crownCenterX: number;
  targets: Array<{ id: string; x: number; isPrimary: boolean }>;
}

interface BottomBranchCoords {
  svgWidth: number;
  sourceX: number;
  targetX: number;
}

export const VerticalTreeCanvas: React.FC<VerticalTreeProps> = ({
  nodes,
  edges,
  selectedRootId,
  onSelectRoot,
  selectedPillarId,
  onSelectPillar,
  layoutMode,
  onChangeLayoutMode,
  onOpenDetail,
  savedNotes
}) => {
  const [quickSearch, setQuickSearch] = useState('');

  const topSvgWrapRef = useRef<HTMLDivElement | null>(null);
  const bottomSvgWrapRef = useRef<HTMLDivElement | null>(null);
  const crownCardRef = useRef<HTMLDivElement | null>(null);
  const pillarRefs = useRef<Record<string, HTMLElement | null>>({});
  const leafContainerRef = useRef<HTMLDivElement | null>(null);

  const [topCoords, setTopCoords] = useState<TopBranchCoords | null>(null);
  const [bottomCoords, setBottomCoords] = useState<BottomBranchCoords | null>(null);

  const roots = useMemo(() => nodes.filter((n) => n.layer === 'root'), [nodes]);
  const activeRoot = useMemo(
    () => roots.find((r) => r.id === selectedRootId) ?? roots[0],
    [roots, selectedRootId]
  );

  const connectedPillars = useMemo(() => {
    if (!activeRoot) return [];
    return getDirectDownstream(activeRoot.id, nodes, edges);
  }, [activeRoot, nodes, edges]);

  const effectivePillarEntry = useMemo(() => {
    if (connectedPillars.length === 0) return null;
    if (selectedPillarId) {
      const found = connectedPillars.find((p) => p.node.id === selectedPillarId);
      if (found) return found;
    }
    return connectedPillars[0];
  }, [connectedPillars, selectedPillarId]);

  const activePillarMajors = useMemo(() => {
    if (!effectivePillarEntry) return [];
    const downstream = getDirectDownstream(effectivePillarEntry.node.id, nodes, edges);
    return downstream.sort((a, b) => {
      const aRoots = getMajorRootContributions(a.node.id, nodes, edges);
      const bRoots = getMajorRootContributions(b.node.id, nodes, edges);
      const aHasActivePrimary = aRoots.some(
        (rc) => rc.rootId === activeRoot.id && rc.strength === 'primary'
      );
      const bHasActivePrimary = bRoots.some(
        (rc) => rc.rootId === activeRoot.id && rc.strength === 'primary'
      );
      if (aHasActivePrimary !== bHasActivePrimary) return aHasActivePrimary ? -1 : 1;
      if (a.edge.strength !== b.edge.strength) return a.edge.strength === 'primary' ? -1 : 1;
      return a.node.title.localeCompare(b.node.title);
    });
  }, [effectivePillarEntry, activeRoot, nodes, edges]);

  const measureBranches = useCallback(() => {
    if (topSvgWrapRef.current && crownCardRef.current) {
      const wrapRect = topSvgWrapRef.current.getBoundingClientRect();
      const crownRect = crownCardRef.current.getBoundingClientRect();
      const crownCenterX = crownRect.left + crownRect.width / 2 - wrapRect.left;

      const targets: Array<{ id: string; x: number; isPrimary: boolean }> = [];
      for (const entry of connectedPillars) {
        const el = pillarRefs.current[entry.node.id];
        if (el) {
          const r = el.getBoundingClientRect();
          targets.push({
            id: entry.node.id,
            x: r.left + r.width / 2 - wrapRect.left,
            isPrimary: entry.edge.strength === 'primary'
          });
        }
      }

      if (wrapRect.width > 0 && targets.length > 0) {
        setTopCoords({
          svgWidth: wrapRect.width,
          crownCenterX,
          targets
        });
      }
    }

    if (bottomSvgWrapRef.current && effectivePillarEntry && leafContainerRef.current) {
      const bWrapRect = bottomSvgWrapRef.current.getBoundingClientRect();
      const activePillarEl = pillarRefs.current[effectivePillarEntry.node.id];
      const leafRect = leafContainerRef.current.getBoundingClientRect();

      if (activePillarEl && bWrapRect.width > 0) {
        const pRect = activePillarEl.getBoundingClientRect();
        setBottomCoords({
          svgWidth: bWrapRect.width,
          sourceX: pRect.left + pRect.width / 2 - bWrapRect.left,
          targetX: leafRect.left + leafRect.width / 2 - bWrapRect.left
        });
      }
    }
  }, [connectedPillars, effectivePillarEntry]);

  useLayoutEffect(() => {
    measureBranches();
    const onResize = () => measureBranches();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [measureBranches]);

  const searchResults = useMemo(() => {
    const q = quickSearch.trim().toLowerCase();
    if (!q) return [];
    return nodes
      .filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.shortLabel.toLowerCase().includes(q) ||
          n.summary.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [quickSearch, nodes]);

  const handleJumpFromSearch = (target: KnowledgeNode) => {
    setQuickSearch('');
    if (target.layer === 'root') {
      onSelectRoot(target.id);
      onSelectPillar(null);
    } else if (target.layer === 'pillar') {
      const parentEdge = edges.find((e) => e.to === target.id);
      if (parentEdge) onSelectRoot(parentEdge.from);
      onSelectPillar(target.id);
    } else {
      const pEdge =
        edges.find((e) => e.to === target.id && e.strength === 'primary') ??
        edges.find((e) => e.to === target.id);
      if (pEdge) {
        const rEdge =
          edges.find((e) => e.to === pEdge.from && e.strength === 'primary') ??
          edges.find((e) => e.to === pEdge.from);
        if (rEdge) onSelectRoot(rEdge.from);
        onSelectPillar(pEdge.from);
      }
      onOpenDetail(target.id);
    }
  };

  const renderMajorSummaryLabel = (majorId: string) => {
    const contribs = getMajorRootContributions(majorId, nodes, edges);
    const primaryNames = contribs
      .filter((c) => c.strength === 'primary')
      .slice(0, 3)
      .map((c) => getNodeById(nodes, c.rootId)?.shortLabel)
      .filter(Boolean);
    const list =
      primaryNames.length > 0
        ? primaryNames
        : contribs
            .slice(0, 2)
            .map((c) => getNodeById(nodes, c.rootId)?.shortLabel)
            .filter(Boolean);
    return list.join(' + ');
  };

  const pillarCount = connectedPillars.length;

  return (
    <section id="peta" className="section-block" aria-labelledby="vtree-heading">
      <div className="container">
        <div className="vtree-header-bar">
          <div>
            <h2 id="vtree-heading" className="section-title">
              Peta Cabang Keilmuan (60+ Prodi di Indonesia)
            </h2>
            <p className="section-subtitle">
              Pilih <strong>1 Ilmu Dasar</strong> di atas, lihat cabang <strong>Pilar Kuliah</strong> di tengah, lalu klik menuju <strong>Program Studi</strong> di bawahnya tanpa benang yang saling bersilangan.
            </p>
          </div>

          <MapModeSwitcher layoutMode={layoutMode} onChangeLayoutMode={onChangeLayoutMode} />
        </div>

        <div className="vtree-shelf-card">
          <div className="vtree-shelf-top">
            <div>
              <strong style={{ fontSize: '0.98rem' }}>
                Pilih Akar Ilmu Dasar SMA/K atau Sederajat (10)
              </strong>
            </div>

            <div className="vtree-search-box">
              <div className="search-input-wrap">
                <span className="search-icon-slot">
                  <SearchSketchIcon size={17} />
                </span>
                <input
                  type="search"
                  className="sketch-input"
                  style={{ minHeight: '40px', paddingTop: '0.4rem', paddingBottom: '0.4rem' }}
                  placeholder="Cari prodi atau topik (misal: mesin, akuntansi)..."
                  aria-label="Cari cepat program studi, pilar, atau ilmu dasar"
                  value={quickSearch}
                  onChange={(e) => setQuickSearch(e.target.value)}
                />
                {quickSearch && (
                  <button
                    type="button"
                    className="search-clear-btn"
                    onClick={() => setQuickSearch('')}
                    aria-label="Bersihkan pencarian"
                  >
                    <CloseSketchIcon size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {searchResults.length > 0 && (
            <div className="vtree-search-dropdown" role="region" aria-label="Hasil pencarian cepat">
              {searchResults.map((hit) => (
                <button
                  key={hit.id}
                  type="button"
                  className="preset-btn"
                  onClick={() => handleJumpFromSearch(hit)}
                >
                  {hit.title} ({hit.layer === 'root' ? 'Ilmu Dasar' : hit.layer === 'pillar' ? 'Pilar' : 'Prodi'})
                </button>
              ))}
            </div>
          )}

          <div className="vtree-root-grid" role="group" aria-label="Daftar 10 Ilmu Dasar">
            {roots.map((r) => {
              const isSelected = r.id === activeRoot.id;
              const pCount = edges.filter((e) => e.from === r.id).length;
              return (
                <button
                  key={r.id}
                  type="button"
                  className="vtree-root-pill"
                  aria-pressed={isSelected}
                  onClick={() => {
                    onSelectRoot(r.id);
                    onSelectPillar(null);
                  }}
                >
                  <span className="vtree-root-pill-title">
                    <RootSubjectIcon rootId={r.id} size={16} />
                    <span>{r.shortLabel}</span>
                  </span>
                  <span className="vtree-root-pill-count">{pCount} pilar</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="vtree-canvas-box">
          <p className="vtree-stage-label">1. Akar Ilmu Dasar</p>
          <div className="vtree-crown-wrap">
            <div className="vtree-crown-card" ref={crownCardRef}>
              <h3 className="vtree-crown-title">
                <RootSubjectIcon rootId={activeRoot.id} size={22} />
                <span>{activeRoot.title}</span>
              </h3>
              <p className="vtree-crown-desc">{activeRoot.summary}</p>
              <button
                type="button"
                className="sketch-btn"
                style={{ minHeight: '34px', padding: '0.25rem 0.75rem', fontSize: '0.82rem' }}
                onClick={() => onOpenDetail(activeRoot.id)}
              >
                Lihat rincian ilmu dasar {activeRoot.shortLabel}
              </button>
            </div>
          </div>

          <div ref={topSvgWrapRef} style={{ width: '100%' }}>
            {topCoords && (
              <svg
                className="vtree-branch-svg"
                width={topCoords.svgWidth}
                height={56}
                viewBox={`0 0 ${topCoords.svgWidth} 56`}
                aria-hidden="true"
              >
                {(() => {
                  const xs = topCoords.targets.map((t) => t.x);
                  const minX = Math.min(topCoords.crownCenterX, ...xs);
                  const maxX = Math.max(topCoords.crownCenterX, ...xs);
                  const barY = 22;

                  return (
                    <>
                      <line
                        x1={topCoords.crownCenterX}
                        y1={0}
                        x2={topCoords.crownCenterX}
                        y2={barY}
                        stroke="var(--border-strong)"
                        strokeWidth={2.4}
                        strokeLinecap="round"
                      />
                      {topCoords.targets.length > 1 && (
                        <line
                          x1={minX}
                          y1={barY}
                          x2={maxX}
                          y2={barY}
                          stroke="var(--border-strong)"
                          strokeWidth={2.2}
                          strokeLinecap="round"
                        />
                      )}
                      {topCoords.targets.map((t) => (
                        <g key={t.id}>
                          <line
                            x1={t.x}
                            y1={barY}
                            x2={t.x}
                            y2={49}
                            stroke={t.isPrimary ? 'var(--ink-blue)' : 'var(--border-ink)'}
                            strokeWidth={t.isPrimary ? 2.4 : 2}
                            strokeDasharray={t.isPrimary ? undefined : '5 4'}
                            strokeLinecap="round"
                          />
                          <path
                            d={`M ${t.x - 5.5} 45 L ${t.x} 53 L ${t.x + 5.5} 45`}
                            fill="none"
                            stroke={t.isPrimary ? 'var(--ink-blue)' : 'var(--border-ink)'}
                            strokeWidth={2.2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      ))}
                    </>
                  );
                })()}
              </svg>
            )}
          </div>

          <p className="vtree-stage-label" style={{ marginTop: '0.1rem', marginBottom: '0.7rem' }}>
            2. Bercabang ke {connectedPillars.length} Pilar Keilmuan Semester Awal
          </p>

          <div
            className="vtree-pillars-row"
            style={
              {
                '--pillar-count': Math.max(pillarCount, 1)
              } as React.CSSProperties
            }
            role="group"
            aria-label="Cabang Pilar Keilmuan"
          >
            {connectedPillars.map(({ node: pillar, edge }) => {
              const isSelected = effectivePillarEntry?.node.id === pillar.id;
              const majorCount = edges.filter((e) => e.from === pillar.id).length;
              const isPrimary = edge.strength === 'primary';

              return (
                <button
                  key={pillar.id}
                  ref={(el) => {
                    pillarRefs.current[pillar.id] = el;
                  }}
                  type="button"
                  className={`vtree-pillar-card ${
                    !isPrimary ? 'vtree-pillar-card--supporting' : ''
                  }`}
                  aria-pressed={isSelected}
                  onClick={() => onSelectPillar(pillar.id)}
                >
                  <div className="vtree-pillar-badge-row">
                    <span
                      className={`vtree-badge-strength ${
                        isPrimary ? 'vtree-badge-strength--primary' : ''
                      }`}
                    >
                      {isPrimary ? 'Cabang Utama' : 'Lintas Bidang'}
                    </span>
                    <span className="vtree-prodi-count">{majorCount} prodi</span>
                  </div>
                  <h4 className="vtree-pillar-name">{pillar.shortLabel}</h4>
                </button>
              );
            })}
          </div>

          {effectivePillarEntry && (
            <>
              <div ref={bottomSvgWrapRef} style={{ width: '100%' }}>
                {bottomCoords && (
                  <svg
                    className="vtree-branch-svg"
                    width={bottomCoords.svgWidth}
                    height={56}
                    viewBox={`0 0 ${bottomCoords.svgWidth} 56`}
                    aria-hidden="true"
                  >
                    <path
                      d={`M ${bottomCoords.sourceX} 0 L ${bottomCoords.sourceX} 24 L ${bottomCoords.targetX} 24 L ${bottomCoords.targetX} 49`}
                      stroke="var(--accent)"
                      strokeWidth={2.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d={`M ${bottomCoords.targetX - 6} 44 L ${bottomCoords.targetX} 53 L ${bottomCoords.targetX + 6} 44`}
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              <div className="vtree-leaf-container" ref={leafContainerRef}>
                <div className="vtree-leaf-header">
                  <div>
                    <p
                      style={{
                        margin: '0 0 0.2rem',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--accent)'
                      }}
                    >
                      3. CABANG PROGRAM STUDI DARI PILAR {effectivePillarEntry.node.shortLabel.toUpperCase()}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sketch)',
                        fontSize: '1.65rem',
                        margin: 0
                      }}
                    >
                      {effectivePillarEntry.node.title} ({activePillarMajors.length} Program Studi)
                    </h3>
                    <p style={{ margin: '0.2rem 0 0', fontSize: '0.9rem', color: 'var(--ink-muted)' }}>
                      {effectivePillarEntry.node.summary}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="sketch-btn"
                    style={{ minHeight: '36px', padding: '0.3rem 0.75rem', fontSize: '0.84rem' }}
                    onClick={() => onOpenDetail(effectivePillarEntry.node.id)}
                  >
                    Rincian Pilar Ini
                  </button>
                </div>

                <div className="vtree-leaf-grid">
                  {activePillarMajors.map(({ node: major, edge }) => {
                    const isPrimary = edge.strength === 'primary';
                    const saved = savedNotes[major.id];
                    const recipe = renderMajorSummaryLabel(major.id);

                    return (
                      <button
                        key={major.id}
                        type="button"
                        className={`vtree-major-card ${
                          !isPrimary ? 'vtree-major-card--supporting' : ''
                        }`}
                        onClick={() => onOpenDetail(major.id)}
                      >
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '0.4rem',
                              marginBottom: '0.35rem'
                            }}
                          >
                            <span
                              style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: isPrimary ? 'var(--ink-blue)' : 'var(--ink-muted)'
                              }}
                            >
                              {major.cluster}
                            </span>
                            {saved ? (
                              <span className="saved-pill">{saved}</span>
                            ) : (
                              <span
                                style={{
                                  fontSize: '0.72rem',
                                  color: 'var(--ink-muted)',
                                  fontWeight: 600
                                }}
                              >
                                {isPrimary ? 'Utama' : 'Pendukung'}
                              </span>
                            )}
                          </div>
                          <div style={{ fontWeight: 700, fontSize: '1.02rem', marginBottom: '0.25rem' }}>
                            {major.shortLabel}
                          </div>
                          <div style={{ fontSize: '0.82rem', color: 'var(--ink-muted)' }}>
                            Akar: {recipe}
                          </div>
                        </div>

                        <div
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            color: 'var(--accent)',
                            paddingTop: '0.4rem',
                            borderTop: '1px dashed var(--border-soft)'
                          }}
                        >
                          Klik untuk rincian &amp; PTN/PTS -&gt;
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
