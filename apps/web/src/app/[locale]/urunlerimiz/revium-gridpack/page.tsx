'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'
import { Factory, ShieldCheck, Zap } from 'lucide-react'

export default function GridPack100Page() {
  const { t, loading } = useTranslation()

  // Custom Why Choose items for GridPack 100
  const industrialTitle = t('productPage.whyChoose.industrial.reliable')
  const industrialDesc = t('productPage.whyChoose.industrial.reliableDesc')
  const capacityTitle = t('productPage.whyChoose.industrial.highCapacity')
  const capacityDesc = t('productPage.whyChoose.industrial.highCapacityDesc')
  const supportTitle = t('productPage.whyChoose.industrial.support')
  const supportDesc = t('productPage.whyChoose.industrial.supportDesc')

  const whyChooseItems = [
    {
      icon: Factory,
      title: (loading || capacityTitle === 'productPage.whyChoose.industrial.highCapacity') ? 'Endüstriyel Güç' : capacityTitle,
      description: (loading || capacityDesc === 'productPage.whyChoose.industrial.highCapacityDesc') ? 'Fabrikalar ve büyük tesisler için 100 kWh+ enerji' : capacityDesc,
      gradientFrom: 'from-orange-600',
      gradientTo: 'to-red-600',
      hoverColor: 'text-orange-700'
    },
    {
      icon: ShieldCheck,
      title: (loading || industrialTitle === 'productPage.whyChoose.industrial.reliable') ? 'Tam Güvenlik' : industrialTitle,
      description: (loading || industrialDesc === 'productPage.whyChoose.industrial.reliableDesc') ? 'Gelişmiş BMS ve yangın koruma sistemleri ile maksimum güvenlik' : industrialDesc,
      gradientFrom: 'from-slate-700',
      gradientTo: 'to-gray-800',
      hoverColor: 'text-slate-800'
    },
    {
      icon: Zap,
      title: (loading || supportTitle === 'productPage.whyChoose.industrial.support') ? 'Kesintisiz Enerji' : supportTitle,
      description: (loading || supportDesc === 'productPage.whyChoose.industrial.supportDesc') ? 'Şebeke kesintilerinde anında devreye giren yedek güç' : supportDesc,
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-indigo-700',
      hoverColor: 'text-blue-700'
    }
  ]

  const product = {
    name: 'GridPack 100',
    modelId: 'Şebeke Paketi',
    categoryTitle: loading ? 'Şebeke Ölçekli Enerji Depolama' : t('productDetails.revium-gridpack.categoryTitle'),
    capacity: '100+ kWh',
    power: 'Yüksek Güç',
    batteryLabel: 'LiFePO₄',
    title: loading ? 'GridPack 100' : t('productDetails.revium-gridpack.title'),
    description: loading ? 'REVIUM GridPack 100, endüstriyel tesisler, savunma alanları, mobil enerji merkezleri ve afet bölgeleri için geliştirilmiş, yüksek kapasiteli enerji depolama ve yönetim sistemidir. Entegre inverter, MPPT şarj kontrolü, akıllı batarya yönetim sistemi (BMS) ve uzaktan izleme özellikleriyle, tüm enerji sürecini tek noktadan yönetilebilen tam entegre bir plug-and-play enerji istasyonu sunar. Dayanıklı yapısı, uzun ömürlü LiFePO₄ batarya teknolojisi ve yüksek verimliliği sayesinde, her koşulda kesintisiz, güvenli ve sürdürülebilir enerji sağlar.' : t('productDetails.revium-gridpack.description'),
    image: '/images/products/gridpack.webp',
    whyChooseItems,
    features: loading ? [
      '100 kWh Kapasite',
      'Entegre Inverter',
      'Akıllı BMS',
      'Uzaktan İzleme',
      'LiFePO₄ Batarya',
      'Yüksek Verimlilik'
    ] : [
      t('productDetails.revium-gridpack.features.capacity'),
      t('productDetails.revium-gridpack.features.inverter'),
      t('productDetails.revium-gridpack.features.bms'),
      t('productDetails.revium-gridpack.features.monitoring'),
      t('productDetails.revium-gridpack.features.battery'),
      t('productDetails.revium-gridpack.features.efficiency')
    ],
    applications: loading ? [
      'Endüstriyel tesisler',
      'Savunma alanları',
      'Mobil enerji merkezleri',
      'Afet bölgeleri',
      'Kritik altyapı sistemleri',
      'Şebeke dışı sistemler'
    ] : [
      t('productDetails.revium-gridpack.applications.industrial'),
      t('productDetails.revium-gridpack.applications.defense'),
      t('productDetails.revium-gridpack.applications.mobile'),
      t('productDetails.revium-gridpack.applications.disaster'),
      t('productDetails.revium-gridpack.applications.critical'),
      t('productDetails.revium-gridpack.applications.offGrid')
    ]
  }

  return <ProductPage {...product} />
}

