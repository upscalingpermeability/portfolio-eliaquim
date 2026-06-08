import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

  try {
    const keys = await redis.keys('visitor:*');

    if (!keys || keys.length === 0) {
      return res.status(200).json({
        visitors: [{ lat: -15.78, lng: -47.93, city: 'Brasília', country: 'Brasil' }]
      });
    }

    const values = await redis.mget(...keys);

    const visitors = values
      .filter(Boolean)
      .map(v => {
        try { return typeof v === 'string' ? JSON.parse(v) : v; } catch { return null; }
      })
      .filter(Boolean)
      .map(({ lat, lng, city, country }) => ({ lat, lng, city, country }));

    return res.status(200).json({ visitors });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
