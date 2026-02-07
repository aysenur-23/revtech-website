'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'
import { Sun, TrendingUp, Shield } from 'lucide-react'

export default function SolarportDuoPage() {
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
    name: 'Solarport DUO',
    modelId: 'SOLARPORT',
    categoryTitle: loading ? 'Solar Carport + EV Şarj + Enerji Depolama' : t('productDetails.solarport-duo.categoryTitle'),
    capacity: '2 – 8 Araç',
    power: '6 – 24 kW AC',
    title: loading ? 'Solarport DUO' : t('productDetails.solarport-duo.title'),
    description: loading ? 'SolarPort Duo, güneş enerjisini modern mimariyle buluşturan yenilikçi bir güneş enerjili otopark sistemidir. Dayanıklı alüminyum-çelik konstrüksiyonu, yüksek verimli güneş panelleri ve entegre enerji depolama birimi sayesinde hem estetik hem de fonksiyonel bir çözüm sunar. Elektrikli araç şarj istasyonlarıyla tam uyumlu yapısı, park alanlarını sadece koruma alanı olmaktan çıkarıp aktif bir enerji üretim merkezine dönüştürür. SolarPort Duo, temiz enerji üretimi, sürdürülebilir altyapı ve modern tasarımıyla geleceğin şehirlerine değer katan akıllı bir otopark sistemidir.' : t('productDetails.solarport-duo.description'),
    image: '/images/products/solarport-updated.png',
    whyChooseItems,
    features: [],
    applications: loading ? [
      'Konut uygulamaları',
      'Ticari tesisler',
      'Güneş enerjisi santralleri',
      'Şebeke dışı sistemler',
      'Hibrit enerji sistemleri',
      'Mobil uygulamalar'
    ] : [
      t('productDetails.solarport-duo.applications.residential'),
      t('productDetails.solarport-duo.applications.commercial'),
      t('productDetails.solarport-duo.applications.solarFarms'),
      t('productDetails.solarport-duo.applications.offGrid'),
      t('productDetails.solarport-duo.applications.hybrid'),
      t('productDetails.solarport-duo.applications.mobile')
    ]
  }

  return <ProductPage {...product} />
}

