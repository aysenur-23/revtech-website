import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Award, Target, Heart, Leaf, Lightbulb, Globe, Shield, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kurumsal | Revium',
  description: 'Revium hakkında bilgi alın. Vizyonumuz, misyonumuz ve değerlerimizi keşfedin.',
}

export default function KurumsalPage() {
  const values = [
    {
      icon: Leaf,
      title: 'Sürdürülebilirlik',
      description: 'Çevre dostu ve sürdürülebilir çözümler sunarak karbon ayak izini azaltıyoruz.'
    },
    {
      icon: Lightbulb,
      title: 'İnovasyon',
      description: 'Yenilikçi batarya depolama teknolojileri ve modüler tasarımlarla öncü çözümler geliştiriyoruz.'
    },
    {
      icon: Users,
      title: 'Müşteri Odaklılık',
      description: 'Müşterilerimizin ihtiyaçlarına özel çözümler sunarak memnuniyeti ön planda tutuyoruz.'
    },
    {
      icon: Globe,
      title: 'Küresel Erişim',
      description: 'Dünya çapında güvenilir enerji çözümleri sunuyoruz.'
    },
    {
      icon: Shield,
      title: 'Güvenilirlik',
      description: 'Her koşulda güvenilirlik sağlayan sistemler geliştiriyoruz.'
    },
    {
      icon: Star,
      title: 'Mükemmeliyet',
      description: 'Modüler ve ölçeklenebilir tasarım ile en yüksek kalitede hizmet ve ürünler sunuyoruz.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
              <span className="block">Kurumsal</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ textDecorationSkipInk: 'none' }}>
                Kimliğimiz
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed px-4">
              Revium olarak enerji depolama alanında öncü çözümler sunuyor, 
              sürdürülebilir gelecek için çalışıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                Hakkımızda
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6">
                Revium, sürdürülebilir bir geleceği şekillendirmek amacıyla yenilenebilir enerji depolama çözümleri sunmaktadır. 
                Gelişmiş depolama teknolojilerimiz, modern mühendislik yaklaşımımız ve deneyimli ekibimiz ile hem işletmelerin 
                hem de bireylerin sürdürülebilir enerjiye kolayca erişimini sağlamaktayız.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                Yenilenebilir enerji kaynaklarını modern depolama sistemleriyle entegre eden Revium, karbon ayak izinin azaltılması 
                ve daha yaşanabilir bir dünya oluşturulması için çalışmalarını sürdürmektedir. Amacımız; bugünün ve yarının enerji 
                ihtiyaçlarını karşılayacak, sürdürülebilir bir ekosistemin oluşumuna katkı sağlamaktır.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Link href="/tr/urunlerimiz" className="flex items-center justify-center gap-2">
                    Ürünlerimizi İncele
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300">
                  <Link href="/tr/iletisim" className="flex items-center justify-center gap-2">
                    İletişime Geç
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                    <Image
                      src="/images/features/sustainable.jpg"
                      alt="Revium Sürdürülebilir Enerji Çözümleri"
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto rounded-lg sm:rounded-xl"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg sm:rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Misyonumuz & Vizyonumuz
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Enerji depolama alanında öncü olmak ve sürdürülebilir gelecek için çalışıyoruz
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg flex-shrink-0">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Misyonumuz</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Toplulukları ve endüstrileri temiz, verimli ve uygun maliyetli enerji çözümleriyle güçlendirmek. 
                Yenilenebilir enerji kaynaklarının etkin kullanımını sağlayarak, çevresel sürdürülebilirliğe 
                katkıda bulunmak ve müşterilerimize güvenilir enerji depolama çözümleri sunmaktır.
              </p>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg flex-shrink-0">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Vizyonumuz</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Enerji depolama teknolojilerinde dünya çapında tanınan, inovatif çözümleri ile sürdürülebilir 
                enerji geleceğinin öncü şirketi olmak. Yenilikçi batarya depolama ve yenilenebilir enerji 
                çözümleriyle sürdürülebilir enerjiye geçişi hızlandırmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Değerlerimiz
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Çalışma prensiplerimizi ve değerlerimizi oluşturan temel unsurlar
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-slate-600 shadow-lg mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Teknoloji & İnovasyon
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              Enerji depolama teknolojilerinde öncü çözümlerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-sm group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6">
                  <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">LiFePO₄ Teknolojisi</h3>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  Güvenli, uzun ömürlü ve çevre dostu lityum demir fosfat batarya teknolojisi
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-sm group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Akıllı BMS</h3>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  Gelişmiş batarya yönetim sistemi ile optimal performans ve güvenlik
                </p>
              </div>
            </div>
            
            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-sm group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Modüler Tasarım</h3>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  Ölçeklenebilir ve esnek sistem mimarisi ile her ihtiyaca uygun çözümler
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Bizimle{' '}
              <span className="bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                Çalışın
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8 sm:mb-12 px-4">
              Sürdürülebilir enerji çözümleri için uzman ekibimizle iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/tr/iletisim" className="flex items-center justify-center gap-2">
                  İletişime Geç
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300">
                <Link href="/tr/fiyat-teklifi" className="flex items-center justify-center gap-2">
                  Fiyat Teklifi Al
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}