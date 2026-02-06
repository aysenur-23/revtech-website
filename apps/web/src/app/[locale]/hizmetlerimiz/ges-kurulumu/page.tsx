'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Sun, CheckCircle, ArrowRight, Clock, Users, Award, Shield, Zap, Wrench, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

const getFeatures = (t: any, loading: boolean) => [
  {
    icon: Sun,
    title: loading ? 'Proje Tasarımı ve Planlama' : t('gesPage.features.projectDesign'),
    description: loading ? 'Sahaya özel detaylı analiz ve en uygun sistem tasarımı' : t('gesPage.features.projectDesignDesc')
  },
  {
    icon: Wrench,
    title: loading ? 'Profesyonel Kurulum' : t('gesPage.features.professionalInstallation'),
    description: loading ? 'Uzman ekip tarafından güvenli ve kaliteli kurulum' : t('gesPage.features.professionalInstallationDesc')
  },
  {
    icon: Zap,
    title: loading ? 'Sistem Entegrasyonu' : t('gesPage.features.systemIntegration'),
    description: loading ? 'Mevcut elektrik altyapısı ile uyumlu entegrasyon' : t('gesPage.features.systemIntegrationDesc')
  },
  {
    icon: Shield,
    title: loading ? 'Test ve Devreye Alma' : t('gesPage.features.testing'),
    description: loading ? 'Kapsamlı testler ve güvenli devreye alma süreci' : t('gesPage.features.testingDesc')
  }
]

const getProcessSteps = (t: any, loading: boolean) => [
  {
    step: '01',
    title: loading ? 'Saha Analizi' : t('gesPage.process.siteAnalysis'),
    description: loading ? 'Güneş enerjisi potansiyeli ve teknik uygunluk analizi' : t('gesPage.process.siteAnalysisDesc')
  },
  {
    step: '02',
    title: loading ? 'Sistem Tasarımı' : t('gesPage.process.systemDesign'),
    description: loading ? 'İhtiyaca uygun optimal sistem tasarımı ve planlama' : t('gesPage.process.systemDesignDesc')
  },
  {
    step: '03',
    title: loading ? 'Malzeme Tedariki' : t('gesPage.process.materialSupply'),
    description: loading ? 'Kaliteli ve sertifikalı malzemelerin temin edilmesi' : t('gesPage.process.materialSupplyDesc')
  },
  {
    step: '04',
    title: loading ? 'Kurulum' : t('gesPage.process.installation'),
    description: loading ? 'Profesyonel ekip tarafından güvenli kurulum' : t('gesPage.process.installationDesc')
  },
  {
    step: '05',
    title: loading ? 'Test ve Devreye Alma' : t('gesPage.process.testing'),
    description: loading ? 'Kapsamlı testler ve sistemin devreye alınması' : t('gesPage.process.testingDesc')
  },
  {
    step: '06',
    title: loading ? 'Bakım ve Destek' : t('gesPage.process.maintenance'),
    description: loading ? 'Sürekli bakım ve 7/24 teknik destek hizmeti' : t('gesPage.process.maintenanceDesc')
  }
]

export default function GESKurulumuPage() {
  const { t, locale, loading } = useTranslation()
  const features = getFeatures(t, loading)
  const processSteps = getProcessSteps(t, loading)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      
      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center p-6 sm:p-8 md:p-12">
              {/* Service Image */}
              <div className="relative order-1 lg:order-1">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
                  <Image
                    src="/images/services/ges-hero.png"
                    alt="GES Kurulumu"
                    width={600}
                    height={450}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Service Info */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                    {loading ? 'GES Kurulumu' : t('gesPage.heroTitle')}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed">
                    {loading ? 'Güneş enerjisi santrallerinizi profesyonel ekibimizle hayata geçirin. Temiz enerji geleceğinize yatırım yapın.' : t('gesPage.heroDescription')}
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1">
                      <Link href={`/${locale}/fiyat-teklifi`} className="flex items-center justify-center gap-2 sm:gap-3">
                        <span>{loading ? 'Teklif Talep Et' : t('nav.quote')}</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    
                    <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1">
                      <Link href={`/${locale}/iletisim`} className="flex items-center justify-center gap-2 sm:gap-3">
                        <span>{loading ? 'Uzman Danışmanlığı' : t('productPage.cta.consultationButton')}</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              {loading ? 'Neden' : t('gesPage.whyTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Revium?' : t('gesPage.whyTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              {loading ? 'GES kurulumunda uzman ekibimiz ve kaliteli hizmet anlayışımızla fark yaratıyoruz' : t('gesPage.whyDescription')}
            </p>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 ${
            features.length === 1 ? 'max-w-sm mx-auto' : 
            features.length === 2 ? 'sm:max-w-2xl mx-auto' : 
            features.length === 3 ? 'lg:grid-cols-3 lg:max-w-5xl mx-auto justify-items-center' : 
            features.length === 4 ? 'lg:grid-cols-4' : 
            features.length % 2 === 1 && features.length > 1 ? 'lg:max-w-5xl mx-auto justify-items-center' : ''
          }`}>
            {features.map((feature, index) => (
              <div key={index} className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group ${
                features.length === 3 ? 'w-full max-w-sm' : ''
              }`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              {loading ? 'Kurulum' : t('gesPage.processTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Süreci' : t('gesPage.processTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              {loading ? 'GES kurulumunuzu adım adım nasıl gerçekleştiriyoruz?' : t('gesPage.processDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover-lift">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-lg mr-3 sm:mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="contact" className="section bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              {loading ? 'GES Projenizi' : t('gesPage.ctaTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Hayata Geçirin' : t('gesPage.ctaTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              {loading ? 'Uzman ekibimizle iletişime geçin ve danışmanlık alın. GES projenizi en uygun maliyetle hayata geçirelim.' : t('gesPage.ctaDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1">
                <Link href={`/${locale}/fiyat-teklifi`} className="flex items-center justify-center">
                  <span>{loading ? 'Teklif Al' : t('nav.quote')}</span>
                </Link>
              </Button>
              
              <Button asChild className="group relative overflow-hidden bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex-1">
                <Link href={`/${locale}/hizmetlerimiz`} className="flex items-center justify-center gap-2 sm:gap-3">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{loading ? 'Diğer Hizmetler' : t('gesPage.otherServices')}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}