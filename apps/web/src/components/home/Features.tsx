'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Zap, Target, Rocket } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Features() {
    const t = useTranslations('features');
    const locale = useLocale();
    const bgRef = useRef<HTMLDivElement>(null);

    // Custom parallax effect
    useEffect(() => {
        const handleScroll = () => {
            if (!bgRef.current) return;
            const scrolled = window.scrollY;
            const section = bgRef.current.parentElement;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            // Only animate when visible or close to visible
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const speed = 0.3;
                const offset = (scrolled * speed) % 200;
                bgRef.current.style.transform = `translateY(${offset}px) scale(1.15)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: Zap,
            title: t('performance.title'),
            description: t('performance.description'),
        },
        {
            icon: Target,
            title: t('durability.title'),
            description: t('durability.description'),
        },
        {
            icon: Rocket,
            title: t('speed.title'),
            description: t('speed.description'),
        },
    ];

    return (
        <section aria-labelledby="features-heading" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Parallax Background using CSS for 'fixed' support without Image component conflicts */}
            <div
                className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage: 'url(/images/why-revium-bg.webp)',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Light Overlay to keep it readable but show image faintly */}
                <div className="absolute inset-0 bg-white/90 supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:backdrop-blur-sm" />
            </div>

            <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                <div className="text-center space-y-8 mb-12 lg:mb-16">
                    <h2
                        id="features-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        <span className="block mb-2">{t('title1')}</span>
                        <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                            {t('title2')}
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="group">
                            <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-3xl p-8 sm:p-10 text-center hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                                <div className="mx-auto mb-8 relative">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 shadow-xl shadow-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-bold border border-white">
                                        0{index + 1}
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed font-medium group-hover:text-slate-700 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
