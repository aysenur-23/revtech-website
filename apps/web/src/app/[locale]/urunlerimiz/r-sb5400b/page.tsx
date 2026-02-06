'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'

export default function RSB5400BPage() {
  const { t, loading } = useTranslation()
  
  const product = {
    name: 'R-SB5400B',
    title: loading ? '5.4 kWh Taşınabilir Güç Paketi' : t('productDetails.rSb5400b.title'),
    description: loading ? 'Büyük kasa tasarımı ile 5.4 kWh kapasiteli taşınabilir güç paketi. 3 kW saf sinüs çıkışı ve 1.5 kW PV ile hızlı dolum.' : t('productDetails.rSb5400b.description'),
    image: '/images/products/5-4kwh-2000w-1.png',
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
      t('productDetails.rSb5400b.features.capacity'),
      t('productDetails.rSb5400b.features.powerOutput'),
      t('productDetails.rSb5400b.features.pvMppt'),
      t('productDetails.rSb5400b.features.cycleLife'),
      t('productDetails.rSb5400b.features.dimensions'),
      t('productDetails.rSb5400b.features.weight'),
      t('productDetails.rSb5400b.features.operatingTemp'),
      t('productDetails.rSb5400b.features.warranty'),
      t('productDetails.rSb5400b.features.sineOutput'),
      t('productDetails.rSb5400b.features.quickCharge'),
      t('productDetails.rSb5400b.features.largeCase'),
      t('productDetails.rSb5400b.features.usbAc'),
      t('productDetails.rSb5400b.features.ledLight'),
      t('productDetails.rSb5400b.features.quickChargeSupport')
    ],
    applications: loading ? [
      'Orta ölçekli evler',
      'Küçük işletmeler',
      'Kamp ve karavan',
      'Acil durum yedeklemesi',
      'Dış mekan etkinlikleri',
      'Mobil ofisler'
    ] : [
      t('productDetails.rSb5400b.applications.mediumHomes'),
      t('productDetails.rSb5400b.applications.smallBusiness'),
      t('productDetails.rSb5400b.applications.camping'),
      t('productDetails.rSb5400b.applications.emergency'),
      t('productDetails.rSb5400b.applications.outdoor'),
      t('productDetails.rSb5400b.applications.mobileOffice')
    ]
  }

  return <ProductPage {...product} />
}