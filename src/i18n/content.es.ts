import type { Content } from "./types";

export const contentEs: Content = {
  profile: {
    name: "Jose Garcia Mata",
    firstName: "Jose",
    lastName: "Garcia Mata",
    role: "Ingeniero Front-End",
    headline:
      "Ingeniero Front-End · Angular & React · TypeScript · Arquitectura Web · NGRX · Signals · Atomic Design",
    location: "Gran Santiago, Chile",
    email: "josegarciama23@gmail.com",
    linkedin: "https://www.linkedin.com/in/jose-garcia-mata-638447124/",
    whatsapp: "+56 9 8375 3388",
    whatsappHref: "https://wa.me/56983753388",
    status: "Disponible para proyectos seleccionados",
    bio: [
      "Ingeniero Mecánico convertido en Ingeniero Front-End, con historial de interfaces en producción para clientes empresariales en Chile y Norteamérica.",
      "Me enfoco en el oficio de la ingeniería del lado del cliente — arquitectura de componentes, estado con tipado seguro y los detalles de diseño que separan una funcionalidad entregada de un producto bien terminado.",
      "Profundo conocimiento de Angular (NGRX, Signals, Atomic Design) y cada vez más experiencia en React / Next.js.",
    ],
    stats: [
      { label: "Años entregando UIs en producción", value: "5+" },
      { label: "Frameworks dominados", value: "2" },
      { label: "Clientes empresariales", value: "4+" },
      { label: "Zonas horarias atendidas", value: "3" },
    ],
  },
  nav: {
    links: [
      { href: "#about", label: "Sobre mí" },
      { href: "#journey", label: "Trayectoria" },
      { href: "#skills", label: "Habilidades" },
      { href: "#portfolio", label: "Portafolio" },
      { href: "#contact", label: "Contacto" },
    ],
    getInTouch: "Contáctame",
  },
  hero: {
    titleLine1: "Ingeniería Front-End",
    titleLine2: "para productos que llegan a producción.",
    intro:
      "Soy Jose Garcia Mata — Ingeniero Front-End radicado en Santiago, Chile. Construyo interfaces de alto rendimiento, tipadas y basadas en componentes con Angular y React / Next.js, con la disciplina de arquitectura que necesitan los equipos empresariales.",
    exploreJourney: "Ver mi trayectoria",
    scrollCue: "Desplázate para explorar",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Ingeniero primero. Front-end por vocación.",
    description:
      "Pasé de la ingeniería mecánica al software porque las interfaces son donde los productos se encuentran con las personas. Hoy dedico mis días a dar forma a sistemas de componentes, refinar el flujo de estado y cuidar ese último 10% de pulido que hace que un producto se sienta bien.",
    bioLabel: "Biografía",
    values: [
      {
        title: "Mentalidad de ingeniería",
        body: "Mi base en ingeniería mecánica define cómo descompongo los problemas: interfaces limpias, estado predecible, decisiones honestas.",
      },
      {
        title: "Oficio antes que ceremonia",
        body: "Componentes atómicos, contratos con tipado seguro, estado reactivo — pero solo donde realmente aportan mantenibilidad.",
      },
      {
        title: "Nivel empresarial",
        body: "Años de trabajo en consultoras empresariales entregando a clientes de banca, RR.HH. y remuneraciones bajo plazos reales.",
      },
    ],
    educationLabel: "Educación",
    certificationsLabel: "Certificaciones",
    coursesLabel: "Aprendiendo actualmente",
  },
  timeline: {
    eyebrow: "Trayectoria profesional",
    title: "Del taller al código.",
    description:
      "Un recorrido de más de cinco años entre freelance, equipos de ingeniería reducidos y consultoras empresariales. Cada etapa afinó una arista distinta — arquitectura, ritmo de entrega u oficio con clientes.",
  },
  skills: {
    eyebrow: "Habilidades y stack",
    title: "Las herramientas que uso.",
    description:
      "Un stack de trabajo refinado a través de entregas empresariales — priorizando mantenibilidad a largo plazo, seguridad de tipos y estado reactivo.",
  },
  portfolio: {
    eyebrow: "Portafolio",
    title: "Trabajo destacado — en línea y publicado.",
    description:
      "Algunos proyectos que construí y publiqué de principio a fin, junto con los proyectos empresariales de mi trayectoria profesional de arriba.",
    openLive: "Ver en vivo",
    loginRequired: "Requiere acceso",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Construyamos algo que valga la pena entregar.",
    description:
      "Disponible para proyectos seleccionados — tiempo completo, contrato o asesoría. Envíame un mensaje, escríbeme directamente por correo o contáctame por WhatsApp.",
    responseTime: "Tiempo de respuesta habitual: dentro de 24 horas en días hábiles.",
    sendMessage: "Enviar un mensaje",
    copyEmail: "Copiar email",
    copiedEmail: "Copiado",
    whatsappLabel: "WhatsApp",
    formName: "Nombre",
    formEmail: "Email",
    formMessage: "Mensaje",
    formSubmit: "Enviar mensaje",
    formSending: "Enviando…",
    formSuccess: "Gracias — tu mensaje está en camino. Te responderé dentro de 24 horas.",
    formError: "Algo salió mal al enviar tu mensaje. Prueba por email o WhatsApp.",
    formNotConfigured:
      "El formulario de contacto aún no está completamente configurado — por ahora usa email o WhatsApp.",
  },
  footer: {
    builtWith: "Construido con Next.js.",
  },
  experiences: [
    {
      company: "Improving",
      role: "Desarrollador Front-End",
      period: "Dic 2024 — Presente",
      location: "Remoto · Cliente: Trinet",
      summary:
        "Ingeniero front-end integrado en el proyecto del cliente Trinet, construyendo interfaces para una plataforma empresarial de RR.HH. y remuneraciones.",
      highlights: [
        "Entrego funcionalidades en una aplicación Angular a gran escala usada por clientes empresariales.",
        "Colaboro entre husos horarios con equipos de producto, diseño y back-end en EE.UU.",
        "Impulso la seguridad de tipos, los patrones reactivos y la consistencia de la UI en todo el código base.",
      ],
      tags: ["Angular", "TypeScript", "NGRX", "Signals", "RxJS", "REST APIs"],
    },
    {
      company: "3IT",
      role: "Desarrollador Front-End",
      period: "Feb 2023 — Dic 2024",
      location: "Santiago, Chile",
      summary:
        "Casi dos años entregando aplicaciones Angular para clientes empresariales — desde funcionalidades nuevas hasta el fortalecimiento de plataformas existentes.",
      highlights: [
        "A cargo de módulos Angular complejos con gestión de estado vía NGRX.",
        "Trabajé junto a diseñadores traduciendo flujos de Figma a una UI accesible y responsiva.",
        "Revisé código de pares y guié a otros en patrones de TypeScript y buenas prácticas de RxJS.",
      ],
      tags: ["Angular", "NGRX", "TypeScript", "SASS", "Angular Material", "Jira"],
    },
    {
      company: "Globaltuning",
      role: "Desarrollador Front-End",
      period: "Nov 2022 — Ene 2023",
      location: "Santiago, Chile",
      summary:
        "Proyecto corto e intensivo migrando un código base Angular heredado e integrando la librería de diseño del Banco Santander.",
      highlights: [
        "Lideré la migración de un proyecto en producción a Angular 12.",
        "Integré la librería interna de componentes de Santander junto a Material y Bootstrap.",
        "Consumí un amplio catálogo de servicios SOAP vía SoapUI; apoyé el ensamblaje de microservicios con Swagger.",
        "Gestioné versionamiento en GitLab bajo GitFlow; trabajé historias vía Jira.",
      ],
      tags: [
        "Angular 12",
        "TypeScript",
        "SASS",
        "Material",
        "Bootstrap",
        "SoapUI",
        "Swagger",
        "GitFlow",
      ],
    },
    {
      company: "DerivatiK",
      role: "Desarrollador Front-End",
      period: "Abr 2022 — Nov 2022",
      location: "Santiago, Chile",
      summary:
        "Entregué funcionalidades Angular frente a requerimientos de producto cambiantes en un equipo de ingeniería reducido.",
      highlights: [
        "Construí y mantuve componentes Angular frente a requerimientos que cambiaban semana a semana.",
        "Trabajé directamente con un equipo pequeño y ágil, a cargo de funcionalidades de principio a fin.",
        "Consumí APIs REST y resolví el trabajo diario de manejo de estado y formularios complejos.",
      ],
      tags: ["Angular", "TypeScript", "SCSS", "REST APIs"],
    },
    {
      company: "Independiente",
      role: "Desarrollador Front-End Freelance",
      period: "Ene 2021 — Jul 2022",
      location: "Santiago, Chile",
      summary:
        "Construí proyectos front-end de principio a fin para clientes independientes — el tramo que convirtió mi base de ingeniería mecánica en una carrera de tiempo completo en software.",
      highlights: [
        "Entregué proyectos con Angular 2++, TypeScript y JavaScript moderno.",
        "Compuse la UI usando PrimeNG y Bootstrap; estilicé con SASS.",
        "Consumí APIs REST y conecté estado reactivo de punta a punta.",
      ],
      tags: ["Angular 2++", "TypeScript", "JavaScript", "SASS", "PrimeNG", "Bootstrap"],
    },
  ],
  education: [
    {
      institution: "Universidad Nacional Experimental Francisco de Miranda",
      degree: "Ingeniería Mecánica",
      period: "2007 — 2014",
    },
  ],
  certifications: [
    "Next.js App Router Fundamentals",
    "React Foundations for Next.js",
    "Introduction to Claude Cowork",
    "Claude Code 101",
    "Python",
  ],
  coursesInProgress: [
    "AI Coder: Complete Claude Code & Coding Agents Course",
    "Python Essentials 1",
  ],
  skillGroups: [
    {
      title: "Base",
      items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
    },
    {
      title: "Arquitectura y Estado",
      items: [
        "NGRX",
        "Signals",
        "RxJS",
        "Atomic Design",
        "Basado en componentes",
        "Arquitectura Web",
      ],
    },
    {
      title: "UI y Estilos",
      items: [
        "SASS / SCSS",
        "CSS Flexbox",
        "Angular Material",
        "PrimeNG",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Integración y Herramientas",
      items: ["APIs REST", "SoapUI", "Swagger", "Git / GitFlow", "GitLab", "Jira"],
    },
  ],
  marqueeStack: [
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "NGRX",
    "Signals",
    "RxJS",
    "Tailwind",
    "SASS",
    "PrimeNG",
    "Angular Material",
    "Bootstrap",
    "REST",
    "GitFlow",
    "Atomic Design",
  ],
  liveProjects: [
    {
      title: "Indicadores App",
      description:
        "Un dashboard que muestra los indicadores económicos diarios de Chile (UF, UTM, dólar, euro y más) en una interfaz limpia y rápida.",
      href: "https://josepopit.github.io/indicadoresApp/indicadores",
      tags: ["Angular", "TypeScript", "APIs REST"],
    },
    {
      title: "Next.js Dashboard",
      description:
        "Un panel de administración construido con el App Router de Next.js — autenticación, tablas de datos y server actions de punta a punta.",
      href: "https://nextjs-dashboard-iota-steel.vercel.app/login",
      tags: ["Next.js", "React", "TypeScript"],
      loginRequired: true,
    },
    {
      title: "Campeones de League of Legends",
      description:
        "Un catálogo navegable de campeones de League of Legends que consume una API pública de datos del juego, con enrutamiento y diseño responsivo.",
      href: "https://josepopit.github.io/league-of-legends-page/campeones/portada",
      tags: ["Angular", "TypeScript", "APIs REST"],
    },
  ],
};
