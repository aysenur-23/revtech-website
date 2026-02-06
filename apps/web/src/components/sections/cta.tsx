'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export function CTA() {
  const { t, locale, loading } = useTranslation()
  
  return (
    <section aria-labelledby="cta-heading" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-slate-50 transition-all duration-700">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 to-green-500/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/25 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-400/35 rounded-full blur-lg animate-pulse delay-500" />
      </div>
      
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold leading-normal text-neutral-800 py-2">
            {loading ? 'Enerji Geleceğinizi' : t('ctaSection.title')}{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent pb-3" style={{ lineHeight: '1.2', paddingBottom: '0.5rem' }}>
              {loading ? 'Şekillendirin' : t('ctaSection.titleHighlight')}
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-prose text-base md:text-lg text-neutral-600">
            {loading ? 'Revium ile sürdürülebilir enerji çözümlerine geçin. Danışmanlık için hemen iletişime geçin ve enerji tasarrufuna başlayın.' : t('ctaSection.description')}
          </p>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm md:text-base font-medium bg-primary text-white hover:opacity-90 shadow-sm focus-visible:ring-2">
              <Link href={`/${locale}/fiyat-teklifi`}>
                {loading ? 'Teklif Talep Et' : t('ctaSection.quoteButton')}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm md:text-base font-medium border border-neutral-300 text-neutral-900 bg-white hover:bg-neutral-50 hover:text-neutral-900 focus-visible:ring-2 shadow-sm">
              <Link href={`/${locale}/urunlerimiz`}>
                {loading ? 'Ürünlerimizi İncele' : t('ctaSection.productsButton')}
              </Link>
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  )
}
