'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'

export default function RP2700Page() {
  const { t, loading } = useTranslation()

  const product = {
    name: 'R-P2700',
    modelId: 'R-P2700',
    categoryTitle: loading ? 'Saha Tipi Taşınabilir Güç Ünitesi' : t('productDetails.revium-2-7-kwh.categoryTitle'),
    capacity: '2.7 kWh',
    power: '2000 W',
    batteryLabel: 'LiFePO₄',
    title: loading ? '2.7 kWh Taşınabilir Güç Paketi' : t('productDetails.revium-2-7-kwh.title'),
    description: loading ? '2.7 kWh kapasiteli taşınabilir güç paketi. Kamp ve acil durumlar için ideal taşınabilir enerji çözümü. 2 kW saf sinüs çıkışı ve 700 W MPPT ile güneş entegrasyonu.' : t('productDetails.revium-2-7-kwh.description'),
    image: '/images/products/2-7kwh-a-1.webp',
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
      'Kompakt tasarım',
      'Güvenlik: Aşırı yük ve kısa devre koruması'
    ] : [
      t('productDetails.revium-2-7-kwh.features.capacity'),
      t('productDetails.revium-2-7-kwh.features.powerOutput'),
      t('productDetails.revium-2-7-kwh.features.pvMppt'),
      t('productDetails.revium-2-7-kwh.features.cycleLife'),
      t('productDetails.revium-2-7-kwh.features.dimensions'),
      t('productDetails.revium-2-7-kwh.features.weight'),
      t('productDetails.revium-2-7-kwh.features.operatingTemp'),
      t('productDetails.revium-2-7-kwh.features.warranty'),
      t('productDetails.revium-2-7-kwh.features.sineOutput'),
      t('productDetails.revium-2-7-kwh.features.solarIntegration'),
      t('productDetails.revium-2-7-kwh.features.usbAc'),
      t('productDetails.revium-2-7-kwh.features.ledLight'),
      t('productDetails.revium-2-7-kwh.features.compactDesign'),
      t('productDetails.revium-2-7-kwh.features.safety')
    ],
    applications: loading ? [
      'Kamp aktiviteleri',
      'Acil durumlar',
      'Seyahat',
      'Dış mekan etkinlikleri',
      'Kırıcı delici aletler',
      'Elektronik cihazlar'
    ] : [
      t('productDetails.revium-2-7-kwh.applications.camping'),
      t('productDetails.revium-2-7-kwh.applications.emergency'),
      t('productDetails.revium-2-7-kwh.applications.travel'),
      t('productDetails.revium-2-7-kwh.applications.outdoor'),
      t('productDetails.revium-2-7-kwh.applications.tools'),
      t('productDetails.revium-2-7-kwh.applications.electronics')
    ],
    runtimeStats: [
      { label: 'Hilti / Kırıcı', power: '1000 W', duration: '≈ 2.7 saat', icon: 'Hammer' },
      { label: 'Matkap / El Aleti', power: '500 W', duration: '≈ 5.4 saat', icon: 'Hammer' },
      { label: 'Masaüstü Bilgisayar', power: '300 W', duration: '≈ 9 saat', icon: 'Monitor' },
      { label: 'Laptop', power: '65 W', duration: '≈ 35–40 saat', icon: 'Laptop' },
      { label: 'Buzdolabı (A++)', power: '150 W', duration: '≈ 18 saat', icon: 'Snowflake' },
      { label: 'LED Aydınlatma', power: '100 W', duration: '≈ 27 saat', icon: 'Lightbulb' },
      { label: 'TV + Modem', power: '120 W', duration: '≈ 22 saat', icon: 'Tv' },
      { label: 'Genel Ev', power: '400 W', duration: '≈ 6–7 saat', icon: 'Home' },
    ],
    runtimeSummary: 'Revium taşınabilir güç paketleri; 2.7 kWh modelinde bir hiltiyi yaklaşık 2.7 saat, ev tipi bir buzdolabını 18 saate kadar kesintisiz besleyebilmektedir.',
  }

  return <ProductPage {...product} />
}