/**
 * Données centralisées du portfolio.
 * Toutes les informations personnelles, projets, compétences, etc.
 * sont regroupées ici pour faciliter la maintenance.
 */

export const profile = {
  name: 'Clément Bourgeois',
  handle: '@clembourgeois',
  initials: 'CB',
  photo: '/portfolio/photo.jpg',
  title: 'Développeur Full Stack Angular / .NET Core',
  bio: [
    'Développeur Full Stack Angular / .NET Core',
    'Re-architecture d\'applications industrielles critiques chez Paul Wurth (SMS Group).',
    'En recherche de CDI Full Stack.'
  ],
  location: 'Metz (57), France',
  availability: 'Disponible CDI',
  joinedDate: 'Inscrit en octobre 2024',
  email: 'clement.bou57@gmail.com',
  phone: '07 81 50 57 37',
  mobility: 'Grand Est, Luxembourg, Bordeaux',
  stats: {
    projects: 4,
    skills: 20,
    formations: 3
  }
}

export const posts = [
  {
    id: 0,
    time: 'Mars 2026',
    verified: true,
    pinned: true,
    text: `Je suis <strong>Clément Bourgeois</strong>, développeur Full Stack <span class="tag">Angular</span> / <span class="tag">.NET Core</span>, basé à Metz.

Je sors d'un stage long de 11 mois chez <span class="tag">Paul Wurth</span> (<span class="tag">SMS Group</span>) au Luxembourg, un industriel qui conçoit des équipements pour les hauts fourneaux sidérurgiques.

Pendant cette mission, j'ai re-architecturé une application industrielle critique depuis <span class="tag">Visual Basic 6</span> vers <span class="tag">Angular 18</span> + <span class="tag">C#</span> / <span class="tag">.NET Core</span>, avec un pipeline <span class="tag">CI/CD Azure DevOps</span> et un déploiement <span class="tag">Docker</span> sous <span class="tag">Linux</span>. L'application est aujourd'hui en opération sur plusieurs installations de haut fourneau dans le monde.

Avant ça, j'ai aussi développé un moteur de visualisation 2D industrielle en <span class="tag">C#</span> avec <span class="tag">SkiaSharp</span> et des données <span class="tag">VTK</span>, intégré dans <span class="tag">Grafana</span>.

Je recherche un <strong>CDI Full Stack</strong> (Angular / .NET Core ou Java / Spring Boot) au sein d'une équipe expérimentée. Mobilité : Grand Est, Luxembourg, Bordeaux.`,
    media: null,
    replies: 0,
    retweets: 0,
    likes: 0,
    liked: false
  },
  {
    id: 1,
    time: 'Oct 2024 — Sept 2025',
    verified: true,
    pinned: false,
    text: `<strong>Re-architecture de "Burden Optimisation"</strong> — application de la suite logicielle BFXpert chez <span class="tag">Paul Wurth</span> (SMS Group), Luxembourg.

L'application existante était écrite en <span class="tag">Visual Basic 6</span> et servait à optimiser le choix et la quantité de matières premières à charger dans un haut fourneau sidérurgique, en appliquant des contraintes liées au coût et aux paramètres chimiques de la recette de chargement.

Ma mission : re-architecturer intégralement cette application vers une stack moderne <span class="tag">Angular 18</span> (frontend) + <span class="tag">.NET Core / C#</span> (API backend).

Ce que j'ai réalisé :
— Analyse fonctionnelle de l'application VB6 existante, cartographie de toutes les fonctionnalités à migrer
— Développement des composants Angular 18 en TypeScript : interfaces de visualisation des données process, écrans de configuration des recettes de chargement
— Conception et développement de l'API REST en C# / .NET Core : endpoints pour la communication entre le frontend et les sources de données industrielles
— Mise en place d'un pipeline <span class="tag">CI/CD sous Azure DevOps</span> avec exécution automatisée de tests unitaires
— Déploiement en <span class="tag">Docker sous Linux</span> (environnement de test et de production)
— Travail en binôme avec un développeur senior, gestion de version avec Git/GitHub
— Tests fonctionnels et validation des données process en conditions réelles sur le haut fourneau`,
    media: {
      label: 'Paul Wurth (SMS Group) · Stage long · 11 mois',
      title: 'Burden Optimisation — Suite BFXpert',
      description: 'Refonte complète d\'une application industrielle critique d\'optimisation du chargement de hauts fourneaux. Passage d\'une architecture monolithique VB6 vers une architecture web moderne découplée frontend/backend, avec pipeline CI/CD et conteneurisation.',
      tags: [
        { name: 'Angular 18', main: true },
        { name: '.NET Core / C#', main: true },
        { name: 'TypeScript' },
        { name: 'API REST' },
        { name: 'Azure DevOps' },
        { name: 'CI/CD' },
        { name: 'Docker' },
        { name: 'Linux' },
        { name: 'Git' }
      ],
      result: 'En opération sur plusieurs installations de haut fourneau dans le monde'
    },
    replies: 12,
    retweets: 45,
    likes: 128,
    liked: false
  },
  {
    id: 2,
    time: 'Sept 2024',
    verified: true,
    pinned: false,
    text: `<strong>Composant arborescent interactif</strong> — stage frontend chez <span class="tag">Paul Wurth</span> (SMS Group), Luxembourg.

Dans le cadre du projet BFXpert, les opérateurs de hauts fourneaux avaient besoin de parcourir et consulter des centaines de paramètres de configuration du système, organisés de manière hiérarchique.

Ce que j'ai réalisé :
— Analyse des besoins fonctionnels avec l'équipe projet pour définir la structure de l'arborescence et les interactions attendues
— Développement du composant tree view en <span class="tag">Angular 18</span> / <span class="tag">TypeScript</span> : gestion des états d'ouverture/fermeture de chaque nœud, sélection, recherche dans l'arbre
— Implémentation des appels <span class="tag">API REST</span> : GET pour la lecture des paramètres et de leur valeur, POST pour la sauvegarde des modifications faites par l'opérateur
— Intégration dans l'interface existante du projet BFXpert
— Validation avec les utilisateurs finaux (équipe opérationnelle du haut fourneau)`,
    media: {
      label: 'Paul Wurth (SMS Group) · Stage Frontend · 1 mois',
      title: 'Composant Tree View — Navigation dans les paramètres de configuration',
      description: 'Composant Angular 18 interactif permettant aux opérateurs de naviguer dans l\'intégralité des paramètres de configuration d\'un haut fourneau. Affichage dynamique des valeurs, édition et persistance via API REST. Gestion de composants à états complexes.',
      tags: [
        { name: 'Angular 18', main: true },
        { name: 'TypeScript' },
        { name: 'API REST' },
        { name: 'Gestion d\'état' },
        { name: 'UX opérateur' }
      ],
      result: 'Composant livré, intégré et validé en production par l\'équipe opérationnelle'
    },
    replies: 5,
    retweets: 18,
    likes: 67,
    liked: false
  },
  {
    id: 3,
    time: 'Avr — Juil 2024',
    verified: true,
    pinned: false,
    text: `<strong>Visualisation 2D industrielle et intégration Grafana</strong> — stage backend chez <span class="tag">Paul Wurth</span> (SMS Group), Luxembourg.

Le système de supervision des hauts fourneaux nécessitait un outil pour visualiser en temps réel le profil de charge du haut fourneau. L'équipe utilisait <span class="tag">Grafana</span> comme plateforme de monitoring et souhaitait intégrer ces visualisations directement dans leurs tableaux de bord.

Ce que j'ai réalisé :
— Prise en main de la bibliothèque <span class="tag">SkiaSharp</span> (C#) pour le rendu graphique 2D
— Développement d'une représentation graphique multi-valeurs du profil de charge du haut fourneau à partir de données au format <span class="tag">VTK</span>
— Conception de l'algorithme de génération de schémas <span class="tag">SVG</span> dynamiques depuis les structures de données JSON décrivant les équipements industriels
— Développement d'un endpoint <span class="tag">HTTP REST</span> en .NET Core exposant les rendus pour consommation par Grafana
— Tests d'intégration avec les tableaux de bord Grafana et validation des rendus en conditions de monitoring réel

Première expérience significative en développement backend <span class="tag">C# / .NET Core</span> dans un contexte industriel critique.`,
    media: {
      label: 'Paul Wurth (SMS Group) · Stage Backend · 4 mois',
      title: 'Moteur de visualisation 2D — Profil de charge haut fourneau',
      description: 'Représentation graphique multi-valeurs du profil de charge d\'un haut fourneau sidérurgique, générée à partir de données VTK. Moteur de rendu 2D temps réel avec SkiaSharp, export SVG automatique, et endpoint HTTP REST pour intégration directe dans les tableaux de bord Grafana de monitoring industriel.',
      tags: [
        { name: 'C# / .NET Core', main: true },
        { name: 'SkiaSharp' },
        { name: 'VTK' },
        { name: 'SVG' },
        { name: 'Grafana' },
        { name: 'API REST' },
        { name: 'JSON' }
      ],
      result: 'En opération sur plusieurs installations de haut fourneau — intégré dans Grafana'
    },
    replies: 8,
    retweets: 23,
    likes: 89,
    liked: false
  },
  {
    id: 4,
    time: 'Mars — Mai 2023',
    verified: true,
    pinned: false,
    text: `<strong>Documentation des fonctions d'anonymisation de données</strong> — stage chez <span class="tag">efluid SAS</span>, Metz.

efluid est un éditeur de logiciels de gestion pour les collectivités et les entreprises de distribution d'énergie.

Ce que j'ai réalisé :
— Documentation sur <span class="tag">Wiki Doc</span> des fonctions Java d'anonymisation de données clients existantes dans l'application
— Lecture et analyse du code source Java pour identifier les méthodes d'anonymisation utilisées
— Création d'un tableau de référence <span class="tag">MySQL</span> répertoriant les tables concernées et les règles appliquées
— Manipulation de données <span class="tag">JSON</span> et scripts <span class="tag">AWK</span> en équipe

Premier stage en entreprise, principalement orienté documentation et compréhension de code existant.`,
    media: {
      label: 'efluid SAS · Stage · 3 mois',
      title: 'Documentation des mécanismes d\'anonymisation',
      description: 'Rédaction de documentation Wiki Doc sur les fonctions Java d\'anonymisation de données clients. Lecture de code source, création d\'un tableau de référence MySQL. Stage orienté documentation et analyse de l\'existant.',
      tags: [
        { name: 'Wiki Doc' },
        { name: 'Java (lecture)' },
        { name: 'MySQL' },
        { name: 'JSON' },
        { name: 'AWK' }
      ],
      result: 'Documentation livrée sur Wiki Doc'
    },
    replies: 3,
    retweets: 8,
    likes: 34,
    liked: false
  }
]

export const skillCategories = [
  {
    name: 'Frontend',
    handle: 'frontend',
    icon: '<>',
    color: '',
    description: 'Technologies frontend utilisées en production et en formation.',
    skills: [
      { name: 'Angular 18', context: 'Burden Optimisation + Tree View — Paul Wurth', pro: true },
      { name: 'TypeScript', context: 'Burden Optimisation + Tree View — Paul Wurth', pro: true },
      { name: 'HTML / CSS3', context: 'Tous les projets frontend — Paul Wurth + formation MNS', pro: true },
      { name: 'JavaScript', context: 'Projets de formation MNS (QuizMaster, etc.)', pro: false },
      { name: 'Vue.js', context: 'Portfolio personnel (ce site) + projets MNS', pro: false },
      { name: 'React', context: 'Projets de formation MNS', pro: false }
    ]
  },
  {
    name: 'Backend',
    handle: 'backend',
    icon: '{}',
    color: 'green',
    description: 'Stack backend utilisée en entreprise et en formation.',
    skills: [
      { name: '.NET Core / C#', context: 'API Burden Optimisation + Visualisation 2D — Paul Wurth', pro: true },
      { name: 'API REST', context: 'Tous les projets Paul Wurth (endpoints Angular ↔ .NET Core)', pro: true },
      { name: 'Java', context: 'Formation MNS + lecture de code chez efluid', pro: false },
      { name: 'Spring Boot', context: 'Projets de formation MNS', pro: false },
      { name: 'Node.js / Express', context: 'Projets de formation MNS (QuizMaster)', pro: false }
    ]
  },
  {
    name: 'DevOps & Outils',
    handle: 'devops',
    icon: 'CI',
    color: 'purple',
    description: 'Pipeline, conteneurisation et outils utilisés en contexte professionnel.',
    skills: [
      { name: 'Azure DevOps', context: 'Pipeline CI/CD Burden Optimisation — Paul Wurth', pro: true },
      { name: 'Docker / Linux', context: 'Environnement de test et production — Paul Wurth', pro: true },
      { name: 'Git / GitHub', context: 'Tous les projets Paul Wurth + efluid + formation', pro: true },
      { name: 'Grafana', context: 'Intégration visualisation 2D dans monitoring — Paul Wurth', pro: true },
      { name: 'SkiaSharp', context: 'Rendu 2D profil de charge haut fourneau — Paul Wurth', pro: true }
    ]
  },
  {
    name: 'Données & BDD',
    handle: 'data',
    icon: 'DB',
    color: 'orange',
    description: 'Bases de données et formats de données manipulés.',
    skills: [
      { name: 'SQL / MySQL', context: 'Tableaux de référence anonymisation — efluid SAS', pro: true },
      { name: 'JSON', context: 'Schémas équipements industriels — Paul Wurth + efluid', pro: true },
      { name: 'VTK', context: 'Données profil de charge haut fourneau — Paul Wurth', pro: true },
      { name: 'SVG', context: 'Génération de schémas dynamiques — Paul Wurth', pro: true }
    ]
  },
  {
    name: 'Méthodologies',
    handle: 'methods',
    icon: 'AG',
    color: '',
    description: 'Approches appliquées en entreprise et en formation.',
    skills: [
      { name: 'Agile / Scrum', context: 'Organisation du travail en équipe — Paul Wurth', pro: true },
      { name: 'CI/CD', context: 'Pipeline Azure DevOps avec tests automatisés — Paul Wurth', pro: true },
      { name: 'Architecture logicielle', context: 'Re-architecture VB6 vers Angular + .NET Core — Paul Wurth', pro: true },
      { name: 'POO', context: 'C#, Java, TypeScript — tous les projets', pro: true },
      { name: 'UX/UI', context: 'Interfaces opérateurs haut fourneau — Paul Wurth + formation MNS', pro: true },
      { name: 'Accessibilité', context: 'Formation MNS (WCAG)', pro: false }
    ]
  }
]

export const experiences = [
  {
    company: 'Paul Wurth (SMS Group)',
    handle: 'paulwurth',
    icon: 'PW',
    color: '',
    title: 'Stagiaire Développeur Full Stack',
    location: 'Luxembourg',
    period: 'Oct 2024 — Sept 2025',
    description: 'Re-architecture de "Burden Optimisation" (VB6 vers Angular 18 + .NET Core / C#). Application d\'optimisation du chargement de hauts fourneaux. Pipeline CI/CD Azure DevOps, déploiement Docker sous Linux. En opération sur plusieurs installations.',
    tags: ['Angular 18', 'TypeScript', '.NET Core', 'C#', 'Azure DevOps', 'Docker', 'Linux']
  },
  {
    company: 'Paul Wurth (SMS Group)',
    handle: 'paulwurth',
    icon: 'PW',
    color: '',
    title: 'Stagiaire Développeur Frontend',
    location: 'Luxembourg',
    period: 'Sept 2024',
    description: 'Composant arborescent interactif Angular 18 pour la navigation dans les paramètres de configuration du haut fourneau. Affichage dynamique et sauvegarde via API REST.',
    tags: ['Angular 18', 'TypeScript', 'API REST']
  },
  {
    company: 'Paul Wurth (SMS Group)',
    handle: 'paulwurth',
    icon: 'PW',
    color: '',
    title: 'Stagiaire Développeur Backend',
    location: 'Luxembourg',
    period: 'Avr — Juil 2024',
    description: 'Représentation graphique multi-valeurs du profil de charge d\'un haut fourneau à partir de données VTK. Rendu 2D avec SkiaSharp, génération SVG, endpoint REST pour Grafana.',
    tags: ['C# / .NET Core', 'SkiaSharp', 'VTK', 'SVG', 'Grafana']
  },
  {
    company: 'efluid SAS',
    handle: 'efluid',
    icon: 'EF',
    color: 'green',
    title: 'Stagiaire',
    location: 'Metz',
    period: 'Mars — Mai 2023',
    description: 'Documentation Wiki Doc des fonctions Java d\'anonymisation de données clients. Lecture de code source, tableau de référence MySQL, manipulation JSON/AWK en équipe.',
    tags: ['Wiki Doc', 'Java (lecture)', 'MySQL', 'JSON']
  }
]

export const formations = [
  {
    school: 'Metz Numeric School',
    handle: 'mns_metz',
    icon: 'MNS',
    color: 'orange',
    period: '2022 — 2025',
    title: 'RNCP Niv. 6 — Développeur Full Stack',
    description: '24/26 compétences validées. POO Java/JS, UX/UI, architecture logicielle, Agile, DevOps, accessibilité. Code RNCP 38606.'
  },
  {
    school: 'LYCOM Metz',
    handle: 'lycommetz',
    icon: 'LY',
    color: 'purple',
    period: '2020 — 2022',
    title: 'BTS SN-EC — Systèmes Numériques',
    description: 'Option Électronique et Communication. Projet 150h : solution de désinfection UV automatisée pour équipements électroniques.'
  },
  {
    school: 'LYCOM Metz',
    handle: 'lycommetz',
    icon: 'LY',
    color: 'purple',
    period: '2018 — 2020',
    title: 'BAC STI2D — Sciences et Technologies',
    description: 'Spécialité Systèmes d\'Information et Numérique (SIN).'
  }
]

export const trending = [
  { category: 'Frontend · Principal', name: 'Angular 18' },
  { category: 'Backend · Principal', name: '.NET Core / C#' },
  { category: 'DevOps · Pipeline', name: 'Azure DevOps + Docker' },
  { category: 'Backend · Alternatif', name: 'Java / Spring Boot' },
  { category: 'Data · Visualisation', name: 'SkiaSharp + VTK' }
]

export const companies = [
  { name: 'Paul Wurth', role: 'Stage long · Oct 2024 - Sept 2025', icon: 'PW', color: '#1d9bf0', postId: 1 },
  { name: 'Paul Wurth', role: 'Stage Frontend · Sept 2024', icon: 'PW', color: '#1d9bf0', postId: 2 },
  { name: 'Paul Wurth', role: 'Stage Backend · Avr-Juil 2024', icon: 'PW', color: '#1d9bf0', postId: 3 },
  { name: 'efluid SAS', role: 'Stage · Mars-Mai 2023', icon: 'EF', color: '#00ba7c', postId: 4 }
]
