import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    // Pega IP do visitante
    const ip =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.headers['x-real-ip'] ||
      req.socket?.remoteAddress ||
      '8.8.8.8';

    // Ignora localhost
    if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168') || ip.startsWith('10.')) {
      return res.status(200).json({ ok: true, skipped: true });
    }

    // Busca geolocalização
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

    // Salva no KV — mantém últimos 200 acessos
    const key = `visitor:${ip}:${Date.now()}`;
    await kv.set(key, JSON.stringify(visitor), { ex: 60 * 60 * 24 * 30 }); // expira em 30 dias

    return res.status(200).json({ ok: true, visitor });
  } catch (err) {
    console.error(err);
    return res.status(200).json({ ok: true, error: err.message });
  }
}
