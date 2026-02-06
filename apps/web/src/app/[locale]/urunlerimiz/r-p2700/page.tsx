'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'

export default function RP2700Page() {
  const { t, loading } = useTranslation()
  
  const product = {
    name: 'R-P2700',
    title: loading ? '2.7 kWh Taşınabilir Güç Paketi' : t('productDetails.rP2700.title'),
    description: loading ? '2.7 kWh kapasiteli taşınabilir güç paketi. Kamp ve acil durumlar için ideal taşınabilir enerji çözümü. 2 kW saf sinüs çıkışı ve 700 W MPPT ile güneş entegrasyonu.' : t('productDetails.rP2700.description'),
    image: '/images/products/2-7kwh-a-1.png',
    features: loading ? [
      'Kapasite: 2.7 kWh (LiFePO₄)',
      'Güç Çıkışı: 230 VAC, 2000 W (pure sine)',
      'PV/MPPT: 700 W PV şarj',
      'Çevrim Ömrü: ≈4000 cycle',
      'Boyutlar: 550 × 391 × 317 mm',
      'Ağırlık: 33 kg',
      'Çalışma Sıcaklığı: -20°C ile +60°C',
      'Garanti: 3 yıl',
      '2 kW saf sinüs çıkış',
      '700 W MPPT ile güneş entegrasyonu',
      'USB ve AC çıkışları',
      'LED ışık sistemi',
      'Kompakt tasarım'
    ] : [
      t('productDetails.rP2700.features.capacity'),
      t('productDetails.rP2700.features.powerOutput'),
      t('productDetails.rP2700.features.pvMppt'),
      t('productDetails.rP2700.features.cycleLife'),
      t('productDetails.rP2700.features.dimensions'),
      t('productDetails.rP2700.features.weight'),
      t('productDetails.rP2700.features.operatingTemp'),
      t('productDetails.rP2700.features.warranty'),
      t('productDetails.rP2700.features.sineOutput'),
      t('productDetails.rP2700.features.solarIntegration'),
      t('productDetails.rP2700.features.usbAc'),
      t('productDetails.rP2700.features.ledLight'),
      t('productDetails.rP2700.features.compactDesign')
    ],
    applications: loading ? [
      'Kamp aktiviteleri',
      'Acil durumlar',
      'Seyahat',
      'Dış mekan etkinlikleri',
      'Kırıcı delici aletler',
      'Elektronik cihazlar'
    ] : [
      t('productDetails.rP2700.applications.camping'),
      t('productDetails.rP2700.applications.emergency'),
      t('productDetails.rP2700.applications.travel'),
      t('productDetails.rP2700.applications.outdoor'),
      t('productDetails.rP2700.applications.tools'),
      t('productDetails.rP2700.applications.electronics')
    ]
  }

  return <ProductPage {...product} />
}