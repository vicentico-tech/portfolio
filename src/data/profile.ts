export const profile = {
  name: "Jose Garcia Mata",
  firstName: "Jose",
  lastName: "Garcia Mata",
  role: "Front-End Engineer",
  headline:
    "Front-End Engineer · Angular & React · TypeScript · Web Architecture · NGRX · Signals · Atomic Design",
  location: "Gran Santiago, Chile",
  email: "josegarciama23@gmail.com",
  linkedin: "https://www.linkedin.com/in/jose-garciamata-638447124",
  status: "Available for select engagements",
  bio: [
    "Mechanical Engineer turned Front-End Engineer with a track record of shipping production interfaces for enterprise clients across Chile and North America.",
    "I focus on the craft of client-side engineering — component architecture, type-safe state, and the design details that separate a shipped feature from a shipped product.",
    "Deep with Angular (NGRX, Signals, Atomic Design) and increasingly with the React / Next.js side of the stack.",
  ],
  stats: [
    { label: "Years shipping production UIs", value: "5+" },
    { label: "Frameworks lived-in", value: "2" },
    { label: "Enterprise clients", value: "4+" },
    { label: "Timezones served", value: "3" },
  ],
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  tags: string[];
};

export const experiences: Experience[] = [
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
];

export const education = [
  {
    institution: "Universidad Nacional Experimental Francisco de Miranda",
    degree: "B.Eng. Mechanical Engineering",
    period: "2007 — 2014",
  },
];

export const certifications = [
  "Next.js App Router Fundamentals",
  "React Foundations for Next.js",
  "Introduction to Claude Cowork",
  "Claude Code 101",
  "Python",
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
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
    items: [
      "REST APIs",
      "SoapUI",
      "Swagger",
      "Git / GitFlow",
      "GitLab",
      "Jira",
    ],
  },
];

export const marqueeStack = [
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
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
] as const;
