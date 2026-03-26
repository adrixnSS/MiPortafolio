import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "hero.name": "Adrián Sánchez Simón",
      "hero.role": "FullStack Developer",
      "hero.description": "Transformando ideas en experiencias digitales excepcionales. Especializado en crear soluciones robustas, escalables y con un diseño impecable.",
      "hero.btn.experience": "Ver Experiencia",
      "hero.btn.collection": "Mi Colección",
      "machine.title": "Mis Proyectos",
      "machine.desc": "Inserta una moneda y descubre mis últimos trabajos. Cada bola contiene una experiencia única.",
      "machine.insert_coin": "INSERTAR MONEDA",
      "machine.extracting": "EXTRAYENDO...",
      "machine.depleted": "MÁQUINA VACÍA",
      "machine.ready": "LISTO PARA EXTRAER",
      "machine.no_funds": "FONDOS INSUFICIENTES",
      "machine.extract": "EXTRAER",
      "machine.cost": "COSTE:",
      "machine.archive": "Archivo de Proyectos",
      "machine.unlocked": "Desbloqueados:",
      "machine.locked": "Bloqueado",
      "machine.extracted": "Datos Extraídos",
      "machine.empty": "VACÍO",
      "machine.code": "Código",
      "machine.live": "Ver Proyecto",
      "collection.title": "Colección de Habilidades",
      "collection.desc": "¡Atrapa bugs, gana monedas y abre sobres para descubrir mi stack tecnológico! Colecciona las {{count}} cartas para desbloquear mi contacto.",
      "collection.buy": "COMPRAR SOBRE",
      "collection.cost": "COSTE: 100",
      "collection.progress": "Progreso:",
      "collection.completed": "¡Colección Completada!",
      "collection.completed_desc": "Has demostrado ser un verdadero cazador de talento. ¡Hablemos!",
      "collection.empty": "Aún no tienes cartas. ¡Compra un sobre para empezar!",
      "experience.title": "Experiencia Profesional",
      "experience.desc": "Mi trayectoria profesional, anonimizada por privacidad.",
      "experience.present": "ACTUALIDAD",
      "experience.items": [
        {
          "role": "FullStack Developer",
          "company": "Consultora Tecnológica Global",
          "period": "2022 - ACTUALIDAD",
          "description": [
            "Diseño e implementación de microservicios con Java Spring Boot y desarrollo de interfaces con React.",
            "Mantenimiento evolutivo de aplicaciones de escritorio en Java Swing.",
            "Gestión de bases de datos relacionales y optimización de consultas (HSQLDB, SQLite, SQL).",
            "Control de versiones con Git (Bitbucket/SourceTree).",
            "Gestión de tareas y equipos en Jira."
          ]
        },
        {
          "role": "Web Developer & CRM Specialist",
          "company": "Empresa del Sector Energético",
          "period": "2022 - 2022",
          "description": [
            "Lideré la transformación digital, gestionando y personalizando el CRM (Zoho Creator) con Deluge y JavaScript.",
            "Desarrollé y mantuve portales web corporativos utilizando HTML5, CSS3 y ReactJs.",
            "Creé herramientas internas para la gestión de almacenes y seguimiento de KPI."
          ]
        },
        {
          "role": "Frontend Developer",
          "company": "Proyecto Freelance",
          "period": "2022 - 2022",
          "description": [
            "Desarrollo de una SPA para la gestión de contenido multimedia.",
            "Uso de ReactJs, Material UI (MUI), API REST (TMDB), Firebase (Auth, DB)."
          ]
        },
        {
          "role": "Experiencia Laboral Variada",
          "company": "Varios Sectores",
          "period": "2019 - 2022",
          "description": [
            "Mozo de almacén, Repartidor a domicilio, Camarero, Asistente de piscina.",
            "Desarrollo de habilidades blandas: trabajo en equipo, atención al cliente y resolución de problemas bajo presión."
          ]
        }
      ],
      "contact.title": "¿Hablamos?",
      "contact.desc": "Si te ha gustado lo que has visto y buscas un desarrollador FullStack apasionado, resolutivo y con ganas de aportar valor, no dudes en contactarme.",
      "contact.whatsapp.desc": "Respuesta rápida. Ideal para una primera toma de contacto o dudas urgentes.",
      "contact.email.desc": "Para propuestas formales, ofertas de trabajo o detalles extensos sobre proyectos.",
      "contact.email": "Email",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.location": "Ubicación",
      "contact.location.text": "España",
      "hud.coins": "Monedas",
      "hud.cards": "Cartas",
      "hud.projects": "Proyectos",
      "about.title_1": "Transformando",
      "about.title_highlight": "Lógica",
      "about.title_2": "en Experiencias.",
      "about.p1": "No solo escribo código; diseño sistemas. Mi enfoque se basa en la intersección entre la ingeniería de software rigurosa y la creatividad sin límites. Creo firmemente que las mejores soluciones tecnológicas son aquellas que, además de eficientes, resultan intuitivas y cautivadoras para el usuario.",
      "about.quote": "Mi ambición no es solo resolver problemas complejos, sino hacerlo de una manera que parezca magia.",
      "about.p2": "Busco constantemente desafiar los límites de lo posible en el desarrollo web y de software. Mi objetivo a largo plazo es liderar proyectos que tengan un impacto real, combinando arquitecturas escalables con interfaces que atrapen desde el primer clic.",
      "about.vision.title": "Visión",
      "about.vision.desc": "Crear productos digitales que destaquen por su rendimiento y diseño.",
      "about.mindset.title": "Mentalidad",
      "about.mindset.desc": "Aprendizaje continuo, adaptabilidad y obsesión por el detalle.",
      "footer.text": "© {{year}} Adrián Sánchez Simón. Portfolio Interactivo.",
      "pack.open_button": "Abrir Sobre",
      "pack.title": "Skill Pack",
      "pack.click_to_open": "Click para abrir",
      "pack.not_enough_coins": "Faltan Monedas",
      "pack.new_skill": "¡Nueva Habilidad!",
      "pack.open_another": "Abrir Otro",
      "lang.es": "Español",
      "lang.en-GB": "English (UK)",
      "lang.en-US": "English (US)",
      "lang.de": "Deutsch",
      "lang.nl": "Nederlands"
    }
  },
  "en-GB": {
    translation: {
      "hero.name": "Adrián Sánchez Simón",
      "hero.role": "FullStack Developer",
      "hero.description": "Transforming ideas into exceptional digital experiences. Specialised in creating robust, scalable solutions with impeccable design.",
      "hero.btn.experience": "View Experience",
      "hero.btn.collection": "My Collection",
      "machine.title": "My Projects",
      "machine.desc": "Insert a coin and discover my latest work. Each ball contains a unique experience.",
      "machine.insert_coin": "INSERT COIN",
      "machine.extracting": "EXTRACTING...",
      "machine.depleted": "MACHINE EMPTY",
      "machine.ready": "READY TO EXTRACT",
      "machine.no_funds": "INSUFFICIENT FUNDS",
      "machine.extract": "EXTRACT",
      "machine.cost": "COST:",
      "machine.archive": "Project Archive",
      "machine.unlocked": "Unlocked:",
      "machine.locked": "Locked",
      "machine.extracted": "Data Extracted",
      "machine.empty": "EMPTY",
      "machine.code": "Code",
      "machine.live": "Live View",
      "collection.title": "Skill Collection",
      "collection.desc": "Catch bugs, earn coins and open packs to discover my tech stack! Collect all {{count}} cards to unlock my contact info.",
      "collection.buy": "BUY PACK",
      "collection.cost": "COST: 100",
      "collection.progress": "Progress:",
      "collection.completed": "Collection Completed!",
      "collection.completed_desc": "You have proven to be a true talent hunter. Let's talk!",
      "collection.empty": "You don't have any cards yet. Buy a pack to start!",
      "experience.title": "Professional Experience",
      "experience.desc": "My professional journey, anonymised for privacy.",
      "experience.present": "PRESENT",
      "experience.items": [
        {
          "role": "FullStack Developer",
          "company": "Global Technology Consulting",
          "period": "2022 - PRESENT",
          "description": [
            "Design and implementation of microservices with Java Spring Boot and interface development with React.",
            "Evolutionary maintenance of desktop applications in Java Swing.",
            "Relational database management and query optimisation (HSQLDB, SQLite, SQL).",
            "Version control with Git (Bitbucket/SourceTree).",
            "Task and team management in Jira."
          ]
        },
        {
          "role": "Web Developer & CRM Specialist",
          "company": "Energy Sector Company",
          "period": "2022 - 2022",
          "description": [
            "Led digital transformation, managing and customising the CRM (Zoho Creator) with Deluge and JavaScript.",
            "Developed and maintained corporate web portals using HTML5, CSS3, and ReactJs.",
            "Created internal tools for warehouse management and KPI tracking."
          ]
        },
        {
          "role": "Frontend Developer",
          "company": "Freelance Project",
          "period": "2022 - 2022",
          "description": [
            "Development of an SPA for multimedia content management.",
            "Use of ReactJs, Material UI (MUI), REST API (TMDB), Firebase (Auth, DB)."
          ]
        },
        {
          "role": "Varied Work Experience",
          "company": "Various Sectors",
          "period": "2019 - 2022",
          "description": [
            "Warehouse worker, Delivery driver, Waiter, Pool assistant.",
            "Development of soft skills: teamwork, customer service, and problem-solving under pressure."
          ]
        }
      ],
      "contact.title": "Let's Talk?",
      "contact.desc": "If you liked what you saw and are looking for a passionate, decisive FullStack developer eager to add value, don't hesitate to contact me.",
      "contact.whatsapp.desc": "Fast response. Ideal for a first contact or urgent questions.",
      "contact.email.desc": "For formal proposals, job offers, or extensive project details.",
      "contact.email": "Email",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.location": "Location",
      "contact.location.text": "Spain",
      "hud.coins": "Coins",
      "hud.cards": "Cards",
      "hud.projects": "Projects",
      "about.title_1": "Transforming",
      "about.title_highlight": "Logic",
      "about.title_2": "into Experiences.",
      "about.p1": "I don't just write code; I design systems. My approach is based on the intersection of rigorous software engineering and boundless creativity. I firmly believe that the best technological solutions are those that, in addition to being efficient, are intuitive and captivating for the user.",
      "about.quote": "My ambition is not just to solve complex problems, but to do so in a way that feels like magic.",
      "about.p2": "I constantly seek to challenge the limits of what is possible in web and software development. My long-term goal is to lead projects that have a real impact, combining scalable architectures with interfaces that engage from the first click.",
      "about.vision.title": "Vision",
      "about.vision.desc": "Create digital products that stand out for their performance and design.",
      "about.mindset.title": "Mindset",
      "about.mindset.desc": "Continuous learning, adaptability, and an obsession with detail.",
      "footer.text": "© {{year}} Adrián Sánchez Simón. Interactive Portfolio.",
      "pack.open_button": "Open Pack",
      "pack.title": "Skill Pack",
      "pack.click_to_open": "Click to open",
      "pack.not_enough_coins": "Not Enough Coins",
      "pack.new_skill": "New Skill!",
      "pack.open_another": "Open Another",
      "lang.es": "Español",
      "lang.en-GB": "English (UK)",
      "lang.en-US": "English (US)",
      "lang.de": "Deutsch",
      "lang.nl": "Nederlands"
    }
  },
  "en-US": {
    translation: {
      "hero.name": "Adrián Sánchez Simón",
      "hero.role": "FullStack Developer",
      "hero.description": "Transforming ideas into exceptional digital experiences. Specialized in creating robust, scalable solutions with impeccable design.",
      "hero.btn.experience": "View Experience",
      "hero.btn.collection": "My Collection",
      "machine.title": "My Projects",
      "machine.desc": "Insert a coin and discover my latest work. Each ball contains a unique experience.",
      "machine.insert_coin": "INSERT COIN",
      "machine.extracting": "EXTRACTING...",
      "machine.depleted": "MACHINE EMPTY",
      "machine.ready": "READY TO EXTRACT",
      "machine.no_funds": "INSUFFICIENT FUNDS",
      "machine.extract": "EXTRACT",
      "machine.cost": "COST:",
      "machine.archive": "Project Archive",
      "machine.unlocked": "Unlocked:",
      "machine.locked": "Locked",
      "machine.extracted": "Data Extracted",
      "machine.empty": "EMPTY",
      "machine.code": "Code",
      "machine.live": "Live View",
      "collection.title": "Skill Collection",
      "collection.desc": "Catch bugs, earn coins and open packs to discover my tech stack! Collect all {{count}} cards to unlock my contact info.",
      "collection.buy": "BUY PACK",
      "collection.cost": "COST: 100",
      "collection.progress": "Progress:",
      "collection.completed": "Collection Completed!",
      "collection.completed_desc": "You have proven to be a true talent hunter. Let's talk!",
      "collection.empty": "You don't have any cards yet. Buy a pack to start!",
      "experience.title": "Professional Experience",
      "experience.desc": "My professional journey, anonymized for privacy.",
      "experience.present": "PRESENT",
      "experience.items": [
        {
          "role": "FullStack Developer",
          "company": "Global Technology Consulting",
          "period": "2022 - PRESENT",
          "description": [
            "Design and implementation of microservices with Java Spring Boot and interface development with React.",
            "Evolutionary maintenance of desktop applications in Java Swing.",
            "Relational database management and query optimization (HSQLDB, SQLite, SQL).",
            "Version control with Git (Bitbucket/SourceTree).",
            "Task and team management in Jira."
          ]
        },
        {
          "role": "Web Developer & CRM Specialist",
          "company": "Energy Sector Company",
          "period": "2022 - 2022",
          "description": [
            "Led digital transformation, managing and customizing the CRM (Zoho Creator) with Deluge and JavaScript.",
            "Developed and maintained corporate web portals using HTML5, CSS3, and ReactJs.",
            "Created internal tools for warehouse management and KPI tracking."
          ]
        },
        {
          "role": "Frontend Developer",
          "company": "Freelance Project",
          "period": "2022 - 2022",
          "description": [
            "Development of an SPA for multimedia content management.",
            "Use of ReactJs, Material UI (MUI), REST API (TMDB), Firebase (Auth, DB)."
          ]
        },
        {
          "role": "Varied Work Experience",
          "company": "Various Sectors",
          "period": "2019 - 2022",
          "description": [
            "Warehouse worker, Delivery driver, Waiter, Pool assistant.",
            "Development of soft skills: teamwork, customer service, and problem-solving under pressure."
          ]
        }
      ],
      "contact.title": "Let's Talk?",
      "contact.desc": "If you liked what you saw and are looking for a passionate, decisive FullStack developer eager to add value, don't hesitate to contact me.",
      "contact.whatsapp.desc": "Fast response. Ideal for a first contact or urgent questions.",
      "contact.email.desc": "For formal proposals, job offers, or extensive project details.",
      "contact.email": "Email",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.location": "Location",
      "contact.location.text": "Spain",
      "hud.coins": "Coins",
      "hud.cards": "Cards",
      "hud.projects": "Projects",
      "about.title_1": "Transforming",
      "about.title_highlight": "Logic",
      "about.title_2": "into Experiences.",
      "about.p1": "I don't just write code; I design systems. My approach is based on the intersection of rigorous software engineering and boundless creativity. I firmly believe that the best technological solutions are those that, in addition to being efficient, are intuitive and captivating for the user.",
      "about.quote": "My ambition is not just to solve complex problems, but to do so in a way that feels like magic.",
      "about.p2": "I constantly seek to challenge the limits of what is possible in web and software development. My long-term goal is to lead projects that have a real impact, combining scalable architectures with interfaces that engage from the first click.",
      "about.vision.title": "Vision",
      "about.vision.desc": "Create digital products that stand out for their performance and design.",
      "about.mindset.title": "Mindset",
      "about.mindset.desc": "Continuous learning, adaptability, and an obsession with detail.",
      "footer.text": "© {{year}} Adrián Sánchez Simón. Interactive Portfolio.",
      "pack.open_button": "Open Pack",
      "pack.title": "Skill Pack",
      "pack.click_to_open": "Click to open",
      "pack.not_enough_coins": "Not Enough Coins",
      "pack.new_skill": "New Skill!",
      "pack.open_another": "Open Another",
      "lang.es": "Español",
      "lang.en-GB": "English (UK)",
      "lang.en-US": "English (US)",
      "lang.de": "Deutsch",
      "lang.nl": "Nederlands"
    }
  },
  "de": {
    translation: {
      "hero.name": "Adrián Sánchez Simón",
      "hero.role": "FullStack Developer",
      "hero.description": "Ideen in außergewöhnliche digitale Erlebnisse verwandeln. Spezialisiert auf die Erstellung robuster, skalierbarer Lösungen mit tadellosem Design.",
      "hero.btn.experience": "Erfahrung ansehen",
      "hero.btn.collection": "Meine Sammlung",
      "machine.title": "Meine Projekte",
      "machine.desc": "Wirf eine Münze ein und entdecke meine neuesten Arbeiten. Jede Kugel enthält ein einzigartiges Erlebnis.",
      "machine.insert_coin": "MÜNZE EINWERFEN",
      "machine.extracting": "EXTRAHIEREN...",
      "machine.depleted": "MASCHINE LEER",
      "machine.ready": "BEREIT ZUM EXTRAHIEREN",
      "machine.no_funds": "UNZUREICHENDE MITTEL",
      "machine.extract": "EXTRAHIEREN",
      "machine.cost": "KOSTEN:",
      "machine.archive": "Projektarchiv",
      "machine.unlocked": "Freigeschaltet:",
      "machine.locked": "Gesperrt",
      "machine.extracted": "Daten extrahiert",
      "machine.empty": "LEER",
      "machine.code": "Code",
      "machine.live": "Projekt ansehen",
      "collection.title": "Fähigkeitensammlung",
      "collection.desc": "Fange Bugs, verdiene Münzen und öffne Packs, um meinen Tech-Stack zu entdecken! Sammle alle {{count}} Karten, um meine Kontaktinformationen freizuschalten.",
      "collection.buy": "PACK KAUFEN",
      "collection.cost": "KOSTEN: 100",
      "collection.progress": "Fortschritt:",
      "collection.completed": "Sammlung abgeschlossen!",
      "collection.completed_desc": "Du hast bewiesen, dass du ein wahrer Talentjäger bist. Lass uns reden!",
      "collection.empty": "Du hast noch keine Karten. Kaufe ein Pack, um zu beginnen!",
      "experience.title": "Berufserfahrung",
      "experience.desc": "Mein beruflicher Werdegang, aus Datenschutzgründen anonymisiert.",
      "experience.present": "HEUTE",
      "experience.items": [
        {
          "role": "FullStack Developer",
          "company": "Globale Technologieberatung",
          "period": "2022 - HEUTE",
          "description": [
            "Design und Implementierung von Microservices mit Java Spring Boot und Schnittstellenentwicklung mit React.",
            "Evolutionäre Wartung von Desktop-Anwendungen in Java Swing.",
            "Verwaltung relationaler Datenbanken und Abfrageoptimierung (HSQLDB, SQLite, SQL).",
            "Versionskontrolle mit Git (Bitbucket/SourceTree).",
            "Aufgaben- und Teammanagement in Jira."
          ]
        },
        {
          "role": "Web Developer & CRM Specialist",
          "company": "Unternehmen im Energiesektor",
          "period": "2022 - 2022",
          "description": [
            "Leitung der digitalen Transformation, Verwaltung und Anpassung des CRM (Zoho Creator) mit Deluge und JavaScript.",
            "Entwicklung und Pflege von Unternehmensportalen mit HTML5, CSS3 und ReactJs.",
            "Erstellung interner Tools für die Lagerverwaltung und KPI-Verfolgung."
          ]
        },
        {
          "role": "Frontend Developer",
          "company": "Freelance Projekt",
          "period": "2022 - 2022",
          "description": [
            "Entwicklung einer SPA für die Verwaltung von Multimedia-Inhalten.",
            "Verwendung von ReactJs, Material UI (MUI), REST API (TMDB), Firebase (Auth, DB)."
          ]
        },
        {
          "role": "Verschiedene Arbeitserfahrungen",
          "company": "Verschiedene Sektoren",
          "period": "2019 - 2022",
          "description": [
            "Lagerarbeiter, Lieferfahrer, Kellner, Schwimmbadassistent.",
            "Entwicklung von Soft Skills: Teamarbeit, Kundenservice und Problemlösung unter Druck."
          ]
        }
      ],
      "contact.title": "Lass uns reden?",
      "contact.desc": "Wenn dir gefallen hat, was du gesehen hast, und du einen leidenschaftlichen, entscheidungsfreudigen FullStack-Entwickler suchst, der Mehrwert schaffen möchte, zögere nicht, mich zu kontaktieren.",
      "contact.whatsapp.desc": "Schnelle Antwort. Ideal für eine erste Kontaktaufnahme oder dringende Fragen.",
      "contact.email.desc": "Für formelle Vorschläge, Stellenangebote oder umfangreiche Projektdetails.",
      "contact.email": "E-Mail",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.location": "Standort",
      "contact.location.text": "Spanien",
      "hud.coins": "Münzen",
      "hud.cards": "Karten",
      "hud.projects": "Projekte",
      "about.title_1": "Transforming",
      "about.title_highlight": "Logic",
      "about.title_2": "into Experiences.",
      "about.p1": "I don't just write code; I design systems. My approach is based on the intersection of rigorous software engineering and boundless creativity. I firmly believe that the best technological solutions are those that, in addition to being efficient, are intuitive and captivating for the user.",
      "about.quote": "My ambition is not just to solve complex problems, but to do so in a way that feels like magic.",
      "about.p2": "I constantly seek to challenge the limits of what is possible in web and software development. My long-term goal is to lead projects that have a real impact, combining scalable architectures with interfaces that engage from the first click.",
      "about.vision.title": "Vision",
      "about.vision.desc": "Create digital products that stand out for their performance and design.",
      "about.mindset.title": "Mindset",
      "about.mindset.desc": "Continuous learning, adaptability, and an obsession with detail.",
      "footer.text": "© {{year}} Adrián Sánchez Simón. Interaktives Portfolio.",
      "pack.open_button": "Pack öffnen",
      "pack.title": "Skill Pack",
      "pack.click_to_open": "Klicken zum Öffnen",
      "pack.not_enough_coins": "Nicht genug Münzen",
      "pack.new_skill": "Neue Fähigkeit!",
      "pack.open_another": "Noch eins öffnen",
      "lang.es": "Español",
      "lang.en-GB": "English (UK)",
      "lang.en-US": "English (US)",
      "lang.de": "Deutsch",
      "lang.nl": "Nederlands"
    }
  },
  "nl": {
    translation: {
      "hero.name": "Adrián Sánchez Simón",
      "hero.role": "FullStack Developer",
      "hero.description": "Ideeën transformeren in uitzonderlijke digitale ervaringen. Gespecialiseerd in het creëren van robuuste, schaalbare oplossingen met een onberispelijk ontwerp.",
      "hero.btn.experience": "Bekijk Ervaring",
      "hero.btn.collection": "Mijn Collectie",
      "machine.title": "Mijn Projecten",
      "machine.desc": "Werp een munt in en ontdek mijn nieuwste werk. Elke bal bevat een unieke ervaring.",
      "machine.insert_coin": "MUNT INWERPEN",
      "machine.extracting": "EXTRAHEREN...",
      "machine.depleted": "MACHINE LEEG",
      "machine.ready": "KLAAR OM TE EXTRAHEREN",
      "machine.no_funds": "ONVOLDOENDE SALDO",
      "machine.extract": "EXTRAHEREN",
      "machine.cost": "KOSTEN:",
      "machine.archive": "Projectarchief",
      "machine.unlocked": "Ontgrendeld:",
      "machine.locked": "Vergrendeld",
      "machine.extracted": "Gegevens geëxtraheerd",
      "machine.empty": "LEEG",
      "machine.code": "Code",
      "machine.live": "Bekijk Project",
      "collection.title": "Vaardigheden Collectie",
      "collection.desc": "Vang bugs, verdien munten en open pakketten om mijn tech-stack te ontdekken! Verzamel alle {{count}} kaarten om mijn contactgegevens te ontgrendelen.",
      "collection.buy": "KOOP PAKKET",
      "collection.cost": "KOSTEN: 100",
      "collection.progress": "Voortgang:",
      "collection.completed": "Collectie Voltooid!",
      "collection.completed_desc": "Je hebt bewezen een echte talentenjager te zijn. Laten we praten!",
      "collection.empty": "Je hebt nog geen kaarten. Koop een pakket om te beginnen!",
      "experience.title": "Professionele Ervaring",
      "experience.desc": "Mijn professionele reis, geanonimiseerd voor privacy.",
      "experience.present": "HEDEN",
      "experience.items": [
        {
          "role": "FullStack Developer",
          "company": "Wereldwijd Technologieadviesbureau",
          "period": "2022 - HEDEN",
          "description": [
            "Ontwerp en implementatie van microservices met Java Spring Boot en interface-ontwikkeling met React.",
            "Evolutionair onderhoud van desktopapplicaties in Java Swing.",
            "Beheer van relationele databases en query-optimalisatie (HSQLDB, SQLite, SQL).",
            "Versiebeheer met Git (Bitbucket/SourceTree).",
            "Taak- en teambeheer in Jira."
          ]
        },
        {
          "role": "Web Developer & CRM Specialist",
          "company": "Bedrijf in de Energiesector",
          "period": "2022 - 2022",
          "description": [
            "Leidde digitale transformatie, beheerde en paste het CRM (Zoho Creator) aan met Deluge en JavaScript.",
            "Ontwikkelde en onderhield zakelijke webportalen met HTML5, CSS3 en ReactJs.",
            "Creëerde interne tools voor magazijnbeheer en KPI-tracking."
          ]
        },
        {
          "role": "Frontend Developer",
          "company": "Freelance Project",
          "period": "2022 - 2022",
          "description": [
            "Ontwikkeling van een SPA voor beheer van multimedia-inhoud.",
            "Gebruik van ReactJs, Material UI (MUI), REST API (TMDB), Firebase (Auth, DB)."
          ]
        },
        {
          "role": "Gevarieerde Werkervaring",
          "company": "Verschillende Sectoren",
          "period": "2019 - 2022",
          "description": [
            "Magazijnmedewerker, Bezorger, Ober, Zwembadassistent.",
            "Ontwikkeling van soft skills: teamwork, klantenservice en probleemoplossing onder druk."
          ]
        }
      ],
      "contact.title": "Zullen we praten?",
      "contact.desc": "Als je leuk vond wat je zag en op zoek bent naar een gepassioneerde, daadkrachtige FullStack-ontwikkelaar die graag waarde toevoegt, aarzel dan niet om contact met me op te nemen.",
      "contact.whatsapp.desc": "Snel antwoord. Ideaal voor een eerste contact of dringende vragen.",
      "contact.email.desc": "Voor formele voorstellen, vacatures of uitgebreide projectdetails.",
      "contact.email": "E-mail",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.location": "Locatie",
      "contact.location.text": "Spanje",
      "hud.coins": "Munten",
      "hud.cards": "Kaarten",
      "hud.projects": "Projecten",
      "about.title_1": "Transforming",
      "about.title_highlight": "Logic",
      "about.title_2": "into Experiences.",
      "about.p1": "I don't just write code; I design systems. My approach is based on the intersection of rigorous software engineering and boundless creativity. I firmly believe that the best technological solutions are those that, in addition to being efficient, are intuitive and captivating for the user.",
      "about.quote": "My ambition is not just to solve complex problems, but to do so in a way that feels like magic.",
      "about.p2": "I constantly seek to challenge the limits of what is possible in web and software development. My long-term goal is to lead projects that have a real impact, combining scalable architectures with interfaces that engage from the first click.",
      "about.vision.title": "Vision",
      "about.vision.desc": "Create digital products that stand out for their performance and design.",
      "about.mindset.title": "Mindset",
      "about.mindset.desc": "Continuous learning, adaptability, and an obsession with detail.",
      "footer.text": "© {{year}} Adrián Sánchez Simón. Interactief Portfolio.",
      "pack.open_button": "Pakket openen",
      "pack.title": "Skill Pack",
      "pack.click_to_open": "Klik om te openen",
      "pack.not_enough_coins": "Niet genoeg munten",
      "pack.new_skill": "Nieuwe Vaardigheid!",
      "pack.open_another": "Nog een openen",
      "lang.es": "Español",
      "lang.en-GB": "English (UK)",
      "lang.en-US": "English (US)",
      "lang.de": "Deutsch",
      "lang.nl": "Nederlands"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // default language
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
