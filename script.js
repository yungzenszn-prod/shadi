const stateKey = "weddingQuestState";

const wordleItems = [
  {
    question: "What board game did Sanju and Amish play when they visited Michigan?",
    answer: "GANJALAND",
  },
  { question: "What is Amish’s current hip hop producer name?", answer: "YUNGZEN" },
  {
    question:
      "What random animal did Amish, Dev, and Kundu spot in the middle of a parking lot in Michigan?",
    answer: "TURTLE",
  },
  {
    question:
      "What was the gesture 🤏 (tapping the index finger and thumb repeatedly) used to signal to pass?",
    answer: "VAPE",
  },
  {
    question:
      "When Amish and Sanju made Aate ka Halwa, why didn’t people eat a lot of it, even when it tasted amazing? What did it contain?",
    answer: "WEED",
  },
  {
    question:
      "What is a phrase/word Sanju uses as a post script anytime she shares info about others that has nothing to do with her?",
    answer: "ITSEEMS",
  },
  {
    question:
      "While smoking on the Potomac River in DC, what activity was everyone engrossed in?",
    answer: "PHONE",
  },
  { question: "Controversial: What character does Amish’s ex look like?", answer: "EGBERT" },
  {
    question: "What is the name of the song Amish wrote for Sanjana: ____ jam?",
    answer: "AIRPLANE",
  },
  { question: "Sanjana did what business back in India?", answer: "STORE" },
  {
    question: "Who was the first ever person to catch Sanjana and Amish getting touchy?",
    answer: "SHAKIR",
  },
  { question: "If Sanj goes missing, which store would you go to find her?", answer: "TRADERJOES" },
  { question: "What is Amish’s birthplace?", answer: "PLANO" },
  { question: "Sanjana hates this character in Stranger Things?", answer: "NANCY" },
  {
    question:
      "At what speed was Sanjana driving when she got pulled over on the way to Ocean City?",
    answer: "NINETY",
  },
  {
    question: "What’s the name of the DJ Sanjana and Amish first candy-flipped at?",
    answer: "BHASKAR",
  },
  {
    question:
      "What is the plug’s name that provided the green supreme to the DC crew regularly?",
    answer: "CHINO",
  },
  {
    question: "What was the name of the bar they went to just before throwing up in DC?",
    answer: "DECADES",
  },
  {
    question: "What was the name of the kitten Amish and Sanjana found in the apartment building?",
    answer: "KNIGHT",
  },
  {
    question: "How many days did Amish live in Columbia Plaza in his first semester? _",
    answer: "ZERO",
  },
  {
    question: "If Sanjana ever created a horcrux, it would be a _ bottle:",
    answer: "WATER",
  },
  { question: "How many movies does Amish consider his favorites?", answer: "INFINITE" },
  {
    question: "What was the first trip Sanjana and Amish took with Shakir and Upmanyu?",
    answer: "OCEANCITY",
  },
  { question: "In Nashville, which satanic shot did Amish discover? _ juice", answer: "PICKLE" },
  {
    question: "At which music festival did Sam, DD, and Amish sneak in liquor?",
    answer: "ROLLINGLOUD",
  },
  {
    question:
      "What were Shakir and Amish watching in the car on the way to Nashville? LOGAN PAUL VS?",
    answer: "MIKETYSON",
  },
  {
    question:
      "On the New York trip, what piece of tech did Sam and Sanju buy that they definitely didn’t need?",
    answer: "SHOCKZ",
  },
];

const bingoItems = [
  "Take a picture of me/us",
  "Someone cries",
  "Husband",
  "Wife",
  "Unsolicited advice",
  "Photographer: \"One more shot\"",
  "Forgot something at home",
  "Laughing mid-vows",
  "Quick snack break",
];

const defaultState = {
  role: null,
  npcName: "",
  npcNames: [],
  activePage: "dashboard",
  milestones: {},
  wordle: {
    version: 3,
    solved: [],
    incorrect: [],
    index: 0,
    guesses: [],
    score: { correct: 0, incorrect: 0 },
  },
  bingoCompleted: { rows: [], cols: [], diags: [] },
  bingo: Array(9).fill(false),
  valentineAccepted: false,
};

const elements = {
  roleStatus: document.getElementById("role-status"),
  npcName: document.getElementById("npc-name"),
  npcResume: document.getElementById("npc-resume"),
  weddingTimer: document.getElementById("wedding-timer"),
  weddingStatus: document.getElementById("wedding-status"),
  valentineTimer: document.getElementById("valentine-timer"),
  countdownPanel: document.getElementById("countdown-panel"),
  questLog: document.getElementById("quest-log"),
  wordleGrid: document.getElementById("wordle-grid"),
  wordleQuestion: document.getElementById("wordle-question"),
  wordleGuess: document.getElementById("wordle-guess"),
  wordleSubmit: document.getElementById("wordle-submit"),
  wordleMeta: document.getElementById("wordle-meta"),
  incorrectAnswers: document.getElementById("incorrect-answers"),
  correctAnswers: document.getElementById("correct-answers"),
  bingoStatus: document.getElementById("bingo-status"),
  bingoGrid: document.getElementById("bingo-grid"),
  valentineBanner: document.getElementById("valentine-banner"),
  valentineYes: document.getElementById("valentine-yes"),
  valentineNo: document.getElementById("valentine-no"),
  notification: document.getElementById("notification"),
  rules: document.getElementById("rules"),
  openRules: document.getElementById("open-rules"),
  closeRules: document.getElementById("close-rules"),
  valentineText: document.getElementById("valentine-text"),
};

const weddingDate = new Date("2026-02-06T16:30:00-06:00");
const valentinesDate = new Date("2026-02-14T00:00:00");

const milestoneConfig = [
  { id: "t-24", label: "T-24", subtitle: "Cold Feet Checkpoint", icon: "🧊" },
  { id: "t-18", label: "T-18", subtitle: "Snack Raid Prep", icon: "🍪" },
  { id: "t-12", label: "T-12", subtitle: "Outfit Inventory", icon: "👗" },
  { id: "t-6", label: "T-6", subtitle: "Final Hair Flip", icon: "💇" },
  { id: "t-2", label: "T-2", subtitle: "Steady Breathing", icon: "🫶" },
  { id: "t-1", label: "T-1", subtitle: "Ring Patrol", icon: "💍" },
  { id: "t-0", label: "T-0 🎉", subtitle: "Courtroom Confetti", icon: "🎉" },
  { id: "t+3", label: "T+3", subtitle: "Post-Wed Glow", icon: "✨" },
  { id: "valentine", label: "Valentine’s Day 💕", subtitle: "Extra Romance Patch", icon: "💞" },
];

const milestoneTimes = {
  "t-24": new Date(weddingDate.getTime() - 24 * 60 * 60 * 1000),
  "t-18": new Date(weddingDate.getTime() - 18 * 60 * 60 * 1000),
  "t-12": new Date(weddingDate.getTime() - 12 * 60 * 60 * 1000),
  "t-6": new Date(weddingDate.getTime() - 6 * 60 * 60 * 1000),
  "t-2": new Date(weddingDate.getTime() - 2 * 60 * 60 * 1000),
  "t-1": new Date(weddingDate.getTime() - 1 * 60 * 60 * 1000),
  "t-0": new Date(weddingDate.getTime()),
  "t+3": new Date(weddingDate.getTime() + 3 * 24 * 60 * 60 * 1000),
  valentine: valentinesDate,
};

const npcRoasts = [
  "NPC detected. You may proceed... begrudgingly.",
  "Side character mode engaged. Try not to steal the spotlight.",
  "System note: main characters are elsewhere.",
];

const valentinePrompts = [
  "Be my Valentine? 💘",
  "Grant me one Valentine? 🌹",
  "Say yes for snacks & love? 🍪",
  "Will you be my favorite? 💞",
  "Court-approved Valentine? 💍",
  "One yes, infinite cuddles? ☁️",
  "Choose me, Valentine edition? ✨",
  "Confirm: you are my Valentine? 💌",
];

let state = loadState();
let notificationQueue = [];
let isNotifying = false;

function loadState() {
  const stored = localStorage.getItem(stateKey);
  if (!stored) return { ...defaultState };
  try {
    const parsed = JSON.parse(stored);
    const storedVersion = parsed?.wordle?.version || 0;
    return {
      ...defaultState,
      ...parsed,
      wordle:
        storedVersion === defaultState.wordle.version
          ? {
              ...defaultState.wordle,
              ...parsed.wordle,
              score: { ...defaultState.wordle.score, ...parsed.wordle?.score },
            }
          : { ...defaultState.wordle },
      bingoCompleted: {
        ...defaultState.bingoCompleted,
        ...parsed.bingoCompleted,
      },
    };
  } catch (error) {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function setRole(role, npcName = "") {
  state.role = role;
  state.npcName = npcName || "";
  if (role === "npc" && npcName) {
    if (!state.npcNames.includes(npcName)) {
      state.npcNames.push(npcName);
    }
  }
  saveState();
  applyRole();
}

function applyRole() {
  const status = elements.roleStatus;
  document.body.classList.remove("role-sanjana", "role-amish", "role-none");
  if (!state.role) {
    status.classList.remove("show");
    document.body.classList.remove("npc-mode", "start-only");
    document.body.classList.add("start-only", "role-none");
    document.body.classList.remove("role-selected");
    document.querySelectorAll("#character-select .card").forEach((card) => {
      card.classList.remove("selected");
    });
    elements.valentineBanner.style.display = "none";
    return;
  }
  const isNpc = state.role === "npc";
  document.body.classList.toggle("npc-mode", isNpc);
  document.body.classList.remove("start-only");
  document.body.classList.add("role-selected");
  if (state.role === "sanjana") document.body.classList.add("role-sanjana");
  if (state.role === "amish") document.body.classList.add("role-amish");
  document.querySelectorAll("#character-select .card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.role === state.role);
  });
  const name = isNpc ? state.npcName || "Unnamed NPC" : state.role;
  const roast = isNpc
    ? npcRoasts[Math.floor(Math.random() * npcRoasts.length)]
    : "Main character energy restored.";
  status.textContent = `Logged in as ${name}. ${roast}`;
  status.classList.add("show");
  setActivePage(state.activePage || "dashboard");
  if (state.role === "sanjana") {
    elements.valentineBanner.style.display = "flex";
    if (state.valentineAccepted) {
      elements.valentineText.textContent = "You are my valentine- no backsies!";
    } else {
      elements.valentineText.textContent = valentinePrompts[0];
    }
  } else {
    elements.valentineBanner.style.display = "none";
  }
}

function setActivePage(page) {
  const pages = document.querySelectorAll(".page");
  const tabs = document.querySelectorAll(".tab");
  pages.forEach((section) => {
    section.classList.toggle("active", section.dataset.page === page);
  });
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === page);
  });
  state.activePage = page;
  saveState();
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      setActivePage(tab.dataset.tab);
    });
  });
}

function renderNpcResume() {
  elements.npcResume.innerHTML = "";
  if (!state.npcNames.length) return;
  const label = document.createElement("div");
  label.className = "npc-note";
  label.textContent = "Resume as:";
  elements.npcResume.appendChild(label);
  state.npcNames.forEach((name) => {
    const button = document.createElement("button");
    button.textContent = name;
    button.addEventListener("click", () => {
      setRole("npc", name);
      elements.npcName.value = name;
    });
    elements.npcResume.appendChild(button);
  });
}

function setupRoleButtons() {
  document.querySelectorAll("[data-enter]").forEach((button) => {
    button.addEventListener("click", () => {
      const role = button.dataset.enter;
      if (role === "npc") {
        const npcName = elements.npcName.value.trim();
        if (!npcName) {
          showNotification("NPC login", "Name required. The system insists.");
          return;
        }
        setRole("npc", npcName);
        showNotification("NPC mode", `Welcome, Side Character. Your presence is... noted.`);
        return;
      }
      setRole(role, "");
      showNotification("Hero login", `${role} unlocked. Journey mode engaged.`);
    });
  });
  document.querySelectorAll("[data-exit]").forEach((button) => {
    button.addEventListener("click", () => {
      state.role = null;
      state.npcName = "";
      saveState();
      applyRole();
    });
  });
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = String(Math.floor(totalSeconds / 86400)).padStart(2, "0");
  const hours = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${days} : ${hours} : ${minutes} : ${seconds}`;
}

function updateCountdowns() {
  const now = new Date();
  const weddingDiff = weddingDate - now;
  const valentineDiff = valentinesDate - now;
  elements.weddingTimer.textContent = formatDuration(weddingDiff);
  elements.valentineTimer.textContent = formatDuration(valentineDiff);

  if (weddingDiff <= 48 * 60 * 60 * 1000 && weddingDiff > 0) {
    elements.weddingTimer.classList.add("heartbeat");
  } else {
    elements.weddingTimer.classList.remove("heartbeat");
  }

  if (weddingDiff <= 0) {
    elements.weddingStatus.textContent = "Status: Married. Quest complete.";
  } else {
    elements.weddingStatus.textContent = "Status: Countdown locked.";
  }
}

function renderQuestLog() {
  elements.questLog.innerHTML = "";
  const now = new Date();
  milestoneConfig.forEach((milestone) => {
    const time = milestoneTimes[milestone.id];
    const complete = now >= time || state.milestones[milestone.id];
    const quest = document.createElement("div");
    quest.className = `quest${complete ? " complete" : ""}`;
    quest.innerHTML = `
      <div class="icon">${milestone.icon}</div>
      <div>
        <div class="title">
          ${milestone.label}
          ${complete ? '<span class="quest-check">✓</span>' : ""}
        </div>
        <div class="subtitle">${milestone.subtitle}</div>
        ${complete ? '<div class="quest-pill">Well, no going back!</div>' : ""}
      </div>
    `;
    elements.questLog.appendChild(quest);
  });
}

function checkMilestones() {
  const now = new Date();
  milestoneConfig.forEach((milestone) => {
    const time = milestoneTimes[milestone.id];
    const reached = now >= time;
    if (reached && !state.milestones[milestone.id]) {
      state.milestones[milestone.id] = true;
      saveState();
      renderQuestLog();
      burstConfetti();
      queueNotification(
        `Milestone ${milestone.label}`,
        `The Wedding System 🤖 says: ${milestone.subtitle}. Email queued.`
      );
    }
  });
}

function burstConfetti() {
  const confetti = document.createElement("div");
  confetti.style.position = "fixed";
  confetti.style.inset = "0";
  confetti.style.pointerEvents = "none";
  confetti.style.zIndex = "50";
  confetti.innerHTML = "<div style='position:absolute;top:20%;left:50%;transform:translateX(-50%);font-size:32px'>🎊</div>";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 1200);
}

function queueNotification(title, message) {
  notificationQueue.push({ title, message });
  if (!isNotifying) showNextNotification();
}

function showNotification(title, message) {
  queueNotification(title, message);
}

function showNextNotification() {
  if (!notificationQueue.length) {
    isNotifying = false;
    return;
  }
  isNotifying = true;
  const { title, message } = notificationQueue.shift();
  elements.notification.innerHTML = `<strong>${title}</strong><div>${message}</div>`;
  elements.notification.classList.add("show");
  setTimeout(() => {
    elements.notification.classList.remove("show");
    setTimeout(showNextNotification, 250);
  }, 4200);
}

function getCurrentWordleItem() {
  return wordleItems[state.wordle.index];
}

function getCurrentWordLength() {
  return getCurrentWordleItem()?.answer.length || 5;
}

function renderWordleGrid() {
  elements.wordleGrid.innerHTML = "";
  const cols = getCurrentWordLength();
  for (let row = 0; row < 5; row++) {
    const rowEl = document.createElement("div");
    rowEl.className = "wordle-row";
    rowEl.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    for (let col = 0; col < cols; col++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      rowEl.appendChild(tile);
    }
    elements.wordleGrid.appendChild(rowEl);
  }
}

function updateWordleMeta(text) {
  const score = state.wordle.score;
  const doneCount = score.correct + score.incorrect;
  elements.wordleMeta.textContent = `${text} • ${doneCount}/${wordleItems.length} questions done • Score ${score.correct} correct, ${score.incorrect} incorrect`;
}

function getNextWordleIndex() {
  return wordleItems.findIndex(
    (_, index) =>
      !state.wordle.solved.includes(index) && !state.wordle.incorrect.includes(index)
  );
}

function applyGuessesToGrid() {
  const cols = getCurrentWordLength();
  const rows = Array.from(elements.wordleGrid.children);
  rows.forEach((row, rowIndex) => {
    const tiles = Array.from(row.children);
    const guess = state.wordle.guesses[rowIndex];
    const answer = (getCurrentWordleItem()?.answer || "").toLowerCase();
    const score = guess ? scoreGuess(guess, answer) : [];
    tiles.forEach((tile, colIndex) => {
      if (colIndex >= cols) return;
      tile.textContent = guess ? guess[colIndex] : "";
      tile.classList.remove("correct", "present", "absent");
      if (score[colIndex]) tile.classList.add(score[colIndex]);
    });
  });
}

function scoreGuess(guess, answer) {
  const result = Array(answer.length).fill("absent");
  const answerChars = answer.split("");
  const guessChars = guess.split("");
  guessChars.forEach((char, index) => {
    if (char === answerChars[index]) {
      result[index] = "correct";
      answerChars[index] = "_";
    }
  });
  guessChars.forEach((char, index) => {
    if (result[index] === "correct") return;
    const foundIndex = answerChars.indexOf(char);
    if (foundIndex !== -1) {
      result[index] = "present";
      answerChars[foundIndex] = "_";
    }
  });
  return result;
}

function renderGuessRow(rowIndex, guess, score) {
  const row = elements.wordleGrid.children[rowIndex];
  if (!row) return;
  const tiles = row.children;
  for (let i = 0; i < score.length; i++) {
    tiles[i].textContent = guess[i] || "";
    tiles[i].classList.add(score[i]);
  }
}

function nextWordleRound() {
  const nextIndex = getNextWordleIndex();
  state.wordle.index = nextIndex === -1 ? wordleItems.length : nextIndex;
  state.wordle.guesses = [];
  saveState();
  renderWordleGrid();
  if (state.wordle.index >= wordleItems.length) {
    updateWordleMeta("All questions solved on this device. Legendary.");
    elements.wordleQuestion.textContent = "All questions complete.";
  } else {
    updateWordleMeta(`Round ${state.wordle.index + 1} of ${wordleItems.length}`);
    elements.wordleQuestion.textContent = getCurrentWordleItem().question;
  }
  const cols = getCurrentWordLength();
  elements.wordleGuess.setAttribute("maxlength", String(cols));
  elements.wordleGuess.placeholder = `Type ${cols} letters`;
}

function addAnswerPill(container, phrase, type) {
  const pill = document.createElement("span");
  pill.className = `pill-pill pill-pill--${type}`;
  pill.textContent = phrase;
  container.appendChild(pill);
}

function renderAnswerPills() {
  elements.incorrectAnswers.innerHTML = "";
  elements.correctAnswers.innerHTML = "";
  state.wordle.incorrect.forEach((index) => {
    addAnswerPill(elements.incorrectAnswers, wordleItems[index].answer, "danger");
  });
  state.wordle.solved.forEach((index) => {
    addAnswerPill(elements.correctAnswers, wordleItems[index].answer, "success");
  });
}

function handleWordleGuess() {
  const maxGuesses = 5;
  const expectedLength = getCurrentWordLength();
  const guess = elements.wordleGuess.value.trim().toLowerCase();
  if (!/^[a-z]+$/.test(guess) || guess.length !== expectedLength) {
    updateWordleMeta(`Enter exactly ${expectedLength} letters.`);
    return;
  }
  if (state.wordle.guesses.length >= maxGuesses) {
    updateWordleMeta("Round locked. All five attempts used.");
    return;
  }
  const index = state.wordle.index;
  if (index >= wordleItems.length) {
    updateWordleMeta("All questions solved on this device. Legendary.");
    return;
  }
  const answer = wordleItems[index].answer.toLowerCase();
  state.wordle.guesses.push(guess);
  const score = scoreGuess(guess, answer);
  renderGuessRow(state.wordle.guesses.length - 1, guess.toUpperCase(), score);
  elements.wordleGuess.value = "";

  if (guess === answer) {
    if (!state.wordle.solved.includes(index)) {
      state.wordle.solved.push(index);
      state.wordle.score.correct += 1;
    }
    renderAnswerPills();
    updateWordleMeta("Correct. Question cleared.");
    nextWordleRound();
    saveState();
    return;
  }

  if (state.wordle.guesses.length < maxGuesses) {
    updateWordleMeta(`Attempt ${state.wordle.guesses.length} of ${maxGuesses} logged.`);
    saveState();
    return;
  }

  if (!state.wordle.incorrect.includes(index)) {
    state.wordle.incorrect.push(index);
    state.wordle.score.incorrect += 1;
  }
  renderAnswerPills();
  updateWordleMeta(`Incorrect. Answer was ${wordleItems[index].answer}.`);
  nextWordleRound();
  saveState();
}

function renderBingo() {
  elements.bingoGrid.innerHTML = "";
  bingoItems.forEach((item, index) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "bingo-cell" + (state.bingo[index] ? " active" : "");
    cell.textContent = item;
    cell.addEventListener("click", () => {
      state.bingo[index] = !state.bingo[index];
      saveState();
      renderBingo();
      checkBingoRow();
    });
    elements.bingoGrid.appendChild(cell);
  });
  renderBingoRewards();
}

function checkBingoRow() {
  renderBingoRewards();
}

function renderBingoRewards() {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const cols = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const diags = [
    [0, 4, 8],
    [2, 4, 6],
  ];
  const completedRows = rows
    .map((row, index) => (row.every((idx) => state.bingo[idx]) ? index : null))
    .filter((value) => value !== null);
  const completedCols = cols
    .map((col, index) => (col.every((idx) => state.bingo[idx]) ? index : null))
    .filter((value) => value !== null);
  const completedDiags = diags
    .map((diag, index) => (diag.every((idx) => state.bingo[idx]) ? index : null))
    .filter((value) => value !== null);

  state.bingoCompleted.rows = completedRows;
  state.bingoCompleted.cols = completedCols;
  state.bingoCompleted.diags = completedDiags;
  saveState();

  elements.bingoStatus.innerHTML = "";
  if (completedRows.length + completedCols.length + completedDiags.length >= 8) {
    const mega = document.createElement("span");
    mega.className = "bingo-mega";
    mega.textContent = "BINGO!";
    elements.bingoStatus.appendChild(mega);
    return;
  }
  completedRows.forEach((index) => {
    addBingoPill(`Row ${index + 1} cleared!`);
  });
  completedCols.forEach((index) => {
    addBingoPill(`Column ${index + 1} cleared!`);
  });
  completedDiags.forEach((index) => {
    addBingoPill(`Diagonal ${index + 1} cleared!`);
  });
}

function addBingoPill(label) {
  const pill = document.createElement("span");
  pill.className = "bingo-pill";
  pill.textContent = `🎉 ${label}`;
  elements.bingoStatus.appendChild(pill);
}

function setupValentineBanner() {
  elements.valentineNo.addEventListener("click", () => {
    cycleValentinePrompt();
  });

  const accept = () => {
    state.valentineAccepted = true;
    saveState();
    elements.valentineText.textContent = "You are my valentine- no backsies!";
    elements.valentineBanner.style.display = "flex";
  };
  elements.valentineYes.addEventListener("click", accept);
}

function cycleValentinePrompt() {
  if (state.valentineAccepted) return;
  const current = elements.valentineText.textContent;
  const options = valentinePrompts.filter((prompt) => prompt !== current);
  const next = options[Math.floor(Math.random() * options.length)];
  elements.valentineText.textContent = next;
}

function setupRules() {
  const open = () => {
    elements.rules.classList.add("show");
    elements.rules.setAttribute("aria-hidden", "false");
  };
  const close = () => {
    elements.rules.classList.remove("show");
    elements.rules.setAttribute("aria-hidden", "true");
  };
  elements.openRules.addEventListener("click", open);
  elements.closeRules.addEventListener("click", close);
}

function initWordle() {
  renderWordleGrid();
  const nextIndex = getNextWordleIndex();
  state.wordle.index = nextIndex === -1 ? wordleItems.length : nextIndex;
  if (state.wordle.index >= wordleItems.length) {
    updateWordleMeta("All questions solved on this device. Legendary.");
    elements.wordleQuestion.textContent = "All questions complete.";
  } else {
    updateWordleMeta(`Round ${state.wordle.index + 1} of ${wordleItems.length}`);
    elements.wordleQuestion.textContent = getCurrentWordleItem().question;
  }
  const cols = getCurrentWordLength();
  elements.wordleGuess.setAttribute("maxlength", String(cols));
  elements.wordleGuess.placeholder = `Type ${cols} letters`;
  applyGuessesToGrid();
  renderAnswerPills();
  elements.wordleSubmit.addEventListener("click", handleWordleGuess);
  elements.wordleGuess.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleWordleGuess();
  });
}

function init() {
  state.role = null;
  setupRoleButtons();
  setupTabs();
  renderNpcResume();
  applyRole();
  updateCountdowns();
  renderQuestLog();
  checkMilestones();
  initWordle();
  renderBingo();
  setupValentineBanner();
  setupRules();
  if (!state.role) {
    document.body.classList.add("start-only", "role-none");
  } else {
    setActivePage(state.activePage || "dashboard");
  }
  setInterval(() => {
    updateCountdowns();
    checkMilestones();
  }, 1000);
}

init();
