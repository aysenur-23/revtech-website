'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'
import { Layers, Zap, Scale } from 'lucide-react'

export default function Rev2Page() {
  const { t, loading } = useTranslation()

  // Custom Why Choose items for REV-2 (Modular Power Layer)
  const modularTitle = t('features.modularDesign')
  const modularDesc = t('features.modularDesignDesc')
  const capacityTitle = t('productPage.whyChoose.industrial.highCapacity')
  const capacityDesc = t('productPage.whyChoose.industrial.highCapacityDesc')
  const scalableTitle = t('features.scalable')
  const scalableDesc = t('features.scalableDesc')

  const whyChooseItems = [
    {
      icon: Layers,
      title: (loading || modularTitle === 'features.modularDesign') ? 'Tam Modüler' : modularTitle,
      description: (loading || modularDesc === 'features.modularDesignDesc') ? 'İhtiyacınıza göre ölçeklenebilir katmanlı yapı' : modularDesc,
      gradientFrom: 'from-indigo-600',
      gradientTo: 'to-purple-600',
      hoverColor: 'text-indigo-700'
    },
    {
      icon: Scale,
      title: (loading || scalableTitle === 'features.scalable') ? 'Esnek Kapasite' : scalableTitle,
      description: (loading || scalableDesc === 'features.scalableDesc') ? '5.4 kWh\'den 21.6 kWh\'ye kadar artırılabilir kapasite' : scalableDesc,
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-500',
      hoverColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: (loading || capacityTitle === 'productPage.whyChoose.industrial.highCapacity') ? 'Yüksek Verim' : capacityTitle,
      description: (loading || capacityDesc === 'productPage.whyChoose.industrial.highCapacityDesc') ? 'Endüstriyel standartlarda yüksek enerji verimliliği' : capacityDesc,
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-teal-600',
      hoverColor: 'text-emerald-600'
    }
  ]

  const product = {
    name: 'REV-2',
    modelId: 'R-LAYER',
    categoryTitle: loading ? 'Modüler Enerji Depolama' : t('productDetails.rM21600.categoryTitle'),
    capacity: '5.4 – 21.6 kWh',
    power: '51.2 VDC',
    batteryLabel: 'LiFePO₄',
    title: loading ? 'Güç Katmanı – Modüler Enerji Depolama Ünitesi' : t('productDetails.rM21600.title'),
    description: loading ? 'Modüler tasarımı ile esnek enerji depolama çözümü. Farklı kapasite seçenekleri ile endüstriyel ve ticari uygulamalar için ideal çözüm.' : t('productDetails.rM21600.description'),
    image: '/images/products/modular-1.png',
    whyChooseItems,
    features: loading ? [
      'Kapasite: Modüler',
      'AC Çıkış: 51.2 VDC nominal',
      'Batarya Çalışma: 51.2 VDC nominal (modüler)',
      'Boyutlar: 400 × 391 × 365/609/853/1097 mm',
      'Ağırlık: 66/114/162/210 kg',
      'Çalışma Sıcaklığı: -20°C ile +60°C',
      'Garanti: 3 yıl',
      'Modüler tasarım',
      'Esnek kapasite',
      'Endüstriyel kullanım',
      'Kolay kurulum',
      'Uzun ömürlü',
      'Yüksek verim'
    ] : [
      t('productDetails.rM21600.features.modularCapacity'),
      t('productDetails.rM21600.features.nominalVoltage'),
      t('productDetails.rM21600.features.dimensions'),
      t('productDetails.rM21600.features.weight'),
      t('productDetails.rM21600.features.operatingTemp'),
      t('productDetails.rM21600.features.warranty'),
      t('productDetails.rM21600.features.modular'),
      t('productDetails.rM21600.features.layered'),
      t('productDetails.rM21600.features.industrial'),
      t('productDetails.rM21600.features.easyInstall'),
      t('productDetails.rM21600.features.longLife')
    ],
    applications: loading ? [
      'Endüstriyel tesisler',
      'Kabin sistemleri',
      'Konteyner uygulamaları',
      'Mobil ofisler',
      'İnşaat sahaları',
      'Acil durum sistemleri'
    ] : [
      t('productDetails.rM21600.applications.industrial'),
      t('productDetails.rM21600.applications.cabin'),
      t('productDetails.rM21600.applications.container'),
      t('productDetails.rM21600.applications.mobileOffice'),
      t('productDetails.rM21600.applications.construction'),
      t('productDetails.rM21600.applications.emergency')
    ]
  }

  return <ProductPage {...product} />
}