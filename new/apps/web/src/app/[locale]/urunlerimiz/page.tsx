import { PRODUCTS, getProductsByCategory, type Product } from '../../../../data/products'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/shadcn-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Battery, Zap, Shield, Leaf, ArrowRight, CheckCircle, Package, Truck, Home, Sun, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ui, cn } from '@/lib/ui.config'

// Tüm ürünleri tek listede topla
const allProducts = [
  ...getProductsByCategory('portable').map((product: Product) => ({
    ...product,
    category: 'Taşınabilir Güç Paketleri',
    categoryIcon: Package,
    categoryColor: 'from-emerald-500 to-emerald-600',
    categoryHref: '/tr/urunlerimiz/kategori/portable'
  })),
  ...getProductsByCategory('cabin').map((product: Product) => ({
    ...product,
    category: 'Kabin Tipi Güç Paketleri',
    categoryIcon: Home,
    categoryColor: 'from-slate-500 to-slate-600',
    categoryHref: '/tr/urunlerimiz/kategori/cabin'
  })),
  ...getProductsByCategory('vehicle').map((product: Product) => ({
    ...product,
    category: 'Araç Tipi Güç Paketleri',
    categoryIcon: Truck,
    categoryColor: 'from-blue-500 to-blue-600',
    categoryHref: '/tr/urunlerimiz/kategori/vehicle'
  })),
]

const benefits = [
  {
    icon: Battery,
    title: 'Yüksek Kapasite',
    description: 'Uzun süreli enerji depolama için optimize edilmiş batarya sistemleri'
  },
  {
    icon: Shield,
    title: 'Güvenli Kullanım',
    description: 'Uluslararası standartlarda güvenlik sertifikaları ile korumalı'
  },
  {
    icon: Leaf,
    title: 'Çevre Dostu',
    description: 'Sürdürülebilir enerji çözümleri ile doğaya saygılı teknoloji'
  }
]

export default function UrunlerimizPage() {
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
              <span className="block">Enerji</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ürünlerimiz
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed px-4">
              Revium'in sunduğu tüm enerji depolama çözümlerini keşfedin. 
              Her ihtiyaca uygun, yüksek kaliteli ve güvenilir ürünler.
            </p>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Enerji Depolama Çözümlerimiz
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Farklı kategorilerdeki tüm ürünlerimizi inceleyin ve ihtiyacınıza uygun olanı seçin
            </p>
          </div>

          {/* Products Grid - Responsive düzen */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allProducts.map((product: any, index: number) => {
              const CategoryIcon = product.categoryIcon
              return (
                <Card key={index} className="group overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 bg-white border border-slate-200 shadow-sm flex flex-col h-auto sm:h-[500px]">
                  {/* Product Image */}
                  <div className={`relative h-48 sm:h-64 overflow-hidden flex items-center justify-center ${
                    product.slug === 'r-u200000' ? 'bg-transparent' : 'bg-slate-100'
                  }`}>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className={`object-contain group-hover:scale-105 transition-transform duration-300 ${
                        product.slug === 'r-u200000' ? 'p-0' : 'p-3 sm:p-4'
                      }`}
                    />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                      <Badge variant="secondary" className="bg-white/90 text-slate-700 text-xs px-2 py-1">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Product Content - Responsive */}
                  <CardContent className="p-3 sm:p-4 flex-1 flex flex-col justify-center">
                    {/* Product Title */}
                    <div className="text-center mb-3 sm:mb-4">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                        {product.name}
                      </h3>
                    </div>
                    
                    {/* Product Specs - Responsive */}
                    <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-slate-600">Kapasite:</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900">{product.capacity_kwh} kWh</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-slate-600">Güç:</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900">
                          {Array.isArray(product.output_w) ? product.output_w[0] : product.output_w}W
                        </span>
                      </div>
                      {product.mppt_w ? (
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-slate-600">MPPT:</span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-900">{product.mppt_w}W</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-slate-600">MPPT:</span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-900">-</span>
                        </div>
                      )}
                      {product.cycles ? (
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-slate-600">Döngü:</span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-900">{product.cycles}</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-slate-600">Döngü:</span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-900">-</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Separator Line */}
                    <div className="border-t border-slate-200 mb-2 sm:mb-3"></div>
                    
                    {/* Action Button */}
                    <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200 rounded-lg py-2 sm:py-3">
                      <Link href={`/tr/urunlerimiz/${product.slug}`} className="flex items-center justify-center gap-2 text-sm sm:text-base">
                        Detayları İncele
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Neden Revium?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              Enerji depolama çözümlerimizde sunduğumuz avantajlar
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group-hover:shadow-md">
                  <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 shadow-sm group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6">
                    <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Size Uygun Çözümü{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Bulalım
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8 sm:mb-12 px-4">
              Enerji ihtiyaçlarınıza uygun ürünü belirlemek için uzman ekibimizle iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <Link href="/tr/iletisim" className="flex items-center justify-center gap-2">
                  Danışmanlık Talep Et
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-md transition-all duration-300">
                <Link href="/tr/fiyat-teklifi" className="flex items-center justify-center gap-2">
                  Teklif Talep Et
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}