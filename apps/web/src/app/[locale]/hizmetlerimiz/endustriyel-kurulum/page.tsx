'use client'

import { Button } from '@/components/ui/button'
import { Wrench, CheckCircle, ArrowRight, Clock, Users, Shield, Zap, Settings, Phone, Building2, Battery } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

const getFeatures = (t: any, loading: boolean) => [
  {
    icon: Building2,
    title: loading ? 'Endüstriyel Kapasiteli Sistem Tasarımı' : t('industrialPage.features.systemDesign'),
    description: loading ? 'Büyük ölçekli tesisler için özel tasarım ve planlama' : t('industrialPage.features.systemDesignDesc')
  },
  {
    icon: Battery,
    title: loading ? 'Yüksek Güçlü Batarya Sistemleri' : t('industrialPage.features.highPowerBattery'),
    description: loading ? 'Endüstriyel ihtiyaçlara uygun yüksek kapasiteli sistemler' : t('industrialPage.features.highPowerBatteryDesc')
  },
  {
    icon: Settings,
    title: loading ? 'SCADA Sistemi Entegrasyonu' : t('industrialPage.features.scadaIntegration'),
    description: loading ? 'Uzaktan izleme ve kontrol sistemleri entegrasyonu' : t('industrialPage.features.scadaIntegrationDesc')
  },
]

const toArabicNumeral = (n: string) => {
  return n.replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[parseInt(d)])
}

const getProcessSteps = (t: any, loading: boolean, locale: string) => [
  {
    step: locale === 'ar' ? toArabicNumeral('01') : '01',
    title: loading ? 'İhtiyaç Analizi' : t('industrialPage.process.needsAnalysis'),
    description: loading ? 'Endüstriyel tesisin enerji ihtiyaçlarının detaylı analizi' : t('industrialPage.process.needsAnalysisDesc')
  },
  {
    step: locale === 'ar' ? toArabicNumeral('02') : '02',
    title: loading ? 'Sistem Tasarımı' : t('industrialPage.process.systemDesign'),
    description: loading ? 'Özel endüstriyel sistem tasarımı ve mühendislik' : t('industrialPage.process.systemDesignDesc')
  },
  {
    step: locale === 'ar' ? toArabicNumeral('03') : '03',
    title: loading ? 'Malzeme Tedariki' : t('industrialPage.process.materialSupply'),
    description: loading ? 'Endüstriyel kalitede malzemelerin temin edilmesi' : t('industrialPage.process.materialSupplyDesc')
  },
  {
    step: locale === 'ar' ? toArabicNumeral('04') : '04',
    title: loading ? 'Kurulum ve Entegrasyon' : t('industrialPage.process.installation'),
    description: loading ? 'Profesyonel kurulum ve mevcut sistemlerle entegrasyon' : t('industrialPage.process.installationDesc')
  },
  {
    step: locale === 'ar' ? toArabicNumeral('05') : '05',
    title: loading ? 'Test ve Devreye Alma' : t('industrialPage.process.testing'),
    description: loading ? 'Kapsamlı testler ve güvenli devreye alma' : t('industrialPage.process.testingDesc')
  },
  {
    step: locale === 'ar' ? toArabicNumeral('06') : '06',
    title: loading ? 'İzleme ve Bakım' : t('industrialPage.process.monitoring'),
    description: loading ? 'Sürekli izleme ve periyodik bakım hizmetleri' : t('industrialPage.process.monitoringDesc')
  }
]

export default function EndustriyelKurulumPage() {
  const { t, locale, loading } = useTranslation()
  const features = getFeatures(t, loading)
  const processSteps = getProcessSteps(t, loading, locale)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">

      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center p-6 sm:p-8 md:p-12">
              {/* Service Image */}
              <div className="relative order-1 lg:order-1">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
                  <Image
                    src="/images/services/industrial-service-new.webp"
                    alt="Endüstriyel Kurulum"
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
                    {loading ? 'Endüstriyel Sistem Kurulumu' : t('industrialPage.heroTitle')}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed">
                    {loading ? 'Büyük ölçekli endüstriyel tesisler için enerji depolama sistemleri kurulumu. Yüksek kapasiteli ve güvenilir çözümler.' : t('industrialPage.heroDescription')}
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
      <section className="section bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              {loading ? 'Hizmet' : t('industrialPage.featuresTitle')}
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Özellikleri' : t('industrialPage.featuresTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              {loading ? 'Endüstriyel kurulumda sunduğumuz kapsamlı hizmetler' : t('industrialPage.featuresDescription')}
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 ${features.length === 1 ? 'max-w-sm mx-auto' :
            features.length === 2 ? 'sm:max-w-2xl mx-auto' :
              features.length === 3 ? 'lg:grid-cols-3 lg:max-w-5xl mx-auto justify-items-center' :
                features.length === 4 ? 'lg:grid-cols-4' :
                  features.length % 2 === 1 && features.length > 1 ? 'lg:max-w-5xl mx-auto justify-items-center' : ''
            }`}>
            {features.map((feature, index) => (
              <div key={index} className={`group text-center p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 hover:border-blue-200 ${features.length === 3 ? 'w-full max-w-sm' : ''
                }`}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-4 sm:mb-6">
                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section id="process" className="section bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              {loading ? 'Kurulum' : t('industrialPage.processTitle')}
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Süreci' : t('industrialPage.processTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              {loading ? 'Endüstriyel kurulumda izlediğimiz adım adım süreç' : t('industrialPage.processDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 hover:border-blue-200">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-lg sm:text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="contact" className="section bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              {loading ? 'Endüstriyel Projenizi' : t('industrialPage.ctaTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Hayata Geçirin' : t('industrialPage.ctaTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              {loading ? 'Uzman ekibimizle iletişime geçin ve danışmanlık alın. Endüstriyel enerji depolama projenizi en uygun maliyetle hayata geçirelim.' : t('industrialPage.ctaDescription')}
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
                  <span>{loading ? 'Diğer Hizmetler' : t('industrialPage.otherServices')}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}