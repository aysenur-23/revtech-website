'use client';

import { use } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    ArrowRight, Check, Sun, Wrench, Zap, Shield,
    Building2, Battery, Settings, Search, Layout,
    Truck, CheckCircle, Headphones, Phone, Mail
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
        image: '/images/services/ges-service-new.png',
        whyUsIcons: [Sun, Wrench, Zap, Shield],
    },
    'endustriyel-kurulum': {
        key: 'industrialInstallation',
        image: '/images/services/industrial-service-new.png',
        whyUsIcons: [Building2, Battery, Settings, Shield],
    },
};

export default function ServiceDetailPage({ params }: Props) {
    const { locale, slug } = use(params);
    const t = useTranslations('services');

    const service = servicesData[slug];
    if (!service) {
        notFound();
    }

    const features = t.raw(`${service.key}.features`) as string[];
    const whyUsItems = t.raw(`${service.key}.whyUs.items`) as { title: string; description: string }[];
    const processSteps = t.raw(`${service.key}.process.steps`) as { title: string; description: string }[];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Light Theme */}
            <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/20">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                        {/* Left: Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-emerald-50 border border-emerald-100">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                                    {t('serviceTag')}
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-5 leading-[1.15]">
                                {t(`${service.key}.title`)}
                            </h1>

                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                                {t(`${service.key}.subtitle`)}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`/${locale}/fiyat-teklifi/`}
                                    className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25"
                                >
                                    {t('getQuote')}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href={`/${locale}/iletisim/`}
                                    className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center"
                                >
                                    {t('freeConsultation')}
                                </Link>
                            </div>
                        </div>

                        {/* Right: Service Image Showcase */}
                        <div className="relative">
                            <div className="relative aspect-[4/3] w-full max-w-[550px] mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-slate-100 to-blue-50 rounded-2xl" />
                                <div className="absolute inset-2 rounded-xl overflow-hidden shadow-xl">
                                    <Image
                                        src={service.image}
                                        alt={t(`${service.key}.title`)}
                                        fill
                                        className="object-cover"
                                        priority
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

                    <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 lg:p-10">
                        <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">{t('scope')}</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 w-full sm:w-auto sm:max-w-xs">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                        <Check className="h-4 w-4 text-emerald-600" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section - Stylish Glassmorphism */}
            <section className="py-20 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-50/50" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-50 border border-blue-100">
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{t('whyUs.title')}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heavy text-slate-900 tracking-tight leading-none mb-6">
                            {t(`${service.key}.whyUs.title`)}
                        </h2>
                        <p className="text-lg text-slate-500 font-medium">
                            {t(`${service.key}.whyUs.description`)}
                        </p>
                    </div>

                    <div className={cn(
                        "grid grid-cols-1 sm:grid-cols-2 gap-8",
                        whyUsItems.length === 3 ? "lg:grid-cols-3 max-w-5xl mx-auto" : "lg:grid-cols-4"
                    )}>
                        {whyUsItems.map((item, index) => {
                            const Icon = service.whyUsIcons[index] || Check;
                            return (
                                <div
                                    key={index}
                                    className="p-10 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-500 hover:-translate-y-2 group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-12 lg:py-20">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-heavy text-slate-900 tracking-tight leading-none mb-6">
                            {t(`${service.key}.process.title`)}
                        </h2>
                        <p className="text-lg text-slate-500 font-medium">
                            {t(`${service.key}.process.description`)}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                                        {index + 1}
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

            {/* CTA Section - Light Theme */}
            <section className="py-16 lg:py-24 bg-slate-50">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 lg:p-16 text-center shadow-sm">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                            {t('ctaTitle')}
                        </h2>
                        <p className="text-base text-slate-600 mb-8 max-w-lg mx-auto">
                            {t('ctaDescription')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={`/${locale}/iletisim/`}
                                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                            >
                                {t('freeConsultation')}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href={`/${locale}/fiyat-teklifi/`}
                                className="px-8 py-4 bg-white text-slate-900 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 transition-all"
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
