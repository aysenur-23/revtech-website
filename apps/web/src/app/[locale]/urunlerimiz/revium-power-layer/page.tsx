'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'

export default function RM21600Page() {
  const { t, loading } = useTranslation()

  const product = {
    name: 'R-M21600',
    modelId: 'R-LAYER',
    categoryTitle: loading ? 'Ölçeklenebilir Endüstriyel Batarya' : t('productDetails.revium-power-layer.categoryTitle'),
    capacity: '5.4 – 172 kWh',
    power: 'Scalable',
    batteryLabel: 'LiFePO₄',
    title: loading ? 'Güç Katmanı – Modüler Enerji Depolama Ünitesi' : t('productDetails.revium-power-layer.title'),
    description: loading ? 'Modüler tasarımı ile esnek enerji depolama çözümü. Katmanlı ölçeklenme ve aynı taban alanda kapasite artışı ile endüstriyel ve ticari uygulamalar için ideal çözüm.' : t('productDetails.revium-power-layer.description'),
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
      t('productDetails.revium-power-layer.features.nominalVoltage'),
      t('productDetails.revium-power-layer.features.modularCapacity'),
      t('productDetails.revium-power-layer.features.life'),
      t('productDetails.revium-power-layer.features.dimensions'),
      t('productDetails.revium-power-layer.features.weight'),
      t('productDetails.revium-power-layer.features.operatingTemp'),
      t('productDetails.revium-power-layer.features.warranty'),
      t('productDetails.revium-power-layer.features.layered'),
      t('productDetails.revium-power-layer.features.capacityIncrease'),
      t('productDetails.revium-power-layer.features.modular'),
      t('productDetails.revium-power-layer.features.industrial'),
      t('productDetails.revium-power-layer.features.easyInstall'),
      t('productDetails.revium-power-layer.features.longLife')
    ],
    applications: loading ? [
      'Endüstriyel tesisler',
      'Kabin sistemleri',
      'Konteyner uygulamaları',
      'Mobil ofisler',
      'İnşaat sahaları',
      'Acil durum sistemleri'
    ] : [
      t('productDetails.revium-power-layer.applications.industrial'),
      t('productDetails.revium-power-layer.applications.cabin'),
      t('productDetails.revium-power-layer.applications.container'),
      t('productDetails.revium-power-layer.applications.mobileOffice'),
      t('productDetails.revium-power-layer.applications.construction'),
      t('productDetails.revium-power-layer.applications.emergency')
    ]
  }

  return <ProductPage {...product} />
}