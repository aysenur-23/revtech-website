"use client";

import { useEffect, useRef, useState } from 'react'
import { Zap, Target, Rocket } from 'lucide-react'
import { IconWrapper } from '@/components/ui/icon-wrapper'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

const getFeatures = (t: any, loading: boolean) => [
  {
    icon: Zap,
    title: loading ? "Yüksek Performans" : t('features.highPerformance'),
    description: loading ? "LiFePO₄ teknolojisi ile 4000+ döngü ömrü ve maksimum güvenilirlik" : t('features.highPerformanceDesc')
  },
  {
    icon: Target,
    title: loading ? "Dayanıklı Tasarım" : t('features.durableDesign'), 
    description: loading ? "IP54 koruma sınıfı ile zorlu koşullarda bile mükemmel performans" : t('features.durableDesignDesc')
  },
  {
    icon: Rocket,
    title: loading ? "Hızlı Çözüm" : t('features.quickSolution'),
    description: loading ? "Plug-and-play kurulum ile dakikalar içinde kullanıma hazır sistemler" : t('features.quickSolutionDesc')
  }
]

export function Features() {
  const { t, locale, loading } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const features = getFeatures(t, loading)

  useEffect(() => {
    let rafId: number | null = null
    let lastScrollY = 0
    let ticking = false
    
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      // Throttle: Sadece scroll pozisyonu önemli ölçüde değiştiyse işlem yap
      const currentScrollY = window.scrollY
      if (Math.abs(currentScrollY - lastScrollY) < 5) {
        ticking = false
        return
      }
      lastScrollY = currentScrollY
      
      // getBoundingClientRect'i requestAnimationFrame içinde çağır (forced reflow'u önler)
      // Sadece section görünür alanda olduğunda hesapla
      requestAnimationFrame(() => {
        if (!sectionRef.current) return
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Section görünür alanda olduğunda parallax efekti uygula
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Section'ın viewport içindeki pozisyonuna göre parallax hesapla
          const parallaxOffset = rect.top * 1.2
          setScrollY(parallaxOffset)
        } else if (rect.bottom < 0) {
          // Section tamamen geçildiyse sıfırla
          setScrollY(0)
        }
      })
      
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        if (rafId === null) {
          rafId = requestAnimationFrame(() => {
            handleScroll()
            rafId = null
          })
        }
        ticking = true
      }
    }

    // Intersection Observer ile section görünürlüğünü takip et (daha performanslı)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
            setScrollY(0)
          }
        })
      },
      { threshold: 0, rootMargin: '50%' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    
    // İlk yüklemede de çalıştır (debounced)
    const initialTimeout = setTimeout(() => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          handleScroll()
          rafId = null
        })
      }
    }, 100)

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      observer.disconnect()
      clearTimeout(initialTimeout)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      aria-labelledby="features-heading" 
      className="relative section-mobile-enhanced bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          transform: `translateY(${-scrollY}px) scale(1.15)`,
          willChange: 'transform'
        }}
      >
        <Image
          src="/images/revium/anasayfa/pexels-photo-236089.jpeg"
          alt="Revium Background"
          fill
          className="object-cover"
          priority={false}
          loading="lazy"
          quality={75}
          sizes="100vw"
        />
               {/* Overlay for better text readability */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-200/70 via-sky-200/70 to-blue-300/70" />
      </div>
      {/* Content */}
      <div className="container-mobile-enhanced relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-800 px-4 sm:px-6 mb-3 sm:mb-4">
            <span className="block">{loading ? 'Neden' : t('features.whyTitle')}</span>
            <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent pb-3" style={{ lineHeight: '1.2', paddingBottom: '0.5rem' }}>
              {loading ? 'Revium?' : t('features.whyTitleHighlight')}
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto px-4 sm:px-6 leading-relaxed">
            {loading ? 'Güçlü, dayanıklı ve özgür enerji çözümleri için doğru tercih' : t('features.subtitle')}
          </p>
        </div>
        
        {/* Features Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto justify-items-center ${
          features.length === 1 ? 'justify-center max-w-sm' : 
          features.length === 2 ? 'sm:max-w-2xl' : 
          features.length === 3 ? 'lg:max-w-4xl' : 
          features.length % 2 === 1 && features.length > 1 ? 'lg:max-w-4xl' : ''
        }`}>
          {features.map((feature, index) => (
            <div key={index} className="group h-full w-full max-w-sm">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-blue-100 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-105 h-full flex flex-col">
                {/* Icon */}
                <div className="mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconWrapper size="md" variant="primary">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </IconWrapper>
                </div>
            
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-neutral-800 mb-2 sm:mb-3 md:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
