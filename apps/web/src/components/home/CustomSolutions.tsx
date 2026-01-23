'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Lightbulb, Layers, Settings, Headphones, Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CustomSolutions() {
    const t = useTranslations('customSolutions');
    const locale = useLocale();
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    const solutions = [
        {
            key: 'consulting',
            icon: Lightbulb,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            hoverBorder: 'hover:border-blue-400',
            accentColor: 'bg-blue-600'
        },
        {
            key: 'design',
            icon: Layers,
            color: 'text-amber-600',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200',
            hoverBorder: 'hover:border-amber-400',
            accentColor: 'bg-amber-500'
        },
        {
            key: 'projectManagement',
            icon: Settings,
            color: 'text-emerald-600',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-200',
            hoverBorder: 'hover:border-emerald-400',
            accentColor: 'bg-emerald-500'
        },
        {
            key: 'support',
            icon: Headphones,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200',
            hoverBorder: 'hover:border-purple-400',
            accentColor: 'bg-purple-500'
        },
    ];

    return (
        <section
            className="py-12 lg:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden"
            ref={sectionRef}
        >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(circle_at_1px_1px,_rgb(0,0,0)_1px,_transparent_0)] bg-[size:32px_32px]" />

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />

            <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className={cn(
                    "max-w-3xl mx-auto text-center mb-14 transition-all duration-700 transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                        <Sparkles className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                            {locale === 'tr' ? 'Profesyonel Hizmetler' : locale === 'ar' ? 'خدمات احترافية' : 'Professional Services'}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-5">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Cards Grid - Bento Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
                    {solutions.map((solution, index) => (
                        <div
                            key={solution.key}
                            className={cn(
                                "group relative rounded-2xl p-6 lg:p-8 bg-white border-2 transition-all duration-500 transform cursor-pointer",
                                solution.borderColor,
                                solution.hoverBorder,
                                "hover:shadow-xl hover:-translate-y-1",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            )}
                            style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
                            onMouseEnter={() => setActiveCard(index)}
                        >
                            {/* Top Row: Icon + Title */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className={cn(
                                    "shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                                    solution.bgColor
                                )}>
                                    <solution.icon className={cn("w-6 h-6", solution.color)} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                                        {t(`${solution.key}.title`)}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                                        {t(`${solution.key}.description`)}
                                    </p>
                                </div>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                                {(t.raw(`${solution.key}.items`) as string[]).map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <div className={cn("shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5", solution.bgColor)}>
                                            <Check className={cn("w-3 h-3", solution.color)} strokeWidth={2.5} />
                                        </div>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Hover Effect Line */}
                            <div className={cn(
                                "absolute bottom-0 left-4 right-4 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                solution.accentColor
                            )} />
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className={cn(
                    "text-center mt-12 transition-all duration-700 transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )} style={{ transitionDelay: '400ms' }}>
                    <Link
                        href={`/${locale}/iletisim/`}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 group"
                    >
                        <span>{t('requestConsultation')}</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
