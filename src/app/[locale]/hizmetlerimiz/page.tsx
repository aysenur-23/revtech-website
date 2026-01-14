import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ServiceCards from '@/components/services/ServiceCards';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('services');



    return (
        <div className="min-h-screen bg-white pt-20 lg:pt-24">
            {/* Services Grid */}
            <ServiceCards />
        </div>
    );
}

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'services' });
    return {
        title: `${t('title')} | Revium`,
        description: t('subtitle'),
    };
}
