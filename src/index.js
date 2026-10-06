import cors from "cors";
import express from "express";
import { dashboards, kpis, revenueByMonth } from "./data/sampleMetrics.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "vizionbi-backend" });
});

app.get("/api/dashboards", (_req, res) => {
  res.json({ data: dashboards });
});

app.get("/api/metrics/kpis", (_req, res) => {
  res.json({ data: kpis, asOf: new Date().toISOString() });
});

app.get("/api/metrics/revenue-trend", (_req, res) => {
  res.json({ data: revenueByMonth });
});

app.listen(port, () => {
  console.log(`Vizion BI API listening on http://localhost:${port}`);
});
