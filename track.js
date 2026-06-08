import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const ip =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.headers['x-real-ip'] ||
      '8.8.8.8';

    if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168') || ip.startsWith('10.')) {
      return res.status(200).json({ ok: true, skipped: true });
    }

    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geo = await geoRes.json();

    if (!geo.latitude || !geo.longitude) {
      return res.status(200).json({ ok: true, skipped: true });
    }

    const visitor = {
      lat: geo.latitude,
      lng: geo.longitude,
      city: geo.city || '',
      country: geo.country_name || '',
      ts: Date.now()
    };

    const key = `visitor:${ip}`;
    await redis.set(key, JSON.stringify(visitor), { ex: 60 * 60 * 24 * 30 });

    return res.status(200).json({ ok: true, visitor });
  } catch (err) {
    console.error(err);
    return res.status(200).json({ ok: true, error: err.message });
  }
}
