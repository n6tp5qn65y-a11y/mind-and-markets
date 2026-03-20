// ---------------- DATA ----------------

const lessons = [
{
id:1,
title:"Les actions",
summary:"Comprendre les bases de la bourse",
image:"stock market trading",

content:{
problem:"Pourquoi les actions sont-elles essentielles dans l’économie moderne ?",

intro:"Une action représente une part du capital d’une entreprise. Lorsqu’un investisseur achète une action, il devient propriétaire d’une partie de cette entreprise.",

plan:[
"Définition d’une action",
"Pourquoi les entreprises utilisent la bourse",
"Comment gagner de l’argent"
],

body:[
"Une action est un titre de propriété. Cela signifie que tu possèdes une partie de l’entreprise.",
"Les entreprises émettent des actions pour lever de l’argent afin de se développer.",
"Les investisseurs peuvent gagner de l’argent de deux façons : les dividendes et la hausse du prix de l’action.",
"Le prix d’une action dépend de l’offre et de la demande sur le marché.",
"Les marchés financiers permettent d’échanger ces actions en continu."
],

conclusion:"Les actions sont un outil fondamental pour financer les entreprises et créer de la richesse pour les investisseurs."
}
},

{
id:2,
title:"L’inflation",
summary:"Comprendre pourquoi les prix augmentent",
image:"inflation economy",

content:{
problem:"Pourquoi l’argent perd-il de la valeur avec le temps ?",

intro:"L’inflation correspond à une augmentation générale des prix dans une économie.",

plan:[
"Définition de l’inflation",
"Les causes",
"Les conséquences"
],

body:[
"L’inflation réduit le pouvoir d’achat des consommateurs.",
"Elle peut être causée par une forte demande ou une augmentation des coûts.",
"Les banques centrales utilisent les taux d’intérêt pour la contrôler.",
"Une inflation modérée est normale, mais trop d’inflation est dangereuse.",
"Elle influence directement les investissements et l’épargne."
],

conclusion:"Comprendre l’inflation permet de mieux gérer son argent et ses investissements."
}
}
];

// ---------------- QUIZ ----------------

const quizzes = [
{
id:1,
question:"Une action représente :",
choices:[
"Une dette",
"Une part d’entreprise",
"Une taxe"
],
answer:1,
explanation:"Une action correspond à une part du capital d’une entreprise. Elle donne un droit de propriété."
}
];

// ---------------- RENDER ----------------

function renderLessons(){
document.getElementById("lessons").innerHTML =
lessons.map(l=>`
<div class="card">
<h3>${l.title}</h3>
<p>${l.summary}</p>
<button onclick="openLesson(${l.id})">Voir plus</button>
</div>
`).join("");
}

function renderQuiz(){
document.getElementById("quiz").innerHTML =
quizzes.map(q=>`
<div class="card">
<h3>${q.question}</h3>
<button onclick="openQuiz(${q.id})">Répondre</button>
</div>
`).join("");
}

// ---------------- LESSON MODAL ----------------

function openLesson(id){
const l=lessons.find(x=>x.id===id);

document.getElementById("lessonContent").innerHTML=`
<h1>${l.title}</h1>

<img src="https://source.unsplash.com/800x400/?${l.image}">

<h2>Problématique</h2>
<p>${l.content.problem}</p>

<h2>Introduction</h2>
<p>${l.content.intro}</p>

<h2>Plan</h2>
<ul>${l.content.plan.map(p=>`<li>${p}</li>`).join("")}</ul>

<h2>Développement</h2>
${l.content.body.map(p=>`<p>${p}</p>`).join("")}

<h2>Conclusion</h2>
<p>${l.content.conclusion}</p>

<button onclick="closeLesson()">Fermer</button>
`;

document.getElementById("lessonModal").classList.remove("hidden");
}

function closeLesson(){
document.getElementById("lessonModal").classList.add("hidden");
}

// ---------------- QUIZ ----------------

function openQuiz(id){
const q=quizzes.find(x=>x.id===id);

document.getElementById("quizContent").innerHTML=`
<h2>${q.question}</h2>

${q.choices.map((c,i)=>`
<button onclick="checkAnswer(${i},${q.answer},\`${q.explanation}\`)">${c}</button>
`).join("")}
`;

document.getElementById("quizModal").classList.remove("hidden");
}

// ---------------- IA EXPLICATION AMÉLIORÉE ----------------

function checkAnswer(choice,correct,explanation){

if(choice===correct){
document.getElementById("quizContent").innerHTML=`
<h2>✅ Bonne réponse 🎉</h2>
<p>Excellent ! Tu progresses vraiment.</p>
<button onclick="closeQuiz()">Continuer</button>
`;
}else{

// 🔥 IA simple : reformulation + conseil
const aiExplain = `
Tu t’es trompé, mais c’est normal 👍

👉 Explication simple :
${explanation}

💡 Conseil :
Je te recommande de revoir la leçon pour bien comprendre le concept avant de continuer.
`;

document.getElementById("quizContent").innerHTML=`
<h2>❌ Réponse incorrecte</h2>
<p>${aiExplain}</p>
<button onclick="closeQuiz()">Compris</button>
`;
}
}

function closeQuiz(){
document.getElementById("quizModal").classList.add("hidden");
}

// ---------------- INIT ----------------

renderLessons();
renderQuiz();
