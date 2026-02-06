import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { IconWrapper } from '@/components/ui/icon-wrapper'
import { Sun, Wrench, Target, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: Sun,
    title: 'GES Kurulumu',
    description: 'Güneş enerjisi santralleri kurulumu ve entegrasyonu',
    image: '/images/services/solar-installation.png',
    features: [
      'Proje tasarımı ve planlama',
      'Malzeme tedariki',
      'Profesyonel kurulum',
      'Sistem entegrasyonu',
      'Test ve devreye alma',
      'Bakım ve onarım'
    ],
    href: '/tr/hizmetlerimiz/ges-kurulumu'
  },
  {
    icon: Wrench,
    title: 'Endüstriyel Sistem Kurulumu',
    description: 'Büyük ölçekli endüstriyel tesisler için enerji depolama sistemleri kurulumu',
    image: '/images/services/power-installation.png',
    features: [
      'Endüstriyel kapasiteli sistem tasarımı',
      'Yüksek güçlü batarya sistemleri',
      'Orta gerilim bağlantıları',
      'SCADA sistemi entegrasyonu',
      'Uzaktan izleme ve kontrol',
      '7/24 teknik destek'
    ],
    href: '/tr/hizmetlerimiz/endustriyel-kurulum'
  }
]

export default function HizmetlerimizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-teal-900/20" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
              <span className="block">Enerji</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Hizmetlerimiz
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed px-4">
              Revium, enerji depolama sistemlerinizin kurulumundan 
              bakımına kadar tüm süreçlerde profesyonel hizmet sunar.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="group">
                <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                  {/* Service Icon */}
                  <div className="mb-4 sm:mb-6">
                    <IconWrapper size="lg" variant="primary">
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </IconWrapper>
                  </div>
                  
                  {/* Service Image */}
                  <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Service Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-slate-700">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <Link href={service.href}>
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 py-2 sm:py-3 text-sm sm:text-base">
                        Detayları Gör
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Projenizi Hayata Geçirelim
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              Enerji ihtiyaçlarınıza uygun çözümü belirlemek için uzman ekibimizle iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <Button asChild className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/tr/iletisim">
                  Ücretsiz Danışmanlık Talep Et
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/10 transition-all duration-300">
                <Link href="/tr/urunlerimiz">
                  Ürünlerimizi İncele
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}