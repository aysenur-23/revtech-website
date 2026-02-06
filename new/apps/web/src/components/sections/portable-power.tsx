import { Battery, Zap, Shield, CheckCircle, Sun, Clock } from 'lucide-react'
import { IconWrapper } from '@/components/ui/icon-wrapper'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function PortablePower() {
  const features = [
    {
      icon: Battery,
      title: "5.4 kWh Kapasite",
      description: "LiFePO₄ teknolojisi ile yüksek enerji yoğunluğu"
    },
    {
      icon: Zap,
      title: "2000W Çıkış",
      description: "Saf sinüs dalga, 20ms UPS geçiş"
    },
    {
      icon: Sun,
      title: "1500W PV Şarj",
      description: "Güneş enerjisi ile hızlı şarj"
    },
    {
      icon: Shield,
      title: "Kapsamlı Koruma",
      description: "Aşırı yük, akım, termal koruma"
    }
  ]

  const specifications = [
    "5.4 kWh",
    "2000W", 
    "LiFePO₄",
    "4000+ Döngü"
  ]

  return (
    <section className="section-mobile-enhanced bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container-mobile-enhanced">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Product Image */}
          <div className="relative animate-slide-up order-2 lg:order-1">
            <div className="relative">
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                <img 
                  src="/images/products/5-4kwh-2000w-1.png" 
                  alt="Revium 5.4 kWh 2000W Güç Paketi"
                  className="w-full h-full object-contain bg-gradient-to-br from-slate-50 to-slate-100"
                />
              </div>
              
              {/* Floating Badges - Outside the image */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 animate-scale-in" style={{animationDelay: '0.3s'}}>
                <div className="bg-white text-emerald-600 px-2 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 shadow-lg border border-emerald-100">
                  <Battery className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">5.4 kWh Kapasite</span>
                  <span className="sm:hidden">5.4 kWh</span>
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 animate-scale-in" style={{animationDelay: '0.5s'}}>
                <div className="bg-white text-blue-600 px-2 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 shadow-lg border border-blue-100">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">2000W Saf Sinüs</span>
                  <span className="sm:hidden">2000W</span>
                </div>
              </div>
              
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 animate-scale-in" style={{animationDelay: '0.7s'}}>
                <div className="bg-white text-orange-600 px-2 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 shadow-lg border border-orange-100">
                  <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">1500W PV Şarj</span>
                  <span className="sm:hidden">1500W</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up order-1 lg:order-2" style={{animationDelay: '0.2s'}}>
            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 animate-fade-in px-6 sm:px-0 leading-tight" style={{animationDelay: '0.4s'}}>
              Revium 5,4 kWh Güç Paketi
            </h2>

            {/* Sub Title */}
            <h3 className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-medium animate-fade-in px-6 sm:px-0 leading-relaxed" style={{animationDelay: '0.6s'}}>
              Yüksek Kapasiteli Taşınabilir Enerji Çözümü
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 animate-fade-in px-6 sm:px-0 leading-relaxed" style={{animationDelay: '0.8s'}}>
              <strong className="text-emerald-600">5.4 kWh kapasite</strong> ve <strong className="text-blue-600">2000W çıkış gücü</strong> ile{' '}
              <strong className="text-brand-600">kritik yükler</strong>,{' '}
              <strong className="text-brand-600">acil durumlar</strong> ve{' '}
              <strong className="text-brand-600">profesyonel uygulamalar</strong> için güvenilir enerji sağlar.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in" style={{animationDelay: `${1 + index * 0.1}s`}}>
                  <div className="mx-auto mb-2 sm:mb-3">
                    <IconWrapper size="md" variant="primary" className="bg-blue-50">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </IconWrapper>
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Technical Specifications */}
            <div className="flex flex-wrap gap-2 sm:gap-3 animate-fade-in px-6 sm:px-0" style={{animationDelay: '1.4s'}}>
              {specifications.map((spec, index) => (
                <div key={index} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-neutral-700 rounded-lg text-xs sm:text-sm font-semibold border border-neutral-200 hover:shadow-lg transition-all duration-200">
                  {spec}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in px-6 sm:px-0" style={{animationDelay: '1.6s'}}>
              <Button asChild className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                <Link href="/tr/urunlerimiz/r-sb5400b" className="flex items-center justify-center gap-2">
                  <Battery className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">5.4 kWh 2000W Detayları</span>
                  <span className="sm:hidden">Detayları Gör</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base">
                <Link href="/tr/fiyat-teklifi" className="flex items-center justify-center">
                  Teklif Al
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
