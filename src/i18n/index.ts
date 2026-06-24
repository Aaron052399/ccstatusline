import { zhCN } from './zh-CN';

export type Locale = 'en-US' | 'zh-CN';

const locales: Record<string, Record<string, string>> = { 'zh-CN': zhCN };

let cachedLocale: Locale | null = null;

/**
 * Get the current locale from environment variable.
 * Defaults to 'zh-CN' (this is the zh fork).
 */
export function getLocale(): Locale {
    if (cachedLocale) {
        return cachedLocale;
    }
    const env = process.env.CCSTATUSLINE_LANG?.trim();
    if (env === 'en-US') {
        cachedLocale = 'en-US';
    } else {
        cachedLocale = 'zh-CN';
    }
    return cachedLocale;
}

/**
 * Translate a string to the current locale.
 * Falls back to the original string if no translation is found.
 */
export function t(text: string): string {
    if (getLocale() === 'en-US') {
        return text;
    }
    const dict = locales[getLocale()];
    return dict?.[text] ?? text;
}

/**
 * Translate a string, trying the full string first,
 * then falling back to the original.
 * Useful for template literals where only part needs translation.
 */
export function tOr(text: string, fallback: string): string {
    const translated = t(text);
    return translated !== text ? translated : fallback;
}
