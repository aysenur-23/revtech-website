import { Button } from '@/components/ui/button'
import { Wrench, CheckCircle, ArrowRight, Clock, Users, Shield, Zap, Settings, Phone, Building2, Battery } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    icon: Building2,
    title: 'Endüstriyel Kapasiteli Sistem Tasarımı',
    description: 'Büyük ölçekli tesisler için özel tasarım ve planlama'
  },
  {
    icon: Battery,
    title: 'Yüksek Güçlü Batarya Sistemleri',
    description: 'Endüstriyel ihtiyaçlara uygun yüksek kapasiteli sistemler'
  },
  {
    icon: Settings,
    title: 'SCADA Sistemi Entegrasyonu',
    description: 'Uzaktan izleme ve kontrol sistemleri entegrasyonu'
  },
  {
    icon: Shield,
    title: '7/24 Teknik Destek',
    description: 'Kesintisiz teknik destek ve bakım hizmetleri'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'İhtiyaç Analizi',
    description: 'Endüstriyel tesisin enerji ihtiyaçlarının detaylı analizi'
  },
  {
    step: '02',
    title: 'Sistem Tasarımı',
    description: 'Özel endüstriyel sistem tasarımı ve mühendislik'
  },
  {
    step: '03',
    title: 'Malzeme Tedariki',
    description: 'Endüstriyel kalitede malzemelerin temin edilmesi'
  },
  {
    step: '04',
    title: 'Kurulum ve Entegrasyon',
    description: 'Profesyonel kurulum ve mevcut sistemlerle entegrasyon'
  },
  {
    step: '05',
    title: 'Test ve Devreye Alma',
    description: 'Kapsamlı testler ve güvenli devreye alma'
  },
  {
    step: '06',
    title: 'İzleme ve Bakım',
    description: 'Sürekli izleme ve periyodik bakım hizmetleri'
  }
]



export default function EndustriyelKurulumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
        <div className="container-app py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20">
                  <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2" />
                  <span className="text-blue-700 font-semibold text-sm sm:text-base">Endüstriyel Uzman</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                  Endüstriyel
                  <span className="block bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Kurulum
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed">
                  Büyük ölçekli endüstriyel tesisler için enerji depolama sistemleri kurulumu. 
                  <span className="text-blue-600 font-semibold"> Yüksek kapasiteli ve güvenilir çözümler.</span>
                </p>
              </div>
              
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
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
                <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-blue-200/50">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 p-1">
                    <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden">
                      <Image
                        src="/images/services/power-installation.png"
                        alt="Endüstriyel Kurulum Görseli"
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full shadow-lg animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-4 h-4 sm:w-6 sm:h-6 bg-emerald-400 rounded-full shadow-lg animate-pulse delay-1000"></div>
                </div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/30 to-emerald-400/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-4 sm:-right-8 w-10 h-10 sm:w-16 sm:h-16 bg-blue-300/20 rounded-full blur-xl animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Hizmet
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Özellikleri
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Endüstriyel kurulumda sunduğumuz kapsamlı hizmetler
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 hover:border-blue-200">
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
      <section id="process" className="section bg-white">
        <div className="container-app">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Kurulum
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Süreci
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Endüstriyel kurulumda izlediğimiz adım adım süreç
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
      <section id="contact" className="section bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="container-app">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Endüstriyel Projenizi{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Hayata Geçirin
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              Uzman ekibimizle iletişime geçin ve danışmanlık alın. 
              Endüstriyel enerji depolama projenizi en uygun maliyetle hayata geçirelim.
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