/* ============================================================
   FINANCELAB — script.js
   Gestion des écrans, leçons, QCM, gamification, particules
============================================================ */

'use strict';

// ============================================================
// DONNÉES : 15 LEÇONS (5 par niveau)
// ============================================================
const LESSONS_DATA = {

  // ==================== DÉBUTANT ====================
  debutant: [
    {
      id: 'deb-1',
      icon: '🏦',
      title: 'Qu\'est-ce qu\'un marché financier ?',
      desc: 'Comprendre où s\'échangent les actifs et pourquoi ça nous concerne tous.',
      duration: '8 min',
      content: buildLesson({
        bigQuestion: 'Pourquoi des millions de personnes s\'échangent-elles des titres chaque jour — et qu\'est-ce que ça a à voir avec ton argent ?',
        intro: 'Quand on entend "marché financier", on pense souvent à des traders qui crient dans une salle, des écrans verts et rouges, et une bande de gens en costumes. En réalité, les marchés financiers font partie de notre quotidien bien plus qu\'on ne le croit.',
        plan: ['1. Définition simple d\'un marché financier', '2. À quoi ça sert ?', '3. Qui y participe ?', '4. Les grands types de marchés'],
        problematique: 'Comment des inconnus à l\'autre bout du monde peuvent-ils décider du prix de l\'argent de ton épargne ?',
        developpement: `
          <div class="lesson-section">
            <h4>Définition</h4>
            <h2>Un marché, c'est simple : un lieu d'échange</h2>
            <p>Un <strong>marché financier</strong> est un endroit — aujourd'hui surtout numérique — où des acheteurs et des vendeurs s'accordent sur un prix pour échanger des <strong>actifs financiers</strong> : actions, obligations, devises, matières premières...</p>
            <div class="highlight-box">
              💡 Imagine un marché de fruits et légumes. Les producteurs vendent, les gens achètent. Le prix dépend de l'offre et de la demande. Les marchés financiers fonctionnent exactement pareil — sauf que le "fruit" est une part d'entreprise ou une dette d'État.
            </div>
          </div>
          <div class="lesson-section">
            <h4>Utilité</h4>
            <h2>À quoi ça sert vraiment ?</h2>
            <ul>
              <li><strong>Financer les entreprises :</strong> Une boîte a besoin d'argent pour grandir → elle vend des actions ou émet des obligations.</li>
              <li><strong>Financer les États :</strong> Les gouvernements empruntent pour construire des routes, payer des fonctionnaires → ils émettent des obligations d'État.</li>
              <li><strong>Permettre l'épargne :</strong> Tu mets de l'argent de côté → tu achètes des actifs → ton argent "travaille".</li>
              <li><strong>Gérer le risque :</strong> Des instruments permettent de se protéger contre les fluctuations de prix.</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Acteurs</h4>
            <h2>Qui participe aux marchés ?</h2>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Écosystème des marchés financiers</div>
              <ul>
                <li>🏦 <strong>Banques et institutions</strong> — les plus gros acteurs</li>
                <li>🏢 <strong>Entreprises</strong> — cherchent des capitaux</li>
                <li>🏛️ <strong>États et banques centrales</strong> — régulent et empruntent</li>
                <li>📊 <strong>Fonds d'investissement</strong> — gèrent l'argent de beaucoup de gens</li>
                <li>👤 <strong>Particuliers (toi !)</strong> — de plus en plus nombreux grâce aux apps</li>
              </ul>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Types de marchés</h4>
            <h2>Les 4 grands types de marchés</h2>
            <ul>
              <li><strong>Marché actions (boursier) :</strong> on y achète des parts d'entreprises (ex : Apple, Total, LVMH)</li>
              <li><strong>Marché obligataire :</strong> on y prête de l'argent à des États ou entreprises contre intérêt</li>
              <li><strong>Marché des changes (Forex) :</strong> on y échange des devises (euro contre dollar, etc.)</li>
              <li><strong>Marchés de matières premières :</strong> or, pétrole, blé, café... tout se négocie !</li>
            </ul>
          </div>
        `,
        resume: 'Un marché financier est un espace d\'échange d\'actifs financiers entre acheteurs et vendeurs. Il sert à financer entreprises et États, et à permettre à l\'épargne de "travailler". Les marchés principaux sont les actions, les obligations, le forex et les matières premières.',
        keyPoints: [
          'Un marché financier = un lieu d\'échange d\'actifs (actions, obligations, devises…)',
          'Son rôle : financer les entreprises, les États, et permettre aux particuliers d\'investir',
          'Le prix se fixe par l\'offre et la demande',
          '4 grands types : actions, obligations, forex, matières premières',
          'Tout le monde peut y participer, même toi, via des applications'
        ]
      }),
      quiz: [
        { q: 'Qu\'est-ce qu\'un marché financier ?', opts: ['Un supermarché spécialisé en finance', 'Un lieu d\'échange d\'actifs financiers entre acheteurs et vendeurs', 'Une salle de trading réservée aux banques', 'Un organisme gouvernemental'], ans: 1, expl: 'Un marché financier est un espace — surtout numérique aujourd\'hui — où s\'échangent des actifs financiers selon l\'offre et la demande.' },
        { q: 'Lequel de ces éléments N\'est PAS un type de marché financier ?', opts: ['Le marché actions', 'Le marché obligataire', 'Le marché immobilier physique', 'Le marché des changes'], ans: 2, expl: 'L\'immobilier physique (acheter un appartement) n\'est pas un marché financier au sens classique. Les 4 grands marchés sont : actions, obligations, forex, matières premières.' },
        { q: 'Pourquoi une entreprise émet-elle des actions sur les marchés ?', opts: ['Pour payer moins d\'impôts', 'Pour financer son développement en levant des capitaux', 'Pour augmenter la dette de l\'État', 'Pour contrôler les prix'], ans: 1, expl: 'Émettre des actions permet à une entreprise de lever des fonds auprès d\'investisseurs pour financer sa croissance, sans avoir à rembourser (contrairement à un prêt).' }
      ]
    },
    {
      id: 'deb-2',
      icon: '📋',
      title: 'Actions, Obligations & ETF : les 3 piliers',
      desc: 'Les 3 instruments les plus utilisés dans le monde, expliqués simplement.',
      duration: '10 min',
      content: buildLesson({
        bigQuestion: 'Si tu avais 1 000 € à investir demain, dans quoi les mettrais-tu et pourquoi ?',
        intro: 'Avant d\'investir, il faut comprendre ce que l\'on achète. Trois instruments dominent l\'investissement particulier : les actions, les obligations et les ETF. Chacun a ses avantages, ses risques, et son rôle dans un portefeuille.',
        plan: ['1. L\'action : être copropriétaire', '2. L\'obligation : être prêteur', '3. L\'ETF : la solution intelligente', '4. Comparaison pratique'],
        problematique: 'Comment choisir l\'instrument financier adapté à son profil et à ses objectifs ?',
        developpement: `
          <div class="lesson-section">
            <h4>Actions</h4>
            <h2>L'action : devenir copropriétaire d'une entreprise</h2>
            <p>Acheter une action, c'est acheter un <strong>fragment de propriété</strong> d'une entreprise. Si Apple vaut 1 000 milliards de $ et qu'elle a émis 1 milliard d'actions, chaque action vaut 1 000 $.</p>
            <ul>
              <li>🟢 <strong>Avantage :</strong> Tu profites de la croissance de l'entreprise. Si Apple double, ton action double.</li>
              <li>🔴 <strong>Risque :</strong> L'entreprise peut perdre de la valeur ou faire faillite.</li>
              <li>💰 <strong>Dividendes :</strong> Certaines entreprises partagent leurs bénéfices (dividendes).</li>
            </ul>
            <div class="highlight-box green">
              🍎 Exemple : Tu achètes 1 action Apple à 180 $. Un an plus tard, elle vaut 220 $. Tu as gagné 40 $ (22%) sans rien faire — mais tu aurais aussi pu perdre si Apple avait chuté.
            </div>
          </div>
          <div class="lesson-section">
            <h4>Obligations</h4>
            <h2>L'obligation : prêter de l'argent contre intérêt</h2>
            <p>Une obligation, c'est comme prêter de l'argent à un État ou une entreprise. En échange, ils te versent des <strong>intérêts réguliers</strong> (le "coupon") et te remboursent à l'échéance.</p>
            <ul>
              <li>🟢 <strong>Avantage :</strong> Revenus prévisibles, moins volatile que les actions.</li>
              <li>🔴 <strong>Risque :</strong> Taux d'intérêt faibles si emprunteur solide (État français). Risque de défaut si emprunteur fragile.</li>
              <li>🏛️ <strong>OAT :</strong> Obligation d'État française = parmi les plus sûres.</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>ETF</h4>
            <h2>L'ETF : le meilleur des deux mondes ?</h2>
            <p>Un <strong>ETF (Exchange-Traded Fund)</strong> est un "panier" qui regroupe des dizaines ou centaines d'actions ou d'obligations. En achetant un ETF, tu achètes un peu de tout.</p>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Exemple : ETF CAC 40</div>
              <p>En achetant 1 part d'ETF CAC 40, tu investis dans les 40 plus grandes entreprises françaises en même temps : Total, LVMH, Airbus, BNP, etc.</p>
              <div class="mini-chart">
                <div class="bar" style="height:70%; background:#3b82f6;" title="Actions"></div>
                <div class="bar" style="height:50%; background:#8b5cf6;"></div>
                <div class="bar" style="height:85%; background:#10b981;"></div>
                <div class="bar" style="height:60%; background:#f59e0b;"></div>
                <div class="bar" style="height:75%; background:#06b6d4;"></div>
                <div class="bar" style="height:45%; background:#3b82f6;"></div>
                <div class="bar" style="height:65%; background:#8b5cf6;"></div>
                <div class="bar" style="height:80%; background:#10b981;"></div>
              </div>
            </div>
            <ul>
              <li>🟢 <strong>Diversification automatique</strong> → moins de risque</li>
              <li>🟢 <strong>Frais faibles</strong> → souvent moins de 0,3% par an</li>
              <li>🟢 <strong>Simple</strong> → un seul achat, une exposition large</li>
              <li>🔴 <strong>Risque :</strong> Tu suis le marché en entier, donc tu baisses aussi quand le marché baisse.</li>
            </ul>
          </div>
        `,
        resume: 'Les 3 instruments clés sont : l\'action (propriété d\'entreprise, fort potentiel, risqué), l\'obligation (prêt contre intérêt, stable, rendement moindre), et l\'ETF (panier diversifié, solution idéale pour débuter).',
        keyPoints: [
          'Action = part de propriété dans une entreprise. Potentiel élevé, risque élevé.',
          'Obligation = prêt à un État/entreprise. Revenu fixe, risque faible.',
          'ETF = panier d\'actifs diversifié. Simple, efficace, peu coûteux.',
          'La diversification (mélanger différents actifs) réduit le risque global.',
          'Pour débuter, les ETF sont souvent recommandés par les experts.'
        ]
      }),
      quiz: [
        { q: 'Qu\'achète-t-on concrètement en achetant une action ?', opts: ['Une obligation d\'État', 'Une part de propriété dans une entreprise', 'Un fonds diversifié', 'Un contrat de prêt'], ans: 1, expl: 'Une action représente une fraction de la propriété d\'une entreprise. Tu es littéralement co-propriétaire (de façon minuscule) de la société.' },
        { q: 'Qu\'est-ce qu\'un ETF ?', opts: ['Un type de compte bancaire', 'Une cryptomonnaie spéciale', 'Un panier d\'actifs (actions, obligations…) qu\'on achète en une seule transaction', 'Un service de trading automatique'], ans: 2, expl: 'Un ETF (Exchange-Traded Fund) regroupe de nombreux actifs. En achetant une part, tu t\'exposes à tous ces actifs en même temps — c\'est la diversification simplifiée.' },
        { q: 'Quel instrument offre généralement le revenu le plus prévisible ?', opts: ['Les actions', 'Les ETF d\'actions', 'Les obligations', 'Les crypto-monnaies'], ans: 2, expl: 'Les obligations versent un coupon (intérêt) régulier et remboursent le capital à l\'échéance. Elles sont bien plus prévisibles que les actions ou les cryptos.' }
      ]
    },
    {
      id: 'deb-3',
      icon: '📉',
      title: 'Inflation & Diversification',
      desc: 'Pourquoi ton argent qui dort perd de la valeur et comment y remédier.',
      duration: '9 min',
      content: buildLesson({
        bigQuestion: 'Si tu mets 10 000 € sous ton matelas, en auras-tu plus ou moins dans 10 ans ?',
        intro: 'L\'inflation, c\'est l\'ennemie silencieuse de ton épargne. Elle ronge ton pouvoir d\'achat année après année. La diversification, elle, est le bouclier de l\'investisseur intelligent.',
        plan: ['1. L\'inflation expliquée simplement', '2. Pourquoi l\'épargne oisive perd de la valeur', '3. La diversification comme protection', '4. Règles pratiques'],
        problematique: 'Comment protéger et faire croître son argent face à l\'érosion monétaire ?',
        developpement: `
          <div class="lesson-section">
            <h4>Inflation</h4>
            <h2>L'inflation : la hausse des prix dans le temps</h2>
            <p>L'<strong>inflation</strong> désigne l'augmentation générale et durable du niveau des prix. Si l'inflation est de 3% par an, un café à 2 € aujourd'hui coûtera ~2,06 € l'an prochain.</p>
            <div class="visual-card gold-border">
              <div class="visual-card-title">Impact sur 10 000 € avec 3% d'inflation/an</div>
              <div class="mini-chart">
                <div class="bar" style="height:100%; background:#f59e0b;"></div>
                <div class="bar" style="height:97%; background:#f59e0b; opacity:0.9;"></div>
                <div class="bar" style="height:94%; background:#f59e0b; opacity:0.8;"></div>
                <div class="bar" style="height:91%; background:#f59e0b; opacity:0.7;"></div>
                <div class="bar" style="height:88%; background:#f59e0b; opacity:0.6;"></div>
                <div class="bar" style="height:86%; background:#f59e0b; opacity:0.5;"></div>
                <div class="bar" style="height:83%; background:#f59e0b; opacity:0.4;"></div>
                <div class="bar" style="height:81%; background:#f59e0b; opacity:0.35;"></div>
                <div class="bar" style="height:78%; background:#f59e0b; opacity:0.3;"></div>
                <div class="bar" style="height:74%; background:#f59e0b; opacity:0.25;"></div>
              </div>
              <p style="font-size:0.82rem; margin-top:12px;">Tes 10 000 € auront un pouvoir d'achat équivalent à ~7 440 € après 10 ans. Tu n'as rien fait mais tu as perdu ~26%.</p>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Diversification</h4>
            <h2>Ne mets pas tous tes œufs dans le même panier</h2>
            <p>La <strong>diversification</strong>, c'est répartir ses investissements sur différents types d'actifs, secteurs, et zones géographiques pour réduire le risque global.</p>
            <div class="highlight-box">
              🥚 L'image classique : si tu mets tous tes œufs dans un seul panier et que tu trébuches, tu perds tout. En les répartissant dans 10 paniers, un accident n'est pas catastrophique.
            </div>
            <ul>
              <li><strong>Diversification par classe d'actifs :</strong> Actions + Obligations + Immobilier + Crypto (optionnel)</li>
              <li><strong>Diversification géographique :</strong> Europe + USA + Marchés émergents</li>
              <li><strong>Diversification sectorielle :</strong> Tech + Santé + Énergie + Finance</li>
              <li><strong>Diversification dans le temps :</strong> Investir régulièrement (Dollar-Cost Averaging)</li>
            </ul>
          </div>
        `,
        resume: 'L\'inflation érode le pouvoir d\'achat de ton argent chaque année. Pour y faire face, il faut investir dans des actifs qui offrent un rendement supérieur à l\'inflation. La diversification réduit le risque en répartissant ses placements.',
        keyPoints: [
          'L\'inflation de 2-3%/an fait perdre 20-26% de pouvoir d\'achat en 10 ans si l\'argent dort',
          'Garder son argent sur un compte courant sans intérêt = perdre de la valeur chaque jour',
          'La diversification = répartir le risque sur plusieurs actifs, zones, secteurs',
          'Un portefeuille diversifié résiste mieux aux crises qu\'un portefeuille concentré',
          'Investir régulièrement (DCA) est souvent plus efficace qu\'investir tout d\'un coup'
        ]
      }),
      quiz: [
        { q: 'Qu\'est-ce que l\'inflation ?', opts: ['La hausse des taux d\'intérêt bancaires', 'L\'augmentation générale et durable du niveau des prix', 'La chute de la valeur du dollar', 'Une taxe sur les investissements'], ans: 1, expl: 'L\'inflation mesure la hausse des prix sur une période. Quand elle est à 3%, tout ce qui coûte 100€ cette année coûtera environ 103€ l\'année prochaine.' },
        { q: 'Que se passe-t-il à ton argent qui "dort" sur un compte sans intérêt ?', opts: ['Il reste identique en valeur', 'Il augmente légèrement grâce à la garantie bancaire', 'Il perd du pouvoir d\'achat à cause de l\'inflation', 'Il est protégé par l\'État contre toute perte'], ans: 2, expl: 'L\'inflation ronge le pouvoir d\'achat de l\'argent non investi. 10 000€ aujourd\'hui achèteront moins de biens dans 10 ans si l\'argent reste sur un compte à 0%.' },
        { q: 'Quel est le principal bénéfice de la diversification ?', opts: ['Garantir un gain à coup sûr', 'Réduire l\'impôt sur les plus-values', 'Réduire le risque global en répartissant les placements', 'Maximiser les rendements à court terme'], ans: 2, expl: 'La diversification ne garantit pas le gain, mais elle réduit le risque. En répartissant sur plusieurs actifs, une mauvaise performance en impacte moins l\'ensemble.' }
      ]
    },
    {
      id: 'deb-4',
      icon: '₿',
      title: 'Bitcoin : comprendre la révolution',
      desc: 'Qu\'est-ce que Bitcoin, comment ça marche, et pourquoi c\'est révolutionnaire.',
      duration: '12 min',
      content: buildLesson({
        bigQuestion: 'Pourquoi une monnaie numérique créée par un inconnu en 2009 vaut-elle aujourd\'hui des milliers d\'euros ?',
        intro: 'Bitcoin est souvent décrit comme de l\'or numérique, une arnaque, ou la monnaie du futur. La vérité est plus nuancée. Comprendre Bitcoin, c\'est comprendre une révolution dans la façon dont on pense la monnaie.',
        plan: ['1. Qu\'est-ce que Bitcoin ?', '2. La blockchain en termes simples', '3. Pourquoi Bitcoin a de la valeur', '4. Risques et réalités'],
        problematique: 'Comment une monnaie sans banque centrale ni État peut-elle avoir de la valeur et être fiable ?',
        developpement: `
          <div class="lesson-section">
            <h4>Bitcoin</h4>
            <h2>Bitcoin : une monnaie numérique décentralisée</h2>
            <p>Bitcoin (BTC) est une <strong>monnaie numérique</strong> créée en 2009 par une personne (ou groupe) sous le pseudonyme <strong>Satoshi Nakamoto</strong>. Sa particularité : elle n'appartient à aucun État ni banque.</p>
            <ul>
              <li>💻 <strong>Numérique :</strong> Existe uniquement sous forme de code informatique</li>
              <li>🔒 <strong>Décentralisé :</strong> Aucun acteur central ne le contrôle</li>
              <li>📦 <strong>Limité :</strong> Il n'existera jamais plus de 21 millions de BTC (rareté artificielle)</li>
              <li>🌍 <strong>Mondial :</strong> Transfert entre pays sans intermédiaire</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Blockchain</h4>
            <h2>La blockchain : le registre public infalsifiable</h2>
            <p>La <strong>blockchain</strong> est la technologie sur laquelle repose Bitcoin. C'est un registre (livre de comptes) partagé entre des milliers d'ordinateurs dans le monde.</p>
            <div class="highlight-box">
              📖 Imagine un livre de comptes géant que tout le monde peut lire, mais que personne ne peut effacer ni falsifier, car des milliers de copies identiques existent simultanément. C'est la blockchain.
            </div>
            <ul>
              <li>Chaque transaction est enregistrée dans un "bloc"</li>
              <li>Les blocs sont reliés les uns aux autres → la "chaîne"</li>
              <li>Modifier un bloc nécessiterait de modifier tous les suivants sur tous les ordinateurs → impossible en pratique</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Valeur</h4>
            <h2>Pourquoi Bitcoin a-t-il de la valeur ?</h2>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Les 4 sources de valeur de Bitcoin</div>
              <ul>
                <li>🥇 <strong>Rareté :</strong> Maximum 21 millions d'unités → comme l'or, la limite crée de la valeur</li>
                <li>🛡️ <strong>Sécurité :</strong> Réseau le plus sécurisé du monde en termes de puissance de calcul</li>
                <li>🌍 <strong>Réseau :</strong> Plus les gens l'utilisent, plus il a de la valeur (effet réseau)</li>
                <li>📜 <strong>Confiance :</strong> 15 ans d'existence sans hack du protocole principal</li>
              </ul>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Risques</h4>
            <h2>Les réalités à connaître</h2>
            <ul>
              <li>🔴 <strong>Très volatile :</strong> Le prix peut chuter de 50%+ en quelques mois</li>
              <li>🔴 <strong>Pas garanti :</strong> Aucune assurance gouvernementale si tu perds ton accès</li>
              <li>🔴 <strong>Réglementaire :</strong> Les lois varient selon les pays</li>
              <li>🟡 <strong>Technologique :</strong> Arrivée d'une technologie supérieure possible (mais Bitcoin résiste bien)</li>
            </ul>
          </div>
        `,
        resume: 'Bitcoin est une monnaie numérique décentralisée et limitée à 21 millions d\'unités. Sa valeur vient de sa rareté, sa sécurité, et l\'effet réseau. La blockchain est le registre public infalsifiable qui le sous-tend. C\'est un actif très volatile.',
        keyPoints: [
          'Bitcoin = monnaie numérique créée en 2009, sans banque centrale',
          'Limité à 21 millions d\'unités — sa rareté est mathématiquement garantie',
          'La blockchain = registre partagé infalsifiable grâce à la décentralisation',
          'La valeur de Bitcoin vient de sa rareté, sécurité, et l\'adoption croissante',
          'Très volatile : à n\'investir que ce qu\'on est prêt à perdre'
        ]
      }),
      quiz: [
        { q: 'Qui contrôle Bitcoin ?', opts: ['La Banque Centrale Européenne', 'Satoshi Nakamoto', 'Personne — il est décentralisé', 'Le gouvernement américain'], ans: 2, expl: 'Bitcoin est décentralisé : aucun acteur unique ne le contrôle. Il fonctionne grâce à un réseau de milliers d\'ordinateurs dans le monde entier.' },
        { q: 'Combien de Bitcoins existeront-il au maximum ?', opts: ['1 milliard', '100 millions', '21 millions', 'Illimité'], ans: 2, expl: 'Le protocole Bitcoin limite le nombre total d\'unités à 21 millions. Cette rareté programmée est l\'une des sources de sa valeur.' },
        { q: 'Qu\'est-ce que la blockchain ?', opts: ['Un type de portefeuille numérique', 'Un registre public partagé et infalsifiable', 'Une plateforme d\'échange de crypto', 'L\'entreprise qui gère Bitcoin'], ans: 1, expl: 'La blockchain est un registre (livre de comptes) distribué sur des milliers d\'ordinateurs. Chaque transaction y est enregistrée de façon permanente et transparente.' }
      ]
    },
    {
      id: 'deb-5',
      icon: '🚀',
      title: 'Premiers pas en crypto',
      desc: 'Comment acheter, stocker et sécuriser ses premières cryptos.',
      duration: '10 min',
      content: buildLesson({
        bigQuestion: 'Comment entrer dans le monde crypto sans se faire piéger ni perdre son argent dès le premier jour ?',
        intro: 'Se lancer dans les crypto-monnaies peut sembler compliqué et risqué. C\'est vrai qu\'il faut faire attention. Mais avec les bonnes bases, tu peux naviguer dans cet univers sereinement.',
        plan: ['1. Exchange vs wallet : la différence clé', '2. Comment acheter ses premières cryptos', '3. Les erreurs classiques à éviter', '4. Règles d\'or de la sécurité'],
        problematique: 'Comment protéger ses actifs numériques dans un environnement peu régulé ?',
        developpement: `
          <div class="lesson-section">
            <h4>Fondamentaux</h4>
            <h2>Exchange et Wallet : deux outils différents</h2>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Exchange vs Wallet</div>
              <ul>
                <li>🏦 <strong>Exchange (Binance, Coinbase…) :</strong> Plateforme où tu achètes/vends des cryptos. Pratique mais tu ne "possédes" pas vraiment tes clés.</li>
                <li>👝 <strong>Wallet (portefeuille) :</strong> Outil de stockage. Hot wallet (en ligne, pratique), cold wallet (physique, ultra-sécurisé).</li>
              </ul>
            </div>
            <div class="highlight-box">
              🔑 "Not your keys, not your coins." Si tu laisses tes cryptos sur un exchange et qu'il fait faillite (ça arrive : FTX 2022), tu peux tout perdre.
            </div>
          </div>
          <div class="lesson-section">
            <h4>Pratique</h4>
            <h2>Comment acheter ses premières cryptos (étapes)</h2>
            <ul>
              <li><strong>Étape 1 :</strong> Choisir un exchange réputé (Coinbase, Kraken, Binance)</li>
              <li><strong>Étape 2 :</strong> Créer un compte et vérifier son identité (KYC obligatoire)</li>
              <li><strong>Étape 3 :</strong> Déposer des euros via virement ou carte</li>
              <li><strong>Étape 4 :</strong> Acheter la crypto choisie (commencer par BTC ou ETH)</li>
              <li><strong>Étape 5 :</strong> Pour des montants importants, transférer vers un wallet personnel</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Sécurité</h4>
            <h2>Les règles d'or de la sécurité</h2>
            <ul>
              <li>🔐 <strong>2FA activé :</strong> Toujours activer l'authentification à deux facteurs</li>
              <li>📝 <strong>Seed phrase sécurisée :</strong> Note ta phrase de récupération (12-24 mots) sur papier et range-la hors ligne</li>
              <li>🚫 <strong>Méfiance des DMs :</strong> Jamais personne de légitime ne te demandera ta seed phrase</li>
              <li>🧪 <strong>Commence petit :</strong> N'investis que ce que tu acceptes de perdre à 100%</li>
              <li>📉 <strong>Pas de FOMO :</strong> Ne jamais acheter parce que "ça monte fort là"</li>
            </ul>
          </div>
        `,
        resume: 'Pour démarrer en crypto : utiliser un exchange réputé, activer le 2FA, sécuriser sa seed phrase hors ligne, commencer petit, et ne jamais investir plus que ce qu\'on est prêt à perdre totalement.',
        keyPoints: [
          'Exchange = plateforme d\'achat/vente. Wallet = outil de stockage personnel.',
          '"Not your keys, not your coins" : vos cryptos sur un exchange ne sont pas vraiment les vôtres',
          'Toujours activer l\'authentification à 2 facteurs',
          'La seed phrase est sacrée : ne jamais la communiquer à personne',
          'Commencer avec de petites sommes et des cryptos établies (BTC, ETH)'
        ]
      }),
      quiz: [
        { q: 'Que signifie "Not your keys, not your coins" ?', opts: ['Tu dois garder toutes tes cryptos sur un exchange', 'Si tu ne contrôles pas les clés privées, tu ne contrôles pas vraiment tes cryptos', 'Il faut avoir plusieurs wallets pour chaque crypto', 'Les clés USB sont le seul moyen de stocker ses cryptos'], ans: 1, expl: 'Si tes cryptos sont sur un exchange, c\'est l\'exchange qui détient les clés privées. Si l\'exchange fait faillite ou est hacké, tu peux perdre tout.' },
        { q: 'Qu\'est-ce qu\'une "seed phrase" ?', opts: ['Un mot de passe de compte exchange', 'Une suite de 12 à 24 mots permettant de récupérer l\'accès à son wallet', 'Un code SMS de vérification', 'Un contrat d\'assurance crypto'], ans: 1, expl: 'La seed phrase (phrase de récupération) est une suite de mots générée à la création de ton wallet. Elle permet de récupérer l\'accès à tes cryptos si tu perds ton appareil. À ne jamais communiquer.' },
        { q: 'Que faire face à un message privé promettant de doubler tes cryptos ?', opts: ['Envoyer une petite somme pour tester', 'Ignorer et bloquer — c\'est une arnaque classique', 'Demander des garanties avant d\'envoyer', 'Vérifier si l\'offre est sur Reddit'], ans: 1, expl: 'Les arnaques "send 1 BTC get 2 BTC" sont parmi les plus répandues en crypto. Aucune offre légitime ne vous demande d\'envoyer de l\'argent pour en recevoir plus.' }
      ]
    }
  ],

  // ==================== INTERMÉDIAIRE ====================
  intermediaire: [
    {
      id: 'int-1',
      icon: '🔍',
      title: 'Analyse fondamentale',
      desc: 'Apprendre à évaluer la vraie valeur d\'une entreprise avant d\'investir.',
      duration: '14 min',
      content: buildLesson({
        bigQuestion: 'Comment savoir si une action est trop chère, trop bon marché, ou au juste prix ?',
        intro: 'L\'analyse fondamentale est la méthode utilisée par Warren Buffett, Peter Lynch et les plus grands investisseurs au monde. Elle consiste à étudier la santé réelle d\'une entreprise pour évaluer si son action est bien valorisée.',
        plan: ['1. Principe de l\'analyse fondamentale', '2. Les indicateurs clés : PER, PEG, EV/EBITDA', '3. Lire les comptes d\'une entreprise', '4. Comprendre le secteur et les avantages concurrentiels'],
        problematique: 'Comment distinguer une entreprise solide d\'une entreprise surévaluée par le marché ?',
        developpement: `
          <div class="lesson-section">
            <h4>Principe</h4>
            <h2>Valeur intrinsèque vs Prix de marché</h2>
            <p>L'analyse fondamentale repose sur une idée simple : le <strong>prix d'une action</strong> (ce que le marché paie) peut différer de sa <strong>valeur intrinsèque</strong> (ce qu'elle vaut vraiment). L'investisseur cherche des entreprises sous-évaluées.</p>
            <div class="highlight-box">
              💡 Warren Buffett : "Le prix est ce que tu paies. La valeur est ce que tu reçois." Une action à 10€ peut être chère si l'entreprise vaut 5€ — ou une bonne affaire si elle vaut 20€.
            </div>
          </div>
          <div class="lesson-section">
            <h4>Indicateurs</h4>
            <h2>Les ratios clés à connaître</h2>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Ratios de valorisation</div>
              <ul>
                <li><strong>PER (Price-Earning Ratio) :</strong> Prix / Bénéfice par action. Un PER de 15 = tu paies 15 ans de bénéfices. PER bas = potentiellement sous-évalué.</li>
                <li><strong>PBR (Price-to-Book) :</strong> Prix / Valeur comptable. Inférieur à 1 = l'action se vend moins que les actifs réels.</li>
                <li><strong>ROE (Return on Equity) :</strong> Rentabilité des capitaux propres. > 15% = très bonne gestion.</li>
                <li><strong>Dette / EBITDA :</strong> Niveau d'endettement relatif aux bénéfices opérationnels.</li>
              </ul>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Comptes</h4>
            <h2>Comprendre les 3 grands états financiers</h2>
            <ul>
              <li>📊 <strong>Compte de résultat :</strong> Ce que l'entreprise a gagné/perdu sur la période (chiffre d'affaires, charges, résultat net)</li>
              <li>🏦 <strong>Bilan :</strong> Ce que l'entreprise possède (actifs) et ce qu'elle doit (passifs). L'équilibre entre les deux.</li>
              <li>💰 <strong>Tableau des flux de trésorerie :</strong> Les vrais mouvements d'argent — car un bénéfice comptable peut masquer des problèmes de trésorerie.</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Avantage concurrentiel</h4>
            <h2>Le "moat" : le fossé défensif d'une entreprise</h2>
            <p>Warren Buffett cherche des entreprises avec un <strong>moat</strong> (fossé) : un avantage concurrentiel durable qui les protège de la concurrence.</p>
            <ul>
              <li>🏷️ <strong>Marque forte :</strong> Apple, Hermès, Coca-Cola — les gens paient plus cher juste pour la marque</li>
              <li>🔒 <strong>Effets de réseau :</strong> Facebook, Visa — plus c'est utilisé, plus c'est utile</li>
              <li>💰 <strong>Coûts de changement élevés :</strong> SAP, Oracle — les clients ne changent pas car c'est trop coûteux</li>
              <li>⚡ <strong>Avantage de coût :</strong> Amazon, Walmart — produire moins cher que la concurrence</li>
            </ul>
          </div>
        `,
        resume: 'L\'analyse fondamentale consiste à évaluer la valeur réelle d\'une entreprise via ses ratios (PER, ROE…), ses états financiers (résultat, bilan, trésorerie) et son avantage concurrentiel (moat). L\'objectif : trouver des entreprises sous-évaluées par le marché.',
        keyPoints: [
          'Prix ≠ Valeur : le marché peut se tromper, et c\'est là l\'opportunité',
          'PER = combien tu paies pour 1€ de bénéfice. Comparer au secteur et à l\'histoire.',
          'Les 3 états financiers : compte de résultat, bilan, flux de trésorerie',
          'Le "moat" = avantage concurrentiel durable (marque, réseau, coûts…)',
          'Toujours analyser dans le contexte du secteur d\'activité'
        ]
      }),
      quiz: [
        { q: 'Qu\'est-ce que le PER (Price-Earning Ratio) ?', opts: ['Le pourcentage de dividendes versés', 'Le ratio entre le prix de l\'action et le bénéfice par action', 'La dette divisée par le chiffre d\'affaires', 'La rentabilité des capitaux propres'], ans: 1, expl: 'Le PER = Prix / BPA (Bénéfice Par Action). Il indique combien tu paies pour chaque euro de bénéfice. Un PER de 20 = tu paies 20 fois les bénéfices annuels.' },
        { q: 'Qu\'est-ce qu\'un "moat" selon Warren Buffett ?', opts: ['Une analyse du bilan comptable', 'Un avantage concurrentiel durable protégeant l\'entreprise', 'Un ratio de valorisation boursière', 'Un type d\'obligation à long terme'], ans: 1, expl: 'Le "moat" (fossé) désigne l\'avantage concurrentiel durable d\'une entreprise — marque forte, effets de réseau, coûts de changement — qui la protège de la concurrence sur le long terme.' },
        { q: 'Lequel de ces états financiers montre les vrais mouvements d\'argent d\'une entreprise ?', opts: ['Le compte de résultat', 'Le rapport d\'audit', 'Le tableau des flux de trésorerie', 'Le rapport de gestion'], ans: 2, expl: 'Le tableau des flux de trésorerie montre les mouvements réels de cash. Une entreprise peut afficher un bénéfice comptable tout en ayant des problèmes de liquidités graves — le flux de trésorerie révèle la réalité.' }
      ]
    },
    {
      id: 'int-2',
      icon: '⚖️',
      title: 'Gestion du risque',
      desc: 'Les stratégies pour protéger son portefeuille sans sacrifier le rendement.',
      duration: '12 min',
      content: buildLesson({
        bigQuestion: 'Comment éviter de perdre une grosse partie de son capital lors d\'une crise des marchés ?',
        intro: 'La gestion du risque est ce qui distingue les investisseurs professionnels des amateurs. Un bon retour sur 3 ans peut être effacé en quelques semaines si le risque n\'est pas maîtrisé. Comprendre et gérer le risque est non-négociable.',
        plan: ['1. Définir le risque en finance', '2. Les types de risques', '3. Stratégies de protection', '4. Le ratio risque/rendement'],
        problematique: 'Comment construire un portefeuille résistant aux chocs sans renoncer à tous les gains potentiels ?',
        developpement: `
          <div class="lesson-section">
            <h4>Définition</h4>
            <h2>Le risque en finance : bien plus que la perte</h2>
            <p>En finance, le <strong>risque</strong> désigne l'<strong>incertitude</strong> des rendements. Il ne s'agit pas seulement de perdre — c'est aussi ne pas savoir ce que valera ton investissement demain.</p>
            <ul>
              <li>📊 <strong>Volatilité :</strong> Amplitude des variations de prix (écart-type). Plus c'est volatile, plus c'est risqué.</li>
              <li>📉 <strong>Drawdown :</strong> Perte maximale depuis un sommet. Un portefeuille crypto peut connaître -80% de drawdown.</li>
              <li>🌊 <strong>Risque de liquidité :</strong> Impossibilité de vendre rapidement sans impact sur le prix.</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Types de risques</h4>
            <h2>Risque systémique vs Risque spécifique</h2>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Les 2 grandes catégories</div>
              <ul>
                <li>🌐 <strong>Risque systémique (non-diversifiable) :</strong> Touche tous les marchés — crise financière 2008, COVID 2020. Impossible à éliminer par la diversification.</li>
                <li>🏢 <strong>Risque spécifique (diversifiable) :</strong> Propre à une entreprise ou un secteur. La diversification le réduit considérablement.</li>
              </ul>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Stratégies</h4>
            <h2>4 stratégies de gestion du risque</h2>
            <ul>
              <li><strong>1. Diversification :</strong> Répartir sur plusieurs actifs, secteurs, zones. Réduit le risque spécifique.</li>
              <li><strong>2. Position sizing :</strong> Ne jamais mettre plus de X% sur un seul actif (règle des 5% par actif max).</li>
              <li><strong>3. Stop-loss :</strong> Ordre automatique pour vendre si le prix descend sous un seuil défini. Limite les pertes.</li>
              <li><strong>4. Dollar-Cost Averaging (DCA) :</strong> Investir régulièrement une somme fixe. Réduit le risque d'un mauvais timing d'entrée.</li>
            </ul>
            <div class="highlight-box green">
              📌 Règle de base : ne jamais risquer plus de 1 à 2% de son capital total sur une seule trade/décision. Cette règle protège de la ruine même lors d'une longue série de pertes.
            </div>
          </div>
          <div class="lesson-section">
            <h4>Ratio risque/rendement</h4>
            <h2>Évaluer si le jeu en vaut la chandelle</h2>
            <p>Avant tout investissement, se poser la question : <em>quel est mon gain potentiel vs ma perte potentielle ?</em></p>
            <ul>
              <li>✅ <strong>Ratio favorable :</strong> Si je risque 100€, je vise 300€ de gain → ratio 1:3</li>
              <li>❌ <strong>Ratio défavorable :</strong> Si je risque 100€, je vise 50€ de gain → ratio 1:0.5 → à éviter</li>
            </ul>
          </div>
        `,
        resume: 'La gestion du risque passe par la diversification, le position sizing, les stop-loss et le DCA. Toujours évaluer le ratio risque/rendement avant d\'investir. Ne jamais risquer plus de 1-2% du capital sur une seule décision.',
        keyPoints: [
          'Le risque en finance = incertitude sur les rendements, pas seulement la perte',
          'Risque systémique (inévitable) vs Risque spécifique (réductible par diversification)',
          'Position sizing : max 5% du portefeuille sur un seul actif',
          'Stop-loss = filet de sécurité automatique contre les grosses pertes',
          'DCA = investissement régulier qui lisse le risque de timing'
        ]
      }),
      quiz: [
        { q: 'Quelle stratégie consiste à investir régulièrement une somme fixe, indépendamment du prix ?', opts: ['Stop-loss', 'Dollar-Cost Averaging (DCA)', 'Position sizing', 'Hedging'], ans: 1, expl: 'Le DCA (Dollar-Cost Averaging) consiste à investir une somme fixe à intervalles réguliers. Cette méthode lisse le prix d\'achat moyen et réduit le risque de mauvais timing.' },
        { q: 'Qu\'est-ce qu\'un risque systémique ?', opts: ['Un risque propre à une seule entreprise', 'Un risque lié à un secteur spécifique', 'Un risque qui touche l\'ensemble des marchés financiers', 'Un risque éliminable par la diversification'], ans: 2, expl: 'Le risque systémique touche tous les marchés en même temps (ex : crise financière 2008). Il ne peut pas être éliminé par la diversification, contrairement au risque spécifique.' },
        { q: 'Un investisseur risque 100€ pour viser 50€ de gain. Quel est le ratio risque/rendement ?', opts: ['1:2 — très favorable', '1:0.5 — défavorable, à éviter', '1:1 — neutre et acceptable', '2:1 — optimal'], ans: 1, expl: 'Un ratio 1:0.5 signifie qu\'on risque 2 fois plus qu\'on ne peut gagner. Un bon ratio est au minimum 1:1.5 ou mieux 1:2 et 1:3.' }
      ]
    },
    {
      id: 'int-3',
      icon: 'Ξ',
      title: 'Ethereum & la DeFi',
      desc: 'Le deuxième actif crypto et l\'écosystème de finance décentralisée.',
      duration: '13 min',
      content: buildLesson({
        bigQuestion: 'Et si on pouvait emprunter, prêter ou gagner des intérêts sans banque, de façon automatique et mondiale ?',
        intro: 'Ethereum n\'est pas juste une crypto-monnaie — c\'est une plateforme de calcul décentralisée. Elle a rendu possible la DeFi (Finance Décentralisée), une révolution qui remet en question le rôle des banques.',
        plan: ['1. Ethereum et les smart contracts', '2. La DeFi : finance sans intermédiaire', '3. Les applications DeFi principales', '4. Risques et enjeux'],
        problematique: 'La DeFi peut-elle vraiment remplacer les services bancaires traditionnels, et à quel risque ?',
        developpement: `
          <div class="lesson-section">
            <h4>Ethereum</h4>
            <h2>Ethereum : la plateforme mondiale de contrats intelligents</h2>
            <p>Créé par <strong>Vitalik Buterin</strong> en 2015, Ethereum (ETH) est bien plus qu'une monnaie. C'est une <strong>plateforme de calcul décentralisée</strong> permettant d'exécuter des <strong>smart contracts</strong>.</p>
            <div class="highlight-box">
              🤖 Un smart contract = un contrat automatique. Le code s'exécute tout seul quand les conditions sont remplies. Pas de notaire, pas d'avocat, pas d'intermédiaire. Ex : "Si tu me paies X ETH, je te transfère automatiquement ce token."
            </div>
          </div>
          <div class="lesson-section">
            <h4>DeFi</h4>
            <h2>La Finance Décentralisée (DeFi)</h2>
            <p>La <strong>DeFi</strong> regroupe des applications financières construites sur des blockchains (principalement Ethereum) qui fonctionnent sans entreprise centrale.</p>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Services DeFi vs Banque traditionnelle</div>
              <ul>
                <li>🏦 <strong>Prêt/Emprunt :</strong> Aave, Compound — déposer des cryptos comme collatéral et emprunter</li>
                <li>🔄 <strong>Échange :</strong> Uniswap — échanger des tokens sans exchange centralisé</li>
                <li>💰 <strong>Yield farming :</strong> Fournir de la liquidité et recevoir des récompenses</li>
                <li>📊 <strong>Staking :</strong> Verrouiller des ETH pour sécuriser le réseau et recevoir des intérêts</li>
              </ul>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Risques DeFi</h4>
            <h2>Les risques spécifiques à connaître absolument</h2>
            <ul>
              <li>🐛 <strong>Bug de smart contract :</strong> Un code mal écrit peut être exploité. Des centaines de millions ont été perdus ainsi.</li>
              <li>📉 <strong>Liquidation :</strong> Si ton collatéral chute, tu peux être liquidé automatiquement.</li>
              <li>🦹 <strong>Rug pull :</strong> Des projets frauduleux abandonnent et partent avec les fonds.</li>
              <li>⛽ <strong>Frais de gas :</strong> Les frais de transaction Ethereum peuvent être très élevés en période de congestion.</li>
            </ul>
          </div>
        `,
        resume: 'Ethereum est une plateforme de smart contracts qui rend possible la DeFi. La finance décentralisée propose des services financiers (prêt, échange, épargne) sans intermédiaire. Les risques incluent les bugs de code, les liquidations forcées et les fraudes.',
        keyPoints: [
          'Ethereum = plateforme de smart contracts, pas seulement une monnaie',
          'Smart contract = contrat automatique qui s\'exécute sans intermédiaire',
          'DeFi = services financiers décentralisés (prêt, échange, épargne)',
          'Principaux protocoles : Uniswap (échange), Aave (prêt), Lido (staking)',
          'Risques DeFi : bugs de code, liquidation, rug pull, frais élevés'
        ]
      }),
      quiz: [
        { q: 'Qu\'est-ce qu\'un smart contract ?', opts: ['Un contrat signé numériquement par une banque', 'Un programme qui s\'exécute automatiquement sur la blockchain quand des conditions sont remplies', 'Un accord entre deux exchanges crypto', 'Un type d\'ETF crypto'], ans: 1, expl: 'Un smart contract est du code qui s\'exécute automatiquement sur la blockchain sans intermédiaire. Il est transparent, immuable et ne peut pas être censuré ou modifié.' },
        { q: 'Que permet la DeFi que les banques traditionnelles ne permettent pas ?', opts: ['Des taux d\'intérêt garantis par l\'État', 'Des services financiers accessibles mondialement sans intermédiaire ni permission', 'Des assurances sur les dépôts', 'Des conseils financiers personnalisés'], ans: 1, expl: 'La DeFi permet d\'accéder à des services financiers (prêt, emprunt, épargne) à n\'importe qui dans le monde, sans compte bancaire ni validation d\'une institution.' },
        { q: 'Qu\'est-ce qu\'un "rug pull" en DeFi ?', opts: ['Une liquidation forcée lors d\'une chute de prix', 'Une fraude où les créateurs abandonnent le projet avec les fonds des utilisateurs', 'Un bug de smart contract exploité par un hacker', 'Une forte hausse soudaine suivie d\'une correction'], ans: 1, expl: 'Un rug pull est une arnaque : les créateurs d\'un projet DeFi (ou NFT) lancent un token, attirent les investisseurs, puis "tirent le tapis" en vendant tous leurs tokens et disparaissant avec l\'argent.' }
      ]
    },
    {
      id: 'int-4',
      icon: '🔵',
      title: 'Stablecoins : l\'ancre du monde crypto',
      desc: 'Comprendre les monnaies stables, leur utilité et leurs risques cachés.',
      duration: '11 min',
      content: buildLesson({
        bigQuestion: 'Comment avoir le meilleur des deux mondes : la liberté de la crypto et la stabilité du dollar ?',
        intro: 'Les stablecoins sont la catégorie de crypto la plus utilisée dans le monde et pourtant la moins comprise. Ils sont au cœur de la DeFi, des échanges internationaux, et suscitent des questions réglementaires majeures.',
        plan: ['1. Définition et fonctionnement', '2. Les 3 types de stablecoins', '3. Pourquoi les utiliser ?', '4. Risques et controverses'],
        problematique: 'Un stablecoin peut-il vraiment rester stable en toutes circonstances ?',
        developpement: `
          <div class="lesson-section">
            <h4>Définition</h4>
            <h2>Un stablecoin : une crypto "stable"</h2>
            <p>Un <strong>stablecoin</strong> est une crypto-monnaie dont la valeur est ancrée (<em>pegged</em>) à un actif stable, généralement le dollar américain (1 stablecoin = 1 $).</p>
            <p>Les plus connus : <strong>USDT (Tether)</strong>, <strong>USDC (Circle)</strong>, <strong>DAI (MakerDAO)</strong>.</p>
          </div>
          <div class="lesson-section">
            <h4>Types</h4>
            <h2>3 types de stablecoins</h2>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Mécanismes de stabilisation</div>
              <ul>
                <li>🏦 <strong>Centralisés (collatéral fiat) :</strong> USDT, USDC — 1 token = 1 $ en réserve dans une banque. Simple mais centralisé.</li>
                <li>🔐 <strong>Décentralisés (collatéral crypto) :</strong> DAI — sur-collatéralisé en ETH via smart contracts. Décentralisé mais complexe.</li>
                <li>⚙️ <strong>Algorithmiques :</strong> Maintien du peg via des algorithmes et tokens de gouvernance. Risqué — UST/Luna s'est effondré en 2022 (-99% en 72h).</li>
              </ul>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Utilité</h4>
            <h2>Pourquoi utiliser des stablecoins ?</h2>
            <ul>
              <li>💱 <strong>Trading :</strong> Sortir d'une position volatile sans convertir en euros (frais, délais bancaires)</li>
              <li>🌍 <strong>Transferts internationaux :</strong> Envoyer de l'argent en quelques secondes et pour quelques centimes</li>
              <li>💰 <strong>Rendement DeFi :</strong> Prêter ses stablecoins pour obtenir 3-8% d'intérêt annuel</li>
              <li>🛡️ <strong>Protection contre l\'inflation locale :</strong> Dans des pays à forte inflation, les stablecoins $ sont un refuge</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Risques</h4>
            <h2>Les risques que beaucoup ignorent</h2>
            <ul>
              <li>🏦 <strong>Risque de contrepartie (centralisés) :</strong> Si Circle ou Tether fait faillite, les réserves peuvent être insuffisantes</li>
              <li>⚠️ <strong>Dépeg :</strong> USDC a temporairement perdu son peg en mars 2023 (0,87$) lors de la faillite de SVB</li>
              <li>🔥 <strong>Risque algorithmique :</strong> L'effondrement d'UST/Luna en mai 2022 a détruit ~50 milliards $</li>
              <li>⚖️ <strong>Réglementaire :</strong> Les régulateurs du monde entier scrutent les stablecoins de près</li>
            </ul>
          </div>
        `,
        resume: 'Les stablecoins sont des cryptos à valeur stable (souvent = 1 $). Il en existe 3 types : centralisés (USDT, USDC), décentralisés (DAI), et algorithmiques (très risqués). Utiles pour le trading, les transferts et la DeFi, mais exposés à des risques de contrepartie et de dépeg.',
        keyPoints: [
          'Stablecoin = crypto dont la valeur est ancrée à un actif stable (souvent le $)',
          '3 types : centralisés, décentralisés (collatéral crypto), algorithmiques',
          'Les algorithmiques sont extrêmement risqués (UST/Luna = -99% en 72h en 2022)',
          'Utiles pour trader, transférer des fonds, et obtenir des rendements DeFi',
          'Même un "stable"coin comporte des risques : dépeg, faillite de l\'émetteur'
        ]
      }),
      quiz: [
        { q: 'Qu\'est-ce qu\'un stablecoin ?', opts: ['Une crypto très peu volatile car peu échangée', 'Une crypto-monnaie dont la valeur est ancrée à un actif stable comme le dollar', 'Un ETF crypto réglementé', 'Un Bitcoin qui ne se mine plus'], ans: 1, expl: 'Un stablecoin est une crypto conçue pour maintenir une valeur stable — généralement 1 pour 1 avec le dollar américain — grâce à différents mécanismes de collatéralisation.' },
        { q: 'Quel type de stablecoin est le plus risqué ?', opts: ['Centralisé (USDT, USDC)', 'Décentralisé sur-collatéralisé (DAI)', 'Algorithmique (comme l\'UST)', 'Tous sont également risqués'], ans: 2, expl: 'Les stablecoins algorithmiques maintiennent leur peg via des mécanismes de code et de tokens — sans vraie réserve. L\'UST/Luna a perdu 99% en 72h en mai 2022, illustrant leur fragilité.' },
        { q: 'Pourquoi les stablecoins sont-ils utiles en DeFi ?', opts: ['Ils permettent des gains illimités sans risque', 'Ils permettent de fournir de la liquidité et d\'obtenir des rendements sans s\'exposer à la volatilité', 'Ils remplacent les actions dans les portefeuilles', 'Ils sont garantis par les gouvernements'], ans: 1, expl: 'Les stablecoins permettent de participer à la DeFi (prêt, liquidité) et d\'obtenir des rendements tout en évitant la volatilité de BTC ou ETH.' }
      ]
    },
    {
      id: 'int-5',
      icon: '🏗️',
      title: 'Construire son portefeuille',
      desc: 'Méthodologie pour construire un portefeuille cohérent adapté à son profil.',
      duration: '13 min',
      content: buildLesson({
        bigQuestion: 'Comment assembler des actifs financiers de façon cohérente pour atteindre ses objectifs personnels ?',
        intro: 'Un portefeuille bien construit n\'est pas une liste aléatoire d\'investissements. C\'est une architecture pensée en fonction de ton horizon de temps, de ta tolérance au risque, et de tes objectifs financiers.',
        plan: ['1. Définir son profil d\'investisseur', '2. L\'allocation d\'actifs stratégique', '3. Le rééquilibrage', '4. Exemples de portefeuilles types'],
        problematique: 'Comment allouer son capital entre différentes classes d\'actifs pour optimiser le couple rendement/risque ?',
        developpement: `
          <div class="lesson-section">
            <h4>Profil</h4>
            <h2>Ton profil d'investisseur en 3 questions</h2>
            <ul>
              <li>⏰ <strong>Horizon temporel :</strong> Dans combien d'années as-tu besoin de cet argent ? (< 2 ans = court terme, > 10 ans = long terme)</li>
              <li>😰 <strong>Tolérance au risque :</strong> Si ton portefeuille perd 30% demain, quelle est ta réaction ? (Panique = profil prudent)</li>
              <li>🎯 <strong>Objectif :</strong> Retraite ? Achat immobilier ? Liberté financière ? L'objectif détermine la stratégie.</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Allocation</h4>
            <h2>Allocation d'actifs : la décision la plus importante</h2>
            <p>Des études montrent que <strong>90%</strong> de la performance d'un portefeuille long terme vient de l'<strong>allocation d'actifs</strong> (quelle proportion en actions, obligations, etc.) — pas du choix des titres individuels.</p>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Exemples d'allocations selon profil</div>
              <ul>
                <li>🛡️ <strong>Prudent :</strong> 30% actions / 60% obligations / 10% liquidités</li>
                <li>⚖️ <strong>Équilibré :</strong> 60% actions / 30% obligations / 10% alternatif</li>
                <li>🚀 <strong>Dynamique :</strong> 80% actions / 10% obligations / 10% crypto</li>
                <li>⚡ <strong>Très agressif :</strong> 90% actions / 10% crypto</li>
              </ul>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Rééquilibrage</h4>
            <h2>Le rééquilibrage : maintenir son allocation cible</h2>
            <p>Avec le temps, les actifs performent différemment et ton allocation s'écarte de la cible. Le <strong>rééquilibrage</strong> consiste à vendre ce qui a trop monté et acheter ce qui a baissé pour revenir à l'équilibre initial.</p>
            <div class="highlight-box green">
              📅 Fréquence recommandée : une fois par an ou quand un actif s'écarte de plus de 5-10% de sa cible. Éviter de rééquilibrer trop souvent (frais + impôts).
            </div>
          </div>
        `,
        resume: 'Construire un portefeuille nécessite de définir son profil (horizon, risque, objectif), puis d\'allouer stratégiquement entre classes d\'actifs. L\'allocation (pas le choix des titres) détermine 90% de la performance long terme. Le rééquilibrage annuel maintient le risque ciblé.',
        keyPoints: [
          'L\'allocation d\'actifs détermine 90% de la performance long terme',
          '3 critères de profil : horizon temporel, tolérance au risque, objectif',
          'Profil prudent → plus d\'obligations. Dynamique → plus d\'actions.',
          'Le rééquilibrage annuel ramène le portefeuille à son allocation cible',
          'La régularité des versements (DCA) prime souvent sur le timing'
        ]
      }),
      quiz: [
        { q: 'Selon les études, quel facteur détermine 90% de la performance d\'un portefeuille ?', opts: ['Le choix des actions individuelles', 'L\'allocation d\'actifs (répartition entre classes d\'actifs)', 'Le timing d\'entrée sur le marché', 'Les frais de gestion'], ans: 1, expl: 'Des recherches (Brinson, Hood, Beebower, 1986) montrent que ~90% de la performance vient de l\'allocation d\'actifs stratégique, non du stock picking ou du market timing.' },
        { q: 'Qu\'est-ce que le rééquilibrage d\'un portefeuille ?', opts: ['Vendre tout et recommencer', 'Ajouter uniquement de nouvelles positions', 'Ajuster l\'allocation pour revenir aux proportions cibles', 'Changer de courtier chaque année'], ans: 2, expl: 'Le rééquilibrage consiste à revendre les actifs sur-pondérés (qui ont trop monté) et racheter les sous-pondérés pour revenir à l\'allocation stratégique initiale.' },
        { q: 'Pour un investisseur avec un horizon long terme (20 ans) et une bonne tolérance au risque, quelle allocation est la plus adaptée ?', opts: ['80% obligations / 20% actions', '100% livret A', '80% actions / 10% obligations / 10% crypto', '50% or / 50% liquidités'], ans: 2, expl: 'Sur un horizon long terme, les actions ont historiquement offert les meilleurs rendements. Une forte pondération en actions (avec une part alternative) est appropriée pour un profil dynamique sur 20 ans.' }
      ]
    }
  ],

  // ==================== PROFESSIONNEL ====================
  professionnel: [
    {
      id: 'pro-1',
      icon: '📊',
      title: 'Analyse technique avancée',
      desc: 'Lire les graphiques et identifier les patterns pour anticiper les mouvements.',
      duration: '16 min',
      content: buildLesson({
        bigQuestion: 'L\'histoire des prix peut-elle vraiment prédire l\'avenir — et si oui, jusqu\'où peut-on aller ?',
        intro: 'L\'analyse technique (AT) est l\'étude des graphiques de prix et des volumes pour anticiper les mouvements futurs. Utilisée par des millions de traders, elle est à la fois un art et une discipline rigoureuse.',
        plan: ['1. Fondements théoriques de l\'AT', '2. Supports, résistances et tendances', '3. Indicateurs techniques clés', '4. Patterns graphiques classiques'],
        problematique: 'Comment utiliser l\'analyse technique sans tomber dans le biais de confirmation ?',
        developpement: `
          <div class="lesson-section">
            <h4>Théorie</h4>
            <h2>Les 3 postulats de l'analyse technique</h2>
            <ul>
              <li>📉 <strong>Le prix intègre tout :</strong> Toute information connue (résultats, news, sentiment) est déjà reflétée dans le prix.</li>
              <li>🔄 <strong>Les prix évoluent en tendances :</strong> Une tendance en cours a plus de chances de continuer que de se retourner.</li>
              <li>📜 <strong>L'histoire se répète :</strong> Les patterns comportementaux humains sont récurrents et créent des configurations graphiques similaires.</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Niveaux clés</h4>
            <h2>Supports, Résistances et Tendances</h2>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Concepts fondamentaux</div>
              <ul>
                <li>🟢 <strong>Support :</strong> Niveau de prix où la demande est suffisamment forte pour stopper une baisse. Zone d'achat potentiel.</li>
                <li>🔴 <strong>Résistance :</strong> Niveau de prix où l'offre est suffisamment forte pour stopper une hausse. Zone de vente potentielle.</li>
                <li>📈 <strong>Tendance haussière (uptrend) :</strong> Série de plus hauts et plus bas ascendants.</li>
                <li>📉 <strong>Tendance baissière (downtrend) :</strong> Série de plus hauts et plus bas descendants.</li>
                <li>↔️ <strong>Range :</strong> Prix oscillant entre un support et une résistance sans tendance claire.</li>
              </ul>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Indicateurs</h4>
            <h2>Les indicateurs techniques incontournables</h2>
            <ul>
              <li><strong>RSI (Relative Strength Index) :</strong> Oscille entre 0 et 100. > 70 = suracheté (attention vente). < 30 = survendu (attention achat). Divergences = signal fort.</li>
              <li><strong>MACD :</strong> Différence entre 2 moyennes mobiles exponentielles. Croisements = signaux d'entrée/sortie.</li>
              <li><strong>Moyennes mobiles (MA/EMA) :</strong> Lissent le prix. Croisement MA50/MA200 = "Golden Cross" (haussier) ou "Death Cross" (baissier).</li>
              <li><strong>Bollinger Bands :</strong> Bandes autour d'une MM. Quand le prix touche la bande extérieure = signal de retournement potentiel.</li>
              <li><strong>Volume :</strong> Confirme ou infirme les mouvements de prix. Une hausse sur fort volume = signal fiable.</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Patterns</h4>
            <h2>Les patterns graphiques classiques</h2>
            <ul>
              <li>🔺 <strong>Tête et épaules :</strong> Pattern de retournement baissier. 3 sommets, le central plus haut. Cassure de la neckline = confirmation.</li>
              <li>📦 <strong>Triangle ascendant :</strong> Résistance horizontale + supports ascendants. Breakout haussier attendu.</li>
              <li>🚩 <strong>Flag (drapeau) :</strong> Consolidation après une forte impulsion. Continuation de tendance probable.</li>
              <li>⬆️ <strong>Double bottom (W) :</strong> 2 creux au même niveau = retournement haussier potentiel.</li>
            </ul>
            <div class="highlight-box">
              ⚠️ Rappel crucial : aucun indicateur n'est infaillible. L'AT se combine toujours avec une bonne gestion du risque et n'est jamais une certitude — c'est un outil probabiliste.
            </div>
          </div>
        `,
        resume: 'L\'AT repose sur 3 postulats : le prix intègre tout, les tendances persistent, l\'histoire se répète. Les outils clés : supports/résistances, RSI, MACD, moyennes mobiles, volume. Les patterns graphiques (tête-épaules, triangles…) donnent des probabilités, pas des certitudes.',
        keyPoints: [
          'AT = étude des prix et volumes pour anticiper les mouvements probabilistes',
          'Supports et résistances = niveaux clés où le prix réagit historiquement',
          'RSI > 70 = suracheté. RSI < 30 = survendu. Les divergences sont les signaux les plus forts.',
          'Volume = confirmateur : un mouvement sur fort volume est plus fiable',
          'L\'AT est probabiliste, jamais certaine — toujours combiner avec la gestion du risque'
        ]
      }),
      quiz: [
        { q: 'Que signifie un RSI supérieur à 70 ?', opts: ['L\'actif est survendu et représente une opportunité d\'achat', 'L\'actif est suracheté — signal de prudence ou de vente possible', 'La tendance est fortement haussière et doit se poursuivre', 'Le volume est trop faible pour confirmer la tendance'], ans: 1, expl: 'Un RSI > 70 indique que l\'actif est en zone de surachat — le prix a monté trop vite. Cela signale un risque de correction, mais ne garantit pas une chute immédiate.' },
        { q: 'Qu\'est-ce qu\'un "Golden Cross" ?', opts: ['Un pattern de retournement baissier', 'Le croisement de la MA50 au-dessus de la MA200 — signal haussier', 'Un indicateur de volume exceptionnel', 'Un pattern à 3 sommets successifs'], ans: 1, expl: 'Le Golden Cross se produit quand la moyenne mobile 50 jours croise au-dessus de la moyenne mobile 200 jours. C\'est un signal haussier long terme suivi par de nombreux traders institutionnels.' },
        { q: 'Pourquoi le volume est-il important en analyse technique ?', opts: ['Il détermine le prix de clôture', 'Il confirme ou infirme la validité d\'un mouvement de prix', 'Il prédit exactement le prochain mouvement', 'Il mesure la capitalisation boursière'], ans: 1, expl: 'Le volume confirme la conviction derrière un mouvement de prix. Une cassure (breakout) sur fort volume est bien plus fiable qu\'une cassure sur volume faible, qui peut être un faux signal.' }
      ]
    },
    {
      id: 'pro-2',
      icon: '🧠',
      title: 'Psychologie de l\'investisseur',
      desc: 'Comprendre les biais cognitifs qui détruisent les portefeuilles.',
      duration: '14 min',
      content: buildLesson({
        bigQuestion: 'Pourquoi des personnes intelligentes prennent-elles systématiquement de mauvaises décisions financières ?',
        intro: 'La finance comportementale — discipline fondée par Daniel Kahneman, Prix Nobel d\'économie — démontre que nos décisions financières sont souvent irrationnelles. Comprendre nos biais, c\'est se donner les moyens de mieux investir.',
        plan: ['1. Le marché et la psychologie collective', '2. Les biais cognitifs principaux', '3. Les émotions : peur et cupidité', '4. Stratégies pour investir rationnellement'],
        problematique: 'Comment rester rationnel dans un marché conçu pour jouer sur nos émotions ?',
        developpement: `
          <div class="lesson-section">
            <h4>Finance comportementale</h4>
            <h2>Nous sommes tous irrationnels — parfois</h2>
            <p>La théorie classique suppose des investisseurs rationnels. La réalité est toute autre. <strong>Daniel Kahneman</strong> (Prix Nobel) démontre que nos cerveaux utilisent des raccourcis (heuristiques) qui nous induisent régulièrement en erreur en finance.</p>
            <div class="highlight-box">
              📖 "Père Riche, Père Pauvre" de Robert Kiyosaki souligne aussi ce point : la plupart des gens réagissent à la peur et à la cupidité plutôt qu'à la raison. C'est pourquoi l'éducation financière est essentielle.
            </div>
          </div>
          <div class="lesson-section">
            <h4>Biais cognitifs</h4>
            <h2>Les 6 biais qui détruisent les portefeuilles</h2>
            <ul>
              <li>🔍 <strong>Biais de confirmation :</strong> On cherche les informations qui confirment ce qu'on croit déjà. On ignore les signaux contraires.</li>
              <li>😰 <strong>Aversion à la perte :</strong> On souffre 2x plus d'une perte que d'un gain équivalent (Kahneman). On garde trop longtemps les positions perdantes.</li>
              <li>🐑 <strong>Effet de troupeau (FOMO) :</strong> On achète parce que "tout le monde achète". On vend en panique quand "tout le monde vend".</li>
              <li>⚓ <strong>Biais d'ancrage :</strong> On reste attaché au prix d'achat. "Je vends quand ça revient à mon prix" — même si la situation a changé.</li>
              <li>🎲 <strong>Excès de confiance :</strong> On surévalue ses propres compétences. Les hommes sont statistiquement plus touchés que les femmes.</li>
              <li>📅 <strong>Biais de récence :</strong> On extrapole les tendances récentes. "Ça a monté 6 mois → ça va continuer".</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Émotions</h4>
            <h2>Le cycle émotionnel de l'investisseur</h2>
            <div class="visual-card gold-border">
              <div class="visual-card-title">Le cycle émotionnel du marché</div>
              <p>Euphorie → Anxiété → Négation → Panique (point de vente maximum) → Dépression → Espoir → Confiance → Euphorie...</p>
              <div class="highlight-box gold">
                💡 Warren Buffett : "Soyez avide quand les autres ont peur, et ayez peur quand les autres sont avides." L'investisseur rationnel fait l'inverse de la foule.
              </div>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Solutions</h4>
            <h2>4 stratégies pour investir rationnellement</h2>
            <ul>
              <li>📝 <strong>Journal de trading :</strong> Documenter chaque décision et ses raisons. Permet d'identifier ses propres patterns d'erreur.</li>
              <li>🤖 <strong>Automatiser :</strong> DCA automatique, seuils de rééquilibrage prédéfinis. Enlève l'émotion de l'équation.</li>
              <li>⏰ <strong>Délai de réflexion :</strong> Règle des 24h pour toute décision importante. L'urgence perçue est souvent un piège.</li>
              <li>🎯 <strong>Plan écrit :</strong> Avoir une stratégie écrite avant d'investir. S'y tenir même sous pression émotionnelle.</li>
            </ul>
          </div>
        `,
        resume: 'La finance comportementale révèle que nos décisions financières sont biaisées par nos émotions et heuristiques. Les biais principaux : confirmation, aversion à la perte, FOMO, ancrage, excès de confiance, récence. Les antidotes : journal, automatisation, plan écrit, délais de réflexion.',
        keyPoints: [
          'On souffre 2x plus d\'une perte que d\'un gain équivalent (Kahneman) → on garde trop les perdants',
          'Le FOMO (Fear Of Missing Out) pousse à acheter au plus haut',
          'Le biais d\'ancrage nous fait attendre "de revenir à son prix" même si la situation a changé',
          'L\'excès de confiance augmente le risque pris — les études montrent que moins on trade, mieux on fait',
          'Antidote : plan écrit préalable, automatisation, délai de 24h avant décision importante'
        ]
      }),
      quiz: [
        { q: 'Qu\'est-ce que "l\'aversion à la perte" en finance comportementale ?', opts: ['La tendance à toujours éviter tout investissement risqué', 'Le fait de souffrir deux fois plus d\'une perte que d\'un gain équivalent, menant à garder trop longtemps ses positions perdantes', 'Le refus de réaliser des gains pour ne pas payer d\'impôts', 'La peur de perdre son broker ou courtier'], ans: 1, expl: 'Daniel Kahneman a démontré que les humains souffrent ~2x plus d\'une perte que d\'un gain de même amplitude. Cela conduit à garder les positions perdantes trop longtemps (espoir de retrouver le prix d\'achat).' },
        { q: 'Qu\'est-ce que le biais d\'ancrage ?', opts: ['S\'appuyer trop sur une information initiale (ex : le prix d\'achat) pour toutes les décisions suivantes', 'La tendance à acheter en période de panique', 'Se concentrer uniquement sur les performances récentes', 'Copier les décisions des grands investisseurs'], ans: 0, expl: 'Le biais d\'ancrage = rester "ancré" à une référence initiale (souvent le prix d\'achat). "Je vends quand ça revient à 50€" — même si l\'entreprise a fondamentalement changé.' },
        { q: 'Selon Warren Buffett, quel est le bon moment pour être "avide" en bourse ?', opts: ['Quand les marchés sont à leur sommet historique', 'Quand les autres investisseurs sont avides', 'Quand les autres ont peur et que les marchés chutent', 'Pendant les périodes d\'euphorie générale'], ans: 2, expl: '"Soyez avide quand les autres ont peur, et ayez peur quand les autres sont avides." Les meilleures opportunités d\'achat se présentent en période de panique, quand personne ne veut acheter.' }
      ]
    },
    {
      id: 'pro-3',
      icon: '🔐',
      title: 'Sécurité avancée en crypto',
      desc: 'Protéger ses actifs numériques comme un expert avec les meilleures pratiques.',
      duration: '13 min',
      content: buildLesson({
        bigQuestion: 'Dans un monde où des milliards de dollars de cryptos sont volés chaque année, comment être vraiment en sécurité ?',
        intro: 'La crypto est un espace où "être sa propre banque" signifie aussi être son propre service de sécurité. Les erreurs peuvent être irréversibles. Voici les pratiques des experts.',
        plan: ['1. La hiérarchie de la sécurité crypto', '2. Hardware wallets et seed phrases', '3. Les vecteurs d\'attaque principaux', '4. Protocoles de sécurité avancés'],
        problematique: 'Comment gérer la responsabilité totale de la sécurité de ses actifs numériques sans infrastructure bancaire ?',
        developpement: `
          <div class="lesson-section">
            <h4>Hiérarchie</h4>
            <h2>La pyramide de sécurité crypto</h2>
            <ul>
              <li>🥇 <strong>Niveau 1 — Cold storage :</strong> Hardware wallet (Ledger, Trezor) déconnecté. Optimal pour les grandes sommes.</li>
              <li>🥈 <strong>Niveau 2 — Hot wallet sécurisé :</strong> Wallet logiciel sur appareil dédié, non connecté aux exchanges. Pour les sommes moyennes.</li>
              <li>🥉 <strong>Niveau 3 — Exchange réputé :</strong> Binance, Coinbase avec 2FA matériel (YubiKey). Pour les sommes courantes.</li>
              <li>❌ <strong>À éviter :</strong> Exchange non régulé, DeFi sans audit, "investissement" via DMs.</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Seed phrase</h4>
            <h2>La seed phrase : l'actif le plus précieux</h2>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Règles absolues de la seed phrase</div>
              <ul>
                <li>✅ Écrire sur papier (ou métal gravé), jamais en numérique</li>
                <li>✅ Stocker en lieu sûr physique (coffre, emplacement secret)</li>
                <li>✅ Créer des copies dans 2-3 lieux différents (risque incendie/vol)</li>
                <li>❌ Jamais photographier ou envoyer par message</li>
                <li>❌ Jamais la taper sur un ordinateur connecté à internet</li>
                <li>❌ Jamais la communiquer à qui que ce soit — JAMAIS</li>
              </ul>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Attaques</h4>
            <h2>Les 5 vecteurs d'attaque les plus courants</h2>
            <ul>
              <li>🎣 <strong>Phishing :</strong> Faux sites qui imitent des exchanges ou wallets. Toujours vérifier l'URL exacte.</li>
              <li>📲 <strong>SIM Swapping :</strong> Hacker qui prend le contrôle de ton numéro de téléphone pour bypasser le 2FA SMS. Utiliser un authentificateur (Google Auth, Authy) plutôt que SMS.</li>
              <li>🦠 <strong>Malware clipboard :</strong> Virus qui remplace l'adresse crypto que tu copies par celle du hacker. Toujours vérifier les 4 premiers et 4 derniers caractères.</li>
              <li>💬 <strong>Social engineering :</strong> Manipulation psychologique via DMs, "support" fake, fausses opportunités.</li>
              <li>📦 <strong>Supply chain attack :</strong> Hardware wallet modifié avant livraison. Toujours acheter sur le site officiel du fabricant.</li>
            </ul>
          </div>
        `,
        resume: 'La sécurité crypto est une responsabilité totale. Utiliser un hardware wallet pour les grandes sommes, un authentificateur plutôt que SMS, et stocker la seed phrase hors ligne en plusieurs copies. Les 5 attaques principales : phishing, SIM swapping, malware, social engineering, supply chain.',
        keyPoints: [
          'Hardware wallet (Ledger/Trezor) = meilleure option pour les grandes sommes',
          'Seed phrase = JAMAIS numérique. Papier/métal, 2-3 copies dans des lieux différents.',
          '2FA : utiliser un authentificateur (Google Auth, Authy), pas le SMS',
          'Toujours vérifier l\'URL exacte des exchanges — les faux sites sont parfaits',
          'Vérifier les 4 premiers et derniers caractères de toute adresse crypto avant envoi'
        ]
      }),
      quiz: [
        { q: 'Pourquoi le 2FA par SMS est-il moins sécurisé que par application ?', opts: ['Le SMS consomme trop de batterie', 'Le SIM swapping permet à un hacker de prendre le contrôle de ton numéro et d\'intercepter les SMS', 'Les SMS ont une limite de caractères', 'Les opérateurs téléphoniques facturent le 2FA SMS'], ans: 1, expl: 'Le SIM swapping permet à un attaquant de convaincre ton opérateur téléphonique de transférer ton numéro sur une nouvelle carte SIM. Il reçoit alors tous tes SMS, y compris les codes 2FA.' },
        { q: 'Où acheter un hardware wallet en toute sécurité ?', opts: ['Amazon ou eBay pour les meilleures offres', 'Directement sur le site officiel du fabricant uniquement', 'N\'importe quelle boutique informatique', 'Via un vendeur recommandé sur Reddit'], ans: 1, expl: 'Les hardware wallets achetés sur des marchés tiers (Amazon, eBay, boutiques non officielles) peuvent avoir été manipulés avant livraison (supply chain attack). Toujours commander sur le site officiel.' },
        { q: 'Qu\'est-ce qu\'un malware "clipboard" en crypto ?', opts: ['Un virus qui vole ta seed phrase', 'Un malware qui remplace les adresses crypto que tu copies par des adresses appartenant au hacker', 'Un logiciel de phishing qui crée de faux sites', 'Un ransomware qui chiffre tes fichiers'], ans: 1, expl: 'Le malware clipboard surveille le presse-papier de ton ordinateur. Quand il détecte une adresse crypto, il la remplace par l\'adresse du hacker. Solution : toujours vérifier manuellement le début et la fin de l\'adresse.' }
      ]
    },
    {
      id: 'pro-4',
      icon: '⏳',
      title: 'Stratégies d\'investissement long terme',
      desc: 'Les approches des meilleurs investisseurs pour construire de la richesse dans le temps.',
      duration: '15 min',
      content: buildLesson({
        bigQuestion: 'Comment les millionnaires construisent-ils leur richesse en bourse — et pourquoi la plupart des gens font l\'inverse de ce qu\'il faudrait ?',
        intro: 'L\'investissement long terme est probablement la stratégie la plus prouvée et pourtant la moins pratiquée. Elle requiert patience, discipline, et la compréhension de concepts fondamentaux comme les intérêts composés.',
        plan: ['1. Le pouvoir des intérêts composés', '2. Les stratégies long terme éprouvées', '3. Buy and Hold vs Active Trading', '4. Le rôle de la patience'],
        problematique: 'Comment construire méthodiquement de la richesse sur des décennies face à l\'impatience et aux perturbations du marché ?',
        developpement: `
          <div class="lesson-section">
            <h4>Intérêts composés</h4>
            <h2>La 8ème merveille du monde (selon Einstein)</h2>
            <p>Les <strong>intérêts composés</strong> = les intérêts qui génèrent eux-mêmes des intérêts. Avec le temps, l'effet est exponentiel.</p>
            <div class="visual-card accent-border">
              <div class="visual-card-title">Investissement de 10 000€ à 8%/an</div>
              <div class="mini-chart">
                <div class="bar" style="height:15%; background:#3b82f6;"></div>
                <div class="bar" style="height:20%; background:#3b82f6;"></div>
                <div class="bar" style="height:27%; background:#3b82f6;"></div>
                <div class="bar" style="height:36%; background:#3b82f6;"></div>
                <div class="bar" style="height:49%; background:#8b5cf6;"></div>
                <div class="bar" style="height:66%; background:#8b5cf6;"></div>
                <div class="bar" style="height:89%; background:#10b981;"></div>
                <div class="bar" style="height:100%; background:#10b981;"></div>
              </div>
              <p style="font-size:0.82rem; margin-top:12px;">10 ans → ~21 589€ | 20 ans → ~46 610€ | 30 ans → ~100 627€. Pas d'investissement additionnel — juste les intérêts composés.</p>
            </div>
          </div>
          <div class="lesson-section">
            <h4>Stratégies</h4>
            <h2>Les 3 stratégies long terme qui ont fait leurs preuves</h2>
            <ul>
              <li>📦 <strong>Stratégie Boggle (ETF World) :</strong> John Boggle, fondateur de Vanguard. Acheter un ETF monde (MSCI World) et ne jamais vendre. Bat ~85% des gestionnaires actifs sur 10 ans.</li>
              <li>🏆 <strong>Value Investing (Buffett/Munger) :</strong> Identifier des entreprises de qualité sous-évaluées avec un moat fort. Acheter et conserver "pour toujours".</li>
              <li>🌱 <strong>Portefeuille Permanent (Harry Browne) :</strong> 25% chaque dans : actions, obligations LT, or, liquidités. Rééquilibrage annuel. Résistant à tous les régimes économiques.</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Patience</h4>
            <h2>Buy & Hold vs Trading actif : que disent les chiffres ?</h2>
            <ul>
              <li>📊 Étude Dalbar : l'investisseur moyen obtient 3,7%/an contre 9,5%/an pour l'indice S&P 500 sur 30 ans → les interventions fréquentes detruisent la performance</li>
              <li>🐢 Peter Lynch : les investisseurs qui n'ont jamais touché à leurs actions ont surperformé ceux qui ont activement géré</li>
              <li>⏰ Une seule règle pour l'investisseur long terme : "Time in the market beats timing the market"</li>
            </ul>
          </div>
        `,
        resume: 'Les intérêts composés sont exponentiels sur le long terme. Les stratégies éprouvées : ETF World (Boggle), Value Investing (Buffett), Portefeuille Permanent (Browne). Les études montrent que moins on intervient, meilleure est la performance. "Time in the market beats timing the market."',
        keyPoints: [
          '10 000€ à 8%/an → 100 000€ en 30 ans sans apport supplémentaire (intérêts composés)',
          'L\'ETF MSCI World bat ~85% des fonds actifs sur 10 ans (frais et émotions inclus)',
          'L\'investisseur moyen sous-performe l\'indice de 5-6%/an à cause de ses interventions',
          '"Time in the market beats timing the market" — la durée prime sur le moment d\'entrée',
          'Réinvestir les dividendes accélère considérablement les intérêts composés'
        ]
      }),
      quiz: [
        { q: 'Qu\'est-ce que le principe des intérêts composés ?', opts: ['Les intérêts que tu paies sur un prêt bancaire', 'Le fait que les intérêts générés produisent eux-mêmes des intérêts, créant une croissance exponentielle', 'Les dividendes versés par les actions', 'Un type de compte à terme bancaire'], ans: 1, expl: 'Les intérêts composés = les intérêts qui s\'ajoutent au capital et génèrent eux-mêmes des intérêts. Sur 30 ans à 8%/an, 10 000€ deviennent ~100 000€ sans aucun apport supplémentaire.' },
        { q: 'Selon les études Dalbar, pourquoi l\'investisseur moyen sous-performe l\'indice ?', opts: ['Parce qu\'il choisit de mauvais ETF', 'Parce qu\'il intervient trop souvent, guidé par ses émotions', 'Parce que les indices ne sont pas accessibles aux particuliers', 'À cause des frais de courtage'], ans: 1, expl: 'L\'étude Dalbar montre que les interventions fréquentes guidées par les émotions (vendre dans la peur, acheter dans l\'euphorie) réduisent drastiquement la performance. L\'inaction disciplinée est souvent supérieure.' },
        { q: 'Que signifie "Time in the market beats timing the market" ?', opts: ['Il faut investir uniquement en période de baisse', 'La durée d\'exposition au marché est plus importante que le moment choisi pour entrer', 'Les marchés montent toujours sur la durée, peu importe quand on achète', 'Il faut concentrer ses achats en début d\'année'], ans: 1, expl: 'Cette règle signifie que rester investi longtemps (même si on entre au mauvais moment) est plus efficace que d\'essayer de trouver le timing parfait d\'entrée/sortie — ce que même les professionnels n\'arrivent pas à faire de façon constante.' }
      ]
    },
    {
      id: 'pro-5',
      icon: '⚠️',
      title: 'Erreurs classiques & Vision long terme',
      desc: 'Les pièges à éviter absolument et comment développer un état d\'esprit d\'investisseur.',
      duration: '14 min',
      content: buildLesson({
        bigQuestion: 'Quelles sont les erreurs qui ont détruit le plus de portefeuilles — et comment les éviter définitivement ?',
        intro: 'Les erreurs en investissement sont souvent prévisibles et récurrentes. Les identifier à l\'avance est la meilleure protection. Robert Kiyosaki, dans "Père Riche, Père Pauvre", le souligne : l\'éducation financière est ce qui fait la différence entre la richesse et la pauvreté.',
        plan: ['1. Les 10 erreurs les plus destructrices', '2. La vision long terme comme philosophie', '3. Construire un état d\'esprit d\'investisseur', '4. Le cadre décisionnel de l\'investisseur rationnel'],
        problematique: 'Comment passer d\'un comportement réactif et émotionnel à une approche proactive et méthodique ?',
        developpement: `
          <div class="lesson-section">
            <h4>Erreurs</h4>
            <h2>Les 10 erreurs les plus courantes et coûteuses</h2>
            <ul>
              <li>1️⃣ <strong>Investir sans plan :</strong> Sans stratégie écrite, les décisions sont prises sous l'émotion.</li>
              <li>2️⃣ <strong>Mettre tout sur un seul actif :</strong> "All in" sur une action ou un projet crypto = risque de ruine.</li>
              <li>3️⃣ <strong>Acheter au sommet par FOMO :</strong> "Ça monte → j'achète" = acheter au plus haut.</li>
              <li>4️⃣ <strong>Vendre en panique lors des corrections :</strong> Cristalliser une perte temporaire en perte définitive.</li>
              <li>5️⃣ <strong>Suivre des "tips" non vérifiés :</strong> Les influenceurs crypto rémunérés pour promouvoir des projets (paid promotions non déclarées).</li>
              <li>6️⃣ <strong>Négliger les frais :</strong> 1% de frais/an en moins → des dizaines de milliers d'euros perdus sur 30 ans.</li>
              <li>7️⃣ <strong>Ne pas tenir compte de la fiscalité :</strong> Plus-values, déclarations — des erreurs coûteuses en France.</li>
              <li>8️⃣ <strong>Confondre trading et investissement :</strong> Deux disciplines fondamentalement différentes avec des horizons et des risques distincts.</li>
              <li>9️⃣ <strong>Absence de fonds d'urgence :</strong> Investir sans avoir 3-6 mois de dépenses en liquidités → être forcé de vendre au mauvais moment.</li>
              <li>🔟 <strong>Chercher à s'enrichir vite :</strong> Les promesses de rendements extraordinaires en peu de temps = arnaques dans 99% des cas.</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Vision long terme</h4>
            <h2>L'état d'esprit de l'investisseur accompli</h2>
            <div class="highlight-box">
              📖 Robert Kiyosaki dans "Père Riche, Père Pauvre" : "Les riches achètent des actifs. Les pauvres n'achètent que des passifs. La classe moyenne achète des passifs qu'elle croit être des actifs."
            </div>
            <p>L'investisseur de long terme pense en décennies, pas en semaines. Il se préoccupe de la valeur fondamentale, pas du prix quotidien.</p>
            <ul>
              <li>🧭 Il a un plan écrit qu'il suit même sous pression</li>
              <li>📚 Il continue d'apprendre et de remettre ses hypothèses en question</li>
              <li>😌 Il accepte la volatilité comme le prix à payer pour les rendements</li>
              <li>🔄 Il rééquilibre mécaniquement, sans émotion</li>
              <li>🚫 Il ignore le bruit médiatique quotidien</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h4>Cadre décisionnel</h4>
            <h2>5 questions avant chaque décision d'investissement</h2>
            <div class="visual-card green-border">
              <div class="visual-card-title">Checklist de l'investisseur rationnel</div>
              <ul>
                <li>❓ <strong>Ai-je compris ce dans quoi j'investis ?</strong> Si non, ne pas investir.</li>
                <li>❓ <strong>Quel est mon pire scénario ?</strong> Suis-je prêt à perdre ce montant ?</li>
                <li>❓ <strong>Est-ce que j'investis sous émotion ?</strong> (FOMO, panique) Si oui, attendre 24h.</li>
                <li>❓ <strong>Quel est le ratio risque/rendement ?</strong> Est-il favorable ?</li>
                <li>❓ <strong>Est-ce cohérent avec mon plan global ?</strong> Si non, passer.</li>
              </ul>
            </div>
          </div>
        `,
        resume: 'Les 10 erreurs classiques vont du manque de plan à la recherche de gains rapides. L\'investisseur accompli pense long terme, suit un plan écrit, accepte la volatilité, et applique une checklist avant chaque décision. L\'éducation financière est le meilleur investissement.',
        keyPoints: [
          'Toujours avoir un fonds d\'urgence (3-6 mois) avant d\'investir',
          '1% de frais de moins par an = des dizaines de milliers d\'€ de plus sur 30 ans',
          'FOMO = acheter au plus haut. La panique = vendre au plus bas. Éviter les deux.',
          '"Les riches achètent des actifs, pas des passifs" — Kiyosaki',
          'Avant chaque décision : comprendre l\'actif, définir le pire scénario, vérifier l\'absence d\'émotion'
        ]
      }),
      quiz: [
        { q: 'Pourquoi est-il important d\'avoir un fonds d\'urgence AVANT d\'investir ?', opts: ['Pour payer moins d\'impôts', 'Pour éviter d\'être forcé de vendre ses investissements au mauvais moment en cas de besoin urgent', 'Pour obtenir un meilleur taux de crédit', 'Les banques l\'exigent pour ouvrir un compte bourse'], ans: 1, expl: 'Sans fonds d\'urgence (3-6 mois de dépenses), une dépense imprévue peut forcer la vente d\'investissements au pire moment (crise). Le fonds d\'urgence est le socle de toute stratégie financière.' },
        { q: 'Quelle est l\'erreur d\'investissement la plus coûteuse selon les données ?', opts: ['Investir dans des ETF à faibles frais', 'Vendre en panique lors des corrections de marché et rater la reprise', 'Diversifier son portefeuille sur plusieurs continents', 'Investir régulièrement par DCA'], ans: 1, expl: 'Vendre en période de panique transforme une perte temporaire (paper loss) en perte définitive (perte réalisée), et on rate souvent la reprise qui suit. Les études montrent que les 10 meilleures journées boursières par décennie représentent l\'essentiel des gains annuels.' },
        { q: 'Selon Robert Kiyosaki dans "Père Riche, Père Pauvre", quelle est la différence fondamentale entre riches et pauvres ?', opts: ['Le niveau de revenus à la naissance', 'Les riches achètent des actifs qui génèrent des revenus, les autres achètent des passifs', 'L\'accès à de meilleures banques', 'La connaissance des marchés dérivés'], ans: 1, expl: 'Kiyosaki définit un actif comme quelque chose qui met de l\'argent dans ta poche (investissement, immobilier locatif, business) et un passif comme quelque chose qui en prend (crédit voiture, dépenses…). Construire de la richesse = accumuler des actifs.' }
      ]
    }
  ]
};

// ============================================================
// FONCTION UTILITAIRE : buildLesson
// Génère le HTML structuré d'une leçon
// ============================================================
function buildLesson({ bigQuestion, intro, plan, problematique, developpement, resume, keyPoints }) {
  return `
    <div class="big-question">${bigQuestion}</div>

    <div class="lesson-section">
      <h4>Introduction</h4>
      <p>${intro}</p>
    </div>

    <div class="lesson-section">
      <h4>Plan de la leçon</h4>
      <div class="visual-card">
        <ul>${plan.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
    </div>

    <div class="lesson-section">
      <h4>Problématique</h4>
      <div class="highlight-box">🔍 ${problematique}</div>
    </div>

    ${developpement}

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
  completedLessons: {}       // { 'deb-1': true, 'int-2': true, ... }
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
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(id);
  if (screen) {
    screen.classList.add('active');
    screen.scrollTop = 0;
    window.scrollTo(0, 0);
  }
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

  // Compter les leçons complétées pour la barre globale
  const completed = lessons.filter(l => state.completedLessons[l.id]).length;
  const pct = (completed / lessons.length) * 100;
  document.getElementById('global-progress-bar').style.width = pct + '%';

  // Carte utilisateur
  updateUserCard();

  // Badges
  renderBadges();

  // Grille des leçons
  const grid = document.getElementById('lessons-grid');
  grid.innerHTML = '';

  lessons.forEach((lesson, idx) => {
    const isDone   = !!state.completedLessons[lesson.id];
    const isFirst  = idx === 0;
    // Débloqué si premier, ou si la leçon précédente est complétée
    const prevDone = idx === 0 || !!state.completedLessons[lessons[idx - 1].id];
    const isLocked = !prevDone && !isDone;

    const card = document.createElement('div');
    card.className = `lesson-card${isDone ? ' completed' : ''}${isLocked ? ' locked' : ''}`;

    const statusLabel = isDone ? 'Complétée ✓' : (isLocked ? '🔒 Verrouillée' : 'Disponible');
    const statusClass = isDone ? 'status-done' : (isLocked ? 'status-locked' : 'status-open');

    card.innerHTML = `
      <div class="lcard-top">
        <div class="lcard-icon">${lesson.icon}</div>
        <div class="lcard-status ${statusClass}">${statusLabel}</div>
      </div>
      <div class="lcard-num">Leçon ${idx + 1} / 5</div>
      <h3>${lesson.title}</h3>
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
  document.getElementById('lesson-content').innerHTML = lesson.content;

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
  const optContainer = document.getElementById('quiz-options');
  optContainer.innerHTML = '';

  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i, q.ans, q.expl));
    optContainer.appendChild(btn);
  });

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
  }
}

function backToLesson() {
  document.getElementById('quiz-feedback').classList.add('hidden');
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
  } else if (pct >= 66) {
    emoji = '🌟'; title = 'Très bien !';
    msg = `${correct}/${total} bonnes réponses. Bonne maîtrise des concepts principaux.`;
  } else {
    emoji = '💪'; title = 'Continue !';
    msg = `${correct}/${total} bonnes réponses. N'hésite pas à relire la leçon pour consolider tes connaissances.`;
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
  state.xp += xp;
  const xpPerLevel = 50;
  const newLevel = Math.floor(state.xp / xpPerLevel) + 1;
  if (newLevel > state.userLevel) state.userLevel = newLevel;
  saveState();
  updateUserCard();
}

function updateScoreDisplays() {
  ['score-display', 'score-display-2', 'score-display-3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = state.score + ' pts';
  });
}

function updateUserCard() {
  const xpPerLevel = 50;
  const xpInCurrentLevel = state.xp % xpPerLevel;
  const pct = (xpInCurrentLevel / xpPerLevel) * 100;

  const avatars = ['🎓', '📚', '💡', '🔥', '⚡', '🚀', '💎', '👑', '🏆', '🌟'];
  const levelEl = document.getElementById('uc-level-label');
  const xpFill  = document.getElementById('xp-fill');
  const xpText  = document.getElementById('xp-text');
  const avatar  = document.getElementById('uc-avatar');

  if (levelEl) levelEl.textContent = `Niveau ${state.userLevel}`;
  if (xpFill)  xpFill.style.width = pct + '%';
  if (xpText)  xpText.textContent = `${xpInCurrentLevel} / ${xpPerLevel} XP`;
  if (avatar)  avatar.textContent = avatars[Math.min(state.userLevel - 1, avatars.length - 1)];
}

// ============================================================
// BADGES
// ============================================================
const BADGE_DEFINITIONS = [
  { id: 'curious',    label: '🔍 Curieux',    condition: s => Object.keys(s.completedLessons).length >= 1 },
  { id: 'learner',    label: '📚 Apprenant',  condition: s => Object.keys(s.completedLessons).length >= 3 },
  { id: 'analyst',   label: '📊 Analyste',   condition: s => Object.keys(s.completedLessons).length >= 5 },
  { id: 'strategist',label: '♟️ Stratège',   condition: s => Object.keys(s.completedLessons).length >= 8 },
  { id: 'expert',    label: '🏆 Expert',     condition: s => Object.keys(s.completedLessons).length >= 12 },
  { id: 'master',    label: '👑 Maître',     condition: s => Object.keys(s.completedLessons).length >= 15 },
  { id: 'richkid',   label: '💰 Kiyosaki',   condition: s => s.score >= 100 },
  { id: 'perfecta',  label: '✨ Perfection',  condition: s => s.score >= 250 }
];

function checkBadges() {
  let newBadge = false;
  BADGE_DEFINITIONS.forEach(def => {
    if (!state.badges.includes(def.id) && def.condition(state)) {
      state.badges.push(def.id);
      newBadge = true;
    }
  });
  if (newBadge) renderBadges();
}

function renderBadges() {
  const container = document.getElementById('badges-row');
  if (!container) return;
  container.innerHTML = '';
  state.badges.forEach(badgeId => {
    const def = BADGE_DEFINITIONS.find(d => d.id === badgeId);
    if (!def) return;
    const el = document.createElement('div');
    el.className = 'badge-item';
    el.textContent = def.label;
    container.appendChild(el);
  });
}

// ============================================================
// CONFETTI
// ============================================================
function launchConfetti() {
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

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
      ctx.fill();
    });

    // Connexions entre particules proches
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
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
  updateScoreDisplays();
  updateUserCard();
  initParticles();
});
