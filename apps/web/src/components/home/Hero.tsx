'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const HERO_POSTER = '/images/hero/revium-hero-2-7kwh.jpg';

export default function Hero() {
    const t = useTranslations('hero');
    const locale = useLocale();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoPlaying, setVideoPlaying] = useState(false);

    // Videoyu hemen yükle ve oynat; mobilde poster'ı videoya geçince kaldır
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.setAttribute('playsinline', 'true');
        video.setAttribute('webkit-playsinline', 'true');
        video.muted = true;
        video.preload = 'auto';
        video.load();

        const onPlaying = () => setVideoPlaying(true);
        video.addEventListener('playing', onPlaying);

        const playPromise = video.play();
        if (playPromise && typeof playPromise.then === 'function') {
            playPromise.then(() => setVideoPlaying(true)).catch(() => {});
        }

        return () => video.removeEventListener('playing', onPlaying);
    }, []);

    return (
        <section className="relative w-[100vw] min-h-[100vh] sm:min-h-[120vh] lg:min-h-[130vh] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-black -mt-20 flex flex-col items-center justify-center overflow-hidden">
            {/* Background: Video - mobilde boyut/konum optimize, masaüstünde mevcut görünüm */}
            <div className="absolute inset-0 sm:inset-[-20px] w-full sm:w-[calc(100%+40px)] h-full sm:h-[calc(100%+40px)]">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    disablePictureInPicture
                    disableRemotePlayback
                    preload="auto"
                    poster={HERO_POSTER}
                    className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-top sm:object-center scale-[1.2] sm:scale-[1.15] origin-center"
                >
                    <source src="/videos/hero-new.mp4" type="video/mp4" />
                </video>
                {/* Poster overlay: videoya geçer geçmez kalkar */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-top sm:bg-center transition-opacity duration-300 pointer-events-none scale-[1.2] sm:scale-[1.15] origin-center"
                    style={{
                        backgroundImage: `url(${HERO_POSTER})`,
                        opacity: videoPlaying ? 0 : 1,
                        zIndex: 1,
                    }}
                    aria-hidden
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 sm:inset-[-20px] bg-neutral-900/40" style={{ zIndex: 2 }} />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none w-full h-full" style={{ zIndex: 3 }}>
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500/30 to-teal-500/20 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-gradient"
                        style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-30 container px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-4xl mx-auto">
                    <div className="space-y-4 sm:space-y-6 text-center">
                        <div className="space-y-2 sm:space-y-3">
                            <h1
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-[280px] sm:max-w-none mx-auto"
                                style={{ textShadow: '0 6px 20px rgba(0,0,0,0.9), 0 3px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.7)' }}
                            >
                                <span className="block">{t('title1')}</span>
                                <span
                                    className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                                    style={{ textShadow: 'none', filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.6)) drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}
                                >
                                    {t('title2')}
                                </span>
                            </h1>
                            <p
                                className="text-xs sm:text-sm md:text-base text-white/90 max-w-lg mx-auto px-4 leading-relaxed"
                                style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.7)' }}
                            >
                                {t('description')}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center px-4">
                            <Link
                                href={`/${locale}/urunlerimiz/`}
                                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:scale-105"
                            >
                                {t('exploreProducts')}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link
                                href={`/${locale}/fiyat-teklifi/`}
                                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-white/90 text-white hover:bg-white/10 hover:border-white font-semibold rounded-lg transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:scale-105 backdrop-blur-sm"
                            >
                                {t('getQuote')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
