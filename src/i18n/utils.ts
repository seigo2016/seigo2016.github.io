import { defaultLang, type Lang } from './config';
import { uiJa, type UiKey } from './ui/ja';
import { uiEn } from './ui/en';

const ui = { ja: uiJa, en: uiEn } as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  return `/${lang}${path}`;
}

export function formatDate(date: Date, lang: Lang, options?: Intl.DateTimeFormatOptions): string {
  const locale = lang === 'ja' ? 'ja-JP' : 'en-US';
  return date.toLocaleDateString(locale, options || { year: 'numeric', month: '2-digit' });
}

export function formatDateFull(date: Date, lang: Lang): string {
  const locale = lang === 'ja' ? 'ja-JP' : 'en-US';
  return date.toLocaleDateString(locale);
}
