import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { toArabicNumeral } from '@/lib/utils';

interface Props {
    params: Promise<{ locale: string; slug: string }>;
}

const categoryData: Record<string, { titleKey: string; heroImage: string; products: { slug: string; name: string; image: string; description: string }[] }> = {
    portable: {
        titleKey: 'portablePower',
        heroImage: '/images/categories/portable-power-new.webp',
        products: [
            { slug: 'revium-2-7-kwh', name: '2.7 kWh Güç Paketi', image: '/images/products/2-7kwh-a-1.webp', description: 'Taşınabilir enerji depolama çözümlerinde yeni standart.' },
            { slug: 'revium-2-7-kwh-bag', name: '2.7 kWh Çanta Tip', image: '/images/products/2-7kwh-b-1.webp', description: 'Dayanıklı çanta tipi tasarımı ile saha çözümü.' },
            { slug: 'revium-5-4-kwh', name: '5.4 kWh Güç Paketi', image: '/images/products/5-4kwh-h-1.webp', description: 'Yüksek kapasiteli profesyonel taşınabilir güç.' },
        ],
    },
    vehicle: {
        titleKey: 'vehiclePower',
        heroImage: '/images/products/vehicle-category-new.jpg',
        products: [
            { slug: 'revium-pickup-power-pack', name: 'Pick Up Güç Paketi', image: '/images/products/hilux-21-6kwh-1.webp', description: 'Revium Pick Up araçlar için özel güç çözümü.' },
        ],
    },
    charging: {
        titleKey: 'charging',
        heroImage: '/images/categories/charging-category.webp',
        products: [
            { slug: 'revium-grid-core', name: 'Grid Core', image: '/images/products/grid-core.webp', description: 'Yüksek hızlı ve akıllı EV şarj yönetim ünitesi.' },
            { slug: 'revium-grid-pulse', name: 'Grid Pulse', image: '/images/products/grid-pulse.webp', description: 'Dinamik yük dengeleme ve enerji izleme modülü.' },
            { slug: 'revium-grid-pulse-gen2', name: 'Grid Pulse Gen2', image: '/images/products/grid-pulse-gen2.webp', description: 'Gelişmiş bağlantı özellikleriyle yeni nesil enerji yönetimi.' },
        ],
    },
    cabin: {
        titleKey: 'cabinPower',
        heroImage: '/images/categories/cabin-category.jpg',
        products: [
            { slug: 'revium-power-cabinet', name: 'Güç Kabini', image: '/images/products/cabin-power.webp', description: 'Endüstriyel tek kabin enerji depolama sistemi.' },
            { slug: 'revium-power-layer', name: 'Güç Katmanı', image: '/images/products/stack-21-6kwh-1.webp', description: 'Ölçeklenebilir endüstriyel batarya ünitesi.' },
            { slug: 'revium-gridpack', name: 'GRIDPACK', image: '/images/products/gridpack.webp', description: 'Şebeke ölçekli BESS ve yenilenebilir enerji depolama.' },
        ],
    },
    ges: {
        titleKey: 'gesProducts',
        heroImage: '/images/categories/solar-category.jpg',
        products: [
            { slug: 'revium-powerstation-series', name: 'Powerstation Serisi', image: '/images/products/ges-power-station.webp', description: 'Konteyner tipi GES entegre depolama.' },
            { slug: 'revium-solarport', name: 'Solarport', image: '/images/products/solarport-duo.webp', description: 'Solar carport ve EV şarj entegrasyonu.' },
        ],
    },
    battery: {
        titleKey: 'batteryPower',
        heroImage: '/images/categories/battery-category.jpg',
        products: [
            { slug: 'revium-2-7-kwh-lfp', name: '2.7 kWh LFP Batarya', image: '/images/products/2.7-lfp.webp', description: 'Güneş enerjisi sistemleri için kompakt LFP çözüm.' },
            { slug: 'revium-5-4-kwh-lfp', name: '5.4 kWh LFP Batarya', image: '/images/products/5.4-lfp.webp', description: 'Ticari ve profesyonel kullanım için yüksek kapasiteli depolama.' },
        ],
    },
};

const locales = ['tr', 'en', 'ar'];
const categorySlugs = Object.keys(categoryData);

export function generateStaticParams() {
    return locales.flatMap((locale) =>
        categorySlugs.map((slug) => ({ locale, slug }))
    );
}

export default async function CategoryPage({ params }: Props) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const category = categoryData[slug];
    if (!category) {
        notFound();
    }

    const t = await getTranslations('products');

    return (
        <div className="min-h-screen bg-white">
            {/* Premium Category Hero - Enhanced Light Theme */}
            <section className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
                {/* Refined Background Pattern */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/3 animate-pulse duration-[8000ms]" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3" />
                </div>

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: Text Content (Enhanced Typography & Animation) */}
                        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 order-2 lg:order-1 animate-in slide-in-from-bottom-6 fade-in duration-700">
                            {/* Breadcrumb / Badge */}
                            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
                                <Link href={`/${locale}/urunlerimiz`} className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-wide">
                                    {t('allProducts')}
                                </Link>
                                <span className="text-slate-300">/</span>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm ring-1 ring-blue-500/10">
                                    {t(`${category.titleKey}.title`)}
                                </div>
                            </div>

                            {/* Title with Gradient Accent */}
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-[1.05] mb-4 drop-shadow-sm">
                                {t(`${category.titleKey}.title`)}
                            </h1>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
                                {t(`${category.titleKey}.subtitle`)}
                            </p>

                            {/* Enhanced Feature Pills */}
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                <div className="px-6 py-3 rounded-2xl bg-white/60 border border-slate-200/60 shadow-md backdrop-blur-xl text-slate-700 font-semibold text-sm flex items-center gap-3 hover:scale-105 transition-transform duration-300 hover:border-blue-200 cursor-default">
                                    <span className={`w-2.5 h-2.5 rounded-full ring-2 ring-offset-1 ring-offset-slate-50 ${slug === 'portable' ? 'bg-blue-500 ring-blue-300' :
                                        slug === 'vehicle' ? 'bg-orange-500 ring-orange-300' :
                                            slug === 'cabin' ? 'bg-emerald-500 ring-emerald-300' :
                                                slug === 'charging' ? 'bg-cyan-500 ring-cyan-300' :
                                                    slug === 'battery' ? 'bg-purple-500 ring-purple-300' :
                                                        'bg-yellow-500 ring-yellow-300'
                                        }`} />
                                    {locale === 'ar' ? `${toArabicNumeral(category.products.length, locale)} منتجات` : locale === 'en' ? `${category.products.length} Products` : `${category.products.length} Ürün`}
                                </div>
                                <div className="px-6 py-3 rounded-2xl bg-white/60 border border-slate-200/60 shadow-md backdrop-blur-xl text-slate-700 font-semibold text-sm hover:scale-105 transition-transform duration-300 cursor-default">
                                    {locale === 'ar' ? 'جودة ممتازة' : locale === 'en' ? 'Premium Quality' : 'Premium Kalite'}
                                </div>
                                <div className="px-6 py-3 rounded-2xl bg-white/60 border border-slate-200/60 shadow-md backdrop-blur-xl text-slate-700 font-semibold text-sm hover:scale-105 transition-transform duration-300 cursor-default">
                                    {locale === 'ar' ? 'إنتاج محلي' : locale === 'en' ? 'Local Production' : 'Yerli Üretim'}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Hero Image (Enhanced Float & Shadow) */}
                        <div className="relative order-1 lg:order-2 flex justify-center animate-in zoom-in-95 fade-in duration-1000 delay-200">
                            {/* Decorative Circle with Border */}
                            <div className="absolute w-[95%] aspect-square rounded-full bg-gradient-to-br from-blue-50 to-indigo-50/30 border border-blue-100/50 -z-10 animate-spin-slow duration-[30s]" />

                            <div className="relative w-full aspect-square max-w-[450px] p-6 flex items-center justify-center filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:scale-[1.02]">
                                <Image
                                    src={category.heroImage}
                                    alt={t(`${category.titleKey}.title`)}
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Products Grid */}
            <section className="py-12 lg:py-20 bg-slate-50">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.products.map((product, idx) => {
                            const productName = t.has(`${category.titleKey}.products.${product.slug}.name`)
                                ? t(`${category.titleKey}.products.${product.slug}.name`)
                                : product.name;
                            const productDesc = t.has(`${category.titleKey}.products.${product.slug}.description`)
                                ? t(`${category.titleKey}.products.${product.slug}.description`)
                                : product.description;

                            return (
                                <Link
                                    key={product.slug}
                                    href={`/${locale}/urunlerimiz/${product.slug}/`}
                                    className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ring-1 ring-slate-100 hover:ring-blue-100"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <div className="aspect-square relative p-8 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white transition-colors group-hover:from-blue-50/30 group-hover:to-white">
                                        <Image
                                            src={product.image}
                                            alt={productName}
                                            fill
                                            className="object-contain p-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                                        />
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors mb-3">
                                            {productName}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                            {productDesc}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                                            <span>{t('viewDetails')}</span>
                                            <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-100 text-slate-600 group-hover:text-blue-600 flex items-center justify-center transition-colors">
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section - Light Theme */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-sm">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
                            {locale === 'tr' ? 'Bize Ulaşın' : locale === 'en' ? 'Get In Touch' : 'اتصل بنا'}
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto font-medium">
                            {t(`${category.titleKey}.subtitle`)}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={`/${locale}/urunlerimiz`}
                                className="px-8 py-4 bg-blue-50 text-blue-700 border-2 border-blue-100 rounded-xl font-bold hover:bg-blue-100/50 hover:border-blue-200 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow"
                            >
                                {t('allProducts')}
                            </Link>
                            <Link
                                href={`/${locale}/iletisim/`}
                                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                {locale === 'tr' ? 'İletişime Geç' : locale === 'en' ? 'Contact Us' : 'تواصل معنا'}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href={`/${locale}/fiyat-teklifi/`}
                                className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow"
                            >
                                {locale === 'tr' ? 'Teklif İste' : locale === 'en' ? 'Request Quote' : 'طلب عرض سعر'}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export async function generateMetadata({ params }: Props) {
    const { locale, slug } = await params;
    const t = await getTranslations({ locale, namespace: 'products' });

    const category = categoryData[slug];
    const categoryName = category ? t(`${category.titleKey}.title`) : 'Kategori';

    return {
        title: `${categoryName} | Revium`,
        description: `Revium ${categoryName} - Enerji depolama çözümleri.`,
    };
}
