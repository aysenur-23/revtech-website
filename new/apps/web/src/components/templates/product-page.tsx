import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Shield, Zap, Battery, Play, Users, Award, Clock, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ProductPageProps {
  name?: string
  title: string
  description: string
  image: string
  features: string[]
  applications?: string[]
  specifications?: Record<string, string>
}

export function ProductPage({
  name,
  title,
  description,
  image,
  features,
  applications = [],
  specifications = {}
}: ProductPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Product Image */}
            <div className="relative order-1 lg:order-1">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                {name && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-1">
                    <span className="text-xs sm:text-sm font-bold text-slate-600">{name}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed">
                  {description}
                </p>
              </div>

            <div className="space-y-4 sm:space-y-6">
              
              {/* Alt butonlar - Yan yana */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1">
                  <Link href="/tr/fiyat-teklifi" className="flex items-center justify-center gap-2 sm:gap-3">
                    <span>Teklif Talep Et</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <Button asChild className="group relative overflow-hidden bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex-1">
                  <Link href="/tr/iletisim" className="flex items-center justify-center gap-2 sm:gap-3">
                    <span>Danışmanlık</span>
                  </Link>
                </Button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">
              Özellikler
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4">
              {title} ürününün teknik özellikleri, özellikleri ve avantajları
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 card hover-lift border border-blue-200 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base text-neutral-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Applications */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">
              Kullanım Alanları
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4">
              {title} ürününün ideal kullanım alanları
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 card hover-lift border-2 border-blue-200 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-50 to-slate-50">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-slate-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-neutral-700 font-medium group-hover:text-neutral-900 transition-colors duration-300">
                  {application}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">
              Neden Revium?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4">
              {title} ürününü seçmeniz için güçlü nedenler
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group border border-purple-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-teal-500 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-300 mb-3 sm:mb-4">
                15+ Yıl Deneyim
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Sektörde 15 yılı aşkın deneyimimizle güvenilir çözümler sunuyoruz
              </p>
            </div>
            
            <div className="text-center group border border-purple-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-600 rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-slate-600 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors duration-300 mb-3 sm:mb-4">
                500+ Müşteri
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Türkiye genelinde 500'den fazla memnun müşterimiz
              </p>
            </div>
            
            <div className="text-center group border border-purple-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-purple-600 transition-colors duration-300 mb-3 sm:mb-4">
                7/24 Destek
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Kesintisiz teknik destek ve müşteri hizmetleri
              </p>
            </div>
            
            <div className="text-center group border border-purple-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg">
              <div className="relative inline-block mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-orange-600 transition-colors duration-300 mb-3 sm:mb-4">
                Global Kalite
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Uluslararası standartlarda kalite ve sertifikasyonlar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              {title} Hakkında Daha Fazla Bilgi
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
              Bu ürün hakkında detaylı bilgi almak veya fiyat teklifi talep etmek için uzman ekibimizle iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <Button asChild className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/tr/fiyat-teklifi" className="flex items-center justify-center gap-2 sm:gap-3">
                  Fiyat Teklifi Talep Et
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg border-2 border-white/50 hover:border-white text-white hover:bg-white hover:text-slate-900 shadow-md hover:shadow-lg transition-all duration-300">
                <Link href="/tr/iletisim" className="flex items-center justify-center gap-2 sm:gap-3">
                  Uzman Danışmanlığı
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
