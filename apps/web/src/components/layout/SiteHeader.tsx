'use client';

import { useState, Fragment, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X, ChevronDown, ChevronRight, Globe, ArrowRight, Battery, Zap, Truck, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

// Product data for mega menu - synced with categoryData from projecttest.com.tr
const productCategories = [
    {
        id: 'portable',
        name: { tr: 'TAŞINABİLİR GÜÇ PAKETLERİ', en: 'PORTABLE POWER PACKS', ar: 'حزم الطاقة المحمولة' },
        icon: Battery,
        products: [
            { slug: 'revium-2-7-kwh', name: { tr: '2.7 kWh Çanta Tipi Güç Paketi', en: '2.7 kWh Case Type Power Pack', ar: 'حزمة طاقة حقيبة ٢.٧ كيلوواط ساعة' }, image: '/images/products/2-7kwh-a-1.webp', zoomOut: true },
            { slug: 'revium-2-7-kwh-bag', name: { tr: '2.7 kWh Güç Paketi', en: '2.7 kWh Power Pack', ar: 'حزمة طاقة ٢.٧ كيلوواط ساعة' }, image: '/images/products/2-7kwh-b-1.webp' },
            { slug: 'revium-5-4-kwh', name: { tr: '5.4 kWh Güç Paketi', en: '5.4 kWh Power Pack', ar: 'حزمة طاقة ٥.٤ كيلوواط ساعة' }, image: '/images/products/5-4kwh-h-1.webp' },
        ]
    },
    {
        id: 'cabin',
        name: { tr: 'KABİN TİPİ GÜÇ PAKETLERİ', en: 'CABINET POWER PACKS', ar: 'حزم طاقة الخزانة' },
        icon: Zap,
        products: [
            { slug: 'revium-power-cabinet', name: { tr: 'Güç Kabini', en: 'Power Cabinet', ar: 'خزانة الطاقة' }, image: '/images/products/cabin-power.webp' },
            { slug: 'revium-power-layer', name: { tr: 'Güç Katmanı', en: 'Power Layer', ar: 'طبقة الطاقة' }, image: '/images/products/stack-21-6kwh-1.webp' },
            { slug: 'revium-gridpack', name: { tr: 'Şebeke Paketi', en: 'Grid Pack', ar: 'جريد باك' }, image: '/images/products/gridpack.webp' },
        ]
    },
    {
        id: 'charging',
        name: { tr: 'EV ŞARJ ÇÖZÜMLERİ', en: 'EV CHARGING SOLUTIONS', ar: 'حلول شحن السيارات الكهربائية' },
        icon: Zap,
        products: [
            { slug: 'revium-grid-core', name: { tr: 'Grid Core', en: 'Grid Core', ar: 'جريد كور' }, image: '/images/products/grid-core.webp' },
            { slug: 'revium-grid-pulse', name: { tr: 'Grid Pulse', en: 'Grid Pulse', ar: 'جريد بلس' }, image: '/images/products/grid-pulse.webp' },
            { slug: 'revium-grid-pulse-gen2', name: { tr: 'Grid Pulse Gen2', en: 'Grid Pulse Gen2', ar: 'جريد بلس الجيل الثاني' }, image: '/images/products/grid-pulse-gen2.webp' },
        ]
    },
    {
        id: 'ges',
        name: { tr: 'SOLAR ÜRÜNLER', en: 'SOLAR PRODUCTS', ar: 'المنتجات الشمسية' },
        icon: Sun,
        products: [
            { slug: 'revium-powerstation-series', name: { tr: 'Powerstation Serisi', en: 'Powerstation Series', ar: 'سلسلة محطات الطاقة' }, image: '/images/products/ges-power-station.png' },
            { slug: 'revium-solarport', name: { tr: 'Solarport', en: 'Solarport', ar: 'سولار بورت' }, image: '/images/products/solarport-duo.png' },
        ]
    },

    {
        id: 'battery',
        name: { tr: 'BATARYA SİSTEMLERİ', en: 'BATTERY SYSTEMS', ar: 'أنظمة البطاريات' },
        icon: Battery,
        products: [
            { slug: 'revium-2-7-kwh-lfp', name: { tr: '2.7 kWh LFP Batarya', en: '2.7 kWh LFP Battery', ar: 'بطارية ليثيوم فوسفat الحديد ٢.٧ كيلوواط ساعة' }, image: '/images/products/2.7-lfp.webp' },
            { slug: 'revium-5-4-kwh-lfp', name: { tr: '5.4 kWh LFP Batarya', en: '5.4 kWh LFP Battery', ar: 'بطارية ليثيوم فوسفat الحديد ٥.٤ كيلوواط ساعة' }, image: '/images/products/5.4-lfp.webp' },
        ]
    },
    {
        id: 'vehicle',
        name: { tr: 'ARAÇ TİPİ GÜÇ PAKETLERİ', en: 'VEHICLE POWER PACKS', ar: 'حزم طاقة المركبات' },
        icon: Truck,
        products: [
            { slug: 'revium-pickup-power-pack', name: { tr: 'Pick Up Güç Paketi', en: 'Pick Up Power Pack', ar: 'حزمة طاقة بيك آب' }, image: '/images/products/hilux-21-6kwh-1.webp' },
        ]
    },
];

const serviceCategories = [
    {
        id: 'ges-kurulum',
        name: { tr: 'GES Kurulumu', en: 'Solar Plant Installation', ar: 'تركيب محطة الطاقة الشمسية' },
        services: [
            { slug: 'ges-kurulumu', name: { tr: 'Güneş Paneli Kurulumu', en: 'Solar Panel Installation', ar: 'تركيب الألواh الشمسية' }, image: '/images/services/ges-service-new.webp' },
        ]
    },
    {
        id: 'endustriyel',
        name: { tr: 'Endüstriyel Kurulum', en: 'Industrial Installation', ar: 'التركيب الصناعي' },
        services: [
            { slug: 'endustriyel-kurulum', name: { tr: 'Endüstriyel Enerji Çözümleri', en: 'Industrial Energy Solutions', ar: 'حلول الطاقة الصناعية' }, image: '/images/services/industrial-service-new.webp' },
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

    // Mobile menu accordion states
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileActiveCategoryId, setMobileActiveCategoryId] = useState<string | null>(null);

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

    // Timer ref for managing usage
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Helper functions for menu interaction
    const handleMouseEnter = (menu: 'products' | 'services') => {
        if (timerRef.current) clearTimeout(timerRef.current);

        // Only reset category if we are opening a NEW menu (not just re-entering the header)
        if (activeMegaMenu !== menu) {
            if (menu === 'products') setActiveProductCategory(0);
            if (menu === 'services') setActiveServiceCategory(0);
        }

        setActiveMegaMenu(menu);
    };

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setActiveMegaMenu(null);
        }, 400); // Increased to 400ms for better usability
    };

    const handleMenuContentEnter = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    const handleLinkClick = () => {
        setActiveMegaMenu(null);
        setIsMobileMenuOpen(false);
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    return (
        <header
            className="sticky top-0 z-[99999] w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 relative"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
        >
            {/* Top Bar - Higher z-index to stay above the mega menu bridge */}
            <div className="relative z-[60] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
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
                                        if (timerRef.current) clearTimeout(timerRef.current);
                                        setActiveMegaMenu(null);
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
            </div>

            {/* Unified Mega Menu Content - z-50 to stay below the top bar and its bridge doesn't block top bar interaction */}
            {activeMegaMenu && (
                <div
                    className="absolute top-full left-0 w-full bg-white shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-300 before:content-[''] before:absolute before:-top-20 before:left-0 before:w-full before:h-20 before:bg-transparent"
                    onMouseEnter={handleMenuContentEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {activeMegaMenu === 'products' ? (
                        <div className="max-w-7xl mx-auto px-6 py-8">
                            <div className="flex gap-8">
                                {/* Sidebar Categories */}
                                <div className="w-64 shrink-0 pr-6">
                                    <h3 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-4 px-3">
                                        {t('categories')}
                                    </h3>
                                    <div className="flex flex-col gap-1">
                                        {productCategories.map((cat, index) => {
                                            const isActive = activeProductCategory === index;
                                            return (
                                                <button
                                                    key={cat.id}
                                                    onMouseEnter={() => setActiveProductCategory(index)}
                                                    className={cn(
                                                        "w-full text-left px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all flex items-center justify-between group",
                                                        isActive
                                                            ? "bg-blue-50 text-blue-600"
                                                            : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                                                    )}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span>{cat.name[locale]}</span>
                                                    </div>
                                                    {isActive && <ChevronRight className="h-3.5 w-3.5 text-blue-500" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Products Grid */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                                            {productCategories[activeProductCategory].name[locale]}
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-4 gap-4">
                                        {productCategories[activeProductCategory].products.map((product) => (
                                            <Link
                                                key={product.slug}
                                                href={`/${locale}/urunlerimiz/${product.slug}/`}
                                                className="group/card bg-white hover:shadow-xl hover:shadow-blue-900/5 rounded-xl p-4 transition-all duration-300 ease-out hover:-translate-y-1 block"
                                                onClick={handleLinkClick}
                                            >
                                                <div className="aspect-square relative w-full rounded-xl overflow-hidden mb-4 bg-neutral-50 group-hover/card:bg-white transition-colors">
                                                    <Image
                                                        src={product.image}
                                                        alt={typeof product.name === 'string' ? product.name : product.name[locale]}
                                                        fill
                                                        className={`object-contain group-hover/card:scale-110 transition-transform duration-500 ${(product as any).zoomOut ? 'p-6' : 'p-3'}`}
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    {/* Category Label (optional) */}
                                                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 opacity-0 group-hover/card:opacity-100 transition-opacity transform translate-y-2 group-hover/card:translate-y-0 duration-300">
                                                        {locale === 'ar' ? 'ريفيوم' : 'Revium'}
                                                    </div>
                                                    <p className="text-[13px] font-bold text-neutral-900 group-hover/card:text-blue-700 transition-colors line-clamp-2 leading-snug">
                                                        {typeof product.name === 'string' ? product.name : product.name[locale]}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}

                                        {/* Tüm Ürünler Kartı */}
                                        <Link
                                            href={`/${locale}/urunlerimiz/`}
                                            className="group/card bg-white hover:shadow-xl hover:shadow-blue-900/5 rounded-xl p-4 transition-all duration-300 ease-out hover:-translate-y-1 block"
                                            onClick={handleLinkClick}
                                        >
                                            <div className="aspect-square relative w-full rounded-xl overflow-hidden mb-4 bg-blue-50/50 group-hover/card:bg-blue-100/50 transition-colors flex items-center justify-center">
                                                <div className="w-14 h-14 rounded-xl bg-blue-100 group-hover/card:bg-blue-600 flex items-center justify-center transition-all duration-300">
                                                    <ArrowRight className="w-7 h-7 text-blue-600 group-hover/card:text-white transition-colors duration-300" />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[13px] font-bold text-neutral-900 group-hover/card:text-blue-700 transition-colors">
                                                    {t('viewAllProducts')}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-7xl mx-auto px-6 py-8">
                            <div className="flex gap-8">
                                {/* Sidebar Categories */}
                                <div className="w-64 shrink-0 pr-6">
                                    <h3 className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-4 px-3">
                                        {t('categories')}
                                    </h3>
                                    <div className="flex flex-col gap-1">
                                        {serviceCategories.map((cat, index) => {
                                            const isActive = activeServiceCategory === index;
                                            return (
                                                <button
                                                    key={cat.id}
                                                    onMouseEnter={() => setActiveServiceCategory(index)}
                                                    className={cn(
                                                        "w-full text-left px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all flex items-center justify-between group",
                                                        isActive
                                                            ? "bg-blue-50 text-blue-600"
                                                            : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                                                    )}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span>{cat.name[locale]}</span>
                                                    </div>
                                                    {isActive && <ChevronRight className="h-3.5 w-3.5 text-blue-500" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Services Grid */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                                            {serviceCategories[activeServiceCategory].name[locale]}
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-4 gap-4">
                                        {serviceCategories[activeServiceCategory].services.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`/${locale}/hizmetlerimiz/${service.slug}/`}
                                                className="group/card bg-white hover:shadow-xl hover:shadow-blue-900/5 rounded-xl p-4 transition-all duration-300 ease-out hover:-translate-y-1 block"
                                                onClick={handleLinkClick}
                                            >
                                                <div className="aspect-square relative w-full rounded-xl overflow-hidden mb-4 bg-neutral-50 group-hover/card:bg-white transition-colors">
                                                    <Image
                                                        src={service.image}
                                                        alt={service.name[locale]}
                                                        fill
                                                        className="object-contain p-3 group-hover/card:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 opacity-0 group-hover/card:opacity-100 transition-opacity transform translate-y-2 group-hover/card:translate-y-0 duration-300">
                                                        {locale === 'ar' ? 'ريفيوم' : 'Revium'}
                                                    </div>
                                                    <p className="text-[13px] font-bold text-neutral-900 group-hover/card:text-blue-700 transition-colors line-clamp-2 leading-snug">
                                                        {service.name[locale]}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}

                                        {/* Tüm Hizmetler Kartı */}
                                        <Link
                                            href={`/${locale}/hizmetlerimiz/`}
                                            className="group/card bg-white hover:shadow-xl hover:shadow-blue-900/5 rounded-xl p-4 transition-all duration-300 ease-out hover:-translate-y-1 block"
                                            onClick={handleLinkClick}
                                        >
                                            <div className="aspect-square relative w-full rounded-xl overflow-hidden mb-4 bg-blue-50/50 group-hover/card:bg-blue-100/50 transition-colors flex items-center justify-center">
                                                <div className="w-14 h-14 rounded-xl bg-blue-100 group-hover/card:bg-blue-600 flex items-center justify-center transition-all duration-300">
                                                    <ArrowRight className="w-7 h-7 text-blue-600 group-hover/card:text-white transition-colors duration-300" />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-[13px] font-bold text-neutral-900 group-hover/card:text-blue-700 transition-colors">
                                                    {t('viewAllServices')}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-neutral-200 bg-white max-h-[80vh] overflow-y-auto">
                    <nav className="container px-4 py-4 space-y-1">
                        {/* Ana Sayfa */}
                        <Link
                            href={`/${locale}/`}
                            className="block px-3 py-3 text-base font-medium text-neutral-800 hover:text-blue-600 hover:bg-neutral-50 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('home')}
                        </Link>

                        {/* Ürünler Accordion */}
                        <div className="border-b border-neutral-100 pb-2">
                            <button
                                onClick={() => {
                                    setMobileProductsOpen(!mobileProductsOpen);
                                    setMobileServicesOpen(false);
                                }}
                                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-neutral-800 hover:text-blue-600 hover:bg-neutral-50 rounded-lg transition-colors"
                            >
                                <span>{t('products')}</span>
                                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileProductsOpen && "rotate-180")} />
                            </button>

                            {mobileProductsOpen && (
                                <div className="mt-2 ml-2 space-y-1">
                                    {productCategories.map((cat) => (
                                        <div key={cat.id}>
                                            <button
                                                onClick={() => setMobileActiveCategoryId(mobileActiveCategoryId === cat.id ? null : cat.id)}
                                                className={cn(
                                                    "w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                                                    mobileActiveCategoryId === cat.id
                                                        ? "bg-blue-50 text-blue-600"
                                                        : "text-neutral-600 hover:bg-neutral-50"
                                                )}
                                            >
                                                <span>{cat.name[locale]}</span>
                                                <ChevronRight className={cn("h-3.5 w-3.5 transition-transform", mobileActiveCategoryId === cat.id && "rotate-90")} />
                                            </button>

                                            {mobileActiveCategoryId === cat.id && (
                                                <div className="mt-1 ml-3 space-y-1 border-l-2 border-blue-100 pl-3">
                                                    {cat.products.map((product) => (
                                                        <Link
                                                            key={product.slug}
                                                            href={`/${locale}/urunlerimiz/${product.slug}/`}
                                                            className="block px-3 py-2 text-sm text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {product.name[locale]}
                                                        </Link>
                                                    ))}
                                                    <Link
                                                        href={`/${locale}/urunlerimiz/kategori/${cat.id}/`}
                                                        className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {t('viewAll')} →
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <Link
                                        href={`/${locale}/urunlerimiz/`}
                                        className="block px-3 py-2.5 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {t('viewAllProducts')} →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Hizmetler Accordion */}
                        <div className="border-b border-neutral-100 pb-2">
                            <button
                                onClick={() => {
                                    setMobileServicesOpen(!mobileServicesOpen);
                                    setMobileProductsOpen(false);
                                }}
                                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-neutral-800 hover:text-blue-600 hover:bg-neutral-50 rounded-lg transition-colors"
                            >
                                <span>{t('services')}</span>
                                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")} />
                            </button>

                            {mobileServicesOpen && (
                                <div className="mt-2 ml-2 space-y-1">
                                    {serviceCategories.map((cat) => (
                                        <div key={cat.id}>
                                            {cat.services.map((service) => (
                                                <Link
                                                    key={service.slug}
                                                    href={`/${locale}/hizmetlerimiz/${service.slug}/`}
                                                    className="block px-3 py-2.5 text-sm text-neutral-600 hover:text-blue-600 hover:bg-neutral-50 rounded-lg transition-colors"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {service.name[locale]}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                    <Link
                                        href={`/${locale}/hizmetlerimiz/`}
                                        className="block px-3 py-2.5 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {t('viewAllServices')} →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Kurumsal */}
                        <Link
                            href={`/${locale}/kurumsal/`}
                            className="block px-3 py-3 text-base font-medium text-neutral-800 hover:text-blue-600 hover:bg-neutral-50 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('corporate')}
                        </Link>

                        {/* İletişim */}
                        <Link
                            href={`/${locale}/iletisim/`}
                            className="block px-3 py-3 text-base font-medium text-neutral-800 hover:text-blue-600 hover:bg-neutral-50 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('contact')}
                        </Link>

                        {/* CTA Button */}
                        <Link
                            href={`/${locale}/fiyat-teklifi/`}
                            className="block w-full text-center bg-blue-600 text-white hover:bg-slate-900 text-base font-bold px-4 py-3 mt-4 rounded-xl transition-colors"
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
