'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Battery, Backpack, Move, Plug } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FeaturedProject() {
    const t = useTranslations('featuredProject');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    const features = [
        { icon: Battery, title: t('capacity') },
        { icon: Backpack, title: t('bagDesign') },
        { icon: Move, title: t('portable') },
        { icon: Plug, title: t('quickSetup') },
    ];

    const stats = [
        { value: t('capacityValue'), label: t('energyCapacity') },
        { value: t('weightValue'), label: t('weight') },
        { value: t('fastCharging'), label: t('chargingFeature') },
    ];

    return (
        <section className="py-12 lg:py-20 bg-white overflow-hidden" ref={sectionRef}>
            <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Product Image */}
                    <div className={cn(
                        "relative group order-2 lg:order-1 transition-all duration-700 transform",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        <div className="relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-2xl">
                            <div className="aspect-[4/5] relative flex items-center justify-center bg-slate-50">
                                {/* Watermark Logo - Behind */}
                                <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20 select-none">
                                    <div className="w-[70%] h-[70%] relative">
                                        <Image
                                            src="/favicon.png"
                                            alt=""
                                            fill
                                            className="object-contain brightness-0 grayscale opacity-50"
                                        />
                                    </div>
                                </div>

                                <Image
                                    alt={t('imageAlt')}
                                    src="/images/hero/revium-hero-2-7kwh.png"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 z-10 mix-blend-multiply"
                                    loading="lazy"
                                />

                                {/* Capacity Badge */}
                                <div className="absolute bottom-8 left-8 z-30">
                                    <div className="px-5 py-2.5 bg-white shadow-xl rounded-2xl border border-slate-100">
                                        <span className="text-slate-900 font-bold tracking-tight text-base italic">
                                            {t('capacityValue')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className={cn(
                        "flex flex-col justify-center order-1 lg:order-2 transition-all duration-700 delay-100 transform",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}>
                        <div className="space-y-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-50 border border-blue-100">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">
                                        {t('badge')}
                                    </span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
                                    {t('title')}
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    {t('description')}
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl group/item hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                                        <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:border-blue-600 transition-all shadow-sm">
                                            <feature.icon className="w-5 h-5" strokeWidth={1.5} />
                                        </div>
                                        <span className="text-sm font-bold text-slate-900">{feature.title}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Stats Bar - Light Theme */}
                            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-lg">
                                <div className="grid grid-cols-3 gap-4 divide-x divide-white/20">
                                    {stats.map((stat, idx) => (
                                        <div key={idx} className="flex flex-col items-center justify-center px-2 first:pl-0 last:pr-0">
                                            <span className="text-xl sm:text-2xl font-bold text-white mb-0.5 tracking-tight">{stat.value}</span>
                                            <span className="text-[9px] font-bold text-blue-100 uppercase tracking-wider text-center">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
