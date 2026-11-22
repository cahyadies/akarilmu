import React, { useEffect, useRef, useState } from 'react';
import { CloseSketchIcon } from './DoodleIcons';

export type FeedbackCategory =
  | 'Koreksi data prodi'
  | 'Usul tambah prodi / kampus'
  | 'Saran fitur & tampilan'
  | 'Apresiasi & pesan semangat';

interface FeedbackModalProps {
  isOpen: boolean;
  initialCategory?: FeedbackCategory;
  contextLabel?: string;
  onClose: () => void;
}

const CATEGORIES: Array<{ value: FeedbackCategory; placeholder: string }> = [
  {
    value: 'Koreksi data prodi',
    placeholder: 'Tuliskan prodi atau bagian yang keliru beserta informasi yang lebih tepat...'
  },
  {
    value: 'Usul tambah prodi / kampus',
    placeholder: 'Sebutkan nama prodi, kampus PTN/PTS, atau jalur karier yang ingin ditambahkan...'
  },
  {
    value: 'Saran fitur & tampilan',
    placeholder: 'Ceritakan ide fitur atau hal yang masih terasa membingungkan saat memakai AkarIlmu...'
  },
  {
    value: 'Apresiasi & pesan semangat',
    placeholder: 'Tulis kesanmu atau bagian yang paling membantumu selama melihat peta AkarIlmu...'
  }
];

const DEFAULT_TARGET_EMAIL = 'mentayasandbox@gmail.com';

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  initialCategory = 'Apresiasi & pesan semangat',
  contextLabel = '',
  onClose
}) => {
  const [category, setCategory] = useState<FeedbackCategory>(initialCategory);
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [replyEmail, setReplyEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackNotice, setFeedbackNotice] = useState('');

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setCategory(initialCategory);
    setStatus('idle');
    setFeedbackNotice('');
    closeBtnRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, initialCategory, contextLabel, onClose]);

  if (!isOpen) return null;

  const activePlaceholder =
    CATEGORIES.find((c) => c.value === category)?.placeholder ?? CATEGORIES[0].placeholder;

  const submitViaBrowserRelay = async (targetEmail: string, trimmedMessage: string) => {
    const subject = `[AkarIlmu] ${category}${contextLabel ? ` (${contextLabel})` : ''}`;
    const relayRes = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: subject,
          _template: 'table',
          _captcha: 'false',
          kategori: category,
          konteks: contextLabel || 'Umum',
          pengirim: senderName.trim() || 'Pengunjung AkarIlmu (Anonim)',
          email_balasan: replyEmail.trim() || 'Tidak dicantumkan',
          pesan: trimmedMessage
        })
      }
    );

    const relayData = await relayRes.json().catch(() => ({}));
    if (relayRes.ok && (relayData.success === 'true' || relayData.success === true)) {
      setStatus('success');
      setFeedbackNotice('Terima kasih! Pesanmu sudah terkirim langsung ke email pengelola AkarIlmu.');
      setMessage('');
      return;
    }

    const rawMsg = typeof relayData.message === 'string' ? relayData.message : '';
    if (rawMsg.toLowerCase().includes('activation')) {
      setStatus('error');
      setFeedbackNotice(
        'Formulir ini sedang menunggu aktivasi satu kali oleh pengelola di inbox mentayasandbox@gmail.com. Silakan coba lagi beberapa saat lagi.'
      );
      return;
    }

    setStatus('error');
    setFeedbackNotice(
      'Pengiriman sedang terkendala sementara. Silakan klik Kirim Pesan lagi beberapa detik lagi.'
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedMessage = message.trim();
    if (trimmedMessage.length < 5) {
      setStatus('error');
      setFeedbackNotice('Tulis pesan minimal 5 karakter terlebih dahulu.');
      return;
    }

    setStatus('submitting');
    setFeedbackNotice('');

    let targetEmail = DEFAULT_TARGET_EMAIL;

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          message: trimmedMessage,
          senderName: senderName.trim(),
          replyEmail: replyEmail.trim(),
          contextLabel,
          website: honeypot
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus('success');
        setFeedbackNotice(
          data.message || 'Terima kasih! Pesanmu sudah terkirim langsung ke email pengelola AkarIlmu.'
        );
        setMessage('');
        return;
      }

      if (response.status >= 400 && response.status < 500 && response.status !== 404) {
        setStatus('error');
        setFeedbackNotice(data.error || 'Periksa kembali isi formulirmu.');
        return;
      }

      if (typeof data.targetEmail === 'string' && data.targetEmail.trim()) {
        targetEmail = data.targetEmail.trim();
      }
    } catch {
      // Local Vite dev server does not run /api routes; fall through to direct browser relay.
    }

    try {
      await submitViaBrowserRelay(targetEmail, trimmedMessage);
    } catch {
      setStatus('error');
      setFeedbackNotice(
        'Koneksi internet sedang terganggu sehingga pesan belum terkirim. Pastikan jaringan aktif lalu klik Kirim Pesan lagi.'
      );
    }
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <div className="drawer-header">
          <div>
            <span className="drawer-layer-label">
              {contextLabel ? `Terkait: ${contextLabel}` : 'Terkirim langsung ke MentayaSandbox tanpa buka aplikasi email'}
            </span>
            <h2 id="feedback-modal-title" className="drawer-title">
              Kirim Masukan atau Apresiasi
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Tutup formulir masukan"
          >
            <CloseSketchIcon size={20} />
          </button>
        </div>

        {status === 'success' ? (
          <div className="state-panel" role="status" aria-live="polite">
            <h3 className="state-panel-title">Pesanmu sudah terkirim</h3>
            <p className="state-panel-desc">{feedbackNotice}</p>
            <div className="modal-footer-actions feedback-center-actions">
              <button
                type="button"
                className="sketch-btn sketch-btn--primary"
                onClick={onClose}
              >
                Kembali ke AkarIlmu
              </button>
              <button
                type="button"
                className="sketch-btn sketch-btn--ghost"
                onClick={() => {
                  setStatus('idle');
                  setFeedbackNotice('');
                }}
              >
                Kirim pesan lainnya
              </button>
            </div>
          </div>
        ) : (
          <form className="feedback-form" onSubmit={handleSubmit} noValidate>
            <div>
              <span className="field-label">Pilih jenis pesan</span>
              <div className="feedback-cat-grid" role="group" aria-label="Jenis masukan">
                {CATEGORIES.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    className="feedback-cat-btn"
                    aria-pressed={category === item.value}
                    onClick={() => setCategory(item.value)}
                  >
                    {item.value}
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-field">
              <label htmlFor="feedback-message" className="field-label">
                Pesanmu (wajib diisi)
              </label>
              <textarea
                id="feedback-message"
                rows={4}
                required
                maxLength={1500}
                className="sketch-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={activePlaceholder}
              />
            </div>

            <div className="calc-inputs-grid">
              <div className="calc-field">
                <label htmlFor="feedback-name" className="field-label">
                  Nama / asal sekolah (opsional)
                </label>
                <input
                  id="feedback-name"
                  type="text"
                  maxLength={80}
                  className="sketch-input sketch-input--plain"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Nama atau kelas (boleh kosong)"
                />
              </div>

              <div className="calc-field">
                <label htmlFor="feedback-email" className="field-label">
                  Email kamu (opsional, jika ingin dibalas)
                </label>
                <input
                  id="feedback-email"
                  type="email"
                  maxLength={120}
                  className="sketch-input sketch-input--plain"
                  value={replyEmail}
                  onChange={(e) => setReplyEmail(e.target.value)}
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="sr-only" aria-hidden="true">
              <label htmlFor="feedback-website">Website</label>
              <input
                id="feedback-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {status === 'error' && feedbackNotice && (
              <div className="calc-validation" role="alert">
                {feedbackNotice}
              </div>
            )}

            <div className="modal-footer-actions">
              <button
                type="submit"
                className="sketch-btn sketch-btn--primary"
                disabled={status === 'submitting'}
                aria-busy={status === 'submitting'}
              >
                {status === 'submitting' ? 'Mengirim pesan...' : 'Kirim Pesan'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
