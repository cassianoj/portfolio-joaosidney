import pt from "./pt.json";
import en from "./en.json";

export const defaultLocale = "pt" as const;
export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

const dictionaries = { pt, en } as const;
export type TranslationKey = keyof typeof pt;

/** Resolve o locale a partir do pathname (ex: /pt/sobre → "pt"). */
export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  return (locales as readonly string[]).includes(seg)
    ? (seg as Locale)
    : defaultLocale;
}

/** Cria uma função `t(key)` para o locale dado. */
export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale] ?? dictionaries[defaultLocale];
  return function t(key: TranslationKey): string {
    return dict[key] ?? key;
  };
}

/** Troca o locale de uma rota mantendo o resto do caminho. */
export function switchLocale(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if ((locales as readonly string[]).includes(parts[0])) {
    parts[0] = target;
  } else {
    parts.unshift(target);
  }
  return "/" + parts.join("/");
}
