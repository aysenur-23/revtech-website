"use client"

import { CardProps } from '@/components/ui/card'
import { CardGrid } from '@/components/ui/card-grid'
import { useTranslation } from '@/hooks/useTranslation'

export function Services() {
  const { t, locale, loading } = useTranslation()

  const serviceCards: CardProps[] = [
    {
      title: loading ? 'GES Kurulumu' : t('products.solarInstallation.title'),
      imageSrc: '/images/services/ges-hero.png',
      imageAlt: loading ? 'GES Kurulumu' : t('products.solarInstallation.title'),
      href: `/${locale}/hizmetlerimiz/ges-kurulumu`,
      ratio: '4:3',
      ctaLabel: loading ? 'Detayları İncele' : t('products.learnMore'),
      colorTheme: 'primary'
    },
    {
      title: loading ? 'Endüstriyel Sistem Kurulumu' : t('products.industrialInstallation.title'),
      imageSrc: '/images/services/industrial-service-new.webp',
      imageAlt: loading ? 'Endüstriyel Enerji Depolama Sistemleri' : t('products.industrialInstallation.title'),
      href: `/${locale}/hizmetlerimiz/endustriyel-kurulum`,
      ratio: '4:3',
      ctaLabel: loading ? 'Detayları İncele' : t('products.learnMore'),
      colorTheme: 'primary'
    }
  ]

  return (
    <CardGrid
      cards={serviceCards}
      title={loading ? 'Hizmetlerimiz' : t('nav.services')}
      subtitle={loading ? 'Enerji çözümleriniz için kapsamlı hizmetler sunuyoruz.' : t('products.solarInstallation.subtitle')}
      className="bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50"
    />
  )
}
