'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export function MissionStatement() {
  const { t, locale, loading } = useTranslation()
  return (
    <section className="section-mobile-enhanced bg-gradient-to-br from-blue-100 via-sky-100 to-blue-200">
      <div className="container-mobile-enhanced">
        <div className="text-center space-y-3 sm:space-y-4">
          {/* Mission Text */}
          <div className="space-y-2 sm:space-y-3 mb-8 sm:mb-10">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 px-4 sm:px-6 leading-normal py-2 mb-3 sm:mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent pb-3" style={{ lineHeight: '1.2', paddingBottom: '0.5rem' }}>
                      {loading ? 'Performans, dayanıklılık ve özgürlük' : t('mission.title')}
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600 font-medium px-4 sm:px-6 leading-relaxed">
                    {loading ? '— enerjiyi yeniden tanımlıyoruz.' : t('mission.subtitle')}
                  </p>
          </div>
          
          {/* CTA Button */}
          <div className="mt-6 sm:mt-8">
            <Link href={`/${locale}/kurumsal`} className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base md:text-lg">
              {loading ? 'KURUMSAL' : t('mission.cta')}
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
