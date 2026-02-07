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
      {/* Hero Section - premium hizmet girişi */}
      <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" aria-hidden />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-blue-100/30 blur-[110px] rounded-full -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-emerald-100/20 blur-[90px] rounded-full translate-y-1/4 -translate-x-1/4" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200/80 ring-1 ring-slate-100/80">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center p-8 sm:p-10 md:p-14">
              <div className="relative order-first lg:order-1">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-100 shadow-lg ring-1 ring-slate-200/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent z-10 pointer-events-none" />
                  <Image
                    src="/images/services/industrial-service-new.webp"
                    alt="Endüstriyel Kurulum"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 order-2 lg:order-2">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50/90 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    {loading ? 'Hizmet' : t('industrialPage.featuresTitle')}
                  </div>
                  <div className="h-0.5 w-14 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full" />
                  <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[2.75rem] font-bold text-slate-900 leading-[1.1] tracking-tight">
                    {loading ? 'Endüstriyel Sistem Kurulumu' : t('industrialPage.heroTitle')}
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
                    {loading ? 'Büyük ölçekli endüstriyel tesisler için enerji depolama sistemleri kurulumu. Yüksek kapasiteli ve güvenilir çözümler.' : t('industrialPage.heroDescription')}
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
              {loading ? 'Hizmet' : t('industrialPage.featuresTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Özellikleri' : t('industrialPage.featuresTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              {loading ? 'Endüstriyel kurulumda sunduğumuz kapsamlı hizmetler' : t('industrialPage.featuresDescription')}
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 ${features.length === 1 ? 'max-w-sm mx-auto' :
            features.length === 2 ? 'sm:max-w-2xl mx-auto' :
              features.length === 3 ? 'lg:grid-cols-3 lg:max-w-5xl mx-auto' :
                features.length === 4 ? 'lg:grid-cols-4' :
                  features.length % 2 === 1 && features.length > 1 ? 'lg:max-w-5xl mx-auto' : ''
            }`}>
            {features.map((feature, index) => (
              <div key={index} className={`group text-center p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:scale-[1.02] ${features.length === 3 ? 'w-full max-w-sm mx-auto' : ''}`}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-5 sm:mb-6 ring-4 ring-blue-100/80 group-hover:ring-blue-200 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section - vurgulu adım numaraları, connector çizgileri */}
      <section id="process" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
              {loading ? 'Kurulum' : t('industrialPage.processTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Süreci' : t('industrialPage.processTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              {loading ? 'Endüstriyel kurulumda izlediğimiz adım adım süreç' : t('industrialPage.processDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
                  <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 min-w-[3.5rem] bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg ring-2 ring-blue-100">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white tabular-nums">{step.step}</span>
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
              {loading ? 'Endüstriyel Projenizi' : t('industrialPage.ctaTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {loading ? 'Hayata Geçirin' : t('industrialPage.ctaTitleHighlight')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 sm:mb-12 px-4">
              {loading ? 'Uzman ekibimizle iletişime geçin ve danışmanlık alın. Endüstriyel enerji depolama projenizi en uygun maliyetle hayata geçirelim.' : t('industrialPage.ctaDescription')}
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