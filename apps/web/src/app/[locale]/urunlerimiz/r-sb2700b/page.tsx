'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'

export default function RSB2700BPage() {
  const { t, loading } = useTranslation()
  
  const product = {
    name: 'R-SB2700B',
    title: loading ? '2.7 kWh Taşınabilir Güç Paketi' : t('productDetails.rSb2700b.title'),
    description: loading ? 'Model B tasarımı ile 2.7 kWh kapasiteli taşınabilir güç paketi. 2 kW saf sinüs çıkışı ve 700 W MPPT ile güneş entegrasyonu.' : t('productDetails.rSb2700b.description'),
    image: '/images/products/2-7kwh-b-1.png',
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
      t('productDetails.rSb2700b.features.capacity'),
      t('productDetails.rSb2700b.features.powerOutput'),
      t('productDetails.rSb2700b.features.pvMppt'),
      t('productDetails.rSb2700b.features.cycleLife'),
      t('productDetails.rSb2700b.features.dimensions'),
      t('productDetails.rSb2700b.features.weight'),
      t('productDetails.rSb2700b.features.operatingTemp'),
      t('productDetails.rSb2700b.features.warranty'),
      t('productDetails.rSb2700b.features.sineOutput'),
      t('productDetails.rSb2700b.features.solarIntegration'),
      t('productDetails.rSb2700b.features.modelB'),
      t('productDetails.rSb2700b.features.usbAc'),
      t('productDetails.rSb2700b.features.ledLight'),
      t('productDetails.rSb2700b.features.quickCharge')
    ],
    applications: loading ? [
      'Profesyonel kullanım',
      'Endüstriyel uygulamalar',
      'Acil durum sistemleri',
      'Mobil ofisler',
      'Küçük işletmeler',
      'Elektronik cihazlar'
    ] : [
      t('productDetails.rSb2700b.applications.professional'),
      t('productDetails.rSb2700b.applications.industrial'),
      t('productDetails.rSb2700b.applications.emergency'),
      t('productDetails.rSb2700b.applications.mobileOffice'),
      t('productDetails.rSb2700b.applications.smallBusiness'),
      t('productDetails.rSb2700b.applications.electronics')
    ]
  }

  return <ProductPage {...product} />
}