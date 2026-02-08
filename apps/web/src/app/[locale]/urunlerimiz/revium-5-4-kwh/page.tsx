'use client'

import { ProductPage } from '@/components/templates/product-page'
import { RuntimeCalculator } from '@/components/tools/runtime-calculator'
import { useTranslation } from '@/hooks/useTranslation'
import { Zap, Shield, Battery } from 'lucide-react'

export default function RSB5400BPage() {
  const { t, loading } = useTranslation()

  // Custom Why Choose items for 5.4kWh Power Pack
  // Using industrial/highCapacity for the first item as it is a larger unit
  const capacityTitle = t('productPage.whyChoose.industrial.highCapacity')
  const capacityDesc = t('productPage.whyChoose.industrial.highCapacityDesc')
  const powerTitle = t('productPage.whyChoose.portable.fastCharge')
  const powerDesc = t('productPage.whyChoose.portable.fastChargeDesc')
  const durabilityTitle = t('productPage.whyChoose.portable.versatile')
  const durabilityDesc = t('productPage.whyChoose.portable.versatileDesc')

  const whyChooseItems = [
    {
      icon: Battery,
      title: (loading || capacityTitle === 'productPage.whyChoose.industrial.highCapacity') ? 'Yüksek Kapasite' : capacityTitle,
      description: (loading || capacityDesc === 'productPage.whyChoose.industrial.highCapacityDesc') ? 'Uzun süreli enerji depolama için yüksek kapasiteli batarya' : capacityDesc,
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-indigo-600',
      hoverColor: 'text-blue-700'
    },
    {
      icon: Zap,
      title: (loading || powerTitle === 'productPage.whyChoose.portable.fastCharge') ? 'Hızlı Şarj' : powerTitle,
      description: (loading || powerDesc === 'productPage.whyChoose.portable.fastChargeDesc') ? 'Güneş enerjisi ve şebekeden hızlı şarj imkanı' : powerDesc,
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-500',
      hoverColor: 'text-yellow-600'
    },
    {
      icon: Shield,
      title: (loading || durabilityTitle === 'productPage.whyChoose.portable.versatile') ? 'Dayanıklı Yapı' : durabilityTitle,
      description: (loading || durabilityDesc === 'productPage.whyChoose.portable.versatileDesc') ? 'Büyük kasa tasarımı ile zorlu koşullara dayanıklı' : durabilityDesc,
      gradientFrom: 'from-slate-500',
      gradientTo: 'to-gray-600',
      hoverColor: 'text-slate-600'
    }
  ]

  const product = {
    name: 'R-SB5400B',
    modelId: 'R-SB5400B',
    categoryTitle: loading ? 'Yüksek Kapasiteli Taşınabilir Güç' : t('productDetails.revium-5-4-kwh.categoryTitle'),
    capacity: '5.4 kWh',
    power: '3000 W',
    batteryLabel: 'LiFePO₄',
    title: loading ? '5.4 kWh Taşınabilir Güç Paketi' : t('productDetails.revium-5-4-kwh.title'),
    description: loading ? 'Büyük kasa tasarımı ile 5.4 kWh kapasiteli taşınabilir güç paketi. 3 kW saf sinüs çıkışı ve 1.5 kW PV ile hızlı dolum.' : t('productDetails.revium-5-4-kwh.description'),
    image: '/images/products/5-4kwh-h-1.webp',
    whyChooseItems,
    features: loading ? [
      'Kapasite: 5.4 kWh (LiFePO₄)',
      'Güç Çıkışı: 220 VAC, 3000 W (pure sine)',
      'PV/MPPT: 1500 W PV şarj',
      'Çevrim Ömrü: ≈4000 cycle',
      'Boyutlar: 800 × 458 × 910 mm',
      'Ağırlık: 60 kg',
      'Çalışma Sıcaklığı: -20°C ile +60°C',
      'Garanti: 3 yıl',
      '3 kW saf sinüs çıkış',
      '1.5 kW PV ile hızlı dolum',
      'Büyük kasa tasarımı',
      'USB ve AC çıkışları',
      'LED ışık sistemi',
      'Hızlı şarj desteği'
    ] : [
      t('productDetails.revium-5-4-kwh.features.capacity'),
      t('productDetails.revium-5-4-kwh.features.powerOutput'),
      t('productDetails.revium-5-4-kwh.features.pvMppt'),
      t('productDetails.revium-5-4-kwh.features.cycleLife'),
      t('productDetails.revium-5-4-kwh.features.dimensions'),
      t('productDetails.revium-5-4-kwh.features.weight'),
      t('productDetails.revium-5-4-kwh.features.operatingTemp'),
      t('productDetails.revium-5-4-kwh.features.warranty'),
      t('productDetails.revium-5-4-kwh.features.sineOutput'),
      t('productDetails.revium-5-4-kwh.features.quickCharge'),
      t('productDetails.revium-5-4-kwh.features.largeCase'),
      t('productDetails.revium-5-4-kwh.features.usbAc'),
      t('productDetails.revium-5-4-kwh.features.ledLight'),
      t('productDetails.revium-5-4-kwh.features.quickChargeSupport')
    ],
    applications: loading ? [
      'Orta ölçekli evler',
      'Küçük işletmeler',
      'Kamp ve karavan',
      'Acil durum yedeklemesi',
      'Dış mekan etkinlikleri',
      'Mobil ofisler'
    ] : [
      t('productDetails.revium-5-4-kwh.applications.mediumHomes'),
      t('productDetails.revium-5-4-kwh.applications.smallBusiness'),
      t('productDetails.revium-5-4-kwh.applications.camping'),
      t('productDetails.revium-5-4-kwh.applications.emergency'),
      t('productDetails.revium-5-4-kwh.applications.outdoor'),
      t('productDetails.revium-5-4-kwh.applications.mobileOffice')
    ],
    runtimeStats: [
      { label: 'Hilti / Kırıcı', power: '1000 W', duration: '≈ 5.4 saat', icon: 'Hammer' },
      { label: 'Matkap / El Aleti', power: '500 W', duration: '≈ 10–11 saat', icon: 'Hammer' },
      { label: 'Masaüstü Bilgisayar', power: '300 W', duration: '≈ 18 saat', icon: 'Monitor' },
      { label: 'Laptop', power: '65 W', duration: '≈ 80 saat', icon: 'Laptop' },
      { label: 'Buzdolabı (A++)', power: '150 W', duration: '≈ 36 saat (1.5 gün)', icon: 'Snowflake' },
      { label: 'LED Aydınlatma', power: '100 W', duration: '≈ 54 saat', icon: 'Lightbulb' },
      { label: 'TV + Modem', power: '120 W', duration: '≈ 45 saat', icon: 'Tv' },
      { label: 'Genel Ev', power: '400 W', duration: '≈ 13–14 saat', icon: 'Home' },
    ],
    runtimeSummary: 'Revium taşınabilir güç paketleri; 5.4 kWh modelinde bir hiltiyi 5.4 saat, bir evi ise 14–16 saat aralığında kesintisiz besleyebilmektedir.',
  }

  return (
    <>
      <ProductPage {...product} />
      <RuntimeCalculator capacityWh={5400} productName={product.title} />
    </>
  )
}