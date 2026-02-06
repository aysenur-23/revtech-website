import { ProductPage } from '@/components/templates/product-page'

const product = {
  name: 'R-P5400',
  title: '5.4 kWh Taşınabilir (Yüksek Çıkış)',
  description: 'Yüksek çıkış gücü ile 5.4 kWh kapasiteli taşınabilir güç paketi. Güçlü performansı ve yüksek çıkış kapasitesi ile zorlu enerji ihtiyaçlarını karşılar.',
  image: '/images/products/5-4kwh-h-1.png',
  features: [
    // Teknik Özellikler
    'Kapasite: 5.4 kWh',
    'AC Çıkış: 220–230 VAC',
    'Batarya Çalışma: ≈20–28.8 VDC',
    'PV/MPPT: 30–80 VDC (Voc ≈102 V)',
    'Boyutlar: 400 × 391 × 488 mm',
    'Ağırlık: 67 kg',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    'Yüksek çıkış gücü',
    'Güçlü performans',
    'Modüler yapı',
    'USB ve AC çıkışları',
    'LED ışık sistemi',
    'Güneş paneli uyumluluğu',
    'Hızlı şarj desteği'
  ],
  applications: [
    'Büyük ölçekli evler',
    'Orta ölçekli işletmeler',
    'Kamp ve karavan',
    'Acil durum yedeklemesi',
    'Dış mekan etkinlikleri',
    'Mobil ofisler'
  ]
}

export default function RP5400Page() {
  return <ProductPage {...product} />
}