'use client'

import { Button } from '@/components/ui/button'
import { Wrench, CheckCircle, ArrowRight, Clock, Users, Shield, Zap, Settings, Phone, Building2, Battery, Factory, Warehouse, Activity, Gauge } from 'lucide-react'
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

export default function EndustriyelKurulumPage() {
  const { t, locale, loading } = useTranslation()
  const features = getFeatures(t, loading)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Hero Section - modern glass & gradient */}
      <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_-20%,rgba(59,130,246,0.2),transparent),radial-gradient(ellipse_60%_40%_at_20%_100%,rgba(16,185,129,0.18),transparent),linear-gradient(to_bottom_right,#f8fafc,#f1f5f9)]" />
          <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-[size:32px_32px]" aria-hidden />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden border border-white/60 bg-white/70 backdrop-blur-xl shadow-2xl shadow-slate-300/30 ring-1 ring-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[420px] lg:min-h-[480px]">
              <div className="relative order-first lg:order-1 min-h-[280px] lg:min-h-0">
                <div className="absolute inset-0 lg:inset-[1rem] rounded-2xl overflow-hidden bg-slate-100">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/services/industrial-service-new.webp"
                      alt="Endüstriyel Kurulum"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="relative order-2 lg:order-2 flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="space-y-5">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[2.85rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight">
                    <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                      {loading ? 'Endüstriyel Sistem Kurulumu' : t('industrialPage.heroTitle')}
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
                    {loading ? 'Büyük ölçekli endüstriyel tesisler için enerji depolama sistemleri kurulumu. Yüksek kapasiteli ve güvenilir çözümler.' : t('industrialPage.heroDescription')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
                  <Button asChild className="group bg-slate-900 hover:bg-slate-800 text-white px-6 sm:px-8 py-3.5 rounded-2xl font-semibold text-sm sm:text-base shadow-lg shadow-slate-900/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex-1 border-0">
                    <Link href={`/${locale}/fiyat-teklifi`} className="flex items-center justify-center gap-2 sm:gap-3">
                      <span>{loading ? 'Teklif Talep Et' : t('nav.quote')}</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="group bg-white/80 hover:bg-white text-slate-700 border border-slate-200 hover:border-slate-300 px-6 sm:px-8 py-3.5 rounded-2xl font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-300 flex-1">
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

      {/* Uygulama Alanları - Endüstriyel kurulum nerede kullanılır */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              {locale === 'tr' && 'Uygulama '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {locale === 'tr' ? 'Alanları' : locale === 'en' ? 'Application Areas' : 'مجالات التطبيق'}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              {locale === 'tr' && 'Endüstriyel enerji depolama sistemlerimiz geniş kullanım alanlarına uygun çözümler sunar.'}
              {locale === 'en' && 'Our industrial energy storage systems offer solutions for a wide range of applications.'}
              {locale === 'ar' && 'أنظمة تخزين الطاقة الصناعية لدينا تقدم حلولاً لمجموعة واسعة من التطبيقات.'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: Factory, title: locale === 'tr' ? 'Üretim Tesisleri' : locale === 'en' ? 'Manufacturing' : 'التصنيع', desc: locale === 'tr' ? 'Fabrika ve atölye kesintisiz güç' : locale === 'en' ? 'Uninterrupted power for factories' : 'طاقة متواصلة للمصانع' },
              { icon: Warehouse, title: locale === 'tr' ? 'Depo & Lojistik' : locale === 'en' ? 'Warehouse & Logistics' : 'المستودعات', desc: locale === 'tr' ? 'Depo aydınlatma ve ekipman gücü' : locale === 'en' ? 'Lighting and equipment power' : 'الإضاءة ومعدات الطاقة' },
              { icon: Activity, title: locale === 'tr' ? 'Sağlık & Veri Merkezleri' : locale === 'en' ? 'Healthcare & Data Centers' : 'الرعاية الصحية', desc: locale === 'tr' ? 'Kritik yükler için yedek güç' : locale === 'en' ? 'Backup power for critical loads' : 'طاقة احتياطية للأحمال الحرجة' },
              { icon: Gauge, title: locale === 'tr' ? 'Enerji Yoğun Sektörler' : locale === 'en' ? 'Energy-Intensive Sectors' : 'القطاعات المكثفة', desc: locale === 'tr' ? 'Madencilik, çimento, metal işleme' : locale === 'en' ? 'Mining, cement, metal processing' : 'التعدين والأسمنت والمعادن' },
            ].map((item, i) => (
              <div key={i} className="group p-6 sm:p-7 bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
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