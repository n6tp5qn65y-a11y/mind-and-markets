diff --git a/script.js b/script.js
index 2df86059ff9f98f80bf683ac239476e78f18f2a9..15043860ca014ef6cbae9c3f67d0e99441cdd01c 100644
--- a/script.js
+++ b/script.js
@@ -1071,82 +1071,102 @@ function buildLesson({ bigQuestion, intro, plan, problematique, developpement, r
 
     <div class="lesson-section">
       <h4>Résumé</h4>
       <p>${resume}</p>
     </div>
 
     <div class="key-points">
       <h3>✨ Points clés à retenir</h3>
       <ul>${keyPoints.map(k => `<li>${k}</li>`).join('')}</ul>
     </div>
   `;
 }
 
 // ============================================================
 // ÉTAT GLOBAL DE L'APPLICATION
 // ============================================================
 const state = {
   currentLevel: null,        // 'debutant' | 'intermediaire' | 'professionnel'
   currentLessonIndex: null,  // 0-4
   currentQuizQ: 0,           // index de la question en cours
   correctAnswers: 0,         // nb bonnes réponses dans le QCM actuel
   score: 0,                  // score total
   xp: 0,                     // points d'expérience
   userLevel: 1,              // niveau utilisateur (1-10)
   badges: [],                // badges obtenus
-  completedLessons: {}       // { 'deb-1': true, 'int-2': true, ... }
+  completedLessons: {},      // { 'deb-1': true, 'int-2': true, ... }
+  lastScreen: 'screen-home',
+  ratingDone: false
+};
+
+const uiState = {
+  scrollByScreen: {},
+  aiOpen: false,
+  aiEnabled: true,
+  aiUnlockedByMistake: false,
+  lastWrongQuestion: null,
+  ratingTimerStarted: false,
+  selectedRating: 0
 };
 
 // Charger l'état depuis localStorage
 function loadState() {
   try {
     const saved = localStorage.getItem('financelab_state');
     if (saved) {
       const parsed = JSON.parse(saved);
       Object.assign(state, parsed);
     }
   } catch (e) { /* ignore */ }
 }
 
 // Sauvegarder l'état dans localStorage
 function saveState() {
   try {
     localStorage.setItem('financelab_state', JSON.stringify(state));
   } catch (e) { /* ignore */ }
 }
 
 // ============================================================
 // NAVIGATION
 // ============================================================
 function showScreen(id) {
+  const current = document.querySelector('.screen.active');
+  if (current) {
+    uiState.scrollByScreen[current.id] = window.scrollY;
+  }
   document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
   const screen = document.getElementById(id);
   if (screen) {
     screen.classList.add('active');
-    screen.scrollTop = 0;
-    window.scrollTo(0, 0);
+    const savedY = uiState.scrollByScreen[id] ?? 0;
+    requestAnimationFrame(() => window.scrollTo(0, savedY));
   }
+  state.lastScreen = id;
+  saveState();
+  updateNavButtons();
+  setAiAvailability(id);
   updateScoreDisplays();
 }
 
 // ============================================================
 // SÉLECTION DU NIVEAU
 // ============================================================
 function selectLevel(level) {
   state.currentLevel = level;
   saveState();
   renderDashboard(level);
   showScreen('screen-dashboard');
 }
 
 // ============================================================
 // DASHBOARD
 // ============================================================
 function renderDashboard(level) {
   const lessons = LESSONS_DATA[level];
   const labels = { debutant: '🌱 Débutant', intermediaire: '📈 Intermédiaire', professionnel: '🎯 Professionnel' };
   const descs  = { debutant: '5 leçons pour maîtriser les fondamentaux', intermediaire: '5 leçons pour approfondir vos connaissances', professionnel: '5 leçons pour atteindre l\'excellence' };
 
   document.getElementById('dashboard-level-pill').textContent = labels[level];
   document.getElementById('dashboard-title').textContent = 'Ton parcours ' + labels[level].split(' ').slice(1).join(' ');
   document.getElementById('dashboard-sub').textContent = descs[level];
 
@@ -1188,51 +1208,51 @@ function renderDashboard(level) {
       <p>${lesson.desc}</p>
       <div class="lcard-footer">
         <span>⏱ ${lesson.duration}</span>
         <span class="lcard-pts">${isDone ? '✓ +30 pts' : '+30 pts'}</span>
       </div>
     `;
 
     if (!isLocked) {
       card.addEventListener('click', () => openLesson(level, idx));
     }
 
     grid.appendChild(card);
   });
 }
 
 // ============================================================
 // LEÇON
 // ============================================================
 function openLesson(level, index) {
   state.currentLessonIndex = index;
   const lesson = LESSONS_DATA[level][index];
   const levelLabels = { debutant: 'Débutant', intermediaire: 'Intermédiaire', professionnel: 'Professionnel' };
 
   document.getElementById('lesson-num-label').textContent = `Leçon ${index + 1} / 5`;
   document.getElementById('lesson-level-tag').textContent = levelLabels[level];
-  document.getElementById('lesson-content').innerHTML = lesson.content;
+  document.getElementById('lesson-content').innerHTML = lesson.content + buildAdvancedAddon(level, lesson.title);
 
   showScreen('screen-lesson');
 }
 
 // ============================================================
 // QUIZ
 // ============================================================
 function startQuiz() {
   const lesson = LESSONS_DATA[state.currentLevel][state.currentLessonIndex];
   state.currentQuizQ = 0;
   state.correctAnswers = 0;
 
   document.getElementById('q-total').textContent = lesson.quiz.length;
   renderQuestion();
   showScreen('screen-quiz');
 }
 
 function renderQuestion() {
   const lesson = LESSONS_DATA[state.currentLevel][state.currentLessonIndex];
   const q = lesson.quiz[state.currentQuizQ];
 
   document.getElementById('q-current').textContent = state.currentQuizQ + 1;
   document.getElementById('quiz-question').textContent = q.q;
 
   const letters = ['A', 'B', 'C', 'D'];
@@ -1249,50 +1269,53 @@ function renderQuestion() {
 
   document.getElementById('quiz-feedback').classList.add('hidden');
 }
 
 function selectAnswer(chosen, correct, expl) {
   const isCorrect = chosen === correct;
   const feedback = document.getElementById('quiz-feedback');
 
   // Colorer les options
   document.querySelectorAll('.quiz-option').forEach((btn, i) => {
     if (i === correct) btn.classList.add('correct');
     if (i === chosen && !isCorrect) btn.classList.add('wrong');
     btn.disabled = true;
   });
 
   // Préparer le feedback
   const pts = isCorrect ? 10 : 0;
   if (isCorrect) {
     state.correctAnswers++;
     addScore(pts);
     document.getElementById('feedback-icon').textContent = '✅';
     document.getElementById('feedback-title').textContent = 'Correct ! Bravo 🎉';
     document.getElementById('feedback-pts').textContent = '+10 pts';
     document.getElementById('feedback-pts').style.color = 'var(--gold)';
   } else {
+    uiState.lastWrongQuestion = { explanation: expl, level: state.currentLevel, lessonIndex: state.currentLessonIndex };
+    uiState.aiUnlockedByMistake = true;
+    setAiAvailability('screen-quiz');
     document.getElementById('feedback-icon').textContent = '❌';
     document.getElementById('feedback-title').textContent = 'Pas tout à fait…';
     document.getElementById('feedback-pts').textContent = '';
   }
 
   document.getElementById('feedback-msg').textContent = expl;
 
   // Changer le bouton si dernière question
   const lesson = LESSONS_DATA[state.currentLevel][state.currentLessonIndex];
   const isLast = state.currentQuizQ === lesson.quiz.length - 1;
   const fbBtn = document.getElementById('feedback-btn');
   fbBtn.textContent = isLast ? 'Voir le résultat →' : 'Question suivante →';
 
   feedback.classList.remove('hidden');
 }
 
 function nextQuestion() {
   const lesson = LESSONS_DATA[state.currentLevel][state.currentLessonIndex];
   document.getElementById('quiz-feedback').classList.add('hidden');
 
   if (state.currentQuizQ < lesson.quiz.length - 1) {
     state.currentQuizQ++;
     renderQuestion();
   } else {
     finishQuiz();
@@ -1304,56 +1327,59 @@ function backToLesson() {
   openLesson(state.currentLevel, state.currentLessonIndex);
 }
 
 function finishQuiz() {
   const lesson = LESSONS_DATA[state.currentLevel][state.currentLessonIndex];
   const total = lesson.quiz.length;
   const correct = state.correctAnswers;
   const pct = Math.round((correct / total) * 100);
 
   // Bonus points pour fin de leçon
   const bonusPoints = correct === total ? 20 : (correct > 0 ? 10 : 0);
   addScore(bonusPoints);
   addXP(correct * 10 + bonusPoints);
 
   // Marquer comme complétée
   state.completedLessons[lesson.id] = true;
   checkBadges();
   saveState();
 
   // Configurer l'écran résultat
   let emoji, title, msg;
   if (pct === 100) {
     emoji = '🏆'; title = 'Score parfait !';
     msg = 'Tu as répondu correctement à toutes les questions. Excellente maîtrise de cette leçon !';
     launchConfetti();
+    launchResultOverlay(true);
   } else if (pct >= 66) {
     emoji = '🌟'; title = 'Très bien !';
     msg = `${correct}/${total} bonnes réponses. Bonne maîtrise des concepts principaux.`;
+    launchResultOverlay(true);
   } else {
     emoji = '💪'; title = 'Continue !';
     msg = `${correct}/${total} bonnes réponses. N'hésite pas à relire la leçon pour consolider tes connaissances.`;
+    launchResultOverlay(false);
   }
 
   document.getElementById('result-emoji').textContent = emoji;
   document.getElementById('result-title').textContent = title;
   document.getElementById('result-msg').textContent = msg;
   document.getElementById('result-pts').textContent = `+${bonusPoints} pts bonus`;
 
   showScreen('screen-result');
   renderDashboard(state.currentLevel);
 }
 
 function replayLesson() {
   openLesson(state.currentLevel, state.currentLessonIndex);
 }
 
 // ============================================================
 // SYSTÈME DE SCORE & XP
 // ============================================================
 function addScore(pts) {
   state.score += pts;
   saveState();
   updateScoreDisplays();
 }
 
 function addXP(xp) {
@@ -1435,50 +1461,209 @@ function launchConfetti() {
   const overlay = document.getElementById('confetti-overlay');
   overlay.classList.remove('hidden');
   overlay.innerHTML = '';
 
   const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4'];
 
   for (let i = 0; i < 80; i++) {
     const piece = document.createElement('div');
     piece.className = 'confetti-piece';
     piece.style.left = Math.random() * 100 + 'vw';
     piece.style.background = colors[Math.floor(Math.random() * colors.length)];
     piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
     piece.style.animationDelay = Math.random() * 1 + 's';
     piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
     piece.style.width = (Math.random() * 8 + 6) + 'px';
     piece.style.height = (Math.random() * 8 + 6) + 'px';
     overlay.appendChild(piece);
   }
 
   setTimeout(() => {
     overlay.classList.add('hidden');
     overlay.innerHTML = '';
   }, 4000);
 }
 
+function launchResultOverlay(isWin) {
+  const overlay = document.getElementById('result-overlay');
+  if (!overlay) return;
+  overlay.classList.remove('hidden');
+  overlay.className = `result-overlay ${isWin ? 'win' : 'loss'}`;
+  overlay.innerHTML = `<div class="result-overlay-text">${isWin ? 'VICTOIRE' : 'À RETRAVAILLER'}</div>`;
+  setTimeout(() => {
+    overlay.classList.add('hidden');
+    overlay.innerHTML = '';
+  }, 1600);
+}
+
+function buildAdvancedAddon(level, title) {
+  if (level === 'debutant') return '';
+  return `
+    <section class="lesson-section heavy-section">
+      <h4>Approfondissement ${level === 'professionnel' ? 'Professionnel' : 'Intermédiaire'}</h4>
+      <h2>Cas pratique : ${title}</h2>
+      <p>Scénario : identifie le contexte macro (taux, inflation, liquidité), choisis une allocation, et justifie un plan d'exécution + invalidation.</p>
+      <div class="visual-card accent-border">
+        <div class="visual-card-title">Mini graphique de contexte</div>
+        <div class="mini-chart">
+          <div class="bar" style="height:45%; background:#ef4444;"></div>
+          <div class="bar" style="height:58%; background:#f59e0b;"></div>
+          <div class="bar" style="height:66%; background:#3b82f6;"></div>
+          <div class="bar" style="height:74%; background:#06b6d4;"></div>
+          <div class="bar" style="height:82%; background:#10b981;"></div>
+          <div class="bar" style="height:77%; background:#8b5cf6;"></div>
+          <div class="bar" style="height:88%; background:#10b981;"></div>
+        </div>
+      </div>
+      <ul>
+        <li><strong>Check macro:</strong> inflation, taux réels, momentum du dollar, corrélation risque.</li>
+        <li><strong>Check risque:</strong> taille de position, stop logique, ratio rendement/risque.</li>
+        <li><strong>Check exécution:</strong> entrée fractionnée, revue hebdo, journal de décision.</li>
+      </ul>
+    </section>
+  `;
+}
+
+function updateNavButtons() {
+  document.querySelectorAll('.top-nav').forEach(nav => {
+    if (nav.querySelector('.quick-nav')) return;
+    const quick = document.createElement('div');
+    quick.className = 'quick-nav';
+    quick.innerHTML = `
+      <button class="btn-ghost" onclick="showScreen('screen-home')">🏠 Accueil</button>
+      <button class="btn-ghost" onclick="showScreen('screen-level')">🧭 Niveaux</button>
+      <button class="btn-ghost" onclick="goToDashboardFromNav()">📚 Parcours</button>
+      <button class="btn-ghost" onclick="showScreen('screen-about')">ℹ️ À propos</button>
+    `;
+    nav.appendChild(quick);
+  });
+}
+
+function goToDashboardFromNav() {
+  if (state.currentLevel) {
+    renderDashboard(state.currentLevel);
+    showScreen('screen-dashboard');
+  } else {
+    showScreen('screen-level');
+  }
+}
+
+function setAiAvailability(screenId) {
+  const orb = document.getElementById('ai-orb');
+  if (!orb) return;
+  const inQuiz = screenId === 'screen-quiz';
+  uiState.aiEnabled = !inQuiz || uiState.aiUnlockedByMistake;
+  orb.classList.remove('hidden');
+  orb.classList.toggle('disabled', !uiState.aiEnabled);
+  orb.title = uiState.aiEnabled ? 'Assistant IA' : 'Assistant IA indisponible pendant le QCM';
+}
+
+function toggleAiAssistant() {
+  const panel = document.getElementById('ai-panel');
+  if (!panel || !uiState.aiEnabled) return;
+  uiState.aiOpen = !uiState.aiOpen;
+  panel.classList.toggle('hidden', !uiState.aiOpen);
+}
+
+function askAssistant() {
+  if (!uiState.aiEnabled) return;
+  const input = document.getElementById('ai-input');
+  const body = document.getElementById('ai-body');
+  const q = (input.value || '').trim();
+  if (!q) return;
+
+  const answer = generateAiAnswer(q);
+  body.innerHTML = `<p><strong>Vous :</strong> ${q}</p><p><strong>Assistant :</strong> ${answer}</p>`;
+  input.value = '';
+}
+
+function generateAiAnswer(question) {
+  const lower = question.toLowerCase();
+  if (uiState.lastWrongQuestion && (lower.includes('erreur') || lower.includes('qcm') || lower.includes('faux'))) {
+    return `Tu t'es trompé sur un point clé : ${uiState.lastWrongQuestion.explanation} Exemple concret : prends 3 actifs, fixe un risque max de 1% par trade et note les résultats sur 10 séances pour valider ta compréhension.`;
+  }
+  if (lower.includes('bitcoin')) return 'Bitcoin est un actif rare (21M max), très volatil, utile surtout en allocation maîtrisée avec gestion du risque stricte.';
+  if (lower.includes('inflation')) return 'Inflation = perte de pouvoir d’achat. Solution : investir diversifié, horizon long, et suivre ton rendement réel (après inflation).';
+  return 'Méthode rapide: 1) définir objectif, 2) choisir actifs adaptés, 3) plan de risque, 4) journal de suivi. Je peux détailler étape par étape.';
+}
+
+function setRating(value) {
+  uiState.selectedRating = value;
+  document.querySelectorAll('#rating-stars button').forEach((btn, idx) => {
+    btn.classList.toggle('active', idx < value);
+  });
+}
+
+function dismissRatingModal() {
+  const modal = document.getElementById('rating-modal');
+  modal?.classList.add('hidden');
+}
+
+function submitRating() {
+  const comment = document.getElementById('rating-comment').value.trim();
+  localStorage.setItem('financelab_rating', JSON.stringify({
+    stars: uiState.selectedRating || 0,
+    comment,
+    createdAt: new Date().toISOString()
+  }));
+  state.ratingDone = true;
+  saveState();
+  dismissRatingModal();
+}
+
+function startRatingTimer() {
+  if (uiState.ratingTimerStarted || state.ratingDone) return;
+  uiState.ratingTimerStarted = true;
+  setTimeout(() => {
+    if (!state.ratingDone) {
+      document.getElementById('rating-modal')?.classList.remove('hidden');
+    }
+  }, 60000);
+}
+
+function enrichAdvancedQuizzes() {
+  ['intermediaire', 'professionnel'].forEach(level => {
+    LESSONS_DATA[level].forEach(lesson => {
+      if (lesson.quiz.length >= 5) return;
+      lesson.quiz.push(
+        {
+          q: `Dans ${lesson.title}, quelle étape vient juste après l'identification du risque principal ?`,
+          opts: ['Ignorer la volatilité', 'Définir un plan de mitigation mesurable', 'Doubler la position', 'Sortir du marché sans analyse'],
+          ans: 1,
+          expl: 'Après avoir identifié le risque, il faut un plan concret : taille de position, seuil d’invalidation et suivi.'
+        },
+        {
+          q: `Quel indicateur de discipline est le plus pertinent pour un profil ${level} ?`,
+          opts: ['Le nombre de trades', 'Le respect systématique du plan de risque', 'La fréquence des notifications', 'Le levier maximum'],
+          ans: 1,
+          expl: 'La discipline se mesure par le respect du plan de risque, pas par le volume d’activité.'
+        }
+      );
+    });
+  });
+}
+
 // ============================================================
 // PARTICULES D'ARRIÈRE-PLAN (canvas)
 // ============================================================
 function initParticles() {
   const canvas = document.getElementById('particles-canvas');
   if (!canvas) return;
   const ctx = canvas.getContext('2d');
 
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
 
   const particles = [];
   const count = Math.min(60, Math.floor(window.innerWidth / 20));
 
   for (let i = 0; i < count; i++) {
     particles.push({
       x: Math.random() * canvas.width,
       y: Math.random() * canvas.height,
       radius: Math.random() * 2 + 0.5,
       vx: (Math.random() - 0.5) * 0.4,
       vy: (Math.random() - 0.5) * 0.4,
       opacity: Math.random() * 0.5 + 0.1
     });
   }
 
@@ -1509,29 +1694,34 @@ function initParticles() {
           ctx.moveTo(particles[i].x, particles[i].y);
           ctx.lineTo(particles[j].x, particles[j].y);
           ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 120)})`;
           ctx.lineWidth = 0.5;
           ctx.stroke();
         }
       }
     }
 
     requestAnimationFrame(animate);
   }
 
   animate();
 
   window.addEventListener('resize', () => {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
   });
 }
 
 // ============================================================
 // INITIALISATION
 // ============================================================
 document.addEventListener('DOMContentLoaded', () => {
   loadState();
+  enrichAdvancedQuizzes();
   updateScoreDisplays();
   updateUserCard();
+  updateNavButtons();
+  startRatingTimer();
+  setAiAvailability(state.lastScreen || 'screen-home');
   initParticles();
+  showScreen(state.lastScreen || 'screen-home');
 });
