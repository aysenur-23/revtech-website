'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Battery, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PortablePower() {
    const t = useTranslations('portablePower');
    const locale = useLocale();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    const features = [
        { key: 'capacity', value: locale === 'ar' ? '٥.٤ كيلوواط ساعة' : '5.4 kWh', icon: Battery },
        { key: 'output', value: locale === 'ar' ? '٣٠٠٠ واط' : '3000W', icon: Zap },
        { key: 'pvCharging', value: locale === 'ar' ? '١٥٠٠ واط' : '1500W', icon: Gauge },
        { key: 'protection', value: locale === 'ar' ? 'نظام إدارة بطارية متطور' : 'Advanced BMS', icon: ShieldCheck }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white overflow-hidden" ref={sectionRef}>
            <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className={cn(
                    "relative bg-slate-50 rounded-3xl overflow-hidden transition-all duration-1000 transform border border-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.05)]",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}>
                    {/* Background Accents - Subtle Blue Tints */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />

                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Text Content */}
                        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-20">
                            <div className={cn(
                                "space-y-10 transition-all duration-700 delay-300 transform",
                                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                            )}>
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-100/50 border border-blue-200/50">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                        <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">
                                            {t('badge') || 'YÜKSEK KAPASİTE'}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                                        {t('title1')} <br />
                                        <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">{t('title2')}</span>
                                    </h2>
                                    <p className="text-lg text-slate-600 max-w-md leading-relaxed font-medium">
                                        {t('subtitle')}
                                    </p>
                                </div>

                                {/* Refined Feature Grid with Description */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {features.map((feature, idx) => (
                                        <div key={idx} className="group flex flex-col gap-3">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shadow-sm">
                                                    <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <div className="text-base font-bold text-slate-900 tracking-tight">
                                                    {t(feature.key)}
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500 leading-normal pl-1">
                                                {t(`${feature.key}Desc`)}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 flex flex-col sm:flex-row items-center gap-8">
                                    <Link
                                        href={`/${locale}/urunlerimiz/revium-5-4-kwh/`}
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all transform hover:-translate-y-1 hover:shadow-2xl"
                                    >
                                        {t('viewDetails')}
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>

                                    <Link
                                        href={`/${locale}/fiyat-teklifi/`}
                                        className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-blue-600 pb-1"
                                    >
                                        {t('getQuote')}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Image Showcase - Clean Gradient Staging */}
                        <div className="relative min-h-[400px] lg:min-h-full flex items-center justify-center bg-white order-1 lg:order-2">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/10 via-transparent to-white pointer-events-none" />

                            <div className={cn(
                                "relative z-10 w-[85%] transition-all duration-1000 delay-500 transform",
                                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            )}>
                                <div className="relative group">
                                    {/* Watermark Logo - Behind */}
                                    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20 select-none overflow-visible">
                                        <div className="w-[230%] h-[230%] relative">
                                            <Image
                                                src="/favicon.png"
                                                alt=""
                                                fill
                                                className="object-contain brightness-0 grayscale opacity-50"
                                                loading="lazy"
                                                sizes="70vw"
                                            />
                                        </div>
                                    </div>

                                    <Image
                                        alt={t.has('imageAlt') ? t('imageAlt') : (locale === 'ar' ? 'طاقة ريفيوم المحمولة ٥.٤ كيلوواط (انتاج عالي)' : 'Revium 5.4 kWh Portable (High Output)')}
                                        src="/images/products/5-4kwh-h-1.webp"
                                        width={750}
                                        height={600}
                                        className="relative z-10 w-full h-auto transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                        loading="lazy"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-4/5 h-1/5 bg-slate-900/5 blur-[40px] rounded-[100%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
