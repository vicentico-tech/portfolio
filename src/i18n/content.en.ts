import type { Content } from "./types";

export const contentEn: Content = {
  profile: {
    name: "Jose Garcia Mata",
    firstName: "Jose",
    lastName: "Garcia Mata",
    role: "Front-End Engineer",
    headline:
      "Front-End Engineer · Angular & React · TypeScript · Web Architecture · NGRX · Signals · Atomic Design",
    location: "Gran Santiago, Chile",
    email: "josegarciama23@gmail.com",
    linkedin: "https://www.linkedin.com/in/jose-garcia-mata-638447124/",
    whatsapp: "+56 9 8375 3388",
    whatsappHref: "https://wa.me/56983753388",
    status: "Available for select engagements",
    bio: [
      "Mechanical Engineer turned Front-End Engineer with a track record of shipping production interfaces for enterprise clients across Chile and North America.",
      "I focus on the craft of client-side engineering — component architecture, type-safe state, and the design details that separate a shipped feature from a shipped product.",
      "Deep expertise with Angular (NGRX, Signals, Atomic Design), with growing range on the React / Next.js side of the stack.",
    ],
    stats: [
      { label: "Years shipping production UIs", value: "5+" },
      { label: "Frameworks lived-in", value: "2" },
      { label: "Enterprise clients", value: "4+" },
      { label: "Timezones served", value: "3" },
    ],
  },
  nav: {
    links: [
      { href: "#about", label: "About" },
      { href: "#journey", label: "Journey" },
      { href: "#skills", label: "Skills" },
      { href: "#portfolio", label: "Portfolio" },
      { href: "#contact", label: "Contact" },
    ],
    getInTouch: "Get in touch",
  },
  hero: {
    titleLine1: "Front-End engineering",
    titleLine2: "for products that ship.",
    intro:
      "I'm Jose Garcia Mata — a Front-End Engineer based in Santiago, Chile. I build performant, typed, component-driven interfaces in Angular and React / Next.js, with the architecture discipline enterprise teams rely on.",
    exploreJourney: "Explore my journey",
    scrollCue: "Scroll to explore",
  },
  about: {
    eyebrow: "About",
    title: "Engineer first. Front-end by focus.",
    description:
      "I moved from mechanical engineering into software because interfaces are where products meet people. Now I spend my days shaping component systems, refining state flows, and pushing the last 10% of polish that makes a product feel right.",
    bioLabel: "Bio",
    values: [
      {
        title: "Engineering mindset",
        body: "A mechanical engineering foundation shapes how I decompose problems — clean interfaces, predictable state, honest trade-offs.",
      },
      {
        title: "Craft over ceremony",
        body: "Atomic components, type-safe contracts, reactive state — but only where they earn their weight in maintainability.",
      },
      {
        title: "Enterprise-ready",
        body: "Years of work inside enterprise consultancies delivering to banking, HR and payroll clients under real deadlines.",
      },
    ],
    educationLabel: "Education",
    certificationsLabel: "Certifications",
    coursesLabel: "Currently learning",
  },
  timeline: {
    eyebrow: "Career journey",
    title: "From workshop to codebase.",
    description:
      "A five-plus-year arc through freelance shipping, lean engineering teams and enterprise consultancies. Each stop sharpened a different edge — architecture, delivery cadence, or client craft.",
  },
  skills: {
    eyebrow: "Skills & stack",
    title: "The tools I reach for.",
    description:
      "A working stack refined through enterprise delivery — biased toward long-term maintainability, type safety, and reactive state.",
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Selected work — live and shipped.",
    description:
      "A handful of projects I've built and published end to end, alongside the enterprise engagements from my career journey above.",
    openLive: "View live",
    loginRequired: "Login required",
    demoCredentialsLabel: "Demo credentials",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something worth shipping.",
    description:
      "Open to select engagements — full-time, contract, or advisory. Send a message, email me directly, or reach out on WhatsApp.",
    responseTime: "Typical response time: within 24 hours on business days.",
    sendMessage: "Send a message",
    copyEmail: "Copy email",
    copiedEmail: "Copied",
    whatsappLabel: "WhatsApp",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send message",
    formSending: "Sending…",
    formSuccess: "Thanks — your message is on its way. I'll reply within 24 hours.",
    formError: "Something went wrong sending your message. Try email or WhatsApp instead.",
    formNotConfigured:
      "The contact form isn't fully set up yet — please use email or WhatsApp for now.",
  },
  footer: {
    builtWith: "Built with Next.js.",
  },
  experiences: [
    {
      company: "Improving",
      role: "Front-End Developer",
      period: "Dec 2024 — Present",
      location: "Remote · Client: Trinet",
      summary:
        "Front-end engineer embedded on the Trinet client engagement, building interfaces for an enterprise HR and payroll platform.",
      highlights: [
        "Ship features across a large-scale Angular application used by enterprise customers.",
        "Collaborate across timezones with US-based product, design and back-end teams.",
        "Champion type-safety, reactive patterns and UI consistency across the codebase.",
      ],
      tags: ["Angular", "TypeScript", "NGRX", "Signals", "RxJS", "REST APIs"],
    },
    {
      company: "3IT",
      role: "Front-End Developer",
      period: "Feb 2023 — Dec 2024",
      location: "Santiago, Chile",
      summary:
        "Almost two years delivering Angular applications for enterprise clients — from greenfield features to hardening existing platforms.",
      highlights: [
        "Owned complex Angular modules with state management via NGRX.",
        "Partnered with designers to translate Figma flows into accessible, responsive UI.",
        "Reviewed peer code and mentored on TypeScript patterns and RxJS idioms.",
      ],
      tags: ["Angular", "NGRX", "TypeScript", "SASS", "Angular Material", "Jira"],
    },
    {
      company: "Globaltuning",
      role: "Front-End Developer",
      period: "Nov 2022 — Jan 2023",
      location: "Santiago, Chile",
      summary:
        "Short intensive engagement migrating a legacy Angular codebase and integrating with the Banco Santander design library.",
      highlights: [
        "Led migration of a production project to Angular 12.",
        "Integrated Santander's internal component library alongside Material and Bootstrap.",
        "Consumed a large catalog of SOAP services via SoapUI; supported microservice assembly with Swagger.",
        "Managed versioning in GitLab under GitFlow; worked stories via Jira.",
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
      role: "Front-End Developer",
      period: "Apr 2022 — Nov 2022",
      location: "Santiago, Chile",
      summary:
        "Delivered Angular features against fast-moving product requirements in a lean engineering team.",
      highlights: [
        "Built and maintained Angular components against weekly-shifting product requirements.",
        "Worked directly with a small, lean team — owning features from spec to deploy.",
        "Consumed REST APIs and handled everyday state and form-heavy UI work.",
      ],
      tags: ["Angular", "TypeScript", "SCSS", "REST APIs"],
    },
    {
      company: "Self Employed",
      role: "Freelance Front-End Developer",
      period: "Jan 2021 — Jul 2022",
      location: "Santiago, Chile",
      summary:
        "Built front-end projects end-to-end for independent clients — the run that turned a mechanical engineering background into a full-time career in software.",
      highlights: [
        "Delivered projects with Angular 2++, TypeScript and modern JavaScript.",
        "Composed UI using PrimeNG and Bootstrap; styled with SASS.",
        "Consumed REST APIs and wired reactive state end-to-end.",
      ],
      tags: ["Angular 2++", "TypeScript", "JavaScript", "SASS", "PrimeNG", "Bootstrap"],
    },
  ],
  education: [
    {
      institution: "Universidad Nacional Experimental Francisco de Miranda",
      degree: "B.Eng. Mechanical Engineering",
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
      title: "Core",
      items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
    },
    {
      title: "Architecture & State",
      items: [
        "NGRX",
        "Signals",
        "RxJS",
        "Atomic Design",
        "Component-driven",
        "Web Architecture",
      ],
    },
    {
      title: "UI & Styling",
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
      title: "Integration & Tooling",
      items: ["REST APIs", "SoapUI", "Swagger", "Git / GitFlow", "GitLab", "Jira"],
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
        "A dashboard that tracks Chile's daily economic indicators (UF, UTM, dollar, euro and more) in a clean, fast interface.",
      href: "https://josepopit.github.io/indicadoresApp/indicadores",
      tags: ["Angular", "TypeScript", "REST APIs"],
    },
    {
      title: "Next.js Dashboard",
      description:
        "An admin dashboard built with the Next.js App Router — authentication, data tables and server actions end to end.",
      href: "https://nextjs-dashboard-iota-steel.vercel.app/login",
      tags: ["Next.js", "React", "TypeScript"],
      loginRequired: true,
      demoCredentials: { user: "user@nextmail.com", pass: "123456" },
    },
    {
      title: "League of Legends Champions",
      description:
        "A browsable catalog of League of Legends champions consuming a public game-data API, with routing and responsive layout.",
      href: "https://josepopit.github.io/league-of-legends-page/campeones/portada",
      tags: ["Angular", "TypeScript", "REST APIs"],
    },
  ],
};
