'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { PRODUCTS, Product } from '../../data/products'
import { useTranslation } from '@/hooks/useTranslation'

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  type: 'products' | 'services'
  onHoverChange: (isHovering: boolean) => void
}

const getProductCategories = (t: any, locale: string, loading: boolean) => [
  {
    id: 'tasinabilir',
    name: t('megaMenu.portablePowerPacks'),
    href: `/${locale}/urunlerimiz/kategori/portable`,
    description: t('megaMenu.portablePowerPacksDesc'),
    products: [
      { slug: 'r-p2700', name: loading ? '2.7 kWh Model A' : t('productDetails.rP2700.title'), images: ['/images/products/2-7kwh-a-1.png'] } as Product,
      { slug: 'r-sb2700b', name: loading ? '2.7 kWh Model B' : t('productDetails.rSb2700b.title'), images: ['/images/products/2-7kwh-b-1.png'] } as Product,
      { slug: 'r-sb5400b', name: loading ? '5.4 kWh 2000W' : t('productDetails.rSb5400b.title'), images: ['/images/products/5-4kwh-2000w-1.png'] } as Product,
    ]
  },
  {
    id: 'kabin',
    name: t('megaMenu.cabinPowerPacks'),
    href: `/${locale}/urunlerimiz/kategori/cabin`,
    description: t('megaMenu.cabinPowerPacksDesc'),
    products: [
      { slug: 'r-m21600', name: loading ? 'Güç Katmanı' : t('productDetails.rM21600.title'), images: ['/images/products/stack-21-6kwh-1.png'] } as Product,
      { slug: 'r-cabinet-21600', name: loading ? 'Güç Kabini' : t('productDetails.rCabinet21600.title'), images: ['/images/products/cabin-power.png'] } as Product,
      { slug: 'gridpack-100', name: loading ? 'GridPack 100' : t('productDetails.gridpack100.title'), images: ['/images/products/gridpack-100.png'] } as Product,
    ]
  },
  {
    id: 'arac',
    name: t('megaMenu.vehiclePowerPacks'),
    href: `/${locale}/urunlerimiz/kategori/vehicle`,
    description: t('megaMenu.vehiclePowerPacksDesc'),
    products: [
      { slug: 'r-h21600', name: loading ? 'Hilux Güç Paketi' : t('productDetails.rH21600.title'), images: ['/images/products/hilux-21-6kwh-1.png'] } as Product,
      { slug: 'r-u200000', name: loading ? 'Savunma Sanayi UNIMOG Güç Paketi' : t('productDetails.rU200000.title'), images: ['/images/products/unimog-200kwh-1.jpg'] } as Product,
    ]
  },
  {
    id: 'ges',
    name: loading ? 'GES Ürünler' : t('products.gesProducts.title'),
    href: `/${locale}/urunlerimiz/kategori/ges`,
    description: loading ? 'Güneş enerjisi sistemleri ve entegrasyon çözümleri' : t('products.gesProducts.subtitle'),
    products: [
      { slug: 'ges-power-station', name: loading ? 'GES & Güç İstasyonu' : t('productDetails.gesPowerStation.title'), images: ['/images/products/ges-power-station.png'] } as Product,
      { slug: 'solarport-duo', name: loading ? 'Solarport DUO' : t('productDetails.solarportDuo.title'), images: ['/images/products/solarport-duo.png'] } as Product,
      { slug: 'solar-voltwagon', name: loading ? 'Solar VOLTWAGON' : t('productDetails.solarVoltwagon.title'), images: ['/images/products/solar-voltwagon.png'] } as Product,
      { slug: 'ges-street-lighting', name: loading ? 'GES Sokak Aydınlatma Sistemi' : t('productDetails.gesStreetLighting.title'), images: ['/images/products/ges-street-lighting.png'] } as Product,
    ]
  }
]

const getServiceCategories = (t: any, locale: string, loading: boolean) => [
  {
    id: 'ges-kurulumu',
    name: t('megaMenu.gesInstallation'),
    href: `/${locale}/hizmetlerimiz/ges-kurulumu`,
    description: t('megaMenu.gesInstallationDesc'),
    products: [
      { slug: 'ges-kurulumu', name: loading ? 'GES Kurulumu' : t('products.solarInstallation.title'), images: ['/images/products/solar-panels.png'] } as Product,
    ]
  },
  {
    id: 'endustriyel-kurulum',
    name: t('megaMenu.industrialInstallation'),
    href: `/${locale}/hizmetlerimiz/endustriyel-kurulum`,
    description: t('megaMenu.industrialInstallationDesc'),
    products: [
      { slug: 'endustriyel-kurulum', name: loading ? 'Endüstriyel Kurulum' : t('products.industrialInstallation.title'), images: ['/images/services/power-installation.png'] } as Product,
    ]
  }
]

export function MegaMenu({ isOpen, onClose, type, onHoverChange }: MegaMenuProps) {
  const { t, locale, loading } = useTranslation()
  const [activeCategory, setActiveCategory] = useState(0)
  const [isMenuHovered, setIsMenuHovered] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const categories = type === 'products' ? getProductCategories(t, locale, loading) : getServiceCategories(t, locale, loading)
  const currentProducts = categories[activeCategory]?.products || []

  useEffect(() => {
    onHoverChange(isMenuHovered)
  }, [isMenuHovered, onHoverChange])

  // Mega menü açıkken hover state'ini takip et
  useEffect(() => {
    if (isOpen) {
      onHoverChange(isMenuHovered)
    }
  }, [isOpen, isMenuHovered, onHoverChange])

  // Mega menü kapanma mantığı
  useEffect(() => {
    if (!isMenuHovered && !isOpen) {
      onClose()
    }
  }, [isMenuHovered, isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50 hidden lg:block"
      data-mega-menu
      onMouseEnter={() => {
        setIsMenuHovered(true)
        onHoverChange(true)
      }}
      onMouseLeave={() => {
        setIsMenuHovered(false)
        onHoverChange(false)
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Sol taraf - Kategoriler */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-bold text-gray-800 mb-4 sm:mb-6 uppercase tracking-wider text-blue-600">
              {t('megaMenu.categories')}
            </h3>
            <nav className="space-y-1 sm:space-y-2">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className="group"
                  onMouseEnter={() => setActiveCategory(index)}
                >
                  <Link
                    href={category.href}
                    className={`flex items-center justify-between w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                      activeCategory === index 
                        ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-900 font-semibold shadow-sm border border-blue-200' 
                        : 'text-black hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 hover:shadow-sm'
                    }`}
                    onClick={() => onClose()}
                  >
                    <span className={activeCategory === index ? 'font-semibold' : 'font-medium'}>
                      {category.name}
                    </span>
                    <ChevronRight className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ${
                      activeCategory === index 
                        ? 'text-blue-600 transform translate-x-1' 
                        : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1'
                    }`} />
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Sağ taraf - Ürünler */}
          <div className="lg:col-span-3">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-black mb-2">
                {categories[activeCategory]?.name}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              {currentProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/${locale}/${type === 'products' ? 'urunlerimiz' : 'hizmetlerimiz'}/${product.slug}`}
                  className="group block bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:scale-105"
                  onClick={() => onClose()}
                >
                  <div className={`aspect-square rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-3 shadow-sm flex items-center justify-center ${
                    product.slug === 'r-u200000' ? 'bg-transparent' : 'bg-gradient-to-br from-gray-50 to-gray-100'
                  }`}>
                    {product.images?.[0] && (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={60}
                        height={60}
                        className="w-3/4 h-3/4 sm:w-4/5 sm:h-4/5 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-black text-center group-hover:text-blue-600 leading-normal transition-colors duration-300">
                    {product.name}
                  </h4>
                </Link>
              ))}
              
              {/* TÜM ÜRÜNLER kartı - grid içinde */}
              <Link
              href={`/${locale}/${type === 'products' ? 'urunlerimiz' : 'hizmetlerimiz'}`}
              className="group block bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:scale-105"
              onClick={() => onClose()}
            >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-3 shadow-sm flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-black text-center group-hover:text-blue-600 leading-tight transition-colors duration-300">
                  {type === 'products' ? t('megaMenu.allProducts') : t('megaMenu.allServices')}
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}