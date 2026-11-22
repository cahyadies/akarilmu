import React, { useMemo, useState } from 'react';
import { KnowledgeEdge, KnowledgeNode } from '../types/knowledge';
import { findMajorsByRootCombo } from '../utils/graphHelpers';
import { CheckSketchIcon, RootSubjectIcon } from './DoodleIcons';

interface ComboWorkbenchProps {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  onInspectMajor: (majorId: string) => void;
  onHighlightOnMap: (majorId: string) => void;
}

const PRESETS: Array<{ label: string; roots: string[] }> = [
  { label: 'Biologi + Kimia', roots: ['biologi', 'kimia'] },
  { label: 'Fisika + Matematika', roots: ['fisika', 'matematika'] },
  { label: 'Geografi + Fisika', roots: ['geografi', 'fisika'] },
  { label: 'Seni + Sosiologi', roots: ['seni', 'sosiologi'] },
  { label: 'Matematika + Ekonomi', roots: ['matematika', 'ekonomi'] },
  { label: 'Bahasa + Matematika', roots: ['bahasa', 'matematika'] }
];

export const ComboWorkbench: React.FC<ComboWorkbenchProps> = ({
  nodes,
  edges,
  onInspectMajor,
  onHighlightOnMap
}) => {
  const [selectedRoots, setSelectedRoots] = useState<string[]>(['biologi', 'kimia']);
  const [limitNotice, setLimitNotice] = useState<string>('');

  const roots = useMemo(() => nodes.filter((n) => n.layer === 'root'), [nodes]);

  const { exactMatches, partialMatches } = useMemo(
    () => findMajorsByRootCombo(selectedRoots, nodes, edges),
    [selectedRoots, nodes, edges]
  );

  const toggleRoot = (rootId: string) => {
    setLimitNotice('');
    setSelectedRoots((prev) => {
      if (prev.includes(rootId)) {
        return prev.filter((id) => id !== rootId);
      }
      if (prev.length >= 3) {
        setLimitNotice('Maksimal 3 mata pelajaran sekaligus agar hasil persimpangan tetap fokus.');
        return prev;
      }
      return [...prev, rootId];
    });
  };

  const selectedNames = selectedRoots
    .map((id) => roots.find((r) => r.id === id)?.shortLabel)
    .filter(Boolean)
    .join(' + ');

  return (
    <section id="kombinasi" className="section-block" aria-labelledby="kombinasi-heading">
      <div className="container">
        <div className="page-intro-header">
          <h1 id="kombinasi-heading" className="intro-title">
            Cek Persimpangan Ilmu Dasar
          </h1>
          <p className="intro-lead">
            Banyak program studi di Indonesia lahir dari pertemuan dua atau tiga pelajaran sekaligus. Pilih 1 sampai 3 pelajaran dasar SMA/K atau sederajat yang kamu sukai atau kuasai, lalu lihat prodi apa saja yang mempertemukannya.
          </p>
        </div>

        <div className="combo-layout">
          <div className="combo-picker-box">
            <h2 className="combo-picker-title">Pilih 1 sampai 3 ilmu dasar</h2>
            <p className="combo-picker-sub">
              Terpilih sekarang: {selectedRoots.length > 0 ? selectedNames : 'belum ada'}
            </p>

            <div className="combo-checkbox-grid" role="group" aria-label="Pilihan kombinasi ilmu dasar">
              {roots.map((root) => {
                const isSelected = selectedRoots.includes(root.id);
                return (
                  <button
                    key={root.id}
                    type="button"
                    className="combo-toggle"
                    aria-pressed={isSelected}
                    onClick={() => toggleRoot(root.id)}
                  >
                    <span className="tree-node-title">
                      <RootSubjectIcon rootId={root.id} size={16} />
                      <span>{root.shortLabel}</span>
                    </span>
                    {isSelected && <CheckSketchIcon size={16} />}
                  </button>
                );
              })}
            </div>

            {limitNotice && (
              <p className="preview-footnote" role="status" aria-live="polite">
                {limitNotice}
              </p>
            )}

            <div className="combo-preset-row">
              <span className="preset-label">Contoh cepat:</span>
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  className="preset-btn"
                  onClick={() => {
                    setLimitNotice('');
                    setSelectedRoots(preset.roots);
                  }}
                >
                  {preset.label}
                </button>
              ))}
              {selectedRoots.length > 0 && (
                <button
                  type="button"
                  className="preset-btn"
                  onClick={() => {
                    setLimitNotice('');
                    setSelectedRoots([]);
                  }}
                >
                  Kosongkan pilihan
                </button>
              )}
            </div>
          </div>

          <div className="combo-results-col">
            {selectedRoots.length === 0 ? (
              <div className="state-panel" role="status">
                <h2 className="state-panel-title">Belum ada pelajaran yang dipilih</h2>
                <p className="state-panel-desc">
                  Pilih minimal 1 mata pelajaran di panel sebelah kiri untuk melihat program studi yang membutuhkannya.
                </p>
                <button
                  type="button"
                  className="sketch-btn sketch-btn--primary"
                  onClick={() => setSelectedRoots(['biologi', 'kimia'])}
                >
                  Coba contoh Biologi + Kimia
                </button>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="combo-group-heading">
                    {selectedRoots.length === 1
                      ? `Prodi yang bertumpu pada ${selectedNames} (${exactMatches.length})`
                      : `Persimpangan langsung ${selectedNames} (${exactMatches.length})`}
                  </h2>

                  {exactMatches.length === 0 ? (
                    <div className="state-panel" role="status">
                      <p className="state-panel-title">
                        Belum ada satu prodi tunggal yang menggabungkan semuanya sekaligus
                      </p>
                      <p className="state-panel-desc">
                        Kombinasi {selectedNames} cukup jarang disatukan dalam satu jurusan S1 standar. Kurangi satu pilihan atau lihat jalur terkait di bawah yang memakai sebagian fondasimu.
                      </p>
                    </div>
                  ) : (
                    <div className="combo-card-list">
                      <div className="combo-tag-legend" aria-label="Keterangan warna label pelajaran">
                        <span className="combo-legend-prefix">Arti label:</span>
                        <span className="root-tag root-tag--matched">
                          <CheckSketchIcon size={13} />
                          <span>Pilihanmu</span>
                        </span>
                        <span className="root-tag root-tag--primary">Fondasi utama lain</span>
                        <span className="root-tag">Pendukung lain</span>
                      </div>
                      {exactMatches.map(({ major, allRoots }) => (
                        <article key={major.id} className="combo-result-card combo-result-card--exact">
                          <div className="combo-result-top">
                            <h3 className="combo-result-title">{major.title}</h3>
                            <span className="combo-group-label">
                              {major.cluster ? `${major.cluster} (${major.group})` : major.group}
                            </span>
                          </div>
                          <p className="combo-result-desc">{major.howItConnects}</p>
                          <div className="root-tags-row">
                            {allRoots.map((rc) => {
                              const rootLabel = roots.find((r) => r.id === rc.rootId)?.shortLabel ?? rc.rootId;
                              const isMatched = selectedRoots.includes(rc.rootId);
                              return (
                                <span
                                  key={rc.rootId}
                                  className={[
                                    'root-tag',
                                    rc.strength === 'primary' ? 'root-tag--primary' : '',
                                    isMatched ? 'root-tag--matched' : ''
                                  ]
                                    .filter(Boolean)
                                    .join(' ')}
                                >
                                  {isMatched && <CheckSketchIcon size={13} />}
                                  <span>
                                    {rootLabel}: {rc.strength === 'primary' ? 'Utama' : 'Pendukung'}
                                  </span>
                                </span>
                              );
                            })}
                          </div>
                          <div className="combo-card-actions">
                            <button
                              type="button"
                              className="sketch-btn"
                              onClick={() => onInspectMajor(major.id)}
                            >
                              Lihat rincian prodi
                            </button>
                            <button
                              type="button"
                              className="sketch-btn sketch-btn--ghost"
                              onClick={() => onHighlightOnMap(major.id)}
                            >
                              Sorot di Peta Keilmuan
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </div>

                {partialMatches.length > 0 && (
                  <div>
                    <h2 className="combo-group-heading">
                      Prodi terkait lainnya (memakai sebagian pilihanmu)
                    </h2>
                    <div className="combo-card-list">
                      {partialMatches.slice(0, 6).map(({ major, allRoots }) => (
                        <article key={major.id} className="combo-result-card">
                          <div className="combo-result-top">
                            <h3 className="combo-result-title">{major.title}</h3>
                            <span className="combo-group-label">
                              {major.cluster ?? major.group}
                            </span>
                          </div>
                          <p className="combo-result-desc">{major.summary}</p>
                          <div className="root-tags-row">
                            {allRoots.map((rc) => {
                              const rootLabel = roots.find((r) => r.id === rc.rootId)?.shortLabel ?? rc.rootId;
                              const isMatched = selectedRoots.includes(rc.rootId);
                              return (
                                <span
                                  key={rc.rootId}
                                  className={[
                                    'root-tag',
                                    isMatched ? 'root-tag--matched' : ''
                                  ]
                                    .filter(Boolean)
                                    .join(' ')}
                                >
                                  {isMatched && <CheckSketchIcon size={13} />}
                                  <span>{rootLabel}</span>
                                </span>
                              );
                            })}
                          </div>
                          <div className="combo-card-actions">
                            <button
                              type="button"
                              className="sketch-btn sketch-btn--ghost"
                              onClick={() => onInspectMajor(major.id)}
                            >
                              Lihat rincian
                            </button>
                            <button
                              type="button"
                              className="sketch-btn sketch-btn--ghost"
                              onClick={() => onHighlightOnMap(major.id)}
                            >
                              Sorot di Peta
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
