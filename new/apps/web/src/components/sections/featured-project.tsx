import { Zap, Shield, Activity, Settings, ArrowRight, TrendingUp, RotateCcw } from 'lucide-react'
import { IconWrapper } from '@/components/ui/icon-wrapper'

export function FeaturedProject() {
  const features = [
    {
      icon: Zap,
      title: "2.7 kWh Kapasite",
      bgColor: "bg-orange-500"
    },
    {
      icon: Shield,
      title: "Çanta Tasarım",
      bgColor: "bg-green-500"
    },
    {
      icon: Activity,
      title: "Taşınabilir",
      bgColor: "bg-blue-500"
    },
    {
      icon: Settings,
      title: "Hızlı Kurulum",
      bgColor: "bg-purple-500"
    }
  ]

  const stats = [
    {
      icon: TrendingUp,
      value: "2.7 kWh",
      label: "Enerji Kapasitesi"
    },
    {
      icon: RotateCcw,
      value: "33 kg",
      label: "Ağırlık"
    },
    {
      icon: Shield,
      value: "Hızlı Şarj",
      label: "Şarj Özelliği"
    }
  ]

  return (
    <section className="section-mobile-enhanced bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container-mobile-enhanced">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Project Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-3xl overflow-hidden hover-lift">
              {/* Project Image */}
              <div className="relative rounded-2xl aspect-[4/5] overflow-hidden">
                <img 
                  src="/images/products/newsu.png" 
                  alt="2.7 kWh Çanta Tipi Güç Depolama Sistemi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Project Information */}
          <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {/* Project Header */}
            <div className="space-y-3">
              {/* Featured Badge */}
              <div className="inline-flex items-center px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="w-1 h-1 bg-blue-500 rounded-full mr-1.5 animate-pulse-slow"></div>
                Öne Çıkan Proje
              </div>

              {/* Main Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 animate-fade-in px-6 sm:px-0 leading-tight" style={{animationDelay: '0.6s'}}>
                2.7 kWh Çanta Tipi Güç Depolama Sistemi
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-600 animate-fade-in px-6 sm:px-0 leading-relaxed" style={{animationDelay: '0.8s'}}>
                Taşınabilir ve kompakt tasarımı ile her yerde kullanılabilen 2.7 kWh kapasiteli güç depolama sistemi. 
                Kolay taşıma ve hızlı kurulum imkanı sunar.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 px-6 sm:px-0">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in" style={{animationDelay: `${1 + index * 0.1}s`}}>
                  <div className="mx-auto mb-3 sm:mb-4">
                    <IconWrapper size="lg" variant="primary">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </IconWrapper>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Performance Statistics */}
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 hover-lift animate-fade-in mx-6 sm:mx-0" style={{animationDelay: '1.4s'}}>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-2 sm:mb-3">
                      <IconWrapper size="lg" variant="primary" className="bg-blue-100">
                        <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </IconWrapper>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-blue-900 mb-1 sm:mb-2 counter">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-blue-700">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
