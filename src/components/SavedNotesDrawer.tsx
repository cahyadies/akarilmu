import React, { useEffect, useRef } from 'react';
import { KnowledgeNode, SavedNoteMap, SavedStatus } from '../types/knowledge';
import { CloseSketchIcon } from './DoodleIcons';

interface SavedNotesDrawerProps {
  isOpen: boolean;
  nodes: KnowledgeNode[];
  savedNotes: SavedNoteMap;
  onInspectNode: (nodeId: string) => void;
  onRemoveNote: (nodeId: string) => void;
  onClearAll: () => void;
  onGoToMap: () => void;
  onClose: () => void;
}

const STATUS_HEADINGS: Array<{ key: SavedStatus; label: string }> = [
  { key: 'tertarik', label: 'Tertarik untuk dijelajahi' },
  { key: 'sedang-dipelajari', label: 'Sedang dipelajari' },
  { key: 'paham', label: 'Sudah paham dasarnya' }
];

export const SavedNotesDrawer: React.FC<SavedNotesDrawerProps> = ({
  isOpen,
  nodes,
  savedNotes,
  onInspectNode,
  onRemoveNote,
  onClearAll,
  onGoToMap,
  onClose
}) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeBtnRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const entries = Object.entries(savedNotes)
    .map(([id, status]) => ({
      node: nodes.find((n) => n.id === id),
      status
    }))
    .filter((item): item is { node: KnowledgeNode; status: SavedStatus } => item.node !== undefined);

  return (
    <div
      className="drawer-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="saved-drawer-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="drawer-panel">
        <div className="drawer-header">
          <div>
            <span className="drawer-layer-label">Tersimpan di browser ini</span>
            <h2 id="saved-drawer-title" className="drawer-title">
              Catatan Jalur Saya ({entries.length})
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Tutup panel catatan saya"
          >
            <CloseSketchIcon size={20} />
          </button>
        </div>

        {entries.length === 0 ? (
          <div className="state-panel">
            <h3 className="state-panel-title">Belum ada bidang yang ditandai</h3>
            <p className="state-panel-desc">
              Klik kotak ilmu dasar atau jurusan di peta, lalu pilih status "Tertarik", "Sedang dipelajari", atau "Sudah paham dasar" untuk menyimpannya di sini.
            </p>
            <button
              type="button"
              className="sketch-btn sketch-btn--primary"
              onClick={onGoToMap}
            >
              Ke peta keilmuan
            </button>
          </div>
        ) : (
          <>
            {STATUS_HEADINGS.map((group) => {
              const groupItems = entries.filter((e) => e.status === group.key);
              if (groupItems.length === 0) return null;
              return (
                <div key={group.key}>
                  <h3 className="drawer-section-title">
                    {group.label} ({groupItems.length})
                  </h3>
                  <div className="mobile-node-stack">
                    {groupItems.map(({ node }) => (
                      <div key={node.id} className="combo-result-card">
                        <div className="combo-result-top">
                          <h4 className="combo-result-title">{node.title}</h4>
                          <span className="combo-group-label">{node.group}</span>
                        </div>
                        <div className="combo-card-actions">
                          <button
                            type="button"
                            className="sketch-btn"
                            onClick={() => {
                              onClose();
                              onInspectNode(node.id);
                            }}
                          >
                            Buka rincian
                          </button>
                          <button
                            type="button"
                            className="sketch-btn sketch-btn--ghost"
                            onClick={() => onRemoveNote(node.id)}
                          >
                            Hapus tanda
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <div>
              <button
                type="button"
                className="sketch-btn sketch-btn--ghost"
                onClick={onClearAll}
              >
                Bersihkan semua catatan tersimpan
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
