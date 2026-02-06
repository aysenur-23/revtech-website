'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'

export default function RM21600Page() {
  const { t, loading } = useTranslation()
  
  const product = {
    name: 'R-M21600',
    title: loading ? 'Güç Katmanı – Modüler Enerji Depolama Ünitesi' : t('productDetails.rM21600.title'),
    description: loading ? 'Modüler tasarımı ile esnek enerji depolama çözümü. Katmanlı ölçeklenme ve aynı taban alanda kapasite artışı ile endüstriyel ve ticari uygulamalar için ideal çözüm.' : t('productDetails.rM21600.description'),
    image: '/images/products/stack-21-6kwh-1.png',
    features: loading ? [
      'Nominal Gerilim: 51.2 V DC',
      'Modüler Kapasite: 105/210/315/420 Ah • 5.4/10.8/16.2/21.6 kWh',
      'Ömür: ≈4000 cycle',
      'Boyutlar: 400 × 391 × 365/609/853/1097 mm',
      'Ağırlık: 66/114/162/210 kg',
      'Çalışma Sıcaklığı: -20°C ile +60°C',
      'Garanti: 3 yıl',
      'Katmanlı ölçeklenme',
      'Aynı taban alanda kapasite artışı',
      'Modüler tasarım',
      'Endüstriyel kullanım',
      'Kolay kurulum',
      'Uzun ömürlü'
    ] : [
      t('productDetails.rM21600.features.nominalVoltage'),
      t('productDetails.rM21600.features.modularCapacity'),
      t('productDetails.rM21600.features.life'),
      t('productDetails.rM21600.features.dimensions'),
      t('productDetails.rM21600.features.weight'),
      t('productDetails.rM21600.features.operatingTemp'),
      t('productDetails.rM21600.features.warranty'),
      t('productDetails.rM21600.features.layered'),
      t('productDetails.rM21600.features.capacityIncrease'),
      t('productDetails.rM21600.features.modular'),
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