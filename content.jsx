/* Bilingual content + project data */

const CONTENT = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      stack: "Stack",
      contact: "Contact"
    },
    home: {
      ticker: ["Sites vitrines", "E-commerce", "Apps de gestion", "API REST", "UI/UX", "Maintenance"],
      kicker: "Studio web",
      titlePre: "On code",
      titleMid: "des choses",
      titleItalic: "qui marchent.",
      lead: "MisTech est un duo de développeurs basé à Madagascar. On conçoit et on déploie des sites web, des plateformes e-commerce et des applications de gestion sur mesure — du premier wireframe à la mise en production.",
      ctaPrimary: "Voir nos projets",
      ctaSecondary: "Discuter d'un projet",
      stats: [
        { k: "Projets livrés", v: "12+" },
        { k: "Stack maîtrisée", v: "JS / Java / PHP" },
        { k: "Basés à", v: "Tana, MG" },
        { k: "Disponible", v: "Maintenant" }
      ],
      servicesTitle: "Ce qu'on fait",
      servicesLead: "Quatre formats de livrables, une seule obsession : que ça serve à quelque chose.",
      services: [
        {
          n: "01",
          name: "Sites vitrines",
          desc: "Présence en ligne soignée, rapide, accessible. SEO, contenu structuré, design qui ressemble à votre marque.",
          tags: ["Next.js", "Astro", "Tailwind"],
          color: "violet"
        },
        {
          n: "02",
          name: "E-commerce",
          desc: "Boutiques en ligne complètes : catalogue, panier, paiement, gestion des stocks et tableau de bord vendeur.",
          tags: ["Laravel", "Stripe", "MySQL"],
          color: "coral"
        },
        {
          n: "03",
          name: "Apps de gestion",
          desc: "Ventes, stocks, RH, comptabilité, plannings — des outils internes qui remplacent vraiment Excel.",
          tags: ["Spring Boot", "Angular", "Postgres"],
          color: "lime"
        },
        {
          n: "04",
          name: "API & intégrations",
          desc: "API REST documentées, intégrations ERPNext, sync de données, webhooks. La plomberie qui tient la route.",
          tags: ["REST", "ERPNext", "Docker"],
          color: "sky"
        }
      ],
      featuredTitle: "Cas récents",
      featuredLead: "Quelques projets sur lesquels on a transpiré.",
      processTitle: "Comment on bosse",
      process: [
        { n: "01", t: "Cadrage", d: "Un appel, on cerne le besoin réel — pas la version Pinterest." },
        { n: "02", t: "Maquette", d: "Wireframes puis design haute fidélité, validés avant la moindre ligne de code." },
        { n: "03", t: "Dev", d: "Sprints courts, démos hebdo, code versionné, tests sur les flux critiques." },
        { n: "04", t: "Mise en ligne", d: "Déploiement, formation, doc. Et on reste joignable pour la suite." }
      ],
      ctaBig: "Un projet en tête ?",
      ctaBigSub: "Réponse sous 24h, devis sous 72h. Pas de blabla."
    },
    about: {
      kicker: "À propos",
      title: "Deux têtes,",
      titleItalic: "une même obsession",
      titleEnd: "du détail.",
      lead: "On s'est rencontrés à l'IT University. Depuis, on enchaîne les projets — académiques, en stage, en freelance. MisTech, c'est ce qu'on a décidé d'appeler le studio quand on a compris qu'on bossait mieux ensemble que séparément.",
      duoTitle: "Le duo",
      duo: [
        {
          name: "Fenosoa Eliane Tovoniaina",
          role: "Full-stack · UI / UX",
          headline: "Designer-codeur",
          location: "Antananarivo, MG",
          bio: "Développeuse fullstack avec une vraie sensibilité interface. À l'aise sur React, Angular, Spring Boot et Laravel — autant pour structurer une API REST que pour faire respirer une maquette.",
          tags: ["React", "Angular", "Spring Boot", "Laravel", "UI/UX"],
          github: "https://github.com/Soa-Soa-Soa",
          linkedin: "https://www.linkedin.com/in/fenosoa-eliane-tovoniaina-ab84a6362",
          cv: "assets/cv-fenosoa.png"
        },
        {
          name: "Brady Andriamalala Tsikiniony",
          role: "Full-stack · Back-end",
          headline: "Builder de systèmes",
          location: "Antananarivo, MG",
          bio: "Spécialisé en applications de gestion full-stack et e-commerce. Java Spring Boot, PHP, JavaScript — le genre de dev qui pense aux index Postgres avant la couleur du bouton.",
          tags: ["Java", "Spring Boot", "PHP", "JavaScript", "PostgreSQL"],
          github: "https://github.com/Tsikiniony",
          linkedin: "https://www.linkedin.com/in/tsikiniony-brady-andriamalala-b85511281",
          cv: "assets/cv-brady.png"
        }
      ],
      experiencesTitle: "Expériences pro",
      experiencesLead: "Stages et missions sur lesquels on a été payés. Les projets académiques et personnels sont dans la section Projets.",
      experiences: [
        {
          who: "Fenosoa",
          date: "Févr. 2026",
          kind: "Mission",
          name: "SGA Mobility",
          role: "Développeuse Web · UI / UX",
          desc: "Plateforme métier complète, conception API et front. Mission UI/UX en parallèle pour homogénéiser l'expérience à travers les modules.",
          stack: ["Java", "Spring Boot", "Angular", "Node.js", "MySQL", "API REST"]
        },
        {
          who: "Fenosoa",
          date: "Juil — Nov 2025",
          kind: "Stage",
          name: "Plateforme RFID multifonction",
          role: "Développeuse Web — Stage",
          desc: "Plateforme administrateur pour cartes RFID : gestion d'identités, transactions, API REST et interface admin. Travail full-stack et UX intégré.",
          stack: ["PHP", "Laravel", "React", "MySQL", "API REST"]
        },
        {
          who: "Brady",
          date: "Déc. 2025",
          kind: "Mission",
          name: "App de gestion ventes boissons",
          role: "Dev full-stack",
          desc: "Système de caisse complet : commandes, encaissement, livraison, gestion de stock, statistiques. Architecture front/back découplée.",
          stack: ["Java", "Spring Boot", "JavaScript", "PostgreSQL"]
        },
        {
          who: "Brady",
          date: "Juil — Oct 2025",
          kind: "Mission",
          name: "SITA Madagascar",
          role: "Création site e-commerce",
          desc: "Création complète d'un site marchand pour SITA Madagascar : catalogue, panier, tunnel d'achat. Du brief à la mise en ligne.",
          stack: ["E-commerce", "Front responsive", "Catalogue", "Paiement"]
        }
      ],
      diplomasTitle: "Diplômes",
      diplomasLead: "Formations qu'on a finies.",
      diplomas: [
        {
          year: "2025",
          name: "Licence en Informatique",
          school: "IT University",
          fields: ["Développement d'application", "Développement Web & Mobile", "Réseaux & Base de données"],
          who: "Fenosoa & Brady"
        },
        {
          year: "2022",
          name: "Baccalauréat général · Série D",
          school: "Lycée — Mention Assez Bien",
          fields: ["Scientifique"],
          who: "Fenosoa & Brady"
        }
      ],
      valuesTitle: "Ce qu'on défend",
      values: [
        { t: "Code lisible", d: "On écrit pour la personne qui passera après nous. Y compris si c'est nous dans six mois." },
        { t: "Pas de magie", d: "On explique tout. Pas de dépendance forcée à l'agence pour modifier un titre." },
        { t: "Performance", d: "Un site lent, c'est un site qui ne sert à rien. On benchmark, on optimise." },
        { t: "Sécurité", d: "Auth, validation, sanitisation, backups. Les fondamentaux pas négociables." }
      ]
    },
    projects: {
      kicker: "Projets",
      title: "Quatre projets",
      titleItalic: "qu'on aime bien.",
      lead: "Sélection de cas concrets — sites e-commerce, applications de gestion et projets full-stack. Cliquez pour le détail.",
      items: [
        {
          slug: "sita-madagascar",
          n: "01",
          year: "2025",
          name: "SITA Madagascar",
          type: "Vitrine · E-commerce · Admin",
          link: "https://www.sita-madagascar.com/accueil",
          tags: ["PHP", "Laravel", "MySQL", "E-commerce", "Back-office"],
          summary: "Site vitrine + e-commerce complet pour SITA Madagascar, plus une partie admin pour gérer les produits et les ventes.",
          desc: "Conception et développement du site SITA Madagascar — page d'accueil vitrine, catalogue produits structuré, fiches détaillées, panier et tunnel d'achat. Côté admin : interface de gestion des produits, suivi des commandes, statistiques de vente. Travail en autonomie sur l'ensemble du périmètre, du brief à la mise en ligne.",
          color: "violet",
          accent: "#6B4EFF",
          shape: "live"
        },
        {
          slug: "boissons-pos",
          n: "02",
          year: "2025",
          name: "Vente de boissons",
          type: "POS · Application full-stack",
          tags: ["Java", "Spring Boot", "JavaScript", "PostgreSQL", "POS"],
          summary: "Système de caisse complet pour un point de vente boissons : commandes, encaissement, livraison, stock, statistiques.",
          desc: "Application full-stack avec séparation propre front / back. Caisse rapide pour la prise de commande, gestion des livraisons, suivi du stock avec alertes de seuils, statistiques de vente (CA quotidien, top produits, encaissements). Interface optimisée pour usage en point de vente — taps larges, navigation rapide.",
          color: "lime",
          accent: "#D5F25E",
          shape: "video",
          videoSrc: "assets/demos/boissons.mp4"
        },
        {
          slug: "pharmacie-gestion",
          n: "03",
          year: "2025",
          name: "Gestion de pharmacie",
          type: "Application de gestion",
          tags: ["Java", "Spring Boot", "PostgreSQL", "Stock", "Ventes"],
          summary: "Application de gestion complète pour une pharmacie : catalogue, stock, ventes, suivi du chiffre d'affaires.",
          desc: "Application Java Spring Boot + PostgreSQL conçue pour la gestion quotidienne d'une pharmacie. Catalogue de médicaments, gestion du stock avec alertes de péremption et de seuils, encaissement, suivi des ventes et du chiffre d'affaires. Tableaux de bord clair pour la direction.",
          color: "lime",
          accent: "#9A85FF",
          shape: "video",
          videoSrc: "assets/demos/pharmacie.mp4"
        },
        {
          slug: "evidy-marketplace",
          n: "04",
          year: "2025",
          name: "E-VIDY",
          type: "Marketplace multi-boutiques · MEAN",
          link: "https://m1p13mean-brady-antonio.onrender.com/client/products",
          tags: ["MongoDB", "Express", "Angular", "Node.js", "Marketplace"],
          summary: "Centre commercial en ligne en MEAN stack — plusieurs boutiques sur une même plateforme, catalogue mutualisé, panier, comptes vendeurs et clients.",
          desc: "Marketplace multi-boutiques construit en MEAN stack (MongoDB, Express, Angular, Node.js). Côté client : navigation par boutique et catégorie, filtres, panier, passage de commande. Côté boutique : gestion catalogue, stocks, commandes reçues. Authentification séparée client / vendeur. Projet académique mené en binôme avec Antonio Ravelonarivo Tsiorimbola.",
          color: "sky",
          accent: "#4A2EE8",
          shape: "live"
        }
      ],
      moreTitle: "Et aussi…",
      more: [
        { n: "RFID·", t: "Plateforme RFID multifonction", desc: "PHP Laravel + React. Plateforme admin pour cartes RFID, identités, transactions et API REST. Réalisée pendant un stage.", tags: ["Laravel", "React", "MySQL"] },
        { n: "SGA·", t: "SGA Mobility", desc: "Plateforme métier complète en Java Spring Boot + Angular, avec mission UI/UX en parallèle.", tags: ["Spring Boot", "Angular"] },
        { n: "Crypto·", t: "App crypto-monnaie", desc: "Achat/vente, portefeuille, suivi des cours. Versions web et mobile.", tags: [".NET", "React Native", "Java"] }
      ]
    },
    stack: {
      kicker: "Stack & laboratoire",
      title: "Outils, terrains",
      titleItalic: "de jeu.",
      lead: "Ce qu'on utilise quotidiennement, et quelques expérimentations qu'on garde sous le coude.",
      groups: [
        {
          name: "Front-end",
          items: [
            { n: "React", lvl: 90 },
            { n: "Angular", lvl: 85 },
            { n: "TypeScript", lvl: 80 },
            { n: "Tailwind CSS", lvl: 88 },
            { n: "HTML / CSS", lvl: 95 }
          ]
        },
        {
          name: "Back-end",
          items: [
            { n: "Java + Spring Boot", lvl: 88 },
            { n: "PHP + Laravel", lvl: 85 },
            { n: "Node.js", lvl: 78 },
            { n: ".NET / C#", lvl: 65 },
            { n: "Python", lvl: 60 }
          ]
        },
        {
          name: "Données & infra",
          items: [
            { n: "PostgreSQL", lvl: 85 },
            { n: "MySQL", lvl: 90 },
            { n: "Docker", lvl: 70 },
            { n: "API REST", lvl: 92 },
            { n: "Git / GitHub", lvl: 88 }
          ]
        }
      ],
      ghTitle: "GitHub",
      ghSub: "Nos profils, leur activité, leur étoiles. Cliquez pour aller voir.",
      ghProfiles: [
        { who: "Fenosoa", handle: "Soa-Soa-Soa", url: "https://github.com/Soa-Soa-Soa", role: "Full-stack · UI/UX", pinned: ["Framework-Sprint", "CRM-Java", "DaybydayCRM-master"] },
        { who: "Brady",  handle: "Tsikiniony",  url: "https://github.com/Tsikiniony",  role: "Full-stack · Back-end", pinned: ["Framework", "Sprint", "Screen-sql"] }
      ],
      ghStats: [
        { k: "Commits 2026", v: "847" },
        { k: "Repos publics", v: "23" },
        { k: "Pull requests", v: "112" },
        { k: "Streak en cours", v: "41j" }
      ],
      labTitle: "Playground",
      labSub: "Petites expérimentations en CSS, animation, micro-interactions.",
      lab: [
        { t: "Generative grid", d: "Grille générative qui se réagence au survol. Pur CSS + variables.", tag: "CSS" },
        { t: "Type morph", d: "Transitions typographiques au scroll, variable font + IntersectionObserver.", tag: "JS" },
        { t: "Cursor follow", d: "Cursor magnétique sur boutons avec effet d'attraction non-linéaire.", tag: "JS" },
        { t: "Marquee mixé", d: "Bande défilante avec inertie et inversion au scroll.", tag: "JS" }
      ]
    },
    contact: {
      kicker: "Contact",
      title: "On en parle ?",
      titleItalic: "Avec plaisir.",
      lead: "Présentez le projet en quelques lignes — on revient vers vous sous 24h, devis sous 72h.",
      formName: "Votre nom",
      formEmail: "Email",
      formCompany: "Société (optionnel)",
      formSubject: "Sujet",
      formMessage: "Parlez-nous du projet",
      budget: "Budget estimé",
      budgets: ["< 1 000 €", "1 000 – 3 000 €", "3 000 – 8 000 €", "> 8 000 €", "On verra"],
      submit: "Envoyer",
      submitting: "Envoi…",
      sent: "Merci ! On revient vers vous très vite.",
      coords: "Coordonnées",
      cvTitle: "CV",
      cvSub: "Télécharger nos CV individuels.",
      cvDownload: "Télécharger",
      addr: "Antananarivo, Madagascar",
      avail: "Disponibles pour de nouvelles missions"
    },
    footer: {
      tagline: "Studio web indépendant, basé à Antananarivo. Sites, e-commerce, applications métier.",
      explore: "Explorer",
      reach: "Joindre",
      legal: "© 2026 MisTech. Tous droits réservés.",
      builtWith: "Pas de template. Cousu main."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact"
    },
    home: {
      ticker: ["Marketing sites", "E-commerce", "Business apps", "REST APIs", "UI / UX", "Maintenance"],
      kicker: "Web studio",
      titlePre: "We build",
      titleMid: "things",
      titleItalic: "that ship.",
      lead: "MisTech is a duo of developers based in Madagascar. We design and ship websites, e-commerce platforms and tailor-made business applications — from the first wireframe to production.",
      ctaPrimary: "See our work",
      ctaSecondary: "Start a project",
      stats: [
        { k: "Projects shipped", v: "12+" },
        { k: "Stack", v: "JS / Java / PHP" },
        { k: "Based in", v: "Tana, MG" },
        { k: "Available", v: "Now" }
      ],
      servicesTitle: "What we do",
      servicesLead: "Four kinds of deliverables, one obsession: that the thing actually gets used.",
      services: [
        {
          n: "01",
          name: "Marketing sites",
          desc: "Polished, fast, accessible web presence. SEO, structured content, design that actually looks like your brand.",
          tags: ["Next.js", "Astro", "Tailwind"],
          color: "violet"
        },
        {
          n: "02",
          name: "E-commerce",
          desc: "Full online stores: catalogue, cart, checkout, stock management and a seller dashboard.",
          tags: ["Laravel", "Stripe", "MySQL"],
          color: "coral"
        },
        {
          n: "03",
          name: "Business apps",
          desc: "Sales, stock, HR, accounting, scheduling — internal tools that genuinely replace the spreadsheet.",
          tags: ["Spring Boot", "Angular", "Postgres"],
          color: "lime"
        },
        {
          n: "04",
          name: "APIs & integrations",
          desc: "Documented REST APIs, ERPNext integrations, data sync, webhooks. The plumbing that holds.",
          tags: ["REST", "ERPNext", "Docker"],
          color: "sky"
        }
      ],
      featuredTitle: "Recent work",
      featuredLead: "A few projects we sweated over.",
      processTitle: "How we work",
      process: [
        { n: "01", t: "Discovery", d: "One call to figure out the actual need — not the Pinterest version of it." },
        { n: "02", t: "Design", d: "Wireframes, then hi-fi mockups, validated before a single line of code." },
        { n: "03", t: "Build", d: "Short sprints, weekly demos, versioned code, tests on the critical paths." },
        { n: "04", t: "Ship", d: "Deployment, training, docs. And we stay reachable for what comes after." }
      ],
      ctaBig: "Got a project in mind?",
      ctaBigSub: "Reply within 24h, estimate within 72h. No fluff."
    },
    about: {
      kicker: "About",
      title: "Two heads,",
      titleItalic: "one obsession",
      titleEnd: "with the details.",
      lead: "We met at IT University. Since then we've been stringing projects together — academic, internships, freelance. MisTech is what we called the studio when we figured out we work better together than apart.",
      duoTitle: "The duo",
      duo: [
        {
          name: "Fenosoa Eliane Tovoniaina",
          role: "Full-stack · UI / UX",
          headline: "Designer-coder",
          location: "Antananarivo, MG",
          bio: "Fullstack developer with a real interface sensibility. Comfortable across React, Angular, Spring Boot and Laravel — equally at home structuring a REST API or breathing life into a mockup.",
          tags: ["React", "Angular", "Spring Boot", "Laravel", "UI/UX"],
          github: "https://github.com/Soa-Soa-Soa",
          linkedin: "https://www.linkedin.com/in/fenosoa-eliane-tovoniaina-ab84a6362",
          cv: "assets/cv-fenosoa.png"
        },
        {
          name: "Brady Andriamalala Tsikiniony",
          role: "Full-stack · Back-end",
          headline: "Systems builder",
          location: "Antananarivo, MG",
          bio: "Specialized in full-stack business apps and e-commerce. Java Spring Boot, PHP, JavaScript — the kind of dev who thinks about Postgres indexes before button colors.",
          tags: ["Java", "Spring Boot", "PHP", "JavaScript", "PostgreSQL"],
          github: "https://github.com/Tsikiniony",
          linkedin: "https://www.linkedin.com/in/tsikiniony-brady-andriamalala-b85511281",
          cv: "assets/cv-brady.png"
        }
      ],
      experiencesTitle: "Work experience",
      experiencesLead: "Internships and paid missions. Academic and personal projects live in the Projects section.",
      experiences: [
        {
          who: "Fenosoa",
          date: "Feb 2026",
          kind: "Mission",
          name: "SGA Mobility",
          role: "Web Developer · UI / UX",
          desc: "Full business platform — API and front-end. Parallel UI/UX mission to harmonize the experience across modules.",
          stack: ["Java", "Spring Boot", "Angular", "Node.js", "MySQL", "REST API"]
        },
        {
          who: "Fenosoa",
          date: "Jul — Nov 2025",
          kind: "Internship",
          name: "Multifunction RFID Platform",
          role: "Web Developer — Internship",
          desc: "Admin platform for RFID cards: identity management, transactions, REST API and admin interface. Full-stack and UX work combined.",
          stack: ["PHP", "Laravel", "React", "MySQL", "REST API"]
        },
        {
          who: "Brady",
          date: "Dec 2025",
          kind: "Mission",
          name: "Beverage sales POS app",
          role: "Full-stack developer",
          desc: "Complete POS system: orders, payment, delivery, stock management, sales analytics. Decoupled front/back architecture.",
          stack: ["Java", "Spring Boot", "JavaScript", "PostgreSQL"]
        },
        {
          who: "Brady",
          date: "Jul — Oct 2025",
          kind: "Mission",
          name: "SITA Madagascar",
          role: "E-commerce site build",
          desc: "Full e-commerce site build for SITA Madagascar: catalog, cart, checkout flow. From brief to launch.",
          stack: ["E-commerce", "Responsive front", "Catalog", "Checkout"]
        }
      ],
      diplomasTitle: "Diplomas",
      diplomasLead: "Things we actually finished.",
      diplomas: [
        {
          year: "2025",
          name: "BSc in Computer Science",
          school: "IT University",
          fields: ["Application development", "Web & Mobile development", "Networks & Databases"],
          who: "Fenosoa & Brady"
        },
        {
          year: "2022",
          name: "Baccalauréat · Series D",
          school: "Lycée — Good honors",
          fields: ["Scientific"],
          who: "Fenosoa & Brady"
        }
      ],
      valuesTitle: "What we stand for",
      values: [
        { t: "Readable code", d: "We write for the person who'll work on it next. Including ourselves six months from now." },
        { t: "No magic", d: "We explain everything. No forced dependency on the agency to edit a heading." },
        { t: "Performance", d: "A slow site is a useless site. We benchmark, we optimize." },
        { t: "Security", d: "Auth, validation, sanitization, backups. Non-negotiable fundamentals." }
      ]
    },
    projects: {
      kicker: "Projects",
      title: "Four projects",
      titleItalic: "we're fond of.",
      lead: "Selection of real-world cases — e-commerce sites, business management apps and full-stack projects. Click for the detail.",
      items: [
        {
          slug: "sita-madagascar",
          n: "01",
          year: "2025",
          name: "SITA Madagascar",
          type: "Marketing site · E-commerce · Admin",
          link: "https://www.sita-madagascar.com/accueil",
          tags: ["PHP", "Laravel", "MySQL", "E-commerce", "Back-office"],
          summary: "Marketing site + full e-commerce for SITA Madagascar, plus an admin area to manage products and sales.",
          desc: "Design and development of the SITA Madagascar site — landing page, structured product catalogue, detail pages, cart and checkout flow. Admin side: product management interface, order tracking, sales analytics. Solo work across the whole scope, from brief to launch.",
          color: "violet",
          accent: "#6B4EFF",
          shape: "live"
        },
        {
          slug: "boissons-pos",
          n: "02",
          year: "2025",
          name: "Beverage Sales",
          type: "POS · Full-stack app",
          tags: ["Java", "Spring Boot", "JavaScript", "PostgreSQL", "POS"],
          summary: "Complete POS system for a beverage shop: orders, payment, delivery, stock, analytics.",
          desc: "Full-stack app with a clean front/back split. Fast POS for order entry, delivery handling, stock tracking with threshold alerts, analytics (daily revenue, top products, takings). Interface tuned for point-of-sale use — large hit areas, quick navigation.",
          color: "lime",
          accent: "#D5F25E",
          shape: "video",
          videoSrc: "assets/demos/boissons.mp4"
        },
        {
          slug: "pharmacie-gestion",
          n: "03",
          year: "2025",
          name: "Pharmacy management",
          type: "Business app",
          tags: ["Java", "Spring Boot", "PostgreSQL", "Stock", "Sales"],
          summary: "Full management app for a pharmacy: catalogue, stock, sales, revenue tracking.",
          desc: "Java Spring Boot + PostgreSQL app for day-to-day pharmacy operations. Medicine catalogue, stock management with expiry and threshold alerts, payments, sales tracking and revenue dashboards. Clear summaries for management.",
          color: "lime",
          accent: "#9A85FF",
          shape: "video",
          videoSrc: "assets/demos/pharmacie.mp4"
        },
        {
          slug: "evidy-marketplace",
          n: "04",
          year: "2025",
          name: "E-VIDY",
          type: "Multi-vendor marketplace · MEAN",
          link: "https://m1p13mean-brady-antonio.onrender.com/client/products",
          tags: ["MongoDB", "Express", "Angular", "Node.js", "Marketplace"],
          summary: "Online mall built on the MEAN stack — multiple shops on one platform, shared catalogue, cart, vendor and customer accounts.",
          desc: "Multi-vendor marketplace built on the MEAN stack (MongoDB, Express, Angular, Node.js). Customer side: browse by shop and category, filters, cart, checkout. Vendor side: catalogue management, stock, incoming orders. Separate auth for customers and vendors. Academic project built with Antonio Ravelonarivo Tsiorimbola.",
          color: "sky",
          accent: "#4A2EE8",
          shape: "live"
        }
      ],
      moreTitle: "And also…",
      more: [
        { n: "RFID·", t: "Multifunction RFID platform", desc: "PHP Laravel + React. Admin platform for RFID cards, identities, transactions and REST API. Built during an internship.", tags: ["Laravel", "React", "MySQL"] },
        { n: "SGA·", t: "SGA Mobility", desc: "Complete business platform in Java Spring Boot + Angular, with a parallel UI/UX mission.", tags: ["Spring Boot", "Angular"] },
        { n: "Crypto·", t: "Crypto app", desc: "Buy/sell, wallet, price tracking. Web and mobile versions.", tags: [".NET", "React Native", "Java"] }
      ]
    },
    stack: {
      kicker: "Stack & lab",
      title: "Tools, playgrounds.",
      titleItalic: "",
      lead: "What we use day-to-day, and a few experiments we keep on the side.",
      groups: [
        {
          name: "Front-end",
          items: [
            { n: "React", lvl: 90 },
            { n: "Angular", lvl: 85 },
            { n: "TypeScript", lvl: 80 },
            { n: "Tailwind CSS", lvl: 88 },
            { n: "HTML / CSS", lvl: 95 }
          ]
        },
        {
          name: "Back-end",
          items: [
            { n: "Java + Spring Boot", lvl: 88 },
            { n: "PHP + Laravel", lvl: 85 },
            { n: "Node.js", lvl: 78 },
            { n: ".NET / C#", lvl: 65 },
            { n: "Python", lvl: 60 }
          ]
        },
        {
          name: "Data & infra",
          items: [
            { n: "PostgreSQL", lvl: 85 },
            { n: "MySQL", lvl: 90 },
            { n: "Docker", lvl: 70 },
            { n: "REST API", lvl: 92 },
            { n: "Git / GitHub", lvl: 88 }
          ]
        }
      ],
      ghTitle: "GitHub",
      ghSub: "Our profiles, their activity, their stars. Click to visit.",
      ghProfiles: [
        { who: "Fenosoa", handle: "Soa-Soa-Soa", url: "https://github.com/Soa-Soa-Soa", role: "Full-stack · UI/UX", pinned: ["Framework-Sprint", "CRM-Java", "DaybydayCRM-master"] },
        { who: "Brady",  handle: "Tsikiniony",  url: "https://github.com/Tsikiniony",  role: "Full-stack · Back-end", pinned: ["Framework", "Sprint", "Screen-sql"] }
      ],
      ghStats: [
        { k: "Commits 2026", v: "847" },
        { k: "Public repos", v: "23" },
        { k: "Pull requests", v: "112" },
        { k: "Current streak", v: "41d" }
      ],
      labTitle: "Playground",
      labSub: "Small experiments in CSS, animation, micro-interactions.",
      lab: [
        { t: "Generative grid", d: "Generative grid that rearranges on hover. Pure CSS + variables.", tag: "CSS" },
        { t: "Type morph", d: "Typographic transitions on scroll, variable font + IntersectionObserver.", tag: "JS" },
        { t: "Cursor follow", d: "Magnetic cursor over buttons with non-linear attraction.", tag: "JS" },
        { t: "Mixed marquee", d: "Scrolling band with inertia and direction flip on scroll.", tag: "JS" }
      ]
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk.",
      titleItalic: "Happy to.",
      lead: "Tell us about the project in a few lines — we reply within 24h, estimate within 72h.",
      formName: "Your name",
      formEmail: "Email",
      formCompany: "Company (optional)",
      formSubject: "Subject",
      formMessage: "Tell us about the project",
      budget: "Estimated budget",
      budgets: ["< €1,000", "€1,000 – 3,000", "€3,000 – 8,000", "> €8,000", "We'll see"],
      submit: "Send",
      submitting: "Sending…",
      sent: "Thank you! We'll get back to you very soon.",
      coords: "Details",
      cvTitle: "Resumes",
      cvSub: "Download our individual resumes.",
      cvDownload: "Download",
      addr: "Antananarivo, Madagascar",
      avail: "Available for new missions"
    },
    footer: {
      tagline: "Independent web studio, based in Antananarivo. Sites, e-commerce, business apps.",
      explore: "Explore",
      reach: "Reach",
      legal: "© 2026 MisTech. All rights reserved.",
      builtWith: "No template. Hand-stitched."
    }
  }
};

window.CONTENT = CONTENT;
