import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, Locale } from '@/i18n/routing';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import '@/app/globals.css';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

interface Props {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
                <meta name="theme-color" content="#1E3A5F" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <link rel="canonical" href="https://reviumtech.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://reviumtech.com" />
            </head>
            <body className="font-sans antialiased" suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    <div className="min-h-screen flex flex-col" dir={dir} lang={locale}>
                        <SiteHeader />
                        <main className="flex-1">
                            {children}
                        </main>
                        <SiteFooter />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
