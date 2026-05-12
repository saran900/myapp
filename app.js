/* ===== CONFIG ===== */
const SCORES_API    = "/api/scores";
const CHAT_API      = "/api/chat";
const PASSWORD      = "student123";
const ADMIN_PASSWORD = "saran ips";

/* ===== STATE ===== */
let currentUser   = "";
let currentGrade  = "";
let totalScore    = 0;
let sectionScores = { answer: 0, maths: 0, story: 0, psychology: 0 };
let completed     = { answer: new Set(), maths: new Set(), story: new Set(), psychology: new Set() };
let pollInterval  = null;
let currentSection = null;

/* ===== FIREBASE KEY SANITISER ===== */
function fbKey(name) {
  return name.trim().toLowerCase().replace(/[.#$[\]/\s]+/g, "_").replace(/[^a-z0-9_]/g, "") || "user";
}

/* ===== SAVE SCORES (local server) ===== */
async function saveScores() {
  if (!currentUser) return;
  const payload = {
    name:                currentUser,
    grade:               currentGrade,
    total:               totalScore,
    answer:              sectionScores.answer,
    maths:               sectionScores.maths,
    story:               sectionScores.story,
    psychology:          sectionScores.psychology,
    completedAnswer:     [...completed.answer],
    completedMaths:      [...completed.maths],
    completedStory:      [...completed.story],
    completedPsychology: [...completed.psychology],
    lastSeen:            Date.now()
  };
  try {
    await fetch(`${SCORES_API}/${fbKey(currentUser)}`, {
      method:  "PUT",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload)
    });
  } catch (_) {}
}

/* ===== LOAD SCORES (local server) ===== */
async function loadScores(name) {
  try {
    const res  = await fetch(`${SCORES_API}/${fbKey(name)}`, { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();
    if (!data) return;
    totalScore    = data.total       || 0;
    sectionScores = {
      answer:     data.answer      || 0,
      maths:      data.maths       || 0,
      story:      data.story       || 0,
      psychology: data.psychology  || 0
    };
    completed.answer     = new Set(data.completedAnswer     || []);
    completed.maths      = new Set(data.completedMaths      || []);
    completed.story      = new Set(data.completedStory      || []);
    completed.psychology = new Set(data.completedPsychology || []);
  } catch (_) {}
}

/* ===== LOGIN / LOGOUT ===== */
function toggleTeacherHint() {}  // hint is always visible

async function doLogin() {
  const name  = document.getElementById("login-name").value.trim();
  const grade = document.getElementById("login-grade").value.trim();
  const pass  = document.getElementById("login-pass").value;
  if (!name && pass !== ADMIN_PASSWORD) { showLoginError("Please enter your name."); return; }

  if (pass === ADMIN_PASSWORD) {
    const btn = document.getElementById("login-btn");
    btn.textContent = "Loading…"; btn.disabled = true;
    document.getElementById("login-error").classList.add("hidden");
    await loadAdminData();
    btn.textContent = "Sign In →"; btn.disabled = false;
    showPage("admin");
    return;
  }

  if (!name) { showLoginError("Please enter your name."); return; }
  if (pass !== PASSWORD) { showLoginError("Incorrect password. Try: student123"); return; }

  const btn = document.getElementById("login-btn");
  btn.textContent = "Loading…";
  btn.disabled = true;

  currentUser  = name;
  currentGrade = grade;

  await loadScores(name);

  document.getElementById("topbar-user").textContent = name;
  document.getElementById("hero-name").textContent   = name.split(" ")[0];
  updateTopScore();
  btn.textContent = "Sign In →";
  btn.disabled = false;
  document.getElementById("login-error").classList.add("hidden");
  showPage("dashboard");
}

function showLoginError(msg) {
  const e = document.getElementById("login-error");
  e.textContent = msg;
  e.classList.remove("hidden");
}

async function doLogout() {
  await saveScores();
  currentUser = ""; currentGrade = ""; totalScore = 0;
  sectionScores = { answer:0, maths:0, story:0, psychology:0 };
  completed = { answer: new Set(), maths: new Set(), story: new Set(), psychology: new Set() };
  document.getElementById("login-name").value  = "";
  document.getElementById("login-grade").value = "";
  document.getElementById("login-pass").value  = "";
  stopPolling();
  showPage("login");
}

/* ===== NAVIGATION ===== */
function showPage(name) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const el = document.getElementById("page-" + name);
  if (el) el.classList.add("active");
}
function showDashboard() { stopPolling(); currentSection = null; showPage("dashboard"); }

function showSection(name) {
  currentSection = name;
  showPage(name);
  if (name === "chat")        { startPolling(); return; }
  if (name === "leaderboard") { loadLeaderboard(); return; }
  renderLevelGrid(name);
}

/* ===== LEVEL GRID ===== */
function renderLevelGrid(section) {
  const container = document.getElementById(`${section}-levels`);
  if (!container) return;
  let html = '<div class="level-grid">';
  for (let i = 1; i <= 240; i++) {
    const done  = completed[section].has(i);
    const cls   = done ? "lvl-cell done" : "lvl-cell";
    const label = done ? "✓" : i;
    html += `<button class="${cls}" onclick="loadLevel('${section}',${i})">${label}</button>`;
  }
  html += "</div>";
  container.innerHTML = html;
  document.getElementById(`${section}-question-area`).innerHTML =
    `<div class="select-hint">👆 Choose a level above to begin</div>`;
  document.getElementById(`${section}-score-display`).textContent = `⭐ ${sectionScores[section]}`;
}

function markLevelDone(section, level) {
  completed[section].add(level);
  const btn = document.querySelector(`#${section}-levels .lvl-cell:nth-child(${level})`);
  if (btn) { btn.classList.add("done"); btn.textContent = "✓"; }
}

/* ===== LOAD LEVEL DISPATCHER ===== */
function loadLevel(section, level) {
  document.getElementById(`${section}-score-display`).textContent = `⭐ ${sectionScores[section]}`;
  const area = document.getElementById(`${section}-question-area`);
  area.innerHTML = "";
  if (section === "answer")     renderAnswerLevel(level, area);
  if (section === "maths")      renderMathsLevel(level, area);
  if (section === "story")      renderStoryLevel(level, area);
  if (section === "psychology") renderPsychLevel(level, area);
}

/* ===== DIFFICULTY HELPER ===== */
function getDifficulty(level) {
  if (level <= 80)  return "easy";
  if (level <= 160) return "medium";
  return "hard";
}
function getDiffLabel(level) {
  if (level <= 80)  return "🟢 Level " + level + " — Beginner";
  if (level <= 160) return "🟡 Level " + level + " — Intermediate";
  return "🔴 Level " + level + " — Advanced";
}

/* ===== ANSWER IN OUR WORDS ===== */
function renderAnswerLevel(level, area) {
  const diff   = getDifficulty(level);
  const q      = ANSWER_BANK[(level - 1) % ANSWER_BANK.length];
  const minW   = diff === "easy" ? 15 : diff === "medium" ? 25 : 40;
  const pts    = diff === "easy" ? 10 : diff === "medium" ? 15 : 20;
  const thresh = diff === "easy" ? 0.25 : diff === "medium" ? 0.35 : 0.5;
  const isDone = completed.answer.has(level);

  area.innerHTML = `
    <div class="q-card">
      <div class="q-level-badge">${getDiffLabel(level)}</div>
      <div class="q-passage">${q.q}</div>
      <div class="q-ask">❓ ${q.ask}</div>
      <div class="q-hint">💡 Hint: ${q.hint}</div>
      <div class="q-keywords">🔑 Key ideas to cover: <em>${q.keys.slice(0,5).join(", ")}</em></div>
      <textarea class="text-answer" id="ans-a-${level}" placeholder="Write your answer here in your own words…" rows="5" ${isDone ? "readonly" : ""}></textarea>
      <div class="ans-meta">Minimum: ${minW} words &nbsp;|&nbsp; Worth: ${pts} pts</div>
      ${isDone
        ? `<div class="feedback good show">✅ Already completed! Well done.</div>`
        : `<button class="submit-btn" onclick="submitAnswer('answer',${level})">Submit Answer ➤</button>`}
      <div class="feedback" id="fb-a-${level}"></div>
    </div>`;
}

/* ===== LEARN MATHS ===== */
function renderMathsLevel(level, area) {
  const data   = generateMathQuestion(level);
  const isDone = completed.maths.has(level);

  if (data.type === "mcq") {
    const letters = ["A","B","C","D"];
    const opts = data.options.map((opt, i) => {
      const cls   = isDone ? "mcq-option locked" : "mcq-option";
      const click = isDone ? "" : `onclick="selectMath(${level},${i},${data.correct},${data.pts})"`;
      return `<div class="${cls}" id="mopt-${level}-${i}" ${click}>
        <span class="opt-letter">${letters[i]}</span>${opt}
      </div>`;
    }).join("");
    area.innerHTML = `
      <div class="q-card">
        <div class="q-level-badge">${getDiffLabel(level)} &nbsp;|&nbsp; 📐 ${data.topic}</div>
        <div class="q-ask">❓ ${data.question}</div>
        <div class="mcq-options">${opts}</div>
        <div class="feedback${isDone ? " info show" : ""}" id="fb-m-${level}">${isDone ? "✅ Already completed!" : ""}</div>
      </div>`;
  } else {
    area.innerHTML = `
      <div class="q-card">
        <div class="q-level-badge">${getDiffLabel(level)} &nbsp;|&nbsp; 📐 ${data.topic}</div>
        <div class="q-ask">❓ ${data.question}</div>
        <div class="q-hint">💡 ${data.hint}</div>
        <textarea class="text-answer" id="ans-m-${level}" placeholder="Show your working and give the final answer…" rows="5" ${isDone ? "readonly" : ""}></textarea>
        <div class="ans-meta">Worth: ${data.pts} pts — Show all working steps for full marks</div>
        ${isDone
          ? `<div class="feedback good show">✅ Already completed!</div>`
          : `<button class="submit-btn" onclick="submitAnswer('maths',${level})">Submit Answer ➤</button>`}
        <div class="feedback" id="fb-m-${level}"></div>
      </div>`;
  }
}

function selectMath(level, chosen, correct, pts) {
  if (completed.maths.has(level)) return;
  const opts = document.querySelectorAll(`[id^="mopt-${level}-"]`);
  opts.forEach(o => { o.classList.add("locked"); o.onclick = null; });
  const fb      = document.getElementById(`fb-m-${level}`);
  const letters = ["A","B","C","D"];
  if (chosen === correct) {
    document.getElementById(`mopt-${level}-${chosen}`).classList.add("correct");
    fb.className   = "feedback good show";
    fb.textContent = `✅ Correct! +${pts} points`;
    addScore("maths", pts);
    markLevelDone("maths", level);
  } else {
    document.getElementById(`mopt-${level}-${chosen}`).classList.add("wrong");
    document.getElementById(`mopt-${level}-${correct}`).classList.add("correct");
    fb.className   = "feedback bad show";
    fb.textContent = `❌ Wrong. Correct answer was ${letters[correct]}. No points awarded.`;
  }
}

/* ===== STORY WRITING ===== */
function renderStoryLevel(level, area) {
  const diff   = getDifficulty(level);
  const p      = STORY_BANK[(level - 1) % STORY_BANK.length];
  const minW   = p.minWords[diff];
  const pts    = diff === "easy" ? 10 : diff === "medium" ? 15 : 20;
  const isDone = completed.story.has(level);

  area.innerHTML = `
    <div class="q-card">
      <div class="q-level-badge">${getDiffLabel(level)}</div>
      <div class="q-passage story-prompt">"${p.prompt}"</div>
      <div class="q-ask">✏️ ${p.task}</div>
      <textarea class="text-answer" id="ans-s-${level}" placeholder="Write your story here…" rows="7" ${isDone ? "readonly" : ""}></textarea>
      <div class="ans-meta">Minimum: <strong>${minW} words</strong> &nbsp;|&nbsp; Worth: ${pts} pts</div>
      ${isDone
        ? `<div class="feedback good show">✅ Already submitted! Great work.</div>`
        : `<button class="submit-btn" onclick="submitStory(${level},${minW},${pts})">Submit Story ➤</button>`}
      <div class="feedback" id="fb-s-${level}"></div>
    </div>`;
}

function submitStory(level, minW, pts) {
  if (completed.story.has(level)) return;
  const val       = document.getElementById(`ans-s-${level}`).value.trim();
  const fb        = document.getElementById(`fb-s-${level}`);
  const wordCount = val.split(/\s+/).filter(w => w).length;
  if (wordCount < 5) { setFb(fb, "bad", "Please write your story before submitting!"); return; }
  if (wordCount < minW) {
    setFb(fb, "bad", `Your story is ${wordCount} words. You need at least ${minW} words. Keep writing! ✍️`);
    return;
  }
  const lower      = val.toLowerCase();
  const storyWords = ["then","when","suddenly","because","after","before","finally","said","felt","walked","saw","found","called","heard","ran","knew","thought","looked"];
  const matched    = storyWords.filter(w => lower.includes(w));
  if (matched.length < 3 && wordCount < minW * 1.5) {
    setFb(fb, "bad", `Good start! Use more story words (e.g. "then", "suddenly", "finally"). Add more narrative flow. No points yet.`);
    return;
  }
  setFb(fb, "good", `✅ Wonderful story! ${wordCount} words — well done. +${pts} points!`);
  document.getElementById(`ans-s-${level}`).readOnly = true;
  disableSubmitBtn(level, "story");
  addScore("story", pts);
  markLevelDone("story", level);
}

/* ===== PSYCHOLOGY ===== */
function renderPsychLevel(level, area) {
  const isDone = completed.psychology.has(level);
  if (level <= 160) {
    const q       = PSYCH_MCQ[(level - 1) % PSYCH_MCQ.length];
    const pts     = level <= 80 ? 10 : 15;
    const letters = ["A","B","C","D"];
    const opts = q.opts.map((opt, i) => {
      const cls   = isDone ? "mcq-option locked" : "mcq-option";
      const click = isDone ? "" : `onclick="selectPsych(${level},${i},${q.correct},${pts})"`;
      return `<div class="${cls}" id="popt-${level}-${i}" ${click}>
        <span class="opt-letter">${letters[i]}</span>${opt}
      </div>`;
    }).join("");
    area.innerHTML = `
      <div class="q-card">
        <div class="q-level-badge">${getDiffLabel(level)} &nbsp;|&nbsp; 🧠 Psychology MCQ</div>
        <div class="q-ask">❓ ${q.q}</div>
        <div class="mcq-options">${opts}</div>
        <div class="feedback${isDone ? " info show" : ""}" id="fb-p-${level}">${isDone ? "✅ Already completed!" : ""}</div>
      </div>`;
  } else {
    const q    = PSYCH_OPEN[(level - 161) % PSYCH_OPEN.length];
    const pts  = 20;
    const minW = 30;
    area.innerHTML = `
      <div class="q-card">
        <div class="q-level-badge">${getDiffLabel(level)} &nbsp;|&nbsp; 🧠 Applied Psychology</div>
        <div class="q-passage">${q.q}</div>
        <div class="q-ask">❓ ${q.ask}</div>
        <div class="q-keywords">🔑 Include ideas like: <em>${q.keys.slice(0,5).join(", ")}</em></div>
        <textarea class="text-answer" id="ans-p-${level}" placeholder="Write your answer here…" rows="5" ${isDone ? "readonly" : ""}></textarea>
        <div class="ans-meta">Minimum: ${minW} words &nbsp;|&nbsp; Worth: ${pts} pts</div>
        ${isDone
          ? `<div class="feedback good show">✅ Already completed!</div>`
          : `<button class="submit-btn" onclick="submitAnswer('psychology',${level})">Submit Answer ➤</button>`}
        <div class="feedback" id="fb-p-${level}"></div>
      </div>`;
  }
}

function selectPsych(level, chosen, correct, pts) {
  if (completed.psychology.has(level)) return;
  const opts    = document.querySelectorAll(`[id^="popt-${level}-"]`);
  opts.forEach(o => { o.classList.add("locked"); o.onclick = null; });
  const fb      = document.getElementById(`fb-p-${level}`);
  const letters = ["A","B","C","D"];
  const q       = PSYCH_MCQ[(level - 1) % PSYCH_MCQ.length];
  if (chosen === correct) {
    document.getElementById(`popt-${level}-${chosen}`).classList.add("correct");
    fb.className = "feedback good show";
    fb.innerHTML = `✅ Correct! +${pts} pts<br><small>${q.exp || ""}</small>`;
    addScore("psychology", pts);
    markLevelDone("psychology", level);
  } else {
    document.getElementById(`popt-${level}-${chosen}`).classList.add("wrong");
    document.getElementById(`popt-${level}-${correct}`).classList.add("correct");
    fb.className = "feedback bad show";
    fb.innerHTML = `❌ Incorrect. Correct: ${letters[correct]}. No points.<br><small>${q.exp || ""}</small>`;
  }
}

/* ===== QUESTION META (avoids passing arrays through onclick) ===== */
function getQuestionMeta(section, level) {
  const diff = getDifficulty(level);
  if (section === "answer") {
    const q = ANSWER_BANK[(level - 1) % ANSWER_BANK.length];
    return {
      keys:      q.keys,
      minWords:  diff === "easy" ? 15 : diff === "medium" ? 25 : 40,
      pts:       diff === "easy" ? 10 : diff === "medium" ? 15 : 20,
      threshold: diff === "easy" ? 0.25 : diff === "medium" ? 0.35 : 0.5
    };
  }
  if (section === "maths") {
    const data = generateMathQuestion(level);
    return { keys: data.keys || [], minWords: 12, pts: data.pts, threshold: 0.25 };
  }
  if (section === "psychology") {
    const q = PSYCH_OPEN[(level - 161) % PSYCH_OPEN.length];
    return { keys: q.keys, minWords: 30, pts: 20, threshold: 0.35 };
  }
  return { keys: [], minWords: 10, pts: 10, threshold: 0.25 };
}

/* ===== UNIVERSAL TEXT ANSWER CHECKER ===== */
function submitAnswer(section, level) {
  if (completed[section].has(level)) return;
  const { keys, minWords, pts, threshold } = getQuestionMeta(section, level);
  const prefix  = section === "answer" ? "a" : section === "maths" ? "m" : "p";
  const inputEl = document.getElementById(`ans-${prefix}-${level}`);
  const fb      = document.getElementById(`fb-${prefix}-${level}`);
  const val     = inputEl ? inputEl.value.trim() : "";
  const wordCount = val.split(/\s+/).filter(w => w).length;

  if (wordCount < 5)       { setFb(fb, "bad", "Please write an answer before submitting!"); return; }
  if (wordCount < minWords) { setFb(fb, "bad", `Your answer is only ${wordCount} words. You need at least ${minWords}. Keep going!`); return; }

  const lower   = val.toLowerCase();
  const matched = keys.filter(k => lower.includes(k.toLowerCase()));
  const ratio   = keys.length > 0 ? matched.length / keys.length : 1;
  const missing = keys.filter(k => !matched.includes(k));

  if (ratio >= threshold) {
    setFb(fb, "good", `✅ Excellent! You covered key ideas (${matched.join(", ")}). +${pts} points!`);
    if (inputEl) inputEl.readOnly = true;
    disableSubmitBtn(level, section);
    addScore(section, pts);
    markLevelDone(section, level);
  } else if (ratio >= threshold * 0.5 && wordCount >= minWords * 1.5) {
    const earned = Math.ceil(pts / 2);
    setFb(fb, "info", `👍 Good effort! Half marks: +${earned} pts. Also try addressing: ${missing.slice(0,3).join(", ")}.`);
    if (inputEl) inputEl.readOnly = true;
    disableSubmitBtn(level, section);
    addScore(section, earned);
    markLevelDone(section, level);
  } else {
    setFb(fb, "bad", `❌ Not enough relevant content. Include ideas about: ${missing.slice(0,4).join(", ")}. Rewrite and try again!`);
  }
}

function setFb(el, type, msg) {
  if (!el) return;
  el.className = `feedback ${type} show`;
  el.innerHTML = msg;
}
function disableSubmitBtn(level, section) {
  const btn = document.querySelector(`.submit-btn[onclick*="submitAnswer('${section}',${level})"], .submit-btn[onclick*="submitStory(${level},"]`);
  if (btn) { btn.disabled = true; btn.textContent = "Submitted ✓"; btn.style.opacity = "0.5"; }
}

/* ===== SCORE ===== */
function addScore(section, pts) {
  sectionScores[section] = (sectionScores[section] || 0) + pts;
  totalScore += pts;
  updateTopScore();
  const el = document.getElementById(`${section}-score-display`);
  if (el) el.textContent = `⭐ ${sectionScores[section]}`;
  saveScores();
}
function updateTopScore() {
  const el = document.getElementById("topbar-score");
  if (el) el.textContent = `⭐ ${totalScore} pts`;
}

/* ===== LEADERBOARD ===== */
async function loadLeaderboard() {
  const listEl    = document.getElementById("lb-list");
  const rankEl    = document.getElementById("lb-your-rank");
  listEl.innerHTML = `<div class="lb-loading">Loading scores…</div>`;
  rankEl.innerHTML = "";
  try {
    const res = await fetch(SCORES_API, { cache: "no-store" });
    if (!res.ok) throw new Error(`Server error ${res.status}`);
    const data = await res.json();
    if (!data) {
      listEl.innerHTML = `<div class="lb-empty">No scores yet — be the first to earn points! 🏆</div>`;
      return;
    }
    const entries = Object.values(data)
      .filter(d => d && typeof d.total === "number")
      .sort((a, b) => b.total - a.total);

    if (entries.length === 0) {
      listEl.innerHTML = `<div class="lb-empty">No scores yet — be the first to earn points! 🏆</div>`;
      return;
    }

    // Find current user rank
    const myRank = entries.findIndex(e => e.name === currentUser);
    if (myRank !== -1) {
      const me = entries[myRank];
      rankEl.innerHTML = `
        <div class="lb-my-card">
          <span class="lb-my-rank">#${myRank + 1}</span>
          <span class="lb-my-label">Your Rank</span>
          <span class="lb-my-pts">⭐ ${me.total} pts</span>
        </div>`;
    }

    const medals = ["🥇","🥈","🥉"];
    listEl.innerHTML = entries.map((e, i) => {
      const isMe  = e.name === currentUser;
      const medal = medals[i] || `<span class="lb-rank-num">${i + 1}</span>`;
      return `
        <div class="lb-row${isMe ? " lb-row-me" : ""}">
          <div class="lb-rank-cell">${medal}</div>
          <div class="lb-info">
            <div class="lb-name">${escapeHtml(e.name)}${isMe ? " <span class='lb-you'>YOU</span>" : ""}</div>
            <div class="lb-grade">${escapeHtml(e.grade || "")}</div>
          </div>
          <div class="lb-breakdown">
            <span>📝${e.answer||0}</span>
            <span>🔢${e.maths||0}</span>
            <span>📖${e.story||0}</span>
            <span>🧠${e.psychology||0}</span>
          </div>
          <div class="lb-total">⭐ ${e.total}</div>
        </div>`;
    }).join("");
  } catch (err) {
    listEl.innerHTML = `<div class="lb-error">⚠️ Could not load leaderboard: ${err.message}</div>`;
  }
}

/* ===== MAGIC CHAT ===== */
async function loadMessages() {
  const container = document.getElementById("chat-messages");
  const errEl     = document.getElementById("chat-error");
  if (!container) return;
  try {
    const res = await fetch(CHAT_API, { cache: "no-store" });
    if (!res.ok) throw new Error(`Server error ${res.status}`);
    const msgs = await res.json();
    errEl.classList.add("hidden");
    container.innerHTML = "";
    if (!msgs || msgs.length === 0) {
      container.innerHTML = '<p class="no-msg">No messages yet. Be the first! ✨</p>';
      return;
    }
    msgs.forEach(msg => {
      const row = document.createElement("div");
      row.className = "msg-row " + (msg.name === currentUser ? "mine" : "others");
      row.innerHTML = `<div class="msg-name">${escapeHtml(msg.name)}</div><div class="msg-bubble">${escapeHtml(msg.text)}</div>`;
      container.appendChild(row);
    });
    container.scrollTop = container.scrollHeight;
  } catch (e) {
    errEl.classList.remove("hidden");
    errEl.innerHTML = `⚠️ Cannot load chat: ${e.message}`;
  }
}

async function sendMessage() {
  const input = document.getElementById("chat-input");
  const errEl = document.getElementById("chat-error");
  const text  = input.value.trim();
  if (!text) return;
  input.value = "";
  try {
    const res = await fetch(CHAT_API, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ name: currentUser, text })
    });
    if (!res.ok) throw new Error(`Server error ${res.status}`);
    errEl.classList.add("hidden");
    await loadMessages();
  } catch (e) {
    errEl.classList.remove("hidden");
    errEl.innerHTML = `⚠️ Send failed: ${e.message}`;
    input.value = text;
  }
}

function startPolling() { stopPolling(); loadMessages(); pollInterval = setInterval(loadMessages, 3000); }
function stopPolling()  { if (pollInterval) { clearInterval(pollInterval); pollInterval = null; } }

/* ===== ADMIN / TEACHER DASHBOARD ===== */
let allAdminStudents = [];

async function loadAdminData() {
  const listEl    = document.getElementById("admin-student-list");
  const summaryEl = document.getElementById("admin-summary");
  if (listEl) listEl.innerHTML = `<div class="lb-loading">Loading student data…</div>`;
  try {
    const res  = await fetch(SCORES_API, { cache: "no-store" });
    if (!res.ok) throw new Error(`Server error ${res.status}`);
    const data = await res.json();

    allAdminStudents = Object.values(data)
      .filter(d => d && typeof d.total === "number")
      .sort((a, b) => b.total - a.total);

    const totalStudents  = allAdminStudents.length;
    const totalPts       = allAdminStudents.reduce((s, d) => s + (d.total || 0), 0);
    const totalLevels    = allAdminStudents.reduce((s, d) =>
      s + (d.completedAnswer||[]).length + (d.completedMaths||[]).length +
          (d.completedStory||[]).length + (d.completedPsychology||[]).length, 0);
    const topStudent     = allAdminStudents[0];

    if (summaryEl) {
      summaryEl.innerHTML = `
        <div class="admin-stat-card"><div class="stat-val">${totalStudents}</div><div class="stat-lbl">Total Students</div></div>
        <div class="admin-stat-card"><div class="stat-val">${totalPts.toLocaleString()}</div><div class="stat-lbl">Total Points Earned</div></div>
        <div class="admin-stat-card"><div class="stat-val">${totalLevels}</div><div class="stat-lbl">Levels Completed</div></div>
        <div class="admin-stat-card"><div class="stat-val">${topStudent ? escapeHtml(topStudent.name.split(" ")[0]) : "—"}</div><div class="stat-lbl">Top Student</div></div>`;
    }

    renderAdminStudents(allAdminStudents);
  } catch (e) {
    if (listEl) listEl.innerHTML = `<div class="lb-error">⚠️ Could not load data: ${e.message}</div>`;
  }
}

function renderAdminStudents(students) {
  const listEl = document.getElementById("admin-student-list");
  if (!listEl) return;
  if (!students || students.length === 0) {
    listEl.innerHTML = `<div class="admin-empty">No students have logged in yet. Share the password <strong>student123</strong> with your class!</div>`;
    return;
  }
  listEl.innerHTML = students.map((d, i) => {
    const initials   = d.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
    const ansLevels  = (d.completedAnswer     || []).length;
    const mathLevels = (d.completedMaths      || []).length;
    const storyLevels= (d.completedStory      || []).length;
    const psychLevels= (d.completedPsychology || []).length;
    const totalDone  = ansLevels + mathLevels + storyLevels + psychLevels;
    const lastSeen   = d.lastSeen ? timeAgo(d.lastSeen) : "Never";
    return `
      <div class="admin-student-card">
        <div class="admin-student-header">
          <div class="admin-student-avatar">${escapeHtml(initials)}</div>
          <div class="admin-student-info">
            <div class="admin-student-name">${escapeHtml(d.name)}
              ${i === 0 ? '<span class="lb-you">TOP</span>' : ""}
            </div>
            <div class="admin-student-meta">${escapeHtml(d.grade || "No grade")} &nbsp;·&nbsp; ${totalDone} levels done</div>
          </div>
          <div class="admin-total-score">⭐ ${(d.total || 0).toLocaleString()} pts</div>
        </div>
        <div class="admin-score-grid">
          <div class="admin-score-item">
            <div class="asi-label">📝 Answer</div>
            <div class="asi-pts">${d.answer || 0} pts</div>
            <div class="asi-levels">${ansLevels} levels</div>
          </div>
          <div class="admin-score-item">
            <div class="asi-label">🔢 Maths</div>
            <div class="asi-pts">${d.maths || 0} pts</div>
            <div class="asi-levels">${mathLevels} levels</div>
          </div>
          <div class="admin-score-item">
            <div class="asi-label">📖 Story</div>
            <div class="asi-pts">${d.story || 0} pts</div>
            <div class="asi-levels">${storyLevels} levels</div>
          </div>
          <div class="admin-score-item">
            <div class="asi-label">🧠 Psychology</div>
            <div class="asi-pts">${d.psychology || 0} pts</div>
            <div class="asi-levels">${psychLevels} levels</div>
          </div>
        </div>
        <div class="admin-last-seen">Last active: ${lastSeen}</div>
      </div>`;
  }).join("");
}

function filterAdminStudents() {
  const q       = (document.getElementById("admin-search").value || "").toLowerCase().trim();
  const results = q ? allAdminStudents.filter(d => d.name.toLowerCase().includes(q)) : allAdminStudents;
  renderAdminStudents(results);
}

function doAdminLogout() {
  allAdminStudents = [];
  document.getElementById("login-pass").value = "";
  showPage("login");
}

function timeAgo(ts) {
  const sec = Math.floor((Date.now() - ts) / 1000);
  if (sec < 60)    return "just now";
  if (sec < 3600)  return Math.floor(sec / 60)  + "m ago";
  if (sec < 86400) return Math.floor(sec / 3600) + "h ago";
  return Math.floor(sec / 86400) + "d ago";
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;")
    .replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
