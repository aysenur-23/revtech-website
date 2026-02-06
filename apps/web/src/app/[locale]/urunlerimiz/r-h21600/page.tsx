'use client'

import { ProductPage } from '@/components/templates/product-page'
import { Truck, Battery, Zap, Shield } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function RH21600Page() {
  const { t, loading } = useTranslation()
  
  const product = {
    name: 'R-H21600',
    title: loading ? 'Hilux Güç Paketi' : t('productDetails.rH21600.title'),
    description: loading ? 'Araç Üstü - Hilux araçları için özel olarak tasarlanmış araç üstü güç paketi. 80 kWh enerji ve çoklu tek/üç-faz kullanım ile mobil enerji çözümü sunar.' : t('productDetails.rH21600.description'),
    image: '/images/products/hilux-21-6kwh-1.png',
    features: loading ? [
      'Enerji: 80 kWh (LiFePO₄)',
      'Çıkış: 3×10 kW @ 380 VAC (tek çıkış 20 kW\'a kadar) / 5×5 kW @ 220 VAC (tek çıkış 10 kW\'a kadar)',
      'PV Girişi: 20 kW',
      'Boyutlar: Araç entegrasyonuna bağlı',
      'Ağırlık: Araç entegrasyonuna bağlı',
      'Çalışma Sıcaklığı: -20°C ile +60°C',
      'Garanti: 3 yıl',
      'Çoklu tek/üç-faz kullanım',
      '20 kW PV desteği',
      'Araç uyumlu tasarım',
      'Hilux entegrasyonu',
      'Mobil enerji çözümü',
      'Endüstriyel kullanım'
    ] : [
      t('productDetails.rH21600.features.energy'),
      t('productDetails.rH21600.features.output'),
      t('productDetails.rH21600.features.pvInput'),
      t('productDetails.rH21600.features.dimensions'),
      t('productDetails.rH21600.features.weight'),
      t('productDetails.rH21600.features.operatingTemp'),
      t('productDetails.rH21600.features.warranty'),
      t('productDetails.rH21600.features.multiPhase'),
      t('productDetails.rH21600.features.pvSupport'),
      t('productDetails.rH21600.features.vehicleCompatible'),
      t('productDetails.rH21600.features.hiluxIntegration'),
      t('productDetails.rH21600.features.mobile'),
      t('productDetails.rH21600.features.industrial')
    ],
    applications: loading ? [
      'Hilux araçları',
      'Mobil enerji sistemleri',
      'Araç üstü kurulumlar',
      'Endüstriyel araçlar',
      'Savunma sanayi',
      'Acil durum araçları'
    ] : [
      t('productDetails.rH21600.applications.hilux'),
      t('productDetails.rH21600.applications.mobile'),
      t('productDetails.rH21600.applications.vehicleTop'),
      t('productDetails.rH21600.applications.industrial'),
      t('productDetails.rH21600.applications.defense'),
      t('productDetails.rH21600.applications.emergency')
    ]
  }

  return <ProductPage {...product} />
}
