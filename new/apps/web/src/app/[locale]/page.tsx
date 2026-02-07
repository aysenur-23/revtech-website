import { setRequestLocale, getTranslations } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import MissionStatement from '@/components/home/MissionStatement';
import Features from '@/components/home/Features';
import ProductCards from '@/components/home/ProductCards';
import PortablePower from '@/components/home/PortablePower';
import Services from '@/components/home/Services';
import CustomSolutions from '@/components/home/CustomSolutions';
import FeaturedProject from '@/components/home/FeaturedProject';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="relative">
            {/* Hero Section - Unscaled */}
            <Hero />

            {/* Main Content */}
            <div className="relative">
                {/* Mission Statement */}
                <section className="relative z-10 overflow-hidden">
                    <MissionStatement />
                </section>

                {/* Product Categories */}
                <section className="relative z-40 overflow-hidden">
                    <ProductCards />
                </section>

                {/* Portable Power Showcase */}
                <section className="relative z-50 overflow-hidden">
                    <PortablePower />
                </section>

                {/* Services */}
                <section className="relative z-60 overflow-hidden">
                    <Services />
                </section>

                {/* Features (Neden Revium) - Moved Above Featured Project */}
                <section className="relative z-20 overflow-hidden">
                    <Features />
                </section>

                {/* Featured Project */}
                <section className="relative z-80 overflow-hidden">
                    <FeaturedProject />
                </section>

                {/* Custom Solutions - Moved to Bottom */}
                <section className="relative z-70 overflow-hidden">
                    <CustomSolutions />
                </section>
            </div>
        </div>
    );
}

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('home.title'),
        description: t('home.description'),
    };
}
