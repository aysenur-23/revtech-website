import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  title: string
  description: string
  image: string
  price: string
  features: string[]
  href: string
}

interface Benefit {
  icon: any
  title: string
  description: string
}

interface CategoryPageProps {
  title: string
  description: string
  icon: any
  products: Product[]
  benefits: Benefit[]
  applications: string[]
  ctaTitle: string
  ctaDescription: string
}

export function CategoryPage({
  title,
  description,
  icon: Icon,
  products,
  benefits,
  applications,
  ctaTitle,
  ctaDescription
}: CategoryPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="container-app">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur-lg opacity-75 animate-pulse" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-teal-500 shadow-2xl">
                  <Icon className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="h1 text-white">
                {title}
              </h1>
              
              <p className="lead text-blue-100 max-w-3xl mx-auto">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
        <div className="container-app">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="h2 text-neutral-900">
              Ürünlerimiz
            </h2>
            <p className="lead text-neutral-600">
              Farklı ihtiyaçlara yönelik {title.toLowerCase()} seçenekleri
            </p>
          </div>
          
          <div className={`grid gap-8 ${
            products.length === 3 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 lg:grid-cols-2'
          }`}>
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                colorTheme="primary"
                imagePosition="top"
                imageSrc={product.image}
                imageAlt={product.title}
                title={product.title}
                subtitle={product.description}
                alwaysVisibleContent={
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-neutral-900">Özellikler</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-neutral-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-lg font-bold text-blue-600">{product.price}</span>
                      <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{product.name}</span>
                    </div>
                  </div>
                }
                ctaLabel="Detayları Gör"
                href={product.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container-app">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="h2 text-neutral-900">
              Neden {title}?
            </h2>
            <p className="lead text-neutral-600">
              {title} çözümlerinin sunduğu avantajlar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center hover-lift">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-teal-500 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="h3 text-neutral-900 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
        <div className="container-app">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="h2 text-neutral-900">
              Kullanım Alanları
            </h2>
            <p className="lead text-neutral-600">
              {title} çözümlerinin ideal kullanım alanları
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application, index) => (
              <div key={index} className="flex items-center gap-4 p-6 card hover-lift">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="text-sm text-neutral-700 font-medium group-hover:text-neutral-900 transition-colors duration-300">
                  {application}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="container-app">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="h1 text-white">
              {ctaTitle}
            </h2>
            <p className="lead text-blue-100 max-w-3xl mx-auto">
              {ctaDescription}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button asChild className="btn btn-primary px-8 py-4 text-lg">
                <Link href="/tr/iletisim">
                  Ücretsiz Danışmanlık Talep Et
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild className="btn btn-ghost px-8 py-4 text-lg">
                <Link href="/tr/fiyat-teklifi">
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
