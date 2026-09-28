import { defaultLocale, type Locale } from './ui';

export function isLocale(value: string | undefined): value is Locale {
	return value === 'es' || value === 'en';
}

export function getLocaleFromUrl(url: URL): Locale {
	const segment = url.pathname.split('/')[1];
	return isLocale(segment) ? segment : defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return locale === defaultLocale ? normalizedPath : `/${locale}${normalizedPath}`;
}
