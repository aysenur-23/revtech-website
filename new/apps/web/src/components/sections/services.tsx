"use client"

import { Card, CardProps } from '@/components/ui/card'

// Service cards data
const serviceCards: CardProps[] = [
  {
    title: 'GES Kurulumu',
    subtitle: 'Güneş enerjisi santrali kurulumu ve entegrasyon hizmetleri',
    imageSrc: '/images/services/solar-installation.png',
    imageAlt: 'GES Kurulumu',
    href: '/tr/hizmetlerimiz/ges-kurulumu',
    ratio: '4:3',
    badge: 'Hizmet',
    hoverContent: 'Profesyonel kurulum ekibimiz ile güneş enerjisi santrali kurulumu, teknik destek ve bakım hizmetleri.',
    ctaLabel: 'Detayları İncele',
    colorTheme: 'primary'
  },
  {
    title: 'Endüstriyel Sistem Kurulumu',
    subtitle: 'Büyük ölçekli enerji depolama sistemleri kurulumu ve entegrasyonu',
    imageSrc: '/images/services/power-installation.png',
    imageAlt: 'Endüstriyel Enerji Depolama Sistemleri',
    href: '/tr/hizmetlerimiz/endustriyel-kurulum',
    ratio: '4:3',
    badge: 'Hizmet',
    hoverContent: 'Endüstriyel çözümler için özel tasarım ve 7/24 teknik destek ile büyük ölçekli sistem kurulumu.',
    ctaLabel: 'Detayları İncele',
    colorTheme: 'primary'
  }
]

export function Services() {
  return (
    <section className="section-mobile-enhanced bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container-mobile-enhanced">
        {/* Section header */}
        <div className="text-center space-y-6 sm:space-y-8 mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 px-6">
            Hizmetlerimiz
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto px-6 leading-relaxed">
            Enerji çözümleriniz için kapsamlı hizmetler sunuyoruz.
          </p>
        </div>

        {/* Centered services grid */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 max-w-5xl mx-auto">
          {serviceCards.map((card, index) => (
            <div key={index} className="flex-1">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
