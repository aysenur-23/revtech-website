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

const toArabicNumeral = (en: string) => {
  return ("" + en).replace(/[0-9]/g, (t) => "٠١٢٣٤٥٦٧٨٩".slice(+t, +t + 1));
}

const getProcessSteps = (t: any, loading: boolean, locale: string) => [
  {
    step: locale === 'ar' ? toArabicNumeral('01') : '01',
    title: loading ? 'Saha Analizi' : t('gesPage.process.siteAnalysis'),
    description: loading ? 'Güneş enerjisi potansiyeli ve teknik uygunluk analizi' : t('gesPage.process.siteAnalysisDesc')
  },
  {
    step: locale === 'ar' ? toArabicNumeral('02') : '02',
    title: loading ? 'Sistem Tasarımı' : t('gesPage.process.systemDesign'),
    description: loading ? 'İhtiyaca uygun optimal sistem tasarımı ve planlama' : t('gesPage.process.systemDesignDesc')
  },
  {
    step: locale === 'ar' ? toArabicNumeral('03') : '03',
    title: loading ? 'Malzeme Tedariki' : t('gesPage.process.materialSupply'),
    description: loading ? 'Kaliteli ve sertifikalı malzemelerin temin edilmesi' : t('gesPage.process.materialSupplyDesc')
  },
  {
    step: locale === 'ar' ? toArabicNumeral('04') : '04',
    title: loading ? 'Kurulum' : t('gesPage.process.installation'),
    description: loading ? 'Profesyonel ekip tarafından güvenli kurulum' : t('gesPage.process.installationDesc')
  },
  {
    step: locale === 'ar' ? toArabicNumeral('05') : '05',
    title: loading ? 'Test ve Devreye Alma' : t('gesPage.process.testing'),
    description: loading ? 'Kapsamlı testler ve sistemin devreye alınması' : t('gesPage.process.testingDesc')
  },
  {
    step: locale === 'ar' ? toArabicNumeral('06') : '06',
    title: loading ? 'Bakım ve Destek' : t('gesPage.process.maintenance'),
    description: loading ? 'Sürekli bakım ve 7/24 teknik destek hizmeti' : t('gesPage.process.maintenanceDesc')
  }
]

export default function GESKurulumuPage() {
  const { t, locale, loading } = useTranslation()
  const features = getFeatures(t, loading)
  const processSteps = getProcessSteps(t, loading, locale)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Hero Section - premium hizmet girişi */}
      <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" aria-hidden />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-blue-100/30 blur-[110px] rounded-full -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-cyan-100/20 blur-[90px] rounded-full translate-y-1/4 -translate-x-1/4" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200/80 ring-1 ring-slate-100/80">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center p-8 sm:p-10 md:p-14">
              <div className="relative order-first lg:order-1">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-100 shadow-lg ring-1 ring-slate-200/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent z-10 pointer-events-none" />
                  <Image
                    src="/images/services/ges-service-new.webp"
                    alt="GES Kurulumu"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 order-2 lg:order-2">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                    </span>
                    {loading ? 'Hizmet' : t('gesPage.whyTitle')}
                  </div>
                  <div className="h-0.5 w-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[2.75rem] font-bold text-slate-900 leading-[1.1] tracking-tight">
                    {loading ? 'GES Kurulumu' : t('gesPage.heroTitle')}
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
                    {loading ? 'Güneş enerjisi santrallerinizi profesyonel ekibimizle hayata geçirin. Temiz enerji geleceğinize yatırım yapın.' : t('gesPage.heroDescription')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-1">
                  <Button asChild className="group bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5 flex-1 border-0">
                    <Link href={`/${locale}/fiyat-teklifi`} className="flex items-center justify-center gap-2 sm:gap-3">
                      <span>{loading ? 'Teklif Talep Et' : t('nav.quote')}</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="group bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-slate-300 px-6 sm:px-8 py-4 rounded-xl font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-300 flex-1">
                    <Link href={`/${locale}/iletisim`} className="flex items-center justify-center gap-2 sm:gap-3">
                      <span>{loading ? 'Uzman Danışmanlığı' : t('productPage.cta.consultationButton')}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - belirgin kart gölgesi, hover scale/border, ikon ring */}
      <section id="features" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
              {loading ? 'Neden' : t('gesPage.whyTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Revium?' : t('gesPage.whyTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              {loading ? 'GES kurulumunda uzman ekibimiz ve kaliteli hizmet anlayışımızla fark yaratıyoruz' : t('gesPage.whyDescription')}
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 ${features.length === 4 ? 'lg:grid-cols-4' : features.length === 3 ? 'lg:grid-cols-3 lg:max-w-5xl mx-auto' : 'lg:max-w-5xl mx-auto'}`}>
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:scale-[1.02]">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-5 sm:mb-6 ring-4 ring-blue-100/80 group-hover:ring-blue-200 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - vurgulu adım numaraları, connector çizgileri */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
              {loading ? 'Kurulum' : t('gesPage.processTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Süreci' : t('gesPage.processTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              {loading ? 'GES kurulumunuzu adım adım nasıl gerçekleştiriyoruz?' : t('gesPage.processDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
                  <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 min-w-[3.5rem] bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg ring-2 ring-blue-100">
                      <span className="text-xl sm:text-2xl font-black text-white tabular-nums">{step.step}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transform -translate-y-1/2 z-0" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section - gradient/pattern ayrıştırma, buton kontrast */}
      <section id="contact" className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 opacity-95" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
              {loading ? 'GES Projenizi' : t('gesPage.ctaTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Hayata Geçirin' : t('gesPage.ctaTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 sm:mb-12 px-4">
              {loading ? 'Uzman ekibimizle iletişime geçin ve danışmanlık alın. GES projenizi en uygun maliyetle hayata geçirelim.' : t('gesPage.ctaDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex-1 max-w-xs mx-auto sm:mx-0">
                <Link href={`/${locale}/fiyat-teklifi`} className="flex items-center justify-center">
                  <span>{loading ? 'Teklif Al' : t('nav.quote')}</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-bold text-base shadow-sm hover:shadow transition-all flex-1 max-w-xs mx-auto sm:mx-0">
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