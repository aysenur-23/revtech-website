'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'

export default function RU200000Page() {
  const { t, loading } = useTranslation()
  
  const product = {
    name: 'R-U200000',
    title: loading ? 'Savunma Sanayi UNIMOG Güç Paketi' : t('productDetails.rU200000.title'),
    description: loading ? 'Araç Üstü - UNIMOG araçları için özel olarak tasarlanmış araç üstü güç paketi. 200 kWh enerji ve 60 kW yüksek güç ile zorlu koşullarda güvenilir enerji sağlar.' : t('productDetails.rU200000.description'),
    image: '/images/products/unimog-200kwh-1.jpg',
    features: loading ? [
      'Enerji: 200 kWh',
      'Çıkış: 230/380 VAC, 60 kW',
      'PV Girişi: 80 kW',
      'Şarj: 100 kW DC hızlı / 22 kW AC',
      'Boyutlar: Araç entegrasyonuna bağlı',
      'Ağırlık: Araç entegrasyonuna bağlı',
      'Çalışma Sıcaklığı: -20°C ile +60°C',
      'Garanti: 3 yıl',
      '60 kW yüksek güç',
      '100 kW DC hızlı şarj',
      'UNIMOG uyumlu tasarım',
      'Endüstriyel kullanım',
      'Savunma sanayi uygulamaları',
      'Zorlu koşullarda kullanım'
    ] : [
      t('productDetails.rU200000.features.energy'),
      t('productDetails.rU200000.features.output'),
      t('productDetails.rU200000.features.pvInput'),
      t('productDetails.rU200000.features.charging'),
      t('productDetails.rU200000.features.dimensions'),
      t('productDetails.rU200000.features.weight'),
      t('productDetails.rU200000.features.operatingTemp'),
      t('productDetails.rU200000.features.warranty'),
      t('productDetails.rU200000.features.highPower'),
      t('productDetails.rU200000.features.fastCharge'),
      t('productDetails.rU200000.features.unimogCompatible'),
      t('productDetails.rU200000.features.industrial'),
      t('productDetails.rU200000.features.defense'),
      t('productDetails.rU200000.features.harshConditions')
    ],
    applications: loading ? [
      'UNIMOG araçları',
      'Mobil enerji sistemleri',
      'Araç üstü kurulumlar',
      'Endüstriyel araçlar',
      'Savunma sanayi',
      'Acil durum araçları'
    ] : [
      t('productDetails.rU200000.applications.unimog'),
      t('productDetails.rU200000.applications.mobile'),
      t('productDetails.rU200000.applications.vehicleTop'),
      t('productDetails.rU200000.applications.industrial'),
      t('productDetails.rU200000.applications.defense'),
      t('productDetails.rU200000.applications.emergency')
    ]
  }

  return <ProductPage {...product} />
}