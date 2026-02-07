'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProductCards() {
    const t = useTranslations('products');
    const locale = useLocale();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const categories = [
        {
            key: 'portablePower',
            slug: 'portable',
            image: '/images/categories/portable-power-new.png',
            priority: true,
            defaultTitle: 'Taşınabilir Güç Paketleri',
        },
        {
            key: 'vehiclePower',
            slug: 'vehicle',
            image: '/images/products/vehicle-category-new.jpg',
            priority: true,
            defaultTitle: 'Araç Tipi Güç Paketleri',
        },
        {
            key: 'charging',
            slug: 'charging',
            image: '/images/categories/charging-category.webp',
            priority: true,
            defaultTitle: 'Şarj İstasyonları',
        },
        {
            key: 'cabinPower',
            slug: 'cabin',
            image: '/images/categories/cabin-category.png',
            priority: false,
            defaultTitle: 'Kabin Tipi Güç Paketleri',
        },
        {
            key: 'gesProducts',
            slug: 'ges',
            image: '/images/categories/solar-category.jpg',
            priority: false,
            defaultTitle: 'Solar Ürünler',
        },
        {
            key: 'batteryPower',
            slug: 'battery',
            image: '/images/categories/battery-category.jpg',
            priority: false,
            defaultTitle: 'Batarya Sistemleri',
        },
    ];

    return (
        <section className="py-10 lg:py-16 bg-white overflow-hidden" id="products-section">
            <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className={cn(
                    "mb-8 lg:mb-10 text-center transition-all duration-1000 ease-out transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )} ref={sectionRef}>
                    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                        {locale === 'tr' ? 'REVİUM ENERJİ' : locale === 'ar' ? 'ريفيوم للطاقة' : 'REVIUM ENERGY'}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                        {t('categories.title')}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {categories.map((category, index) => <CategoryCard key={category.slug} category={category} index={index} locale={locale} t={t} />)}
                </div>
            </div>
        </section>
    );
}

function CategoryCard({ category, index, locale, t }: { category: any, index: number, locale: string, t: any }) {
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
            href={`/${locale}/urunlerimiz/kategori/${category.slug}/`}
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
                    alt={t.has(`${category.key}.title`) ? t(`${category.key}.title`) : category.defaultTitle}
                    src={category.image}
                    fill
                    className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 brightness-105"
                    priority={category.priority}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="absolute bottom-3 left-6 sm:bottom-5 sm:left-8 z-20 flex flex-col items-start text-left max-w-[90%] pointer-events-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-blue-300 transition-colors duration-300 drop-shadow-lg">
                    {t.has(`${category.key}.title`) ? t(`${category.key}.title`) : category.defaultTitle}
                </h3>

                <div className="mt-4 flex items-center gap-2.5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <div className="w-9 h-9 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-lg backdrop-blur-sm">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest drop-shadow">
                        {t('viewDetails')}
                    </span>
                </div>
            </div>
        </Link>
    );
}
