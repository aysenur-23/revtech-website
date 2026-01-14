import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Box } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
    params: Promise<{ locale: string }>;
}

const allProducts = [
    { id: 'revium-2-7-kwh', name: 'Revium 2.7 kWh Depolanabilir Güç Paketi', image: '/images/products/2-7kwh-a-1.png', category: 'portablePower', description: 'Taşınabilir enerji depolama çözümlerinde yeni standart.' },
    { id: 'revium-2-7-kwh-bag', name: 'Revium 2.7 kWh Çanta Tip Güç Paketi', image: '/images/products/2-7kwh-b-1.png', category: 'portablePower', description: 'Dayanıklı çanta tipi tasarımı ile saha tipi güç.' },
    { id: 'revium-storage-battery', name: 'Revium Storage Battery', image: '/images/products/stack-21-6kwh-1.png', category: 'cabinPower', description: '2.7 – 5.4 kWh modüler batarya sistemi.' },
    { id: 'revium-5-4-kwh', name: 'Revium 5.4 kWh Güç Paketi', image: '/images/products/5-4kwh-h-1.png', category: 'portablePower', description: 'Yüksek kapasiteli profesyonel taşınabilir güç.' },
    { id: 'revium-power-cabinet', name: 'Revium Güç Kabini', image: '/images/products/cabin-power.png', category: 'cabinPower', description: '5.4 – 21.6 kWh endüstriyel enerji depolama kabini.' },
    { id: 'revium-hilux-power-pack', name: 'Revium Hilux Güç Paketi', image: '/images/products/hilux-21-6kwh-1.png', category: 'vehiclePower', description: '80 kWh araç üstü mobil enerji sistemi.' },
    { id: 'revium-power-layer', name: 'Revium Güç Katmanı', image: '/images/products/stack-21-6kwh-1.png', category: 'cabinPower', description: 'Ölçeklenebilir endüstriyel batarya ünitesi.' },
    { id: 'revium-gridpack', name: 'Revium Gridpack', image: '/images/products/gridpack-100.png', category: 'cabinPower', description: '500 kWh – 5 MWh şebeke ölçekli BESS.' },
    { id: 'revium-powerstation-series', name: 'Revium Powerstation Serisi', image: '/images/products/ges-power-station.png', category: 'gesProducts', description: 'Konteyner tip enerji ve güneş entegrasyonu.' },
    { id: 'revium-voltwagon', name: 'Revium VoltWagon', image: '/images/products/solar-voltwagon.png', category: 'vehiclePower', description: 'Mobil güneş enerjili römork sistemi.' },
    { id: 'revium-solarport', name: 'Revium Solarport', image: '/images/products/solarport-duo.png', category: 'gesProducts', description: 'Solar carport ve EV şarj istasyonu.' },
];

export default async function ProductsPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('products');

    // Locale-aware content
    const heroContent = {
        tr: {
            badge: 'Premium Enerji Ekosistemi',
            titleLine1: 'Yeni Nesil',
            titleLine2: 'Enerjinin Geleceğine',
            titleHighlight: 'Yön Ver',
            description: "Revium'un gelişmiş enerji depolama çözümleri ile tanışın. Sürdürülebilir ve akıllı sistemlerle kesintisiz güç.",
            cta: 'Tüm Ürünleri Gör'
        },
        en: {
            badge: 'Premium Energy Ecosystem',
            titleLine1: 'Next Generation',
            titleLine2: 'Shape the Future of',
            titleHighlight: 'Energy',
            description: "Meet Revium's advanced energy storage solutions. Uninterrupted power with sustainable and smart systems.",
            cta: 'View All Products'
        },
        ar: {
            badge: 'نظام الطاقة المتميز',
            titleLine1: 'الجيل القادم',
            titleLine2: 'شكّل مستقبل',
            titleHighlight: 'الطاقة',
            description: 'تعرف على حلول تخزين الطاقة المتقدمة من ريفيوم. طاقة متواصلة مع أنظمة مستدامة وذكية.',
            cta: 'عرض جميع المنتجات'
        }
    };

    const featureStrip = {
        tr: [
            { label: "LiFePO4 Teknolojisi", sub: "Uzun Ömürlü Batarya" },
            { label: "10 Yıl Ömür", sub: "3000+ Döngü" },
            { label: "Akıllı BMS", sub: "Tam Koruma" },
            { label: "Hızlı Şarj", sub: "Maksimum Verim" }
        ],
        en: [
            { label: "LiFePO4 Technology", sub: "Long-Lasting Battery" },
            { label: "10 Year Lifespan", sub: "3000+ Cycles" },
            { label: "Smart BMS", sub: "Full Protection" },
            { label: "Fast Charging", sub: "Maximum Efficiency" }
        ],
        ar: [
            { label: "تقنية LiFePO4", sub: "بطارية طويلة العمر" },
            { label: "عمر 10 سنوات", sub: "أكثر من 3000 دورة" },
            { label: "نظام BMS ذكي", sub: "حماية كاملة" },
            { label: "شحن سريع", sub: "أقصى كفاءة" }
        ]
    };

    const featuredContent = {
        tr: {
            badge: 'En Çok Tercih Edilen',
            title: 'Profesyonel Seri',
            description: 'Ev ve küçük işletmeler için mükemmel denge. Yüksek kapasite, güçlü inverter ve akıllı yönetim sistemi bir arada.',
            features: ['Kesintisiz güç kaynağı (UPS)', 'Güneş paneli ile doğrudan şarj', 'Mobil uygulama kontrolü'],
            cta: 'Detayları İncele'
        },
        en: {
            badge: 'Most Popular',
            title: 'Professional Series',
            description: 'Perfect balance for homes and small businesses. High capacity, powerful inverter, and smart management system combined.',
            features: ['Uninterruptible Power Supply (UPS)', 'Direct solar panel charging', 'Mobile app control'],
            cta: 'View Details'
        },
        ar: {
            badge: 'الأكثر شيوعاً',
            title: 'السلسلة الاحترافية',
            description: 'التوازن المثالي للمنازل والشركات الصغيرة. سعة عالية، عاكس قوي، ونظام إدارة ذكي في جهاز واحد.',
            features: ['مصدر طاقة غير منقطع (UPS)', 'شحن مباشر من الألواح الشمسية', 'تحكم عبر تطبيق الهاتف'],
            cta: 'عرض التفاصيل'
        }
    };

    const productGridContent = {
        tr: { viewProduct: 'Ürünü İncele' },
        en: { viewProduct: 'View Product' },
        ar: { viewProduct: 'عرض المنتج' }
    };

    const hero = heroContent[locale as keyof typeof heroContent] || heroContent.en;
    const features = featureStrip[locale as keyof typeof featureStrip] || featureStrip.en;
    const featured = featuredContent[locale as keyof typeof featuredContent] || featuredContent.en;
    const productGrid = productGridContent[locale as keyof typeof productGridContent] || productGridContent.en;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section - Compact & Refined (Light Theme) */}
            <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center bg-gradient-to-br from-blue-50 to-indigo-50/30 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/images/hero/grid.png')] opacity-[0.03] bg-[size:40px_40px]" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 sm:pt-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="flex flex-col items-start text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-blue-100 shadow-sm backdrop-blur-md">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">
                                    {hero.badge}
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                                <span className="block italic font-light text-blue-600/80 mb-1 text-lg sm:text-xl lg:text-2xl">
                                    {hero.titleLine1}
                                </span>
                                {hero.titleLine2} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500">
                                    {hero.titleHighlight}
                                </span>
                            </h1>
                            <p className="text-base text-slate-600 leading-relaxed max-w-lg mb-8 font-medium">
                                {hero.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link
                                    href="#products-grid"
                                    className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                                >
                                    {hero.cta}
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                        {/* Hero Product Highlight */}
                        <div className="relative group perspective-1000 hidden lg:block">
                            <div className="absolute inset-x-0 inset-y-0 bg-blue-500/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10 aspect-square max-w-md mx-auto">
                                <Image
                                    src="/images/products/5-4kwh-3000w-1.png"
                                    alt="Revium Flagship Product"
                                    fill
                                    className="object-contain drop-shadow-2xl scale-110"
                                    priority
                                />
                            </div>

                            {/* Floating Tech Badges - Updated for Light Theme */}
                            <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-xl border border-white/40 p-5 rounded-3xl shadow-xl animate-float-slow group-hover:scale-105 transition-transform">
                                <div className="text-2xl font-black text-slate-900 mb-0.5 tracking-tighter">5.4 kWh</div>
                                <div className="text-[10px] text-blue-600 font-black uppercase tracking-widest opacity-90">Max Capacity</div>
                            </div>
                            <div className="absolute -bottom-8 left-8 bg-white/80 backdrop-blur-xl border border-white/40 p-5 rounded-3xl shadow-[0_20px_40px_rgba(16,185,129,0.1)] animate-float-slower group-hover:scale-105 transition-transform">
                                <div className="text-2xl font-black text-emerald-600 mb-0.5 tracking-tighter">3000 W</div>
                                <div className="text-[10px] text-emerald-600 font-black uppercase tracking-widest opacity-90">Pure Sine Output</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By / Feature Strip */}
            <div className="bg-white border-b border-slate-100 py-8">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {features.map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <span className="text-sm font-bold text-slate-900 mb-1">{item.label}</span>
                                <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">{item.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Product Section - "Editor's Choice" style */}
            <section className="py-20 bg-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-800 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-6">
                                    {featured.badge}
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                                    Revium 5.4 kWh <br />
                                    {featured.title}
                                </h2>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                    {featured.description}
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {featured.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={`/${locale}/urunlerimiz/r-sb5400c`} className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                                    {featured.cta} <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="aspect-square relative">
                                    <Image src="/images/products/5-4kwh-3000w-1.png" alt="Featured" fill className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section id="products-grid" className="py-20 bg-slate-50">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">{t('allProductsTitle')}</h2>
                        <p className="text-slate-600 text-lg">{t('allProductsSubtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/${locale}/urunlerimiz/${product.id}/`}
                                className="group bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2 flex flex-col"
                            >
                                <div className="aspect-[4/3] relative rounded-2xl bg-slate-50 mb-6 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white opacity-50" />
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    {/* Quick Specs Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm text-slate-800">
                                            {product.name.includes('kWh') ? product.name.split('kWh')[0] + 'kWh' : 'High Power'}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                                        {t(`${product.category}.title`)}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
                                        {product.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {productGrid.viewProduct} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero/grid.png')] opacity-[0.03]" />
                <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                        {t('cta.title')}
                    </h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        {t('cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${locale}/iletisim/`}
                            className="px-10 py-5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
                        >
                            {t('cta.contactUs')}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'products' });
    return {
        title: `${t('allProductsTitle')} | Revium`,
        description: t('allProductsSubtitle'),
    };
}
