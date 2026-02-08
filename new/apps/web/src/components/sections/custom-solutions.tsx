"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Wrench, Lightbulb, Users, Target } from 'lucide-react'
import Link from 'next/link'

export function CustomSolutions() {
  const solutions = [
    {
      icon: Wrench,
      title: 'Teknik Danışmanlık',
      description: 'İhtiyaçlarınıza özel enerji çözümleri için uzman danışmanlık hizmeti.',
      features: ['İhtiyaç analizi', 'Teknik değerlendirme', 'Çözüm önerileri']
    },
    {
      icon: Lightbulb,
      title: 'Özel Tasarım',
      description: 'Benzersiz gereksinimleriniz için özel olarak tasarlanmış sistemler.',
      features: ['Özel mühendislik', 'Prototip geliştirme', 'Test ve doğrulama']
    },
    {
      icon: Users,
      title: 'Proje Yönetimi',
      description: 'Kurulumdan teslime kadar tüm süreçlerin profesyonel yönetimi.',
      features: ['Proje planlama', 'Zaman yönetimi', 'Kalite kontrol']
    },
    {
      icon: Target,
      title: 'Sürekli Destek',
      description: 'Sisteminizin optimal performansı için sürekli bakım ve destek.',
      features: ['7/24 destek', 'Periyodik bakım', 'Yedek parça temini']
    }
  ]

  return (
    <section className="section-mobile-enhanced bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container-mobile-enhanced">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 px-6">
            <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              Size Özel Çözümler
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto px-6 leading-relaxed">
            Her projenin kendine özgü gereksinimleri vardır. Uzman ekibimizle birlikte 
            ihtiyaçlarınıza en uygun enerji çözümlerini tasarlıyor ve hayata geçiriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {solutions.map((solution, index) => (
            <div key={index} className="group">
              <div className="card card-hover p-6 sm:p-8 h-full border border-slate-200">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-2xl bg-gradient-to-br from-blue-100 to-teal-200 group-hover:scale-105 transition-transform duration-300">
                  <solution.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-500">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button asChild variant="outline" size="lg" className="border-2 border-brand-200 text-brand-700 bg-brand-50 hover:bg-brand-100 hover:border-brand-300 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold rounded-xl">
              <Link href="/tr/iletisim">
                Danışmanlık
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
