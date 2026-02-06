"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { t, locale, loading } = useTranslation()

  useEffect(() => {
    setIsMounted(true)
    
    // Video kontrolü - DOM yüklendikten sonra
    const timer = setTimeout(() => {
      if (videoRef.current) {
        console.log('Video element bulundu, oynatılmaya çalışılıyor...')
        videoRef.current.play().catch(err => {
          console.error('Video başlatma hatası:', err)
        })
      } else {
        console.error('Video element bulunamadı')
      }
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background - Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          poster="/images/hero/1.png"
          style={{ zIndex: 1 }}
          onError={(e) => {
            console.error('Video error:', e);
          }}
          onLoadStart={() => {
            console.log('Video yüklenmeye başladı');
          }}
          onCanPlay={() => {
            console.log('Video oynatılmaya hazır');
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Video üzerinde lacivert overlay */}
        <div className="absolute inset-0 bg-slate-900/50" style={{ zIndex: 2 }} />
      </div>
      
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500/40 to-teal-500/30 opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-gradient"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        {/* Animated accent lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-0 w-px h-1/3 bg-gradient-to-b from-transparent via-teal-400/50 to-transparent animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-bounce-slow"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-accent-400/60 rounded-full animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-teal-400/50 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center container-mobile-enhanced py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 pt-20 sm:pt-24 md:pt-28">
        <div className="w-full max-w-5xl mx-auto">
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-center">
            {/* Main Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 animate-slide-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-3 sm:px-4">
                <span className="block animate-fade-in" style={{animationDelay: '0.2s'}}>{loading ? 'Enerjiyi' : t('hero.title')}</span>
                <span className="block bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent animate-gradient" style={{animationDelay: '0.4s'}}>
                  {loading ? 'Yeniden Tanımlıyoruz' : t('hero.subtitle')}
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-200 max-w-xl mx-auto animate-fade-in px-4 sm:px-6 leading-relaxed" style={{animationDelay: '0.6s'}}>
                {loading ? 'Performans, dayanıklılık ve özgürlük ile enerji depolama çözümlerinde yeni standartlar belirliyoruz.' : t('hero.description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-4 sm:px-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <Link href={`/${locale}/urunlerimiz`} className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105">
                {loading ? 'Ürünlerimizi İncele' : t('hero.cta')}
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link href={`/${locale}/fiyat-teklifi`} className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105">
                {loading ? 'Teklif Al' : t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}