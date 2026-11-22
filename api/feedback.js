import { metric } from '@vercel/functions';

const ALLOWED_CATEGORIES = new Set([
  'Koreksi data prodi',
  'Usul tambah prodi / kampus',
  'Saran fitur & tampilan',
  'Apresiasi & pesan semangat'
]);

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const rateLimitMap = new Map();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return { allowed: true };
  }

  if (record.count >= MAX_PER_WINDOW) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((record.resetAt - now) / 1000))
    };
  }

  record.count += 1;
  rateLimitMap.set(ip, record);
  return { allowed: true };
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metode tidak diizinkan.' });
  }

  const startedAt = performance.now();
  let provider = 'client_relay';

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: 'Format data kiriman tidak valid.' });
      }
    }
    body = body || {};

    // Silently accept honeypot traps so bots stop retrying.
    if (typeof body.website === 'string' && body.website.trim().length > 0) {
      metric('feedback.submitted', 1, { outcome: 'honeypot' });
      return res.status(200).json({ success: true, message: 'Pesan diterima.' });
    }

    const category =
      typeof body.category === 'string' && ALLOWED_CATEGORIES.has(body.category)
        ? body.category
        : 'Saran fitur & tampilan';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const senderName = typeof body.senderName === 'string' ? body.senderName.trim().slice(0, 80) : '';
    const replyEmail = typeof body.replyEmail === 'string' ? body.replyEmail.trim().slice(0, 120) : '';
    const contextLabel =
      typeof body.contextLabel === 'string' ? body.contextLabel.trim().slice(0, 120) : '';

    if (message.length < 5) {
      return res.status(400).json({ error: 'Tulis pesan minimal 5 karakter sebelum mengirim.' });
    }
    if (message.length > 1500) {
      return res.status(400).json({ error: 'Pesan terlalu panjang (maksimal 1500 karakter).' });
    }
    if (replyEmail && !EMAIL_REGEX.test(replyEmail)) {
      return res.status(400).json({ error: 'Format alamat email balasan tidak valid.' });
    }

    const forwardedFor = req.headers?.['x-forwarded-for'];
    const clientIp =
      (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor || req.socket?.remoteAddress || 'unknown')
        .split(',')[0]
        .trim();

    const rateStatus = checkRateLimit(clientIp);
    if (!rateStatus.allowed) {
      res.setHeader('Retry-After', String(rateStatus.retryAfterSeconds));
      metric('feedback.submitted', 1, { outcome: 'rate_limited', category });
      return res.status(429).json({
        error: `Terlalu banyak kiriman dalam waktu singkat. Coba lagi dalam ${rateStatus.retryAfterSeconds} detik.`
      });
    }

    const targetEmail = (process.env.FEEDBACK_TO_EMAIL || 'mentayasandbox@gmail.com').trim();
    const subject = `[AkarIlmu] ${category}${contextLabel ? ` (${contextLabel})` : ''}`;
    const displaySender = senderName || 'Pengunjung AkarIlmu (Anonim)';

    const plainText = [
      `Kategori: ${category}`,
      contextLabel ? `Konteks: ${contextLabel}` : null,
      `Pengirim: ${displaySender}`,
      replyEmail ? `Email balasan: ${replyEmail}` : null,
      '',
      'Isi pesan:',
      message,
      '',
      'Dikirim dari https://akarilmu.vercel.app'
    ]
      .filter((line) => line !== null)
      .join('\n');

    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    if (resendApiKey) {
      provider = 'resend';
      const resendPayload = {
        from: process.env.RESEND_FROM_EMAIL?.trim() || 'AkarIlmu <onboarding@resend.dev>',
        to: [targetEmail],
        subject,
        text: plainText,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; background: #fbf7ee; color: #1d1b18; border: 2px solid #1d1b18; border-radius: 12px;">
            <h2 style="margin: 0 0 6px; font-size: 20px;">AkarIlmu: ${escapeHtml(category)}</h2>
            ${contextLabel ? `<p style="margin: 0 0 14px; font-size: 13px; color: #524c44;">Konteks: <strong>${escapeHtml(contextLabel)}</strong></p>` : ''}
            <p style="margin: 0 0 8px; font-size: 14px;"><strong>Pengirim:</strong> ${escapeHtml(displaySender)}</p>
            ${replyEmail ? `<p style="margin: 0 0 14px; font-size: 14px;"><strong>Email balasan:</strong> ${escapeHtml(replyEmail)}</p>` : ''}
            <div style="margin: 16px 0; padding: 14px; background: #fffdf8; border: 1.5px solid #6e655a; border-radius: 8px; white-space: pre-wrap; line-height: 1.6; font-size: 14px;">${escapeHtml(message)}</div>
            <p style="margin: 16px 0 0; font-size: 12px; color: #524c44;">Dikirim lewat formulir masukan AkarIlmu (akarilmu.vercel.app).</p>
          </div>
        `
      };
      if (replyEmail) {
        resendPayload.reply_to = replyEmail;
      }

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resendPayload)
      });

      if (resendRes.ok) {
        metric('feedback.submitted', 1, { outcome: 'success', category });
        return res.status(200).json({
          success: true,
          provider,
          message: 'Terima kasih! Pesanmu berhasil dikirim langsung ke email pengelola AkarIlmu.'
        });
      }
    }

    const web3Key = process.env.WEB3FORMS_ACCESS_KEY?.trim();
    if (web3Key) {
      provider = 'web3forms';
      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: web3Key,
          subject,
          from_name: displaySender,
          email: replyEmail || targetEmail,
          message: plainText
        })
      });

      const web3Data = await web3Res.json().catch(() => ({}));
      if (web3Res.ok && web3Data.success) {
        metric('feedback.submitted', 1, { outcome: 'success', category });
        return res.status(200).json({
          success: true,
          provider,
          message: 'Terima kasih! Pesanmu berhasil dikirim langsung ke email pengelola AkarIlmu.'
        });
      }
    }

    // Delegate to browser-side FormSubmit AJAX so Cloudflare never blocks serverless datacenter IPs.
    metric('feedback.submitted', 1, { outcome: 'client_relay', category });
    return res.status(200).json({
      success: false,
      useClientRelay: true,
      targetEmail
    });
  } catch (err) {
    console.error('Feedback endpoint error:', err);
    metric('feedback.submitted', 1, { outcome: 'error' });
    return res.status(500).json({
      success: false,
      error: 'Terjadi kendala saat memproses pesan. Silakan coba lagi sebentar lagi.'
    });
  } finally {
    metric('feedback.delivery_ms', Math.round(performance.now() - startedAt), { provider });
  }
}
