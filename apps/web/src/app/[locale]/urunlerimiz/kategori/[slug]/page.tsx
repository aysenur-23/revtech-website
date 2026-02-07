import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { toArabicNumeral } from '@/lib/format';
import { getProductsByCategory, type Product } from '@/data/products';

interface Props {
    params: Promise<{ locale: string; slug: string }>;
}

const categoryConfig: Record<string, { titleKey: string; heroImage: string; dataCategory: string }> = {
    portable: {
        titleKey: 'portablePower',
        heroImage: '/images/categories/portable-power-new.png',
        dataCategory: 'portable'
    },
    vehicle: {
        titleKey: 'vehiclePower',
        heroImage: '/images/products/vehicle-category-new.jpg',
        dataCategory: 'vehicle'
    },
    charging: {
        titleKey: 'charging',
        heroImage: '/images/categories/charging-category.webp',
        dataCategory: 'charging'
    },
    cabin: {
        titleKey: 'cabinPower',
        heroImage: '/images/categories/cabin-category.jpg',
        dataCategory: 'cabin'
    },
    ges: {
        titleKey: 'gesProducts',
        heroImage: '/images/categories/solar-category.jpg',
        dataCategory: 'ges'
    },
    solar: { // Mapping 'solar' slug to 'ges' data and text
        titleKey: 'gesProducts',
        heroImage: '/images/categories/solar-category.jpg',
        dataCategory: 'ges'
    },
    battery: {
        titleKey: 'batteryPower',
        heroImage: '/images/categories/battery-category.jpg',
        dataCategory: 'battery'
    },
};

const locales = ['tr', 'en', 'ar'];
const categorySlugs = Object.keys(categoryConfig);

export function generateStaticParams() {
    return locales.flatMap((locale) =>
        categorySlugs.map((slug) => ({ locale, slug }))
    );
}

export default async function CategoryPage({ params }: Props) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const config = categoryConfig[slug];
    if (!config) {
        notFound();
    }

    let categoryProducts: Product[] = [];
    let errorMsg = '';
    try {
        categoryProducts = getProductsByCategory(config.dataCategory || slug);
    } catch (err) {
        errorMsg = err instanceof Error ? err.message : String(err);
    }

    // console.log('CategoryPage Debug:', { slug, config, productsCount: categoryProducts?.length });

    // If no products found (e.g. for 'charging' or 'battery' if not in products.ts yet), 
    // we might want to show empty state or handle it. 
    // For now, let's proceed, filtering might return empty array.

    const t = await getTranslations('products');
    const tDetails = await getTranslations('productDetails');

    if (errorMsg) {
        return (
            <div className="min-h-screen bg-white pt-32 px-4">
                <div className="container mx-auto max-w-xl bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                    <h1 className="text-2xl font-bold text-red-700 mb-4">Bir Hata Oluştu</h1>
                    <p className="text-red-600 mb-4">Ürünler yüklenirken bir sorun oluştu.</p>
                    <code className="block bg-black/5 p-4 rounded text-sm text-left break-all text-red-800">
                        {errorMsg}
                    </code>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Premium Category Hero - Enhanced Light Theme */}
            <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
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
                                    {t(`${config.titleKey}.title`)}
                                </div>
                            </div>

                            {/* Title with Gradient Accent */}
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-[1.05] mb-4 drop-shadow-sm">
                                {t(`${config.titleKey}.title`)}
                            </h1>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
                                {t(`${config.titleKey}.subtitle`)}
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
                                    {locale === 'ar' ? `${toArabicNumeral(categoryProducts.length, locale)} منتجات` : locale === 'en' ? `${categoryProducts.length} Products` : `${categoryProducts.length} Ürün`}
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
                                    src={config.heroImage}
                                    alt={t(`${config.titleKey}.title`)}
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {categoryProducts.map((product, idx) => {
                        const rawName = tDetails(`${product.slug}.title`) || tDetails(`${product.slug}.name`);
                        const looksLikeKey = (s: string) => s.startsWith('productDetails.') || /^[a-z0-9-]+\.[a-z]+$/.test(s);
                        const productName = (rawName && !looksLikeKey(String(rawName))) ? rawName : (product.name || product.slug);
                        const rawDesc = tDetails(`${product.slug}.description`);
                        const productDesc = (rawDesc && !looksLikeKey(String(rawDesc))) ? rawDesc : (product.description ?? '');

                        const isMiddleCard = categoryProducts.length >= 2 && idx === 1;
                        return (
                            <Link
                                key={product.slug}
                                href={`/${locale}/urunlerimiz/${product.slug}/`}
                                className={`group bg-white rounded-2xl lg:rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ring-1 ring-slate-100 hover:ring-blue-100 min-h-0 ${isMiddleCard ? 'lg:mx-2 lg:px-1' : ''}`}
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                {/* Sabit yükseklikte görsel alanı */}
                                <div className="relative w-full h-52 sm:h-56 lg:h-60 flex-shrink-0 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white transition-colors group-hover:from-blue-50/30 group-hover:to-white">
                                    <Image
                                        src={product.images?.[0] || '/images/products/placeholder.png'}
                                        alt={productName}
                                        fill
                                        className="object-contain p-5 sm:p-6 group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                <div className="p-5 sm:p-6 flex flex-col flex-grow min-h-0">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                                        {productName}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                                        {productDesc}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                                        <span>{t('viewDetails')}</span>
                                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-100 text-slate-600 group-hover:text-blue-600 flex items-center justify-center transition-colors flex-shrink-0">
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                    </div>
                    {/* <div className="col-span-3 text-center p-10 bg-gray-100 rounded-lg">
                        <p>Debug Mode: Products Rendering Disabled</p>
                    </div> */}
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
                            {t(`${config.titleKey}.subtitle`)}
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

    const config = categoryConfig[slug];
    const categoryName = config ? t(`${config.titleKey}.title`) : 'Kategori';

    return {
        title: `${categoryName} | Revium`,
        description: `Revium ${categoryName} - Enerji depolama çözümleri.`,
    };
}
