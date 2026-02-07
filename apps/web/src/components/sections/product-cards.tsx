"use client"

import { useTranslation } from '@/hooks/useTranslation'
import { CardGrid } from '@/components/ui/card-grid'
import { Card, CardProps } from '@/components/ui/card'

export function ProductCards() {
  const { t, locale } = useTranslation()

  // [CardRefactor] Convert category cards to new Card system format - clean minimal design
  const categoryCards: CardProps[] = [
    {
      title: t('products.portablePower.title'),
      imageSrc: '/images/products/portable-power.png',
      imageAlt: t('products.portablePower.title'),
      href: `/${locale}/urunlerimiz/kategori/portable`,
      ratio: '4:3',
      ctaLabel: t('products.learnMore'),
      priority: true,
      colorTheme: 'primary'
    },
    {
      title: t('products.vehiclePower.title'),
      imageSrc: '/images/products/vehicle-power-new.png',
      imageAlt: t('products.vehiclePower.title'),
      href: `/${locale}/urunlerimiz/kategori/vehicle`,
      ratio: '4:3',
      ctaLabel: t('products.learnMore'),
      priority: true,
      colorTheme: 'primary',
      imagePosition: 'center'
    },
    {
      title: t('products.cabinPower.title'),
      imageSrc: '/images/products/cabin-power.webp',
      imageAlt: t('products.cabinPower.title'),
      href: `/${locale}/urunlerimiz/kategori/cabin`,
      ratio: '4:3',
      ctaLabel: t('products.learnMore'),
      colorTheme: 'primary',
      imagePosition: 'top'
    },
    {
      title: t('products.gesProducts.title'),
      imageSrc: '/images/products/ges-products-new.png',
      imageAlt: t('products.gesProducts.title'),
      href: `/${locale}/urunlerimiz/kategori/ges`,
      ratio: '4:3',
      ctaLabel: t('products.learnMore'),
      colorTheme: 'primary',
      imagePosition: 'center'
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