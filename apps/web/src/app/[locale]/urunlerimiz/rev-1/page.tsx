'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'
import { Settings2, Zap, Shield } from 'lucide-react'

export default function Rev1Page() {
  const { t, loading } = useTranslation()

  // Custom Why Choose items for REV-1 (Rack/Cabin Type)
  const industrialTitle = t('productPage.whyChoose.industrial.reliable')
  const industrialDesc = t('productPage.whyChoose.industrial.reliableDesc')
  const capacityTitle = t('productPage.whyChoose.industrial.highCapacity')
  const capacityDesc = t('productPage.whyChoose.industrial.highCapacityDesc')
  const modularTitle = t('productPage.whyChoose.cabin.fixed')
  const modularDesc = t('productPage.whyChoose.cabin.fixedDesc')

  const whyChooseItems = [
    {
      icon: Settings2,
      title: (loading || modularTitle === 'productPage.whyChoose.cabin.fixed') ? 'Modüler Tasarım' : modularTitle,
      description: (loading || modularDesc === 'productPage.whyChoose.cabin.fixedDesc') ? 'Raf ve kabin sistemlerine tam uyumlu esnek yapı' : modularDesc,
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-cyan-600',
      hoverColor: 'text-blue-700'
    },
    {
      icon: Zap,
      title: (loading || capacityTitle === 'productPage.whyChoose.industrial.highCapacity') ? 'Yüksek Kapasite' : capacityTitle,
      description: (loading || capacityDesc === 'productPage.whyChoose.industrial.highCapacityDesc') ? '10.5 kWh enerji kapasitesi ile uzun süreli güç' : capacityDesc,
      gradientFrom: 'from-amber-500',
      gradientTo: 'to-orange-600',
      hoverColor: 'text-amber-600'
    },
    {
      icon: Shield,
      title: (loading || industrialTitle === 'productPage.whyChoose.industrial.reliable') ? 'Endüstriyel Kalite' : industrialTitle,
      description: (loading || industrialDesc === 'productPage.whyChoose.industrial.reliableDesc') ? 'Zorlu endüstriyel koşullar için geliştirilmiş güvenilirlik' : industrialDesc,
      gradientFrom: 'from-slate-600',
      gradientTo: 'to-gray-700',
      hoverColor: 'text-slate-700'
    }
  ]

  const product = {
    name: 'REV-1',
    modelId: 'REV-1',
    categoryTitle: loading ? 'Raf / Kabin Tip Güç Paketi' : t('productDetails.rS10500.categoryTitle'),
    capacity: '10.5 kWh',
    power: '220 VAC',
    batteryLabel: 'LiFePO₄',
    title: loading ? '10.5 kWh Güç Paketi (Raf/Kabin Tip)' : t('productDetails.rS10500.title'),
    description: loading ? 'Raf ve kabin tipi kurulum için 10.5 kWh kapasiteli güç paketi. Yüksek kapasitesi ve modüler tasarımı ile endüstriyel kullanım için ideal çözüm.' : t('productDetails.rS10500.description'),
    image: '/images/products/10-5kwh-1.png',
    whyChooseItems,
    features: loading ? [
      'Kapasite: 10.5 kWh',
      'AC Çıkış: 220 VAC',
      'Batarya Çalışma: ≈51.2 VDC nominal',
      'PV/MPPT: ≈30–80 VDC (modeline göre)',
      'Boyutlar: 400 × 391 × 732 mm',
      'Ağırlık: 100 kg',
      'Çalışma Sıcaklığı: -20°C ile +60°C',
      'Garanti: 3 yıl',
      'Raf/kabin uyumlu tasarım',
      'Yüksek kapasite',
      'Modüler yapı',
      'Endüstriyel kullanım',
      'Kolay kurulum',
      'Uzun ömürlü',
      'Güvenlik: BMS ve koruma devreleri'
    ] : [
      t('productDetails.rS10500.features.capacity'),
      t('productDetails.rS10500.features.powerOutput'),
      t('productDetails.rS10500.features.pvMppt'),
      t('productDetails.rS10500.features.dimensions'),
      t('productDetails.rS10500.features.weight'),
      t('productDetails.rS10500.features.operatingTemp'),
      t('productDetails.rS10500.features.warranty'),
      t('productDetails.rS10500.features.rackCabin'),
      t('productDetails.rS10500.features.highCapacity'),
      t('productDetails.rS10500.features.modular'),
      t('productDetails.rS10500.features.industrial'),
      t('productDetails.rS10500.features.easyInstall'),
      t('productDetails.rS10500.features.longLife'),
      t('productDetails.rS10500.features.safety')
    ],
    applications: loading ? [
      'Endüstriyel tesisler',
      'Kabin sistemleri',
      'Konteyner uygulamaları',
      'Mobil ofisler',
      'İnşaat sahaları',
      'Acil durum sistemleri'
    ] : [
      t('productDetails.rS10500.applications.industrial'),
      t('productDetails.rS10500.applications.cabin'),
      t('productDetails.rS10500.applications.container'),
      t('productDetails.rS10500.applications.mobileOffice'),
      t('productDetails.rS10500.applications.construction'),
      t('productDetails.rS10500.applications.emergency')
    ]
  }

  return <ProductPage {...product} />
}