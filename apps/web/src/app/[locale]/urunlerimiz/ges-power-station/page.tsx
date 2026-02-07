'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'
import { Sun, TrendingUp, Shield } from 'lucide-react'

export default function GesPowerStationPage() {
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
    name: 'GES & Güç İstasyonu',
    modelId: 'POWERSTATION',
    categoryTitle: loading ? 'Konteyner Tip Enerji + Güneş Entegrasyonu' : t('productDetails.ges-power-station.categoryTitle'),
    capacity: '500 kWh – 5 MW',
    power: '200 kW – 1 MW',
    batteryLabel: 'LiFePO₄',
    title: loading ? 'GES & Güç İstasyonu' : t('productDetails.ges-power-station.title'),
    description: loading ? 'Gelişmiş güneş panel teknolojisini yüksek kapasiteli batarya depolama sistemiyle birleştiren bu yenilikçi çözüm, enerji üretimini ve tüketimini akıllıca dengeleyerek kesintisiz, sürdürülebilir ve verimli güç yönetimi sağlar. REVIUM Depolamalı GES, yalnızca enerji üretmekle kalmaz, aynı zamanda fazla enerjiyi depolayarak ihtiyaç anında yeniden kullanıma sunar. Bu sayede şebeke bağımlılığını azaltır, enerji maliyetlerini düşürür ve karbon ayak izini minimuma indirir. Modüler mimarisi sayesinde sistem, endüstriyel tesislerden ticari yapılara, kırsal yerleşimlerden mobil enerji istasyonlarına kadar farklı ölçek ve kullanım senaryolarına kolaylıkla uyarlanabilir. Entegre Batarya Yönetim Sistemi (BMS) ve uzaktan izleme altyapısı, enerji akışını anlık olarak takip ederken güvenli çalışma koşullarını garanti eder. Uzun ömürlü LiFePO₄ batarya teknolojisi ve yüksek verimli inverter yapısı, sistemin dayanıklılık, güvenlik ve performans açısından en zorlu koşullarda bile üstün sonuçlar sunmasını sağlar.' : t('productDetails.ges-power-station.description'),
    image: '/images/products/ges-power-station.png',
    whyChooseItems,
    features: [],
    applications: loading ? [
      'Konut uygulamaları',
      'Ticari tesisler',
      'Endüstriyel tesisler',
      'Güneş enerjisi santralleri',
      'Şebeke dışı sistemler',
      'Hibrit enerji sistemleri'
    ] : [
      t('productDetails.ges-power-station.applications.residential'),
      t('productDetails.ges-power-station.applications.commercial'),
      t('productDetails.ges-power-station.applications.industrial'),
      t('productDetails.ges-power-station.applications.solarFarms'),
      t('productDetails.ges-power-station.applications.offGrid'),
      t('productDetails.ges-power-station.applications.hybrid')
    ]
  }

  return <ProductPage {...product} />
}

