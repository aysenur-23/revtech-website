'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Services() {
    const t = useTranslations('services');
    const locale = useLocale();
    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        return () => { if (headerRef.current) observer.unobserve(headerRef.current); };
    }, []);

    const services = [
        {
            key: 'gesInstallation',
            slug: 'ges-kurulumu',
            image: '/images/services/ges-service-new.webp',
        },
        {
            key: 'industrialInstallation',
            slug: 'endustriyel-kurulum',
            image: '/images/services/industrial-service-new.webp',
        },
    ];

    return (
        <section className="py-10 lg:py-16 bg-white overflow-hidden" id="services-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className={cn(
                    "text-center max-w-3xl mx-auto mb-8 lg:mb-10 transition-all duration-1000 ease-out transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )} ref={headerRef}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        {t('title')}
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full opacity-20" />
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
                    {services.map((service, index) => (
                        <AnimatedServiceCard
                            key={service.slug}
                            service={service}
                            index={index}
                            locale={locale}
                            t={t}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function AnimatedServiceCard({ service, index, locale, t }: { service: any, index: number, locale: string, t: any }) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
    }, []);

    return (
        <Link
            ref={cardRef}
            href={`/${locale}/hizmetlerimiz/${service.slug}/`}
            className={cn(
                "group relative aspect-[1.35/1] flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 shadow-md transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform bg-white",
                isVisible
                    ? "opacity-100 translate-y-0 translate-x-0 scale-100"
                    : cn(
                        "opacity-0 scale-95",
                        index % 2 === 0 ? "-translate-x-12" : "translate-x-12"
                    ),
                "hover:z-10 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200"
            )}
        >
            {/* Full-Bleed Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
                <Image
                    alt={t(`${service.key}.title`)}
                    src={service.image}
                    fill
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="absolute bottom-5 left-6 sm:bottom-7 sm:left-8 z-20 flex flex-col items-start text-left max-w-[90%] pointer-events-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-blue-300 transition-colors duration-300 drop-shadow-lg">
                    {t(`${service.key}.title`)}
                </h3>

                <div className="mt-4 flex items-center gap-2.5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <div className="w-9 h-9 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-lg backdrop-blur-sm">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest drop-shadow">
                        {locale === 'tr' ? 'Detaylar' : locale === 'ar' ? 'التفاصيل' : 'Details'}
                    </span>
                </div>
            </div>
        </Link>
    );
}
