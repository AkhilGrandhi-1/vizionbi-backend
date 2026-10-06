# Vizion BI — Backend

Sample REST API for dashboard KPIs and trends.

Repository: https://github.com/AkhilGrandhi-1/vizionbi-backend

## Run locally

```bash
npm install
npm run dev
```

API base: `http://localhost:4000`

| Endpoint | Description |
| -------- | ----------- |
| `GET /health` | Health check |
| `GET /api/dashboards` | Dashboard catalog |
| `GET /api/metrics/kpis` | KPI cards |
| `GET /api/metrics/revenue-trend` | Monthly revenue series |

Optional env: `PORT`, `CORS_ORIGIN` (default `http://localhost:5173`).
