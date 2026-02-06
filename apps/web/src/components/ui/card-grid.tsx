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
    <section className={cn("py-6 sm:py-8 md:py-10 bg-white", className)}>
      <div className="container px-4 sm:px-6 lg:px-10">
        {/* [CardRefactor] Section header with premium typography */}
        {(title || subtitle) && (
          <div className="text-center space-y-1.5 mb-6 sm:mb-7">
            {title && (
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto px-4 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 max-w-[1200px] mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="h-full">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
