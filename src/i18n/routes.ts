export type Locale = "es" | "en";
export type RouteKey = "home" | "projects" | "about";

export const ROUTE_PATHS: Record<Locale, Record<RouteKey, string>> = {
  en: {
    home: "/",
    projects: "/projects",
    about: "/about",
  },
  es: {
    home: "/es/",
    projects: "/es/proyectos",
    about: "/es/sobre-mi",
  },
};

export const SECTION_IDS: Record<Locale, { services: string }> = {
  es: {
    services: "servicios",
  },
  en: {
    services: "services",
  },
};

export const SECTION_ANCHORS: Record<Locale, { services: string }> = {
  en: {
    services: "/#services",
  },
  es: {
    services: "/es/#servicios",
  },
};

function normalizePathname(pathname: string): string {
  if (pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function getLangFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    return "es";
  }
  return "en";
}

export function getRoutePath(lang: Locale, route: RouteKey): string {
  return ROUTE_PATHS[lang][route];
}

const ROUTE_LOOKUP: Record<string, RouteKey> = {
  "/": "home",
  "/es": "home",
  "/projects": "projects",
  "/es/proyectos": "projects",
  "/about": "about",
  "/es/sobre-mi": "about",
};

export function getAlternatePath(
  pathname: string,
  targetLang: Locale,
): string {
  const normalized = normalizePathname(pathname);
  const routeKey = ROUTE_LOOKUP[normalized] ?? "home";
  return ROUTE_PATHS[targetLang][routeKey];
}
