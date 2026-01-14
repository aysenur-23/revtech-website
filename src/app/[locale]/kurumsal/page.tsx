'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Lightbulb, Users, Award, ArrowRight, Target, Eye, Battery, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Kurumsal() {
    const t = useTranslations('corporatePage');
    const locale = useLocale();
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) observer.observe(heroRef.current);
        return () => { if (heroRef.current) observer.unobserve(heroRef.current); };
    }, []);

    const valuesData = [
        { icon: Shield, title: t('values.reliability.title'), desc: t('values.reliability.description'), color: 'bg-blue-500' },
        { icon: Lightbulb, title: t('values.innovation.title'), desc: t('values.innovation.description'), color: 'bg-amber-500' },
        { icon: Users, title: t('values.customer.title'), desc: t('values.customer.description'), color: 'bg-emerald-500' },
        { icon: Award, title: t('values.quality.title'), desc: t('values.quality.description'), color: 'bg-purple-500' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero with Background Image */}
            <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden" ref={heroRef}>
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/features/sustainable.jpg"
                        alt="Sürdürülebilir Enerji"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
                </div>

                {/* Content */}
                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24 pb-16">
                    <div className={cn(
                        "transition-all duration-700 transform text-center",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">{t('badge')}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                            {t('heroTitle')}
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                            {t('heroSubtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="py-10 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="relative bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-10 lg:p-14">
                            <div className="relative aspect-square max-w-sm mx-auto">
                                <Image
                                    src="/images/categories/portable-power-new.png"
                                    alt="Revium Enerji Depolama Sistemi"
                                    fill
                                    className="object-contain drop-shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                                    {t('aboutTitle')}
                                </h2>
                                <p className="text-base text-slate-600 leading-relaxed">
                                    {t('aboutDescription')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-5 bg-white border border-slate-200 rounded-xl">
                                    <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center text-white mb-3">
                                        <Battery className="w-4 h-4" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-900 mb-1">{t('techTitle')}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">{t('techDesc')}</p>
                                </div>
                                <div className="p-5 bg-white border border-slate-200 rounded-xl">
                                    <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-white mb-3">
                                        <Zap className="w-4 h-4" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-900 mb-1">{t('integrationTitle')}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">{t('integrationDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-10 lg:py-16">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-white" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-lg font-bold text-slate-900">{t('missionTitle')}</h2>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">{t('missionDesc')}</p>
                        </div>
                        <div className="p-6 lg:p-8 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                                    <Eye className="w-5 h-5 text-white" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-lg font-bold text-slate-900">{t('visionTitle')}</h2>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">{t('visionDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-10 lg:py-16 bg-slate-50">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">{t('valuesTitle')}</h2>
                        <p className="text-sm text-slate-600 max-w-xl mx-auto">{t('valuesSubtitle')}</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {valuesData.map((value, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-all text-center">
                                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto", value.color)}>
                                    <value.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-sm font-semibold text-slate-900 mb-1">{value.title}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">{t('ctaTitle')}</h2>
                    <p className="text-base text-slate-600 mb-6 max-w-lg mx-auto">{t('ctaSubtitle')}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href={`/${locale}/iletisim/`}
                            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                        >
                            {t('ctaButton1')}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href={`/${locale}/urunlerimiz/`}
                            className="px-8 py-4 bg-white text-slate-900 border border-slate-300 rounded-xl font-semibold hover:bg-slate-50 transition-all"
                        >
                            {t('ctaButton2')}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
