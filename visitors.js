import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

  try {
    // Lista todas as chaves de visitantes
    const keys = await kv.keys('visitor:*');

    if (!keys || keys.length === 0) {
      // Retorna alguns pontos padrão se ainda não há visitas
      return res.status(200).json({
        visitors: [
          { lat: -15.78, lng: -47.93, city: 'Brasília', country: 'Brasil' },
        ]
      });
    }

    // Busca os dados de até 200 visitantes mais recentes
    const recent = keys.slice(-200);
    const values = await kv.mget(...recent);

    const visitors = values
      .filter(Boolean)
      .map(v => {
        try { return JSON.parse(v); } catch { return null; }
      })
      .filter(Boolean)
      .map(({ lat, lng, city, country }) => ({ lat, lng, city, country }));

    return res.status(200).json({ visitors });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
