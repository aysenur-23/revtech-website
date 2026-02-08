'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'
import { Truck, Zap, Shield } from 'lucide-react'

export default function ReviumPickupPowerPackPage() {
  const { t, loading } = useTranslation()

  // Custom Why Choose items for Pickup Power Pack
  const vehicleTitle = t('productPage.whyChoose.vehicle.integration')
  const vehicleDesc = t('productPage.whyChoose.vehicle.integrationDesc')
  const capacityTitle = t('productPage.whyChoose.industrial.highCapacity')
  const capacityDesc = t('productPage.whyChoose.industrial.highCapacityDesc')
  const durableTitle = t('features.durableDesign')
  const durableDesc = t('features.durableDesignDesc')

  const whyChooseItems = [
    {
      icon: Truck,
      title: (loading || vehicleTitle === 'productPage.whyChoose.vehicle.integration') ? 'Araç Entegrasyonu' : vehicleTitle,
      description: (loading || vehicleDesc === 'productPage.whyChoose.vehicle.integrationDesc') ? 'Pickup ve ticari araçlar için tam uyumlu tasarım' : vehicleDesc,
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-indigo-600',
      hoverColor: 'text-blue-700'
    },
    {
      icon: Zap,
      title: (loading || capacityTitle === 'productPage.whyChoose.industrial.highCapacity') ? 'Yüksek Performans' : capacityTitle,
      description: (loading || capacityDesc === 'productPage.whyChoose.industrial.highCapacityDesc') ? 'Hareket halindeyken bile kesintisiz enerji' : capacityDesc,
      gradientFrom: 'from-amber-500',
      gradientTo: 'to-orange-500',
      hoverColor: 'text-amber-600'
    },
    {
      icon: Shield,
      title: (loading || durableTitle === 'features.durableDesign') ? 'Off-Road Dayanıklılık' : durableTitle,
      description: (loading || durableDesc === 'features.durableDesignDesc') ? 'Titreşim ve zorlu yol koşullarına karşı güçlendirilmiş yapı' : durableDesc,
      gradientFrom: 'from-slate-600',
      gradientTo: 'to-zinc-700',
      hoverColor: 'text-slate-700'
    }
  ]

  const product = {
    name: loading ? 'Pick Up Güç Paketi' : t('productDetails.revium-pickup-power-pack.name'),
    modelId: 'R-PICKUP',
    categoryTitle: loading ? 'Araç Üstü Mobil Enerji Sistemi' : t('productDetails.revium-pickup-power-pack.categoryTitle'),
    capacity: '60 – 100 kWh',
    power: '30 kW (3-Phase)',
    batteryLabel: 'LiFePO₄',
    title: loading ? 'Pick Up Güç Paketi' : t('productDetails.revium-pickup-power-pack.name'),
    description: loading ? 'Araç üstü (özellikle pickup/hilux tarzı araçlar için) entegrasyona uygun, yüksek kapasiteli mobil enerji depolama sistemidir.' : t('productDetails.revium-pickup-power-pack.description'),
    image: '/images/products/hilux-21-6kwh-1.webp',
    whyChooseItems,
    features: loading ? [
      'Kapasite: 7.2 kWh',
      'AC Çıkış: 3000W',
      'Araç Entegrasyonu',
      'IP65 Koruma',
      'Titreşim Dayanımı',
      'Hızlı Şarj'
    ] : [
      t('productDetails.revium-pickup-power-pack.features.capacity'),
      t('productDetails.revium-pickup-power-pack.features.output'),
      t('productDetails.revium-pickup-power-pack.features.integration'),
      t('productDetails.revium-pickup-power-pack.features.protection'),
      t('productDetails.revium-pickup-power-pack.features.vibration'),
      t('productDetails.revium-pickup-power-pack.features.charging')
    ],
    applications: loading ? [
      'Kamp ve Karavan',
      'Mobil Servis Araçları',
      'Acil Müdahale Araçları',
      'Dış Saha Çalışmaları',
      'Off-Road Aktiviteleri'
    ] : [
      t('productDetails.revium-pickup-power-pack.applications.camping'),
      t('productDetails.revium-pickup-power-pack.applications.mobileService'),
      t('productDetails.revium-pickup-power-pack.applications.emergency'),
      t('productDetails.revium-pickup-power-pack.applications.fieldWork'),
      t('productDetails.revium-pickup-power-pack.applications.offRoad')
    ]
  }

  return <ProductPage {...product} />
}
