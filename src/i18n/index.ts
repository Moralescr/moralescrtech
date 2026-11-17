import { es } from "./es";
import { en } from "./en";
import type { Locale } from "./routes";
import type { TranslationDictionary } from "./types";

export {
  ROUTE_PATHS,
  SECTION_ANCHORS,
  SECTION_IDS,
  getAlternatePath,
  getLangFromUrl,
  getRoutePath,
  type Locale,
  type RouteKey,
} from "./routes";
export type { AboutPillar, TranslationDictionary } from "./types";

const dictionaries: Record<Locale, TranslationDictionary> = {
  es,
  en,
};

export function useTranslations(lang: Locale): TranslationDictionary {
  return dictionaries[lang];
}
