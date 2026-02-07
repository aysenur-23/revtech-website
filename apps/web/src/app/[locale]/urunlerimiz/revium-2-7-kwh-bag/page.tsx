'use client'

import { ProductPage } from '@/components/templates/product-page'
import { RuntimeCalculator } from '@/components/tools/runtime-calculator'
import { useTranslation } from '@/hooks/useTranslation'
import { Zap, Shield, Briefcase } from 'lucide-react'

export default function RSB2700BPage() {
  const { t, loading } = useTranslation()

  // Custom Why Choose items for Portable Power
  const portabilityTitle = t('productPage.whyChoose.portable.lightweight')
  const portabilityDesc = t('productPage.whyChoose.portable.lightweightDesc')
  const powerTitle = t('productPage.whyChoose.portable.fastCharge')
  const powerDesc = t('productPage.whyChoose.portable.fastChargeDesc')
  const durabilityTitle = t('productPage.whyChoose.portable.versatile')
  const durabilityDesc = t('productPage.whyChoose.portable.versatileDesc')

  const whyChooseItems = [
    {
      icon: Briefcase,
      title: (loading || portabilityTitle === 'productPage.whyChoose.portable.lightweight') ? 'Hafif ve Taşınabilir' : portabilityTitle,
      description: (loading || portabilityDesc === 'productPage.whyChoose.portable.lightweightDesc') ? 'Kompakt tasarımı ile her yere kolayca taşınabilir' : portabilityDesc,
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-500',
      hoverColor: 'text-blue-600'
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
      description: (loading || durabilityDesc === 'productPage.whyChoose.portable.versatileDesc') ? 'Zorlu koşullara dayanıklı endüstriyel kalite' : durabilityDesc,
      gradientFrom: 'from-green-500',
      gradientTo: 'to-emerald-500',
      hoverColor: 'text-green-600'
    }
  ]

  const product = {
    name: 'R-SB2700B',
    modelId: 'R-SB2700B',
    categoryTitle: loading ? 'Taşınabilir Enerji Depolama' : t('productDetails.revium-2-7-kwh-bag.categoryTitle'),
    capacity: '2.7 kWh',
    power: '2000 W',
    batteryLabel: 'LiFePO₄',
    title: loading ? '2.7 kWh Taşınabilir Güç Paketi' : t('productDetails.revium-2-7-kwh-bag.title'),
    description: loading ? 'Model B tasarımı ile 2.7 kWh kapasiteli taşınabilir güç paketi. 2 kW saf sinüs çıkışı ve 700 W MPPT ile güneş entegrasyonu.' : t('productDetails.revium-2-7-kwh-bag.description'),
    image: '/images/products/2-7kwh-b-1.png',
    whyChooseItems,
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
      'Model B tasarımı',
      'USB ve AC çıkışları',
      'LED ışık sistemi',
      'Hızlı şarj desteği'
    ] : [
      t('productDetails.revium-2-7-kwh-bag.features.capacity'),
      t('productDetails.revium-2-7-kwh-bag.features.powerOutput'),
      t('productDetails.revium-2-7-kwh-bag.features.pvMppt'),
      t('productDetails.revium-2-7-kwh-bag.features.cycleLife'),
      t('productDetails.revium-2-7-kwh-bag.features.dimensions'),
      t('productDetails.revium-2-7-kwh-bag.features.weight'),
      t('productDetails.revium-2-7-kwh-bag.features.operatingTemp'),
      t('productDetails.revium-2-7-kwh-bag.features.warranty'),
      t('productDetails.revium-2-7-kwh-bag.features.sineOutput'),
      t('productDetails.revium-2-7-kwh-bag.features.solarIntegration'),
      t('productDetails.revium-2-7-kwh-bag.features.modelB'),
      t('productDetails.revium-2-7-kwh-bag.features.usbAc'),
      t('productDetails.revium-2-7-kwh-bag.features.ledLight'),
      t('productDetails.revium-2-7-kwh-bag.features.quickCharge')
    ],
    applications: loading ? [
      'Profesyonel kullanım',
      'Endüstriyel uygulamalar',
      'Acil durum sistemleri',
      'Mobil ofisler',
      'Küçük işletmeler',
      'Elektronik cihazlar'
    ] : [
      t('productDetails.revium-2-7-kwh-bag.applications.professional'),
      t('productDetails.revium-2-7-kwh-bag.applications.industrial'),
      t('productDetails.revium-2-7-kwh-bag.applications.emergency'),
      t('productDetails.revium-2-7-kwh-bag.applications.mobileOffice'),
      t('productDetails.revium-2-7-kwh-bag.applications.smallBusiness'),
      t('productDetails.revium-2-7-kwh-bag.applications.electronics')
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

  return (
    <>
      <ProductPage {...product} />
      <RuntimeCalculator capacityWh={2700} productName={product.title} />
    </>
  )
}