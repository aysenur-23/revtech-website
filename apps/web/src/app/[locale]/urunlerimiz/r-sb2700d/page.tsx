'use client'

import { ProductPage } from '@/components/templates/product-page'
import { RuntimeCalculator } from '@/components/tools/runtime-calculator'
import { useTranslation } from '@/hooks/useTranslation'
import { Zap, Shield, Briefcase } from 'lucide-react'

export default function RSB2700DPage() {
  const { t, loading } = useTranslation()

  // Custom Why Choose items for R-SB2700D (Durable Version)
  const durableTitle = t('features.durableDesign')
  const durableDesc = t('features.durableDesignDesc')
  const powerTitle = t('productPage.whyChoose.portable.fastCharge')
  const powerDesc = t('productPage.whyChoose.portable.fastChargeDesc')
  const versatileTitle = t('productPage.whyChoose.portable.versatile')
  const versatileDesc = t('productPage.whyChoose.portable.versatileDesc')

  const whyChooseItems = [
    {
      icon: Shield,
      title: (loading || durableTitle === 'features.durableDesign') ? 'Dayanıklı Tasarım' : durableTitle,
      description: (loading || durableDesc === 'features.durableDesignDesc') ? 'Zorlu koşullarda bile maksimum dayanıklılık ve performans' : durableDesc,
      gradientFrom: 'from-slate-600',
      gradientTo: 'to-zinc-700',
      hoverColor: 'text-slate-700'
    },
    {
      icon: Zap,
      title: (loading || powerTitle === 'productPage.whyChoose.portable.fastCharge') ? 'Güçlü Performans' : powerTitle,
      description: (loading || powerDesc === 'productPage.whyChoose.portable.fastChargeDesc') ? '2 kW saf sinüs çıkışı ile her an güce ulaşın' : powerDesc,
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-red-500',
      hoverColor: 'text-orange-600'
    },
    {
      icon: Briefcase,
      title: (loading || versatileTitle === 'productPage.whyChoose.portable.versatile') ? 'Çok Yönlü' : versatileTitle,
      description: (loading || versatileDesc === 'productPage.whyChoose.portable.versatileDesc') ? 'İş sahasından kampa her yerde kullanım' : versatileDesc,
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-indigo-500',
      hoverColor: 'text-blue-600'
    }
  ]

  const product = {
    name: 'R-SB2700D',
    modelId: 'R-SB2700D',
    categoryTitle: loading ? 'Taşınabilir Enerji Depolama' : t('productDetails.rSb2700d.categoryTitle'),
    capacity: '2.7 kWh',
    power: '2000 W',
    batteryLabel: 'LiFePO₄',
    title: loading ? '2.7 kWh Taşınabilir Güç Paketi' : t('productDetails.rSb2700d.title'),
    description: loading ? 'Dayanıklı tasarımı ile zorlu koşullarda kullanım için ideal 2.7 kWh taşınabilir güç paketi. Kompakt/sağlam gövde ve 2 kW saf sinüs çıkışı.' : t('productDetails.rSb2700d.description'),
    image: '/images/products/2-7kwh-b-1.png',
    whyChooseItems,
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
