import { ProductPage } from '@/components/templates/product-page'

const product = {
  name: 'R-SB2700B',
  title: '2.7 kWh Taşınabilir Güç Paketi',
  description: 'Model B tasarımı ile 2.7 kWh kapasiteli taşınabilir güç paketi. 2 kW saf sinüs çıkışı ve 700 W MPPT ile güneş entegrasyonu.',
  image: '/images/products/2-7kwh-b-1.png',
  features: [
    // Teknik Özellikler
    'Kapasite: 2.7 kWh (LiFePO₄)',
    'Güç Çıkışı: 230 VAC, 2000 W (pure sine)',
    'PV/MPPT: 700 W PV şarj',
    'Çevrim Ömrü: ≈4000 cycle',
    'Boyutlar: 550 × 391 × 317 mm',
    'Ağırlık: 33 kg',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    '2 kW saf sinüs çıkış',
    '700 W MPPT ile güneş entegrasyonu',
    'Model B tasarımı',
    'USB ve AC çıkışları',
    'LED ışık sistemi',
    'Hızlı şarj desteği'
  ],
  applications: [
    'Profesyonel kullanım',
    'Endüstriyel uygulamalar',
    'Acil durum sistemleri',
    'Mobil ofisler',
    'Küçük işletmeler',
    'Elektronik cihazlar'
  ]
}

export default function RSB2700BPage() {
  return <ProductPage {...product} />
}