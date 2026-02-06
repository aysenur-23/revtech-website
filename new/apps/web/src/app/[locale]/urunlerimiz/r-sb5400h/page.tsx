import { ProductPage } from '@/components/templates/product-page'

const product = {
  name: 'R-SB5400H',
  title: '5.4 kWh Taşınabilir Güç Paketi',
  description: 'Yüksek çıkış gücü ile 5.4 kWh kapasiteli taşınabilir güç paketi. 4 kW yüksek güç ve 3 kW PV desteği ile zorlu enerji ihtiyaçlarını karşılar.',
  image: '/images/products/5-4kwh-4000w-1.png',
  features: [
    // Teknik Özellikler
    'Kapasite: 5.4 kWh (LiFePO₄)',
    'Güç Çıkışı: 220 VAC, 4000 W (pure sine)',
    'PV/MPPT: 3000 W PV şarj',
    'Çevrim Ömrü: ≈4000 cycle',
    'Boyutlar: 400 × 391 × 488 mm',
    'Ağırlık: 67 kg',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    '4 kW yüksek güç',
    '3 kW PV desteği',
    'Yüksek çıkış gücü',
    'USB ve AC çıkışları',
    'LED ışık sistemi',
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

export default function RSB5400HPage() {
  return <ProductPage {...product} />
}
