'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'
import { Building2, Zap, Shield } from 'lucide-react'

export default function Cabinet21600Page() {
  const { t, loading } = useTranslation()

  const fixedTitle = t('productPage.whyChoose.cabin.fixed')
  const fixedDesc = t('productPage.whyChoose.cabin.fixedDesc')
  const powerfulTitle = t('productPage.whyChoose.cabin.powerful')
  const powerfulDesc = t('productPage.whyChoose.cabin.powerfulDesc')
  const durableTitle = t('productPage.whyChoose.cabin.durable')
  const durableDesc = t('productPage.whyChoose.cabin.durableDesc')

  const whyChooseItems = [
    {
      icon: Building2,
      title: (loading || fixedTitle === 'productPage.whyChoose.cabin.fixed') ? 'Sabit Kurulum' : fixedTitle,
      description: (loading || fixedDesc === 'productPage.whyChoose.cabin.fixedDesc') ? 'Endüstriyel tesisler için optimize edilmiş sabit kurulum' : fixedDesc,
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-indigo-500',
      hoverColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: (loading || powerfulTitle === 'productPage.whyChoose.cabin.powerful') ? 'Güçlü Performans' : powerfulTitle,
      description: (loading || powerfulDesc === 'productPage.whyChoose.cabin.powerfulDesc') ? 'Yüksek çıkış gücü ile kritik sistemler için ideal' : powerfulDesc,
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-500',
      hoverColor: 'text-purple-600'
    },
    {
      icon: Shield,
      title: (loading || durableTitle === 'productPage.whyChoose.cabin.durable') ? 'Dayanıklı Yapı' : durableTitle,
      description: (loading || durableDesc === 'productPage.whyChoose.cabin.durableDesc') ? 'Zorlu koşullara dayanıklı endüstriyel kalite' : durableDesc,
      gradientFrom: 'from-slate-500',
      gradientTo: 'to-gray-600',
      hoverColor: 'text-slate-600'
    }
  ]

  const productFeatures = loading ? [
    '21.6 kWh enerji kapasitesi',
    '5 kW çıkış gücü',
    '51.2 VDC nominal voltaj',
    '600 × 500 × 1000 mm boyutlar',
    '200 kg ağırlık',
    'Uzun ömürlü batarya teknolojisi',
    'Entegre sistem tasarımı',
    'Sabit kurulum için optimize edilmiş',
    'Yüksek kapasiteli enerji depolama',
    'Modüler yapı',
    'Güvenli operasyon',
    'Kolay bakım ve servis'
  ] : [
    t('productDetails.revium-power-cabinet.features.energyCapacity'),
    t('productDetails.revium-power-cabinet.features.outputPower'),
    t('productDetails.revium-power-cabinet.features.nominalVoltage'),
    t('productDetails.revium-power-cabinet.features.dimensions'),
    t('productDetails.revium-power-cabinet.features.weight'),
    t('productDetails.revium-power-cabinet.features.batteryTech'),
    t('productDetails.revium-power-cabinet.features.integrated'),
    t('productDetails.revium-power-cabinet.features.optimized'),
    t('productDetails.revium-power-cabinet.features.highCapacity'),
    t('productDetails.revium-power-cabinet.features.modular'),
    t('productDetails.revium-power-cabinet.features.safe'),
    t('productDetails.revium-power-cabinet.features.maintenance')
  ]

  return (
    <ProductPage
      name="R-CABINET-21600"
      modelId="R-CABINET"
      categoryTitle={loading ? 'Endüstriyel Enerji Depolama (Tek Kabin)' : t('productDetails.revium-power-cabinet.categoryTitle')}
      capacity="5.4 – 21.6 kWh"
      power="3 – 20 kW"
      batteryLabel="LiFePO₄"
      title={loading ? "Güç Kabini" : t('productDetails.revium-power-cabinet.title')}
      description={loading ? "21.6 kWh Entegre Sistem - Sabit kurulum için tasarlanmış yüksek kapasiteli entegre güç kabini sistemi. 21.6 kWh enerji kapasitesi ve 5 kW çıkış gücü ile kritik altyapı sistemleri için güvenilir enerji çözümü." : t('productDetails.revium-power-cabinet.description')}
      image="/images/products/cabin-power.webp"
      whyChooseItems={whyChooseItems}
      features={productFeatures}
      applications={loading ? [
        'Endüstriyel tesisler',
        'Veri merkezleri',
        'Hastaneler ve sağlık tesisleri',
        'Telekomünikasyon merkezleri',
        'Güneş enerjisi santralleri',
        'Kritik altyapı sistemleri'
      ] : [
        t('productDetails.revium-power-cabinet.applications.industrial'),
        t('productDetails.revium-power-cabinet.applications.dataCenter'),
        t('productDetails.revium-power-cabinet.applications.hospitals'),
        t('productDetails.revium-power-cabinet.applications.telecom'),
        t('productDetails.revium-power-cabinet.applications.solar'),
        t('productDetails.revium-power-cabinet.applications.critical')
      ]}
      specifications={{
        'Enerji Kapasitesi': '21.6 kWh',
        'Çıkış Gücü': '5 kW',
        'Voltaj': '51.2 VDC nominal',
        'Boyutlar': '600 × 500 × 1000 mm',
        'Ağırlık': '200 kg',
        'Batarya Tipi': 'LiFePO₄',
        'Döngü Ömrü': 'Uzun ömürlü',
        'MPPT': '≈30–80 VDC (modeline göre)'
      }}
    />
  )
}