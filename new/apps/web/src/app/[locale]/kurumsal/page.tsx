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
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">{t('badge')}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
                            {t('heroTitle')}
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-lg">
                            {t('heroSubtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image */}
                        <div className="relative bg-gradient-to-br from-blue-50 to-slate-100 rounded-3xl p-10 lg:p-16 border border-slate-200">
                            <div className="relative aspect-square max-w-md mx-auto">
                                <Image
                                    src="/images/corporate/about-visual.webp"
                                    alt="Revium Enerji Depolama Sistemi"
                                    fill
                                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                                    {t('aboutTitle')}
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {t('aboutDescription')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30">
                                        <Battery className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t('techTitle')}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{t('techDesc')}</p>
                                </div>
                                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-500/30">
                                        <Zap className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t('integrationTitle')}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{t('integrationDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-600/20">
                                    <Target className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">{t('missionTitle')}</h2>
                            </div>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{t('missionDesc')}</p>
                        </div>
                        <div className="p-8 lg:p-12 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-xl shadow-emerald-500/20">
                                    <Eye className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">{t('visionTitle')}</h2>
                            </div>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{t('visionDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">{t('valuesTitle')}</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">{t('valuesSubtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valuesData.map((value, idx) => (
                            <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg transition-transform group-hover:scale-110", value.color)}>
                                    <value.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
                    <div className="bg-slate-900 rounded-3xl p-10 sm:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
                        {/* Glow Gradient */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />

                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">{t('ctaTitle')}</h2>
                            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto font-medium">{t('ctaSubtitle')}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={`/${locale}/iletisim/`}
                                    className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-600/30 hover:scale-105"
                                >
                                    {t('ctaButton1')}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href={`/${locale}/urunlerimiz/`}
                                    className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-all hover:scale-105"
                                >
                                    {t('ctaButton2')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
