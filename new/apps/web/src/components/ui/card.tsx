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
  const aspectRatio = ratio === '3:2' ? 'aspect-[3/1.5]' : 'aspect-[4/2.5]'
  
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
    return ''
  }
  
  // [CardRefactor] Color theme mapping for consistent branding
  const colorClasses = {
    primary: {
      border: 'border border-blue-200',
      badge: 'bg-blue-100 text-blue-800',
      accent: 'bg-gradient-to-r from-blue-500 to-teal-500',
      hover: 'hover:border-blue-600',
      background: 'bg-gradient-to-br from-blue-50 via-white to-teal-50'
    },
    secondary: {
      border: 'border border-teal-200',
      badge: 'bg-teal-100 text-teal-800',
      accent: 'bg-gradient-to-r from-teal-500 to-emerald-500',
      hover: 'hover:border-teal-600',
      background: 'bg-gradient-to-br from-teal-50 via-white to-blue-50'
    },
    accent: {
      border: 'border border-cyan-200',
      badge: 'bg-cyan-100 text-cyan-800',
      accent: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      hover: 'hover:border-cyan-600',
      background: 'bg-gradient-to-br from-cyan-50 via-white to-teal-50'
    }
  }
  
  const theme = colorClasses[colorTheme]
  
  // [CardRefactor] Card content component with hover expansion
  const CardContent = () => (
    <div className={`group rounded-2xl ${theme.background} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 ${theme.hover} p-4 sm:p-6 lg:p-7 h-full flex flex-col justify-center relative overflow-hidden`}>
      {/* Hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      {/* [CardRefactor] Image area with consistent aspect ratio */}
      <div className={`${aspectRatio} relative z-10 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 mb-4 flex-shrink-0`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className={`${imageObjectFit} ${getImageTransform()} transition-transform duration-300 group-hover:scale-105`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
          />
        ) : (
          // [CardRefactor] Skeleton placeholder when no image
          <div className="w-full h-full bg-neutral-200 animate-pulse" />
        )}
      </div>

      {/* [CardRefactor] Badge area with theme colors */}
      {badge && (
        <div className="mb-3">
          <span className={`inline-flex items-center rounded-lg ${theme.badge} px-2.5 py-1 text-xs font-medium uppercase tracking-wide`}>
            {badge}
          </span>
        </div>
      )}

      {/* [CardRefactor] Typography hierarchy with clamp for responsive text */}
      <div className="flex-grow flex flex-col justify-start relative z-10">
        <h3 className="text-lg sm:text-xl lg:text-[clamp(18px,1.4vw,22px)] font-semibold tracking-tight text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        {subtitle && (
          <p className="mt-2 text-sm sm:text-[15px] leading-5 sm:leading-6 text-slate-600 line-clamp-2">
            {subtitle}
          </p>
        )}

      {/* [CardRefactor] Always visible content */}
      {alwaysVisibleContent && (
        <div className="mt-4">
          {alwaysVisibleContent}
        </div>
      )}

      {/* [CardRefactor] Hover content - expands on hover - only on client */}
      {hoverContent && (
        <div className="mt-3 overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out">
          <div className="text-sm text-slate-600 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            {hoverContent}
          </div>
        </div>
      )}
      </div>

      {/* [CardRefactor] Single CTA button with theme accent */}
      <div className="mt-4 sm:mt-5 flex justify-end mt-auto relative z-10">
        <span className={`inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl ${theme.accent} text-white px-3 py-1.5 sm:px-4 sm:py-2 hover:opacity-90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl`}>
          {ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  )

  // [CardRefactor] Wrap with Link if href provided, otherwise use onClick
  if (href) {
    return (
      <Link 
        href={href} 
        className="block"
        aria-label={`${title} - ${ctaLabel}`}
        role="link"
      >
        <CardContent />
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className="block w-full text-left"
      aria-label={`${title} - ${ctaLabel}`}
      role="button"
    >
      <CardContent />
    </button>
  )
}
