const STORAGE_KEY = "mind_markets_final_v1";
const RATING_STORAGE_KEY = "mind_markets_rating_done_v1";

const defaultProgress = {
  selectedTrack: null,
  points: 0,
  completedLessons: [],
  solvedQuizzes: [],
  claimedQuests: [],
  seenLevelRewards: [],
  lessonsVisible: 3,
  quizzesVisible: 3,
  questsVisible: 3,
  rewardsVisible: 6
};

const TRACKS = {
  debutant: {
    label: "Débutant",
    emoji: "🌱",
    description: "Des bases très claires, progressives et rassurantes."
  },
  intermediaire: {
    label: "Intermédiaire",
    emoji: "📈",
    description: "Plus d’analyse, plus de logique de marché, plus de stratégie."
  },
  professionnel: {
    label: "Professionnel",
    emoji: "🧠",
    description: "Des formats plus complets : analyses, cas, références et angles d’actualité."
  }
};

const LESSONS = [
  // DÉBUTANT (10)
  {
    id: 1,
    module: 1,
    audience: "debutant",
    category: "Marchés",
    emoji: "📈",
    format: "Leçon",
    title: "C’est quoi une action ?",
    duration: "4 min",
    chart: "bars",
    summary: "Comprendre ce qu’on achète vraiment quand on investit en bourse.",
    problem: "Quand on dit qu’on “achète une action”, qu’est-ce que cela signifie concrètement ?",
    intro: "Une action représente une petite part du capital d’une entreprise cotée. Comprendre cette idée est fondamental, car elle permet de relier la finance à quelque chose de concret : devenir propriétaire d’une fraction d’entreprise.",
    plan: [
      "Définir simplement ce qu’est une action",
      "Comprendre comment son prix évolue",
      "Voir pourquoi cela intéresse les investisseurs"
    ],
    body: [
      "Une action est une part de propriété. Si une entreprise est divisée en millions d’actions, chaque action représente une très petite fraction de l’ensemble.",
      "Le prix d’une action varie selon l’offre et la demande, mais aussi selon les anticipations : résultats attendus, croissance, confiance, actualité.",
      "L’investisseur peut espérer deux choses : une hausse du prix de l’action et, dans certains cas, le versement d’un dividende."
    ],
    bullets: [
      "Action = part d’entreprise",
      "Prix = attentes + offre/demande",
      "Rendement = hausse potentielle + dividendes"
    ],
    conclusion: "Comprendre l’action, c’est comprendre que la bourse n’est pas seulement un écran de chiffres : c’est un marché de parts d’entreprises.",
    currentQuestion: "Quand une entreprise technologique annonce des résultats meilleurs que prévu, pourquoi son action peut-elle quand même baisser ?"
  },
  {
    id: 2,
    module: 2,
    audience: "debutant",
    category: "Macro",
    emoji: "🔥",
    format: "Leçon",
    title: "Pourquoi les prix augmentent-ils ?",
    duration: "4 min",
    chart: "inflation",
    summary: "Comprendre l’inflation et son impact sur le pouvoir d’achat.",
    problem: "Pourquoi parle-t-on autant d’inflation, et pourquoi cela change-t-il la vie quotidienne ?",
    intro: "L’inflation désigne une hausse générale des prix dans l’économie. Elle n’est pas seulement un sujet de cours : elle touche directement les dépenses, l’épargne et les marchés.",
    plan: [
      "Définir l’inflation simplement",
      "Comprendre son effet sur le pouvoir d’achat",
      "Relier inflation et marchés financiers"
    ],
    body: [
      "Quand l’inflation augmente, il faut plus d’argent pour acheter les mêmes biens et services qu’avant.",
      "Si les salaires progressent moins vite que les prix, le pouvoir d’achat diminue.",
      "Les marchés suivent l’inflation de près, car elle influence les taux d’intérêt et donc la valorisation des actifs."
    ],
    bullets: [
      "Inflation = hausse générale des prix",
      "Elle réduit le pouvoir d’achat",
      "Elle influence les décisions des banques centrales"
    ],
    conclusion: "L’inflation est une notion centrale car elle relie la vie quotidienne, la politique monétaire et les marchés.",
    currentQuestion: "Pourquoi une hausse du prix de l’énergie peut-elle avoir des effets sur beaucoup d’autres secteurs ?"
  },
  {
    id: 3,
    module: 3,
    audience: "debutant",
    category: "Macro",
    emoji: "🏦",
    format: "Leçon",
    title: "À quoi servent les banques centrales ?",
    duration: "5 min",
    chart: "bars",
    summary: "Comprendre pourquoi les banques centrales influencent autant l’économie.",
    problem: "Pourquoi la Banque centrale européenne ou la Fed ont-elles autant d’impact sur les marchés ?",
    intro: "Les banques centrales ne vendent pas directement des produits aux consommateurs, mais elles ont un pouvoir immense : elles influencent le coût de l’argent et les conditions financières de toute l’économie.",
    plan: [
      "Comprendre leur rôle principal",
      "Voir comment elles agissent",
      "Relier leurs décisions aux marchés"
    ],
    body: [
      "Leur mission principale est souvent de stabiliser les prix et de soutenir le fonctionnement de l’économie.",
      "Elles agissent notamment via les taux d’intérêt : si elles les montent, le crédit coûte plus cher ; si elles les baissent, il devient plus accessible.",
      "Les marchés suivent leurs annonces car une variation de taux modifie la valeur relative des actions, obligations et autres placements."
    ],
    bullets: [
      "Elles influencent le coût du crédit",
      "Leurs annonces changent les anticipations",
      "Les marchés les surveillent en permanence"
    ],
    conclusion: "Les banques centrales sont au cœur de l’environnement financier moderne.",
    currentQuestion: "Pourquoi une simple phrase du président d’une banque centrale peut-elle faire bouger les marchés dans la minute ?"
  },
  {
    id: 4,
    module: 4,
    audience: "debutant",
    category: "Investissement",
    emoji: "📊",
    format: "Leçon",
    title: "C’est quoi un ETF ?",
    duration: "4 min",
    chart: "bars",
    summary: "Découvrir un outil d’investissement simple et très utilisé.",
    problem: "Pourquoi beaucoup d’investisseurs débutants s’intéressent-ils aux ETF ?",
    intro: "Un ETF est un fonds coté en bourse qui permet d’investir dans un ensemble d’actifs en un seul achat. Il est souvent présenté comme un outil simple et pratique pour se diversifier.",
    plan: [
      "Définir un ETF",
      "Comprendre son intérêt principal",
      "Voir ses limites"
    ],
    body: [
      "Un ETF réplique souvent un indice, par exemple un panier d’actions américaines ou européennes.",
      "Son intérêt principal est la diversification : on n’achète pas un seul titre, mais un ensemble.",
      "Cela ne supprime pas le risque : si le marché baisse globalement, l’ETF peut aussi baisser."
    ],
    bullets: [
      "ETF = panier coté en bourse",
      "Diversification plus simple",
      "Pas sans risque"
    ],
    conclusion: "L’ETF est un outil très utile pour comprendre qu’investir, ce n’est pas forcément choisir une seule entreprise.",
    currentQuestion: "Pourquoi les ETF sont-ils souvent présentés comme un outil adapté à un horizon long terme ?"
  },
  {
    id: 5,
    module: 5,
    audience: "debutant",
    category: "Business",
    emoji: "💼",
    format: "Leçon",
    title: "Les bases du marketing",
    duration: "5 min",
    chart: "funnel",
    summary: "Comprendre qu’un bon marketing part d’un besoin réel.",
    problem: "Le marketing, est-ce seulement faire de la publicité ?",
    intro: "Le marketing ne se limite pas à faire connaître un produit. Il consiste d’abord à comprendre un besoin, définir une cible et construire une offre perçue comme utile.",
    plan: [
      "Définir le marketing",
      "Comprendre le rôle de la cible",
      "Voir l’importance de la proposition de valeur"
    ],
    body: [
      "Le marketing commence par une question simple : à qui s’adresse-t-on ?",
      "Une bonne offre n’est pas une offre “pour tout le monde”, mais une offre claire pour une cible précise.",
      "La proposition de valeur explique pourquoi l’utilisateur devrait choisir cette offre plutôt qu’une autre."
    ],
    bullets: [
      "Le marketing commence par le besoin",
      "La cible est centrale",
      "Une offre claire est plus forte"
    ],
    conclusion: "Le marketing sert à créer une offre compréhensible, désirable et cohérente.",
    currentQuestion: "Pourquoi certaines marques réussissent-elles à vendre plus cher sans changer fondamentalement leur produit ?"
  },
  {
    id: 6,
    module: 6,
    audience: "debutant",
    category: "Business",
    emoji: "✨",
    format: "Leçon détaillée",
    title: "C’est quoi une marque ?",
    duration: "6 min",
    chart: "brand",
    summary: "Comprendre qu’une marque est une promesse et une perception.",
    problem: "Pourquoi la marque influence-t-elle autant la décision d’achat ?",
    intro: "Une marque n’est pas seulement un nom ou un logo. Elle agit comme un repère mental. Elle rassure, elle différencie et elle influence la valeur perçue.",
    plan: [
      "Comprendre ce qu’est une marque",
      "Voir comment elle crée de la confiance",
      "Relier marque et valeur perçue"
    ],
    body: [
      "Une marque condense une image, des codes et une promesse. Elle aide le client à identifier rapidement une offre.",
      "Elle réduit l’incertitude : quand on connaît une marque, on pense déjà savoir à quoi s’attendre.",
      "Une marque forte peut augmenter la désirabilité, améliorer la fidélité et parfois permettre un prix plus élevé."
    ],
    bullets: [
      "Marque = repère mental",
      "Elle rassure et différencie",
      "Elle influence la valeur perçue"
    ],
    conclusion: "La marque n’est pas un détail visuel : c’est une structure de confiance et de perception.",
    currentQuestion: "Pourquoi certaines marques restent fortes même quand des concurrents proposent un produit proche ?"
  },
  {
    id: 7,
    module: 7,
    audience: "debutant",
    category: "Investissement",
    emoji: "💳",
    format: "Leçon détaillée",
    title: "Comprendre le cashflow",
    duration: "6 min",
    chart: "cashflow",
    summary: "Voir pourquoi les entrées et sorties d’argent sont essentielles.",
    problem: "Pourquoi une entreprise ou un projet peut-il sembler rentable tout en étant fragile ?",
    intro: "Le cashflow correspond aux entrées et sorties réelles d’argent. C’est une notion simple en apparence, mais déterminante pour la solidité d’un projet.",
    plan: [
      "Définir le cashflow",
      "Voir pourquoi il diffère d’un simple chiffre d’affaires",
      "Comprendre son importance pratique"
    ],
    body: [
      "Le chiffre d’affaires mesure ce qui est vendu. Le cashflow regarde ce qui entre vraiment en caisse et ce qui en sort.",
      "Une activité peut vendre beaucoup mais souffrir si les dépenses sont trop rapides ou si les encaissements arrivent trop tard.",
      "Le cashflow aide à piloter : investir, tenir, payer et anticiper les périodes de tension."
    ],
    bullets: [
      "Cashflow = flux réels d’argent",
      "CA et cashflow ne sont pas la même chose",
      "Un bon cashflow rend un projet plus solide"
    ],
    conclusion: "Comprendre le cashflow, c’est comprendre la respiration réelle d’un projet.",
    currentQuestion: "Pourquoi beaucoup de jeunes entreprises surveillent-elles leur cash de très près, même quand leur activité grandit ?"
  },
  {
    id: 8,
    module: 8,
    audience: "debutant",
    category: "Marchés",
    emoji: "⚖️",
    format: "Leçon détaillée",
    title: "Offre et demande sur les marchés",
    duration: "6 min",
    chart: "line",
    summary: "Comprendre la logique la plus simple derrière l’évolution d’un prix.",
    problem: "Pourquoi un prix monte-t-il ou baisse-t-il sur un marché ?",
    intro: "La logique d’offre et de demande est au cœur de l’économie et des marchés financiers. Elle paraît simple, mais elle explique beaucoup de mouvements.",
    plan: [
      "Définir offre et demande",
      "Voir comment le prix s’ajuste",
      "Relier cela aux anticipations"
    ],
    body: [
      "Si plus d’acheteurs veulent acheter que de vendeurs veulent vendre au même prix, le prix a tendance à monter.",
      "Inversement, si les vendeurs sont plus nombreux ou plus pressés que les acheteurs, le prix a tendance à baisser.",
      "Sur les marchés financiers, cette mécanique est souvent amplifiée par les anticipations et la psychologie."
    ],
    bullets: [
      "Plus de demande = pression haussière",
      "Plus d’offre = pression baissière",
      "Les anticipations modifient l’équilibre"
    ],
    conclusion: "Offre et demande forment la base de la lecture d’un marché.",
    currentQuestion: "Pourquoi une action peut-elle monter avant même que les résultats soient publiés ?"
  },
  {
    id: 9,
    module: 9,
    audience: "debutant",
    category: "Investissement",
    emoji: "🧺",
    format: "Leçon détaillée",
    title: "Pourquoi diversifier ?",
    duration: "6 min",
    chart: "bars",
    summary: "Comprendre pourquoi répartir son risque change beaucoup de choses.",
    problem: "Pourquoi ne pas mettre tout son argent sur une seule idée qui semble excellente ?",
    intro: "La diversification est l’un des principes les plus répétés en finance. Ce n’est pas parce qu’elle est simple qu’elle est secondaire : elle change profondément la manière d’investir.",
    plan: [
      "Définir la diversification",
      "Comprendre son intérêt",
      "Voir ce qu’elle ne fait pas"
    ],
    body: [
      "Diversifier, c’est répartir son exposition au lieu de dépendre totalement d’un seul actif ou d’un seul scénario.",
      "Cela permet de réduire le risque spécifique : une mauvaise surprise sur un titre ou un secteur pèse moins.",
      "En revanche, cela ne protège pas complètement d’un choc global : si tout le marché baisse, un portefeuille diversifié peut aussi reculer."
    ],
    bullets: [
      "Diversifier = mieux répartir le risque",
      "Réduit le risque spécifique",
      "Ne supprime pas le risque global"
    ],
    conclusion: "La diversification ne fait pas disparaître le risque, mais elle le rend souvent plus supportable.",
    currentQuestion: "Pourquoi les investisseurs long terme attachent-ils autant d’importance à la diversification ?"
  },
  {
    id: 10,
    module: 10,
    audience: "debutant",
    category: "Marchés",
    emoji: "💰",
    format: "Leçon détaillée",
    title: "C’est quoi un dividende ?",
    duration: "5 min",
    chart: "bars",
    summary: "Comprendre le lien entre actionnaire et redistribution des bénéfices.",
    problem: "Pourquoi certaines entreprises versent-elles un dividende et d’autres non ?",
    intro: "Le dividende est une somme versée par certaines entreprises à leurs actionnaires. Il est souvent vu comme un revenu, mais il raconte aussi quelque chose sur la stratégie de l’entreprise.",
    plan: [
      "Définir le dividende",
      "Comprendre pourquoi il est versé",
      "Voir ce que cela signifie pour l’investisseur"
    ],
    body: [
      "Quand une entreprise réalise des bénéfices, elle peut décider d’en conserver une partie pour investir ou d’en redistribuer une partie à ses actionnaires.",
      "Le dividende est donc une forme de partage de la valeur créée.",
      "Pour l’investisseur, il peut représenter un revenu, mais il faut aussi comprendre qu’une entreprise qui ne verse pas de dividende peut choisir de réinvestir pour croître davantage."
    ],
    bullets: [
      "Dividende = part des bénéfices redistribuée",
      "Il dépend d’un choix stratégique",
      "Absence de dividende ne veut pas dire mauvaise entreprise"
    ],
    conclusion: "Le dividende est un outil de lecture utile, mais il doit être interprété dans le contexte global de l’entreprise.",
    currentQuestion: "Pourquoi une entreprise en forte croissance préfère-t-elle parfois réinvestir plutôt que verser un dividende ?"
  },

  // INTERMÉDIAIRE (10)
  {
    id: 101,
    module: 1,
    audience: "intermediaire",
    category: "Marchés",
    emoji: "📉",
    format: "Analyse",
    title: "Pourquoi les marchés corrigent-ils ?",
    duration: "6 min",
    chart: "line",
    summary: "Lire une baisse de marché sans tout confondre.",
    problem: "Une baisse de marché est-elle toujours le signe d’un problème durable ?",
    intro: "Les marchés connaissent régulièrement des phases de correction. Une correction ne signifie pas automatiquement crise grave, mais elle exige une lecture plus fine du contexte.",
    plan: [
      "Distinguer correction, panique et crise",
      "Comprendre les causes principales",
      "Voir comment lire une correction avec plus de recul"
    ],
    body: [
      "Une correction peut venir d’un excès d’optimisme précédent, d’un changement de taux, d’une déception sur les résultats ou d’un choc externe.",
      "Le marché n’évalue pas seulement le présent : il réévalue constamment le futur.",
      "Lire une correction, c’est se demander si elle reflète un changement structurel ou simplement une révision d’anticipations."
    ],
    bullets: [
      "Une correction n’est pas toujours une crise",
      "Le marché réévalue le futur",
      "Le contexte fait la différence"
    ],
    conclusion: "Comprendre une correction, c’est apprendre à distinguer bruit, réajustement et vrai changement de régime.",
    currentQuestion: "Pourquoi un marché peut-il corriger même quand l’économie continue encore de croître ?"
  },
  {
    id: 102,
    module: 2,
    audience: "intermediaire",
    category: "Macro",
    emoji: "🌍",
    format: "Analyse",
    title: "Macro et sentiment de marché",
    duration: "7 min",
    chart: "line",
    summary: "Relier conjoncture économique et comportement des investisseurs.",
    problem: "Pourquoi le sentiment de marché change-t-il parfois avant les données économiques officielles ?",
    intro: "Le sentiment de marché est une notion subtile : il se construit à partir d’anticipations, de récits, de chiffres et de psychologie collective.",
    plan: [
      "Définir le sentiment de marché",
      "Comprendre son lien avec la macro",
      "Voir pourquoi il peut changer rapidement"
    ],
    body: [
      "Le sentiment de marché traduit la manière dont les investisseurs perçoivent l’environnement futur.",
      "Les données macro influencent cette perception, mais elles arrivent souvent avec retard : le marché tente d’anticiper avant qu’elles soient pleinement visibles.",
      "C’est pourquoi un changement de ton, une surprise sur l’emploi ou l’inflation, ou une annonce de banque centrale peut faire pivoter le sentiment très vite."
    ],
    bullets: [
      "Le marché regarde l’avenir",
      "La macro alimente les anticipations",
      "Le sentiment peut pivoter vite"
    ],
    conclusion: "Suivre le sentiment de marché, c’est apprendre à lire la psychologie collective à travers les données.",
    currentQuestion: "Pourquoi une donnée macro “moins mauvaise que prévu” peut-elle parfois suffire à faire rebondir les marchés ?"
  },
  {
    id: 103,
    module: 3,
    audience: "intermediaire",
    category: "Investissement",
    emoji: "🧮",
    format: "Analyse",
    title: "Risque et rendement",
    duration: "7 min",
    chart: "bars",
    summary: "Comprendre le lien fondamental entre performance potentielle et niveau de risque.",
    problem: "Pourquoi un rendement élevé annoncé doit-il presque toujours faire penser à un risque plus élevé ?",
    intro: "Le couple risque/rendement est l’un des piliers de la finance. Il sert à rappeler qu’une performance attractive n’existe jamais dans le vide.",
    plan: [
      "Définir le lien risque/rendement",
      "Voir pourquoi il structure les décisions",
      "Comprendre les erreurs fréquentes"
    ],
    body: [
      "Un actif potentiellement plus rentable est souvent plus incertain, plus volatile ou plus fragile.",
      "L’enjeu n’est pas seulement de chercher le rendement maximum, mais de choisir un risque cohérent avec son horizon, son objectif et sa capacité à supporter la volatilité.",
      "Une erreur fréquente consiste à confondre rendement espéré et rendement garanti."
    ],
    bullets: [
      "Rendement élevé = risque souvent plus élevé",
      "Le bon choix dépend de l’horizon",
      "Espéré ne veut pas dire garanti"
    ],
    conclusion: "Le vrai sujet n’est pas de fuir le risque, mais de choisir le bon risque.",
    currentQuestion: "Pourquoi certains investisseurs préfèrent-ils une performance plus modeste mais plus régulière ?"
  },
  {
    id: 104,
    module: 4,
    audience: "intermediaire",
    category: "Investissement",
    emoji: "🛡️",
    format: "Étude",
    title: "Diversification intelligente",
    duration: "7 min",
    chart: "bars",
    summary: "Aller au-delà de la diversification “cosmétique”.",
    problem: "Peut-on croire être diversifié alors qu’on reste en réalité très exposé au même risque ?",
    intro: "Diversifier intelligemment ne veut pas seulement dire multiplier le nombre de lignes dans un portefeuille. Cela suppose de comprendre les vrais moteurs de risque.",
    plan: [
      "Voir les limites d’une fausse diversification",
      "Comprendre les corrélations",
      "Construire une diversification plus cohérente"
    ],
    body: [
      "Détenir plusieurs actifs du même type ou du même secteur ne protège pas forcément d’un choc commun.",
      "La vraie diversification suppose de réfléchir aux corrélations : certains actifs réagissent souvent de manière proche dans certaines phases.",
      "L’objectif n’est pas d’empiler des positions, mais de mieux équilibrer les expositions."
    ],
    bullets: [
      "Plusieurs lignes ≠ vraie diversification",
      "La corrélation est centrale",
      "Il faut raisonner en expositions"
    ],
    conclusion: "Une diversification solide est une diversification pensée, pas décorative.",
    currentQuestion: "Pourquoi plusieurs actions technologiques différentes peuvent-elles malgré tout réagir ensemble ?"
  },
  {
    id: 105,
    module: 5,
    audience: "intermediaire",
    category: "Business",
    emoji: "🎯",
    format: "Leçon détaillée",
    title: "Positionnement de marque",
    duration: "8 min",
    chart: "brand",
    summary: "Comprendre comment une marque occupe une place précise dans l’esprit du client.",
    problem: "Pourquoi certaines marques sont-elles immédiatement identifiables et cohérentes ?",
    intro: "Le positionnement est la manière dont une marque veut être perçue relativement à ses concurrents. C’est une idée stratégique avant d’être un simple slogan.",
    plan: [
      "Définir le positionnement",
      "Voir son lien avec la différenciation",
      "Comprendre ses effets sur la cohérence"
    ],
    body: [
      "Un positionnement fort aide à répondre à une question simple : pourquoi cette marque plutôt qu’une autre ?",
      "Il structure le ton, le design, le prix, les arguments commerciaux et même les choix de distribution.",
      "Une marque mal positionnée peut devenir confuse : elle parle à tout le monde, donc plus vraiment à quelqu’un."
    ],
    bullets: [
      "Le positionnement clarifie la promesse",
      "Il guide la cohérence globale",
      "Il renforce la différenciation"
    ],
    conclusion: "Le positionnement est un outil stratégique qui organise toute l’expérience de marque.",
    currentQuestion: "Pourquoi certaines marques changent-elles rarement leur ton ou leur univers visuel ?"
  },
  {
    id: 106,
    module: 6,
    audience: "intermediaire",
    category: "Business",
    emoji: "🧠",
    format: "Leçon détaillée",
    title: "Psychologie du consommateur",
    duration: "8 min",
    chart: "funnel",
    summary: "Comprendre que la décision d’achat n’est pas purement rationnelle.",
    problem: "Pourquoi des consommateurs choisissent-ils parfois une offre objectivement moins avantageuse ?",
    intro: "Acheter n’est jamais un acte entièrement rationnel. Le contexte, les émotions, la confiance, le design, la simplicité et la réputation comptent beaucoup.",
    plan: [
      "Voir pourquoi l’achat n’est pas purement rationnel",
      "Identifier quelques biais fréquents",
      "Relier cela au marketing et à la vente"
    ],
    body: [
      "Le consommateur décide souvent avec des raccourcis mentaux : il se fie à ce qui est familier, rassurant, visible ou cohérent.",
      "La présentation d’une offre, sa lisibilité et le niveau d’effort demandé jouent énormément.",
      "Une bonne compréhension de la psychologie du consommateur améliore la proposition de valeur et la conversion."
    ],
    bullets: [
      "L’achat mêle raison et émotion",
      "La simplicité influence la décision",
      "La confiance pèse très lourd"
    ],
    conclusion: "La psychologie du consommateur aide à construire des offres plus réalistes et plus efficaces.",
    currentQuestion: "Pourquoi un parcours d’achat plus fluide peut-il augmenter les ventes sans changer le produit ?"
  },
  {
    id: 107,
    module: 7,
    audience: "intermediaire",
    category: "Macro",
    emoji: "📦",
    format: "Leçon détaillée",
    title: "Énergie et inflation",
    duration: "8 min",
    chart: "inflation",
    summary: "Comprendre pourquoi les prix de l’énergie ont des effets beaucoup plus larges qu’il n’y paraît.",
    problem: "Pourquoi une hausse de l’énergie peut-elle se diffuser à l’ensemble de l’économie ?",
    intro: "L’énergie est un coût transversal. Quand elle augmente fortement, elle ne touche pas seulement les factures des ménages : elle modifie aussi les coûts de production, de transport et de distribution.",
    plan: [
      "Voir l’énergie comme coût transversal",
      "Comprendre la diffusion des hausses",
      "Relier cela à la macro et aux marchés"
    ],
    body: [
      "L’énergie entre dans la production de nombreux biens et services, directement ou indirectement.",
      "Quand son prix monte, beaucoup d’entreprises doivent ajuster leurs coûts, leurs marges ou leurs prix.",
      "Les marchés suivent cela de près, car les perspectives d’inflation et de croissance peuvent en être modifiées."
    ],
    bullets: [
      "L’énergie touche beaucoup de secteurs",
      "La hausse se diffuse dans la chaîne de valeur",
      "Les marchés réévaluent inflation et marges"
    ],
    conclusion: "L’énergie est un bon exemple de choc sectoriel capable d’avoir des effets macroéconomiques très larges.",
    currentQuestion: "Pourquoi les investisseurs suivent-ils autant le pétrole et le gaz dans certains contextes ?"
  },
  {
    id: 108,
    module: 8,
    audience: "intermediaire",
    category: "Marchés",
    emoji: "💹",
    format: "Leçon détaillée",
    title: "Volatilité et liquidité",
    duration: "8 min",
    chart: "line",
    summary: "Lire les phases où le marché devient nerveux.",
    problem: "Pourquoi certains marchés deviennent-ils brusquement plus instables ?",
    intro: "La volatilité mesure l’ampleur des variations de prix. La liquidité mesure la facilité à acheter ou vendre sans trop déplacer le prix. Les deux notions sont liées, surtout dans les phases de stress.",
    plan: [
      "Définir volatilité et liquidité",
      "Voir leur lien",
      "Comprendre leur importance pour l’investisseur"
    ],
    body: [
      "Quand la liquidité baisse, il devient plus difficile d’exécuter des ordres sans déplacer le marché.",
      "Dans ces moments, les prix peuvent réagir plus violemment à des flux pourtant ordinaires.",
      "L’investisseur doit alors distinguer mouvement de panique, manque de profondeur et changement fondamental."
    ],
    bullets: [
      "Volatilité = amplitude des mouvements",
      "Liquidité = facilité de transaction",
      "Le stress de marché rapproche les deux"
    ],
    conclusion: "Comprendre liquidité et volatilité aide à lire un marché instable avec plus de sang-froid.",
    currentQuestion: "Pourquoi un actif peu liquide peut-il chuter très vite si plusieurs vendeurs se présentent en même temps ?"
  },
  {
    id: 109,
    module: 9,
    audience: "intermediaire",
    category: "Investissement",
    emoji: "🪙",
    format: "Leçon détaillée",
    title: "Allocation crypto prudente",
    duration: "8 min",
    chart: "bars",
    summary: "Réfléchir à la place de la crypto dans une logique de portefeuille.",
    problem: "Comment intégrer un actif très volatil sans déséquilibrer tout le portefeuille ?",
    intro: "Les crypto-actifs suscitent à la fois curiosité, enthousiasme et crainte. L’enjeu n’est pas seulement de savoir s’ils montent ou baissent, mais de savoir quelle place leur donner.",
    plan: [
      "Comprendre leur spécificité",
      "Voir le risque d’une allocation excessive",
      "Construire une logique prudente"
    ],
    body: [
      "Les crypto-actifs peuvent connaître des variations rapides et importantes, ce qui les distingue d’actifs plus stables.",
      "Une allocation trop élevée peut rendre le portefeuille beaucoup plus sensible émotionnellement et financièrement.",
      "Une logique prudente consiste à considérer la crypto comme une poche spécifique, encadrée, et cohérente avec le reste du portefeuille."
    ],
    bullets: [
      "La crypto peut être très volatile",
      "Le poids dans le portefeuille est crucial",
      "Il faut une logique d’exposition maîtrisée"
    ],
    conclusion: "La question n’est pas seulement “faut-il de la crypto ?”, mais surtout “combien et dans quel cadre ?”.",
    currentQuestion: "Pourquoi la gestion émotionnelle est-elle particulièrement importante dans les actifs très volatils ?"
  },
  {
    id: 110,
    module: 10,
    audience: "intermediaire",
    category: "Business",
    emoji: "📣",
    format: "Leçon détaillée",
    title: "Le funnel marketing",
    duration: "8 min",
    chart: "funnel",
    summary: "Comprendre la progression entre attention, intérêt, désir et action.",
    problem: "Pourquoi une marque peut-elle être connue sans forcément réussir à vendre ?",
    intro: "Le funnel marketing représente les étapes qui mènent d’un premier contact à une conversion. Il rappelle qu’être visible ne suffit pas : il faut aussi faire avancer l’utilisateur.",
    plan: [
      "Définir le funnel",
      "Comprendre chaque étape",
      "Voir comment l’optimiser"
    ],
    body: [
      "En haut du funnel, l’enjeu est la visibilité : faire connaître l’offre.",
      "Au milieu, il faut susciter l’intérêt, clarifier la proposition de valeur et réduire les frictions.",
      "En bas, il faut faciliter l’action : achat, inscription, prise de contact ou décision."
    ],
    bullets: [
      "Visibilité ≠ conversion",
      "Chaque étape a ses objectifs",
      "La fluidité compte énormément"
    ],
    conclusion: "Le funnel aide à penser le marketing comme un parcours, pas seulement comme un message.",
    currentQuestion: "Pourquoi une forte audience peut-elle produire peu de ventes si le milieu du parcours est faible ?"
  },

  // PROFESSIONNEL (10)
  {
    id: 201,
    module: 1,
    audience: "professionnel",
    category: "Marchés",
    emoji: "🧠",
    format: "Analyse",
    title: "Lire un market brief",
    duration: "9 min",
    chart: "line",
    summary: "Apprendre à synthétiser une séance de marché avec méthode.",
    problem: "Comment distinguer l’essentiel du bruit dans une journée de marché ?",
    intro: "Un bon market brief ne consiste pas à tout raconter. Il consiste à hiérarchiser ce qui explique réellement le mouvement du jour et ce qui n’est que décor.",
    plan: [
      "Identifier les moteurs principaux",
      "Relier le mouvement aux actifs concernés",
      "Construire une lecture synthétique et utile"
    ],
    body: [
      "La première étape consiste à identifier le moteur principal : macro, taux, résultats, géopolitique, flux, ou combinaison de plusieurs facteurs.",
      "La deuxième est de regarder quels actifs ont le plus réagi : actions, obligations, devises, matières premières, crypto. Cela aide à comprendre la nature du choc.",
      "La troisième consiste à distinguer narration et causalité : tout commentaire n’est pas forcément explicatif."
    ],
    bullets: [
      "Un brief sert à hiérarchiser",
      "Les réactions croisées donnent du sens",
      "Il faut distinguer récit et causalité"
    ],
    conclusion: "Lire un market brief, c’est apprendre à raisonner vite sans devenir superficiel.",
    currentQuestion: "Pourquoi une même actualité peut-elle être interprétée différemment selon le contexte de marché du moment ?",
    reference: "Repère d’analyse : logique de synthèse de marché et structuration d’un brief."
  },
  {
    id: 202,
    module: 2,
    audience: "professionnel",
    category: "Macro",
    emoji: "🏛️",
    format: "Analyse",
    title: "Taux réels et valorisation",
    duration: "9 min",
    chart: "bars",
    summary: "Comprendre pourquoi les taux réels jouent un rôle central dans la valorisation.",
    problem: "Pourquoi la valorisation de certains actifs est-elle si sensible aux taux réels ?",
    intro: "Les taux réels, c’est-à-dire les taux corrigés de l’inflation, donnent une mesure plus fine du vrai prix du temps et du capital. Ils jouent un rôle important dans la valorisation des actifs.",
    plan: [
      "Définir les taux réels",
      "Comprendre leur lien avec la valorisation",
      "Relier cela au comportement des marchés"
    ],
    body: [
      "Quand les taux réels montent, les flux futurs sont davantage “actualisés”, ce qui peut peser sur certains actifs valorisés sur des profits lointains.",
      "Cela concerne particulièrement les actifs de croissance, dont la valeur dépend fortement du futur.",
      "Les marchés ne regardent donc pas seulement le niveau nominal des taux, mais leur signification réelle dans l’environnement macro."
    ],
    bullets: [
      "Taux réels = taux moins inflation",
      "Ils influencent l’actualisation des flux",
      "La croissance y est souvent sensible"
    ],
    conclusion: "Les taux réels offrent une lecture plus fine du coût du capital et de la pression de valorisation.",
    currentQuestion: "Pourquoi certaines valeurs de croissance souffrent-elles davantage lorsque les taux remontent ?",
    reference: "Référence d’analyse : débats macro-financiers autour des taux réels et de la valorisation."
  },
  {
    id: 203,
    module: 3,
    audience: "professionnel",
    category: "Investissement",
    emoji: "📊",
    format: "Case Study",
    title: "Construire un portefeuille cohérent",
    duration: "10 min",
    chart: "bars",
    summary: "Passer d’une juxtaposition d’idées à une vraie architecture d’allocation.",
    problem: "Comment construire un portefeuille qui ait une logique, et pas seulement une liste d’actifs ?",
    intro: "Un portefeuille cohérent n’est pas un portefeuille “rempli”. C’est un portefeuille dont chaque position a une fonction : croissance, protection, rendement, optionalité, ou diversification.",
    plan: [
      "Clarifier l’objectif et l’horizon",
      "Attribuer une fonction à chaque poche",
      "Mettre en place une discipline de suivi"
    ],
    body: [
      "La première étape est l’objectif : chercher la performance à court terme n’appelle pas la même construction qu’une logique patrimoniale long terme.",
      "La deuxième consiste à éviter les doublons : plusieurs positions peuvent raconter en réalité la même histoire.",
      "La troisième est la discipline : taille des lignes, rééquilibrage, règles de sortie, gestion du cash et cohérence globale."
    ],
    bullets: [
      "Un portefeuille doit avoir une logique",
      "Chaque ligne doit avoir une fonction",
      "La discipline compte autant que les idées"
    ],
    conclusion: "Un bon portefeuille est une construction cohérente, pas un collage d’intuitions.",
    currentQuestion: "Pourquoi la taille d’une position peut-elle être aussi importante que le choix de l’actif lui-même ?",
    reference: "Repère : allocation, horizon, discipline et architecture de portefeuille."
  },
  {
    id: 204,
    module: 4,
    audience: "professionnel",
    category: "Business",
    emoji: "📚",
    format: "Case Study",
    title: "Pricing stratégique",
    duration: "10 min",
    chart: "bars",
    summary: "Comprendre le prix comme outil de perception et non comme simple chiffre.",
    problem: "Pourquoi le prix n’est-il pas seulement une conséquence du coût ?",
    intro: "Le prix joue un rôle psychologique, stratégique et concurrentiel. Il influence la perception du produit autant qu’il reflète une logique économique.",
    plan: [
      "Voir le prix comme signal",
      "Comprendre son rôle dans le positionnement",
      "Éviter les erreurs de pricing"
    ],
    body: [
      "Un prix trop bas peut parfois dégrader la perception de qualité, tandis qu’un prix cohérent peut renforcer la désirabilité.",
      "Le pricing doit être aligné avec la proposition de valeur, la cible, le niveau de service et la stratégie de marque.",
      "L’erreur fréquente est de raisonner uniquement en coût sans réfléchir à l’effet du prix sur la perception."
    ],
    bullets: [
      "Le prix est aussi un signal",
      "Il doit être cohérent avec la promesse",
      "Un mauvais pricing brouille la perception"
    ],
    conclusion: "Le prix est un levier stratégique : il parle au marché autant qu’il le mesure.",
    currentQuestion: "Pourquoi des marques premium préfèrent-elles parfois ne pas baisser leurs prix, même en période difficile ?",
    reference: "Repère : pricing, valeur perçue et différenciation stratégique."
  },
  {
    id: 205,
    module: 5,
    audience: "professionnel",
    category: "Business",
    emoji: "🎙️",
    format: "Interview",
    title: "Construire une marque premium",
    duration: "10 min",
    chart: "brand",
    summary: "Lire la marque comme système cohérent, pas comme simple image.",
    problem: "Qu’est-ce qui différencie réellement une marque premium d’une marque seulement “jolie” ?",
    intro: "Une marque premium ne repose pas seulement sur l’esthétique. Elle repose sur une cohérence forte entre promesse, expérience, détail, ton et perception de valeur.",
    plan: [
      "Définir l’idée de premium",
      "Voir le rôle de la cohérence",
      "Comprendre l’importance du détail"
    ],
    body: [
      "Le premium n’est pas seulement un prix élevé. C’est un niveau de cohérence perçu comme supérieur.",
      "Le design, le ton, l’expérience d’usage, la distribution et la communication doivent raconter la même histoire.",
      "Le détail compte beaucoup, car il rend tangible la promesse de qualité."
    ],
    bullets: [
      "Premium = cohérence perçue",
      "Le détail rend la promesse crédible",
      "L’expérience doit confirmer le discours"
    ],
    conclusion: "Une marque premium se construit dans la cohérence répétée, pas dans l’effet d’annonce.",
    currentQuestion: "Pourquoi l’expérience utilisateur peut-elle être aussi importante que le produit lui-même dans le premium ?",
    reference: "Repère : construction de marque, cohérence et univers."
  },
  {
    id: 206,
    module: 6,
    audience: "professionnel",
    category: "Macro",
    emoji: "📘",
    format: "Lecture",
    title: "Instabilité financière",
    duration: "10 min",
    chart: "line",
    summary: "Comprendre pourquoi les phases calmes peuvent préparer les tensions futures.",
    problem: "Pourquoi les périodes prolongées de stabilité financière peuvent-elles rendre le système plus fragile ?",
    intro: "Une des grandes intuitions de Hyman Minsky est que la stabilité peut elle-même produire de l’instabilité. Quand tout semble aller bien trop longtemps, les comportements se relâchent.",
    plan: [
      "Comprendre l’idée de stabilité trompeuse",
      "Voir comment le risque se reconstruit",
      "Relier cela aux marchés"
    ],
    body: [
      "Dans une période calme, la confiance augmente, les prises de risque peuvent monter et les agents économiques sous-estimer les dangers.",
      "Cette dynamique peut rendre le système plus vulnérable à un choc futur, même modeste.",
      "Les marchés adorent la stabilité, mais ils peuvent aussi être surpris quand elle se retourne."
    ],
    bullets: [
      "La stabilité peut masquer le risque",
      "La confiance excessive fragilise",
      "Le retournement peut être brutal"
    ],
    conclusion: "L’instabilité se prépare souvent dans les périodes où l’on croit le risque disparu.",
    currentQuestion: "Pourquoi les marchés réagissent-ils parfois violemment à un choc apparemment limité après une longue phase calme ?",
    reference: "Référence : Hyman Minsky, Stabilizing an Unstable Economy."
  },
  {
    id: 207,
    module: 7,
    audience: "professionnel",
    category: "Macro",
    emoji: "📗",
    format: "Lecture",
    title: "Demande effective et activité",
    duration: "10 min",
    chart: "line",
    summary: "Comprendre pourquoi l’activité peut ralentir même sans catastrophe visible.",
    problem: "Pourquoi une économie peut-elle tourner au ralenti même si rien ne semble “cassé” ?",
    intro: "Keynes a mis en lumière un point fondamental : l’activité économique dépend de la demande effective, c’est-à-dire de la demande réellement exprimée et anticipée.",
    plan: [
      "Comprendre la demande effective",
      "Voir son rôle dans l’emploi et l’investissement",
      "Relier cela aux anticipations"
    ],
    body: [
      "Si les ménages consomment moins et si les entreprises anticipent moins de débouchés, l’investissement peut ralentir.",
      "L’économie peut alors entrer dans une dynamique de prudence généralisée, sans qu’un choc spectaculaire soit visible.",
      "Les marchés suivent cela de près car les anticipations de croissance et de bénéfices peuvent changer rapidement."
    ],
    bullets: [
      "L’activité dépend de la demande réelle",
      "Les anticipations modifient l’investissement",
      "Le ralentissement peut être progressif"
    ],
    conclusion: "La macro n’est pas seulement affaire de chiffres : elle dépend aussi des anticipations et de la confiance.",
    currentQuestion: "Pourquoi un climat d’attentisme peut-il devenir lui-même un frein à la croissance ?",
    reference: "Référence : John Maynard Keynes, The General Theory of Employment, Interest and Money."
  },
  {
    id: 208,
    module: 8,
    audience: "professionnel",
    category: "Business",
    emoji: "📙",
    format: "Analyse",
    title: "Avantage concurrentiel",
    duration: "10 min",
    chart: "brand",
    summary: "Lire ce qui permet à une entreprise de résister durablement.",
    problem: "Pourquoi certaines entreprises conservent-elles longtemps une position forte ?",
    intro: "L’avantage concurrentiel ne désigne pas seulement une supériorité temporaire. Il désigne la capacité d’une entreprise à défendre durablement sa position.",
    plan: [
      "Définir l’avantage concurrentiel",
      "Voir ses formes principales",
      "Comprendre ses limites"
    ],
    body: [
      "Un avantage peut venir des coûts, de la marque, de la distribution, du réseau, de la technologie, ou d’effets d’échelle.",
      "La vraie question n’est pas seulement “qu’est-ce qui nous rend forts ?”, mais “qu’est-ce qui est difficile à copier ?”.",
      "Un avantage peut s’éroder si le marché change ou si l’entreprise ne l’entretient pas."
    ],
    bullets: [
      "Un avantage doit être défendable",
      "Le difficile à copier est central",
      "Un avantage non entretenu s’érode"
    ],
    conclusion: "L’avantage concurrentiel est une lecture stratégique de la résistance, pas seulement de la performance.",
    currentQuestion: "Pourquoi certaines entreprises dominantes finissent-elles par perdre leur avance ?",
    reference: "Référence : Michael Porter, Competitive Advantage."
  },
  {
    id: 209,
    module: 9,
    audience: "professionnel",
    category: "Investissement",
    emoji: "🧾",
    format: "Note",
    title: "Process d’allocation",
    duration: "10 min",
    chart: "bars",
    summary: "Passer d’idées isolées à une méthode d’allocation suivie.",
    problem: "Pourquoi un bon process est-il souvent plus important qu’une bonne intuition ponctuelle ?",
    intro: "Un process d’allocation donne un cadre. Il évite de dépendre uniquement de l’humeur, de l’actualité ou du biais du moment.",
    plan: [
      "Comprendre ce qu’est un process",
      "Voir ce qu’il protège",
      "Construire un cadre simple"
    ],
    body: [
      "Un process précise comment on choisit, dimensionne, suit et révise une allocation.",
      "Il protège partiellement contre l’improvisation, l’excès de confiance et les réactions émotionnelles.",
      "Un bon process ne garantit pas le succès, mais il améliore la qualité des décisions dans le temps."
    ],
    bullets: [
      "Le process cadre les décisions",
      "Il protège contre certains biais",
      "La régularité vaut souvent mieux que l’impulsion"
    ],
    conclusion: "L’allocation n’est pas seulement une liste de convictions : c’est une méthode appliquée avec constance.",
    currentQuestion: "Pourquoi les investisseurs expérimentés parlent-ils autant de discipline plutôt que d’intuition ?",
    reference: "Repère : allocation, règles, discipline et arbitrage."
  },
  {
    id: 210,
    module: 10,
    audience: "professionnel",
    category: "Marchés",
    emoji: "🔬",
    format: "Analyse",
    title: "Asymétrie d’information",
    duration: "10 min",
    chart: "line",
    summary: "Comprendre ce qu’il se passe quand tout le monde n’a pas la même information.",
    problem: "Pourquoi certains marchés fonctionnent-ils moins bien quand l’information est incomplète ou inégale ?",
    intro: "Dans un marché idéal, l’information serait parfaite et partagée. Dans le réel, ce n’est jamais complètement le cas. Cela crée de l’incertitude, de la prudence et parfois de mauvaises décisions.",
    plan: [
      "Définir l’asymétrie d’information",
      "Voir ses conséquences",
      "Relier cela aux marchés et aux entreprises"
    ],
    body: [
      "Quand certains acteurs savent plus que d’autres, les moins informés deviennent plus prudents ou demandent une compensation.",
      "Cela peut réduire la fluidité du marché et dégrader la qualité des échanges.",
      "Dans la finance comme dans le business, la confiance dépend en partie de la qualité et de la lisibilité de l’information."
    ],
    bullets: [
      "Information inégale = confiance plus fragile",
      "Le marché peut devenir moins fluide",
      "La qualité d’information compte énormément"
    ],
    conclusion: "L’asymétrie d’information rappelle qu’un marché fonctionne aussi grâce à la confiance et à la lisibilité.",
    currentQuestion: "Pourquoi les entreprises cotées accordent-elles autant d’importance à leur communication financière ?",
    reference: "Référence : George Akerlof, The Market for Lemons."
  }
];

function createQuiz(lesson, id, correct, wrong1, wrong2, wrong3, explanation) {
  return {
    id,
    lessonId: lesson.id,
    module: lesson.module,
    audience: lesson.audience,
    emoji: lesson.emoji,
    question: lesson.title,
    options: [correct, wrong1, wrong2, wrong3],
    correctIndex: 0,
    explanation,
    points: lesson.audience === "debutant" ? 35 : lesson.audience === "intermediaire" ? 45 : 60
  };
}

const lessonById = Object.fromEntries(LESSONS.map((l) => [l.id, l]));

const QUIZZES = [
  createQuiz(lessonById[1], 1, "Une part d’entreprise", "Un prêt bancaire", "Une taxe", "Une obligation d’État", "Une action représente une part du capital d’une entreprise."),
  createQuiz(lessonById[2], 2, "Une hausse générale des prix", "Une baisse générale des salaires", "Une hausse des actions uniquement", "Une taxe sur la consommation", "L’inflation correspond à une hausse générale et durable des prix."),
  createQuiz(lessonById[3], 3, "Elles influencent le coût du crédit", "Elles fixent directement le prix des actions", "Elles vendent des voitures", "Elles remplacent les banques commerciales", "Les banques centrales influencent surtout les conditions monétaires et financières."),
  createQuiz(lessonById[4], 4, "Un panier d’actifs coté en bourse", "Une seule action technologique", "Un livret d’épargne", "Un produit sans risque", "Un ETF est un fonds coté qui regroupe plusieurs actifs."),
  createQuiz(lessonById[5], 5, "Comprendre un besoin et une cible", "Faire uniquement de la publicité", "Changer le logo souvent", "Baisser tous les prix", "Le marketing commence par la compréhension du besoin et du public."),
  createQuiz(lessonById[6], 6, "Une promesse et une perception", "Seulement un logo", "Un prix imposé", "Un contrat juridique", "Une marque agit comme un repère mental et une promesse cohérente."),
  createQuiz(lessonById[7], 7, "Les entrées et sorties réelles d’argent", "Le nombre de clients", "Le bénéfice théorique uniquement", "Le budget pub", "Le cashflow mesure les flux réels d’argent."),
  createQuiz(lessonById[8], 8, "Le prix s’ajuste selon l’équilibre entre vendeurs et acheteurs", "Le prix est fixe", "Le prix dépend seulement du logo", "Le prix ne bouge qu’une fois par an", "Offre et demande structurent l’évolution des prix."),
  createQuiz(lessonById[9], 9, "Répartir le risque sur plusieurs expositions", "Mettre tout sur une seule idée", "Éviter toute baisse possible", "Acheter uniquement de la crypto", "Diversifier consiste à ne pas dépendre d’une seule source de risque."),
  createQuiz(lessonById[10], 10, "Une redistribution d’une partie des bénéfices", "Une taxe de marché", "Un coût imposé par la banque centrale", "Un achat d’action supplémentaire", "Le dividende correspond à une redistribution de bénéfices."),

  createQuiz(lessonById[101], 11, "Une correction n’est pas toujours une crise structurelle", "Toute baisse signifie faillite générale", "Une correction n’a jamais de cause", "Une correction est toujours positive", "Une correction peut être un simple réajustement d’anticipations."),
  createQuiz(lessonById[102], 12, "Le marché anticipe souvent avant les données finales", "Le marché ne regarde jamais la macro", "La macro n’a aucun lien avec les actions", "Le sentiment est toujours rationnel", "Le sentiment de marché se construit en partie sur les anticipations."),
  createQuiz(lessonById[103], 13, "Rendement espéré et rendement garanti sont différents", "Plus de rendement signifie zéro risque", "Risque et rendement sont sans lien", "Le rendement suffit à choisir", "Le couple risque/rendement rappelle qu’une performance espérée n’est jamais gratuite."),
  createQuiz(lessonById[104], 14, "Plusieurs lignes peuvent cacher le même risque", "Plusieurs lignes suffisent toujours", "La corrélation n’existe pas", "Diversifier empêche toute baisse", "Une fausse diversification peut laisser le portefeuille très exposé au même facteur."),
  createQuiz(lessonById[105], 15, "Le positionnement clarifie pourquoi choisir la marque", "Le positionnement est seulement un slogan vide", "Le positionnement ne sert qu’au design", "Le positionnement remplace le produit", "Le positionnement répond à la question : pourquoi cette marque plutôt qu’une autre ?"),
  createQuiz(lessonById[106], 16, "L’achat n’est pas purement rationnel", "Le consommateur agit toujours comme une machine", "Les émotions ne comptent jamais", "Le design est sans importance", "Le comportement du consommateur mêle perception, effort, émotion et confiance."),
  createQuiz(lessonById[107], 17, "L’énergie est un coût transversal", "L’énergie ne touche que les particuliers", "L’énergie n’influence pas les entreprises", "L’énergie n’a aucun effet sur les marchés", "L’énergie se diffuse dans beaucoup de coûts économiques."),
  createQuiz(lessonById[108], 18, "Un marché moins liquide peut devenir plus instable", "Liquidité et volatilité sont sans rapport", "La liquidité n’existe pas", "Volatilité = performance", "Une faible liquidité peut amplifier les mouvements."),
  createQuiz(lessonById[109], 19, "Le poids de la crypto dans le portefeuille est crucial", "Plus il y en a, mieux c’est", "La crypto remplace tout", "La volatilité n’a aucune importance", "Le sujet est surtout la taille et le cadre de l’exposition."),
  createQuiz(lessonById[110], 20, "La visibilité seule ne suffit pas à convertir", "Le funnel ne sert à rien", "Le funnel remplace le produit", "La conversion n’a aucun lien avec le parcours", "Le funnel aide à comprendre les étapes qui mènent à l’action."),

  createQuiz(lessonById[201], 21, "Un bon brief hiérarchise l’essentiel", "Un bon brief raconte tout sans trier", "Un brief ignore les actifs", "Un brief répète les réseaux sociaux", "Un market brief utile distingue l’essentiel du bruit."),
  createQuiz(lessonById[202], 22, "Les taux réels influencent l’actualisation des flux futurs", "Ils n’ont aucun rapport avec la valorisation", "Ils remplacent les bénéfices", "Ils s’appliquent seulement aux devises", "Les taux réels pèsent sur la valorisation, surtout quand le futur compte beaucoup."),
  createQuiz(lessonById[203], 23, "Chaque position doit avoir une fonction", "Un portefeuille est juste une accumulation d’idées", "La taille des lignes n’a pas d’importance", "La discipline ne sert à rien", "Un portefeuille cohérent attribue une vraie fonction à chaque exposition."),
  createQuiz(lessonById[204], 24, "Le prix est aussi un signal de valeur", "Le prix dépend uniquement du coût", "Le prix n’influence jamais la perception", "Baisser le prix est toujours la meilleure idée", "Le pricing influence la perception autant qu’il mesure une valeur."),
  createQuiz(lessonById[205], 25, "Le premium repose sur la cohérence", "Le premium est juste un prix élevé", "Le premium ne dépend pas de l’expérience", "Le premium est seulement visuel", "Une marque premium doit aligner promesse, détail et expérience."),
  createQuiz(lessonById[206], 26, "La stabilité prolongée peut encourager l’excès de confiance", "La stabilité supprime le risque", "Le risque n’augmente jamais avec le temps", "Les marchés aiment toujours les surprises", "Minsky montre que la stabilité peut préparer l’instabilité."),
  createQuiz(lessonById[207], 27, "L’activité dépend aussi de la demande réellement exprimée", "L’activité est indépendante de la demande", "La confiance ne compte jamais", "La macro n’a aucun lien avec l’investissement", "La demande effective joue un rôle central dans l’activité."),
  createQuiz(lessonById[208], 28, "L’avantage concurrentiel doit être difficile à copier", "Il suffit d’être connu une semaine", "Il n’a aucun lien avec la stratégie", "Il n’a rien à voir avec la différenciation", "Le cœur d’un avantage durable est sa défendabilité."),
  createQuiz(lessonById[209], 29, "Un process protège partiellement contre l’improvisation", "Le process empêche toute erreur", "Le process remplace la réflexion", "L’intuition suffit toujours", "Un cadre de décision améliore la qualité des choix dans le temps."),
  createQuiz(lessonById[210], 30, "Une information inégale peut fragiliser le marché", "Plus l’information est inégale, mieux le marché fonctionne", "La confiance est inutile", "La communication n’a aucun rôle", "L’asymétrie d’information réduit souvent la fluidité et la confiance.")
];

const QUESTS = [
  // débutant
  { id: 1, audience: "debutant", title: "Valider 1 leçon débutant", reward: 40, type: "lessonTrackCount", track: "debutant", target: 1, unlockLevel: 1 },
  { id: 2, audience: "debutant", title: "Valider 3 leçons débutant", reward: 60, type: "lessonTrackCount", track: "debutant", target: 3, unlockLevel: 1 },
  { id: 3, audience: "debutant", title: "Réussir 1 QCM débutant", reward: 50, type: "quizTrackCount", track: "debutant", target: 1, unlockLevel: 1 },
  { id: 4, audience: "debutant", title: "Réussir 3 QCM débutant", reward: 80, type: "quizTrackCount", track: "debutant", target: 3, unlockLevel: 2 },
  { id: 5, audience: "debutant", title: "Atteindre 150 points", reward: 90, type: "points", target: 150, unlockLevel: 2 },
  { id: 6, audience: "debutant", title: "Lire le module sur l’ETF", reward: 70, type: "lessonSpecific", lessonId: 4, unlockLevel: 2 },
  { id: 7, audience: "debutant", title: "Lire le module sur la diversification", reward: 75, type: "lessonSpecific", lessonId: 9, unlockLevel: 3 },
  { id: 8, audience: "debutant", title: "Atteindre le niveau 4", reward: 100, type: "level", target: 4, unlockLevel: 3 },
  { id: 9, audience: "debutant", title: "Valider 7 leçons débutant", reward: 120, type: "lessonTrackCount", track: "debutant", target: 7, unlockLevel: 4 },
  { id: 10, audience: "debutant", title: "Terminer le parcours débutant", reward: 180, type: "lessonTrackCount", track: "debutant", target: 10, unlockLevel: 5 },

  // intermédiaire
  { id: 11, audience: "intermediaire", title: "Valider 1 leçon intermédiaire", reward: 50, type: "lessonTrackCount", track: "intermediaire", target: 1, unlockLevel: 4 },
  { id: 12, audience: "intermediaire", title: "Réussir 2 QCM intermédiaire", reward: 70, type: "quizTrackCount", track: "intermediaire", target: 2, unlockLevel: 5 },
  { id: 13, audience: "intermediaire", title: "Lire la leçon sur le risque/rendement", reward: 80, type: "lessonSpecific", lessonId: 103, unlockLevel: 5 },
  { id: 14, audience: "intermediaire", title: "Lire la leçon sur la psychologie du consommateur", reward: 85, type: "lessonSpecific", lessonId: 106, unlockLevel: 6 },
  { id: 15, audience: "intermediaire", title: "Atteindre 500 points", reward: 110, type: "points", target: 500, unlockLevel: 6 },
  { id: 16, audience: "intermediaire", title: "Valider 4 leçons intermédiaire", reward: 120, type: "lessonTrackCount", track: "intermediaire", target: 4, unlockLevel: 7 },
  { id: 17, audience: "intermediaire", title: "Réussir 5 QCM intermédiaire", reward: 130, type: "quizTrackCount", track: "intermediaire", target: 5, unlockLevel: 7 },
  { id: 18, audience: "intermediaire", title: "Atteindre le niveau 8", reward: 150, type: "level", target: 8, unlockLevel: 8 },
  { id: 19, audience: "intermediaire", title: "Valider 8 leçons intermédiaire", reward: 170, type: "lessonTrackCount", track: "intermediaire", target: 8, unlockLevel: 9 },
  { id: 20, audience: "intermediaire", title: "Terminer le parcours intermédiaire", reward: 220, type: "lessonTrackCount", track: "intermediaire", target: 10, unlockLevel: 10 },

  // pro
  { id: 21, audience: "professionnel", title: "Valider 1 leçon professionnelle", reward: 60, type: "lessonTrackCount", track: "professionnel", target: 1, unlockLevel: 8 },
  { id: 22, audience: "professionnel", title: "Réussir 2 QCM professionnels", reward: 90, type: "quizTrackCount", track: "professionnel", target: 2, unlockLevel: 9 },
  { id: 23, audience: "professionnel", title: "Lire la leçon sur les taux réels", reward: 100, type: "lessonSpecific", lessonId: 202, unlockLevel: 10 },
  { id: 24, audience: "professionnel", title: "Lire la leçon sur l’avantage concurrentiel", reward: 110, type: "lessonSpecific", lessonId: 208, unlockLevel: 10 },
  { id: 25, audience: "professionnel", title: "Atteindre 900 points", reward: 140, type: "points", target: 900, unlockLevel: 11 },
  { id: 26, audience: "professionnel", title: "Valider 4 leçons professionnelles", reward: 150, type: "lessonTrackCount", track: "professionnel", target: 4, unlockLevel: 12 },
  { id: 27, audience: "professionnel", title: "Réussir 5 QCM professionnels", reward: 170, type: "quizTrackCount", track: "professionnel", target: 5, unlockLevel: 12 },
  { id: 28, audience: "professionnel", title: "Atteindre le niveau 12", reward: 180, type: "level", target: 12, unlockLevel: 12 },
  { id: 29, audience: "professionnel", title: "Valider 8 leçons professionnelles", reward: 210, type: "lessonTrackCount", track: "professionnel", target: 8, unlockLevel: 13 },
  { id: 30, audience: "professionnel", title: "Terminer le parcours professionnel", reward: 260, type: "lessonTrackCount", track: "professionnel", target: 10, unlockLevel: 14 }
];

const REWARDS = Array.from({ length: 30 }, (_, i) => {
  const level = i + 1;
  const pool = ["⭐", "🎯", "🏅", "🎁", "👑", "💎", "🚀", "🧠", "📈", "🔥"];
  const names = [
    "Explorateur",
    "Curieux",
    "Analyste",
    "Stratège",
    "Architecte",
    "Observateur",
    "Pulse Reader",
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

const lessonsById = Object.fromEntries(LESSONS.map((l) => [l.id, l]));
let progress = loadProgress();
let lessonAudienceFilter = "recommended";
let lessonCategoryFilter = "all";
let quizAudienceFilter = "recommended";
let ratingTimerStarted = false;

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

function getCurrentTrack() {
  return progress.selectedTrack || "debutant";
}

function getTrackLabel(track) {
  return TRACKS[track]?.label || "Débutant";
}

function getTrackEmoji(track) {
  return TRACKS[track]?.emoji || "🌱";
}

function levelFromPoints(points) {
  return Math.min(30, Math.floor(points / 120) + 1);
}

function nextLevelAt(level) {
  return level >= 30 ? 3600 : level * 120;
}

function countLessonsInTrack(track) {
  return progress.completedLessons
    .map((id) => lessonsById[id])
    .filter(Boolean)
    .filter((lesson) => lesson.audience === track).length;
}

function countQuizzesInTrack(track) {
  return progress.solvedQuizzes
    .map((id) => QUIZZES.find((q) => q.id === id))
    .filter(Boolean)
    .filter((quiz) => quiz.audience === track).length;
}

function getRecommendedLessons() {
  const track = getCurrentTrack();
  const trackLessons = LESSONS.filter((lesson) => lesson.audience === track);
  const completedInTrack = countLessonsInTrack(track);
  const unlockedModule = Math.min(10, Math.max(1, completedInTrack + 1));
  return trackLessons.filter((lesson) => lesson.module <= unlockedModule);
}

function getVisibleLessons() {
  let base;

  if (lessonAudienceFilter === "recommended") {
    base = getRecommendedLessons();
  } else if (lessonAudienceFilter === "all") {
    base = LESSONS;
  } else {
    base = LESSONS.filter((lesson) => lesson.audience === lessonAudienceFilter);
  }

  if (lessonCategoryFilter !== "all") {
    base = base.filter((lesson) => lesson.category === lessonCategoryFilter);
  }

  return base.slice(0, progress.lessonsVisible);
}

function getVisibleQuizzes() {
  let base;

  if (quizAudienceFilter === "recommended") {
    const track = getCurrentTrack();
    const completedInTrack = countLessonsInTrack(track);
    const unlockedModule = Math.min(10, Math.max(1, completedInTrack + 1));
    base = QUIZZES.filter((quiz) => quiz.audience === track && quiz.module <= unlockedModule);
  } else if (quizAudienceFilter === "all") {
    base = QUIZZES;
  } else {
    base = QUIZZES.filter((quiz) => quiz.audience === quizAudienceFilter);
  }

  return base.slice(0, progress.quizzesVisible);
}

function getVisibleQuests() {
  const track = getCurrentTrack();
  const base = QUESTS.filter((quest) => quest.audience === track || quest.audience === "all");
  return base.slice(0, progress.questsVisible);
}

function getVisibleRewards() {
  return REWARDS.slice(0, progress.rewardsVisible);
}

function isQuestUnlocked(quest) {
  return levelFromPoints(progress.points) >= quest.unlockLevel;
}

function isQuestCompleted(quest) {
  switch (quest.type) {
    case "lessonTrackCount":
      return countLessonsInTrack(quest.track) >= quest.target;
    case "quizTrackCount":
      return countQuizzesInTrack(quest.track) >= quest.target;
    case "points":
      return progress.points >= quest.target;
    case "level":
      return levelFromPoints(progress.points) >= quest.target;
    case "lessonSpecific":
      return progress.completedLessons.includes(quest.lessonId);
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
  const track = getCurrentTrack();

  document.getElementById("trackStat").textContent = getTrackLabel(track);
  document.getElementById("levelStat").textContent = level;
  document.getElementById("pointsStat").textContent = progress.points;
  document.getElementById("questsStat").textContent = progress.claimedQuests.length;
  document.getElementById("lessonsStatMini").textContent = progress.completedLessons.length;
  document.getElementById("quizStatMini").textContent = progress.solvedQuizzes.length;
  document.getElementById("progressText").textContent = `${progress.points} / ${nextTarget}`;
  document.getElementById("progressBarFill").style.width = `${fill}%`;
  document.getElementById("heroTrackBadge").textContent = `${getTrackEmoji(track)} ${getTrackLabel(track)}`;
  document.getElementById("heroRecommendationTitle").textContent = `Parcours ${getTrackLabel(track)}`;
  document.getElementById("heroRecommendationText").textContent = TRACKS[track].description;
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

  grid.innerHTML = visible.map((lesson) => {
    const done = progress.completedLessons.includes(lesson.id);
    const colorClass =
      lesson.audience === "debutant"
        ? "gradient-green"
        : lesson.audience === "intermediaire"
        ? "gradient-cyan"
        : "gradient-violet";

    const showLongButton =
      lesson.audience !== "debutant" || lesson.module >= 5;

    return `
      <article class="lesson-card" id="lesson-${lesson.id}">
        <div class="lesson-top">
          <div class="lesson-icon ${colorClass}">${lesson.emoji}</div>
          <span class="badge-soft">${lesson.duration}</span>
        </div>

        <div class="lesson-meta">
          <span class="lesson-category">${lesson.category}</span>
          <span class="badge-mini">${getTrackLabel(lesson.audience)}</span>
          <span class="badge-mini">${lesson.format}</span>
          <span class="badge-mini">Module ${lesson.module}</span>
        </div>

        <h3>${lesson.title}</h3>
        <p class="lesson-summary">${lesson.summary}</p>

        <div class="lesson-detail-title">Problématique</div>
        <p class="lesson-detail-text">${lesson.problem}</p>

        <div class="chart-box">
          ${renderChart(lesson.chart)}
        </div>

        <ul class="lesson-points">
          ${lesson.bullets.map((p) => `<li>${p}</li>`).join("")}
        </ul>

        <div class="lesson-actions">
          <span class="badge-level">${done ? "Validée" : "À lire"}</span>
          <div class="inline-actions">
            ${showLongButton ? `<button class="lesson-link-btn" onclick="openLessonModal(${lesson.id})">Voir plus</button>` : ""}
            <button
              class="validate-btn ${done ? "done" : ""}"
              onclick="completeLesson(${lesson.id})"
            >
              ${done ? "Terminée +25" : "Valider la leçon"}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderQuizzes() {
  const grid = document.getElementById("quizGrid");
  const visible = getVisibleQuizzes();

  grid.innerHTML = visible.map((quiz) => {
    const solved = progress.solvedQuizzes.includes(quiz.id);
    const lesson = lessonsById[quiz.lessonId];

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
          <span class="badge-mini">Module ${quiz.module}</span>
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

        ${solved ? `<div class="quest-status done">QCM déjà validé : points déjà gagnés</div>` : ""}
      </article>
    `;
  }).join("");

  attachQuizOptionEvents();
}

function renderQuests() {
  const grid = document.getElementById("questsGrid");
  const visible = getVisibleQuests();

  grid.innerHTML = visible.map((quest) => {
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
  }).join("");
}

function renderRewards() {
  const grid = document.getElementById("rewardsGrid");
  const level = levelFromPoints(progress.points);
  const visible = getVisibleRewards();

  grid.innerHTML = visible.map((reward) => {
    const unlocked = level >= reward.level;

    return `
      <article class="reward-card ${unlocked ? "unlocked" : "locked"}">
        <div class="reward-icon">${reward.icon}</div>
        <div class="quest-status">Niveau ${reward.level}</div>
        <h3>${reward.title}</h3>
        <p class="reward-text">${unlocked ? "Débloquée" : "À débloquer"}</p>
      </article>
    `;
  }).join("");
}

function attachQuizOptionEvents() {
  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      const quizId = Number(button.dataset.quizId);
      document.querySelectorAll(`.quiz-option[data-quiz-id="${quizId}"]`)
        .forEach((btn) => btn.classList.remove("selected"));

      button.classList.add("selected");
    });
  });
}

function openLessonModal(lessonId) {
  const lesson = lessonsById[lessonId];
  if (!lesson) return;

  document.getElementById("lessonModalKicker").textContent = "Leçon détaillée";
  document.getElementById("lessonModalTitle").textContent = lesson.title;
  document.getElementById("lessonModalTrack").textContent = getTrackLabel(lesson.audience);
  document.getElementById("lessonModalCategory").textContent = lesson.category;
  document.getElementById("lessonModalFormat").textContent = lesson.format;
  document.getElementById("lessonModalProblem").textContent = lesson.problem;
  document.getElementById("lessonModalIntro").textContent = lesson.intro;

  const planEl = document.getElementById("lessonModalPlan");
  planEl.innerHTML = lesson.plan.map((item) => `<li>${item}</li>`).join("");

  const bodyEl = document.getElementById("lessonModalBody");
  bodyEl.innerHTML = lesson.body.map((p) => `<p>${p}</p>`).join("");

  document.getElementById("lessonModalConclusion").textContent = lesson.conclusion;
  document.getElementById("lessonModalCurrentQuestion").textContent = lesson.currentQuestion;

  document.getElementById("lessonModal").classList.add("visible");
}

function closeLessonModal() {
  document.getElementById("lessonModal").classList.remove("visible");
}

function completeLesson(lessonId) {
  if (progress.completedLessons.includes(lessonId)) return;

  const previousLevel = levelFromPoints(progress.points);
  const lesson = lessonsById[lessonId];

  progress.completedLessons.push(lessonId);
  progress.points += 25;
  saveProgress();
  rerenderAll();

  showToast(`${lesson.emoji} Leçon validée • +25 points`);
  checkLevelUp(previousLevel, lesson);
}

function submitQuiz(quizId) {
  const quiz = QUIZZES.find((q) => q.id === quizId);
  const lesson = lessonsById[quiz.lessonId];
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
            Je te conseille de revoir la leçon liée
          </button>
        </div>
      </div>
    `;

    showOverlay({
      emoji: lesson?.emoji || "❌",
      kicker: "Réponse incorrecte",
      title: "Je te conseille de revoir la leçon",
      text: `La question était liée à « ${lesson?.title || "cette leçon"} ». Un petit retour dessus t’aidera à consolider la notion plus sereinement.`,
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

    showToast(`${lesson.emoji} Bonne réponse • +${quiz.points} points`);

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
      text: "Ce QCM a déjà été comptabilisé auparavant, donc il n’ajoute pas de nouveaux points cette fois-ci.",
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
  const quest = QUESTS.find((q) => q.id === questId);
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

  showToast(`🎁 Quête terminée • +${quest.reward} points`);

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

  progress.lessonsVisible = 30;
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

  const reward = REWARDS.find((r) => r.level === currentLevel);

  if (!progress.seenLevelRewards.includes(currentLevel)) {
    progress.seenLevelRewards.push(currentLevel);
    saveProgress();
  }

  showToast(`${lesson?.emoji || reward?.icon || "🏆"} Niveau ${currentLevel} atteint`);

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

function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-hide");
    setTimeout(() => toast.remove(), 260);
  }, 2600);
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
      progress.lessonsVisible = 3;
      progress.quizzesVisible = 3;
      progress.questsVisible = 3;
      progress.rewardsVisible = 6;
      saveProgress();
      overlay.classList.remove("visible");
      rerenderAll();
      startRatingTimer();
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
      progress.lessonsVisible = 3;
      renderLessons();
    });
  });

  document.querySelectorAll("[data-category-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-category-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      lessonCategoryFilter = btn.dataset.categoryFilter;
      progress.lessonsVisible = 3;
      renderLessons();
    });
  });

  document.querySelectorAll("[data-quiz-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-quiz-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      quizAudienceFilter = btn.dataset.quizFilter;
      progress.quizzesVisible = 3;
      renderQuizzes();
    });
  });
}

function initShowMore() {
  document.getElementById("showMoreLessonsBtn").addEventListener("click", () => {
    progress.lessonsVisible += 3;
    renderLessons();
  });

  document.getElementById("showMoreQuizzesBtn").addEventListener("click", () => {
    progress.quizzesVisible += 3;
    renderQuizzes();
  });

  document.getElementById("showMoreQuestsBtn").addEventListener("click", () => {
    progress.questsVisible += 3;
    renderQuests();
  });

  document.getElementById("showMoreRewardsBtn").addEventListener("click", () => {
    progress.rewardsVisible += 6;
    renderRewards();
  });
}

function startRatingTimer() {
  if (ratingTimerStarted) return;
  if (localStorage.getItem(RATING_STORAGE_KEY) === "done") return;

  ratingTimerStarted = true;

  setTimeout(() => {
    if (localStorage.getItem(RATING_STORAGE_KEY) === "done") return;
    document.getElementById("ratingOverlay").classList.add("visible");
  }, 180000);
}

function initRating() {
  document.querySelectorAll(".star-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const rating = Number(btn.dataset.rating);
      document.querySelectorAll(".star-btn").forEach((star) => {
        star.classList.toggle("active", Number(star.dataset.rating) <= rating);
      });

      localStorage.setItem(RATING_STORAGE_KEY, "done");

      setTimeout(() => {
        document.getElementById("ratingOverlay").classList.remove("visible");
        showOverlay({
          emoji: "⭐",
          kicker: "Merci",
          title: "Merci pour ton retour",
          text: `Ton avis ${rating}/5 a bien été pris en compte.`,
          actions: [
            {
              label: "Continuer",
              primary: true,
              onClick: closeOverlay
            }
          ]
        });
      }, 450);
    });
  });

  document.getElementById("closeRatingBtn").addEventListener("click", () => {
    document.getElementById("ratingOverlay").classList.remove("visible");
  });
}

function initModals() {
  document.getElementById("closeLessonModal").addEventListener("click", closeLessonModal);

  document.getElementById("lessonModal").addEventListener("click", (e) => {
    if (e.target.id === "lessonModal") closeLessonModal();
  });

  document.getElementById("resultOverlay").addEventListener("click", (e) => {
    if (e.target.id === "resultOverlay") closeOverlay();
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

initOnboarding();
initFilters();
initShowMore();
initRating();
initModals();
rerenderAll();

if (progress.selectedTrack) {
  startRatingTimer();
}
