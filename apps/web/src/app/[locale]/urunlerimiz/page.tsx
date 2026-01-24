import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Battery, Truck, Zap, Server, Sun } from 'lucide-react';

interface Props {
    params: Promise<{ locale: string }>;
}

const allProducts = [
    // Portable Power
    { id: 'revium-2-7-kwh', name: '2.7 kWh Güç Paketi', image: '/images/products/2-7kwh-a-1.webp', category: 'portablePower', descriptionKey: 'revium-2-7-kwh.description' },
    { id: 'revium-2-7-kwh-bag', name: '2.7 kWh Çanta Tip', image: '/images/products/2-7kwh-b-1.webp', category: 'portablePower', descriptionKey: 'revium-2-7-kwh-bag.description' },
    { id: 'revium-5-4-kwh', name: '5.4 kWh Güç Paketi', image: '/images/products/5-4kwh-h-1.webp', category: 'portablePower', descriptionKey: 'revium-5-4-kwh.description' },

    // Vehicle Power
    { id: 'revium-pickup-power-pack', name: 'Pick Up Güç Paketi', image: '/images/products/hilux-21-6kwh-1.webp', category: 'vehiclePower', descriptionKey: 'revium-pickup-power-pack.description' },

    // Charging Stations
    { id: 'revium-grid-core', name: 'Grid Core', image: '/images/products/grid-core.webp', category: 'charging', descriptionKey: 'revium-grid-core.description' },
    { id: 'revium-grid-pulse', name: 'Grid Pulse', image: '/images/products/grid-pulse.webp', category: 'charging', descriptionKey: 'revium-grid-pulse.description' },
    { id: 'revium-grid-pulse-gen2', name: 'Grid Pulse Gen2', image: '/images/products/grid-pulse-gen2.webp', category: 'charging', descriptionKey: 'revium-grid-pulse-gen2.description' },

    // Cabin Power
    { id: 'revium-power-cabinet', name: 'Güç Kabini', image: '/images/products/cabin-power.webp', category: 'cabinPower', descriptionKey: 'revium-power-cabinet.description' },
    { id: 'revium-power-layer', name: 'Güç Katmanı', image: '/images/products/stack-21-6kwh-1.webp', category: 'cabinPower', descriptionKey: 'revium-power-layer.description' },
    { id: 'revium-gridpack', name: 'GRIDPACK', image: '/images/products/gridpack.webp', category: 'cabinPower', descriptionKey: 'revium-gridpack.description' },

    // Battery Systems
    { id: 'revium-2-7-kwh-lfp', name: '2.7 kWh LFP Batarya', image: '/images/products/2.7-lfp.webp', category: 'batteryPower', descriptionKey: 'revium-2-7-kwh-lfp.description' },
    { id: 'revium-5-4-kwh-lfp', name: '5.4 kWh LFP Batarya', image: '/images/products/5.4-lfp.webp', category: 'batteryPower', descriptionKey: 'revium-5-4-kwh-lfp.description' },

    // Solar Products
    { id: 'revium-powerstation-series', name: 'Powerstation Serisi', image: '/images/products/ges-power-station.webp', category: 'gesProducts', descriptionKey: 'revium-powerstation-series.description' },
    { id: 'revium-solarport', name: 'Solarport', image: '/images/products/solarport-duo.webp', category: 'gesProducts', descriptionKey: 'revium-solarport.description' },
];

const categories = [
    { id: 'portablePower', icon: Battery },
    { id: 'cabinPower', icon: Server },
    { id: 'charging', icon: Zap },
    { id: 'gesProducts', icon: Sun },
    { id: 'batteryPower', icon: Battery },
    { id: 'vehiclePower', icon: Truck },
];

export default async function ProductsPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('products');
    const tDetails = await getTranslations('productDetails.products');

    const heroContent = {
        tr: {
            titleLine1: 'Yeni Nesil',
            titleLine2: 'Enerjinin Geleceğine',
            titleHighlight: 'Yön Ver',
            description: "Revium'un gelişmiş enerji depolama çözümleri ile tanışın. Sürdürülebilir ve akıllı sistemlerle kesintisiz güç.",
        },
        en: {
            titleLine1: 'Next Generation',
            titleLine2: 'Shape the Future of',
            titleHighlight: 'Energy',
            description: "Meet Revium's advanced energy storage solutions. Uninterrupted power with sustainable and smart systems.",
        },
        ar: {
            titleLine1: 'الجيل القادم',
            titleLine2: 'شكّل مستقبل',
            titleHighlight: 'الطاقة',
            description: 'تعرف على حلول تخزين الطاقة المتقدمة من ريفيوم. طاقة متواصلة مع أنظمة مستدامة وذكية.',
        }
    };

    const hero = heroContent[locale as keyof typeof heroContent] || heroContent.en;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            {/* Hero Section - Premium Redesign without Grid */}
            <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-white">
                {/* Premium Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-50/60 rounded-full blur-[80px]" />
                </div>

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-sm font-bold text-blue-600 tracking-widest uppercase">{t('allProductsTitle')}</span>
                    </div>

                    <h1 className="font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        <span className="block font-medium text-slate-500 text-base sm:text-lg lg:text-xl mb-3 tracking-normal">
                            {hero.titleLine1}
                        </span>
                        <span className="text-3xl sm:text-4xl lg:text-5xl block mb-2">
                            {hero.titleLine2}{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                                    {hero.titleHighlight}
                                </span>
                                {/* Underline decoration */}
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                        {hero.description}
                    </p>
                </div>
            </section>

            {/* Categories & Products */}
            {categories.map((cat) => {
                const catProducts = allProducts.filter(p => p.category === cat.id);
                if (catProducts.length === 0) return null;
                const Icon = cat.icon;

                return (
                    <section key={cat.id} id={cat.id} className="py-16 border-b border-slate-200 last:border-0">
                        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                                        {t(`${cat.id}.title`)}
                                    </h2>
                                    <p className="text-slate-500 mt-1">
                                        {t(`${cat.id}.description`)}
                                    </p>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {catProducts.map((product) => (
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
                                            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                                <div className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm text-slate-800">
                                                    {t('viewDetails')}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                                                <Icon className="w-3 h-3" />
                                                <span>{t(`${product.category}.title`)}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                {tDetails(`${product.id}.name`) || product.name}
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
                                                {tDetails(`${product.id}.description`)}
                                            </p>

                                            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {t('viewDetails')} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Bottom CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.3]" />
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
