import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { QueryProvider } from '@/components/query-provider'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  adjustFontFallback: true,
  variable: '--font-inter',
})

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  adjustFontFallback: true,
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://reviumtech.com'),
  title: {
    default: 'Revium - Enerji Depolama ve Yenilenebilir Enerji Çözümleri | Reviumtech',
    template: '%s | Revium - Reviumtech'
  },
  description: 'Revium ve Reviumtech olarak enerji depolama, batarya sistemleri, güneş enerjisi (GES) kurulumu ve yenilenebilir enerji çözümleri sunuyoruz. LiFePO4 teknolojisi ile güvenilir enerji depolama sistemleri.',
  keywords: [
    'Revium',
    'Reviumtech',
    'enerji depolama',
    'batarya sistemleri',
    'güneş enerjisi',
    'GES kurulumu',
    'yenilenebilir enerji',
    'LiFePO4',
    'enerji çözümleri',
    'taşınabilir güç paketi',
    'endüstriyel enerji',
    'sürdürülebilir enerji',
    'enerji teknolojileri',
    'Türkiye enerji',
  ],
  authors: [{ name: 'Revium', url: 'https://reviumtech.com' }],
  creator: 'Revium',
  publisher: 'Reviumtech',
  alternates: {
    canonical: 'https://reviumtech.com',
    languages: {
      'tr': 'https://reviumtech.com/tr',
      'en': 'https://reviumtech.com/en',
      'ar': 'https://reviumtech.com/ar',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['en_US', 'ar_SA'],
    url: 'https://reviumtech.com',
    siteName: 'Revium - Reviumtech',
    title: 'Revium - Enerji Depolama ve Yenilenebilir Enerji Çözümleri',
    description: 'Revium ve Reviumtech olarak enerji depolama, batarya sistemleri, güneş enerjisi (GES) kurulumu ve yenilenebilir enerji çözümleri sunuyoruz.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Revium Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revium - Enerji Depolama ve Yenilenebilir Enerji Çözümleri',
    description: 'Revium ve Reviumtech olarak enerji depolama, batarya sistemleri, güneş enerjisi (GES) kurulumu ve yenilenebilir enerji çözümleri sunuyoruz.',
    images: ['/images/logo.png'],
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
  verification: {
    google: 'your-google-verification-code', // Google Search Console verification code
  },
  category: 'Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#1E3A5F" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="canonical" href="https://reviumtech.com" />
        {/* Preload LCP image for better performance */}
        <link rel="preload" as="image" href="/images/hero/1.png" fetchPriority="high" />
        {/* Preconnect to improve resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://reviumtech.com" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <QueryProvider>
          <div className="min-h-screen">
            {children}
          </div>
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  )
}
