"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t, locale, loading } = useTranslation()
  
  // Video'yu hemen görünür yap - başlangıçta opacity yüksek (hızlı görünürlük için)
  const [videoOpacity, setVideoOpacity] = useState(0.7)

  useEffect(() => {
    setIsMounted(true)
    
    // Video için ultra agresif preload - sayfa yüklenmeden önce
    if (typeof document !== 'undefined') {
      // Prefetch
      const prefetchLink = document.createElement('link')
      prefetchLink.rel = 'prefetch'
      prefetchLink.href = '/videos/hero.mp4'
      prefetchLink.as = 'fetch'
      prefetchLink.crossOrigin = 'anonymous'
      document.head.appendChild(prefetchLink)
      
      // DNS prefetch
      const dnsLink = document.createElement('link')
      dnsLink.rel = 'dns-prefetch'
      dnsLink.href = window.location.origin
      document.head.appendChild(dnsLink)
    }
  }, [])

  // Parallax efekti için scroll listener - arka plan scroll ile birlikte hareket eder
  useEffect(() => {
    let rafId: number | null = null
    let lastScrollY = 0
    
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const currentScrollY = window.scrollY
      if (Math.abs(currentScrollY - lastScrollY) < 3) {
        return
      }
      lastScrollY = currentScrollY
      
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          const rect = sectionRef.current?.getBoundingClientRect()
          if (rect) {
            const windowHeight = window.innerHeight
            // Section görünür alanda olduğunda parallax efekti uygula
            if (rect.top < windowHeight && rect.bottom > 0) {
              // Scroll pozisyonuna göre parallax offset hesapla (0.6 = parallax hızı)
              const parallaxOffset = currentScrollY * 0.6
              setScrollY(parallaxOffset)
            } else if (rect.bottom < 0) {
              // Section tamamen geçildiyse sıfırla
              setScrollY(0)
            }
          }
          rafId = null
        })
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // İlk render için
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  // Video'yu hemen yükle ve oynat - ultra agresif optimizasyon
  useEffect(() => {
    if (!videoRef.current) return
    
    const video = videoRef.current
    
    // Video'yu hemen yükle - hiç bekleme yok
    video.load()
    
    // Video'yu hemen görünür yap - poster görseli neredeyse görünmesin
    setVideoOpacity(0.8)
    
    // Video hazır olduğunda hemen oynat - ultra hızlı
    const tryPlay = () => {
      // En erken state'te bile oynatmayı dene
      if (video.readyState >= 0) {
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Sessizce hata yoksay
          })
        }
      }
    }
    
    // Video hazırsa hemen oynat - hiç bekleme
    tryPlay()
    
    // Çoklu retry mekanizması - video yüklenmeye başladıysa (daha sık)
    setTimeout(() => tryPlay(), 10)
    setTimeout(() => tryPlay(), 25)
    setTimeout(() => tryPlay(), 50)
    setTimeout(() => tryPlay(), 100)
    setTimeout(() => tryPlay(), 200)
    
    // Event listener'ları ekle - en erken event'ler
    const handleLoadStart = () => {
      // Video yüklenmeye başladığında hemen göster - anında
      setVideoReady(true)
      setVideoOpacity(1)
      tryPlay()
      // Hemen tekrar dene
      setTimeout(() => tryPlay(), 10)
    }
    
    const handleLoadedMetadata = () => {
      // Metadata yüklendiğinde kesinlikle göster - anında
      setVideoReady(true)
      setVideoOpacity(1)
      tryPlay()
      // Hemen tekrar dene
      setTimeout(() => tryPlay(), 10)
      setTimeout(() => tryPlay(), 25)
    }
    
    const handleCanPlay = () => {
      setVideoReady(true)
      setVideoOpacity(1)
      tryPlay()
    }
    
    const handleLoadedData = () => {
      setVideoReady(true)
      setVideoOpacity(1)
      tryPlay()
    }
    
    // En erken event'lerden başla
    video.addEventListener('loadstart', handleLoadStart, { once: true })
    video.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true })
    video.addEventListener('canplay', handleCanPlay, { once: true })
    video.addEventListener('loadeddata', handleLoadedData, { once: true })
    video.addEventListener('canplaythrough', () => {
      if (!videoReady) {
        setVideoReady(true)
      }
    }, { once: true })
    
    return () => {
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [videoReady])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden w-full" style={{ position: 'relative', backgroundColor: '#000' }}>
      {/* Background - Poster Image (LCP) ve Video */}
      <div className="absolute inset-0 w-full h-full min-h-screen bg-black" style={{ willChange: 'transform', transform: `translateY(${scrollY}px) translateZ(0)`, top: 0, left: 0, right: 0, bottom: 0 }}>
        {/* Poster Image - Fallback olarak DOM'da duruyor ama hiç görünmüyor (video çok hızlı yükleniyor) */}
        <div className="absolute inset-0 w-full h-full opacity-0" style={{ zIndex: 1, transition: 'none', pointerEvents: 'none', visibility: 'hidden' }}>
          <div className="absolute" style={{ transform: 'translate(-50%, -50%) scale(1.5)', transformOrigin: 'center center', overflow: 'hidden', width: '100vw', height: '100vh', top: '50%', left: '50%', position: 'relative' }}>
            <div className="relative w-full h-full" style={{ width: '100vw', height: '100vh' }}>
              <Image
                src="/images/hero/1.webp"
                alt="Revium Hero"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                fetchPriority="high"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRhQAAABXRUJQVlA4ICgAAAAwAQCdASoEAAQAAVAfJagCdACfFiUAA/vuUAAA"
                style={{ 
                  objectFit: 'cover', 
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Video - Hemen render et, gecikme yok */}
        <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: videoReady ? 2 : 1, willChange: 'contents' }}>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100vw',
              height: '100vh',
              minWidth: '100vw',
              minHeight: '100vh',
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              imageRendering: 'auto',
              WebkitImageRendering: 'auto',
              willChange: 'opacity',
              opacity: videoOpacity
            }}
            poster=""
            onError={() => {
              // Sessizce hata yoksay
            }}
            onLoadStart={() => {
              // Video yüklenmeye başladığında hemen göster - anında
              setVideoReady(true)
              setVideoOpacity(1)
              // Hemen oynatmayı dene
              if (videoRef.current) {
                videoRef.current.play().catch(() => {})
              }
            }}
            onLoadedMetadata={() => {
              // Metadata yüklendiğinde kesinlikle göster ve oynat - anında
              setVideoReady(true)
              setVideoOpacity(1)
              // Hemen oynatmayı dene - çoklu deneme
              if (videoRef.current) {
                videoRef.current.play().catch(() => {})
                setTimeout(() => videoRef.current?.play().catch(() => {}), 10)
                setTimeout(() => videoRef.current?.play().catch(() => {}), 25)
              }
            }}
            onCanPlay={() => {
              setVideoReady(true)
              setVideoOpacity(1)
              // Hemen oynatmayı dene
              if (videoRef.current) {
                videoRef.current.play().catch(() => {})
              }
            }}
            onCanPlayThrough={() => {
              // Video tamamen yüklendi ve kesintisiz oynatılabilir
              if (!videoReady) {
                setVideoReady(true)
              }
            }}
            onLoadedData={() => {
              // Video verisi yüklendiğinde
              if (!videoReady) {
                setVideoReady(true)
              }
            }}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Video üzerinde overlay kaldırıldı - yazılar text-shadow ile okunabilir */}
      </div>
      
      {/* Animated background effects - Optimized for performance */}
      <div className="absolute inset-0 pointer-events-none w-full h-full" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" style={{ willChange: 'transform' }}>
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500/40 to-teal-500/30 opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-gradient"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          />
        </div>
        
        {/* Animated accent lines - Reduced for performance */}
        <div className="absolute inset-0" style={{ willChange: 'opacity' }}>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse-slow"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 min-h-screen flex items-center justify-center container-mobile-enhanced py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 pt-20 sm:pt-24 md:pt-28">
        <div className="w-full max-w-5xl mx-auto">
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-center">
            {/* Main Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-normal px-3 sm:px-4 py-2" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
                <span className="block">{loading ? 'Enerjiyi' : t('hero.title')}</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent py-1" style={{ textShadow: '0 2px 8px rgba(59, 130, 246, 0.5)' }}>
                  {loading ? 'Yeniden Tanımlıyoruz' : t('hero.subtitle')}
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-xl mx-auto px-4 sm:px-6 leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)' }}>
                {loading ? 'Performans, dayanıklılık ve özgürlük ile enerji depolama çözümlerinde yeni standartlar belirliyoruz.' : t('hero.description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center px-4 sm:px-6">
              <Link href={`/${locale}/urunlerimiz`} className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105">
                {loading ? 'Ürünlerimizi İncele' : t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-4 sm:w-4" />
              </Link>
              <Link href={`/${locale}/fiyat-teklifi`} className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-white/90 text-white hover:bg-white/10 hover:border-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105 backdrop-blur-sm">
                {loading ? 'Teklif Al' : t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}