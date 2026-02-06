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
  title: {
    default: 'Revium',
    template: '%s | Revium'
  },
  description: 'Enerji depolama ve yenilenebilir enerji çözümleri',
  keywords: ['enerji', 'depolama', 'batarya', 'güneş enerjisi', 'GES', 'sürdürülebilir'],
  other: {
    'Content-Type': 'text/html; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
  },
  authors: [{ name: 'Revium' }],
  creator: 'Revium',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
    ],
    shortcut: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://reviumtech.com',
    title: 'Revium',
    description: 'Enerji depolama ve yenilenebilir enerji çözümleri',
    siteName: 'Revium',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revium',
    description: 'Enerji depolama ve yenilenebilir enerji çözümleri',
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
