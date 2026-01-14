import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ locale: string; slug: string }>;
}

const categoryData: Record<string, { titleKey: string; products: { slug: string; name: string; image: string; description: string }[] }> = {
    portable: {
        titleKey: 'portablePower',
        products: [
            { slug: 'revium-2-7-kwh', name: 'Revium 2.7 kWh Depolanabilir Güç Paketi', image: '/images/products/2-7kwh-a-1.png', description: 'Taşınabilir enerji depolama çözümlerinde yeni standart.' },
            { slug: 'revium-2-7-kwh-bag', name: 'Revium 2.7 kWh Çanta Tip Güç Paketi', image: '/images/products/2-7kwh-b-1.png', description: 'Hafif ve güçlü çanta tipi taşınabilir enerji.' },
            { slug: 'revium-5-4-kwh', name: 'Revium 5.4 kWh Depolanabilir Güç Paketi', image: '/images/products/5-4kwh-h-1.png', description: 'Yüksek kapasiteli, profesyonel seri taşınabilir güç.' },
        ],
    },
    vehicle: {
        titleKey: 'vehiclePower',
        products: [
            { slug: 'revium-hilux-power-pack', name: 'Revium Hilux Güç Paketi', image: '/images/products/hilux-21-6kwh-1.png', description: 'Araç üstü profesyonel enerji çözümü.' },
            { slug: 'revium-voltwagon', name: 'Revium VoltWagon', image: '/images/products/solar-voltwagon.png', description: 'Mobil güneş enerjili römork sistemi.' },
        ],
    },
    cabin: {
        titleKey: 'cabinPower',
        products: [
            { slug: 'revium-storage-battery', name: 'Revium Storage Battery', image: '/images/products/stack-21-6kwh-1.png', description: 'Modüler batarya sistemi (2.7 / 5.4 kWh).' },
            { slug: 'revium-power-cabinet', name: 'Revium Güç Kabini', image: '/images/products/cabin-power.png', description: 'Endüstriyel tek kabin enerji depolama sistemi.' },
            { slug: 'revium-power-layer', name: 'Revium Güç Katmanı', image: '/images/products/stack-21-6kwh-1.png', description: 'Ölçeklenebilir endüstriyel batarya ünitesi.' },
            { slug: 'revium-gridpack', name: 'Revium Gridpack', image: '/images/products/gridpack-100.png', description: 'Şebeke ölçekli konteyner tip enerji depolama.' },
        ],
    },
    ges: {
        titleKey: 'gesProducts',
        products: [
            { slug: 'revium-powerstation-series', name: 'Revium Powerstation Serisi', image: '/images/products/ges-power-station.png', description: 'Konteyner tipi GES entegre depolama.' },
            { slug: 'revium-solarport', name: 'Revium Solarport', image: '/images/products/solarport-duo.png', description: 'Solar carport ve EV şarj entegrasyonu.' },
        ],
    },
};

export const dynamic = 'force-dynamic';

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
            {/* Header Section - Modern & Premium */}
            <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
                {/* sophisticated background layer */}
                <div className="absolute inset-0 bg-slate-900 -z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,_rgba(16,185,129,0.1),transparent_50%)] -z-10" />
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/hero/grid.png')] bg-repeat -z-10" />

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-widest">{t(`${category.titleKey}.title`)}</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                            {t(`${category.titleKey}.title`)}
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl font-medium opacity-90">
                            {t(`${category.titleKey}.subtitle`)}
                        </p>
                    </div>
                </div>

                {/* Decorative bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
            </section>

            {/* Category Products Grid */}
            <section className="py-12 lg:py-20 bg-slate-50">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.products.map((product) => (
                            <Link
                                key={product.slug}
                                href={`/${locale}/urunlerimiz/${product.slug}/`}
                                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                            >
                                <div className="aspect-square relative p-6 flex items-center justify-center bg-slate-50 transition-colors group-hover:bg-white">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-semibold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {product.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-slate-600 group-hover:text-blue-600 transition-colors">
                                        <span>{t('viewDetails')}</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Light Theme */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                            {locale === 'tr' ? 'Bize Ulaşın' : locale === 'en' ? 'Get In Touch' : 'اتصل بنا'}
                        </h2>
                        <p className="text-base text-slate-600 mb-8 max-w-lg mx-auto">
                            {t(`${category.titleKey}.subtitle`)}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={`/${locale}/iletisim/`}
                                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                            >
                                {locale === 'tr' ? 'İletişime Geç' : locale === 'en' ? 'Contact Us' : 'تواصل معنا'}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href={`/${locale}/fiyat-teklifi/`}
                                className="px-8 py-4 bg-white text-slate-900 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 transition-all"
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
