'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'
import { Package, Zap, Activity } from 'lucide-react'

export default function RP5400Page() {
  const { t, loading } = useTranslation()
  
  const lightweightTitle = t('productPage.whyChoose.portable.lightweight')
  const lightweightDesc = t('productPage.whyChoose.portable.lightweightDesc')
  const fastChargeTitle = t('productPage.whyChoose.portable.fastCharge')
  const fastChargeDesc = t('productPage.whyChoose.portable.fastChargeDesc')
  const versatileTitle = t('productPage.whyChoose.portable.versatile')
  const versatileDesc = t('productPage.whyChoose.portable.versatileDesc')
  
  const whyChooseItems = [
    {
      icon: Package,
      title: (loading || lightweightTitle === 'productPage.whyChoose.portable.lightweight') ? 'Hafif ve Taşınabilir' : lightweightTitle,
      description: (loading || lightweightDesc === 'productPage.whyChoose.portable.lightweightDesc') ? 'Kompakt tasarımı ile her yere kolayca taşınabilir' : lightweightDesc,
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-500',
      hoverColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: (loading || fastChargeTitle === 'productPage.whyChoose.portable.fastCharge') ? 'Hızlı Şarj' : fastChargeTitle,
      description: (loading || fastChargeDesc === 'productPage.whyChoose.portable.fastChargeDesc') ? 'Güneş enerjisi ile hızlı şarj imkanı' : fastChargeDesc,
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-500',
      hoverColor: 'text-yellow-600'
    },
    {
      icon: Activity,
      title: (loading || versatileTitle === 'productPage.whyChoose.portable.versatile') ? 'Çok Amaçlı Kullanım' : versatileTitle,
      description: (loading || versatileDesc === 'productPage.whyChoose.portable.versatileDesc') ? 'Kamp, acil durum ve günlük kullanım için ideal' : versatileDesc,
      gradientFrom: 'from-green-500',
      gradientTo: 'to-emerald-500',
      hoverColor: 'text-green-600'
    }
  ]
  
  const product = {
    name: 'R-P5400',
    title: loading ? '5.4 kWh Taşınabilir (Yüksek Çıkış)' : t('productDetails.rP5400.title'),
    description: loading ? 'Yüksek çıkış gücü ile 5.4 kWh kapasiteli taşınabilir güç paketi. Güçlü performansı ve yüksek çıkış kapasitesi ile zorlu enerji ihtiyaçlarını karşılar.' : t('productDetails.rP5400.description'),
    image: '/images/products/5-4kwh-h-1.png',
    whyChooseItems,
    features: loading ? [
      'Kapasite: 5.4 kWh',
      'AC Çıkış: 220–230 VAC',
      'Batarya Çalışma: ≈20–28.8 VDC',
      'PV/MPPT: 30–80 VDC (Voc ≈102 V)',
      'Boyutlar: 400 × 391 × 488 mm',
      'Ağırlık: 67 kg',
      'Çalışma Sıcaklığı: -20°C ile +60°C',
      'Garanti: 3 yıl',
      'Yüksek çıkış gücü',
      'Güçlü performans',
      'Modüler yapı',
      'USB ve AC çıkışları',
      'LED ışık sistemi',
      'Güneş paneli uyumluluğu',
      'Hızlı şarj desteği'
    ] : [
      t('productDetails.rP5400.features.capacity'),
      t('productDetails.rP5400.features.acOutput'),
      t('productDetails.rP5400.features.battery'),
      t('productDetails.rP5400.features.pvMppt'),
      t('productDetails.rP5400.features.dimensions'),
      t('productDetails.rP5400.features.weight'),
      t('productDetails.rP5400.features.operatingTemp'),
      t('productDetails.rP5400.features.warranty'),
      t('productDetails.rP5400.features.highOutput'),
      t('productDetails.rP5400.features.strongPerformance'),
      t('productDetails.rP5400.features.modular'),
      t('productDetails.rP5400.features.usbAc'),
      t('productDetails.rP5400.features.ledLight'),
      t('productDetails.rP5400.features.solarCompatible'),
      t('productDetails.rP5400.features.quickCharge')
    ],
    applications: loading ? [
      'Büyük ölçekli evler',
      'Orta ölçekli işletmeler',
      'Kamp ve karavan',
      'Acil durum yedeklemesi',
      'Dış mekan etkinlikleri',
      'Mobil ofisler'
    ] : [
      t('productDetails.rP5400.applications.largeHomes'),
      t('productDetails.rP5400.applications.mediumBusiness'),
      t('productDetails.rP5400.applications.camping'),
      t('productDetails.rP5400.applications.emergency'),
      t('productDetails.rP5400.applications.outdoor'),
      t('productDetails.rP5400.applications.mobileOffice')
    ]
  }

  return <ProductPage {...product} />
}