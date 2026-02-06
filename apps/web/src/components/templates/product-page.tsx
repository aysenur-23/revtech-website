'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Shield, Zap, Battery, Play, Users, Award, Clock, Globe, LucideIcon } from 'lucide-react'
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
  title: string
  description: string
  image: string
  features?: string[]
  applications?: string[]
  specifications?: Record<string, string>
  whyChooseItems?: WhyChooseItem[]
}

export function ProductPage({
  name,
  title,
  description,
  image,
  features = [],
  applications = [],
  specifications = {},
  whyChooseItems
}: ProductPageProps) {
  const { t, locale, loading } = useTranslation()
  
  // Default whyChooseItems if not provided - with fallback mechanism
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
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      
      {/* Hero Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center p-4 sm:p-6 md:p-8 lg:p-12">
              {/* Product Image */}
              <div className="relative order-1 lg:order-1">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100 p-3 sm:p-4 md:p-6 lg:p-8">
                  <div className="relative w-full aspect-[4/3] bg-white rounded-lg">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  {name && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 bg-slate-800/95 backdrop-blur-sm rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 shadow-xl border border-slate-700">
                      <span className="text-xs sm:text-sm font-bold text-white">{name}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 leading-tight">
                    {title}
                  </h1>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Alt butonlar - Yan yana */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1 min-h-[44px] sm:min-h-[48px]">
                      <Link href={`/${locale}/fiyat-teklifi`} className="flex items-center justify-center gap-2 sm:gap-3">
                        <span>{loading ? 'Teklif Talep Et' : t('nav.quote')}</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    
                    <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1 min-h-[44px] sm:min-h-[48px]">
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


      {/* Features - Only show if features array is provided and not empty */}
      {features && features.length > 0 && (
        <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
                {loading ? 'Özellikler' : t('productPage.features.title')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4">
                {title} {loading ? 'ürününün teknik özellikleri, özellikleri ve avantajları' : t('productPage.features.description')}
              </p>
            </div>
            
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 ${
              features.length === 1 ? 'max-w-sm mx-auto' : 
              features.length === 3 ? 'sm:max-w-2xl lg:max-w-3xl mx-auto' : ''
            }`}>
              {features.map((feature, index) => {
                return (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 card hover-lift border border-blue-200 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-neutral-700 font-medium">{feature}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Description Section for products without features - replaces Features section */}
      {(!features || features.length === 0) && (
        <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
                {loading ? 'Ürün Hakkında' : t('productPage.features.title')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4">
                {title} {loading ? 'ürününün detaylı bilgileri' : t('productPage.features.description')}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14 shadow-lg border border-blue-100">
                <div className="space-y-6 sm:space-y-8">
                  {(() => {
                    // Metni cümlelere ayır
                    const sentences = description.split(/\.\s+/).filter(s => s.trim().length > 0);
                    const midPoint = Math.ceil(sentences.length / 2);
                    const firstParagraph = sentences.slice(0, midPoint).join('. ') + (sentences.length > 0 ? '.' : '');
                    const secondParagraph = sentences.slice(midPoint).join('. ') + (sentences.length > midPoint ? '.' : '');
                    
                    return (
                      <>
                        <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed text-justify">
                          {firstParagraph}
                        </p>
                        {secondParagraph && (
                          <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed text-justify">
                            {secondParagraph}
                          </p>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Applications */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
              {loading ? 'Kullanım Alanları' : t('productPage.applications.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4">
              {title} {loading ? 'ürününün ideal kullanım alanları' : t('productPage.applications.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {applications.map((application, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 card hover-lift border-2 border-blue-200 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-50 to-slate-50 min-h-[60px] sm:min-h-[70px]">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-slate-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                <span className="text-xs sm:text-sm md:text-base text-neutral-700 font-medium group-hover:text-neutral-900 transition-colors duration-300">
                  {application}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Why Choose Us */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
            {(() => {
              const whyChooseTitle = t('productPage.whyChoose.title')
              const whyChooseDesc = t('productPage.whyChoose.description')
              return (
                <>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
                    {(loading || whyChooseTitle === 'productPage.whyChoose.title') ? 'Neden Revium?' : whyChooseTitle}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4">
                    {title} {(loading || whyChooseDesc === 'productPage.whyChoose.description') ? 'ürününü seçmeniz için güçlü nedenler' : whyChooseDesc}
                  </p>
                </>
              )
            })()}
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${displayWhyChooseItems.length === 3 ? 'lg:grid-cols-3' : displayWhyChooseItems.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-6 sm:gap-8 justify-items-center max-w-5xl mx-auto`}>
            {displayWhyChooseItems.map((item, index) => {
              const Icon = item.icon
              const isOdd = displayWhyChooseItems.length % 2 === 1
              const isLast = index === displayWhyChooseItems.length - 1
              return (
                <div 
                  key={index}
                  className={`text-center group border border-purple-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg w-full max-w-xs ${
                    isLast && isOdd && displayWhyChooseItems.length > 1 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md lg:max-w-xs' : ''
                  }`}
                >
                  <div className="relative inline-block mb-4 sm:mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                    <div className={`relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold text-neutral-900 transition-colors duration-300 mb-3 sm:mb-4 ${
                    item.hoverColor === 'text-blue-600' ? 'group-hover:text-blue-600' :
                    item.hoverColor === 'text-yellow-600' ? 'group-hover:text-yellow-600' :
                    item.hoverColor === 'text-green-600' ? 'group-hover:text-green-600' :
                    item.hoverColor === 'text-purple-600' ? 'group-hover:text-purple-600' :
                    item.hoverColor === 'text-orange-600' ? 'group-hover:text-orange-600' :
                    item.hoverColor === 'text-slate-600' ? 'group-hover:text-slate-600' :
                    'group-hover:text-blue-600'
                  }`}>
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

      {/* CTA */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-sky-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-800 mb-3 sm:mb-4 px-4">
              {title} {loading ? 'Hakkında Daha Fazla Bilgi' : t('productPage.cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
              {loading ? 'Bu ürün hakkında detaylı bilgi almak veya fiyat teklifi talep etmek için uzman ekibimizle iletişime geçin' : t('productPage.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <Button asChild className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href={`/${locale}/fiyat-teklifi`} className="flex items-center justify-center gap-2 sm:gap-3">
                  {loading ? 'Fiyat Teklifi Talep Et' : t('productPage.cta.quoteButton')}
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href={`/${locale}/iletisim`} className="flex items-center justify-center gap-2 sm:gap-3">
                  {loading ? 'Uzman Danışmanlığı' : t('productPage.cta.consultationButton')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
