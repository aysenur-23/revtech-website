"use client"

import { Card, CardProps } from './card'
import { cn } from '@/lib/utils'

interface CardGridProps {
  cards: CardProps[]
  className?: string
  title?: string
  subtitle?: string
}

export function CardGrid({ cards, className, title, subtitle }: CardGridProps) {
  return (
    <section className={cn("py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50", className)}>
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* [CardRefactor] Section header with consistent typography */}
        {(title || subtitle) && (
          <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-prose mx-auto px-4">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* [CardRefactor] Responsive grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div key={index}>
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
