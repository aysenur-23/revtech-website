import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server'; // We need this for server-side translations if needed, or stick to passed dictionary

// Helper to format numbers to Arabic numerals if locale is 'ar'
function formatNumber(value: string | number, locale: string): string {
    const str = value.toString();
    if (locale !== 'ar') return str;
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return str.replace(/\d/g, (d) => arabicDigits[parseInt(d)]);
}

import Image from 'next/image';
import Link from 'next/link';
import {
    Battery, Zap, Sun, Shield, ArrowRight, CheckCircle, Tent, TriangleAlert,
    Plane, Mountain, Hammer, Laptop, Globe, Leaf, Factory, Briefcase,
    Building2, Hospital, Server, RadioTower, Monitor, Snowflake,
    Lightbulb, Tv, Home, Clock, Bus
} from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ locale: string; slug: string }>;
}

// Tüm ürünlerin detaylı verileri
const products: Record<string, {
    name: string;
    modelId: string;
    capacity: string;
    power: string;
    image: string;
    categoryTitle: string;
    features: string[];
    specs: { label: string; value: string }[];
    description?: string;
    usageAreas: { label: string; icon: any }[];
    runtimeStats?: { label: string; power: string; duration: string; icon: string }[];
    runtimeSummary?: string;
}> = {
    'revium-2-7-kwh': {
        name: 'Revium 2.7 kWh Çanta Tipi Güç Paketi',
        modelId: 'R-SB2700',
        capacity: '2.7 kWh',
        power: '2000 W',
        image: '/images/products/2-7kwh-a-1.webp',
        categoryTitle: 'Saha Tipi Taşınabilir Güç Ünitesi',
        description: 'Dayanıklı çanta tipi tasarımı ile en zorlu saha koşullarında yanınızda.',
        features: [
            'Enerji: 2.7 kWh',
            'Çıkış Voltajı: 220 VAC',
            'Çıkış Gücü: 2000 W',
            'Maks. PV Güç: 1000 W (MPPT)',
            'Çevrim Ömrü: 6000 çevrim',
            'Dalga Tipi: Saf Sinüs',
            'Boyutlar: 548 × 391 × 335 mm',
            'Ağırlık: 35 kg'
        ],
        specs: [
            { label: 'Enerji', value: '2.7 kWh' },
            { label: 'Çıkış Voltajı', value: '220 VAC' },
            { label: 'Çıkış Gücü', value: '2000 W' },
            { label: 'Maks. PV Güç', value: '1000 W (MPPT)' },
            { label: 'Çevrim Ömrü', value: '6000 çevrim' },
            { label: 'Dalga Tipi', value: 'Saf Sinüs' },
            { label: 'Boyutlar', value: '548 × 391 × 335 mm' },
            { label: 'Ağırlık', value: '35 kg' },
        ],
        usageAreas: [
            { label: 'Kamp', icon: 'Tent' },
            { label: 'Acil Durum', icon: 'TriangleAlert' },
            { label: 'Saha Çalışması', icon: 'Hammer' },
        ],
        runtimeStats: [
            { label: 'Hilti / Kırıcı', power: '1000 W', duration: '≈ 2.7 saat', icon: 'Hammer' },
            { label: 'Matkap / El Aleti', power: '500 W', duration: '≈ 5.4 saat', icon: 'Hammer' },
            { label: 'Masaüstü Bilgisayar', power: '300 W', duration: '≈ 9 saat', icon: 'Monitor' },
            { label: 'Laptop', power: '65 W', duration: '≈ 35–40 saat', icon: 'Laptop' },
            { label: 'Buzdolabı (A++)', power: '150 W', duration: '≈ 18 saat', icon: 'Snowflake' },
            { label: 'LED Aydınlatma', power: '100 W', duration: '≈ 27 saat', icon: 'Lightbulb' },
            { label: 'TV + Modem', power: '120 W', duration: '≈ 22 saat', icon: 'Tv' },
            { label: 'Genel Ev', power: '400 W', duration: '≈ 6–7 saat', icon: 'Home' },
        ],
        runtimeSummary: 'Revium taşınabilir güç paketleri; 2.7 kWh modelinde bir hiltiyi yaklaşık 2.7 saat, ev tipi bir buzdolabını 18 saate kadar kesintisiz besleyebilmektedir.'
    },
    'revium-2-7-kwh-bag': {
        name: 'Revium 2.7 kWh Depolanabilir Güç Paketi',
        modelId: 'R-P2700',
        capacity: '2.7 kWh',
        power: '2000 W',
        image: '/images/products/2-7kwh-b-1.webp',
        categoryTitle: 'Taşınabilir Enerji Depolama',
        description: 'Taşınabilir enerji depolama çözümlerinde yeni standart. Hafif, güçlü ve uzun ömürlü.',
        features: [
            'Enerji: 2.7 kWh',
            'Çıkış Voltajı: 220 VAC',
            'Çıkış Gücü: 2000 W',
            'Maks. PV Güç: 1000 W (MPPT)',
            'Çevrim Ömrü: 6000 çevrim',
            'Dalga Tipi: Saf Sinüs',
            'Boyutlar: 500 × 335 × 285 mm',
            'Ağırlık: 35 kg'
        ],
        specs: [
            { label: 'Enerji', value: '2.7 kWh' },
            { label: 'Çıkış Voltajı', value: '220 VAC' },
            { label: 'Çıkış Gücü', value: '2000 W' },
            { label: 'Maks. PV Güç', value: '1000 W (MPPT)' },
            { label: 'Çevrim Ömrü', value: '6000 çevrim' },
            { label: 'Dalga Tipi', value: 'Saf Sinüs' },
            { label: 'Boyutlar', value: '500 × 335 × 285 mm' },
            { label: 'Ağırlık', value: '35 kg' },
        ],
        usageAreas: [
            { label: 'Zorlu Arazi', icon: 'Mountain' },
            { label: 'Endüstriyel Saha', icon: 'Factory' },
            { label: 'Kamp', icon: 'Tent' },
        ],
        runtimeStats: [
            { label: 'Hilti / Kırıcı', power: '1000 W', duration: '≈ 2.7 saat', icon: 'Hammer' },
            { label: 'Matkap / El Aleti', power: '500 W', duration: '≈ 5.4 saat', icon: 'Hammer' },
            { label: 'Masaüstü Bilgisayar', power: '300 W', duration: '≈ 9 saat', icon: 'Monitor' },
            { label: 'Laptop', power: '65 W', duration: '≈ 35–40 saat', icon: 'Laptop' },
            { label: 'Buzdolabı (A++)', power: '150 W', duration: '≈ 18 saat', icon: 'Snowflake' },
            { label: 'LED Aydınlatma', power: '100 W', duration: '≈ 27 saat', icon: 'Lightbulb' },
            { label: 'TV + Modem', power: '120 W', duration: '≈ 22 saat', icon: 'Tv' },
            { label: 'Genel Ev', power: '400 W', duration: '≈ 6–7 saat', icon: 'Home' },
        ],
        runtimeSummary: 'Revium taşınabilir güç paketleri; 2.7 kWh modelinde bir hiltiyi yaklaşık 2.7 saat, ev tipi bir buzdolabını 18 saate kadar kesintisiz besleyebilmektedir.'
    },

    'revium-storage-battery': {
        name: 'Revium Storage Battery (2.7 / 5.4 kWh)',
        modelId: 'R-STORAGE',
        capacity: '2.7 / 5.4 kWh',
        power: 'VDC System',
        image: '/images/products/stack-21-6kwh-1.webp',
        categoryTitle: 'Sabit / Modüler Batarya',
        description: 'Modüler yapısı ile ihtiyaca göre ölçeklenebilir sabit batarya çözümü.',
        features: [
            'Nominal Voltaj: 12 / 24 / 48 VDC',
            'Kapasite: 105 / 206 Ah',
            'Enerji: 2.7 – 5.4 kWh',
            'Batarya Ömrü: 6000 çevrim',
            'Boyutlar: 400 × 320 × 244 mm (2.7) / 400 × 391 × 244 mm (5.4)',
            'Ağırlık: 25 / 45 kg',
            'Bluetooth: Mevcut',
            'Hücre Tipi: LiFePO4'
        ],
        specs: [
            { label: 'Nominal Voltaj', value: '12 / 24 / 48 VDC' },
            { label: 'Kapasite', value: '105 / 206 Ah' },
            { label: 'Enerji', value: '2.7 – 5.4 kWh' },
            { label: 'Batarya Ömrü', value: '6000 çevrim' },
            { label: 'Ağırlık', value: '25 / 45 kg' },
            { label: 'Bluetooth', value: 'Mevcut' },
        ],
        usageAreas: [
            { label: 'Ev Depolama', icon: 'Building2' },
            { label: 'Yedek Güç', icon: 'Zap' },
            { label: 'Off-grid Sistemler', icon: 'Sun' },
        ]
    },
    'revium-5-4-kwh': {
        name: 'Revium 5.4 kWh Depolanabilir Güç Paketi',
        modelId: 'R-P5400',
        capacity: '5.4 kWh',
        power: '3000 W',
        image: '/images/products/5-4kwh-h-1.webp',
        categoryTitle: 'Yüksek Kapasiteli Taşınabilir Güç',
        description: 'Yüksek enerji ihtiyacı duyan profesyoneller için 5.4 kWh kapasiteli devasa güç.',
        features: [
            'Enerji: 5.4 kWh',
            'Çıkış Voltajı: 220 VAC',
            'Çıkış Gücü: 3000 W',
            'Maks. PV Güç: 1000 W (MPPT)',
            'Çevrim Ömrü: 6000 çevrim',
            'Dalga Tipi: Saf Sinüs',
            'Boyutlar: 777 × 458 × 1340 mm',
            'Ağırlık: 60 kg'
        ],
        specs: [
            { label: 'Enerji', value: '5.4 kWh' },
            { label: 'Çıkış Voltajı', value: '220 VAC' },
            { label: 'Çıkış Gücü', value: '3000 W' },
            { label: 'Maks. PV Güç', value: '1000 W (MPPT)' },
            { label: 'Çevrim Ömrü', value: '6000 çevrim' },
            { label: 'Dalga Tipi', value: 'Saf Sinüs' },
            { label: 'Boyutlar', value: '777 × 458 × 1340 mm' },
            { label: 'Ağırlık', value: '60 kg' },
        ],
        usageAreas: [
            { label: 'Mobil Ev', icon: 'Bus' },
            { label: 'Atölye', icon: 'Factory' },
            { label: 'Karavan', icon: 'Home' },
        ],
        runtimeStats: [
            { label: 'Hilti / Kırıcı', power: '1000 W', duration: '≈ 5.4 saat', icon: 'Hammer' },
            { label: 'Matkap / El Aleti', power: '500 W', duration: '≈ 10–11 saat', icon: 'Hammer' },
            { label: 'Masaüstü Bilgisayar', power: '300 W', duration: '≈ 18 saat', icon: 'Monitor' },
            { label: 'Laptop', power: '65 W', duration: '≈ 80 saat', icon: 'Laptop' },
            { label: 'Buzdolabı (A++)', power: '150 W', duration: '≈ 36 saat (1.5 gün)', icon: 'Snowflake' },
            { label: 'LED Aydınlatma', power: '100 W', duration: '≈ 54 saat', icon: 'Lightbulb' },
            { label: 'TV + Modem', power: '120 W', duration: '≈ 45 saat', icon: 'Tv' },
            { label: 'Genel Ev', power: '400 W', duration: '≈ 13–14 saat', icon: 'Home' },
        ],
        runtimeSummary: 'Revium taşınabilir güç paketleri; 5.4 kWh modelinde bir hiltiyi 5.4 saat, bir evi ise 14–16 saat aralığında kesintisiz besleyebilmektedir.'
    },
    'revium-power-cabinet': {
        name: 'Revium Güç Kabini',
        modelId: 'R-CABINET',
        capacity: '5.4 – 21.6 kWh',
        power: '3 – 20 kW',
        image: '/images/products/cabin-power.webp',
        categoryTitle: 'Endüstriyel Enerji Depolama (Tek Kabin)',
        description: 'Endüstriyel tesisler için hepsi bir arada kompakt enerji depolama kabini.',
        features: [
            'Enerji: 5.4 – 21.6 kWh (tek kabin)',
            'Çıkış Voltajı: 220 VAC',
            'Çıkış Gücü: 3 – 20 kW',
            'Max PV Güç: 1 – 30 kW (MPPT)',
            'Batarya Ömrü: 6000 çevrim',
            'Dalga Tipi: Saf Sinüs',
            'Ağırlık: 70 – 270 kg',
            'Koruma: IP54'
        ],
        specs: [
            { label: 'Enerji', value: '5.4 – 21.6 kWh' },
            { label: 'Çıkış Voltajı', value: '220 VAC' },
            { label: 'Çıkış Gücü', value: '3 – 20 kW' },
            { label: 'Max PV Güç', value: '1 – 30 kW (MPPT)' },
            { label: 'Batarya Ömrü', value: '6000 çevrim' },
            { label: 'Dalga Tipi', value: 'Saf Sinüs' },
            { label: 'Ağırlık', value: '70 – 270 kg' },
        ],
        usageAreas: [
            { label: 'Tesisler', icon: 'Building2' },
            { label: 'Şebeke Destek', icon: 'Zap' },
            { label: 'Fabrika', icon: 'Factory' },
        ]
    },
    'revium-pickup-power-pack': {
        name: 'Revium Pick Up Güç Paketi',
        modelId: 'R-PICKUP',
        capacity: '60 – 100 kWh',
        power: '30 kW (3-Phase)',
        image: '/images/products/hilux-21-6kwh-1.webp',
        categoryTitle: 'Araç Üstü Mobil Enerji Sistemi',
        description: 'Araç üstü uygulamalar için geliştirilmiş 60-100 kWh kapasiteli ultra yüksek güçlü sistem.',
        features: [
            'Enerji: 60 – 100 kWh',
            'Çıkış Gücü (3 Faz): 3 × 10 kW (380 VAC)',
            'Çıkış Gücü (Tek Faz): 5 × 5 kW (220 VAC)',
            'Max PV Güç: 30 kW',
            'Batarya Ömrü: 6000 çevrim',
            'Dalga Tipi: Saf Sinüs'
        ],
        specs: [
            { label: 'Enerji', value: '60 – 100 kWh' },
            { label: 'Çıkış Gücü (3 Faz)', value: '3 × 10 kW (380 VAC)' },
            { label: 'Çıkış Gücü (Tek Faz)', value: '5 × 5 kW (220 VAC)' },
            { label: 'Max PV Güç', value: '30 kW' },
            { label: 'Batarya Ömrü', value: '6000 çevrim' },
            { label: 'Dalga Tipi', value: 'Saf Sinüs' },
        ],
        usageAreas: [
            { label: 'Araç Üstü', icon: 'Truck' },
            { label: 'Mobil İstasyon', icon: 'Zap' },
            { label: 'Askeri Saha', icon: 'Shield' },
        ]
    },
    'revium-power-layer': {
        name: 'Revium Güç Katmanı – Modüler Enerji Depolama Ünitesi',
        modelId: 'R-LAYER',
        capacity: '5.4 – 172 kWh',
        power: 'Scalable',
        image: '/images/products/stack-21-6kwh-1.webp',
        categoryTitle: 'Ölçeklenebilir Endüstriyel Batarya',
        description: 'Büyük ölçekli endüstriyel projeler için sınırsız ölçeklenebilir batarya katmanları.',
        features: [
            'Nominal Voltaj: 51.2 V',
            'Artırılabilir Kapasite: 105 / 210 / 315 / 420 Ah',
            'Enerji Aralığı: 5.4 – 172 kWh',
            'Batarya Ömrü: 6000 çevrim',
            'Ağırlık: 66 – 950 kg',
            'Hücre Tipi: LiFePO4'
        ],
        specs: [
            { label: 'Nominal Voltaj', value: '51.2 V' },
            { label: 'Artırılabilir Kapasite', value: '105 / 210 / 315 / 420 Ah' },
            { label: 'Enerji Aralığı', value: '5.4 – 172 kWh' },
            { label: 'Batarya Ömrü', value: '6000 çevrim' },
            { label: 'Ağırlık', value: '66 – 950 kg' },
        ],
        usageAreas: [
            { label: 'Endüstriyel', icon: 'Hospital' },
            { label: 'Veri Merkezi', icon: 'Server' },
            { label: 'Telekomünikasyon', icon: 'RadioTower' },
        ]
    },
    'revium-gridpack': {
        name: 'Revium Şebeke Paketi',
        modelId: 'Şebeke Paketi',
        capacity: '500 kWh – 5 MWh',
        power: '250 kW – 2.5 MW',
        image: '/images/products/gridpack.webp',
        categoryTitle: 'Şebeke Ölçekli Konteyner Tip Batarya Enerji Depolama Sistemi',
        description: 'Şebeke ölçeğinde enerji depolama için konteyner tipi sıvı soğutmalı çözüm.',
        features: [
            'Enerji Kapasitesi: 500 kWh – 5 MWh',
            'Voltaj Aralığı: 600 – 1500 VDC',
            'AC Çıkış Gücü: 250 kW – 2.5 MW',
            'Çevrim Ömrü: 6000 çevrim',
            'AC Dalga Tipi: Saf Sinüs',
            'Çalışma Ortamı: -30°C ~ +55°C',
            'Soğutma: Sıvı Soğutma',
            'Koruma: IP54'
        ],
        specs: [
            { label: 'Enerji Kapasitesi', value: '500 kWh – 5 MWh' },
            { label: 'Voltaj Aralığı', value: '600 – 1500 VDC' },
            { label: 'AC Çıkış Gücü', value: '250 kW – 2.5 MW' },
            { label: 'Çevrim Ömrü', value: '6000 çevrim' },
            { label: 'AC Dalga Tipi', value: 'Saf Sinüs' },
            { label: 'Çalışma Ortamı', value: '-30°C ~ +55°C' },
            { label: 'Soğutma', value: 'Sıvı Soğutma' },
        ],
        usageAreas: [
            { label: 'Şebeke', icon: 'Zap' },
            { label: 'Büyük Tesis', icon: 'Building2' },
            { label: 'Enerji Parkı', icon: 'Sun' },
        ]
    },
    'revium-powerstation-series': {
        name: 'Revium Powerstation Serisi',
        modelId: 'POWERSTATION',
        capacity: '500 kWh – 5 MW',
        power: '200 kW – 1 MW',
        image: '/images/products/ges-power-station.webp',
        categoryTitle: 'Konteyner Tip Enerji + Güneş Entegrasyonu',
        description: 'Güneş enerjisi ve depolamayı tek bir konteynerde birleştiren hibrit çözüm.',
        features: [
            'Batarya Kapasitesi: 500 kWh – 5 MW',
            'Çıkış Gücü: 200 kW – 1 MW',
            'PV Giriş: 650A / 624VDC',
            'PV Entegrasyonu: 624 adet 650Wp panel',
            'Soğutma: Sıvı',
            'Çevrim: 6000 (%80 DOD)',
            'İzolasyon: Class II',
            'Koruma: IP54'
        ],
        specs: [
            { label: 'PV Kapasite', value: 'Max 624 Panels' },
            { label: 'AC Giriş', value: '230 / 400 VAC' },
            { label: 'Kapasite', value: 'Max 5 MW' },
            { label: 'Koruma', value: 'IP54' },
        ],
        usageAreas: [
            { label: 'Solar Park', icon: 'Sun' },
            { label: 'Off-grid', icon: 'Globe' },
            { label: 'Mikro Şebeke', icon: 'Zap' },
        ]
    },
    'revium-voltwagon': {
        name: 'Revium VoltWagon',
        modelId: 'VOLTWAGON',
        capacity: '192 kWh',
        power: '20 kW',
        image: '/images/products/solar-voltwagon.webp',
        categoryTitle: 'Mobil Güneş Enerjili Römork Sistem',
        description: 'Her yere taşınabilen devasa güneş enerjili mobil römork sistemi.',
        features: [
            'Batarya Kapasitesi: 192 kWh',
            'Çıkış Gücü: 20 kW',
            'Batarya Voltajı: 604 VDC',
            'PV Giriş: 70A – 624VDC',
            'PV Panel Sayısı: 65×650Wp panel',
            'Soğutma: Sıvı',
            'Ağırlık: 2450 kg',
            'Mobil Römork',
            'Güneş Entegreli',
            'Uzaktan İzleme'
        ],
        specs: [
            { label: 'Kapasite', value: '192 kWh' },
            { label: 'Güç', value: '20 kW' },
            { label: 'Ağırlık', value: '2450 kg' },
            { label: 'Koruma', value: 'IP65' },
        ],
        usageAreas: [
            { label: 'Mobil Şarj', icon: 'Zap' },
            { label: 'Askeri Saha', icon: 'Shield' },
            { label: 'Etkinlik Alanı', icon: 'Globe' },
        ]
    },
    'revium-solarport': {
        name: 'Revium SolarPort',
        modelId: 'SOLARPORT',
        capacity: '2 – 8 Araç',
        power: '6 – 24 kW AC',
        image: '/images/products/solarport-final.png',
        categoryTitle: 'Solar Carport + EV Şarj + Enerji Depolama',
        description: 'Otoparkları enerji santraline dönüştüren hepsi bir arada solar carport.',
        features: [
            'Araç Kapasitesi: 2 – 8 araç',
            'Panel Sayısı: 8 – 48 adet',
            'Kurulu Güç: 4.8 – 38.8 kWp',
            'MPPT Voltaj Aralığı: 180 – 950 VDC',
            'AC Çıkış Gücü: 6 – 24 kW',
            'Şarj Altyapısı: 22 kW AC',
            'Opsiyonel: DC hızlı şarj',
            'Koruma: IP65'
        ],
        specs: [
            { label: 'Araç Kapasitesi', value: '2 – 8 araç' },
            { label: 'Panel Sayısı', value: '8 – 48 adet' },
            { label: 'Kurulu Güç', value: '4.8 – 38.8 kWp' },
            { label: 'MPPT Voltaj Aralığı', value: '180 – 950 VDC' },
            { label: 'AC Çıkış Gücü', value: '6 – 24 kW' },
            { label: 'Şarj Altyapısı', value: '22 kW AC' },
            { label: 'Opsiyonel', value: 'DC hızlı şarj' },
        ],
        usageAreas: [
            { label: 'Otopark', icon: 'Building2' },
            { label: 'AVM', icon: 'Globe' },
            { label: 'Ofis Binası', icon: 'Briefcase' },
        ]
    },
    'revium-grid-core': {
        name: 'Revium Grid Core',
        modelId: 'R-GRID-CORE',
        capacity: 'DC Şarj',
        power: '45 – 180 kW',
        image: '/images/products/grid-core.webp',
        categoryTitle: 'Elektrikli Araç Şarj Çözümleri',
        description: 'Yüksek güçlü DC hızlı şarj istasyonu, tüm elektrikli araçlarla tam uyumlu.',
        features: [
            'DC Çıkış Gücü: 45 – 180 kW',
            'DC Gerilim: 150 – 1000 VDC',
            'AC Giriş: 400 VAC, 3 Faz',
            'Konnektör: CCS2',
            'Çıkış Sayısı: 1 DC',
            'Haberleşme: Ethernet / CAN / 4G',
            'Protokol: OCPP 1.6',
            'Koruma: IP54'
        ],
        specs: [
            { label: 'DC Çıkış Gücü', value: '45 – 180 kW' },
            { label: 'DC Gerilim', value: '150 – 1000 VDC' },
            { label: 'AC Giriş', value: '400 VAC, 3 Faz' },
            { label: 'Konnektör', value: 'CCS2' },
            { label: 'Çıkış Sayısı', value: '1 DC' },
            { label: 'Haberleşme', value: 'Ethernet / CAN / 4G' },
            { label: 'Protokol', value: 'OCPP 1.6' },
            { label: 'Koruma', value: 'IP54' },
        ],
        usageAreas: [
            { label: 'Otoyol Tesisleri', icon: 'Bus' },
            { label: 'AVM', icon: 'Building2' },
            { label: 'Akaryakıt İstasyonu', icon: 'Briefcase' },
        ]
    },
    'revium-grid-pulse': {
        name: 'Revium Grid Pulse',
        modelId: 'R-GRID-PULSE',
        capacity: 'DC Şarj',
        power: '90 – 270 kW',
        image: '/images/products/grid-pulse.webp',
        categoryTitle: 'Elektrikli Araç Şarj Çözümleri',
        description: 'Yüksek güçlü DC hızlı şarj istasyonu, tüm elektrikli araçlarla tam uyumlu.',
        features: [
            'DC Çıkış Gücü: 90 – 270 kW',
            'DC Gerilim: 150 – 1000 VDC',
            'Konnektör: CCS1 / CCS2',
            'Çıkış Sayısı: 2 DC',
            'AC Giriş: 400 VAC, 3 Faz',
            'Ödeme: RFID / QR / NFC',
            'Protokol: OCPP 1.6',
            'Koruma: IP54'
        ],
        specs: [
            { label: 'DC Çıkış Gücü', value: '90 – 270 kW' },
            { label: 'DC Gerilim', value: '150 – 1000 VDC' },
            { label: 'Konnektör', value: 'CCS1 / CCS2' },
            { label: 'Çıkış Sayısı', value: '2 DC' },
            { label: 'AC Giriş', value: '400 VAC, 3 Faz' },
            { label: 'Ödeme', value: 'RFID / QR / NFC' },
            { label: 'Koruma', value: 'IP54' },
        ],
        usageAreas: [
            { label: 'Halka Açık Şarj', icon: 'Globe' },
            { label: 'Filo Yönetimi', icon: 'Truck' },
            { label: 'Plazalar', icon: 'Building' },
        ]
    },
    'revium-2-7-kwh-lfp': {
        name: 'Revium 2.7 kWh LFP Batarya',
        modelId: '2.7-LFP',
        capacity: '2.7 kWh',
        power: '12 / 24 VDC',
        image: '/images/products/2.7-lfp.webp',
        categoryTitle: 'Lityum Demir Fosfat (LFP) Batarya Çözümleri',
        description: 'Güneş enerjisi sistemleri ve mobil uygulamalar için güvenilir LFP batarya.',
        features: [
            'Nominal Voltaj: 12 / 24 VDC',
            'Kapasite: 105 / 206 Ah',
            'Enerji: 2.7 kWh',
            'Batarya Ömrü: 6000 çevrim',
            'Boyutlar: 400 × 320 × 244 mm',
            'Ağırlık: 25 kg',
            'Bluetooth: Mevcut',
            'Hücre Tipi: LiFePO4'
        ],
        specs: [
            { label: 'Nominal Voltaj', value: '12 / 24 VDC' },
            { label: 'Kapasite', value: '105 / 206 Ah' },
            { label: 'Enerji', value: '2.7 kWh' },
            { label: 'Batarya Ömrü', value: '6000 çevrim' },
            { label: 'Boyutlar', value: '400 × 320 × 244 mm' },
            { label: 'Ağırlık', value: '25 kg' },
            { label: 'Bluetooth', value: 'Mevcut' },
        ],
        usageAreas: [
            { label: 'Karavan', icon: 'Truck' },
            { label: 'Tekne', icon: 'Anchor' },
            { label: 'Solar Sistem', icon: 'Sun' },
        ]
    },
    'revium-5-4-kwh-lfp': {
        name: 'Revium 5.4 kWh LFP Batarya',
        modelId: '5.4-LFP',
        capacity: '5.4 kWh',
        power: '24 / 48 VDC',
        image: '/images/products/5.4-lfp.webp',
        categoryTitle: 'Lityum Demir Fosfat (LFP) Batarya Çözümleri',
        description: 'Yüksek kapasiteli ve uzun ömürlü LFP batarya çözümü.',
        features: [
            'Nominal Voltaj: 24 / 48 VDC',
            'Kapasite: 105 / 206 Ah',
            'Enerji: 5.4 kWh',
            'Batarya Ömrü: 6000 çevrim',
            'Boyutlar: 400 × 391 × 244 mm',
            'Ağırlık: 45 kg',
            'Bluetooth: Mevcut',
            'Hücre Tipi: LiFePO4'
        ],
        specs: [
            { label: 'Nominal Voltaj', value: '24 / 48 VDC' },
            { label: 'Kapasite', value: '105 / 206 Ah' },
            { label: 'Enerji', value: '5.4 kWh' },
            { label: 'Batarya Ömrü', value: '6000 çevrim' },
            { label: 'Boyutlar', value: '400 × 391 × 244 mm' },
            { label: 'Ağırlık', value: '45 kg' },
            { label: 'Bluetooth', value: 'Mevcut' },
        ],
        usageAreas: [
            { label: 'Ev Depolama', icon: 'Home' },
            { label: 'Tiny House', icon: 'Home' },
            { label: 'Off-grid', icon: 'Globe' },
        ]
    },

    'revium-grid-pulse-gen2': {
        name: 'Revium Grid Pulse Gen2',
        modelId: 'R-GRID-PULSE-G2',
        capacity: 'DC Şarj',
        power: '90 – 270 kW',
        image: '/images/products/grid-pulse-gen2.webp',
        categoryTitle: 'Elektrikli Araç Şarj Çözümleri',
        description: 'Yeni nesil, akıllı ve bağlantılı yüksek hızlı DC şarj istasyonu.',
        features: [
            'DC Çıkış Gücü: 90 – 270 kW',
            'DC Gerilim: 150 – 1000 VDC',
            'Konnektör: CCS2',
            'Çıkış Sayısı: 2 DC',
            'AC Giriş: 400 VAC, 3 Faz',
            'Haberleşme: Ethernet / 4G / LTE',
            'Protokol: OCPP 1.6',
            'Koruma: IP54'
        ],
        specs: [
            { label: 'DC Çıkış Gücü', value: '90 – 270 kW' },
            { label: 'DC Gerilim', value: '150 – 1000 VDC' },
            { label: 'Konnektör', value: 'CCS2' },
            { label: 'Çıkış Sayısı', value: '2 DC' },
            { label: 'AC Giriş', value: '400 VAC, 3 Faz' },
            { label: 'Haberleşme', value: 'Ethernet / 4G / LTE' },
            { label: 'Protokol', value: 'OCPP 1.6' },
            { label: 'Koruma', value: 'IP54' },
        ],
        usageAreas: [
            { label: 'Akıllı Şehir', icon: 'Globe' },
            { label: 'Ticari Merkezler', icon: 'Building2' },
            { label: 'Enerji İstasyonları', icon: 'Zap' },
        ]
    }
};

function getIcon(iconName: string) {
    const icons: Record<string, any> = {
        'Tent': Tent,
        'TriangleAlert': TriangleAlert,
        'Plane': Plane,
        'Mountain': Mountain,
        'Hammer': Hammer,
        'Laptop': Laptop,
        'Factory': Factory,
        'Briefcase': Briefcase,
        'Building2': Building2,
        'Hospital': Hospital,
        'Server': Server,
        'RadioTower': RadioTower,
        'Zap': Zap,
        'Sun': Sun,
        'Shield': Shield,
        'Monitor': Monitor,
        'Snowflake': Snowflake,
        'Lightbulb': Lightbulb,
        'Tv': Tv,
        'Home': Home,
        'Clock': Clock,
        'Bus': Bus,
    };
    return icons[iconName] || Battery;
}

// Helper function to translate Turkish labels to other languages
function translateLabel(label: string, locale: string): string {
    if (locale === 'tr') return label;

    const deviceTranslations: Record<string, Record<string, string>> = {
        'Tiny House': { en: 'Tiny House', ar: 'منزل صغير' },
        'Solar Sistem': { en: 'Solar System', ar: 'نظام شمسي' },
        'Tekne': { en: 'Boat', ar: 'يخت' },
        'Karavan': { en: 'Caravan', ar: 'كرفان' },
        'Lityum Demir Fosfat (LFP) Batarya Çözümleri': { en: 'LFP Battery Solutions', ar: 'حلول بطاريات ليثيوم فوسفات الحديد (LFP)' },
        'Hilti / Kırıcı': { en: 'Demolition Hammer', ar: 'مطرقة الهدم' },
        'Matkap / El Aleti': { en: 'Drill / Power Tool', ar: 'مثقاب / أداة كهربائية' },
        'Masaüstü Bilgisayar': { en: 'Desktop Computer', ar: 'كمبيوتر مكتبي' },
        'Laptop': { en: 'Laptop', ar: 'لابتوب' },
        'Buzdolabı (A++)': { en: 'Refrigerator (A++)', ar: 'ثلاجة (A++)' },
        'LED Aydınlatma': { en: 'LED Lighting', ar: 'إضاءة ليد' },
        'TV + Modem': { en: 'TV + Modem', ar: 'تلفزيون + مودم' },
        'Genel Ev': { en: 'General Home', ar: 'المنزل العام' },
        // Usage Areas
        'Kamp': { en: 'Camping', ar: 'تخييم' },
        'Acil Durum': { en: 'Emergency', ar: 'طوارئ' },
        'Saha Çalışması': { en: 'Field Work', ar: 'عمل ميداني' },
        'Zorlu Arazi': { en: 'Rugged Terrain', ar: 'تضاريس وعرة' },
        'Endüstriyel Saha': { en: 'Industrial Site', ar: 'موقع صناعي' },
        'Endüstriyel': { en: 'Industrial', ar: 'صناعي' },
        'Ev Depolama': { en: 'Home Storage', ar: 'تخزين منزلي' },
        'Yedek Güç': { en: 'Backup Power', ar: 'طاقة احتياطية' },
        'Mobil Ev': { en: 'Mobile Home', ar: 'منزل متنقل' },
        'Atölye': { en: 'Workshop', ar: 'ورشة عمل' },
        'Otopark': { en: 'Parking', ar: 'موقف سيارات' },
        'AVM': { en: 'Mall', ar: 'مركز تسوق' },
        'Solar Park': { en: 'Solar Park', ar: 'حديقة شمسية' },
        'Araç Üstü': { en: 'Vehicle Mounted', ar: 'محمول على مركبة' },
        'Mobil İstasyon': { en: 'Mobile Station', ar: 'محطة متنقلة' },
        'Veri Merkezi': { en: 'Data Center', ar: 'مركز بيانات' },
        'Şebeke': { en: 'Grid', ar: 'شبكة' },
        'Büyük Tesis': { en: 'Large Facility', ar: 'منشأة كبيرة' },
        'Off-grid': { en: 'Off-grid', ar: 'خارج الشبكة' },
        'Mobil Şarj': { en: 'Mobile Charging', ar: 'شحن متنقل' },
        'Askeri Saha': { en: 'Military Field', ar: 'ميدان عسكري' },
        'Tesisler': { en: 'Facilities', ar: 'مرافق' },
        'Şebeke Destek': { en: 'Grid Support', ar: 'دعم الشبكة' },
        'Şantiye': { en: 'Construction Site', ar: 'موقع بناء' },
        'Etkinlik Alanı': { en: 'Event Area', ar: 'منطقة الفعاليات' },
        'Ofis Binası': { en: 'Office Building', ar: 'مبنى مكتبي' },
        'Otoyol Tesisleri': { en: 'Highway Facilities', ar: 'مرافق الطريق السريع' },
        'Otoyol': { en: 'Highway', ar: 'طريق سريع' },
        'Akaryakıt İstasyonu': { en: 'Gas Station', ar: 'محطة وقود' },
        'Halka Açık Şarj': { en: 'Public Charging', ar: 'شحن عام' },
        'Filo Yönetimi': { en: 'Fleet Management', ar: 'إدارة أسطول' },
        'Plazalar': { en: 'Plazas', ar: 'ساحات' },
        'Akıllı Şehir': { en: 'Smart City', ar: 'مدينة ذكية' },
        'Ticari Merkezler': { en: 'Commercial Centers', ar: 'مراكز تجارية' },
        'Enerji İstasyonları': { en: 'Energy Stations', ar: 'محطات طاقة' },
        'Telekomünikasyon': { en: 'Telecommunication', ar: 'الاتصالات' },
        'Fabrika': { en: 'Factory', ar: 'مصنع' },
        'Destek': { en: 'Support', ar: 'دعم' },
        'DC Şarj': { en: 'DC Charging', ar: 'شحن تيار مستمر' },
        'Scalable': { en: 'Scalable', ar: 'قابلة للتطوير' },
        'Enerji Parkı': { en: 'Energy Park', ar: 'حديقة الطاقة' },
        'Mikro Şebeke': { en: 'Microgrid', ar: 'شبكة صغيرة' },
        // Technical Specs Labels
        'Sürekli Çıkış Gücü': { en: 'Continuous Output Power', ar: 'طاقة خرج مستمرة' },
        'Batarya Ömrü': { en: 'Battery Life', ar: 'عمر البطارية' },
        'Kompakt Tasarım': { en: 'Compact Design', ar: 'تصميم مدمج' },
        'Hızlı Şarj': { en: 'Fast Charging', ar: 'شحن سريع' },
        'Yüksek Kapasite': { en: 'High Capacity', ar: 'سعة عالية' },
        'Endüstriyel Güç': { en: 'Industrial Power', ar: 'طاقة صناعية' },
        'Nominal Voltaj': { en: 'Nominal Voltage', ar: 'الجهد الاسمي' },
        'çevrim': { en: 'cycles', ar: 'دورات' },
        'CCS2 Konnektör': { en: 'CCS2 Connector', ar: 'CCS2' },
        'IP54 Koruma': { en: 'IP54 Protection', ar: 'IP54' },
        'OCPP 1.6 Protokolü': { en: 'OCPP 1.6 Protocol', ar: 'بروتوكول OCPP ١.٦' },
        'DC Çıkış': { en: 'DC Output', ar: 'خرج تيار مستمر' },
        'DC Giriş': { en: 'DC Input', ar: 'دخل تيار مستمر' },
        'VDC Gerilim': { en: 'VDC Voltage', ar: 'جهد تيار مستمر' },
        'Enerji': { en: 'Energy', ar: 'الطاقة' },
        'Çıkış Voltajı': { en: 'Output Voltage', ar: 'جهد الخرج' },
        'Sürekli Güç': { en: 'Continuous Power', ar: 'خرج مستمر' },
        'Maks. PV Güç': { en: 'Max PV Power', ar: 'أقصى طاقة شمسية' },
        'Boyutlar': { en: 'Dimensions', ar: 'الأبعاد' },
        'Ağırlık': { en: 'Weight', ar: 'الوزن' },
        'Enerji Aralığı': { en: 'Energy Range', ar: 'نطاق الطاقة' },
        'Çıkış Gücü': { en: 'Output Power', ar: 'خرج الطاقة' },
        'PV Giriş': { en: 'PV Input', ar: 'مدخل PV' },
        '3-Faz Çıkış': { en: '3-Phase Output', ar: 'خرج 3 مراحل' },
        'Dalga Tipi': { en: 'Wave Type', ar: 'نوع الموجة' },
        'Voltaj': { en: 'Voltage', ar: 'الجهد' },
        'Kapasite': { en: 'Capacity', ar: 'السعة' },
        'Enerji Max': { en: 'Max Energy', ar: 'الطاقة القصوى' },
        'Döngü': { en: 'Cycle', ar: 'الدورة' },
        'Güç': { en: 'Power', ar: 'القوة' },
        'Soğutma': { en: 'Cooling', ar: 'التبريد' },
        'PV Kapasite': { en: 'PV Capacity', ar: 'سعة PV' },
        'AC Giriş': { en: 'AC Input', ar: 'مدخل AC' },
        'Koruma': { en: 'Protection', ar: 'الحماية' },
        'Kurulu Güç': { en: 'Installed Power', ar: 'الطاقة المثبتة' },
        'AC Çıkış': { en: 'AC Output', ar: 'خرج AC' },
        'MPPT Voltaj': { en: 'MPPT Voltage', ar: 'جهد MPPT' },
        'DC Güç': { en: 'DC Power', ar: 'طاقة تيار مستمر' },
        'DC Gerilim': { en: 'DC Voltage', ar: 'جهد تيار مستمر' },
        'Çıkış': { en: 'Output', ar: 'الخرج' },
        'Çıkış Sayısı': { en: 'Number of Outputs', ar: 'عدد المخارج' },
        'Konnektör': { en: 'Connector', ar: 'الموصل' },
        'Haberleşme': { en: 'Communication', ar: 'الاتصال' },
        'Gerilim': { en: 'Voltage', ar: 'الجهد' },
        'Araç Kapasitesi': { en: 'Vehicle Capacity', ar: 'سعة المركبة' },
        'Artırılabilir Kapasite': { en: 'Expandable Capacity', ar: 'السعة القابلة للتوسيع' },
        'Çıkış Gücü (3 Faz)': { en: 'Output Power (3 Phase)', ar: 'خرج الطاقة (٣ مراحل)' },
        'Çıkış Gücü (Tek Faz)': { en: 'Output Power (Single Phase)', ar: 'خرج الطاقة (مرحلة واحدة)' },
        'Max PV Güç': { en: 'Max PV Power', ar: 'أقصى طاقة شمسية' },
        'AC Dalga Tipi': { en: 'AC Wave Type', ar: 'نوع موجة التيار المتردد' },
        'Çalışma Ortamı': { en: 'Operating Environment', ar: 'بيئة التشغيل' },
        'Enerji Kapasitesi': { en: 'Energy Capacity', ar: 'سعة الطاقة' },
        'Voltaj Aralığı': { en: 'Voltage Range', ar: 'نطاق الجهد' },
        'AC Çıkış Gücü': { en: 'AC Output Power', ar: 'خرج طاقة التيار المتردد' },
        'Çevrim Ömrü': { en: 'Cycle Life', ar: 'عمر الدورة' },
        'Panel Sayısı': { en: 'Panel Count', ar: 'عدد الألواح' },
        'MPPT Voltaj Aralığı': { en: 'MPPT Voltage Range', ar: 'نطاق جهد MPPT' },
        'Şarj Altyapısı': { en: 'Charging Infrastructure', ar: 'البنية التحتية للشحن' },
        'Opsiyonel': { en: 'Optional', ar: 'اختياري' },
        'DC Çıkış Gücü': { en: 'DC Output Power', ar: 'خرج طاقة التيار المستمر' },
        'DC hızlı şarj': { en: 'DC Fast Charging', ar: 'شحن سريع DC' },
        'Ödeme': { en: 'Payment', ar: 'الدفع' },
        'Protokol': { en: 'Protocol', ar: 'البروتوكول' },
        'Saf Sinüs': { en: 'Pure Sine', ar: 'موجة جيبية نقية' },
        'Mevcut': { en: 'Available', ar: 'متوفر' },
        'Sıvı Soğutma': { en: 'Liquid Cooling', ar: 'تبريد سائل' },
        'Hücre Tipi': { en: 'Cell Type', ar: 'نوع الخلية' },
        'İzolasyon': { en: 'Insulation', ar: 'العزل' },
        'Sıvı': { en: 'Liquid', ar: 'سائل' },
        'Çevrim': { en: 'Cycle', ar: 'دورة' },
    };

    let result = label;

    // First, translate device names
    for (const [tr, trans] of Object.entries(deviceTranslations)) {
        if (result.includes(tr)) {
            result = result.replace(tr, trans[locale] || trans.en || tr);
        }
    }

    // Translate technical units and abbreviations for Arabic
    if (locale === 'ar') {
        const units: Record<string, string> = {
            'VDC': 'فولت تيار مستمر',
            'VAC': 'فولت تيار متردد',
            'kWh': 'كيلوواط ساعة', // Order matters (kWh before kW)
            'MWh': 'ميغاواط ساعة',
            'kW': 'كيلوواط',
            'MW': 'ميغاواط',
            'W': 'واط',
            'Ah': 'أمبير ساعي',
            'kg': 'كجم',
            'mm': 'مم',
            'Hz': 'هرتز',
            'EV': 'مركبة كهربائية',
            'BESS': 'نظام تخزين الطاقة',
            'GRIDPACK': 'جريد باك',
            'PV': 'طاقة شمسية',
            'DC': 'تيار مستمر',
            'AC': 'تيار متردد',
            'Pure Sine': 'موجة جيبية نقية',
            'LiFePO4': 'ليثيوم فوسفات الحديد',
            'LFP': 'ليثيوم فوسفات الحديد',
            'Bluetooth': 'بلوتوث',
            'Class II': 'فئة ٢',
            'IP54': 'آي بي ٥٤', // Keep prefix if needed
            'IP65': 'آي بي ٦٥',
            'IP67': 'آي بي ٦٧',
            'CCS2': 'سي سي إس ٢',
            'CCS1': 'سي سي إس ١',
            'CCS': 'سي سي إس',
            'Type 2': 'النوع ٢',
            'RFID': 'آر إف آي دي',
            'QR': 'كيو آر',
            'NFC': 'إن إف سي',
            'MPPT': 'إم بي بي تي',
            'OCPP': 'أو سي بي بي',
            'Ethernet': 'إيثرنت',
            '4G': '٤ جي',
            'LTE': 'LTE',
            'Wi-Fi': 'واي فاي',
            'GPS': 'جي بي إس',
            'USB': 'يو إس بي',
            'LED': 'ليد',
            'Phase': 'طور',
            '3-Phase': '٣ مراحل',
            'Entegrasyonu': 'تكامل',
            'adet': 'قطعة',
            'panel': 'لوحة',
            'DOD': 'عمق التفريغ',
            'Batarya Kapasitesi': 'سعة البطارية',
            'Batarya': 'بطارية',
            'Kapasitesi': 'سعة',
            'Çıkış Gücü': 'طاقة الخرج',
            'Giriş': 'مدخل',
            'Soğutma': 'تبريد',
            'Sıvı': 'سائل',
            'İzolasyon': 'عزل',
            'Koruma': 'حماية',
            'Ağırlık': 'الوزن',
            'Mobil': 'متنقل',
            'Römork': 'مقطورة',
            'Sistem': 'نظام',
            'Uzaktan İzleme': 'المراقبة عن بعد',
            'Güneş Entegreli': 'متكامل مع الطاقة الشمسية',
            'Araç Kapasitesi': 'سعة المركبة',
            'Araç': 'مركبة',
            'araç': 'مركبة',
            'Panel Sayısı': 'عدد الألواح',
            'Kurulu Güç': 'الطاقة المثبتة',
            'Şarj Altyapısı': 'بنية الشحن التحتية',
            'Opsiyonel': 'اختياري',
            'Aralığı': 'نطاق',
            'Voltaj Aralığı': 'نطاق الجهد',
            'Kurulu': 'مثبتة',
            'Max PV Güç': 'أقصى طاقة شمسية',
            'Max': 'أقصى',
            'Artırılabilir Kapasite': 'سعة قابلة للزيادة',
            'Artırılabilir': 'قابل للزيادة',
            'tek kabin': 'كابينة واحدة',
            'kabin': 'كابينة',
            'Güç': 'طاقة',
            'Gücü': 'طاقة',
            'gücü': 'طاقة',
            'Sayısı': 'عدد',
            'sayısı': 'عدد',
            'Faz': 'طور',
            'faz': 'طور',
            'CAN': 'كان',
            'Çıkış Sayısı': 'عدد المخارج',
            'DC Çıkış Gücü': 'قوة خرج تيار مستمر',
            'AC Çıkış Gücü': 'قوة خرج تيار متردد',
            'DC Gerilim': 'جهد تيار مستمر',
            'AC Giriş': 'مدخل تيار متردد',
            'Çıkış': 'مخرج',
        };

        for (const [unit, trans] of Object.entries(units)) {
            // Case-insensitive replace for some units might be risky, stick to exact match or careful regex
            // Using global replacement
            result = result.split(unit).join(trans);
        }
    }

    // Then translate ALL time units (using regex with global flag)
    const timeUnits: Record<string, Record<string, string>> = {
        'saat': { en: 'hours', ar: 'ساعات' },
        'gün': { en: 'days', ar: 'أيام' },
    };

    result = result.replace(/saat/gi, timeUnits['saat'][locale] || 'hours');
    result = result.replace(/gün/gi, timeUnits['gün'][locale] || 'days');

    return result;
}

const locales = ['tr', 'en', 'ar'];
const productSlugs = Object.keys(products);

export function generateStaticParams() {
    return locales.flatMap((locale) =>
        productSlugs.map((slug) => ({ locale, slug }))
    );
}

export default async function ProductDetailPage({ params }: Props) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const translateModelId = (id: string, locale: string) => {
        if (locale !== 'ar') return id;
        const map: Record<string, string> = {
            'R-SB2700': 'آر-إس بي ٢٧٠٠',
            'R-P2700': 'آر-بي ٢٧٠٠',
            'R-P5400': 'آر-بي ٥٤٠٠',
            'R-STORAGE': 'آر-ستوريج',
            'R-CABINET': 'آر-كابينة',
            'R-LAYER': 'آر-طبقة',
            'Şebeke Paketi': 'جريد باك',
            'R-PICKUP': 'آر-بيك اب',
            'R-GRID-CORE': 'آر-غريد كور',
            'R-GRID-PULSE': 'آر-غريد بلس',
            'R-GRID-PULSE-G2': 'آر-غريد بلس ٢',
            'POWERSTATION': 'محطة طاقة',
            'SOLARPORT': 'سولار بورت',
            'VOLTWAGON': 'فولت واغون',
            '2.7-LFP': '٢.٧ ليثيوم فوسفات الحديد',
            '5.4-LFP': '٥.٤ ليثيوم فوسفات الحديد',
        };
        return map[id] || id;
    };

    const t = await getTranslations('products');
    const tDetail = await getTranslations('productDetails');

    const product = products[slug];
    if (!product) {
        notFound();
    }

    // Replace data with localized versions if available
    const localizedName = tDetail.has(`products.${slug}.name`) ? tDetail(`products.${slug}.name`) : product.name;
    const localizedDesc = translateLabel(tDetail.has(`products.${slug}.description`) ? tDetail(`products.${slug}.description`) : (product.description || ''), locale);



    // We always use the hardcoded features from code (technical specs)
    // The translateLabel function handles translations for other languages
    const localizedFeatures = product.features;

    return (
        <div className="min-h-screen bg-white">
            <>
                {/* Hero Section - Light Theme, Compact */}
                <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/30 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-4 items-start lg:items-center">

                            {/* Left Content - Wider Text Area */}
                            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                                        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                                        <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                                            {locale === 'en' ? ({
                                                'Taşınabilir Enerji Depolama': 'Portable Energy Storage',
                                                'Yüksek Kapasiteli Taşınabilir Güç': 'High-Capacity Portable Power',
                                                'Sabit / Modüler Batarya': 'Fixed / Modular Battery',
                                                'Araç Tipi Güç Paketi': 'Vehicle Power Pack',
                                                'Endüstriyel Güç Sistemleri': 'Industrial Power Systems',
                                                'GES Ürünleri': 'Solar Products',
                                                'Saha Tipi Taşınabilir Güç Ünitesi': 'Field-Type Portable Power Unit',
                                                'Endüstriyel Enerji Depolama (Tek Kabin)': 'Industrial Energy Storage (Single Cabinet)',
                                                'Araç Üstü Mobil Enerji Sistemi': 'On-Vehicle Mobile Energy System',
                                                'Ölçeklenebilir Endüstriyel Batarya': 'Scalable Industrial Battery',
                                                'Şebeke Ölçekli Konteyner Tip Batarya Enerji Depolama Sistemi': 'Grid-Scale Container Battery Energy Storage System',
                                                'Konteyner Tip Enerji + Güneş Entegrasyonu': 'Container Type Energy + Solar Integration',
                                                'Mobil Güneş Enerjili Römork Sistem': 'Mobile Solar Trailer System',
                                                'Solar Carport + EV Şarj + Enerji Depolama': 'Solar Carport + EV Charging + Energy Storage',
                                                'Elektrikli Araç Şarj Çözümleri': 'EV Charging Solutions',
                                                'Lityum Demir Fosfat (LFP) Batarya Çözümleri': 'LFP Battery Solutions',
                                            }[product.categoryTitle] || product.categoryTitle) : locale === 'ar' ? ({
                                                'Taşınabilir Enerji Depolama': 'تخزين الطاقة المحمولة',
                                                'Yüksek Kapasiteli Taşınabilir Güç': 'طاقة محمولة عالية السعة',
                                                'Sabit / Modüler Batarya': 'بطارية ثابتة / معيارية',
                                                'Araç Tipi Güç Paketi': 'حزمة طاقة المركبات',
                                                'Endüstriyel Güç Sistemleri': 'أنظمة الطاقة الصناعية',
                                                'GES Ürünleri': 'منتجات الطاقة الشمسية',
                                                'Saha Tipi Taşınabilir Güç Ünitesi': 'وحدة طاقة محمولة للميدان',
                                                'Endüstriyel Enerji Depolama (Tek Kabin)': 'تخزين الطاقة الصناعية (كابينة واحدة)',
                                                'Araç Üstü Mobil Enerji Sistemi': 'نظام طاقة متنقل على المركبة',
                                                'Ölçeklenebilir Endüstriyel Batarya': 'بطارية صناعية قابلة للتطوير',
                                                'Şebeke Ölçekli Konteyner Tip Batarya Enerji Depolama Sistemi': 'نظام تخزين طاقة البطارية من نوع حاوية على نطاق الشبكة',
                                                'Konteyner Tip Enerji + Güneş Entegrasyonu': 'تكامل الطاقة بالحاوية + الطاقة الشمسية',
                                                'Mobil Güneş Enerjili Römork Sistem': 'نظام مقطورة بالطاقة الشمسية المتنقلة',
                                                'Solar Carport + EV Şarj + Enerji Depolama': 'مرآب شمسي + شحن المركبات الكهربائية + تخزين الطاقة',
                                                'Elektrikli Araç Şarj Çözümleri': 'حلول شحن المركبات الكهربائية',
                                                'Lityum Demir Fosfat (LFP) Batarya Çözümleri': 'حلول بطاريات ليثيوم فوسفات الحديد'
                                            }[product.categoryTitle] || product.categoryTitle) : product.categoryTitle}
                                        </span>
                                    </div>
                                    <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-slate-900 tracking-tight leading-[1.05]">
                                        {localizedName.split(' ').slice(0, -2).join(' ')}{' '}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                            {localizedName.split(' ').slice(-2).join(' ')}
                                        </span>
                                    </h1>
                                    <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                        {localizedDesc}
                                    </p>
                                </div>

                                {/* Key Specs - Light Theme */}
                                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-10 py-4 sm:py-6 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm max-w-fit mx-auto lg:mx-0">
                                    <div className="space-y-1 text-left">
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-blue-600">
                                            <Battery className="h-4 w-4 sm:h-5 sm:w-5" />
                                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">{locale === 'en' ? 'Energy' : locale === 'ar' ? 'الطاقة' : 'Enerji'}</span>
                                        </div>
                                        <div className="text-lg sm:text-2xl font-black text-slate-900">{translateLabel(formatNumber(product.capacity, locale)
                                            .replace('MWh', locale === 'ar' ? ' ميغاواط ساعة' : 'MWh')
                                            .replace('MW', locale === 'ar' ? ' ميغاواط' : 'MW')
                                            .replace('kWh', locale === 'ar' ? ' كيلوواط ساعة' : 'kWh')
                                            .replace('kW', locale === 'ar' ? ' كيلوواط' : 'kW')
                                            .replace('W', locale === 'ar' ? ' واط' : 'W'), locale)}</div>
                                    </div>
                                    <div className="w-px h-14 bg-slate-200 hidden sm:block" />
                                    <div className="space-y-1 text-left">
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-cyan-600">
                                            <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">{locale === 'en' ? 'Power' : locale === 'ar' ? 'القوة' : 'Güç'}</span>
                                        </div>
                                        <div className="text-lg sm:text-2xl font-black text-slate-900">{translateLabel(formatNumber(product.power, locale)
                                            .replace('MWh', locale === 'ar' ? ' ميغاواط ساعة' : 'MWh')
                                            .replace('MW', locale === 'ar' ? ' ميغاواط' : 'MW')
                                            .replace('kWh', locale === 'ar' ? ' كيلوواط ساعة' : 'kWh')
                                            .replace('kW', locale === 'ar' ? ' كيلوواط' : 'kW')
                                            .replace('W', locale === 'ar' ? ' واط' : 'W'), locale)}</div>
                                    </div>
                                    <div className="w-px h-14 bg-slate-200 hidden sm:block" />
                                    <div className="space-y-1 text-left">
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-600">
                                            <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">{locale === 'en' ? 'Battery' : locale === 'ar' ? 'البطارية' : 'Batarya'}</span>
                                        </div>
                                        <div className="text-lg sm:text-2xl font-black text-slate-900">{locale === 'ar' ? 'ليثيوم فوسفات الحديد' : 'LiFePO₄'}</div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                                    <Link
                                        href={`/${locale}/fiyat-teklifi/`}
                                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
                                    >
                                        <span>{tDetail('labels.getQuote') || 'Teklif Talep Et'}</span>
                                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                    <Link
                                        href={`/${locale}/iletisim/`}
                                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm"
                                    >
                                        <span>{locale === 'tr' ? 'Uzman Danışmanlığı' : locale === 'en' ? 'Expert Consultation' : 'استشارة الخبراء'}</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Content - Larger Product Image */}
                            <div className="lg:col-span-5 relative order-1 lg:order-2 mb-4 lg:mb-0">
                                <div className="relative flex items-center justify-center max-w-[280px] sm:max-w-[350px] lg:max-w-none mx-auto">
                                    {/* Decorative Circle - Hidden on mobile */}
                                    <div className="absolute w-[90%] aspect-square rounded-full bg-gradient-to-br from-blue-100 to-cyan-50 border border-blue-100 hidden sm:block" />

                                    {/* Product Image */}
                                    <div className="relative w-full max-w-[500px] p-2 sm:p-4 lg:p-8 transition-transform duration-700 hover:scale-[1.03] transform-gpu">
                                        <Image
                                            src={product.image}
                                            alt={localizedName}
                                            width={800}
                                            height={800}
                                            className="w-full h-auto object-contain drop-shadow-xl sm:drop-shadow-2xl"
                                            priority
                                        />
                                    </div>

                                    {/* Model Badge */}
                                    <div className="absolute -bottom-2 right-4 sm:right-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-lg hidden sm:block">
                                        <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{locale === 'ar' ? 'رقم الموديل' : 'Model ID'}</div>
                                        <div className="text-lg sm:text-xl font-bold text-slate-900">{translateModelId(product.modelId, locale)}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Features / Specs Grid */}
                <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
                                {tDetail('labels.technicalSpecs') || 'Özellikler'}
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4">
                                {locale === 'tr' ? `${localizedName} ürününün teknik özellikleri ve avantajları` : locale === 'ar' ? `المواصفات الفنية والمزايا لـ ${localizedName}` : `${localizedName} technical specifications and advantages`}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {localizedFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 card hover-lift border border-blue-200 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 flex-shrink-0" />
                                    <span className="text-sm sm:text-base text-neutral-700 font-medium">{formatNumber(translateLabel(feature, locale), locale)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Performance and Runtime Stats - Light Theme */}
                {product.runtimeStats && (
                    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden text-left">
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

                        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10 px-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-3">
                                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                                        {locale === 'en' ? 'Real-World Performance' : locale === 'ar' ? 'أداء عالم حقيقي' : 'Gerçek Dünya Performansı'}
                                    </span>
                                </div>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-3 tracking-tight">
                                    {locale === 'en' ? 'Device-Based Runtime' : locale === 'ar' ? 'مدة التشغيل حسب الجهاز' : 'Cihaz Bazlı Çalışma Süreleri'}
                                </h2>
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                                    {formatNumber(tDetail.has(`products.${slug}.runtimeSummary`)
                                        ? tDetail(`products.${slug}.runtimeSummary`)
                                        : locale === 'en' && product.runtimeSummary
                                            ? product.runtimeSummary
                                                .replace('taşınabilir güç paketleri', 'portable power packs')
                                                .replace('modelinde bir hiltiyi', 'model can power a hammer drill for')
                                                .replace('bir evi ise', 'and a home for')
                                                .replace('aralığında kesintisiz besleyebilmektedir', 'continuously')
                                                .replace(/saat/gi, 'hours')
                                            : product.runtimeSummary || '', locale)}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                                {product.runtimeStats.map((stat, index) => {
                                    const Icon = getIcon(stat.icon);
                                    return (
                                        <div key={index} className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="p-2 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors">
                                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                                    </div>
                                                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{formatNumber(stat.power, locale)
                                                        .replace('MWh', locale === 'ar' ? ' ميغاواط ساعة' : 'MWh')
                                                        .replace('MW', locale === 'ar' ? ' ميغاواط' : 'MW')
                                                        .replace('kWh', locale === 'ar' ? ' كيلوواط ساعة' : 'kWh')
                                                        .replace('kW', locale === 'ar' ? ' كيلوواط' : 'kW')
                                                        .replace('W', locale === 'ar' ? ' واط' : 'W')}</div>
                                                </div>
                                                <div className="space-y-0.5">
                                                    <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">{translateLabel(stat.label, locale)}</h4>
                                                    <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                                                        {formatNumber(translateLabel(stat.duration, locale), locale)}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Decorative element */}
                                            <div className="absolute bottom-3 right-3 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <Icon className="w-8 h-8 text-slate-900" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* Usage Scenarios Comparison */}
                {(slug.includes('2-7-kwh') || slug.includes('5-4-kwh')) && (
                    <section className="py-24 bg-white overflow-hidden text-left">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20">

                                {/* Home Scenario */}
                                <div className="relative p-8 sm:p-12 rounded-[3rem] bg-slate-50 border border-slate-100 overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Home className="w-40 h-40 text-slate-900" />
                                    </div>
                                    <div className="relative z-10 space-y-8">
                                        <div className="space-y-4">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest">
                                                {locale === 'en' ? 'Example Scenario 01' : locale === 'ar' ? 'سيناريو مثال ٠١' : 'Örnek Senaryo 01'}
                                            </div>
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                                                {locale === 'en' ? 'General Home Usage' : locale === 'ar' ? 'استخدام منزلي عام' : 'Genel Ev Kullanımı'}
                                            </h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                {(locale === 'en' ? [
                                                    { label: 'Refrigerator', power: '150W' },
                                                    { label: 'TV', power: '100W' },
                                                    { label: 'Modem', power: '20W' },
                                                    { label: 'LED Lighting', power: '80W' }
                                                ] : locale === 'ar' ? [
                                                    { label: 'ثلاجة', power: formatNumber('150', locale) + ' واط' },
                                                    { label: 'تلفزيون', power: formatNumber('100', locale) + ' واط' },
                                                    { label: 'مودم', power: formatNumber('20', locale) + ' واط' },
                                                    { label: 'إضاءة LED', power: formatNumber('80', locale) + ' واط' }
                                                ] : [
                                                    { label: 'Buzdolabı', power: '150W' },
                                                    { label: 'TV', power: '100W' },
                                                    { label: 'Modem', power: '20W' },
                                                    { label: 'LED Aydınlatma', power: '80W' }
                                                ]).map((item, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                        {item.label}: <span className="font-bold text-slate-900 ml-auto">{item.power}</span>
                                                    </div>
                                                ))}
                                                <div className="col-span-2 pt-4 border-t border-slate-200 flex justify-between items-center">
                                                    <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                                                        {locale === 'en' ? 'Total Load' : locale === 'ar' ? 'الحمل الإجمالي' : 'Toplam Yük'}
                                                    </span>
                                                    <span className="text-xl font-black text-blue-600">≈ {formatNumber('350', locale)} {locale === 'ar' ? 'واط' : 'W'}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                                                <span className="font-bold text-slate-900">{locale === 'ar' ? 'حزمة ٢.٧ كيلوواط ساعة' : formatNumber('2.7', locale) + ' kWh ' + (locale === 'en' ? 'Pack' : 'Paket')}</span>
                                                <span className="text-emerald-600 font-black text-lg">≈ {formatNumber('7', locale)}–{formatNumber('8', locale)} {locale === 'en' ? 'Hours' : locale === 'ar' ? 'ساعات' : 'Saat'}</span>
                                            </div>
                                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                                                <span className="font-bold text-slate-900">{locale === 'ar' ? 'حزمة ٥.٤ كيلوواط ساعة' : formatNumber('5.4', locale) + ' kWh ' + (locale === 'en' ? 'Pack' : 'Paket')}</span>
                                                <span className="text-emerald-600 font-black text-lg">≈ {formatNumber('15', locale)}–{formatNumber('16', locale)} {locale === 'en' ? 'Hours' : locale === 'ar' ? 'ساعات' : 'Saat'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Site Scenario - Now Light Theme with Orange Accents */}
                                <div className="relative p-8 sm:p-12 rounded-[3rem] bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Hammer className="w-40 h-40 text-amber-600" />
                                    </div>
                                    <div className="relative z-10 space-y-8">
                                        <div className="space-y-4">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest border border-amber-200">
                                                {locale === 'en' ? 'Example Scenario 02' : locale === 'ar' ? 'سيناريو مثال ٠٢' : 'Örnek Senaryo 02'}
                                            </div>
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                                                {locale === 'en' ? 'Site / Construction Usage' : locale === 'ar' ? 'استخدام الموقع / البناء' : 'Saha / İnşaat Kullanımı'}
                                            </h3>
                                            <div className="grid grid-cols-1 gap-4">
                                                {(locale === 'en' ? [
                                                    { label: 'Demolition Hammer', power: '1000W' },
                                                    { label: 'Site Lighting', power: '100W' }
                                                ] : locale === 'ar' ? [
                                                    { label: 'مطرقة الهدم', power: formatNumber('1000', locale) + ' واط' },
                                                    { label: 'إضاءة الموقع', power: formatNumber('100', locale) + ' واط' }
                                                ] : [
                                                    { label: 'Hilti / Kırıcı', power: '1000W' },
                                                    { label: 'Saha Aydınlatma', power: '100W' }
                                                ]).map((item, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                                        {item.label}: <span className="font-bold text-slate-900 ml-auto">{item.power}</span>
                                                    </div>
                                                ))}
                                                <div className="pt-4 border-t border-amber-200 flex justify-between items-center">
                                                    <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                                                        {locale === 'en' ? 'Total Load' : locale === 'ar' ? 'الحمل الإجمالي' : 'Toplam Yük'}
                                                    </span>
                                                    <span className="text-xl font-black text-amber-600">≈ {formatNumber('1100', locale)} {locale === 'ar' ? 'واط' : 'W'}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-amber-100">
                                                <span className="font-bold text-slate-900">{locale === 'ar' ? 'حزمة ٢.٧ كيلوواط ساعة' : `2.7 kWh ${locale === 'en' ? 'Pack' : 'Paket'}`}</span>
                                                <span className="text-amber-600 font-black text-lg">≈ {formatNumber('2.3', locale)} {locale === 'en' ? 'Hours' : locale === 'ar' ? 'ساعات' : 'Saat'}</span>
                                            </div>
                                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-amber-100">
                                                <span className="font-bold text-slate-900">{locale === 'ar' ? 'حزمة ٥.٤ كيلوواط ساعة' : `5.4 kWh ${locale === 'en' ? 'Pack' : 'Paket'}`}</span>
                                                <span className="text-amber-600 font-black text-lg">≈ {formatNumber('4.8', locale)}–{formatNumber('5', locale)} {locale === 'en' ? 'Hours' : locale === 'ar' ? 'ساعات' : 'Saat'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                )
                }

                {/* Usage Areas Section (Only if available) */}
                {
                    product.usageAreas && product.usageAreas.length > 0 && (
                        <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
                                        {locale === 'tr' ? 'Kullanım Alanları' : locale === 'ar' ? 'مجالات الاستخدام' : 'Usage Areas'}
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4">
                                        {localizedName} {locale === 'tr' ? 'ürününün ideal kullanım alanları' : locale === 'ar' ? 'مجالات الاستخدام المثالية' : 'ideal usage areas'}
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                                    {product.usageAreas.map((area, index) => {
                                        const IconComponent = getIcon(area.icon);
                                        return (
                                            <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 card hover-lift border-2 border-blue-200 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-50 to-slate-50 min-h-[60px] sm:min-h-[70px]">
                                                <div className="flex-shrink-0">
                                                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-slate-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                                                    </div>
                                                </div>
                                                <span className="text-xs sm:text-sm md:text-base text-neutral-700 font-medium group-hover:text-neutral-900 transition-colors duration-300">
                                                    {translateLabel(area.label, locale)}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>
                    )
                }

                {/* Why Revium Section */}
                <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-blue-50 via-white to-teal-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
                                {locale === 'tr' ? 'Neden Revium?' : locale === 'ar' ? 'لماذا ريفيوم؟' : 'Why Revium?'}
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed px-4">
                                {localizedName} {locale === 'tr' ? 'ürününü seçmeniz için güçlü nedenler' : locale === 'ar' ? 'أسباب قوية لاختيار هذا المنتج' : 'reasons to choose this product'}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center max-w-5xl mx-auto">
                            {/* Card 1 */}
                            <div className="text-center group border border-purple-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg w-full max-w-xs bg-white">
                                <div className="relative inline-block mb-4 sm:mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                                    <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-teal-500 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                        <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 transition-colors duration-300 mb-3 sm:mb-4 group-hover:text-blue-600">
                                    {locale === 'tr' ? 'Güvenilir Teknoloji' : locale === 'ar' ? 'تقنية موثوقة' : 'Reliable Technology'}
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                    {locale === 'tr' ? 'En son teknoloji ve güvenilir çözümlerle donatılmış ürünler' : locale === 'ar' ? 'منتجات مجهزة بأحدث التقنيات والحلول الموثوقة' : 'Equipped with the latest technology and reliable solutions'}
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="text-center group border border-purple-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg w-full max-w-xs bg-white">
                                <div className="relative inline-block mb-4 sm:mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-600 rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                                    <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-slate-600 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                        <Battery className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 transition-colors duration-300 mb-3 sm:mb-4 group-hover:text-blue-600">
                                    {locale === 'tr' ? 'Yüksek Performans' : locale === 'ar' ? 'أداء عالي' : 'High Performance'}
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                    {locale === 'tr' ? 'Uzun ömürlü ve yüksek verimlilikte enerji depolama çözümleri' : locale === 'ar' ? 'حلول تخزين طاقة طويلة الأمد وعالية الكفاءة' : 'Long-lasting and high-efficiency energy storage solutions'}
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="text-center group border border-purple-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg w-full max-w-xs sm:col-span-2 lg:col-span-1 sm:max-w-md lg:max-w-xs bg-white">
                                <div className="relative inline-block mb-4 sm:mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                                    <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                        <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 transition-colors duration-300 mb-3 sm:mb-4 group-hover:text-orange-600">
                                    {locale === 'tr' ? 'Global Kalite' : locale === 'ar' ? 'جودة عالمية' : 'Global Quality'}
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                    {locale === 'tr' ? 'Uluslararası standartlarda kalite ve sertifikasyonlar' : locale === 'ar' ? 'معايير جودة وشهادات دولية' : 'International standards of quality and certifications'}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-sky-50 via-blue-50 to-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-800 mb-3 sm:mb-4 px-4">
                                {localizedName} {locale === 'tr' ? 'Hakkında Daha Fazla Bilgi' : locale === 'ar' ? 'مزيد من المعلومات حول' : 'More Information About'}
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
                                {locale === 'tr' ? 'Bu ürün hakkında detaylı bilgi almak veya fiyat teklifi talep etmek için uzman ekibimizle iletişime geçin' : locale === 'ar' ? 'اتصل بفريق خبرائنا للحصول على معلومات مفصلة أو طلب عرض سعر لهذا المنتج' : 'Contact our expert team for detailed information or to request a quote for this product'}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                                <Link
                                    href={`/${locale}/fiyat-teklifi/`}
                                    className="btn btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3"
                                >
                                    <span>{tDetail('labels.getQuote') || 'Fiyat Teklifi Talep Et'}</span>
                                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    href={`/${locale}/iletisim/`}
                                    className="btn btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3"
                                >
                                    <span>{locale === 'tr' ? 'Uzman Danışmanlığı' : locale === 'ar' ? 'استشارة الخبراء' : 'Expert Consultation'}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;

    if (!slug) {
        return {
            title: 'Ürün Bulunamadı | Revium',
        };
    }

    const tDetail = await getTranslations({ locale, namespace: 'productDetails' });
    const product = products[slug];
    const name = tDetail.has(`products.${slug}.name`) ? tDetail(`products.${slug}.name`) : product?.name || (slug ? slug.toUpperCase().replace(/-/g, ' ') : '');
    const capacity = product?.capacity || '';

    return {
        title: `${name} | Revium`,
        description: `Revium ${name} - ${capacity} kapasiteli enerji depolama sistemi`,
    };
}
