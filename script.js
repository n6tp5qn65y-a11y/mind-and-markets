const lessons = [
  {
    id: 1,
    category: "Marchés financiers",
    title: "C’est quoi une action ?",
    duration: "3 min",
    level: "Débutant",
    icon: "↗",
    gradient: "gradient-green",
    chart: "bars-up",
    summary:
      "Une action représente une petite part d’une entreprise. Son prix varie selon les attentes des investisseurs, les résultats publiés et l’état du marché.",
    deeperTitle: "À comprendre",
    deeperText:
      "Quand une entreprise est cotée en bourse, elle divise son capital en actions. Acheter une action, ce n’est pas juste “jouer en bourse” : c’est devenir propriétaire d’une très petite partie de l’entreprise. Son prix bouge en fonction de ce que le marché pense de son avenir. Si les investisseurs anticipent plus de croissance, le prix peut monter. Si les résultats déçoivent ou que le contexte économique se détériore, il peut baisser.",
    points: [
      "Acheter une action, c’est acheter une part du capital d’une entreprise.",
      "Le prix dépend autant des résultats que des anticipations.",
      "L’investisseur peut espérer une hausse du cours ou un dividende."
    ]
  },
  {
    id: 2,
    category: "Économie",
    title: "Pourquoi les prix augmentent ?",
    duration: "4 min",
    level: "Essentiel",
    icon: "🔥",
    gradient: "gradient-orange",
    chart: "inflation",
    summary:
      "L’inflation correspond à une hausse générale des prix. Quand elle augmente trop vite, ton argent perd en pouvoir d’achat.",
    deeperTitle: "À comprendre",
    deeperText:
      "L’inflation ne veut pas dire qu’un seul produit devient plus cher, mais qu’en moyenne les prix augmentent dans l’économie. Cela peut venir d’une demande forte, d’un coût de production plus élevé ou encore d’un choc sur l’énergie. Si les salaires n’augmentent pas au même rythme, le niveau de vie peut se dégrader. C’est pour cela que l’inflation est suivie de très près par les banques centrales et les gouvernements.",
    points: [
      "L’inflation est une hausse générale et durable des prix.",
      "Quand les prix montent, ton argent permet d’acheter moins.",
      "Les banques centrales utilisent les taux d’intérêt pour la ralentir."
    ]
  },
  {
    id: 3,
    category: "Économie",
    title: "À quoi servent les taux d’intérêt ?",
    duration: "3 min",
    level: "Intermédiaire",
    icon: "🛡",
    gradient: "gradient-cyan",
    chart: "rate",
    summary:
      "Les taux d’intérêt influencent le coût du crédit et jouent un rôle central dans l’économie.",
    deeperTitle: "À comprendre",
    deeperText:
      "Quand les taux montent, emprunter devient plus cher pour les ménages, les entreprises et parfois les États. Cela peut ralentir la consommation, l’investissement et, à terme, calmer l’inflation. À l’inverse, des taux plus faibles rendent le crédit plus accessible et peuvent relancer l’activité. Les taux ont aussi un effet sur les marchés financiers, car ils changent la valeur relative des placements.",
    points: [
      "Des taux plus élevés rendent le crédit plus cher.",
      "Ils peuvent ralentir la demande dans l’économie.",
      "Ils influencent aussi les marchés financiers."
    ]
  },
  {
    id: 4,
    category: "Marchés financiers",
    title: "Pourquoi les marchés bougent ?",
    duration: "4 min",
    level: "Clair",
    icon: "📈",
    gradient: "gradient-pink",
    chart: "market",
    summary:
      "Les marchés financiers réagissent aux nouvelles, aux taux, aux résultats et à la psychologie collective.",
    deeperTitle: "À comprendre",
    deeperText:
      "Les prix en bourse ne bougent pas seulement parce qu’un chiffre est bon ou mauvais. Ils bougent surtout selon l’écart entre ce qui était attendu et ce qui arrive réellement. Une très bonne nouvelle déjà anticipée peut donc avoir peu d’effet. Inversement, une petite déception peut faire baisser fortement un titre si le marché espérait beaucoup mieux. La confiance, la peur et la liquidité jouent aussi un rôle majeur.",
    points: [
      "Le marché regarde souvent le futur plus que le présent.",
      "La peur et l’euphorie influencent aussi les prix.",
      "Une bonne nouvelle déjà anticipée peut avoir peu d’effet."
    ]
  },
  {
    id: 5,
    category: "Business",
    title: "Les bases du marketing",
    duration: "4 min",
    level: "Débutant",
    icon: "💼",
    gradient: "gradient-violet",
    chart: "funnel",
    summary:
      "Le marketing consiste à comprendre un besoin, créer une offre utile et la rendre désirable pour un public précis.",
    deeperTitle: "À comprendre",
    deeperText:
      "Le marketing n’est pas simplement de la publicité. C’est une logique de compréhension du client, de définition d’une cible, de création d’une proposition de valeur et de construction d’une offre cohérente. Une bonne stratégie marketing repose sur la clarté : à qui on parle, quel problème on résout, et pourquoi notre solution est intéressante. Une offre forte est une offre qu’on comprend vite.",
    points: [
      "On ne vend pas à tout le monde : il faut cibler.",
      "Une offre claire aide à se différencier.",
      "La valeur perçue compte énormément."
    ],
    quote:
      "Idée inspirée de Père riche père pauvre : apprendre à distinguer ce qui crée de la valeur de ce qui coûte sans rapporter."
  },
  {
    id: 6,
    category: "Business",
    title: "C’est quoi une marque ?",
    duration: "3 min",
    level: "Débutant",
    icon: "✨",
    gradient: "gradient-rose",
    chart: "brand",
    summary:
      "Une marque n’est pas juste un logo : c’est une promesse, une perception et une position dans l’esprit du client.",
    deeperTitle: "À comprendre",
    deeperText:
      "La marque agit comme un raccourci mental. Elle rassure, elle crée de la cohérence et elle influence la préférence. Deux produits proches peuvent être perçus très différemment selon l’univers, les codes visuels, le ton et la réputation de la marque. Une marque forte ne repose pas seulement sur le design, mais aussi sur l’expérience globale qu’elle promet et délivre.",
    points: [
      "Une marque influence la confiance.",
      "Elle peut créer de la préférence.",
      "Elle aide à justifier un prix plus élevé."
    ],
    quote:
      "Idée inspirée de Père riche père pauvre : ce n’est pas seulement ce que tu gagnes qui compte, mais ce que tu construis durablement."
  },
  {
    id: 7,
    category: "Business",
    title: "Actifs vs passifs",
    duration: "4 min",
    level: "Essentiel",
    icon: "🐷",
    gradient: "gradient-lime",
    chart: "assets",
    summary:
      "Une idée simple mais puissante : certains choix t’apportent de la valeur, d’autres te coûtent durablement.",
    deeperTitle: "À comprendre",
    deeperText:
      "Réfléchir en termes d’actifs et de passifs permet de mieux lire sa situation financière. Un actif peut générer un revenu, prendre de la valeur ou soutenir un projet rentable. Un passif, au contraire, implique des coûts, des remboursements ou des dépenses sans contrepartie économique durable. Cette grille de lecture aide à prendre de meilleures décisions, même à petite échelle.",
    points: [
      "Un actif peut générer un revenu ou prendre de la valeur.",
      "Un passif peut coûter à entretenir ou à rembourser.",
      "Le but est d’accumuler davantage d’actifs utiles."
    ],
    quote:
      "Idée inspirée de Père riche père pauvre : développer son éducation financière aide à faire de meilleurs choix."
  },
  {
    id: 8,
    category: "Business",
    title: "Le cashflow, pourquoi c’est clé ?",
    duration: "3 min",
    level: "Intermédiaire",
    icon: "💳",
    gradient: "gradient-indigo",
    chart: "cashflow",
    summary:
      "Le cashflow correspond aux entrées et sorties d’argent. C’est une mesure concrète de la santé d’un projet.",
    deeperTitle: "À comprendre",
    deeperText:
      "Un projet peut sembler rentable sur le papier tout en ayant un mauvais cashflow. C’est un point crucial, car sans liquidités suffisantes, il devient difficile de payer les charges, d’investir ou simplement de tenir dans la durée. Le cashflow oblige à regarder la réalité : quand l’argent entre, quand il sort, et si le rythme est soutenable. C’est une logique indispensable pour tout projet business.",
    points: [
      "Le chiffre d’affaires seul ne suffit pas.",
      "Il faut suivre les entrées et sorties d’argent.",
      "Un cashflow sain rend un projet plus solide."
    ],
    quote:
      "Idée inspirée de Père riche père pauvre : savoir comment l’argent circule permet de mieux décider."
  }
];

const quizzes = [
  {
    id: 1,
    lessonId: 1,
    question: "Une action correspond à…",
    options: [
      "Une part d’entreprise",
      "Un prêt bancaire",
      "Une taxe",
      "Une obligation d’État"
    ],
    correctIndex: 0,
    explanation:
      "Une action représente une petite part du capital d’une entreprise.",
    points: 50
  },
  {
    id: 2,
    lessonId: 2,
    question: "L’inflation signifie…",
    options: [
      "Une baisse générale des prix",
      "Une hausse générale des prix",
      "Une hausse des salaires uniquement",
      "Une stagnation des prix"
    ],
    correctIndex: 1,
    explanation:
      "L’inflation désigne une hausse générale et durable des prix.",
    points: 50
  },
  {
    id: 3,
    lessonId: 7,
    question: "Dans l’idée actifs vs passifs, un actif…",
    options: [
      "Te retire de l’argent",
      "Peut t’apporter de la valeur",
      "Est toujours très cher",
      "N’a rien à voir avec la finance"
    ],
    correctIndex: 1,
    explanation:
      "Un actif est pensé comme un élément qui peut générer de la valeur ou des revenus.",
    points: 60
  },
  {
    id: 4,
    lessonId: 5,
    question: "Le marketing sert surtout à…",
    options: [
      "Créer de la valeur pour un public ciblé",
      "Faire uniquement de la publicité",
      "Copier les concurrents",
      "Changer le logo tous les mois"
    ],
    correctIndex: 0,
    explanation:
      "Le marketing commence par la compréhension d’un besoin et d’un public.",
    points: 60
  },
  {
    id: 5,
    lessonId: 8,
    question: "Le cashflow, c’est…",
    options: [
      "L’image de marque",
      "Les entrées et sorties d’argent",
      "Le prix de vente",
      "Le nombre de clients"
    ],
    correctIndex: 1,
    explanation:
      "Le cashflow mesure concrètement les flux d’argent qui entrent et sortent.",
    points: 70
  }
];

const quests = [
  { id: 1, title: "Lire 2 leçons", reward: 40 },
  { id: 2, title: "Réussir 1 quiz", reward: 60 },
  { id: 3, title: "Atteindre 200 points", reward: 80 },
  { id: 4, title: "Finir 1 leçon business", reward: 50 }
];

const rewards = [
  { level: 2, title: "Badge Curieux", icon: "⭐" },
  { level: 3, title: "Badge Analyste Junior", icon: "🎯" },
  { level: 4, title: "Badge Stratège", icon: "🏅" },
  { level: 5, title: "Coffre Premium", icon: "🎁" },
  { level: 6, title: "Couronne Mind & Markets", icon: "👑" }
];

const STORAGE_KEY = "mind_markets_progress_static_v2";

const defaultProgress = {
  points: 0,
  completedLessons: [],
  solvedQuizzes: [],
  claimedQuests: [],
  unlockedRewardsShown: []
};

let progress = loadProgress();
let currentFilter = "Tous";

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
  return Math.floor(points / 150) + 1;
}

function nextLevelAt(level) {
  return level * 150;
}

function lessonFilterMatch(lesson) {
  return currentFilter === "Tous" || lesson.category === currentFilter;
}

function getQuestStatus() {
  return {
    1: progress.completedLessons.length >= 2,
    2: progress.solvedQuizzes.length >= 1,
    3: progress.points >= 200,
    4: lessons
      .filter((l) => l.category === "Business")
      .some((l) => progress.completedLessons.includes(l.id))
  };
}

function updateTopStats() {
  const level = levelFromPoints(progress.points);
  const nextTarget = nextLevelAt(level);
  const fill = Math.min((progress.points / nextTarget) * 100, 100);

  document.getElementById("levelStat").textContent = level;
  document.getElementById("pointsStat").textContent = progress.points;
  document.getElementById("lessonsStat").textContent = progress.completedLessons.length;
  document.getElementById("quizStat").textContent = progress.solvedQuizzes.length;
  document.getElementById("progressText").textContent = `${progress.points} / ${nextTarget}`;
  document.getElementById("progressBarFill").style.width = `${fill}%`;
}

function renderChart(type) {
  if (type === "bars-up") {
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

  if (type === "rate") {
    return `
      <svg width="100%" height="110" viewBox="0 0 260 110" aria-hidden="true">
        <rect x="20" y="60" width="26" height="36" rx="8" fill="rgba(34,211,238,.50)"></rect>
        <rect x="64" y="48" width="26" height="48" rx="8" fill="rgba(34,211,238,.62)"></rect>
        <rect x="108" y="36" width="26" height="60" rx="8" fill="rgba(34,211,238,.75)"></rect>
        <rect x="152" y="24" width="26" height="72" rx="8" fill="rgba(96,165,250,.78)"></rect>
        <rect x="196" y="12" width="26" height="84" rx="8" fill="rgba(96,165,250,1)"></rect>
      </svg>
    `;
  }

  if (type === "market") {
    return `
      <svg width="100%" height="110" viewBox="0 0 260 110" aria-hidden="true">
        <polyline points="16,76 50,46 83,58 118,30 152,43 194,18 242,26"
          fill="none" stroke="#ec4899" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></polyline>
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

  if (type === "brand") {
    return `
      <svg width="100%" height="110" viewBox="0 0 260 110" aria-hidden="true">
        <circle cx="95" cy="55" r="34" fill="none" stroke="rgba(244,63,94,.65)" stroke-width="12"></circle>
        <circle cx="165" cy="55" r="22" fill="rgba(244,63,94,.75)"></circle>
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
      <polyline points="16,50 60,54 110,42 150,62 200,32 242,26"
        fill="none" stroke="#818cf8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></polyline>
    </svg>
  `;
}

function renderLessons() {
  const grid = document.getElementById("lessonsGrid");
  const filtered = lessons.filter(lessonFilterMatch);

  grid.innerHTML = filtered
    .map((lesson) => {
      const done = progress.completedLessons.includes(lesson.id);

      return `
        <article class="lesson-card" id="lesson-${lesson.id}">
          <div class="lesson-top">
            <div class="lesson-icon ${lesson.gradient}">${lesson.icon}</div>
            <span class="badge-soft">${lesson.duration}</span>
          </div>

          <div class="lesson-category">${lesson.category}</div>
          <h3>${lesson.title}</h3>
          <p class="lesson-summary">${lesson.summary}</p>

          <div class="lesson-detail-title">${lesson.deeperTitle}</div>
          <p class="lesson-detail-text">${lesson.deeperText}</p>

          <div class="chart-box">
            ${renderChart(lesson.chart)}
          </div>

          <ul class="lesson-points">
            ${lesson.points.map((p) => `<li>${p}</li>`).join("")}
          </ul>

          ${
            lesson.quote
              ? `
            <div class="quote-box">
              <p>${lesson.quote}</p>
              <span>Inspiré du livre Père riche père pauvre</span>
            </div>
          `
              : ""
          }

          <div class="lesson-actions">
            <span class="badge-level">${lesson.level}</span>
            <button
              class="validate-btn ${done ? "done" : ""}"
              onclick="completeLesson(${lesson.id})"
            >
              ${done ? "Terminée +20" : "Valider la leçon"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderQuizzes() {
  const grid = document.getElementById("quizGrid");

  grid.innerHTML = quizzes
    .map((quiz) => {
      const solved = progress.solvedQuizzes.includes(quiz.id);

      return `
        <article class="quiz-card" id="quiz-card-${quiz.id}">
          <div class="quiz-card-top">
            <div>
              <div class="section-kicker">Quiz interactif</div>
              <h3>${quiz.question}</h3>
            </div>
            <span class="badge-points">+${quiz.points} pts</span>
          </div>

          <div class="quiz-options">
            ${quiz.options
              .map(
                (option, index) => `
                <button
                  class="quiz-option"
                  data-quiz-id="${quiz.id}"
                  data-option-index="${index}"
                >
                  ${option}
                </button>
              `
              )
              .join("")}
          </div>

          <div class="quiz-actions">
            <button class="claim-btn" onclick="submitQuiz(${quiz.id})">Vérifier</button>
            <button class="reset-btn" onclick="resetQuizCard(${quiz.id})">Recommencer</button>
          </div>

          <div id="quiz-feedback-${quiz.id}"></div>

          ${
            solved
              ? `<div class="quest-status done">Quiz déjà validé : points déjà gagnés</div>`
              : ""
          }
        </article>
      `;
    })
    .join("");

  attachQuizOptionEvents();
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

function goToLesson(lessonId) {
  currentFilter = "Tous";
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  const allBtn = document.querySelector('.filter-btn[data-filter="Tous"]');
  if (allBtn) allBtn.classList.add("active");

  renderLessons();

  const target = document.getElementById(`lesson-${lessonId}`);
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "center" });
  target.classList.add("flash-target");

  setTimeout(() => {
    target.classList.remove("flash-target");
  }, 2200);
}

function submitQuiz(quizId) {
  const quiz = quizzes.find((q) => q.id === quizId);
  const feedback = document.getElementById(`quiz-feedback-${quizId}`);
  const selectedBtn = document.querySelector(
    `.quiz-option[data-quiz-id="${quizId}"].selected`
  );

  if (!selectedBtn) {
    feedback.innerHTML = `
      <div class="quiz-feedback bad">
        Choisis une réponse avant de vérifier.
      </div>
    `;
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

  if (isCorrect && !alreadySolved) {
    progress.solvedQuizzes.push(quizId);
    progress.points += quiz.points;
    saveProgress();
  }

  feedback.innerHTML = `
    <div class="quiz-feedback ${isCorrect ? "good" : "bad"}">
      <strong>${isCorrect ? "Bonne réponse" : "Pas tout à fait"}</strong>
      <div class="quiz-explanation">${quiz.explanation}</div>
      ${
        isCorrect && !alreadySolved
          ? `<div class="quest-status done">+${quiz.points} points ajoutés</div>`
          : ""
      }
      ${
        isCorrect && alreadySolved
          ? `<div class="quest-status">Déjà validé auparavant : pas de doublon de points</div>`
          : ""
      }
      ${
        !isCorrect
          ? `
            <div class="quiz-feedback-actions">
              <button class="lesson-link-btn" onclick="goToLesson(${quiz.lessonId})">
                Revoir la leçon liée
              </button>
            </div>
          `
          : ""
      }
    </div>
  `;

  rerenderAll();
}

function resetQuizCard(quizId) {
  const options = document.querySelectorAll(`.quiz-option[data-quiz-id="${quizId}"]`);
  options.forEach((btn) => btn.classList.remove("selected", "correct", "wrong"));
  document.getElementById(`quiz-feedback-${quizId}`).innerHTML = "";
}

function completeLesson(lessonId) {
  if (progress.completedLessons.includes(lessonId)) return;
  const previousLevel = levelFromPoints(progress.points);
  progress.completedLessons.push(lessonId);
  progress.points += 20;
  saveProgress();
  rerenderAll();
  checkLevelUp(previousLevel);
}

function renderQuests() {
  const grid = document.getElementById("questsGrid");
  const status = getQuestStatus();

  grid.innerHTML = quests
    .map((quest) => {
      const done = status[quest.id];
      const claimed = progress.claimedQuests.includes(quest.id);

      return `
        <article class="quest-card">
          <div class="overview-icon">🎯</div>
          <h3>${quest.title}</h3>
          <p class="quest-text">Récompense : +${quest.reward} points</p>
          <div class="quest-status ${done ? "done" : ""}">
            ${done ? "Objectif atteint" : "En cours"}
          </div>

          <div class="quest-actions">
            <span class="badge-mini">${claimed ? "Réclamée" : done ? "Prête" : "Bloquée"}</span>
            <button
              class="claim-btn ${done && !claimed ? "done" : ""}"
              onclick="claimQuest(${quest.id})"
            >
              ${claimed ? "Récompense récupérée" : done ? "Réclamer" : "Continuer"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function claimQuest(questId) {
  const quest = quests.find((q) => q.id === questId);
  const status = getQuestStatus();
  const done = status[questId];
  const claimed = progress.claimedQuests.includes(questId);

  if (!done || claimed) return;

  const previousLevel = levelFromPoints(progress.points);
  progress.claimedQuests.push(questId);
  progress.points += quest.reward;
  saveProgress();
  rerenderAll();
  showRewardOverlay("🎁", "Quête accomplie", `Tu as récupéré +${quest.reward} points pour la quête : ${quest.title}.`);
  checkLevelUp(previousLevel);
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

function showRewardOverlay(icon, title, text) {
  const overlay = document.getElementById("rewardOverlay");
  const iconEl = document.getElementById("rewardOverlayIcon");
  const titleEl = document.getElementById("rewardOverlayTitle");
  const textEl = document.getElementById("rewardOverlayText");

  iconEl.textContent = icon;
  titleEl.textContent = title;
  textEl.textContent = text;
  overlay.classList.remove("hidden");
}

function closeRewardOverlay() {
  document.getElementById("rewardOverlay").classList.add("hidden");
}

function checkLevelUp(previousLevel) {
  const currentLevel = levelFromPoints(progress.points);

  if (currentLevel > previousLevel) {
    const reward = rewards.find((r) => r.level === currentLevel);
    if (reward && !progress.unlockedRewardsShown.includes(currentLevel)) {
      progress.unlockedRewardsShown.push(currentLevel);
      saveProgress();
      showRewardOverlay(
        reward.icon,
        `Niveau ${currentLevel} atteint`,
        `Bravo ! Tu viens de débloquer ${reward.title}.`
      );
    } else {
      showRewardOverlay("🏆", `Niveau ${currentLevel} atteint`, "Tu montes de niveau, continue comme ça.");
    }
  }
}

function rerenderAll() {
  updateTopStats();
  renderLessons();
  renderQuizzes();
  renderQuests();
  renderRewards();
}

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderLessons();
    });
  });
}

document.getElementById("closeRewardOverlay").addEventListener("click", closeRewardOverlay);
document.getElementById("rewardOverlay").addEventListener("click", (e) => {
  if (e.target.id === "rewardOverlay") closeRewardOverlay();
});

initFilters();
rerenderAll();
