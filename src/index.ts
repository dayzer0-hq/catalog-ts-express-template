import express from "express";

const app = express();
app.use(express.json());

// Health check — the one route the starter ships with. Build your feature routes alongside it.
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});

export default app;
