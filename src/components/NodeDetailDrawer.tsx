import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CAMPUS_REFERENCES } from '../data/campusReferences';
import { KnowledgeEdge, KnowledgeNode, SavedStatus } from '../types/knowledge';
import {
  getDirectDownstream,
  getDirectUpstream,
  getMajorRootContributions
} from '../utils/graphHelpers';
import { AdmissionCalculator } from './AdmissionCalculator';
import { CloseSketchIcon } from './DoodleIcons';

interface NodeDetailDrawerProps {
  node: KnowledgeNode | null;
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  savedStatus: SavedStatus | undefined;
  onSetStatus: (nodeId: string, status: SavedStatus | null) => void;
  onJumpToNode: (nodeId: string) => void;
  onExploreCareer: (searchTerm: string) => void;
  onReportCorrection: (nodeTitle: string) => void;
  onClose: () => void;
}

const LAYER_LABELS: Record<KnowledgeNode['layer'], string> = {
  root: 'Lapisan 1: Ilmu Dasar (SMA/K atau sederajat)',
  pillar: 'Lapisan 2: Pilar Keilmuan',
  major: 'Lapisan 3: Jurusan & Jalur Terapan'
};

const STATUS_OPTIONS: Array<{ value: SavedStatus; label: string }> = [
  { value: 'tertarik', label: 'Tertarik' },
  { value: 'sedang-dipelajari', label: 'Sedang dipelajari' },
  { value: 'paham', label: 'Sudah paham dasar' }
];

export const NodeDetailDrawer: React.FC<NodeDetailDrawerProps> = ({
  node,
  nodes,
  edges,
  savedStatus,
  onSetStatus,
  onJumpToNode,
  onExploreCareer,
  onReportCorrection,
  onClose
}) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string>('');

  useEffect(() => {
    if (!node) return;
    setCopyFeedback('');
    closeBtnRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [node, onClose]);

  const upstream = useMemo(
    () => (node ? getDirectUpstream(node.id, nodes, edges) : []),
    [node, nodes, edges]
  );

  const downstream = useMemo(
    () => (node ? getDirectDownstream(node.id, nodes, edges) : []),
    [node, nodes, edges]
  );

  const majorRoots = useMemo(() => {
    if (!node || node.layer !== 'major') return [];
    return getMajorRootContributions(node.id, nodes, edges)
      .map((rc) => ({
        ...rc,
        rootNode: nodes.find((n) => n.id === rc.rootId)
      }))
      .filter((item) => item.rootNode !== undefined);
  }, [node, nodes, edges]);

  if (!node) return null;

  const handleCopyLink = async () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#node=${node.id}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyFeedback('Tautan disalin ke clipboard.');
    } catch {
      window.location.hash = `node=${node.id}`;
      setCopyFeedback('Tautan dipasang di address bar browser.');
    }
  };

  return (
    <div
      className="drawer-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-node-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="drawer-panel">
        <div className="drawer-header">
          <div>
            <span className="drawer-layer-label">
              {LAYER_LABELS[node.layer]} ({node.group})
            </span>
            <h2 id="drawer-node-title" className="drawer-title">
              {node.title}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Tutup panel rincian"
          >
            <CloseSketchIcon size={20} />
          </button>
        </div>

        <div>
          <p className="drawer-text">{node.summary}</p>
        </div>

        <div className="drawer-callout">
          <h3 className="drawer-section-title">Bagaimana ilmu ini terhubung</h3>
          <p className="drawer-text">{node.howItConnects}</p>
        </div>

        {majorRoots.length > 0 && (
          <div>
            <h3 className="drawer-section-title">Ilmu dasar yang dibutuhkan</h3>
            <div className="drawer-chip-list">
              {majorRoots.map((item) => (
                <button
                  key={item.rootId}
                  type="button"
                  className={[
                    'drawer-jump-btn',
                    item.strength === 'supporting' ? 'drawer-jump-btn--supporting' : ''
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => onJumpToNode(item.rootId)}
                >
                  <span>{item.rootNode!.shortLabel}</span>
                  <span>({item.strength === 'primary' ? 'Utama' : 'Pendukung'})</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {upstream.length > 0 && (
          <div>
            <h3 className="drawer-section-title">
              {node.layer === 'major' ? 'Pilar keilmuan pengantar' : 'Berakar dari ilmu dasar'}
            </h3>
            <div className="drawer-chip-list">
              {upstream.map(({ node: upNode, edge }) => (
                <button
                  key={edge.id}
                  type="button"
                  className={[
                    'drawer-jump-btn',
                    edge.strength === 'supporting' ? 'drawer-jump-btn--supporting' : ''
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => onJumpToNode(upNode.id)}
                >
                  {upNode.shortLabel} ({edge.strength === 'primary' ? 'Utama' : 'Pendukung'})
                </button>
              ))}
            </div>
          </div>
        )}

        {downstream.length > 0 && (
          <div>
            <h3 className="drawer-section-title">
              {node.layer === 'root'
                ? 'Bercabang ke pilar keilmuan'
                : 'Membuka akses ke program studi'}
            </h3>
            <div className="drawer-chip-list">
              {downstream.map(({ node: downNode, edge }) => (
                <button
                  key={edge.id}
                  type="button"
                  className={[
                    'drawer-jump-btn',
                    edge.strength === 'supporting' ? 'drawer-jump-btn--supporting' : ''
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => onJumpToNode(downNode.id)}
                >
                  {downNode.shortLabel}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="drawer-section-title">Topik inti yang akan ditemui</h3>
          <ul className="drawer-bullet-list">
            {node.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="drawer-section-title">
            {node.layer === 'major' ? 'Ringkasan arah kerja' : 'Arah yang terbuka dari sini'}
          </h3>
          <ul className="drawer-bullet-list">
            {node.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {node.layer === 'major' && (
            <div className="drawer-career-link-row">
              <button
                type="button"
                className="sketch-btn sketch-btn--ghost"
                onClick={() => onExploreCareer(node.shortLabel)}
              >
                Lihat jalur karier lengkap untuk prodi ini
              </button>
            </div>
          )}
        </div>

        <div className="drawer-callout">
          <h3 className="drawer-section-title">Catatan untuk pelajar SMA/K atau sederajat</h3>
          <p className="drawer-text">{node.smaTip}</p>
        </div>

        {node.layer === 'major' && CAMPUS_REFERENCES[node.id] && (
          <AdmissionCalculator
            nodeId={node.id}
            majorTitle={node.title}
            reference={CAMPUS_REFERENCES[node.id]}
          />
        )}

        <div>
          <h3 className="drawer-section-title">Simpan di catatan belajarmu</h3>
          <div className="status-picker" role="group" aria-label="Status catatan untuk bidang ini">
            {STATUS_OPTIONS.map((option) => {
              const isSelected = savedStatus === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  className="status-pill-btn"
                  aria-pressed={isSelected}
                  onClick={() => onSetStatus(node.id, isSelected ? null : option.value)}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="combo-card-actions">
          <button type="button" className="sketch-btn" onClick={handleCopyLink}>
            Salin tautan bidang ini
          </button>
          <button
            type="button"
            className="sketch-btn sketch-btn--ghost"
            onClick={() => onReportCorrection(node.title)}
          >
            Kirim koreksi / masukan
          </button>
          {copyFeedback && (
            <span className="drawer-text" role="status" aria-live="polite">
              {copyFeedback}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
