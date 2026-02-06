import { ProductPage } from '@/components/templates/product-page'
import { PRODUCTS, getProductsByCategory, type Product } from '../../../../../../data/products'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/shadcn-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Battery, Zap, Shield, ArrowRight, Sun } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ui, cn } from '@/lib/ui.config'

const products = getProductsByCategory('solar')

export default function SolarPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl shadow-sm">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-normal text-slate-900 py-2">
                  <span className="block">Güneş Enerji</span>
                  <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent pb-3" style={{ lineHeight: '1.2', paddingBottom: '0.5rem' }}>
                    Sistemleri
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 leading-relaxed">
                  Güneş panelleri ile entegre çalışan sürdürülebilir enerji çözümleri. 
                  Temiz ve yenilenebilir enerji ile geleceği şekillendirin.
                </p>
              </div>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium">
                  ☀️ Sürdürülebilir
                </div>
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                  🌱 Temiz Enerji
                </div>
                <div className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-medium">
                  ⚡ Yenilenebilir
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                  <Link href="/tr/iletisim" className="flex items-center justify-center gap-3">
                    <span>Danışmanlık Talep Et</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  <Link href="/tr/urunlerimiz">
                    Tüm Ürünleri Gör
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Image Content */}
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src="/images/products/solar-panels.png"
                alt="Güneş Enerji Sistemleri"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Güneş Enerji Sistemlerinin{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Avantajları
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Güneş panelleri ile entegre çalışan sürdürülebilir enerji çözümleri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Sürdürülebilir Enerji</h3>
              <p className="text-slate-600 leading-relaxed">
                Güneş enerjisi ile temiz ve yenilenebilir enerji üretimi. Çevre dostu çözümler.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Battery className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">MPPT Teknolojisi</h3>
              <p className="text-slate-600 leading-relaxed">
                Maksimum Güç Noktası Takibi ile güneş panellerinden maksimum verim elde edin.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Uzun Ömür</h3>
              <p className="text-slate-600 leading-relaxed">
                4000+ döngü ömrü ile uzun yıllar güvenilir enerji depolama ve kullanım.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className={`grid gap-8 sm:gap-10 ${products.length === 1 ? 'justify-center lg:grid-cols-1 xl:grid-cols-1 max-w-md mx-auto' : products.length === 2 ? 'justify-center lg:grid-cols-2 xl:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-2 xl:grid-cols-3'}`}>
            {products.map((product: Product) => (
              <Link key={product.slug} href={`/tr/urunlerimiz/${product.slug}`} className="block group">
                <Card className="overflow-hidden relative h-full flex flex-col hover-lift">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={product.images[0] || '/images/products/solar-panels.png'}
                      alt={product.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-emerald-500 text-white">
                        {product.capacity_kwh} kWh
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className={cn(ui.typography.h3, "group-hover:text-emerald-600 transition-colors duration-300")}>
                      {product.name}
                    </CardTitle>
                    <CardDescription className={ui.typography.body}>
                      {product.capacity_kwh} kWh kapasite, {Array.isArray(product.output_w) ? product.output_w[0] : product.output_w}W güç çıkışı
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <Battery className="h-4 w-4 text-emerald-500" />
                        <span>{product.capacity_kwh} kWh Kapasite</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <Zap className="h-4 w-4 text-emerald-500" />
                        <span>{Array.isArray(product.output_w) ? product.output_w[0] : product.output_w}W Güç</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <Shield className="h-4 w-4 text-emerald-500" />
                        <span>{product.cycles || 'Uzun'} Ömür</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-emerald-600 mb-2">
                        Fiyat teklifi talep edin
                      </div>
                      <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
                        <span>Detayları İncele</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          ) : (
            <div className="text-center py-16">
              <div className="mx-auto mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl shadow-lg">
                  <Sun className="w-12 h-12 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Güneş Enerji Sistemleri Yakında!
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Güneş panelleri ile entegre çalışan sürdürülebilir enerji çözümlerimiz yakında sizlerle buluşacak.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Link href="/tr/urunlerimiz">
                    Tüm Ürünleri İncele
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white">
                  <Link href="/tr/fiyat-teklifi">
                    Teklif Al
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="container-app">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="h2 text-neutral-900 mb-6">
              Güneş Enerji Çözümünüzü{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Keşfedin
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12">
              Uzman ekibimizle iletişime geçin ve size en uygun güneş enerji sistemini bulalım.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 flex-1">
                <Link href="/tr/iletisim" className="flex items-center justify-center gap-3">
                  <span>Danışmanlık Talep Et</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild className="group relative overflow-hidden bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-base shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 flex-1">
                <Link href="/tr/urunlerimiz" className="flex items-center justify-center gap-3">
                  <span>Tüm Ürünleri Gör</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
