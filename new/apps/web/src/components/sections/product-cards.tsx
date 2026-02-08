"use client"

import { useTranslation } from '@/hooks/useTranslation'
import { CardGrid } from '@/components/ui/card-grid'
import { Card, CardProps } from '@/components/ui/card'

export function ProductCards() {
  const { t, locale } = useTranslation()

  // [CardRefactor] Convert category cards to new Card system format - minimal info with hover expansion
  const categoryCards: CardProps[] = [
    {
      title: t('products.portablePower.title'),
      subtitle: t('products.portablePower.subtitle'),
      imageSrc: '/images/products/portable-power.png',
      imageAlt: t('products.portablePower.title'),
      href: `/${locale}/urunlerimiz/kategori/portable`,
      ratio: '4:3',
      badge: 'Kategori',
      hoverContent: t('products.portablePower.description'),
      ctaLabel: t('products.learnMore'),
      priority: true,
      colorTheme: 'primary'
    },
    {
      title: t('products.vehiclePower.title'),
      subtitle: t('products.vehiclePower.subtitle'),
      imageSrc: '/images/products/vehicle-power2.jpg',
      imageAlt: t('products.vehiclePower.title'),
      href: `/${locale}/urunlerimiz/kategori/vehicle`,
      ratio: '4:3',
      badge: 'Kategori',
      hoverContent: t('products.vehiclePower.description'),
      ctaLabel: t('products.learnMore'),
      priority: true,
      colorTheme: 'primary',
      imagePosition: 'center'
    },
    {
      title: t('products.cabinPower.title'),
      subtitle: t('products.cabinPower.subtitle'),
      imageSrc: '/images/products/cabin-power.png',
      imageAlt: t('products.cabinPower.title'),
      href: `/${locale}/urunlerimiz/kategori/cabin`,
      ratio: '4:3',
      badge: 'Kategori',
      hoverContent: t('products.cabinPower.description'),
      ctaLabel: t('products.learnMore'),
      colorTheme: 'primary',
      imagePosition: 'top'
    },
  ]

  return (
    <>
      {/* [CardRefactor] Categories section with new CardGrid system */}
      <CardGrid
        cards={categoryCards}
        title={t('products.categories.title')}
        subtitle={t('products.categories.subtitle')}
      />
    </>
  )
}