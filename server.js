const express = require("express");
const fs      = require("fs");
const path    = require("path");
const app     = express();
const PORT    = 5000;
const SCORES_FILE = path.join(__dirname, "data", "scores.json");
const CHAT_FILE   = path.join(__dirname, "data", "chat.json");
const MAX_MESSAGES = 100;

/* ===== HEADERS ===== */
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store");
  if (req.method === "OPTIONS") { res.sendStatus(204); return; }
  next();
});

app.use(express.json());
app.use(express.static("public"));

/* ===== FILE HELPERS ===== */
function readJSON(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")) || fallback; }
  catch (_) { return fallback; }
}
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
}

/* ===== SCORE API ===== */
app.get("/api/scores", (req, res) => {
  res.json(readJSON(SCORES_FILE, {}));
});
app.get("/api/scores/:key", (req, res) => {
  const scores = readJSON(SCORES_FILE, {});
  res.json(scores[req.params.key] || null);
});
app.put("/api/scores/:key", (req, res) => {
  const scores = readJSON(SCORES_FILE, {});
  scores[req.params.key] = { ...req.body, savedAt: Date.now() };
  writeJSON(SCORES_FILE, scores);
  res.json({ ok: true });
});

/* ===== CHAT API ===== */
/* GET /api/chat — last N messages */
app.get("/api/chat", (req, res) => {
  const msgs = readJSON(CHAT_FILE, []);
  res.json(msgs.slice(-MAX_MESSAGES));
});

/* POST /api/chat — send a message */
app.post("/api/chat", (req, res) => {
  const { name, text } = req.body || {};
  if (!name || !text) { res.status(400).json({ error: "name and text required" }); return; }
  const msgs = readJSON(CHAT_FILE, []);
  msgs.push({ name: String(name).substring(0, 40), text: String(text).substring(0, 400), ts: Date.now() });
  if (msgs.length > MAX_MESSAGES) msgs.splice(0, msgs.length - MAX_MESSAGES);
  writeJSON(CHAT_FILE, msgs);
  res.json({ ok: true });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Students Voice app running on port ${PORT}`);
});
