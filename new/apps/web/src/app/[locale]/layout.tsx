import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, Locale } from '@/i18n/routing';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
    // metadataBase: new URL('https://reviumtech.com'),
    title: {
        default: 'Revium Tech - Yenilenebilir Enerji Çözümleri',
        template: '%s | Revium Tech'
    },
    description: 'Kurumsal kalitede modern web uygulaması - Yenilenebilir enerji teknolojileri ve çözümleri',
    keywords: ['enerji', 'yenilenebilir enerji', 'teknoloji', 'revium'],
    authors: [{ name: 'Revium Tech' }],
    creator: 'Revium Tech',
    publisher: 'Revium Tech',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: '/favicon.png', type: 'image/png' },
            { url: '/favicon.ico', sizes: 'any' }
        ],
        apple: [
            { url: '/favicon.png', sizes: '180x180', type: 'image/png' }
        ],
    },
    manifest: '/manifest.json',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Revium Tech',
    },
    openGraph: {
        type: 'website',
        locale: 'tr_TR',
        url: 'https://reviumtech.com',
        siteName: 'Revium Tech',
        title: 'Revium Tech - Yenilenebilir Enerji Çözümleri',
        description: 'Kurumsal kalitede modern web uygulaması',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Revium Tech - Yenilenebilir Enerji Çözümleri',
        description: 'Kurumsal kalitede modern web uygulaması',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

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
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <meta name="theme-color" content="#1E3A5F" />
            </head>
            <body className="font-sans antialiased" suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    <div className="min-h-screen flex flex-col">
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
