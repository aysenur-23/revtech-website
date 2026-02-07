import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    ArrowRight, Check, Sun, Wrench, Zap, Shield,
    Building2, Battery, Settings, Search, Layout,
    Truck, CheckCircle, Headphones, Phone, Mail
} from 'lucide-react';
import { toArabicNumeral } from '@/lib/format';

interface Props {
    params: Promise<{ locale: string; slug: string }>;
}

const servicesData: Record<string, {
    key: string;
    image: string;
    whyUsIcons: any[];
}> = {
    'ges-kurulumu': {
        key: 'gesInstallation',
        image: '/images/services/ges-service-new.webp',
        whyUsIcons: [Sun, Wrench, Zap, Shield],
    },
    'endustriyel-kurulum': {
        key: 'industrialInstallation',
        image: '/images/services/industrial-service-new.webp',
        whyUsIcons: [Building2, Battery, Settings, Shield],
    },
};

const locales = ['tr', 'en', 'ar'];
const serviceSlugs = Object.keys(servicesData);

export function generateStaticParams() {
    return locales.flatMap((locale) =>
        serviceSlugs.map((slug) => ({ locale, slug }))
    );
}

export default async function ServiceDetailPage({ params }: Props) {
    const { locale, slug } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('services');

    const service = servicesData[slug];
    if (!service) {
        notFound();
    }

    const features = t.raw(`${service.key}.features`) as string[];
    const whyUsItems = t.raw(`${service.key}.whyUs.items`) as { title: string; description: string }[];
    const processSteps = t.raw(`${service.key}.process.steps`) as { title: string; description: string }[];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero - premium hizmet sayfası girişi */}
            <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
                {/* Arka plan: hafif grid + yumuşak blur */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" aria-hidden />
                    <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-blue-100/30 rounded-full blur-[110px] -translate-y-1/4 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-emerald-100/20 rounded-full blur-[90px] translate-y-1/4 -translate-x-1/4" />
                </div>

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Sol: İçerik */}
                        <div className="space-y-6">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-blue-50/90 border border-blue-100 shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                                        {t('serviceTag')}
                                    </span>
                                </div>
                                <div className="h-0.5 w-14 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-6" />
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.12]">
                                {t(`${service.key}.title`)}
                            </h1>

                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-lg">
                                {t(`${service.key}.subtitle`)}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Link
                                    href={`/${locale}/fiyat-teklifi/`}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
                                >
                                    {t('getQuote')}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href={`/${locale}/iletisim/`}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all"
                                >
                                    {t('freeConsultation')}
                                </Link>
                            </div>
                        </div>

                        {/* Sağ: Hizmet görseli */}
                        <div className="relative order-first lg:order-last">
                            <div className="relative aspect-[4/3] w-full max-w-[560px] mx-auto">
                                <div className="absolute -inset-1 bg-gradient-to-br from-blue-100/50 via-slate-100 to-emerald-100/50 rounded-2xl blur-sm" />
                                <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200/50 bg-white">
                                    <Image
                                        src={service.image}
                                        alt={t(`${service.key}.title`)}
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 560px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Service Section */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                            {t(`${service.key}.title`)}
                        </h2>
                        <p className="text-base text-slate-600 leading-relaxed">
                            {t(`${service.key}.description`)}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center tracking-tight">{t('scope')}</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all w-full sm:w-auto sm:max-w-xs">
                                    <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us - ürün sayfaları Neden Revium ile uyumlu kartlar */}
            <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-100 border border-blue-200">
                            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">{t('whyUs.title')}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                            {t(`${service.key}.whyUs.title`)}
                        </h2>
                        <p className="text-base text-slate-700 font-medium">
                            {t(`${service.key}.whyUs.description`)}
                        </p>
                    </div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 ${whyUsItems.length === 3 ? 'lg:grid-cols-3 max-w-5xl mx-auto' : 'lg:grid-cols-4'}`}>
                        {whyUsItems.map((item, index) => {
                            const Icon = service.whyUsIcons[index] || Check;
                            return (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 text-center"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                                        <Icon className="h-7 w-7 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process - tutarlı bölüm başlığı ve kart stili */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                            {t(`${service.key}.process.title`)}
                        </h2>
                        <p className="text-base text-slate-700 font-medium">
                            {t(`${service.key}.process.description`)}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="relative p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                                        {toArabicNumeral(index + 1, locale)}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - yüksek kontrast, ürün sayfaları CTA ile uyumlu */}
            <section className="py-16 lg:py-24 bg-white border-t border-slate-200">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 lg:p-16 text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                            {t('ctaTitle')}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-lg mx-auto">
                            {t('ctaDescription')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={`/${locale}/iletisim/`}
                                className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                            >
                                {t('freeConsultation')}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href={`/${locale}/fiyat-teklifi/`}
                                className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-all"
                            >
                                {t('requestQuote')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
