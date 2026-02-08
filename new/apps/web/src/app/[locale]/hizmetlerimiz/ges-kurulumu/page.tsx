import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Sun, CheckCircle, ArrowRight, Clock, Users, Award, Shield, Zap, Wrench, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    icon: Sun,
    title: 'Proje Tasarımı ve Planlama',
    description: 'Sahaya özel detaylı analiz ve en uygun sistem tasarımı'
  },
  {
    icon: Wrench,
    title: 'Profesyonel Kurulum',
    description: 'Uzman ekip tarafından güvenli ve kaliteli kurulum'
  },
  {
    icon: Zap,
    title: 'Sistem Entegrasyonu',
    description: 'Mevcut elektrik altyapısı ile uyumlu entegrasyon'
  },
  {
    icon: Shield,
    title: 'Test ve Devreye Alma',
    description: 'Kapsamlı testler ve güvenli devreye alma süreci'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Saha Analizi',
    description: 'Güneş enerjisi potansiyeli ve teknik uygunluk analizi'
  },
  {
    step: '02',
    title: 'Sistem Tasarımı',
    description: 'İhtiyaca uygun optimal sistem tasarımı ve planlama'
  },
  {
    step: '03',
    title: 'Malzeme Tedariki',
    description: 'Kaliteli ve sertifikalı malzemelerin temin edilmesi'
  },
  {
    step: '04',
    title: 'Kurulum',
    description: 'Profesyonel ekip tarafından güvenli kurulum'
  },
  {
    step: '05',
    title: 'Test ve Devreye Alma',
    description: 'Kapsamlı testler ve sistemin devreye alınması'
  },
  {
    step: '06',
    title: 'Bakım ve Destek',
    description: 'Sürekli bakım ve 7/24 teknik destek hizmeti'
  }
]

const projects = [
  {
    title: 'Konya Organize Sanayi Bölgesi GES',
    location: 'Konya, Türkiye',
    image: '/images/services/ges-visual.png',
    description: 'Büyük ölçekli endüstriyel güneş enerjisi santrali'
  },
  {
    title: 'Kayseri Fabrika Çatı GES',
    location: 'Kayseri, Türkiye',
    image: '/images/services/solar-installation.png',
    description: 'Fabrika çatısı güneş enerjisi kurulumu'
  },
  {
    title: 'Ankara Ticaret Merkezi GES',
    location: 'Ankara, Türkiye',
    image: '/images/services/ges-hero.png',
    description: 'Ticari bina güneş enerjisi sistemi'
  }
]

export default function GESKurulumuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
        <div className="container-app py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-yellow-500/10 backdrop-blur-sm rounded-full border border-yellow-500/20">
                  <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-700 font-semibold text-sm sm:text-base">Güneş Enerjisi Uzmanı</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                  GES{' '}
                  <span className="block bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    Kurulumu
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
                  Güneş enerjisi santrallerinizi profesyonel ekibimizle hayata geçirin. 
                  <span className="text-yellow-600 font-semibold"> Temiz enerji geleceğinize yatırım yapın.</span>
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                  <Link href="/tr/fiyat-teklifi" className="flex items-center justify-center">
                    Teklif Al
                  </Link>
                </Button>
                <Button asChild className="group bg-transparent border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-300">
                  <Link href="/tr/hizmetlerimiz" className="flex items-center justify-center">
                    <ArrowRight className="mr-2 sm:mr-3 h-4 w-4 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    Hizmetlerimizi Keşfedin
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Visual - İyileştirilmiş Görsel Çerçevesi */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-yellow-200/50">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-1">
                    <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden">
                      <Image
                        src="/images/services/ges-hero.png"
                        alt="GES Kurulumu Görseli"
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-4 h-4 sm:w-6 sm:h-6 bg-orange-400 rounded-full shadow-lg animate-pulse delay-1000"></div>
                </div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-4 sm:-right-8 w-10 h-10 sm:w-16 sm:h-16 bg-yellow-300/20 rounded-full blur-xl animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-white">
        <div className="container-app">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Neden{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Revium?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              GES kurulumunda uzman ekibimiz ve kaliteli hizmet anlayışımızla fark yaratıyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
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
        <div className="container-app">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Kurulum{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Süreci
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              GES kurulumunuzu adım adım nasıl gerçekleştiriyoruz?
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
        <div className="container-app">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              GES Projenizi{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Hayata Geçirin
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              Uzman ekibimizle iletişime geçin ve danışmanlık alın. 
              GES projenizi en uygun maliyetle hayata geçirelim.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1">
                <Link href="/tr/fiyat-teklifi" className="flex items-center justify-center">
                  <span>Teklif Al</span>
                </Link>
              </Button>
              
              <Button asChild className="group relative overflow-hidden bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex-1">
                <Link href="/tr/hizmetlerimiz" className="flex items-center justify-center gap-2 sm:gap-3">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Diğer Hizmetler</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}