export interface AboutPillar {
  title: string;
  description: string;
  iconName: "briefcase" | "code" | "globe";
}

export interface TranslationDictionary {
  meta: {
    homeTitle: string;
    homeDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    ogLocale: string;
  };
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    openMenu: string;
    closeMenu: string;
    switchLangLabel: string;
    switchLangCode: string;
    skipToContent: string;
    mainNavLabel: string;
    mobileNavLabel: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    phrases: string[];
    descriptionPrefix: string;
    descriptionHighlight1: string;
    descriptionMiddle: string;
    descriptionHighlight2: string;
    primaryCta: string;
    secondaryCta: string;
    roleValue: string;
    locationValue: string;
    passionValue: string;
    prompt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    highlight: string;
  };
  projects: {
    allEyebrow: string;
    allTitle: string;
    allHighlight: string;
    allDescription: string;
    backHome: string;
    viewDemo: string;
    demoShort: string;
    github: string;
  };
  about: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    paragraphs: string[];
    pillars: AboutPillar[];
    ctaTitle: string;
    ctaButton: string;
    backHome: string;
    roleLabel: string;
    locationLabel: string;
  };
  footer: {
    tagline: string;
    rights: string;
    madeWithPrefix: string;
    madeWithSuffix: string;
    navHeading: string;
    contactHeading: string;
    socialHeading: string;
    copyEmail: string;
    copiedEmail: string;
    switchLangText: string;
  };
  notFound: {
    title: string;
    eyebrow: string;
    heading: string;
    highlight: string;
    description: string;
    backHome: string;
    viewProjects: string;
  };
}
