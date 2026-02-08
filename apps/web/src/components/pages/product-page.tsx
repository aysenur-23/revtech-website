"use client"

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
// import { Card, CardContent } from '@/components/ui/shadcn-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Battery, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Truck,
  Wrench,
  Headphones
} from 'lucide-react'
import { ui } from '@/lib/ui.config'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  subtitle: string
  description: string
  price: string
  capacity: string
  power: string
  warranty: string
  features: string[]
  specifications: {
    label: string
    value: string
  }[]
  applications: string[]
  image: string
}

interface ProductPageProps {
  product: Product
}

export function ProductPage({ product }: ProductPageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'applications'>('overview')

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className={ui.layout.container}>
          <div className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium mb-6">
              <Battery className="w-4 h-4 mr-2" />
              {product.subtitle}
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
              <span className="text-slate-900">GÃ¼Ã§lÃ¼ ve GÃ¼venilir</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                {product.name}
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              {product.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">{product.capacity}</div>
                <div className="text-sm text-slate-600">Kapasite</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">{product.power}</div>
                <div className="text-sm text-slate-600">GÃ¼Ã§</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{product.warranty}</div>
                <div className="text-sm text-slate-600">Garanti</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image */}
      <section className="py-16 bg-white">
        <div className={ui.layout.container}>
          <div className="flex items-center justify-center relative z-10">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Main image container */}
              <div className="relative aspect-square w-full max-w-lg rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-2xl border-4 border-emerald-500">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-20" />
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-xl">
                      <Battery className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full opacity-60 animate-ping" />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-teal-400 rounded-full opacity-40 animate-ping delay-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className={ui.layout.container}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Ã–ne Ã‡Ä±kan Ã–zellikler
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              YÃ¼ksek performans ve gÃ¼venilirlik iÃ§in tasarlanmÄ±ÅŸ Ã¶zellikler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-lg p-8 border-4 border-emerald-500">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-white">
        <div className={ui.layout.container}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                Teknik Ã–zellikler
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              DetaylÄ± teknik spesifikasyonlar
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border-4 border-teal-500">
                  <span className="font-medium text-slate-700">{spec.label}</span>
                  <span className="text-slate-900 font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-slate-50">
        <div className={ui.layout.container}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                KullanÄ±m AlanlarÄ±
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              GeniÅŸ kullanÄ±m alanlarÄ± ile her ihtiyaca uygun Ã§Ã¶zÃ¼m
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.applications.map((application, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border-4 border-emerald-500">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-700 font-medium">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-500 to-teal-500">
        <div className={ui.layout.container}>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              DetaylÄ± Bilgi AlÄ±n
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Uzman ekibimizle iletiÅŸime geÃ§erek detaylÄ± bilgi alabilir ve size Ã¶zel Ã§Ã¶zÃ¼mler geliÅŸtirebiliriz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" asChild className="bg-white text-emerald-600 hover:bg-emerald-50 border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-300 group px-8 py-4 text-lg">
                <Link href="/iletisim">
                  Bizimle Ä°letiÅŸime GeÃ§in
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 shadow-xl hover:shadow-2xl transition-all duration-300 group px-8 py-4 text-lg">
                <Link href="/fiyat-teklifi">
                  Fiyat Teklifi Al
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
