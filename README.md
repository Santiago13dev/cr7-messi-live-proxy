# **CR7 & Messi Live Stats** ![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel) ![Node.js](https://img.shields.io/badge/Node.js-Required-green?logo=node.js) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## **⚡ Características Destacadas**

- ✨ **Actualización en vivo** cada 30 segundos sin recargar.
- 🔒 **Proxy Serverless** en Vercel que oculta tu `API_KEY`.
- 🖼️ **Fotos de jugador** directamente de la API.
- 📶 **Cache breve** de 15 s para respetar límites.
- 🖥️ **Frontend ligero** con HTML, CSS y Vanilla JS.

---

## **📋 Requisitos**

- Cuenta RapidAPI suscrita al plan Free de API‑Football.
- Node.js *(opcional, para pruebas locales con dotenv)*.
- Vercel CLI *(opcional, para deploy por terminal)*.

---

## **🚀 Instalación / Desarrollo Local**

```bash
# Clonar repo
git clone https://github.com/Santiago13dev/cr7-messi-live-proxy.git
cd cr7-messi-live-proxy

# Configurar clave (exporta o .env)
export API_KEY="TU_RAPIDAPI_KEY"
# o usa .env y dotenv:
npm install dotenv

# Iniciar proxy y servir frontend
vercel dev
```

Visita [http://localhost:3000](http://localhost:3000) y observa las tarjetas.

---

## **📦 Despliegue en Producción**

1. Importa el repo desde Vercel Dashboard.
2. Agrega la variable de entorno `API_KEY` en **Settings**.
3. Deploy:

    ```bash
    vercel --prod
    ```

4. URL final:  
   `https://<tu-proyecto>.vercel.app`

---

## **🗂 Estructura**

```
cr7-messi-live-proxy/
├── api/
│   └── stats.js      # Proxy serverless a RapidAPI
├── index.html        # Frontend estático
├── package.json      # Node.js config
├── .gitignore        # node_modules, .env
└── .env              # RapidAPI Key local
```

---

## **📩 Uso de la API**

**GET** `/api/stats?id=<PLAYER_ID>`

**Ejemplo de respuesta:**
```json
{
  "photo": "https://...png",
  "goles": 25,
  "asist": 3
}
```

**IDs:**
- **Cristiano Ronaldo:** `874`
- **Lionel Messi:** `154`

---

## **⚠️ Límites y Buenas Prácticas**

- El plan Free de RapidAPI tiene límite diario.
- Monitoriza en RapidAPI Dashboard → Billing & Usage.
- El proxy usa `Cache-Control: s-maxage=15`.
- Implementa Back-off si obtienes `429 Too Many Requests`.

---

## **🎨 Personalización**

- Edita estilos en `<style>` de `index.html`.
- Agrega más jugadores en el array `players`.
- Cambia intervalo: `setInterval(updateStats, 30000)`.

---

## **📝 Licencia**

MIT © [Santiago13dev](https://github.com/Santiago13dev)
