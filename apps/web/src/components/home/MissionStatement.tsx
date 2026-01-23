'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MissionStatement() {
    const t = useTranslations('mission');
    const locale = useLocale();
    const [isVisible, setIsVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const sectionRef = useRef<HTMLDivElement>(null);

    const visionText = locale === 'tr'
        ? 'Performans, dayanıklılık ve özgürlük — enerjiyi yeniden tanımlıyoruz.'
        : locale === 'ar'
            ? 'الأداء والمتانة والحرية — نحن نعيد تعريف الطاقة.'
            : 'Performance, durability, and freedom — we are redefining energy.';

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    // Typewriter effect
    useEffect(() => {
        if (!isVisible) return;

        let index = 0;
        const timer = setInterval(() => {
            if (index <= visionText.length) {
                setDisplayedText(visionText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 35); // Speed of typing

        return () => clearInterval(timer);
    }, [isVisible, visionText]);

    return (
        <section className="py-20 lg:py-32 bg-slate-50 border-b border-slate-200" ref={sectionRef}>
            <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <div className="text-center space-y-12">
                    <div className="space-y-6">
                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase block">
                            {locale === 'tr' ? 'VİZYONUMUZ' : locale === 'ar' ? 'رؤيتنا' : 'OUR VISION'}
                        </span>

                        {/* Typewriter Text Container */}
                        <div className="min-h-[3.5rem] sm:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                                <span className={cn(
                                    "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent transition-opacity duration-300",
                                    isVisible ? "opacity-100" : "opacity-0"
                                )}>
                                    {displayedText}
                                </span>
                                {/* Blinking Cursor */}
                                <span className={cn(
                                    "inline-block w-[3px] h-[1em] bg-blue-600 ml-1 align-middle",
                                    isVisible && displayedText.length < visionText.length ? "animate-pulse" : "opacity-0"
                                )} />
                            </h2>
                        </div>
                    </div>
                    <div className="pt-2">
                        <Link
                            href={`/${locale}/kurumsal/`}
                            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-slate-200 hover:bg-blue-600 hover:shadow-blue-100 transform hover:-translate-y-1"
                        >
                            {t('button')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
