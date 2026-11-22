import React, { useEffect, useRef } from 'react';
import { CloseSketchIcon } from './DoodleIcons';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToPage: (page: 'peta' | 'kombinasi' | 'karier') => void;
  onOpenFeedback: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({
  isOpen,
  onClose,
  onGoToPage,
  onOpenFeedback
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

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <div className="drawer-header">
          <div>
            <span className="drawer-layer-label">AkarIlmu: Kenali akarnya, lihat cabangnya.</span>
            <h2 id="guide-modal-title" className="drawer-title">
              Cara Membaca Peta Keilmuan
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Tutup panduan cara membaca"
          >
            <CloseSketchIcon size={20} />
          </button>
        </div>

        <div className="guide-modal-body">
          <div className="guide-legend-box">
            <h3 className="drawer-section-title">Arti warna, garis, dan lapisan</h3>
            <ul className="guide-list">
              <li>
                <strong>3 lapisan alur:</strong> kolom kiri adalah 10 ilmu dasar (SMA/K atau sederajat), kolom tengah adalah 16 pilar kuliah semester awal, dan kolom kanan adalah 60+ program studi yang umum ada di perguruan tinggi Indonesia.
              </li>
              <li>
                <strong>Garis biru tegas:</strong> menandakan fondasi utama yang akan langsung sering dipakai sejak semester awal perkuliahan.
              </li>
              <li>
                <strong>Garis putus-putus:</strong> menandakan ilmu pendukung atau jembatan lintas disiplin yang memperkaya bidang tersebut.
              </li>
              <li>
                <strong>Klik kotak mana pun:</strong> panel rincian akan terbuka agar kamu bisa melompat mundur ke prasyaratnya, maju ke jurusan turunannya, atau menandai status catatan belajarmu.
              </li>
            </ul>
          </div>

          <div className="guide-prose">
            <h3>Referensi awal, bukan aturan baku</h3>
            <p>
              Peta ini disusun sebagai kompas pembuka wawasan agar pelajar SMA/K atau sederajat tidak memilih jurusan dalam keadaan gelap terhadap fondasi ilmunya. Kurikulum tiap kampus di Indonesia bisa memiliki penekanan berbeda, dan jalur lintas jurusan tetap terbuka lebar lewat belajar mandiri.
            </p>
            <p>
              Kalau kamu sudah tahu 2 atau 3 pelajaran favorit di sekolah, coba pindah ke halaman <strong>Cek Kombinasi</strong> untuk melihat jurusan apa saja yang mempertemukan semuanya, atau buka <strong>Arah Karier</strong> untuk menelusuri balik dari profesi yang kamu minati.
            </p>
            <p className="guide-disclaimer-note">
              <strong>Disclaimer:</strong> Website ini dibuat dengan bantuan AI berdasarkan referensi umum program studi di Indonesia dan hanya berfungsi sebagai gambaran awal (bukan acuan resmi kampus atau panitia seleksi). Menemukan kekeliruan atau punya masukan? Silakan kirim DM atau coret-coret di kolom komentar, ya!
              <span className="guide-credit-line">
                Eksperimen terbuka oleh{' '}
                <a
                  href="https://mentayasandbox.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credit-link"
                >
                  MentayaSandbox
                </a>
                .
              </span>
            </p>
          </div>
        </div>

        <div className="modal-footer-actions">
          <button
            type="button"
            className="sketch-btn sketch-btn--primary"
            onClick={() => {
              onGoToPage('peta');
              onClose();
            }}
          >
            Buka Peta Keilmuan
          </button>
          <button
            type="button"
            className="sketch-btn"
            onClick={() => {
              onGoToPage('kombinasi');
              onClose();
            }}
          >
            Cek Kombinasi
          </button>
          <button
            type="button"
            className="sketch-btn sketch-btn--ghost"
            onClick={() => {
              onGoToPage('karier');
              onClose();
            }}
          >
            Arah Karier
          </button>
          <button
            type="button"
            className="sketch-btn sketch-btn--ghost"
            onClick={onOpenFeedback}
          >
            Kirim Masukan / Apresiasi
          </button>
        </div>
      </div>
    </div>
  );
};
