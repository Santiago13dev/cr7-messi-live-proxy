export default async function handler(req, res) {
  const id = req.query.id;
  if (!id) {
    return res
      .status(400)
      .json({ error: 'Falta parámetro id (ej: ?id=874)' });
  }

  // Llamada al endpoint v3 con id y temporada fija
  const url = `https://api-football-v1.p.rapidapi.com/v3/players?id=${id}&season=2024`;
  const r = await fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  });
  const j = await r.json();

  // Si no hay respuesta válida
  if (!j.response || j.response.length === 0) {
    return res
      .status(404)
      .json({ error: 'Jugador no encontrado' });
  }

  // Extraemos jugador y estadística
  const entry   = j.response[0];
  const player  = entry.player;
  const stats   = entry.statistics[0] || {};
  const goles   = stats.goals?.total   ?? 0;
  const asist   = stats.goals?.assists ?? 0;
  const photo   = player.photo         ?? '';

  // Cache corto
  res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate');
  // Devolvemos sólo lo necesario
  return res.json({ photo, goles, asist });
}
