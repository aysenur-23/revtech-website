'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Battery, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dictionary } from '@/hooks/useDictionary'

interface HeroSectionProps {
  dictionary: Dictionary
}

export function HeroSection({ dictionary }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-500/10 to-teal-500/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Animated particles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-electric-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-electric-400/30 rounded-full blur-lg animate-pulse delay-500" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Content */}
          <div className="col-span-12 md:col-span-6 space-y-8">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-normal py-2">
                <span className="block text-white">
                  {dictionary.hero.title}
                </span>
                <span className="block gradient-electric-text py-1">
                  {dictionary.hero.subtitle}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                {dictionary.hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button asChild size="lg" className="gradient-electric hover:opacity-90 group">
                <Link href="/tr/urunlerimiz">
                  {dictionary.hero.cta1}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-neutral-600 text-white hover:bg-neutral-800">
                <Link href="/tr/fiyat-teklifi">
                  {dictionary.hero.cta2}
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <Zap className="h-4 w-4 text-electric-400" />
                <span>700W MPPT</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <Battery className="h-4 w-4 text-teal-400" />
                <span>4000 Döngü</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <Shield className="h-4 w-4 text-electric-400" />
                <span>Tam Sinüs Inverter</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="col-span-12 md:col-span-6">
            <div className="relative animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-2xl overflow-hidden glass-dark p-8">
                <Image
                  src="/images/hero/stacked-units.jpg"
                  alt="Revium Energy Storage Units"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                  priority
                />
                
                {/* Capacity badges overlay */}
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="bg-electric-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    2.7 kWh
                  </div>
                  <div className="bg-teal-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    5.4 kWh
                  </div>
                  <div className="bg-electric-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    10.5 kWh
                  </div>
                  <div className="bg-teal-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    21.6 kWh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
