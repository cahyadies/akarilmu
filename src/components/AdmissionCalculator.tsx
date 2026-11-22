import React, { useEffect, useState } from 'react';
import { CampusReference } from '../data/campusReferences';

interface AdmissionCalculatorProps {
  nodeId: string;
  majorTitle: string;
  reference: CampusReference;
}

function getCompetitionBand(ratePercent: number): {
  label: string;
  detail: string;
  barWidth: number;
} {
  if (ratePercent < 3) {
    return {
      label: 'Sangat ketat (< 3%)',
      detail: 'Persaingan sangat tinggi. Pastikan nilai/skor benar-benar matang dan siapkan prodi cadangan dengan rasio lebih longgar.',
      barWidth: 92
    };
  }
  if (ratePercent < 10) {
    return {
      label: 'Ketat (3% - 10%)',
      detail: 'Butuh persiapan terukur pada mata pelajaran fondasi dan strategi penempatan pilihan 1 atau 2.',
      barWidth: 68
    };
  }
  if (ratePercent < 25) {
    return {
      label: 'Menengah (10% - 25%)',
      detail: 'Peluang cukup kompetitif dan terbuka selama persiapan konsisten.',
      barWidth: 42
    };
  }
  return {
    label: 'Relatif terbuka (>= 25%)',
    detail: 'Rasio kursi dibanding jumlah pendaftar relatif longgar dibanding prodi lain.',
    barWidth: 22
  };
}

export const AdmissionCalculator: React.FC<AdmissionCalculatorProps> = ({
  nodeId,
  majorTitle,
  reference
}) => {
  const [seatsInput, setSeatsInput] = useState('');
  const [applicantsInput, setApplicantsInput] = useState('');

  useEffect(() => {
    setSeatsInput('');
    setApplicantsInput('');
  }, [nodeId]);

  const seats = Number(seatsInput);
  const applicants = Number(applicantsInput);
  const hasBothInputs = seatsInput.trim() !== '' && applicantsInput.trim() !== '';

  let validationError = '';
  let ratePercent: number | null = null;
  let ratioPerSeat: number | null = null;

  if (hasBothInputs) {
    if (!Number.isFinite(seats) || !Number.isFinite(applicants) || seats <= 0 || applicants <= 0) {
      validationError = 'Masukkan angka bulat lebih dari 0 untuk daya tampung dan jumlah pendaftar.';
    } else if (seats > applicants) {
      validationError = 'Jumlah kursi melebihi jumlah pendaftar (semua pendaftar berpeluang besar tertampung jika memenuhi syarat minimal).';
    } else {
      ratePercent = (seats / applicants) * 100;
      ratioPerSeat = applicants / seats;
    }
  }

  const band = ratePercent !== null ? getCompetitionBand(ratePercent) : null;

  return (
    <div className="drawer-callout admission-box">
      <h3 className="drawer-section-title">Kampus rujukan di Indonesia</h3>
      <p className="drawer-text">{reference.selectionNote}</p>

      <div className="campus-group">
        <span className="campus-type-label">PTN (Negeri)</span>
        <div className="campus-chip-list">
          {reference.ptn.map((name) => (
            <span key={name} className="campus-chip campus-chip--ptn">
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="campus-group">
        <span className="campus-type-label">PTS (Swasta)</span>
        <div className="campus-chip-list">
          {reference.pts.map((name) => (
            <span key={name} className="campus-chip campus-chip--pts">
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="calc-divider" />

      <h3 className="drawer-section-title">Hitung keketatan & peluang lolos</h3>
      <p className="drawer-text">
        SNPMB tidak merilis angka passing grade resmi. Untuk mengukur persaingan {majorTitle}, cek <strong>Daya Tampung</strong> (kursi tersedia) dan <strong>Jumlah Peminat</strong> (pendaftar tahun sebelumnya) di portal resmi SNPMB atau kampus PTS tujuan, lalu hitung di bawah.
      </p>

      <div className="calc-links-row">
        <a
          href="https://snpmb.id/utbk-snbt/daftar-ptn-snbt"
          target="_blank"
          rel="noopener noreferrer"
          className="sketch-btn sketch-btn--ghost"
        >
          Cek Daya Tampung Resmi di snpmb.id
        </a>
        {reference.snbpSample && (
          <button
            type="button"
            className="sketch-btn sketch-btn--ghost"
            onClick={() => {
              setSeatsInput(String(reference.snbpSample!.seats));
              setApplicantsInput(String(reference.snbpSample!.applicants));
            }}
          >
            Isi contoh acuan ({reference.snbpSample.seats} / {reference.snbpSample.applicants})
          </button>
        )}
      </div>

      {reference.snbpSample && (
        <p className="calc-sample-note">
          {reference.snbpSample.campus}: {reference.snbpSample.note}
        </p>
      )}

      <div className="calc-inputs-grid">
        <div className="calc-field">
          <label htmlFor={`seats-${nodeId}`} className="field-label">
            Daya tampung (kursi)
          </label>
          <input
            id={`seats-${nodeId}`}
            type="number"
            min={1}
            inputMode="numeric"
            className="sketch-input sketch-input--plain"
            value={seatsInput}
            onChange={(e) => setSeatsInput(e.target.value)}
            placeholder="Contoh: 80"
          />
        </div>

        <div className="calc-field">
          <label htmlFor={`applicants-${nodeId}`} className="field-label">
            Jumlah pendaftar
          </label>
          <input
            id={`applicants-${nodeId}`}
            type="number"
            min={1}
            inputMode="numeric"
            className="sketch-input sketch-input--plain"
            value={applicantsInput}
            onChange={(e) => setApplicantsInput(e.target.value)}
            placeholder="Contoh: 2400"
          />
        </div>
      </div>

      {validationError && (
        <p className="calc-validation" role="status" aria-live="polite">
          {validationError}
        </p>
      )}

      {ratePercent !== null && ratioPerSeat !== null && band && (
        <div className="calc-result-box" role="status" aria-live="polite">
          <div className="calc-metrics-row">
            <div>
              <span className="calc-metric-label">Persentase lolos (keketatan)</span>
              <strong className="calc-metric-value">{ratePercent.toFixed(2)}%</strong>
            </div>
            <div>
              <span className="calc-metric-label">Persaingan per kursi</span>
              <strong className="calc-metric-value">1 : {Math.round(ratioPerSeat)}</strong>
            </div>
          </div>

          <div className="calc-meter-track" aria-hidden="true">
            <div className="calc-meter-fill" style={{ width: `${band.barWidth}%` }} />
          </div>

          <p className="calc-band-label">Tingkat keketatan: {band.label}</p>
          <p className="drawer-text">{band.detail}</p>
        </div>
      )}
    </div>
  );
};
