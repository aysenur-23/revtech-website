"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CardProps {
  title: string
  subtitle?: string
  imageSrc?: string
  imageAlt?: string
  ratio?: '4:3' | '3:2'
  badge?: string
  bullets?: Array<{ label: string }>
  hoverContent?: React.ReactNode
  alwaysVisibleContent?: React.ReactNode
  ctaLabel: string
  onClick?: () => void
  href?: string
  isLogo?: boolean
  priority?: boolean
  colorTheme?: 'primary' | 'secondary' | 'accent'
  imagePosition?: 'top' | 'center' | 'bottom'
}

export function Card({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ratio = '4:3',
  badge,
  bullets,
  hoverContent,
  alwaysVisibleContent,
  ctaLabel,
  onClick,
  href,
  isLogo = false,
  priority = false,
  colorTheme = 'primary',
  imagePosition = 'center'
}: CardProps) {
  // [CardRefactor] Aspect ratio mapping for consistent image display
  const aspectRatio = ratio === '3:2' ? 'aspect-[3/1.6]' : 'aspect-[4/2.5]'
  
  // [CardRefactor] Image object fit based on content type
  const imageObjectFit = isLogo ? 'object-contain p-4' : `object-cover object-${imagePosition}`
  
  // [CardRefactor] Special positioning for vehicle and cabin cards
  const getImageTransform = () => {
    if (imagePosition === 'center' && imageAlt?.includes('AraÃ§')) {
      return 'transform scale-90'
    }
    if (imagePosition === 'top' && imageAlt?.includes('Kabin')) {
      return 'transform -translate-y-2'
    }
    // Endüstriyel kurulum kartı için görseli yaklaştır
    if (imageAlt?.includes('Endüstriyel') || title?.includes('Endüstriyel')) {
      return 'transform scale-125'
    }
    // GES kurulum kartı için görseli büyüt
    if (imageAlt?.includes('GES') || title?.includes('GES')) {
      return 'transform scale-110'
    }
    return ''
  }
  
  // Ürün kategorileri için görseli uzaklaştır (tamamı görünsün)
  const isProductCategory = (badge === 'Kategori' || badge === 'Category' || badge === 'فئة') || imageAlt?.includes('Taşınabilir') || imageAlt?.includes('Araç') || imageAlt?.includes('Kabin') || (title?.includes('Taşınabilir') || title?.includes('Araç') || title?.includes('Kabin'))
  
  // GES Ürünleri için görseli yaklaştır
  const isGESProducts = (imageAlt?.includes('GES Ürünler') || title?.includes('GES Ürünler') || title?.includes('Ges Tipi') || imageSrc?.includes('ges-products-new') || (title?.includes('GES') && !title?.includes('Kurulum') && (badge === 'Kategori' || badge === 'Category' || badge === 'فئة')))
  
  // Endüstriyel Depolama için kontrol
  const isIndustrialStorage = (imageAlt?.includes('Endüstriyel') || title?.includes('Endüstriyel') || title?.includes('Industrial'))
  
  // [CardRefactor] Color theme mapping for consistent branding - ReviumTech Premium Design
  const colorClasses = {
    primary: {
      badge: 'bg-blue-50 text-blue-600 border border-blue-200/30',
      accent: 'from-blue-600 via-indigo-500 to-cyan-500',
      halo: 'from-blue-400/20 via-indigo-300/15 to-cyan-400/15',
      stroke: 'bg-blue-500/10',
      text: 'text-blue-600'
    },
    secondary: {
      badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200/30',
      accent: 'from-teal-600 via-emerald-500 to-lime-500',
      halo: 'from-emerald-500/30 via-teal-400/20 to-transparent',
      stroke: 'bg-emerald-500/10',
      text: 'text-emerald-600'
    },
    accent: {
      badge: 'bg-cyan-50 text-cyan-700 border border-cyan-200/30',
      accent: 'from-cyan-600 via-blue-500 to-violet-500',
      halo: 'from-cyan-500/30 via-blue-400/20 to-transparent',
      stroke: 'bg-cyan-500/10',
      text: 'text-cyan-600'
    }
  }
  
  const theme = colorClasses[colorTheme]
  
  // [CardRefactor] Card content component - Premium Professional Design
  const CardContent = () => (
    <div className="group relative h-full">
      {/* Premium Professional Card - Image Only Design */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] group-hover:scale-[1.02] cursor-pointer">
        {/* Görsel Container - Image Only with Overlay Title */}
        <div className="relative overflow-hidden">
          <div className={`${aspectRatio} relative flex items-center justify-center`}>
            {imageSrc ? (
              <div className="relative w-full h-full z-10">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  quality={98}
                  className={`object-cover transition-all duration-700 ease-out ${isGESProducts ? 'scale-[1.08] group-hover:scale-[1.12]' : 'group-hover:scale-[1.05]'} group-hover:brightness-[1.05]`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={priority}
                />
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/30 animate-pulse rounded-lg" />
            )}
            
            {/* Gradient Overlay for Title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20"></div>
            
            {/* Title Overlay - Şık Tasarım */}
            <div className="absolute bottom-0 left-0 right-0 z-30 p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] transition-transform duration-500" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
                {title}
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

  // [CardRefactor] Wrap with Link if href provided, otherwise use onClick
  if (href) {
    return (
      <Link 
        href={href} 
        className="block h-full"
        aria-label={title}
        role="link"
      >
        <CardContent />
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className="block w-full text-left h-full"
      aria-label={title}
      role="button"
    >
      <CardContent />
    </button>
  )
}
