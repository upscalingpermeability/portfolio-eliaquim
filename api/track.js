import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

// Padrões de user-agent de bots conhecidos
const BOT_UA = /bot|crawler|spider|crawling|headless|preview|fetch|scan|monitor|curl|wget|python|axios|node-fetch|go-http|java\/|libwww/i;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    // Filtro 1: user-agent de bot
    const ua = req.headers['user-agent'] || '';
    if (!ua || BOT_UA.test(ua)) {
      return res.status(200).json({ ok: true, skipped: 'bot-ua' });
    }

    const ip =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.headers['x-real-ip'] ||
      '0.0.0.0';

    // Geolocalização automática via headers da Vercel
    const lat = parseFloat(req.headers['x-vercel-ip-latitude']);
    const lng = parseFloat(req.headers['x-vercel-ip-longitude']);
    const city = decodeURIComponent(req.headers['x-vercel-ip-city'] || '');
    const country = req.headers['x-vercel-ip-country'] || '';

    if (isNaN(lat) || isNaN(lng)) {
      return res.status(200).json({ ok: true, skipped: 'no-geo' });
    }

    const visitor = { lat, lng, city, country, ts: Date.now() };

    await redis.set(`visitor:${ip}`, JSON.stringify(visitor));

    return res.status(200).json({ ok: true, visitor });
  } catch (err) {
    console.error(err);
    return res.status(200).json({ ok: true, error: err.message });
  }
}
