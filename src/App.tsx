import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CareerExplorer } from './components/CareerExplorer';
import { ComboWorkbench } from './components/ComboWorkbench';
import {
  BookmarkSketchIcon,
  BriefcaseSketchIcon,
  ChalkboardIcon,
  ComboSketchIcon,
  GuideSketchIcon,
  RootMarkIcon,
  SketchUnderline,
  SunSketchIcon
} from './components/DoodleIcons';
import { FeedbackCategory, FeedbackModal } from './components/FeedbackModal';
import { GuideModal } from './components/GuideModal';
import { NodeDetailDrawer } from './components/NodeDetailDrawer';
import { RoadmapCanvas } from './components/RoadmapCanvas';
import { SavedNotesDrawer } from './components/SavedNotesDrawer';
import {
  MapLayoutMode,
  MapModeSwitcher,
  VerticalTreeCanvas
} from './components/VerticalTreeCanvas';
import { KNOWLEDGE_EDGES, KNOWLEDGE_NODES } from './data/knowledgeGraph';
import { ProdiCluster, SavedNoteMap, SavedStatus } from './types/knowledge';

type ThemeMode = 'light' | 'dark';
type ActivePage = 'kombinasi' | 'peta' | 'karier';

const STORAGE_NOTES_KEY = 'akarilmu-saved-notes';
const STORAGE_THEME_KEY = 'akarilmu-theme';

function loadInitialTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(STORAGE_THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    return 'light';
  }
  return 'light';
}

function loadInitialPage(): ActivePage {
  if (typeof window !== 'undefined') {
    if (window.location.hash === '#peta') return 'peta';
    if (window.location.hash === '#karier') return 'karier';
  }
  return 'kombinasi';
}

function loadInitialNotes(): { notes: SavedNoteMap; loadError: string | null } {
  try {
    const raw = localStorage.getItem(STORAGE_NOTES_KEY);
    if (!raw) return { notes: {}, loadError: null };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return { notes: parsed as SavedNoteMap, loadError: null };
    }
    return { notes: {}, loadError: 'Format catatan tersimpan di browser tidak valid dan telah direset.' };
  } catch {
    return { notes: {}, loadError: 'Gagal membaca catatan tersimpan dari penyimpanan lokal browser.' };
  }
}

export function App() {
  const [theme, setTheme] = useState<ThemeMode>(loadInitialTheme);
  const [activePage, setActivePage] = useState<ActivePage>(loadInitialPage);
  const [mapLayoutMode, setMapLayoutMode] = useState<MapLayoutMode>('tree-focused');
  const [selectedTreeRootId, setSelectedTreeRootId] = useState<string>('matematika');
  const [selectedTreePillarId, setSelectedTreePillarId] = useState<string | null>(null);

  const [guideModalOpen, setGuideModalOpen] = useState(false);
  const [feedbackModal, setFeedbackModal] = useState<{
    isOpen: boolean;
    category: FeedbackCategory;
    contextLabel: string;
  }>({
    isOpen: false,
    category: 'Apresiasi & pesan semangat',
    contextLabel: ''
  });

  const initialNotesResult = useMemo(() => loadInitialNotes(), []);
  const [savedNotes, setSavedNotes] = useState<SavedNoteMap>(initialNotesResult.notes);
  const [systemNotice, setSystemNotice] = useState<string | null>(initialNotesResult.loadError);

  const [activeRootFilter, setActiveRootFilter] = useState<string | null>(null);
  const [activeCluster, setActiveCluster] = useState<ProdiCluster | null>(null);
  const [focusedNodeId, setFocusedNodeId] = useState<string | null>(null);
  const [detailNodeId, setDetailNodeId] = useState<string | null>(null);
  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [careerSearchSeed, setCareerSearchSeed] = useState('');

  const lastTriggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_THEME_KEY, theme);
    } catch {
      // Ignore storage write restriction in private browsing modes.
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(savedNotes));
    } catch {
      setSystemNotice('Catatan belum bisa disimpan permanen karena penyimpanan browser dibatasi.');
    }
  }, [savedNotes]);

  const navigateToPage = useCallback((page: ActivePage, scrollToTop = true) => {
    setActivePage(page);
    const targetHash =
      page === 'kombinasi' ? '#kombinasi' : page === 'karier' ? '#karier' : '#peta';
    if (window.location.hash !== targetHash) {
      window.history.replaceState(null, '', `${window.location.pathname}${targetHash}`);
    }
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const syncTreeSelectionForNode = useCallback((nodeId: string) => {
    const target = KNOWLEDGE_NODES.find((n) => n.id === nodeId);
    if (!target) return;
    if (target.layer === 'root') {
      setSelectedTreeRootId(target.id);
      setSelectedTreePillarId(null);
    } else if (target.layer === 'pillar') {
      const rEdge =
        KNOWLEDGE_EDGES.find((e) => e.to === target.id && e.strength === 'primary') ??
        KNOWLEDGE_EDGES.find((e) => e.to === target.id);
      if (rEdge) setSelectedTreeRootId(rEdge.from);
      setSelectedTreePillarId(target.id);
    } else {
      const pEdge =
        KNOWLEDGE_EDGES.find((e) => e.to === target.id && e.strength === 'primary') ??
        KNOWLEDGE_EDGES.find((e) => e.to === target.id);
      if (pEdge) {
        const rEdge =
          KNOWLEDGE_EDGES.find((e) => e.to === pEdge.from && e.strength === 'primary') ??
          KNOWLEDGE_EDGES.find((e) => e.to === pEdge.from);
        if (rEdge) setSelectedTreeRootId(rEdge.from);
        setSelectedTreePillarId(pEdge.from);
      }
    }
  }, []);

  const syncFromHash = useCallback(() => {
    const hash = window.location.hash;
    if (hash === '#peta') {
      setActivePage('peta');
      return;
    }
    if (hash === '#karier') {
      setActivePage('karier');
      return;
    }
    if (hash === '#kombinasi' || hash === '#atas' || hash === '') {
      setActivePage('kombinasi');
      return;
    }
    if (!hash.startsWith('#node=')) return;

    const targetId = decodeURIComponent(hash.slice('#node='.length));
    const found = KNOWLEDGE_NODES.find((n) => n.id === targetId);
    if (found) {
      setSystemNotice(null);
      syncTreeSelectionForNode(found.id);
      setFocusedNodeId(found.id);
      setDetailNodeId(found.id);
    } else if (targetId) {
      setSystemNotice(
        `Bidang dengan tautan "${targetId}" tidak ditemukan di peta ini. Kamu tetap bisa mencarinya lewat kolom pencarian.`
      );
    }
  }, [syncTreeSelectionForNode]);

  useEffect(() => {
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [syncFromHash]);

  const openDetailForNode = useCallback((nodeId: string) => {
    lastTriggerRef.current = document.activeElement as HTMLElement | null;
    setFocusedNodeId(nodeId);
    setDetailNodeId(nodeId);
  }, []);

  const closeDetailDrawer = useCallback(() => {
    setDetailNodeId(null);
    if (window.location.hash.startsWith('#node=')) {
      const fallbackHash =
        activePage === 'kombinasi' ? '#kombinasi' : activePage === 'karier' ? '#karier' : '#peta';
      window.history.replaceState(null, '', `${window.location.pathname}${fallbackHash}`);
    }
    window.requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  }, [activePage]);

  const handleExploreCareerFromDrawer = useCallback(
    (searchTerm: string) => {
      setDetailNodeId(null);
      setCareerSearchSeed(searchTerm);
      navigateToPage('karier', true);
    },
    [navigateToPage]
  );

  const openGuideModal = useCallback(() => {
    lastTriggerRef.current = document.activeElement as HTMLElement | null;
    setGuideModalOpen(true);
  }, []);

  const closeGuideModal = useCallback(() => {
    setGuideModalOpen(false);
    window.requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  }, []);

  const openFeedbackModal = useCallback(
    (category: FeedbackCategory = 'Apresiasi & pesan semangat', contextLabel = '') => {
      lastTriggerRef.current = document.activeElement as HTMLElement | null;
      setGuideModalOpen(false);
      setDetailNodeId(null);
      setFeedbackModal({ isOpen: true, category, contextLabel });
    },
    []
  );

  const closeFeedbackModal = useCallback(() => {
    setFeedbackModal((prev) => ({ ...prev, isOpen: false }));
    window.requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  }, []);

  const handleHighlightOnMap = useCallback(
    (nodeId: string) => {
      syncTreeSelectionForNode(nodeId);
      setActiveRootFilter(null);
      setActiveCluster(null);
      setSearchQuery('');
      setFocusedNodeId(nodeId);
      setActivePage('peta');
      window.history.replaceState(null, '', `${window.location.pathname}#peta`);

      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },
    [syncTreeSelectionForNode]
  );

  const handleSetStatus = useCallback((nodeId: string, status: SavedStatus | null) => {
    setSavedNotes((prev) => {
      const next = { ...prev };
      if (status === null) {
        delete next[nodeId];
      } else {
        next[nodeId] = status;
      }
      return next;
    });
  }, []);

  const handleClearAllNotes = useCallback(() => {
    setSavedNotes({});
    setSystemNotice('Semua catatan jalur yang tersimpan di browser telah dibersihkan.');
  }, []);

  const detailNode = useMemo(
    () => (detailNodeId ? KNOWLEDGE_NODES.find((n) => n.id === detailNodeId) ?? null : null),
    [detailNodeId]
  );

  const savedCount = Object.keys(savedNotes).length;

  return (
    <div id="atas" className="app-shell">
      <a href="#konten-utama" className="skip-link">
        Langsung ke konten utama
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#kombinasi"
            className="brand-link"
            onClick={(e) => {
              e.preventDefault();
              setFocusedNodeId(null);
              setActiveRootFilter(null);
              setActiveCluster(null);
              navigateToPage('kombinasi', true);
            }}
          >
            <RootMarkIcon size={28} />
            <span className="brand-name">AkarIlmu</span>
          </a>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            <a
              href="#kombinasi"
              className="nav-link"
              aria-current={activePage === 'kombinasi' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                navigateToPage('kombinasi', true);
              }}
            >
              Cek Kombinasi
            </a>
            <a
              href="#peta"
              className="nav-link"
              aria-current={activePage === 'peta' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                navigateToPage('peta', true);
              }}
            >
              Peta Keilmuan
            </a>
            <a
              href="#karier"
              className="nav-link"
              aria-current={activePage === 'karier' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                setCareerSearchSeed('');
                navigateToPage('karier', true);
              }}
            >
              Arah Karier
            </a>
            <button
              type="button"
              className="nav-link nav-action-btn"
              aria-haspopup="dialog"
              aria-expanded={guideModalOpen}
              onClick={openGuideModal}
            >
              Cara Membaca
            </button>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="sketch-btn"
              onClick={() => {
                lastTriggerRef.current = document.activeElement as HTMLElement | null;
                setSavedDrawerOpen(true);
              }}
              aria-label={`Buka catatan jalur saya, ${savedCount} tersimpan`}
            >
              <BookmarkSketchIcon size={17} />
              <span className="saved-label-text">Catatan</span>
              <span className="saved-count">{savedCount}</span>
            </button>

            <button
              type="button"
              className="sketch-btn sketch-btn--ghost theme-icon-btn"
              onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
              title={theme === 'light' ? 'Ganti ke mode papan gelap' : 'Ganti ke mode kertas terang'}
              aria-label={
                theme === 'light'
                  ? 'Ganti ke mode papan tulis gelap'
                  : 'Ganti ke mode kertas sketsa terang'
              }
            >
              {theme === 'light' ? <ChalkboardIcon size={19} /> : <SunSketchIcon size={19} />}
            </button>
          </div>
        </div>
      </header>

      <main id="konten-utama" className="app-main">
        {systemNotice && (
          <div className="container">
            <div className="status-banner" role="alert">
              <span>{systemNotice}</span>
              <button
                type="button"
                className="sketch-btn sketch-btn--ghost"
                onClick={() => {
                  setSystemNotice(null);
                  if (window.location.hash.startsWith('#node=')) {
                    window.history.replaceState(null, '', window.location.pathname);
                  }
                }}
              >
                Tutup pesan
              </button>
            </div>
          </div>
        )}

        {activePage === 'kombinasi' ? (
          <div className="v2-landing-combo">
            <section className="intro-section" aria-labelledby="hero-heading">
              <div className="container intro-grid">
                <div>
                  <h1 id="hero-heading" className="intro-title">
                    Dari satu{' '}
                    <span className="underline-wrap">
                      ilmu dasar
                      <SketchUnderline className="underline-svg" />
                    </span>
                    , ke mana saja kamu bisa melangkah?
                  </h1>
                  <p className="intro-lead">
                    Banyak pelajar SMA/K atau sederajat bingung memilih jurusan kuliah karena pelajaran sekolah terasa terpisah-pisah. Pilih 1 sampai 3 pelajaran favoritmu di bawah untuk langsung melihat 60+ program studi di Indonesia yang mempertemukannya.
                  </p>
                  <div className="intro-actions">
                    <a href="#kombinasi" className="sketch-btn sketch-btn--primary">
                      Cek Kombinasi Pelajaran
                    </a>
                    <a
                      href="#peta"
                      className="sketch-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToPage('peta', true);
                      }}
                    >
                      Lihat Peta Pohon Keilmuan
                    </a>
                    <button
                      type="button"
                      className="sketch-btn sketch-btn--ghost"
                      onClick={openGuideModal}
                    >
                      Cara Membaca
                    </button>
                  </div>
                </div>

                <aside className="preview-sketch-card" aria-label="Contoh persimpangan Biologi dan Kimia">
                  <p className="preview-caption">Contoh nyata: dua ilmu bertemu</p>
                  <div className="preview-diagram">
                    <div className="preview-col">
                      <button
                        type="button"
                        className="preview-node preview-node--root"
                        onClick={() => openDetailForNode('biologi')}
                      >
                        <span>Biologi</span>
                        <span className="tree-node-meta">Akar</span>
                      </button>
                      <button
                        type="button"
                        className="preview-node preview-node--root"
                        onClick={() => openDetailForNode('kimia')}
                      >
                        <span>Kimia</span>
                        <span className="tree-node-meta">Akar</span>
                      </button>
                    </div>

                    <svg
                      className="preview-arrow-svg"
                      viewBox="0 0 44 112"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 28 C 20 28, 22 20, 42 20"
                        stroke="var(--ink-blue)"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 28 C 18 32, 24 56, 42 56"
                        stroke="var(--ink-blue)"
                        strokeWidth="2.1"
                      />
                      <path
                        d="M2 84 C 18 80, 24 22, 42 22"
                        stroke="var(--accent)"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 84 C 20 84, 24 58, 42 58"
                        stroke="var(--accent)"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 84 C 20 84, 22 92, 42 92"
                        stroke="var(--accent)"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 28 C 16 40, 26 90, 42 90"
                        stroke="var(--ink-blue)"
                        strokeWidth="1.7"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="preview-col">
                      <button
                        type="button"
                        className="preview-node preview-node--major"
                        onClick={() => openDetailForNode('kedokteran')}
                      >
                        <span>Kedokteran</span>
                        <span className="tree-node-meta">Bio + Kim</span>
                      </button>
                      <button
                        type="button"
                        className="preview-node preview-node--major"
                        onClick={() => openDetailForNode('farmasi')}
                      >
                        <span>Farmasi</span>
                        <span className="tree-node-meta">Kim + Bio</span>
                      </button>
                      <button
                        type="button"
                        className="preview-node preview-node--major"
                        onClick={() => openDetailForNode('teknologi-pangan')}
                      >
                        <span>Tek. Pangan</span>
                        <span className="tree-node-meta">Bio + Kim</span>
                      </button>
                    </div>
                  </div>
                  <p className="preview-footnote">
                    Klik kotak mana saja di atas untuk langsung membuka rincian topik dan hubungannya.
                  </p>
                </aside>
              </div>
            </section>

            <ComboWorkbench
              nodes={KNOWLEDGE_NODES}
              edges={KNOWLEDGE_EDGES}
              onInspectMajor={openDetailForNode}
              onHighlightOnMap={handleHighlightOnMap}
            />
          </div>
        ) : activePage === 'peta' ? (
          mapLayoutMode === 'horizontal-columns' ? (
            <div className="legacy-map-wrap">
              <div className="container" style={{ paddingTop: '2.2rem', marginBottom: '-1.5rem' }}>
                <div className="vtree-header-bar">
                  <div className="page-intro-header" style={{ marginBottom: 0 }}>
                    <h1 className="intro-title">
                      Peta Cabang Keilmuan (60+ Prodi di Indonesia)
                    </h1>
                    <p className="intro-lead">
                      Saring dari kiri lewat ilmu dasar SMA/K atau sederajat, dari klaster fakultas, atau klik langsung kotak prodi untuk menelusuri seluruh jalur fondasinya.
                    </p>
                  </div>
                  <MapModeSwitcher
                    layoutMode={mapLayoutMode}
                    onChangeLayoutMode={setMapLayoutMode}
                  />
                </div>
              </div>
              <RoadmapCanvas
                nodes={KNOWLEDGE_NODES}
                edges={KNOWLEDGE_EDGES}
                activeRootFilter={activeRootFilter}
                onSelectRootFilter={setActiveRootFilter}
                activeCluster={activeCluster}
                onSelectCluster={setActiveCluster}
                focusedNodeId={focusedNodeId}
                onFocusNode={setFocusedNodeId}
                onOpenDetail={openDetailForNode}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                savedNotes={savedNotes}
              />
            </div>
          ) : (
            <VerticalTreeCanvas
              nodes={KNOWLEDGE_NODES}
              edges={KNOWLEDGE_EDGES}
              selectedRootId={selectedTreeRootId}
              onSelectRoot={setSelectedTreeRootId}
              selectedPillarId={selectedTreePillarId}
              onSelectPillar={setSelectedTreePillarId}
              layoutMode={mapLayoutMode}
              onChangeLayoutMode={setMapLayoutMode}
              onOpenDetail={openDetailForNode}
              savedNotes={savedNotes}
            />
          )
        ) : (
          <CareerExplorer
            key={careerSearchSeed}
            nodes={KNOWLEDGE_NODES}
            initialSearch={careerSearchSeed}
            onInspectNode={openDetailForNode}
            onHighlightOnMap={handleHighlightOnMap}
          />
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-brand-row">
              <span className="brand-name">AkarIlmu</span>
              <span className="footer-tagline">Kenali akarnya, lihat cabangnya.</span>
            </div>
            <p className="footer-note">
              Referensi awal terbuka untuk membantu pelajar SMA/K atau sederajat melihat hubungan antara 10 ilmu dasar, 60+ program studi di Indonesia, dan arah kariernya.
            </p>
            <p className="footer-disclaimer">
              <strong>Disclaimer:</strong> Website ini dibuat dengan bantuan AI berdasarkan referensi umum program studi di Indonesia dan hanya berfungsi sebagai gambaran awal (bukan acuan resmi kampus atau panitia seleksi). Menemukan kekeliruan atau punya masukan? Silakan kirim DM atau coret-coret di kolom komentar, ya!
            </p>
            <p className="footer-credit">
              Catatan kaki: Eksperimen terbuka oleh{' '}
              <a
                href="https://mentayasandbox.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="credit-link"
              >
                MentayaSandbox
              </a>
              .
            </p>
          </div>
          <div className="footer-actions">
            <button
              type="button"
              className="sketch-btn sketch-btn--primary"
              onClick={() => openFeedbackModal('Apresiasi & pesan semangat', '')}
            >
              Kirim Masukan / Apresiasi
            </button>
            <button
              type="button"
              className="sketch-btn sketch-btn--ghost"
              onClick={openGuideModal}
            >
              Cara Membaca
            </button>
            <a href="#atas" className="sketch-btn sketch-btn--ghost">
              Kembali ke atas
            </a>
            {savedCount > 0 && (
              <button
                type="button"
                className="sketch-btn sketch-btn--ghost"
                onClick={handleClearAllNotes}
              >
                Hapus catatan ({savedCount})
              </button>
            )}
          </div>
        </div>
      </footer>

      <nav className="mobile-bottom-nav" aria-label="Navigasi utama ponsel">
        <a
          href="#kombinasi"
          className="mobile-bottom-item"
          aria-current={activePage === 'kombinasi' ? 'page' : undefined}
          onClick={(e) => {
            e.preventDefault();
            navigateToPage('kombinasi', true);
          }}
        >
          <ComboSketchIcon size={20} />
          <span>Kombinasi</span>
        </a>
        <a
          href="#peta"
          className="mobile-bottom-item"
          aria-current={activePage === 'peta' ? 'page' : undefined}
          onClick={(e) => {
            e.preventDefault();
            navigateToPage('peta', true);
          }}
        >
          <RootMarkIcon size={20} />
          <span>Peta</span>
        </a>
        <a
          href="#karier"
          className="mobile-bottom-item"
          aria-current={activePage === 'karier' ? 'page' : undefined}
          onClick={(e) => {
            e.preventDefault();
            setCareerSearchSeed('');
            navigateToPage('karier', true);
          }}
        >
          <BriefcaseSketchIcon size={20} />
          <span>Karier</span>
        </a>
        <button
          type="button"
          className="mobile-bottom-item"
          aria-haspopup="dialog"
          aria-expanded={guideModalOpen}
          onClick={openGuideModal}
        >
          <GuideSketchIcon size={20} />
          <span>Panduan</span>
        </button>
      </nav>

      <GuideModal
        isOpen={guideModalOpen}
        onClose={closeGuideModal}
        onGoToPage={(page) => navigateToPage(page, true)}
        onOpenFeedback={() => openFeedbackModal('Apresiasi & pesan semangat', '')}
      />

      <FeedbackModal
        isOpen={feedbackModal.isOpen}
        initialCategory={feedbackModal.category}
        contextLabel={feedbackModal.contextLabel}
        onClose={closeFeedbackModal}
      />

      <NodeDetailDrawer
        node={detailNode}
        nodes={KNOWLEDGE_NODES}
        edges={KNOWLEDGE_EDGES}
        savedStatus={detailNode ? savedNotes[detailNode.id] : undefined}
        onSetStatus={handleSetStatus}
        onJumpToNode={(id) => {
          syncTreeSelectionForNode(id);
          setFocusedNodeId(id);
          setDetailNodeId(id);
        }}
        onExploreCareer={handleExploreCareerFromDrawer}
        onReportCorrection={(nodeTitle) => openFeedbackModal('Koreksi data prodi', nodeTitle)}
        onClose={closeDetailDrawer}
      />

      <SavedNotesDrawer
        isOpen={savedDrawerOpen}
        nodes={KNOWLEDGE_NODES}
        savedNotes={savedNotes}
        onInspectNode={openDetailForNode}
        onRemoveNote={(id) => handleSetStatus(id, null)}
        onClearAll={handleClearAllNotes}
        onGoToMap={() => {
          setSavedDrawerOpen(false);
          navigateToPage('peta', true);
        }}
        onClose={() => {
          setSavedDrawerOpen(false);
          window.requestAnimationFrame(() => {
            lastTriggerRef.current?.focus();
          });
        }}
      />
    </div>
  );
}

export default App;
