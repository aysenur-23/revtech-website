import { getRequestConfig } from 'next-intl/server';
import { routing, Locale } from './src/i18n/routing';
import tr from './messages/tr.json';
import en from './messages/en.json';
import ar from './messages/ar.json';

const messages = { tr, en, ar } as unknown as Record<Locale, typeof tr>;

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as Locale)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: messages[locale as Locale]
    };
});
