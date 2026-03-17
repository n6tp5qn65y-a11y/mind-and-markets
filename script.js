const STORAGE_KEY = "mind_markets_ultra_v1";

const defaultProgress = {
  selectedTrack: null,
  points: 0,
  completedLessons: [],
  solvedQuizzes: [],
  claimedQuests: [],
  seenLevelRewards: []
};

const TRACKS = {
  debutant: {
    label: "Débutant",
    emoji: "🌱",
    description: "Bases ultra claires, notions fondamentales, compréhension rassurante."
  },
  intermediaire: {
    label: "Intermédiaire",
    emoji: "📈",
    description: "Approfondissement, logique de marché, macro, construction d’analyse."
  },
  professionnel: {
    label: "Professionnel",
    emoji: "🧠",
    description: "Approches avancées, interview-style, notes d’analyse, cas et ressources premium."
  }
};

const TOPIC_BANK = {
  debutant: [
    { category: "Marchés", emoji: "📈", title: "C’est quoi une action ?", chart: "bars", hook: "Comprendre ce qu’on achète vraiment en bourse." },
    { category: "Marchés", emoji: "🪙", title: "Bitcoin, c’est quoi ?", chart: "line", hook: "Découvrir l’idée derrière les crypto-actifs." },
    { category: "Macro", emoji: "🔥", title: "L’inflation simplement", chart: "inflation", hook: "Pourquoi les prix montent et pourquoi ça change tout." },
    { category: "Macro", emoji: "🏦", title: "Le rôle des banques centrales", chart: "bars", hook: "Pourquoi les taux d’intérêt influencent l’économie." },
    { category: "Business", emoji: "💼", title: "Les bases du marketing", chart: "funnel", hook: "Comprendre une offre, une cible et une promesse." },
    { category: "Business", emoji: "✨", title: "C’est quoi une marque ?", chart: "brand", hook: "La perception peut valoir très cher." },
    { category: "Investissement", emoji: "📊", title: "C’est quoi un ETF ?", chart: "bars", hook: "Investir dans un panier plutôt qu’un seul titre." },
    { category: "Investissement", emoji: "💳", title: "Comprendre le cashflow", chart: "cashflow", hook: "Ce qui entre, ce qui sort, et pourquoi c’est vital." },
    { category: "Business", emoji: "🐷", title: "Actifs vs passifs", chart: "assets", hook: "Une logique simple pour raisonner plus juste." },
    { category: "Marchés", emoji: "⚖️", title: "Offre et demande", chart: "line", hook: "Le mécanisme derrière l’évolution des prix." }
  ],
  intermediaire: [
    { category: "Marchés", emoji: "📉", title: "Pourquoi les marchés corrigent", chart: "line", hook: "Lire une baisse sans paniquer." },
    { category: "Macro", emoji: "🌍", title: "Macro et sentiment de marché", chart: "line", hook: "Le lien entre économie et prix d’actifs." },
    { category: "Investissement", emoji: "🧮", title: "Risque / rendement", chart: "bars", hook: "Toute performance a un prix." },
    { category: "Investissement", emoji: "🛡️", title: "Diversification intelligente", chart: "bars", hook: "Mieux répartir pour moins subir." },
    { category: "Business", emoji: "🎯", title: "Positionnement de marque", chart: "brand", hook: "Se différencier sans se perdre." },
    { category: "Business", emoji: "🧠", title: "Psychologie du consommateur", chart: "funnel", hook: "Ce qui influence vraiment une décision." },
    { category: "Macro", emoji: "📦", title: "Énergie et inflation", chart: "inflation", hook: "Pourquoi certaines hausses de prix contaminent tout." },
    { category: "Marchés", emoji: "💹", title: "Volatilité et liquidité", chart: "line", hook: "Quand le marché devient nerveux." },
    { category: "Investissement", emoji: "🪙", title: "Allocation crypto prudente", chart: "bars", hook: "Éviter le all-in irrationnel." },
    { category: "Business", emoji: "📣", title: "Funnel marketing", chart: "funnel", hook: "Transformer l’attention en conversion." }
  ],
  professionnel: [
    { category: "Marchés", emoji: "🧠", title: "Lecture d’un market brief", chart: "line", hook: "Analyser rapidement une séance." },
    { category: "Macro", emoji: "🏛️", title: "Taux réels et valorisation", chart: "bars", hook: "Quand la macro pèse sur les multiples." },
    { category: "Investissement", emoji: "🪙", title: "Interview investisseur : discipline", chart: "line", hook: "Penser process avant performance." },
    { category: "Business", emoji: "📚", title: "Étude de cas : pricing stratégique", chart: "bars", hook: "Le prix comme levier de perception." },
    { category: "Business", emoji: "🎙️", title: "Interview : construire une marque premium", chart: "brand", hook: "Clarté, désirabilité, cohérence." },
    { category: "Marchés", emoji: "💼", title: "Rotation sectorielle", chart: "bars", hook: "Pourquoi certains segments surperforment." },
    { category: "Macro", emoji: "📰", title: "Article : inflation sous-jacente", chart: "inflation", hook: "Aller au-delà du chiffre headline." },
    { category: "Investissement", emoji: "📊", title: "Case study : construire un portefeuille", chart: "cashflow", hook: "Objectif, horizon, risque, discipline." },
    { category: "Business", emoji: "🔍", title: "Analyse concurrentielle avancée", chart: "funnel", hook: "Lire une structure de marché." },
    { category: "Marchés", emoji: "₿", title: "Cycle crypto et gestion émotionnelle", chart: "line", hook: "La structure bat l’excitation." }
  ]
};

function createLessonsForTrack(trackKey, startId) {
  const bank = TOPIC_BANK[trackKey];
  const lessons = [];

  for (let i = 0; i < 50; i += 1) {
    const seed = bank[i % bank.length];
    const module = i + 1;
    const format =
      trackKey === "professionnel"
        ? ["Article", "Interview", "Analyse", "Case Study", "Brief"][i % 5]
        : "Leçon";

    lessons.push({
      id: startId + i,
      audience: trackKey,
      category: seed.category,
      emoji: seed.emoji,
      title: `${seed.title} • Module ${module}`,
      format,
      duration: `${3 + (i % 4)} min`,
      chart: seed.chart,
      summary: `${seed.hook} Ce module ${module} est calibré pour un niveau ${TRACKS[trackKey].label.toLowerCase()}.`,
      deeperText:
        trackKey === "debutant"
          ? `Dans ce module, l’objectif est d’aller au fond de la notion sans jargon inutile. On part d’un exemple simple, on clarifie le vocabulaire, puis on montre pourquoi cette idée compte vraiment dans le quotidien d’un investisseur, d’un étudiant ou d’un futur professionnel du business.`
          : trackKey === "intermediaire"
          ? `Ce module approfondit la notion en reliant plusieurs dimensions : contexte macro, logique de marché, lecture plus fine des mécanismes et erreurs fréquentes d’interprétation. L’idée est de passer d’une compréhension “théorique” à une grille d’analyse plus concrète.`
          : `Ce module adopte une approche plus premium : angle d’analyse, réflexion de process, logique de marché, points de friction et lecture plus mature. Le format peut s’apparenter à une note, un brief, une mini interview ou un cas d’étude pour s’inspirer d’une logique plus professionnelle.`,
      bullets: [
        `Idée-clé n°1 du module ${module}`,
        `Point de vigilance n°2 du module ${module}`,
        `Application concrète n°3 du module ${module}`
      ],
      quote:
        seed.category === "Business"
          ? "Idée inspirée de Père riche père pauvre : créer de la valeur durable compte plus qu’une impression de richesse."
          : null
    });
  }

  return lessons;
}

const lessons = [
  ...createLessonsForTrack("debutant", 1),
  ...createLessonsForTrack("intermediaire", 1001),
  ...createLessonsForTrack("professionnel", 2001)
];

function createQuizForLesson(lesson, quizId) {
  const baseRight =
    lesson.category === "Marchés"
      ? "Une logique liée au prix, au risque ou aux anticipations"
      : lesson.category === "Macro"
      ? "Un mécanisme économique qui influence l’ensemble du système"
      : lesson.category === "Business"
      ? "Une décision qui crée de la valeur pour une cible précise"
      : "Une approche structurée de gestion et d’allocation";

  const distractors = [
    "Une information sans impact réel",
    "Une réponse purement émotionnelle",
    "Un détail sans importance stratégique"
  ];

  const options = [baseRight, ...distractors];

  return {
    id: quizId,
    lessonId: lesson.id,
    audience: lesson.audience,
    emoji: lesson.emoji,
    question: `${lesson.title} — quelle formulation correspond le mieux à la logique centrale de cette leçon ?`,
    options,
    correctIndex: 0,
    explanation: `La bonne réponse renvoie à l’idée centrale travaillée dans la leçon « ${lesson.title} ».`,
    points:
      lesson.audience === "debutant"
        ? 35
        : lesson.audience === "intermediaire"
        ? 45
        : 60
  };
}

const quizzes = lessons.map((lesson, index) => createQuizForLesson(lesson, index + 1));

const questTemplates = [
  { title: "Lire 2 leçons", reward: 40, type: "lessonCount", target: 2 },
  { title: "Lire 5 leçons", reward: 70, type: "lessonCount", target: 5 },
  { title: "Réussir 1 QCM", reward: 50, type: "quizCount", target: 1 },
  { title: "Réussir 3 QCM", reward: 90, type: "quizCount", target: 3 },
  { title: "Atteindre 150 points", reward: 80, type: "points", target: 150 },
  { title: "Atteindre 300 points", reward: 120, type: "points", target: 300 },
  { title: "Atteindre le niveau 5", reward: 110, type: "level", target: 5 },
  { title: "Atteindre le niveau 10", reward: 160, type: "level", target: 10 },
  { title: "Finir 1 leçon business", reward: 70, type: "categoryLesson", target: "Business" },
  { title: "Finir 1 leçon marchés", reward: 70, type: "categoryLesson", target: "Marchés" }
];

const quests = Array.from({ length: 50 }, (_, i) => {
  const template = questTemplates[i % questTemplates.length];
  const multiplier = Math.floor(i / questTemplates.length) + 1;

  const target =
    typeof template.target === "number"
      ? template.target * multiplier
      : template.target;

  const unlockLevel =
    i < 10 ? 1 :
    i < 20 ? 4 :
    i < 30 ? 8 :
    i < 40 ? 14 : 22;

  return {
    id: i + 1,
    title:
      typeof template.target === "number"
        ? `${template.title} • Palier ${multiplier}`
        : `${template.title} • Série ${multiplier}`,
    reward: template.reward + multiplier * 12,
    type: template.type,
    target,
    unlockLevel
  };
});

const rewards = Array.from({ length: 50 }, (_, i) => {
  const level = i + 1;
  const pool = ["⭐", "🎯", "🏅", "🎁", "👑", "💎", "🚀", "🧠", "📈", "🔥"];
  const names = [
    "Explorateur",
    "Curieux",
    "Analyste Junior",
    "Stratège",
    "Architecte",
    "Pulse Reader",
    "Macro Scout",
    "Investor Mind",
    "Brand Builder",
    "Market Master"
  ];

  return {
    level,
    icon: pool[i % pool.length],
    title: `${names[i % names.length]} • Niv. ${level}`
  };
});

let progress = loadProgress();
let lessonAudienceFilter = "all";
let lessonCategoryFilter = "all";
let quizAudienceFilter = "recommended";

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { ...defaultProgress };
    return { ...defaultProgress, ...JSON.parse(saved) };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function levelFromPoints(points) {
  return Math.min(50, Math.floor(points / 120) + 1);
}

function nextLevelAt(level) {
  return level >= 50 ? 6000 : level * 120;
}

function getTrackLabel(track) {
  return TRACKS[track]?.label || "Débutant";
}

function getTrackEmoji(track) {
  return TRACKS[track]?.emoji || "🌱";
}

function getRecommendedLessons() {
  const activeTrack = progress.selectedTrack || "debutant";
  return lessons.filter((lesson) => lesson.audience === activeTrack).slice(0, 6);
}

function getVisibleLessons() {
  return lessons.filter((lesson) => {
    const audienceOk =
      lessonAudienceFilter === "all" ? true : lesson.audience === lessonAudienceFilter;
    const categoryOk =
      lessonCategoryFilter === "all" ? true : lesson.category === lessonCategoryFilter;
    return audienceOk && categoryOk;
  });
}

function getVisibleQuizzes() {
  if (quizAudienceFilter === "recommended") {
    return quizzes.filter((quiz) => {
      const lesson = lessons.find((l) => l.id === quiz.lessonId);
      return lesson?.audience === (progress.selectedTrack || "debutant");
    }).slice(0, 12);
  }

  return quizzes.filter((quiz) => quiz.audience === quizAudienceFilter).slice(0, 18);
}

function getLessonsByCategory(category) {
  return progress.completedLessons
    .map((id) => lessons.find((l) => l.id === id))
    .filter(Boolean)
    .filter((lesson) => lesson.category === category);
}

function isQuestUnlocked(quest) {
  return levelFromPoints(progress.points) >= quest.unlockLevel;
}

function isQuestCompleted(quest) {
  switch (quest.type) {
    case "lessonCount":
      return progress.completedLessons.length >= quest.target;
    case "quizCount":
      return progress.solvedQuizzes.length >= quest.target;
    case "points":
      return progress.points >= quest.target;
    case "level":
      return levelFromPoints(progress.points) >= quest.target;
    case "categoryLesson":
      return getLessonsByCategory(quest.target).length >= 1;
    default:
      return false;
  }
}

function updateTopStats() {
  const level = levelFromPoints(progress.points);
  const nextTarget = nextLevelAt(level);
  const currentLevelFloor = (level - 1) * 120;
  const levelProgressValue = progress.points - currentLevelFloor;
  const levelSpan = nextTarget - currentLevelFloor || 120;
  const fill = Math.min((levelProgressValue / levelSpan) * 100, 100);

  const trackLabel = getTrackLabel(progress.selectedTrack || "debutant");

  document.getElementById("trackStat").textContent = trackLabel;
  document.getElementById("levelStat").textContent = level;
  document.getElementById("pointsStat").textContent = progress.points;
  document.getElementById("questsStat").textContent = progress.claimedQuests.length;

  const lessonCountEls = document.querySelectorAll("#lessonsStat");
  lessonCountEls.forEach((el) => { el.textContent = progress.completedLessons.length; });

  const quizCountEls = document.querySelectorAll("#quizStat");
  quizCountEls.forEach((el) => { el.textContent = progress.solvedQuizzes.length; });

  document.getElementById("progressText").textContent = `${progress.points} / ${nextTarget}`;
  document.getElementById("progressBarFill").style.width = `${fill}%`;

  document.getElementById("heroTrackBadge").textContent = `${getTrackEmoji(progress.selectedTrack || "debutant")} ${trackLabel}`;

  if (progress.selectedTrack) {
    document.getElementById("heroRecommendationTitle").textContent =
      `Parcours ${trackLabel}`;
    document.getElementById("heroRecommendationText").textContent =
      TRACKS[progress.selectedTrack].description;
  }
}

function renderChart(type) {
  if (type === "bars") {
    return `
      <svg width="100%" height="110" viewBox="0 0 260 110" aria-hidden="true">
        <rect x="25" y="62" width="30" height="35" rx="8" fill="rgba(52,211,153,.45)"></rect>
        <rect x="78" y="44" width="30" height="53" rx="8" fill="rgba(52,211,153,.60)"></rect>
        <rect x="131" y="28" width="30" height="69" rx="8" fill="rgba(52,211,153,.75)"></rect>
        <rect x="184" y="12" width="30" height="85" rx="8" fill="rgba(16,185,129,1)"></rect>
      </svg>
    `;
  }

  if (type === "inflation") {
    return `
      <svg width="100%" height="110" viewBox="0 0 260 110" aria-hidden="true">
        <line x1="16" y1="92" x2="244" y2="92" stroke="rgba(255,255,255,.12)" stroke-width="2"></line>
        <polyline points="18,82 62,78 106,66 150,50 196,35 238,18"
          fill="none" stroke="#fb923c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></polyline>
      </svg>
    `;
  }

  if (type === "brand") {
    return `
      <svg width="100%" height="110" viewBox="0 0 260 110" aria-hidden="true">
        <circle cx="95" cy="55" r="34" fill="none" stroke="rgba(244,63,94,.65)" stroke-width="12"></circle>
        <circle cx="165" cy="55" r="22" fill="rgba(244,63,94,.75)"></circle>
      </svg>
    `;
  }

  if (type === "funnel") {
    return `
      <svg width="100%" height="110" viewBox="0 0 260 110" aria-hidden="true">
        <rect x="18" y="14" width="224" height="18" rx="9" fill="rgba(139,92,246,.85)"></rect>
        <rect x="36" y="40" width="188" height="18" rx="9" fill="rgba(139,92,246,.7)"></rect>
        <rect x="62" y="66" width="136" height="18" rx="9" fill="rgba(139,92,246,.55)"></rect>
      </svg>
    `;
  }

  if (type === "assets") {
    return `
      <svg width="100%" height="110" viewBox="0 0 260 110" aria-hidden="true">
        <rect x="24" y="20" width="90" height="68" rx="18" fill="rgba(163,230,53,.16)" stroke="rgba(163,230,53,.35)"></rect>
        <rect x="146" y="20" width="90" height="68" rx="18" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.12)"></rect>
        <text x="69" y="48" text-anchor="middle" fill="#d9f99d" font-size="14">Actifs</text>
        <text x="69" y="72" text-anchor="middle" fill="#d9f99d" font-size="28">↑</text>
        <text x="191" y="48" text-anchor="middle" fill="#cbd5e1" font-size="14">Passifs</text>
        <text x="191" y="72" text-anchor="middle" fill="#cbd5e1" font-size="28">↓</text>
      </svg>
    `;
  }

  return `
    <svg width="100%" height="110" viewBox="0 0 260 110" aria-hidden="true">
      <polyline points="16,76 50,46 83,58 118,30 152,43 194,18 242,26"
        fill="none" stroke="#8b5cf6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></polyline>
    </svg>
  `;
}

function renderRecommendedStrip() {
  const strip = document.getElementById("recommendedStrip");
  const recs = getRecommendedLessons().slice(0, 2);

  strip.innerHTML = recs.map((lesson) => `
    <div class="recommended-card">
      <div class="section-kicker">Recommandé pour toi</div>
      <h3>${lesson.emoji} ${lesson.title}</h3>
      <p>${lesson.summary}</p>
    </div>
  `).join("");
}

function renderLessons() {
  const grid = document.getElementById("lessonsGrid");
  const visible = getVisibleLessons();

  grid.innerHTML = visible
    .map((lesson) => {
      const done = progress.completedLessons.includes(lesson.id);

      return `
        <article class="lesson-card" id="lesson-${lesson.id}">
          <div class="lesson-top">
            <div class="lesson-icon ${lesson.audience === "debutant" ? "gradient-green" : lesson.audience === "intermediaire" ? "gradient-cyan" : "gradient-violet"}">${lesson.emoji}</div>
            <span class="badge-soft">${lesson.duration}</span>
          </div>

          <div class="lesson-meta">
            <span class="lesson-category">${lesson.category}</span>
            <span class="badge-mini">${getTrackLabel(lesson.audience)}</span>
            <span class="badge-mini">${lesson.format}</span>
          </div>

          <h3>${lesson.title}</h3>
          <p class="lesson-summary">${lesson.summary}</p>

          <div class="lesson-detail-title">Approfondissement</div>
          <p class="lesson-detail-text">${lesson.deeperText}</p>

          <div class="chart-box">
            ${renderChart(lesson.chart)}
          </div>

          <ul class="lesson-points">
            ${lesson.bullets.map((p) => `<li>${p}</li>`).join("")}
          </ul>

          ${
            lesson.quote
              ? `
                <div class="quote-box">
                  <p>${lesson.quote}</p>
                  <span>Inspiré d’une logique de création de valeur durable</span>
                </div>
              `
              : ""
          }

          <div class="lesson-actions">
            <span class="badge-level">${done ? "Validée" : "À lire"}</span>
            <button
              class="validate-btn ${done ? "done" : ""}"
              onclick="completeLesson(${lesson.id})"
            >
              ${done ? "Terminée +25" : "Valider la leçon"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderQuizzes() {
  const grid = document.getElementById("quizGrid");
  const visible = getVisibleQuizzes();

  grid.innerHTML = visible
    .map((quiz) => {
      const solved = progress.solvedQuizzes.includes(quiz.id);
      const lesson = lessons.find((l) => l.id === quiz.lessonId);

      return `
        <article class="quiz-card" id="quiz-card-${quiz.id}">
          <div class="quiz-card-top">
            <div>
              <div class="section-kicker">QCM ${getTrackLabel(quiz.audience)}</div>
              <h3>${quiz.question}</h3>
            </div>
            <span class="badge-points">${lesson?.emoji || "✅"} +${quiz.points} pts</span>
          </div>

          <div class="lesson-meta">
            <span class="badge-mini">${lesson?.title || "Leçon"}</span>
          </div>

          <div class="quiz-options">
            ${quiz.options.map((option, index) => `
              <button
                class="quiz-option"
                data-quiz-id="${quiz.id}"
                data-option-index="${index}"
              >
                ${option}
              </button>
            `).join("")}
          </div>

          <div class="quiz-actions">
            <button class="claim-btn" onclick="submitQuiz(${quiz.id})">Vérifier</button>
            <button class="reset-btn" onclick="resetQuizCard(${quiz.id})">Recommencer</button>
          </div>

          <div id="quiz-feedback-${quiz.id}"></div>

          ${
            solved
              ? `<div class="quest-status done">QCM déjà validé : points déjà gagnés</div>`
              : ""
          }
        </article>
      `;
    })
    .join("");

  attachQuizOptionEvents();
}

function renderQuests() {
  const grid = document.getElementById("questsGrid");

  grid.innerHTML = quests
    .map((quest) => {
      const unlocked = isQuestUnlocked(quest);
      const done = isQuestCompleted(quest);
      const claimed = progress.claimedQuests.includes(quest.id);

      return `
        <article class="quest-card">
          <div class="overview-icon">${unlocked ? "🎯" : "🔒"}</div>
          <h3>${quest.title}</h3>
          <p class="quest-text">Récompense : +${quest.reward} points</p>
          <div class="quest-status ${done ? "done" : unlocked ? "" : "locked"}">
            ${
              !unlocked
                ? `Débloque au niveau ${quest.unlockLevel}`
                : done
                ? "Objectif atteint"
                : "En cours"
            }
          </div>

          <div class="quest-actions">
            <span class="badge-mini">${claimed ? "Réclamée" : unlocked ? "Ouverte" : "Bloquée"}</span>
            <button
              class="claim-btn ${done && !claimed ? "done" : ""}"
              onclick="claimQuest(${quest.id})"
            >
              ${
                claimed
                  ? "Récompense récupérée"
                  : unlocked && done
                  ? "Réclamer"
                  : unlocked
                  ? "Continuer"
                  : "Verrouillée"
              }
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderRewards() {
  const grid = document.getElementById("rewardsGrid");
  const level = levelFromPoints(progress.points);

  grid.innerHTML = rewards
    .map((reward) => {
      const unlocked = level >= reward.level;

      return `
        <article class="reward-card ${unlocked ? "unlocked" : "locked"}">
          <div class="reward-icon">${reward.icon}</div>
          <div class="quest-status">Niveau ${reward.level}</div>
          <h3>${reward.title}</h3>
          <p class="reward-text">${unlocked ? "Débloquée" : "À débloquer"}</p>
        </article>
      `;
    })
    .join("");
}

function attachQuizOptionEvents() {
  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      const quizId = Number(button.dataset.quizId);
      document
        .querySelectorAll(`.quiz-option[data-quiz-id="${quizId}"]`)
        .forEach((btn) => btn.classList.remove("selected"));

      button.classList.add("selected");
    });
  });
}

function completeLesson(lessonId) {
  if (progress.completedLessons.includes(lessonId)) return;

  const previousLevel = levelFromPoints(progress.points);
  const lesson = lessons.find((l) => l.id === lessonId);

  progress.completedLessons.push(lessonId);
  progress.points += 25;
  saveProgress();
  rerenderAll();
  checkLevelUp(previousLevel, lesson);
}

function submitQuiz(quizId) {
  const quiz = quizzes.find((q) => q.id === quizId);
  const lesson = lessons.find((l) => l.id === quiz.lessonId);
  const feedback = document.getElementById(`quiz-feedback-${quizId}`);
  const selectedBtn = document.querySelector(`.quiz-option[data-quiz-id="${quizId}"].selected`);

  if (!selectedBtn) {
    feedback.innerHTML = `<div class="quiz-feedback bad">Choisis une réponse avant de vérifier.</div>`;
    return;
  }

  const selectedIndex = Number(selectedBtn.dataset.optionIndex);
  const allOptions = document.querySelectorAll(`.quiz-option[data-quiz-id="${quizId}"]`);

  allOptions.forEach((btn, idx) => {
    btn.classList.remove("correct", "wrong");
    if (idx === quiz.correctIndex) btn.classList.add("correct");
    if (idx === selectedIndex && idx !== quiz.correctIndex) btn.classList.add("wrong");
  });

  const isCorrect = selectedIndex === quiz.correctIndex;
  const alreadySolved = progress.solvedQuizzes.includes(quizId);

  if (!isCorrect) {
    feedback.innerHTML = `
      <div class="quiz-feedback bad">
        <strong>Réponse incorrecte</strong>
        <div class="quiz-explanation">${quiz.explanation}</div>
        <div class="quiz-feedback-actions">
          <button class="lesson-link-btn" onclick="goToLesson(${quiz.lessonId})">
            Revoir la leçon liée
          </button>
        </div>
      </div>
    `;

    showOverlay({
      emoji: lesson?.emoji || "❌",
      kicker: "Réponse fausse",
      title: "Va revoir la leçon",
      text: `La question était liée à « ${lesson?.title || "cette leçon"} ». Reprends-la puis reviens tester ta compréhension.`,
      actions: [
        {
          label: "Revoir la leçon",
          primary: true,
          onClick: () => {
            closeOverlay();
            goToLesson(quiz.lessonId);
          }
        }
      ]
    });

    return;
  }

  if (!alreadySolved) {
    const previousLevel = levelFromPoints(progress.points);
    progress.solvedQuizzes.push(quizId);
    progress.points += quiz.points;
    saveProgress();
    rerenderAll();
    showOverlay({
      emoji: lesson?.emoji || "🎉",
      kicker: "Bonne réponse",
      title: "QCM validé",
      text: `Bravo, tu gagnes +${quiz.points} points sur la thématique ${lesson?.category || "du moment"}.`,
      actions: [
        {
          label: "Continuer",
          primary: true,
          onClick: closeOverlay
        }
      ]
    });
    checkLevelUp(previousLevel, lesson);
  } else {
    showOverlay({
      emoji: lesson?.emoji || "✅",
      kicker: "Déjà validé",
      title: "Tu connaissais déjà cette notion",
      text: "Ce QCM a déjà été comptabilisé auparavant, donc pas de double points.",
      actions: [
        {
          label: "Continuer",
          primary: true,
          onClick: closeOverlay
        }
      ]
    });
  }
}

function resetQuizCard(quizId) {
  const options = document.querySelectorAll(`.quiz-option[data-quiz-id="${quizId}"]`);
  options.forEach((btn) => btn.classList.remove("selected", "correct", "wrong"));
  document.getElementById(`quiz-feedback-${quizId}`).innerHTML = "";
}

function claimQuest(questId) {
  const quest = quests.find((q) => q.id === questId);
  if (!quest) return;

  const unlocked = isQuestUnlocked(quest);
  const done = isQuestCompleted(quest);
  const claimed = progress.claimedQuests.includes(questId);

  if (!unlocked || !done || claimed) return;

  const previousLevel = levelFromPoints(progress.points);
  progress.claimedQuests.push(questId);
  progress.points += quest.reward;
  saveProgress();
  rerenderAll();

  showOverlay({
    emoji: "🎁",
    kicker: "Quête accomplie",
    title: quest.title,
    text: `Tu viens de récupérer +${quest.reward} points.`,
    actions: [
      {
        label: "Continuer",
        primary: true,
        onClick: closeOverlay
      }
    ]
  });

  checkLevelUp(previousLevel);
}

function goToLesson(lessonId) {
  lessonAudienceFilter = "all";
  lessonCategoryFilter = "all";

  document.querySelectorAll("#lessonAudienceFilters .filter-btn").forEach((b) => b.classList.remove("active"));
  document.querySelector('#lessonAudienceFilters .filter-btn[data-audience-filter="all"]').classList.add("active");

  document.querySelectorAll("#lessonCategoryFilters .filter-btn").forEach((b) => b.classList.remove("active"));
  document.querySelector('#lessonCategoryFilters .filter-btn[data-category-filter="all"]').classList.add("active");

  renderLessons();

  const target = document.getElementById(`lesson-${lessonId}`);
  if (!target) return;

  document.getElementById("lessons").scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.classList.add("flash-target");
    setTimeout(() => target.classList.remove("flash-target"), 2400);
  }, 250);
}

function showOverlay({ emoji, kicker, title, text, actions = [] }) {
  const overlay = document.getElementById("resultOverlay");
  document.getElementById("resultOverlayEmoji").textContent = emoji;
  document.getElementById("resultOverlayKicker").textContent = kicker;
  document.getElementById("resultOverlayTitle").textContent = title;
  document.getElementById("resultOverlayText").textContent = text;

  const actionsWrap = document.getElementById("resultOverlayActions");
  actionsWrap.innerHTML = "";

  actions.forEach((action) => {
    const btn = document.createElement("button");
    btn.className = `overlay-btn ${action.primary ? "primary" : ""}`;
    btn.textContent = action.label;
    btn.addEventListener("click", action.onClick);
    actionsWrap.appendChild(btn);
  });

  overlay.classList.add("visible");
}

function closeOverlay() {
  document.getElementById("resultOverlay").classList.remove("visible");
}

function checkLevelUp(previousLevel, lesson = null) {
  const currentLevel = levelFromPoints(progress.points);
  if (currentLevel <= previousLevel) return;

  const reward = rewards.find((r) => r.level === currentLevel);

  if (!progress.seenLevelRewards.includes(currentLevel)) {
    progress.seenLevelRewards.push(currentLevel);
    saveProgress();
  }

  showOverlay({
    emoji: lesson?.emoji || reward?.icon || "🏆",
    kicker: "Niveau supérieur",
    title: `Niveau ${currentLevel} atteint`,
    text: `Tu viens de débloquer ${reward?.title || "un nouveau palier"}. Continue, le parcours devient encore plus intéressant.`,
    actions: [
      {
        label: "Continuer",
        primary: true,
        onClick: closeOverlay
      }
    ]
  });
}

function initOnboarding() {
  const overlay = document.getElementById("onboardingOverlay");

  if (progress.selectedTrack) {
    overlay.classList.remove("visible");
  } else {
    overlay.classList.add("visible");
  }

  document.querySelectorAll("[data-level-choice]").forEach((btn) => {
    btn.addEventListener("click", () => {
      progress.selectedTrack = btn.dataset.levelChoice;
      saveProgress();
      overlay.classList.remove("visible");
      rerenderAll();
    });
  });

  document.getElementById("changeTrackBtn").addEventListener("click", () => {
    overlay.classList.add("visible");
  });
}

function initFilters() {
  document.querySelectorAll("[data-audience-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-audience-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      lessonAudienceFilter = btn.dataset.audienceFilter;
      renderLessons();
    });
  });

  document.querySelectorAll("[data-category-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-category-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      lessonCategoryFilter = btn.dataset.categoryFilter;
      renderLessons();
    });
  });

  document.querySelectorAll("[data-quiz-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-quiz-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      quizAudienceFilter = btn.dataset.quizFilter;
      renderQuizzes();
    });
  });
}

function rerenderAll() {
  updateTopStats();
  renderRecommendedStrip();
  renderLessons();
  renderQuizzes();
  renderQuests();
  renderRewards();
}

document.getElementById("resultOverlay").addEventListener("click", (e) => {
  if (e.target.id === "resultOverlay") {
    closeOverlay();
  }
});

initOnboarding();
initFilters();
rerenderAll();
