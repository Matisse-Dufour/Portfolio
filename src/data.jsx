export const portfolioData = {
  // ========== SECTION 1: PRÉSENTATION PROFESSIONNELLE ==========
  hero: {
    title: "Matisse Dufour",
    subtitle: "Développeur R&D | Étudiant en 3ème année de BUT Informatique | Alternant chez Vallourec",
    tagline: "Passionné par l'informatique",
    cta1: "Voir mon expérience",
    cta2: "Télécharger mon CV",
  },

  about: {
    title: "À Propos",
    intro: "Bienvenue sur mon portfolio !",
    bio: [
      "Je suis Matisse Dufour, étudiant en 3ème année de BUT Informatique à l'IUT de Lille. Passionné par l'informatique depuis mon plus jeune âge, j'ai décidé de poursuivre mes études dans ce domaine pour approfondir mes connaissances et développer des compétences techniques.",
      "En alternance chez Vallourec dans l'équipe One R&D au VRCF à Aulnoyes-Aymeries, j'ai l'opportunité de mettre en pratique les concepts appris en cours, d'autres appris par mes propres moyens et de découvrir le monde professionnel de la Recherche & Développement.",
      "Ce portfolio reflète mon évolution, mes compétences techniques et comportementales, ainsi que ma réflexion sur mes expériences professionnelles."
    ],
    professionalIdentity: "Développeur polyvalent avec une spécialisation en R&D",
    targetRole: "Ingénieur  / Développeur R&D",
    shortTermGoals: "Contribuer à des projets d'innovation, valider ma progression technique et devenir ingénieur informatique.",
  },

  // ========== SECTION 2: EXPÉRIENCE EN ALTERNANCE ==========
  experience: [
    {
      title: "Alternant R&D - Développeur Logiciel",
      company: "Vallourec",
      location: "60 Rue de Leval - Aulnoyes-Aymeries",
      startDate: "Août 2025",
      endDate: "En cours",
      context: "Vallourec est un leader mondial dans la conception et la fabrication de solutions tubulaires et de services pour les secteurs de l'énergie, de l'automobile et de l'industrie générale. Le VRCF (Vallourec Research Center France) est le plus gros centre de R&D basé en France.",
      missions: [
        "Développement d'applications et d'outils internes de R&D",
        "Participation à des projets d'innovation utilisant des technologies modernes",
        "Contribution au debug et à l'amélioration de solutions existantes",
        "Collaboration avec l'équipe R&D sur des problématiques techniques complexes",
      ],
      autonomy: "Autonomie progressive - j'ai commencé par des tâches supervisées et je gère maintenant des modules de projets de manière indépendante",
      teamInteraction: "Travail quotidien avec une équipe de 3 personnes, collaboration avec d'autres équipes techniques et hiérarchie accessible et bienveillante",
      technologiesUsed: ["Python", "Apache Airflow", "Angular", "Spring", "SQL", "MongoDB", "Gitlab", "Azure", "PowerAutomate", "PowerApp" ,"Docker"],
    }
  ],

  // ========== SECTION 3: COMPÉTENCES TECHNIQUES (HARD SKILLS) ==========
  hardSkills: {
    languages: {
      title: "Langages de Programmation",
      skills: [
        {
          name: "Python",
          level: "Avancé",
          percentage: 90,
          context: "Utilisé en cours, pour des scripts d'automatisation et pour du machine learning dans des projets internes chez Vallourec"
        },
        {
          name: "C#",
          level: "Avancé",
          percentage: 80,
          context: "Apprentissage personnel"
        },
          {
          name: "U-NET / Machine Learning",
          level: "Avancé",
          percentage: 80,
          context: "Apprentissage personnel et projets de R&D chez Vallourec sur des problématiques d'analyse d'images et de données"
        },
        {
          name: "JavaScript/React",
          level: "Intermédiaire",
          percentage: 70,
          context: "Projet portfolio actuel et projets universitaires"
        },
        {
          name: "SQL",
          level: "Intermédiaire",
          percentage: 75,
          context: "Requêtes et manipulation de bases de données en entreprise"
        },
        {
          name: "Java",
          level: "Intermédiaire",
          percentage: 75,
          context: "Enseignement en 1ère et 2ème année"
        }
      ]
    },
    frameworks: {
      title: "Frameworks & Technologies",
      skills: [
          {
          name: "Gitlab",
          level: "Avancé",
          percentage: 85,
          context: "Versioning et collaboration quotidienne"
        },
        {
          name: "React",
          level: "Intermédiaire",
          percentage: 70,
          context: "Construction d'interfaces utilisateur modernes"
        },

        {
          name: "Apache Airflow",
          level: "Intermédiaire",
          percentage: 70,
          context: "Mise en place de pipelines de données pour automatiser les flux de travail"
        },
        {
          name: "Docker",
          level: "Débutant",
          percentage: 55,
          context: "Conteneurisation d'applications"
        },
      ]
    },
    practices: {
      title: "Bonnes Pratiques & Méthodologies",
      skills: [
          {
          name: "Documentation",
          level: "Avancé",
          percentage: 80,
          context: "Rédaction de documentation technique détaillée"
        },
        {
          name: "Scrum/Agile",
          level: "Intermédiaire",
          percentage: 75,
          context: "Utilisé quotidiennement dans mes années universitaires"
        },
        {
          name: "Code Review",
          level: "Intermédiaire",
          percentage: 70,
          context: "Participation active aux revues de code de l'équipe"
        },
        {
          name: "Testing",
          level: "Intermédiaire",
          percentage: 65,
          context: "Tests unitaires et tests d'intégration"
        },
        {
          name: "Clean Code",
          level: "Intermédiaire",
          percentage: 75,
          context: "Application des principes SOLID et design patterns"
        },
      ]
    }
  },

  // ========== SECTION 4: COMPÉTENCES COMPORTEMENTALES (SOFT SKILLS) ==========
  softSkills: [
    {
      category: "Manière d'Être",
      skills: [
        {
          title: "Adaptabilité & Résilience",
          description: "Capacité à m'adapter rapidement à de nouveaux environnements et technologies",
          context: "Transition réussie de novice en machine learning vers un niveau avancé en arrivant chez Vallourec, sans connaissance préalable du stack technologique. J'ai appris rapidement grâce à la curiosité et la persévérance.",
        },
        {
          title: "Engagement & Responsabilité",
          description: "Implication forte dans la qualité du travail et respect des engagements",
          context: "Livraison systématique des tâches dans les délais prévus. Prise de responsabilité sur la documentation des modules que je développe, mise à jour de codes anciens ou mal conçus.",
        },
        {
          title: "Posture Professionnelle",
          description: "Communication claire, respect des normes d'entreprise et professionnalisme",
          context: "Participation aux réunions d'équipe, présentation des travaux en cours, respect des processus de l'entreprise.",
        },
        {
          title: "Gestion du Stress",
          description: "Capacité à rester calme et efficace sous pression",
          context: "Gestion de deadlines serrées tout en maintenant une qualité de travail acceptable.",
        }
      ]
    },
    {
      category: "Manière de Communiquer",
      skills: [
        {
          title: "Communication Écrite",
          description: "Capacité à rédiger de la documentation claire et structurée",
          context: "Rédaction de documentations techniques, de rapports de bug, et de commentaires de code pertinents.",
        },
        {
          title: "Communication Orale",
          description: "Exprimer ses idées de façon claire en contexte professionnel",
          context: "Présentations d'avancement en réunion, explications techniques aux collègues.",
        },
        {
          title: "Écoute Active",
          description: "Capacité à comprendre et à reformuler pour assurer la compréhension mutuelle",
          context: "Lors des spécifications de tâches, je pose des questions pour bien comprendre les attentes et valider ma compréhension.",
        },
        {
          title: "Accueil du Feedback",
          description: "Recevoir les critiques de manière constructive et les transformer en amélioration",
          context: "Retours positifs de tuteurs sur ma capacité à implémenter les suggestions de code review. Amélioration continue de mon code.",
        }
      ]
    },
    {
      category: "Manière de Travailler avec les autres",
      skills: [
        {
          title: "Travail en Équipe",
          description: "Collaboration efficace et soutien mutuel avec les collègues",
          context: "Pair programming occasionnel, partage de bonnes pratiques, entraide sur les problèmes techniques.",
        },
        {
          title: "Coopération",
          description: "Capacité à contribuer aux objectifs collectifs",
          context: "Aide aux collègues sur des questions techniques, participation aux défis collectifs de l'équipe.",
        },
        {
          title: "Positionnement dans le Collectif",
          description: "Trouver sa place dans une équipe tout en restant soi-même",
          context: "Respect de la hiérarchie tout en osant poser des questions. Construction d'une relation de confiance avec l'équipe.",
        },
        {
          title: "Prise d'Initiative",
          description: "Capacité à identifier et proposer des améliorations",
          context: "Suggestion d'optimisations de processus, participation à des discussions techniques même si ce n'était pas mon projet.",
        }
      ]
    }
  ],

  // ========== SECTION 5: CONNAISSANCE ET CONSCIENCE DE SOI ==========
  selfAwareness: {
    strengths: [
      "Curiosité technique : j'aime apprendre de nouvelles technologies",
      "Rapidité d'apprentissage : je gravis la courbe d'apprentissage rapidement",
      "Engagement : je m'implique pleinement dans mes projets",
      "Rigueur : j'accorde de l'importance à la qualité du code et à la documentation",
      "Adaptabilité : capable de passer d'un contexte à un autre sans problème",
    ],
    improvements: [
      "Améliorer mon anglais technique (documentation, participation à des discussions)",
      "Développer ma confiance en présentant mes solutions en public",
      "Améliorer ma patience face aux bugs complexes",
    ],
    growth: [
      "J'ai réalisé que je préfère travailler sur des projets avec impact",
      "L'alternance m'a montré l'importance du travail d'équipe",
      "J'ai compris que les soft skills sont aussi importants que les hard skills",
      "Je me sens plus confiant dans mon habilité à apprendre de nouvelles technologies",
      "J'ai découvert mon intérêt pour l'ingénierie et la R&D, et je souhaite continuer à évoluer dans ce domainex",
    ],
    needsForEvolution: [
      "Mentorat : avoir un mentor sur une technologie avancée",
      "Expérience : plus de projets de bout en bout pour consolider mes connaissances",
      "Challenges : travailler sur des problèmes complexes et variés",
      "Networking : rencontrer d'autres développeurs et apprendre de leurs expériences",
    ]
  },

  // ========== SECTION 6: PROJETS ==========
  projects: [
    {
      title: "Création d'un logiciel R&D avec Machine Learning",
      description: "Développement d'une application interne pour détecter et mesurer de manière automatique une couche de revêtement sur les tubes. En passant par la recherche de la solution technique, la création et l'implémentation d'un modèle de machine learning (U-NET) et la création d'une interface utilisateur pour visualiser les résultats.",
      achievements: [
        "Réduction de 80% du temps de traitement manuel",
        "Mise en production et adoption par l'équipe R&D",
        "Documentation complète et maintenance"
      ],
      technologies: ["Python", "PyTorch", "Tkinter", "AWS S3", "Gitlab"],
    },
    {
      title: "Logiciel spécialisé R&D pour le choix automatique et la gestion des outillages de préparation de tubes",
      description: "Création d'un algorithme permettant d'avoir le meilleur choix d'outillage pour la préparation de tubes, en fonction de leurs caractéristiques et des contraintes de production. Création d'une interface utilisateur pour faciliter l'utilisation par les ingénieurs de l'équipe R&D.",
      achievements: [
        "Interface réactive et intuitive",
        "Adaptation aux besoins spécifiques de l'équipe R&D",
        "Utilisé quotidiennement par les ingénieurs pour la préparation de tubes"
      ],
      technologies: ["Python", "Tkinter", "Pandas", "Numpy", "Gitlab"],
    },
      {
      title: "Logiciel spécialisé R&D pour la gestion des stocks de matières",
      description: "Création d'une base de données pour suivre les stocks de matières premières utilisées dans les processus de R&D, avec une interface utilisateur pour visualiser les niveaux de stock. Intégration de flux de données automatisés pour mettre à jour les niveaux de stock en temps réel en fonction des consommations et des réceptions de matières + synchronisation avec un LIMS.",
      achievements: [
        "Interface complète et facile à utiliser",
        "Gestion fiable des données de stock",
        "Utilisé quotidiennement par les agents logistiques et les ingénieurs de l'équipe R&D"
      ],
      technologies: ["PowerApps", "PowerAutomate", "Dataverse", "AWS S3", "API LIMS"],
    },
      {
      title: "Export automatisé de données de traitement des tubes",
      description: "Création d'un export automatisé des données de traitement des tubes depuis le LIMS vers un stockage centralisé, avec une interface pour visualiser les données et générer des rapports. Intégration de flux de données automatisés pour mettre à jour les données en temps réel en fonction des nouvelles entrées dans le LIMS.",
      achievements: [
        "Utilisation d'API pour extraire les données du LIMS de manière fiable",
        "Manipulation des données complexes pour les rendre exploitables",
        "Utilisé par les équipes de R&D pour l'analyse des données de traitement des tubes"
      ],
      technologies: ["Python", "Apache Airflow", "AWS S3", "API LIMS"],
    },
    {
      title: "Portfolio Personnel",
      description: "Ce portfolio ! Une occasion de continuer à apprendre React tout en créant un outil professionnel",
      achievements: [
        "Design moderne et responsive",
        "Facilement déployable sur GitHub Pages",
        "Structure modulaire et maintenable"
      ],
      technologies: ["React", "Vite", "CSS3"],
    },
  ]
};

