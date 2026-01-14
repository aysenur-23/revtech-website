'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X, ChevronDown, ChevronRight, Globe, ArrowRight, Battery, Zap, Truck, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

// Product data for mega menu - synced with categoryData from projecttest.com.tr
const productCategories = [
    {
        id: 'portable',
        name: { tr: 'TAŞINABİLİR GÜÇ PAKETLERİ', en: 'PORTABLE POWER PACKS', ar: 'حزم الطاقة المحmولة' },
        icon: Battery,
        products: [
            { slug: 'revium-2-7-kwh', name: { tr: '2.7 kWh Güç Paketi', en: '2.7 kWh Power Pack', ar: '2.7 كيلو واط ساعة حزمة الطاقة' }, image: '/images/products/2-7kwh-a-1.png' },
            { slug: 'revium-2-7-kwh-bag', name: { tr: '2.7 kWh Çanta Tip', en: '2.7 kWh Case Type', ar: '2.7 كيلو واط ساعة نوع الحقيبة' }, image: '/images/products/2-7kwh-b-1.png' },
            { slug: 'revium-5-4-kwh', name: { tr: '5.4 kWh Güç Paketi', en: '5.4 kWh Power Pack', ar: '5.4 كيلو واط ساعة حزمة الطاقة' }, image: '/images/products/5-4kwh-h-1.png' },
        ]
    },
    {
        id: 'vehicle',
        name: { tr: 'ARAÇ TİPİ GÜÇ PAKETLERİ', en: 'VEHICLE POWER PACKS', ar: 'حزم طاقة المركبات' },
        icon: Truck,
        products: [
            { slug: 'revium-hilux-power-pack', name: { tr: 'Hilux Güç Paketi', en: 'Hilux Power Pack', ar: 'حزمة طاقة هايلكس' }, image: '/images/products/hilux-21-6kwh-1.png' },
            { slug: 'revium-voltwagon', name: { tr: 'VoltWagon', en: 'VoltWagon', ar: 'VoltWagon' }, image: '/images/products/solar-voltwagon.png' },
            { slug: 'revium-unimog', name: { tr: 'Unimog Güç Paketi', en: 'Unimog Power Pack', ar: 'Unimog Power Pack' }, image: '/images/products/unimog-200kwh-1.jpg' },
        ]
    },
    {
        id: 'cabin',
        name: { tr: 'KABİN TİPİ GÜÇ PAKETLERİ', en: 'CABINET POWER PACKS', ar: 'حزم طاقة الخزانة' },
        icon: Zap,
        products: [
            { slug: 'revium-power-cabinet', name: { tr: 'Güç Kabini', en: 'Power Cabinet', ar: 'خزانة الطاقة' }, image: '/images/products/cabin-power.png' },
            { slug: 'revium-power-layer', name: { tr: 'Güç Katmanı', en: 'Power Layer', ar: 'طبقة الطاقة' }, image: '/images/products/stack-21-6kwh-1.png' },
            { slug: 'revium-gridpack', name: { tr: 'Gridpack', en: 'Gridpack', ar: 'Gridpack' }, image: '/images/products/gridpack-100.png' },
        ]
    },
    {
        id: 'ges',
        name: { tr: 'GES ÜRÜNLER', en: 'SOLAR PRODUCTS', ar: 'المنتجات الشمسية' },
        icon: Sun,
        products: [
            { slug: 'revium-powerstation-series', name: { tr: 'Powerstation Serisi', en: 'Powerstation Series', ar: 'سلسلة محطة الطاقة' }, image: '/images/products/ges-power-station.png' },
            { slug: 'revium-solarport', name: { tr: 'Solarport', en: 'Solarport', ar: 'Solarport' }, image: '/images/products/solarport-duo.png' },
        ]
    },
];

const serviceCategories = [
    {
        id: 'ges-kurulum',
        name: { tr: 'GES Kurulumu', en: 'Solar Plant Installation', ar: 'تركيب محطة الطاقة الشمسية' },
        services: [
            { slug: 'ges-kurulumu', name: { tr: 'Güneş Paneli Kurulumu', en: 'Solar Panel Installation', ar: 'تركيب الألواح الشمسية' }, image: '/images/services/ges-service-new.png' },
        ]
    },
    {
        id: 'endustriyel',
        name: { tr: 'Endüstriyel Kurulum', en: 'Industrial Installation', ar: 'التركيب الصناعي' },
        services: [
            { slug: 'endustriyel-kurulum', name: { tr: 'Endüstriyel Enerji Çözümleri', en: 'Industrial Energy Solutions', ar: 'حلول الطاقة الصناعية' }, image: '/images/services/industrial-service-new.png' },
        ]
    },
];

export default function SiteHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [activeProductCategory, setActiveProductCategory] = useState(0);
    const [activeServiceCategory, setActiveServiceCategory] = useState(0);

    // Unified state for mega menu
    const [activeMegaMenu, setActiveMegaMenu] = useState<null | 'products' | 'services'>(null);

    const locale = useLocale() as 'tr' | 'en' | 'ar';
    const t = useTranslations('header');

    const navigation = [
        { name: t('home'), href: `/${locale}/` },
        { name: t('products'), href: `/${locale}/urunlerimiz/`, hasMegaMenu: 'products' },
        { name: t('services'), href: `/${locale}/hizmetlerimiz/`, hasMegaMenu: 'services' },
        { name: t('corporate'), href: `/${locale}/kurumsal/` },
        { name: t('contact'), href: `/${locale}/iletisim/` },
    ];

    const languages = [
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    ];

    const currentLang = languages.find(l => l.code === locale) || languages[0];

    // Helper functions for menu interaction
    const handleMouseEnter = (menu: 'products' | 'services') => {
        if ((window as any).megaMenuTimer) clearTimeout((window as any).megaMenuTimer);
        setActiveMegaMenu(menu);
    };

    const handleMouseLeave = () => {
        const timer = setTimeout(() => {
            setActiveMegaMenu(null);
        }, 150);
        (window as any).megaMenuTimer = timer;
    };

    const handleMenuContentEnter = () => {
        if ((window as any).megaMenuTimer) clearTimeout((window as any).megaMenuTimer);
    };

    const handleLinkClick = () => {
        setActiveMegaMenu(null);
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className="sticky top-0 z-[99999] w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 relative"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
        >
            <div className="container px-3 sm:px-4 lg:px-8 flex h-14 sm:h-16 items-center justify-between">
                {/* Logo */}
                <Link href={`/${locale}/`} className="flex items-center" onClick={handleLinkClick}>
                    <Image
                        src="/images/logo.png"
                        alt="Revium Logo"
                        width={80}
                        height={40}
                        className="h-10 w-auto sm:h-12 lg:h-14 sm:w-auto brightness-0"
                        style={{ filter: 'brightness(0)' }}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 h-full">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="group h-full flex items-center"
                            onMouseEnter={() => {
                                if (item.hasMegaMenu) {
                                    handleMouseEnter(item.hasMegaMenu as 'products' | 'services');
                                } else {
                                    handleMouseLeave(); // Close if hovering a non-mega item
                                }
                            }}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    "flex items-center space-x-1 px-3 py-2 text-sm font-medium tracking-tight transition-colors hover:text-blue-600 text-neutral-800",
                                    activeMegaMenu === item.hasMegaMenu && "text-blue-600"
                                )}
                                data-header-nav="true"
                                onClick={handleLinkClick}
                            >
                                <span>{item.name}</span>
                                {item.hasMegaMenu && <ChevronDown className={cn(
                                    "h-3.5 w-3.5 ml-1 text-neutral-400 group-hover:text-blue-600 transition-colors",
                                    activeMegaMenu === item.hasMegaMenu && "rotate-180 text-blue-600"
                                )} />}
                            </Link>

                            {/* Mega Menu Overlay - Products */}
                            {item.hasMegaMenu === 'products' && activeMegaMenu === 'products' && (
                                <div
                                    className="absolute top-full left-0 w-full bg-white border-t border-neutral-100 shadow-xl border-b z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                                    onMouseEnter={handleMenuContentEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="max-w-5xl mx-auto px-6 py-5">
                                        <div className="flex gap-6">
                                            {/* Categories Sidebar */}
                                            <div className="w-[200px] shrink-0">
                                                <h3 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                                                    {t('categories')}
                                                </h3>
                                                <div className="space-y-0.5">
                                                    {productCategories.map((cat, index) => {
                                                        const isActive = activeProductCategory === index;
                                                        return (
                                                            <button
                                                                key={cat.id}
                                                                onMouseEnter={() => setActiveProductCategory(index)}
                                                                className={cn(
                                                                    "w-full px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all flex items-center justify-start gap-3",
                                                                    isActive
                                                                        ? "bg-blue-50 text-blue-600"
                                                                        : "text-neutral-700 hover:bg-neutral-50"
                                                                )}
                                                            >
                                                                <span className="text-left">{cat.name[locale]}</span>
                                                                <ChevronRight className={cn(
                                                                    "h-4 w-4 shrink-0 ml-2",
                                                                    isActive ? "text-blue-500" : "text-neutral-300"
                                                                )} />
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Products Grid */}
                                            <div className="flex-1">
                                                <h3 className="text-[13px] font-bold text-neutral-800 uppercase tracking-wide mb-4">
                                                    {productCategories[activeProductCategory].name[locale]}
                                                </h3>
                                                <div className={cn(
                                                    "grid gap-3",
                                                    activeProductCategory === 2 ? "grid-cols-5" : "grid-cols-4"
                                                )}>
                                                    {productCategories[activeProductCategory].products.map((product) => (
                                                        <Link
                                                            key={product.slug}
                                                            href={`/${locale}/urunlerimiz/${product.slug}/`}
                                                            className="group/card bg-white hover:shadow-lg rounded-xl p-3 transition-all duration-300 ease-out border border-gray-100 hover:border-blue-300 flex flex-col items-center text-center hover:scale-105"
                                                            onClick={handleLinkClick}
                                                        >
                                                            <div className="aspect-square relative w-full rounded-lg overflow-hidden mb-2 bg-gray-50/50">
                                                                <Image
                                                                    src={product.image}
                                                                    alt={typeof product.name === 'string' ? product.name : product.name[locale]}
                                                                    fill
                                                                    className="object-contain p-2"
                                                                />
                                                            </div>
                                                            <p className="text-[11px] font-semibold text-gray-800 group-hover/card:text-blue-600 line-clamp-2 leading-snug transition-colors">
                                                                {typeof product.name === 'string' ? product.name : product.name[locale]}
                                                            </p>
                                                        </Link>
                                                    ))}
                                                    {/* View All Card */}
                                                    <Link
                                                        href={`/${locale}/urunlerimiz/kategori/${productCategories[activeProductCategory].id}/`}
                                                        className="group/card bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 rounded-xl p-3 transition-all duration-300 ease-out border border-blue-200 hover:border-blue-300 flex flex-col items-center justify-center text-center hover:scale-105 hover:shadow-lg"
                                                        onClick={handleLinkClick}
                                                    >
                                                        <div className="aspect-square w-full flex items-center justify-center">
                                                            <ArrowRight className="h-7 w-7 text-blue-500 group-hover/card:text-blue-600 transition-all group-hover/card:translate-x-1" />
                                                        </div>
                                                        <p className="text-[11px] font-semibold text-blue-600 group-hover/card:text-blue-700 transition-colors">
                                                            {locale === 'tr' ? 'Tüm Ürünler' : locale === 'en' ? 'All Products' : 'جميع المنتجات'}
                                                        </p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Services Mega Menu */}
                            {item.hasMegaMenu === 'services' && activeMegaMenu === 'services' && (
                                <div
                                    className="absolute left-0 top-full w-full border-t border-neutral-100 bg-white shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                                    onMouseEnter={handleMenuContentEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="max-w-5xl mx-auto px-6 py-5">
                                        <div className="flex gap-6">
                                            {/* Categories Sidebar */}
                                            <div className="w-[200px] shrink-0">
                                                <h3 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                                                    {t('categories')}
                                                </h3>
                                                <div className="space-y-0.5">
                                                    {serviceCategories.map((cat, index) => {
                                                        const isActive = activeServiceCategory === index;
                                                        return (
                                                            <button
                                                                key={cat.id}
                                                                onMouseEnter={() => setActiveServiceCategory(index)}
                                                                className={cn(
                                                                    "w-full px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all flex items-center justify-start gap-3",
                                                                    isActive
                                                                        ? "bg-blue-50 text-blue-600"
                                                                        : "text-neutral-700 hover:bg-neutral-50"
                                                                )}
                                                            >
                                                                <span className="text-left">{cat.name[locale]}</span>
                                                                <ChevronRight className={cn(
                                                                    "h-4 w-4 shrink-0 ml-2",
                                                                    isActive ? "text-blue-500" : "text-neutral-300"
                                                                )} />
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Services Grid */}
                                            <div className="flex-1">
                                                <h3 className="text-[13px] font-bold text-neutral-800 uppercase tracking-wide mb-4">
                                                    {serviceCategories[activeServiceCategory].name[locale]}
                                                </h3>
                                                <div className="grid grid-cols-4 gap-3">
                                                    {serviceCategories[activeServiceCategory].services.map((service) => (
                                                        <Link
                                                            key={service.slug}
                                                            href={`/${locale}/hizmetlerimiz/${service.slug}/`}
                                                            className="group/card bg-white hover:shadow-lg rounded-xl p-3 transition-all duration-300 ease-out border border-gray-100 hover:border-blue-300 flex flex-col items-center text-center hover:scale-105"
                                                            onClick={handleLinkClick}
                                                        >
                                                            <div className="aspect-square relative w-full rounded-lg overflow-hidden mb-2 bg-gray-50/50">
                                                                <Image
                                                                    src={service.image}
                                                                    alt={service.name[locale]}
                                                                    fill
                                                                    className="object-contain p-2"
                                                                />
                                                            </div>
                                                            <p className="text-[11px] font-semibold text-gray-800 group-hover/card:text-blue-600 line-clamp-2 leading-snug transition-colors">
                                                                {service.name[locale]}
                                                            </p>
                                                        </Link>
                                                    ))}
                                                    {/* View All Card */}
                                                    <Link
                                                        href={`/${locale}/hizmetlerimiz/`}
                                                        className="group/card bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 rounded-xl p-3 transition-all duration-300 ease-out border border-blue-200 hover:border-blue-300 flex flex-col items-center justify-center text-center hover:scale-105 hover:shadow-lg"
                                                        onClick={handleLinkClick}
                                                    >
                                                        <div className="aspect-square w-full flex items-center justify-center">
                                                            <ArrowRight className="h-7 w-7 text-blue-500 group-hover/card:text-blue-600 transition-all group-hover/card:translate-x-1" />
                                                        </div>
                                                        <p className="text-[11px] font-semibold text-blue-600 group-hover/card:text-blue-700 transition-colors">
                                                            {locale === 'tr' ? 'Tüm Hizmetler' : locale === 'en' ? 'All Services' : 'جميع الخدمات'}
                                                        </p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="btn btn-ghost text-xs flex items-center gap-1.5 text-neutral-700 hover:text-blue-600 hover:bg-neutral-100 px-2.5 sm:px-2 py-2 sm:py-1.5 rounded-md transition-all duration-200 border border-neutral-200 hover:border-blue-300 min-h-[40px] sm:min-h-[36px] h-[40px] sm:h-[36px] touch-manipulation"
                            aria-label="Change language"
                            aria-expanded={isLangMenuOpen}
                            aria-haspopup="true"
                        >
                            <Globe className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
                            <span className="text-base sm:text-sm font-medium">{currentLang.flag}</span>
                            <span className="text-xs font-medium hidden xl:inline">{currentLang.name}</span>
                            <ChevronDown className={cn("h-3.5 w-3.5 sm:h-3 sm:w-3 transition-transform duration-300 ease-in-out", isLangMenuOpen && "rotate-180")} />
                        </button>

                        {isLangMenuOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-neutral-200 py-1 z-50">
                                {languages.map((lang) => (
                                    <Link
                                        key={lang.code}
                                        href={`/${lang.code}/`}
                                        className={cn(
                                            "flex items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-100 transition-colors",
                                            locale === lang.code && "bg-blue-50 text-blue-600"
                                        )}
                                        onClick={() => setIsLangMenuOpen(false)}
                                    >
                                        <span>{lang.flag}</span>
                                        <span>{lang.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* CTA Button */}
                    <Link
                        href={`/${locale}/fiyat-teklifi/`}
                        className="btn bg-[#0B2545] hover:bg-[#0B2545]/90 text-white text-sm xl:text-base px-4 xl:px-6 py-2 shadow-lg shadow-blue-900/10"
                    >
                        {t('getQuote')}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-2 sm:gap-3">
                    {/* Mobile Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="btn btn-ghost text-xs flex items-center gap-1.5 text-neutral-700 hover:text-blue-600 hover:bg-neutral-100 px-2.5 sm:px-2 py-2 sm:py-1.5 rounded-md transition-all duration-200 border border-neutral-200 hover:border-blue-300 min-h-[40px] sm:min-h-[36px] h-[40px] sm:h-[36px] touch-manipulation"
                            aria-label="Change language"
                            aria-expanded={isLangMenuOpen}
                            aria-haspopup="true"
                        >
                            <Globe className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
                            <span className="text-base sm:text-sm font-medium">{currentLang.flag}</span>
                            <ChevronDown className={cn("h-3.5 w-3.5 sm:h-3 sm:w-3 transition-transform duration-300 ease-in-out", isLangMenuOpen && "rotate-180")} />
                        </button>

                        {isLangMenuOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-neutral-200 py-1 z-50">
                                {languages.map((lang) => (
                                    <Link
                                        key={lang.code}
                                        href={`/${lang.code}/`}
                                        className={cn(
                                            "flex items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-100 transition-colors",
                                            locale === lang.code && "bg-blue-50 text-blue-600"
                                        )}
                                        onClick={() => setIsLangMenuOpen(false)}
                                    >
                                        <span>{lang.flag}</span>
                                        <span>{lang.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="btn btn-ghost text-neutral-900 hover:text-blue-600 h-10 w-10 sm:h-12 sm:w-12 bg-neutral-100 hover:bg-blue-50 border-2 border-neutral-200 hover:border-blue-300 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                        aria-label={isMobileMenuOpen ? t('closeMenu') : t('openMenu')}
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-neutral-200 bg-white">
                    <nav className="container px-4 py-4 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-base font-medium text-neutral-800 hover:text-blue-600 hover:bg-neutral-50 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href={`/${locale}/fiyat-teklifi/`}
                            className="block w-full text-center btn btn-primary gradient-electric hover:opacity-90 text-base px-4 py-3 mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('getQuote')}
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
