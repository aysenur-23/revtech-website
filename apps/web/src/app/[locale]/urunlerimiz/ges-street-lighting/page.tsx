'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'
import { Sun, TrendingUp, Shield } from 'lucide-react'

export default function GesStreetLightingPage() {
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
    name: 'GES Sokak Aydınlatma Sistemi',
    title: loading ? 'GES Sokak Aydınlatma Sistemi' : t('productDetails.gesStreetLighting.title'),
    description: loading ? 'REVIUM Solar StreetLight, güneş enerjisiyle çalışan modern bir LED aydınlatma sistemidir. Yüksek verimli güneş panelleri, entegre LiFePO₄ batarya ve akıllı kontrol modülü sayesinde gece boyunca kesintisiz, güvenilir ve dengeli aydınlatma sağlar. Tamamen şebekeden bağımsız çalışma özelliğiyle enerji maliyetlerini sıfıra indirir, bakım ihtiyacını minimuma düşürür. Estetik tasarımı, uzun ömürlü yapısı ve çevre dostu teknolojisiyle sürdürülebilir şehir aydınlatmasının yeni standardını oluşturur.' : t('productDetails.gesStreetLighting.description'),
    image: '/images/products/ges-street-lighting.png',
    whyChooseItems,
    features: [],
    applications: loading ? [
      'Sokak aydınlatması',
      'Park ve bahçe aydınlatması',
      'Yol aydınlatması',
      'Güvenlik aydınlatması',
      'Kamu alanları',
      'Konut alanları'
    ] : [
      t('productDetails.gesStreetLighting.applications.streetLighting'),
      t('productDetails.gesStreetLighting.applications.parkLighting'),
      t('productDetails.gesStreetLighting.applications.pathwayLighting'),
      t('productDetails.gesStreetLighting.applications.security'),
      t('productDetails.gesStreetLighting.applications.public'),
      t('productDetails.gesStreetLighting.applications.residential')
    ]
  }

  return <ProductPage {...product} />
}

