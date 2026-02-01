export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export const defaultLang = 'ja';
export type Lang = keyof typeof languages;
