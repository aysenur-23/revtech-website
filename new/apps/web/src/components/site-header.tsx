'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTranslation } from '@/hooks/useTranslation'
import { MENU_SERIES } from './menu-data'
import { MegaMenu } from './mega-menu'

interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}

export function SiteHeader() {
  const { t, locale, loading } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [megaMenuType, setMegaMenuType] = useState<'products' | 'services' | 'corporate'>('products')
  const [isHovering, setIsHovering] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Pathname değiştiğinde mega menü state'lerini sıfırla
  useEffect(() => {
    setMegaMenuOpen(false)
    setIsHovering(false)
    setMobileMenuOpen(false)
  }, [pathname])

  // Scroll sırasında mega menüyü kapat
  useEffect(() => {
    const handleScroll = () => {
      if (megaMenuOpen) {
        setMegaMenuOpen(false)
        setIsHovering(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && megaMenuOpen) {
        setMegaMenuOpen(false)
        setIsHovering(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      if (megaMenuOpen && (!target || !target.closest || !target.closest('[data-mega-menu]') && !target.closest('[data-header-nav]'))) {
        setMegaMenuOpen(false)
        setIsHovering(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [megaMenuOpen])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout)
      if (leaveTimeout) clearTimeout(leaveTimeout)
    }
  }, [hoverTimeout, leaveTimeout])

  const navigation: NavigationItem[] = [
    { name: loading ? 'Ana Sayfa' : t('nav.home'), href: `/${locale}` },
    {
      name: loading ? 'Ürünlerimiz' : t('nav.products'),
      href: `/${locale}/urunlerimiz`,
      children: MENU_SERIES.map(series => ({
        name: series.title,
        href: `/${locale}${series.href}`,
        children: series.items.map(item => ({
          name: item.title,
          href: `/${locale}${item.href}`
        }))
      }))
    },
    {
      name: loading ? 'Hizmetlerimiz' : t('nav.services'),
      href: `/${locale}/hizmetlerimiz`,
      children: [
        { name: 'GES Kurulumu', href: `/${locale}/hizmetlerimiz/ges-kurulumu` },
        { name: 'Endüstriyel Kurulum', href: `/${locale}/hizmetlerimiz/endustriyel-kurulum` },
      ],
    },
    {
      name: 'Kurumsal',
      href: `/${locale}/kurumsal`,
    },
    { name: loading ? 'İletişim' : t('nav.contact'), href: `/${locale}/iletisim` },
  ]


  return (
    <>
          <header 
            className="sticky top-0 z-[99999] w-full border-b border-neutral-800 bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 relative"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
      <div className="container px-3 sm:px-4 lg:px-8 flex h-14 sm:h-16 items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Revium Logo"
            width={80}
            height={40}
            className="h-10 w-auto sm:h-12 md:h-16 sm:w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          {navigation.map((item) => (
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => {
                if (item.children) {
                  // Clear any existing timeouts
                  if (hoverTimeout) clearTimeout(hoverTimeout)
                  if (leaveTimeout) clearTimeout(leaveTimeout)
                  
                  // Set hover timeout for delayed opening
                  const timeout = setTimeout(() => {
                    setMegaMenuOpen(true)
                    setMegaMenuType(
                      item.name === (loading ? 'Ürünlerimiz' : t('nav.products')) ? 'products' : 
                      item.name === (loading ? 'Hizmetlerimiz' : t('nav.services')) ? 'services' : 
                      'corporate'
                    )
                  }, 200)
                  setHoverTimeout(timeout)
                }
              }}
              onMouseLeave={() => {
                if (item.children) {
                  // Basit kapanma - sadece hover state'i false yap
                  setIsHovering(false)
                }
              }}
            >
              <Link
                href={item.href}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                  pathname === item.href ? 'text-blue-400' : 'text-neutral-300'
                }`}
                data-header-nav
                onMouseEnter={() => {
                  if (item.children) {
                    setMegaMenuOpen(true)
                    setMegaMenuType(
                      item.name === (loading ? 'Ürünlerimiz' : t('nav.products')) ? 'products' :
                      item.name === (loading ? 'Hizmetlerimiz' : t('nav.services')) ? 'services' :
                      'corporate'
                    )
                  }
                }}
                onMouseLeave={() => {
                  if (item.children) {
                    // Basit kapanma - sadece hover state'i false yap
                    setIsHovering(false)
                  }
                }}
              >
                <span>{item.name}</span>
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>
              
              {/* Dropdown Menu */}
              {item.children && item.name !== (loading ? 'Ürünlerimiz' : t('nav.products')) && item.name !== (loading ? 'Hizmetlerimiz' : t('nav.services')) && (
                <div 
                         className={`absolute left-0 top-full border border-neutral-800 bg-neutral-900/95 backdrop-blur-md transition-all duration-200 shadow-xl w-48 ${
                    megaMenuOpen && megaMenuType === 'corporate'
                      ? 'opacity-100 visible'
                      : 'opacity-0 invisible'
                  }`}
                  style={{
                    backgroundColor: 'rgba(23, 23, 23, 0.95)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid #404040',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                  onMouseEnter={() => {
                    if (item.children) {
                      setMegaMenuOpen(true)
                      setMegaMenuType('corporate')
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.children) {
                      // Basit kapanma - sadece hover state'i false yap
                      setIsHovering(false)
                    }
                  }}
                >
                  <div className="py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-neutral-300 hover:text-blue-400 hover:bg-neutral-800/50 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button asChild className="gradient-electric hover:opacity-90 text-sm xl:text-base px-4 xl:px-6">
            <Link href={`/${locale}/fiyat-teklifi`}>
              {loading ? 'Teklif Al' : t('nav.quote')}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-blue-400 h-12 w-12 bg-white/30 hover:bg-white/40 border-2 border-white/40 hover:border-white/60 rounded-lg transition-all duration-200 shadow-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-14 sm:top-16 bg-neutral-950 p-4 sm:p-6 border-t border-neutral-800 z-[999999] max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto shadow-2xl">
          <nav className="space-y-2 sm:space-y-3">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 sm:py-4 text-base sm:text-lg font-medium text-white hover:text-blue-400 hover:bg-neutral-800 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 sm:ml-6 space-y-1 mt-2">
                    {item.children.map((child) => (
                      <div key={child.name}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm sm:text-base text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                        {child.children && (
                          <div className="ml-4 sm:ml-6 space-y-1 mt-1">
                            {child.children.map((grandChild) => (
                              <Link
                                key={grandChild.name}
                                href={grandChild.href}
                                className="block px-4 py-1 text-xs sm:text-sm text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50 rounded transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {grandChild.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 sm:pt-6 border-t border-neutral-800 mt-4 sm:mt-6">
              <Button asChild className="w-full gradient-electric text-base sm:text-lg py-3 sm:py-4">
                <Link href={`/${locale}/fiyat-teklifi`} onClick={() => setMobileMenuOpen(false)}>
                  {loading ? 'Teklif Al' : t('nav.quote')}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Mega Menu - Inside header for proper positioning */}
      {(megaMenuOpen && megaMenuType === 'products') && (
        <MegaMenu
          isOpen={megaMenuOpen && megaMenuType === 'products'}
          onClose={() => setMegaMenuOpen(false)}
          type="products"
          onHoverChange={setIsHovering}
        />
      )}
      {(megaMenuOpen && megaMenuType === 'services') && (
        <MegaMenu
          isOpen={megaMenuOpen && megaMenuType === 'services'}
          onClose={() => setMegaMenuOpen(false)}
          type="services"
          onHoverChange={setIsHovering}
        />
      )}
      
    </header>
    </>
  )
}
