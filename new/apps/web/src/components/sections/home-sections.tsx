import { Hero } from './hero'
import { MissionStatement } from './mission-statement'
import { ProductCards } from './product-cards'
import { PortablePower } from './portable-power'
import { FeaturedProject } from './featured-project'
import { Features } from './features'
import { References } from './references'
import { CustomSolutions } from './custom-solutions'
import { Services } from './services'

interface HomeSectionsProps {
  locale?: string
}

export function HomeSections({ locale = 'tr' }: HomeSectionsProps) {
  return (
    <div className="relative overflow-x-hidden">
      {/* 1. Hero - Ana mesaj + CTA */}
      <section className="relative overflow-hidden">
        <Hero />
      </section>
      
      {/* 2. Mission Statement - Performans, dayanıklılık ve özgürlük */}
      <section className="relative z-10 -mt-8 sm:-mt-12 overflow-hidden">
        <MissionStatement />
      </section>
      
      {/* 3. Sosyal Kanıt - References */}
      <section className="relative z-20 -mt-4 sm:-mt-6 overflow-hidden">
        <References />
      </section>
      
      {/* 4. Hızlı Değer Önermeleri - Features (Neden Revium) */}
      <section className="relative z-30 -mt-4 sm:-mt-6 overflow-hidden">
        <Features />
      </section>
      
      {/* 5. Öne Çıkan Ürün/Hizmet - ProductCards */}
      <section className="relative z-40 -mt-4 sm:-mt-6 overflow-hidden">
        <ProductCards />
      </section>

      {/* 6. Taşınabilir Güç Çözümleri - PortablePower */}
      <section className="relative z-50 -mt-4 sm:-mt-6 overflow-hidden">
        <PortablePower />
      </section>
      
      {/* 7. Hizmetlerimiz */}
      <section className="relative z-60 -mt-4 sm:-mt-6 overflow-hidden">
        <Services />
      </section>
      
      {/* 8. Size Özel Çözümler */}
      <section className="relative z-70 -mt-4 sm:-mt-6 overflow-hidden">
        <CustomSolutions />
      </section>
      
      {/* 9. Öne Çıkan Proje - FeaturedProject */}
      <section className="relative z-80 -mt-4 sm:-mt-6 overflow-hidden">
        <FeaturedProject />
      </section>
    </div>
  )
}
