import React, { useMemo, useState } from 'react';
import { CAREER_SECTORS, CAREER_TRACKS, CareerSector } from '../data/careerTracks';
import { KnowledgeNode } from '../types/knowledge';
import { CloseSketchIcon, RootSubjectIcon, SearchSketchIcon } from './DoodleIcons';

interface CareerExplorerProps {
  nodes: KnowledgeNode[];
  initialSearch?: string;
  onInspectNode: (nodeId: string) => void;
  onHighlightOnMap: (nodeId: string) => void;
}

export const CareerExplorer: React.FC<CareerExplorerProps> = ({
  nodes,
  initialSearch = '',
  onInspectNode,
  onHighlightOnMap
}) => {
  const [selectedSector, setSelectedSector] = useState<CareerSector | null>(null);
  const [query, setQuery] = useState(initialSearch);

  const nodeMap = useMemo(() => {
    const map = new Map<string, KnowledgeNode>();
    nodes.forEach((n) => map.set(n.id, n));
    return map;
  }, [nodes]);

  const filteredTracks = useMemo(() => {
    const cleaned = query.trim().toLowerCase();
    return CAREER_TRACKS.filter((track) => {
      if (selectedSector && track.sector !== selectedSector) return false;
      if (!cleaned) return true;

      const majorTitles = [...track.primaryMajors, ...track.alternativeMajors]
        .map((id) => nodeMap.get(id)?.title ?? id)
        .join(' ');
      const rootTitles = track.keyRoots
        .map((id) => nodeMap.get(id)?.title ?? id)
        .join(' ');

      const haystack = [
        track.title,
        track.sector,
        track.dailyWork,
        track.realityNote,
        majorTitles,
        rootTitles,
        ...track.searchKeywords
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(cleaned);
    });
  }, [selectedSector, query, nodeMap]);

  return (
    <section id="karier" className="section-block" aria-labelledby="karier-heading">
      <div className="container">
        <div className="page-intro-header">
          <h1 id="karier-heading" className="intro-title">
            Arah Karier & Profesi Kerja
          </h1>
          <p className="intro-lead">
            Bingung mulai dari mata pelajaran? Balik cara melihatnya: mulai dari bidang kerja atau profesi yang bikin kamu penasaran, lalu lihat program studi dan ilmu dasar apa saja yang bisa mengantarmu ke sana.
          </p>
        </div>

        <div className="roadmap-controls">
          <div className="controls-top-row">
            <div className="search-field-group">
              <label htmlFor="cari-karier" className="field-label">
                Cari profesi, sektor kerja, atau nama prodi
              </label>
              <div className="search-input-wrap">
                <span className="search-icon-slot">
                  <SearchSketchIcon size={18} />
                </span>
                <input
                  id="cari-karier"
                  type="text"
                  className="sketch-input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Contoh: dokter, data, arsitek, k3, diplomat"
                />
                {query && (
                  <button
                    type="button"
                    className="search-clear-btn"
                    onClick={() => setQuery('')}
                    aria-label="Hapus pencarian karier"
                  >
                    <CloseSketchIcon size={16} />
                  </button>
                )}
              </div>
            </div>

            <div className="legend-inline" aria-label="Keterangan jalur prodi">
              <span className="legend-item">
                <span className="legend-line" aria-hidden="true" />
                Jalur prodi utama
              </span>
              <span className="legend-item">
                <span className="legend-line legend-line--dashed" aria-hidden="true" />
                Jalur alternatif / lintas prodi
              </span>
            </div>
          </div>

          <div>
            <p className="filter-group-label">Saring berdasarkan sektor bidang kerja:</p>
            <div className="cluster-filter-bar" role="group" aria-label="Filter sektor karier">
              <button
                type="button"
                className="cluster-chip"
                aria-pressed={selectedSector === null}
                onClick={() => setSelectedSector(null)}
              >
                Semua Sektor ({CAREER_TRACKS.length})
              </button>
              {CAREER_SECTORS.map((sector) => {
                const count = CAREER_TRACKS.filter((t) => t.sector === sector).length;
                return (
                  <button
                    key={sector}
                    type="button"
                    className="cluster-chip"
                    aria-pressed={selectedSector === sector}
                    onClick={() => setSelectedSector(selectedSector === sector ? null : sector)}
                  >
                    {sector} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {filteredTracks.length === 0 ? (
          <div className="state-panel" role="status" aria-live="polite">
            <h2 className="state-panel-title">Jalur karier untuk "{query}" belum ditemukan</h2>
            <p className="state-panel-desc">
              Coba kata kunci yang lebih umum seperti "kesehatan", "data", "desain", "energi", atau "hukum", atau reset filter sektor di atas.
            </p>
            <button
              type="button"
              className="sketch-btn sketch-btn--primary"
              onClick={() => {
                setQuery('');
                setSelectedSector(null);
              }}
            >
              Reset filter karier
            </button>
          </div>
        ) : (
          <div className="career-grid">
            {filteredTracks.map((track) => (
              <article key={track.id} className="career-card">
                <div className="combo-result-top">
                  <span className="combo-group-label">{track.sector}</span>
                </div>
                <h2 className="career-card-title">{track.title}</h2>
                <p className="career-card-desc">{track.dailyWork}</p>

                <div className="career-subblock">
                  <span className="career-sublabel">Program studi yang mengantar ke sini (klik untuk rincian & PTN/PTS):</span>
                  <div className="drawer-chip-list">
                    {track.primaryMajors.map((majorId) => {
                      const majorNode = nodeMap.get(majorId);
                      if (!majorNode) return null;
                      return (
                        <button
                          key={majorId}
                          type="button"
                          className="career-jump-chip"
                          onClick={() => onInspectNode(majorId)}
                        >
                          {majorNode.shortLabel}
                        </button>
                      );
                    })}
                    {track.alternativeMajors.map((majorId) => {
                      const majorNode = nodeMap.get(majorId);
                      if (!majorNode) return null;
                      return (
                        <button
                          key={majorId}
                          type="button"
                          className="career-jump-chip career-jump-chip--alt"
                          onClick={() => onInspectNode(majorId)}
                        >
                          {majorNode.shortLabel} (lintas)
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="career-subblock">
                  <span className="career-sublabel">Ilmu dasar yang perlu disiapkan:</span>
                  <div className="root-tags-row">
                    {track.keyRoots.map((rootId) => {
                      const rootNode = nodeMap.get(rootId);
                      if (!rootNode) return null;
                      return (
                        <button
                          key={rootId}
                          type="button"
                          className="career-root-chip"
                          onClick={() => onHighlightOnMap(rootId)}
                        >
                          <RootSubjectIcon rootId={rootId} size={14} />
                          <span>{rootNode.shortLabel}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <p className="career-reality-note">
                  <strong>Catatan realitas:</strong> {track.realityNote}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
