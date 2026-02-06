"use client";

import { Zap, Target, Rocket } from 'lucide-react'
import { IconWrapper } from '@/components/ui/icon-wrapper'

const features = [
  {
    icon: Zap,
    title: "Yüksek Performans",
    description: "LiFePO₄ teknolojisi ile 4000+ döngü ömrü ve maksimum güvenilirlik"
  },
  {
    icon: Target,
    title: "Dayanıklı Tasarım", 
    description: "IP54 koruma sınıfı ile zorlu koşullarda bile mükemmel performans"
  },
  {
    icon: Rocket,
    title: "Hızlı Çözüm",
    description: "Plug-and-play kurulum ile dakikalar içinde kullanıma hazır sistemler"
  }
]

export function Features() {
  return (
    <section 
      aria-labelledby="features-heading" 
      className="relative section-mobile-enhanced bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900"
    >
      <div className="container-mobile-enhanced">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 mb-8 sm:mb-12 md:mb-16">
          <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white px-4 sm:px-6">
            <span className="block">Neden</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Revium?
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200 max-w-2xl mx-auto px-4 sm:px-6 leading-relaxed">
            Güçlü, dayanıklı ve özgür enerji çözümleri için doğru tercih
          </p>
        </div>
        
        {/* Features Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group h-full">
              <div className="bg-slate-900/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-slate-300/50 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 shadow-2xl h-full flex flex-col">
                {/* Icon */}
                <div className="mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconWrapper size="lg" variant="primary">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                  </IconWrapper>
                </div>
            
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
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
