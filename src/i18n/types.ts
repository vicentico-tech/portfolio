export type Locale = "en" | "es";

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  tags: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type LiveProject = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  loginRequired?: boolean;
};

export type Content = {
  profile: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    headline: string;
    location: string;
    email: string;
    linkedin: string;
    whatsapp: string;
    whatsappHref: string;
    status: string;
    bio: string[];
    stats: { label: string; value: string }[];
  };
  nav: {
    links: { href: string; label: string }[];
    getInTouch: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    intro: string;
    exploreJourney: string;
    scrollCue: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    bioLabel: string;
    values: { title: string; body: string }[];
    educationLabel: string;
    certificationsLabel: string;
    coursesLabel: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    openLive: string;
    loginRequired: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    responseTime: string;
    sendMessage: string;
    copyEmail: string;
    copiedEmail: string;
    whatsappLabel: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSending: string;
    formSuccess: string;
    formError: string;
    formNotConfigured: string;
  };
  footer: {
    builtWith: string;
  };
  experiences: Experience[];
  education: { institution: string; degree: string; period: string }[];
  certifications: string[];
  coursesInProgress: string[];
  skillGroups: SkillGroup[];
  marqueeStack: string[];
  liveProjects: LiveProject[];
};
