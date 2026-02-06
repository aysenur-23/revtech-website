'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useTranslation } from '@/hooks/useTranslation'
import { getMenuSeries } from './menu-data'
import { MegaMenu } from './mega-menu'
import { LanguageSwitcher } from '@/components/ui/language-switcher'

const languages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', nativeName: 'Türkçe' },
  { code: 'en', name: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', nativeName: 'العربية' },
]

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
  const [mobileExpandedItems, setMobileExpandedItems] = useState<Set<string>>(new Set())
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Pathname değiştiğinde mega menü state'lerini sıfırla
  useEffect(() => {
    // Pathname validation
    if (!pathname || typeof pathname !== 'string') {
      return;
    }
    
    setMegaMenuOpen(false)
    setIsHovering(false)
    setMobileMenuOpen(false)
    // Mobile expanded items'ı da temizle
    setMobileExpandedItems(new Set())
  }, [pathname])

  // Mobile menü açıkken body scroll'u engelle
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Scroll sırasında mega menüyü kapat
  useEffect(() => {
    let rafId: number | null = null
    let lastScrollY = 0
    
    const handleScroll = () => {
      // Throttle: Sadece scroll pozisyonu önemli ölçüde değiştiyse işlem yap
      const currentScrollY = window.scrollY
      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        return
      }
      lastScrollY = currentScrollY
      
      if (megaMenuOpen) {
        // requestAnimationFrame içinde state güncelle (forced reflow'u önler)
        if (rafId === null) {
          rafId = requestAnimationFrame(() => {
            setMegaMenuOpen(false)
            setIsHovering(false)
            rafId = null
          })
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false)
        }
        if (megaMenuOpen) {
          setMegaMenuOpen(false)
          setIsHovering(false)
        }
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
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [megaMenuOpen, mobileMenuOpen])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout)
      if (leaveTimeout) clearTimeout(leaveTimeout)
    }
  }, [hoverTimeout, leaveTimeout])

  const MENU_SERIES = getMenuSeries(t, locale, loading)
  
  const navigation: NavigationItem[] = [
    { name: loading ? 'Ana Sayfa' : t('nav.home'), href: `/${locale}` },
    {
      name: loading ? 'Ürünlerimiz' : t('nav.products'),
      href: `/${locale}/urunlerimiz`,
      children: MENU_SERIES.map(series => ({
        name: series.title,
        href: series.href,
        children: series.items.map(item => ({
          name: item.title,
          href: item.href
        }))
      }))
    },
    {
      name: loading ? 'Hizmetlerimiz' : t('nav.services'),
      href: `/${locale}/hizmetlerimiz`,
      children: [
        { name: loading ? 'GES Kurulumu' : t('nav.gesInstallation'), href: `/${locale}/hizmetlerimiz/ges-kurulumu` },
        { name: loading ? 'Endüstriyel Kurulum' : t('nav.industrialInstallation'), href: `/${locale}/hizmetlerimiz/endustriyel-kurulum` },
      ],
    },
    {
      name: loading ? 'Kurumsal' : t('nav.corporate'),
      href: `/${locale}/kurumsal`,
    },
    { name: loading ? 'İletişim' : t('nav.contact'), href: `/${locale}/iletisim` },
  ]


  return (
    <>
          <header 
            className="sticky top-0 z-[99999] w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 relative"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
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
            className="h-10 w-auto sm:h-12 lg:h-14 sm:w-auto brightness-0"
            style={{ filter: 'brightness(0)' }}
            loading="eager"
            fetchPriority="high"
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
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? 'text-blue-600 font-semibold' : 'text-neutral-800'
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
                         className={`absolute left-0 top-full border border-neutral-200 bg-white/95 backdrop-blur-md transition-all duration-200 shadow-xl w-48 ${
                    megaMenuOpen && megaMenuType === 'corporate'
                      ? 'opacity-100 visible'
                      : 'opacity-0 invisible'
                  }`}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid #e5e7eb',
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
                        className="block px-4 py-2 text-sm text-neutral-700 hover:text-blue-600 hover:bg-neutral-100 transition-colors"
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

        {/* CTA Button & Language Switcher */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          <LanguageSwitcher />
          <Button asChild className="gradient-electric hover:opacity-90 text-sm xl:text-base px-4 xl:px-6">
            <Link href={`/${locale}/fiyat-teklifi`}>
              {loading ? 'Teklif Al' : t('nav.quote')}
            </Link>
          </Button>
        </div>

        {/* Mobile: Language Switcher & Menu Button */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="text-neutral-900 hover:text-blue-600 h-10 w-10 sm:h-12 sm:w-12 bg-neutral-100 hover:bg-blue-50 border-2 border-neutral-200 hover:border-blue-300 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? (loading ? 'Menüyü Kapat' : t('nav.menuClose')) : (loading ? 'Menüyü Aç' : t('nav.menuOpen'))}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-14 sm:top-16 bg-white border-t border-neutral-200 z-[999999] max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto shadow-2xl">
          <div className="p-4 sm:p-6">

          <nav className="space-y-2 sm:space-y-3">
            {navigation.map((item) => {
              const isExpanded = mobileExpandedItems.has(item.name)
              const hasChildren = item.children && item.children.length > 0
              
              return (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`flex-1 block px-4 py-3.5 sm:py-4 text-base sm:text-lg font-medium text-neutral-900 hover:text-blue-600 hover:bg-neutral-100 rounded-lg transition-colors min-h-[48px] flex items-center touch-manipulation ${
                        !hasChildren ? '' : ''
                      }`}
                      onClick={(e) => {
                        if (hasChildren) {
                          e.preventDefault()
                          const newExpanded = new Set(mobileExpandedItems)
                          if (isExpanded) {
                            newExpanded.delete(item.name)
                          } else {
                            newExpanded.add(item.name)
                          }
                          setMobileExpandedItems(newExpanded)
                        } else {
                          setMobileMenuOpen(false)
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => {
                          const newExpanded = new Set(mobileExpandedItems)
                          if (isExpanded) {
                            newExpanded.delete(item.name)
                          } else {
                            newExpanded.add(item.name)
                          }
                          setMobileExpandedItems(newExpanded)
                        }}
                        className="px-3 py-3.5 sm:py-4 text-neutral-500 hover:text-blue-600 active:text-blue-700 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
                        aria-label={isExpanded ? (loading ? 'Kapat' : t('nav.collapse')) : (loading ? 'Aç' : t('nav.expand'))}
                      >
                        <ChevronDown className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {item.children && (
                    <div className={`ml-4 sm:ml-6 space-y-1 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {item.children.map((child) => {
                        const isChildExpanded = mobileExpandedItems.has(`${item.name}-${child.name}`)
                        const hasGrandChildren = child.children && child.children.length > 0
                        
                        return (
                          <div key={child.name} className="py-1">
                            <div className="flex items-center justify-between">
                              <Link
                                href={child.href}
                                className={`flex-1 block px-4 py-2.5 sm:py-3 text-sm sm:text-base text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors min-h-[44px] flex items-center touch-manipulation ${
                                  !hasGrandChildren ? '' : ''
                                }`}
                                onClick={(e) => {
                                  if (hasGrandChildren) {
                                    e.preventDefault()
                                    const newExpanded = new Set(mobileExpandedItems)
                                    const key = `${item.name}-${child.name}`
                                    if (isChildExpanded) {
                                      newExpanded.delete(key)
                                    } else {
                                      newExpanded.add(key)
                                    }
                                    setMobileExpandedItems(newExpanded)
                                  } else {
                                    setMobileMenuOpen(false)
                                  }
                                }}
                              >
                                {child.name}
                              </Link>
                              {hasGrandChildren && (
                                <button
                                  onClick={() => {
                                    const newExpanded = new Set(mobileExpandedItems)
                                    const key = `${item.name}-${child.name}`
                                    if (isChildExpanded) {
                                      newExpanded.delete(key)
                                    } else {
                                      newExpanded.add(key)
                                    }
                                    setMobileExpandedItems(newExpanded)
                                  }}
                                  className="px-3 py-2.5 sm:py-3 text-neutral-400 hover:text-blue-600 active:text-blue-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                                  aria-label={isChildExpanded ? (loading ? 'Kapat' : t('nav.collapse')) : (loading ? 'Aç' : t('nav.expand'))}
                                >
                                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ease-in-out ${isChildExpanded ? 'rotate-180' : ''}`} />
                                </button>
                              )}
                            </div>
                            {child.children && (
                              <div className={`ml-4 sm:ml-6 space-y-1 mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
                                isChildExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                              }`}>
                                {child.children.map((grandChild) => (
                                  <Link
                                    key={grandChild.name}
                                    href={grandChild.href}
                                    className="block px-4 py-2 text-xs sm:text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded transition-colors min-h-[40px] flex items-center touch-manipulation"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {grandChild.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
            <div className="pt-4 sm:pt-6 border-t border-neutral-200 mt-4 sm:mt-6">
              <Button asChild className="w-full gradient-electric text-base sm:text-lg py-3 sm:py-4">
                <Link href={`/${locale}/fiyat-teklifi`} onClick={() => setMobileMenuOpen(false)}>
                  {loading ? 'Teklif Al' : t('nav.quote')}
                </Link>
              </Button>
            </div>
          </nav>
          </div>
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
