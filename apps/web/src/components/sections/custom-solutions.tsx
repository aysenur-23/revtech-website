"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Wrench, Lightbulb, Users, Target } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export function CustomSolutions() {
  const { t, locale, loading } = useTranslation()
  
  const solutions = [
    {
      icon: Wrench,
      title: loading ? 'Teknik Danışmanlık' : t('customSolutions.technicalConsulting'),
      description: loading ? 'İhtiyaçlarınıza özel enerji çözümleri için uzman danışmanlık hizmeti.' : t('customSolutions.technicalConsultingDesc'),
      features: loading ? ['İhtiyaç analizi', 'Teknik değerlendirme', 'Çözüm önerileri'] : [
        t('customSolutions.technicalConsultingFeatures.0'),
        t('customSolutions.technicalConsultingFeatures.1'),
        t('customSolutions.technicalConsultingFeatures.2')
      ]
    },
    {
      icon: Lightbulb,
      title: loading ? 'Özel Tasarım' : t('customSolutions.customDesign'),
      description: loading ? 'Benzersiz gereksinimleriniz için özel olarak tasarlanmış sistemler.' : t('customSolutions.customDesignDesc'),
      features: loading ? ['Özel mühendislik', 'Prototip geliştirme', 'Test ve doğrulama'] : [
        t('customSolutions.customDesignFeatures.0'),
        t('customSolutions.customDesignFeatures.1'),
        t('customSolutions.customDesignFeatures.2')
      ]
    },
    {
      icon: Users,
      title: loading ? 'Proje Yönetimi' : t('customSolutions.projectManagement'),
      description: loading ? 'Kurulumdan teslime kadar tüm süreçlerin profesyonel yönetimi.' : t('customSolutions.projectManagementDesc'),
      features: loading ? ['Proje planlama', 'Zaman yönetimi', 'Kalite kontrol'] : [
        t('customSolutions.projectManagementFeatures.0'),
        t('customSolutions.projectManagementFeatures.1'),
        t('customSolutions.projectManagementFeatures.2')
      ]
    },
    {
      icon: Target,
      title: loading ? 'Sürekli Destek' : t('customSolutions.ongoingSupport'),
      description: loading ? 'Sisteminizin optimal performansı için sürekli bakım ve destek.' : t('customSolutions.ongoingSupportDesc'),
      features: loading ? ['Periyodik bakım', 'Yedek parça temini'] : [
        t('customSolutions.ongoingSupportFeatures.0'),
        t('customSolutions.ongoingSupportFeatures.1')
      ]
    }
  ]

  return (
    <section className="section-mobile-enhanced bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="container-mobile-enhanced">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-3 sm:mb-4 px-6">
            <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent pb-3" style={{ lineHeight: '1.2', paddingBottom: '0.5rem' }}>
              {loading ? 'Size Özel Çözümler' : t('customSolutions.title')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto px-6 leading-relaxed">
            {loading ? 'Her projenin kendine özgü gereksinimleri vardır. Uzman ekibimizle birlikte ihtiyaçlarınıza en uygun enerji çözümlerini tasarlıyor ve hayata geçiriyoruz.' : t('customSolutions.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {solutions.map((solution, index) => (
            <div key={index} className="group">
              <div className="card card-hover p-6 sm:p-8 h-full border border-slate-200 bg-white/60 backdrop-blur-sm">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-6 sm:mb-8 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-100 group-hover:scale-105 transition-transform duration-300">
                  <solution.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-600">
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
        <div className="text-center mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button asChild size="lg" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link href={`/${locale}/iletisim`} className="flex items-center justify-center gap-2 sm:gap-3">
                <span>{loading ? 'Danışmanlık Talep Et' : t('customSolutions.consultationButton')}</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
