'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Shield, Zap, Battery, Globe, LucideIcon, Hammer, Monitor, Laptop, Snowflake, Lightbulb, Tv, Home, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

interface WhyChooseItem {
  icon: LucideIcon
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
  hoverColor: string
}

interface ProductPageProps {
  name?: string
  modelId?: string
  title: string
  description: string
  image: string
  categoryTitle?: string
  capacity?: string
  power?: string
  batteryLabel?: string
  features?: string[]
  applications?: string[]
  specifications?: Record<string, string>
  whyChooseItems?: WhyChooseItem[]
  runtimeStats?: { label: string; power: string; duration: string; icon: string }[]
  runtimeSummary?: string
}

export function ProductPage({
  name,
  modelId,
  title,
  description,
  image,
  categoryTitle,
  capacity,
  power,
  batteryLabel,
  features = [],
  applications = [],
  specifications = {},
  whyChooseItems,
  runtimeStats,
  runtimeSummary
}: ProductPageProps) {
  const { t, locale, loading } = useTranslation()

  const getRuntimeIcon = (iconName: string): LucideIcon => {
    const icons: Record<string, LucideIcon> = {
      Hammer, Monitor, Laptop, Snowflake, Lightbulb, Tv, Home, Clock
    }
    return icons[iconName] || Battery
  }

  // Title: gradient on last 2 words (şarj istasyonu pro tarzı)
  const titleWords = title.trim().split(/\s+/)
  const titleMain = titleWords.length > 2 ? titleWords.slice(0, -2).join(' ') : titleWords[0] ?? title
  const titleHighlight = titleWords.length > 2 ? titleWords.slice(-2).join(' ') : titleWords.slice(1).join(' ') || title
  const showTitleGradient = titleWords.length >= 2

  const hasKeySpecs = Boolean(capacity || power || batteryLabel)

  // Default whyChooseItems if not provided
  const experienceTitle = t('productPage.whyChoose.experience')
  const experienceDesc = t('productPage.whyChoose.experienceDesc')
  const customersTitle = t('productPage.whyChoose.customers')
  const customersDesc = t('productPage.whyChoose.customersDesc')
  const qualityTitle = t('productPage.whyChoose.quality')
  const qualityDesc = t('productPage.whyChoose.qualityDesc')

  const defaultWhyChooseItems: WhyChooseItem[] = [
    {
      icon: Shield,
      title: (loading || experienceTitle === 'productPage.whyChoose.experience') ? 'Güvenilir Teknoloji' : experienceTitle,
      description: (loading || experienceDesc === 'productPage.whyChoose.experienceDesc') ? 'En son teknoloji ve güvenilir çözümlerle donatılmış ürünler' : experienceDesc,
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-teal-500',
      hoverColor: 'text-blue-600'
    },
    {
      icon: Battery,
      title: (loading || customersTitle === 'productPage.whyChoose.customers') ? 'Yüksek Performans' : customersTitle,
      description: (loading || customersDesc === 'productPage.whyChoose.customersDesc') ? 'Uzun ömürlü ve yüksek verimlilikte enerji depolama çözümleri' : customersDesc,
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-slate-600',
      hoverColor: 'text-blue-600'
    },
    {
      icon: Globe,
      title: (loading || qualityTitle === 'productPage.whyChoose.quality') ? 'Global Kalite' : qualityTitle,
      description: (loading || qualityDesc === 'productPage.whyChoose.qualityDesc') ? 'Uluslararası standartlarda kalite ve sertifikasyonlar' : qualityDesc,
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-red-500',
      hoverColor: 'text-orange-600'
    }
  ]

  const displayWhyChooseItems = whyChooseItems || defaultWhyChooseItems

  const labelEnergy = loading ? 'Enerji' : (locale === 'en' ? 'Energy' : locale === 'ar' ? 'الطاقة' : 'Enerji')
  const labelPower = loading ? 'Güç' : (locale === 'en' ? 'Power' : locale === 'ar' ? 'القوة' : 'Güç')
  const labelBattery = loading ? 'Batarya' : (locale === 'en' ? 'Battery' : locale === 'ar' ? 'البطارية' : 'Batarya')
  const labelModelId = locale === 'ar' ? 'رقم الموديل' : 'Model ID'

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero Section - Şarj İstasyonu Pro tarzı: gradient, kategori rozeti, özellik kartı, model badge */}
      <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/30 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-4 items-start lg:items-center">

            {/* Sol: Başlık, açıklama, özellik kartı, CTA */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-6">
                {categoryTitle && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/90 border border-blue-200 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                      {categoryTitle}
                    </span>
                  </div>
                )}
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-slate-900 tracking-tight leading-[1.08] mt-1">
                  {showTitleGradient ? (
                    <>
                      {titleMain}{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        {titleHighlight}
                      </span>
                    </>
                  ) : (
                    title
                  )}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  {description.split('.')[0]}.
                </p>
              </div>

              {/* Ana özellik kartı - Enerji / Güç / Batarya */}
              {hasKeySpecs && (
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-10 py-4 sm:py-6 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-lg ring-1 ring-slate-100/50 max-w-fit mx-auto lg:mx-0">
                  {capacity && (
                    <>
                      <div className="space-y-1 text-left">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-blue-600">
                          <Battery className="h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">{labelEnergy}</span>
                        </div>
                        <div className="text-lg sm:text-2xl font-black text-slate-900">{capacity}</div>
                      </div>
                      {(capacity && power) && <div className="w-px h-14 bg-slate-200 hidden sm:block" />}
                    </>
                  )}
                  {power && (
                    <>
                      <div className="space-y-1 text-left">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-cyan-600">
                          <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">{labelPower}</span>
                        </div>
                        <div className="text-lg sm:text-2xl font-black text-slate-900">{power}</div>
                      </div>
                      {(power && batteryLabel) && <div className="w-px h-14 bg-slate-200 hidden sm:block" />}
                    </>
                  )}
                  {batteryLabel && (
                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-600">
                        <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">{labelBattery}</span>
                      </div>
                      <div className="text-lg sm:text-2xl font-black text-slate-900">{batteryLabel}</div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <Link
                  href={`/${locale}/fiyat-teklifi/`}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
                >
                  <span>{loading ? 'Teklif Talep Et' : t('nav.quote')}</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`/${locale}/iletisim/`}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm"
                >
                  <span>{loading ? 'Uzman Danışmanlığı' : t('productPage.cta.consultationButton')}</span>
                </Link>
              </div>
            </div>

            {/* Sağ: Ürün görseli + model rozeti */}
            <div className="lg:col-span-5 relative order-1 lg:order-2 mb-4 lg:mb-0">
              <div className="relative flex items-center justify-center max-w-[280px] sm:max-w-[350px] lg:max-w-none mx-auto">
                <div className="absolute w-[90%] aspect-square rounded-full bg-gradient-to-br from-blue-100 to-cyan-50 border border-blue-100 hidden sm:block" />
                <div className="relative w-full max-w-[500px] p-2 sm:p-4 lg:p-8 transition-transform duration-700 hover:scale-[1.03] transform-gpu">
                  <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain drop-shadow-xl sm:drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                {(modelId || name) && (
                  <div className="absolute -bottom-2 right-4 sm:right-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-lg hidden sm:block">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{labelModelId}</div>
                    <div className="text-lg sm:text-xl font-bold text-slate-900">{modelId || name}</div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Özellikler - tutarlı bölüm başlığı ve kart stili */}
      {features.length > 0 && (
        <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                {loading ? 'Özellikler' : t('productPage.features.title')}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed px-4">
                {title} {locale === 'tr' ? 'teknik özellikleri ve avantajları' : locale === 'en' ? 'technical specifications and advantages' : 'المواصفات والمزايا'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sadece açıklama (özellik yoksa) */}
      {features.length === 0 && (
        <section className="py-16 sm:py-20 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-6 tracking-tight">
                {loading ? 'Detaylı Bilgi' : t('productPage.features.title')}
              </h2>
              <div className="prose prose-lg mx-auto text-neutral-600 leading-relaxed text-left">
                {description.split('. ').filter(Boolean).map((sentence, idx) => (
                  <p key={idx} className="mb-4">{sentence.trim().endsWith('.') ? sentence : `${sentence}.`}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cihaz bazlı çalışma süreleri (kaç saat kullanılabilir) - opsiyonel */}
      {runtimeStats && runtimeStats.length > 0 && (
        <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-3">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                    {locale === 'en' ? 'Real-World Performance' : locale === 'ar' ? 'أداء عالم حقيقي' : 'Gerçek Dünya Performansı'}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-3 tracking-tight">
                  {locale === 'en' ? 'Device-Based Runtime' : locale === 'ar' ? 'مدة التشغيل حسب الجهاز' : 'Cihaz Bazlı Çalışma Süreleri'}
                </h2>
                {runtimeSummary && (
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                    {runtimeSummary}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {runtimeStats.map((stat, index) => {
                  const Icon = getRuntimeIcon(stat.icon)
                  return (
                    <div key={index} className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-0.5">
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                          </div>
                          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{stat.power}</div>
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">{stat.label}</h4>
                          <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                            {stat.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Kullanım Alanları - tutarlı bölüm ve kart stili */}
      {applications.length > 0 && (
        <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mx-auto max-w-3xl text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                {loading ? 'Kullanım Alanları' : t('productPage.applications.title')}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed px-4">
                {loading ? 'Bu ürün şuralarda kullanım için idealdir:' : t('productPage.applications.description')}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-base font-medium text-slate-800">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Neden Revium - tutarlı bölüm başlığı ve kart stili */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
              {loading ? 'Neden Revium?' : t('productPage.whyChoose.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center max-w-5xl mx-auto">
            {displayWhyChooseItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="text-center group rounded-2xl p-6 bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 w-full max-w-xs"
                >
                  <div className="relative inline-block mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                    <div className={`relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA - ürün sayfaları ile aynı stil */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white px-8 py-16 sm:px-16 sm:py-24 text-center">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                {loading ? 'Projeleriniz İçin Hazırız' : (() => { const v = t('productPage.cta.title'); return (v && !String(v).startsWith('productPage.')) ? v : 'Projeleriniz İçin Hazırız'; })()}
              </h2>
              <p className="text-xl text-neutral-300">
                {loading ? 'Uzman ekibimizle iletişime geçin, size en uygun enerji çözümünü birlikte planlayalım.' : (() => { const v = t('productPage.cta.description'); return (v && !String(v).startsWith('productPage.')) ? v : 'Uzman ekibimizle iletişime geçin, size en uygun enerji çözümünü birlikte planlayalım.'; })()}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button asChild className="h-14 px-10 rounded-xl bg-white text-neutral-900 hover:bg-neutral-100 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5">
                  <Link href={`/${locale}/fiyat-teklifi`}>
                    {loading ? 'Hemen Teklif Al' : (() => { const v = t('productPage.cta.quoteButton'); return (v && !String(v).startsWith('productPage.')) ? v : 'Fiyat Teklifi Talep Et'; })()}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-14 px-10 rounded-xl border-2 border-white/30 text-white hover:bg-white/15 hover:border-white/40 font-bold text-lg bg-transparent transition-all duration-300">
                  <Link href={`/${locale}/iletisim`}>
                    {loading ? 'Bizi Arayın' : (() => { const v = t('contact.title'); return (v && !String(v).startsWith('contact.')) ? v : 'Bizi Arayın'; })()}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
