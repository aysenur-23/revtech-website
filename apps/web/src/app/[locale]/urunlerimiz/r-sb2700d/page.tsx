'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'

export default function RSB2700DPage() {
  const { t, loading } = useTranslation()
  
  const product = {
    name: 'R-SB2700D',
    title: loading ? '2.7 kWh Taşınabilir Güç Paketi' : t('productDetails.rSb2700d.title'),
    description: loading ? 'Dayanıklı tasarımı ile zorlu koşullarda kullanım için ideal 2.7 kWh taşınabilir güç paketi. Kompakt/sağlam gövde ve 2 kW saf sinüs çıkışı.' : t('productDetails.rSb2700d.description'),
    image: '/images/products/2-7kwh-b-1.png',
    features: loading ? [
      'Kapasite: 2.7 kWh (LiFePO₄)',
      'Güç Çıkışı: 230 VAC, 2000 W (pure sine)',
      'PV/MPPT: 700 W PV şarj',
      'Çevrim Ömrü: ≈4000 cycle',
      'Boyutlar: 500 × 335 × 285 mm',
      'Ağırlık: 35 kg',
      'Çalışma Sıcaklığı: -20°C ile +60°C',
      'Garanti: 3 yıl',
      'Kompakt/sağlam gövde',
      '2 kW saf sinüs çıkış',
      'Dayanıklı kasa tasarımı',
      'USB ve AC çıkışları',
      'LED ışık sistemi',
      'Hızlı şarj desteği'
    ] : [
      t('productDetails.rSb2700d.features.capacity'),
      t('productDetails.rSb2700d.features.powerOutput'),
      t('productDetails.rSb2700d.features.pvMppt'),
      t('productDetails.rSb2700d.features.cycleLife'),
      t('productDetails.rSb2700d.features.dimensions'),
      t('productDetails.rSb2700d.features.weight'),
      t('productDetails.rSb2700d.features.operatingTemp'),
      t('productDetails.rSb2700d.features.warranty'),
      t('productDetails.rSb2700d.features.compact'),
      t('productDetails.rSb2700d.features.sineOutput'),
      t('productDetails.rSb2700d.features.durable'),
      t('productDetails.rSb2700d.features.usbAc'),
      t('productDetails.rSb2700d.features.ledLight'),
      t('productDetails.rSb2700d.features.quickCharge')
    ],
    applications: loading ? [
      'İnşaat sahaları',
      'Acil durumlar',
      'Seyahat ve kamp',
      'Dış mekan etkinlikleri',
      'Küçük işletmeler',
      'Mobil ofisler'
    ] : [
      t('productDetails.rSb2700d.applications.construction'),
      t('productDetails.rSb2700d.applications.emergency'),
      t('productDetails.rSb2700d.applications.travel'),
      t('productDetails.rSb2700d.applications.outdoor'),
      t('productDetails.rSb2700d.applications.smallBusiness'),
      t('productDetails.rSb2700d.applications.mobileOffice')
    ]
  }

  return <ProductPage {...product} />
}
