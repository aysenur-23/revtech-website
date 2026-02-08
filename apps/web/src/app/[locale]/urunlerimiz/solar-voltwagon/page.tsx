'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'
import { Sun, TrendingUp, Shield } from 'lucide-react'

export default function SolarVoltwagonPage() {
  const { t, loading } = useTranslation()

  const sustainableTitle = t('productPage.whyChoose.ges.sustainable')
  const sustainableDesc = t('productPage.whyChoose.ges.sustainableDesc')
  const efficiencyTitle = t('productPage.whyChoose.ges.efficiency')
  const efficiencyDesc = t('productPage.whyChoose.ges.efficiencyDesc')
  const longevityTitle = t('productPage.whyChoose.ges.longevity')
  const longevityDesc = t('productPage.whyChoose.ges.longevityDesc')

  const whyChooseItems = [
    {
      icon: Sun,
      title: (loading || sustainableTitle === 'productPage.whyChoose.ges.sustainable') ? 'Sürdürülebilir Enerji' : sustainableTitle,
      description: (loading || sustainableDesc === 'productPage.whyChoose.ges.sustainableDesc') ? 'Temiz ve yenilenebilir enerji kaynakları ile çevre dostu çözümler' : sustainableDesc,
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-500',
      hoverColor: 'text-yellow-600'
    },
    {
      icon: TrendingUp,
      title: (loading || efficiencyTitle === 'productPage.whyChoose.ges.efficiency') ? 'Yüksek Verimlilik' : efficiencyTitle,
      description: (loading || efficiencyDesc === 'productPage.whyChoose.ges.efficiencyDesc') ? 'Gelişmiş teknoloji ile maksimum enerji verimliliği' : efficiencyDesc,
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-500',
      hoverColor: 'text-blue-600'
    },
    {
      icon: Shield,
      title: (loading || longevityTitle === 'productPage.whyChoose.ges.longevity') ? 'Uzun Ömür' : longevityTitle,
      description: (loading || longevityDesc === 'productPage.whyChoose.ges.longevityDesc') ? 'Dayanıklı yapı ve uzun ömürlü batarya teknolojisi' : longevityDesc,
      gradientFrom: 'from-green-500',
      gradientTo: 'to-emerald-500',
      hoverColor: 'text-green-600'
    }
  ]

  const product = {
    name: 'Solar VOLTWAGON',
    modelId: 'VOLTWAGON',
    categoryTitle: loading ? 'Mobil Güneş Enerjili Römork Sistem' : t('productDetails.solar-voltwagon.categoryTitle'),
    capacity: '192 kWh',
    power: '20 kW',
    batteryLabel: 'LiFePO₄',
    title: loading ? 'Solar VOLTWAGON' : t('productDetails.solar-voltwagon.title'),
    description: loading ? 'REVIUM VoltWagon, energyye her yerde ulaşmak için tasarlanmış taşınabilir güneş enerjili mobil istasyondur. Römork tipi modüler yapısı sayesinde kolayca taşınabilir; entegre güneş panelleriyle enerji üretir ve yüksek kapasiteli LiFePO₄ bataryalarıyla güvenli depolama sağlar. Kırsal bölgeler, afet alanları ve saha operasyonlarında hızlı kurulumlu, çevre dostu ve kesintisiz güç çözümü sunar. VoltWagon, mobil enerji bağımsızlığını mümkün kılan kompakt tasarımıyla modern enerji altyapısının yeni nesil taşınabilir formudur.' : t('productDetails.solar-voltwagon.description'),
    image: '/images/products/solar-voltwagon.png',
    whyChooseItems,
    features: [],
    applications: loading ? [
      'Araç uygulamaları',
      'Mobil enerji sistemleri',
      'Kamp ve karavan',
      'Acil durum araçları',
      'Ticari araçlar',
      'Şebeke dışı sistemler'
    ] : [
      t('productDetails.solar-voltwagon.applications.vehicles'),
      t('productDetails.solar-voltwagon.applications.mobile'),
      t('productDetails.solar-voltwagon.applications.camping'),
      t('productDetails.solar-voltwagon.applications.emergency'),
      t('productDetails.solar-voltwagon.applications.commercial'),
      t('productDetails.solar-voltwagon.applications.offGrid')
    ]
  }

  return <ProductPage {...product} />
}

