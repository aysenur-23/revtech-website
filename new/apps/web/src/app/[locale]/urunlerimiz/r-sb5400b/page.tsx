import { ProductPage } from '@/components/templates/product-page'

const product = {
  name: 'R-SB5400B',
  title: '5.4 kWh Taşınabilir Güç Paketi',
  description: 'Büyük kasa tasarımı ile 5.4 kWh kapasiteli taşınabilir güç paketi. 3 kW saf sinüs çıkışı ve 1.5 kW PV ile hızlı dolum.',
  image: '/images/products/5-4kwh-2000w-1.png',
  features: [
    // Teknik Özellikler
    'Kapasite: 5.4 kWh (LiFePO₄)',
    'Güç Çıkışı: 220 VAC, 3000 W (pure sine)',
    'PV/MPPT: 1500 W PV şarj',
    'Çevrim Ömrü: ≈4000 cycle',
    'Boyutlar: 800 × 458 × 910 mm',
    'Ağırlık: 60 kg',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    '3 kW saf sinüs çıkış',
    '1.5 kW PV ile hızlı dolum',
    'Büyük kasa tasarımı',
    'USB ve AC çıkışları',
    'LED ışık sistemi',
    'Hızlı şarj desteği'
  ],
  applications: [
    'Orta ölçekli evler',
    'Küçük işletmeler',
    'Kamp ve karavan',
    'Acil durum yedeklemesi',
    'Dış mekan etkinlikleri',
    'Mobil ofisler'
  ]
}

export default function RSB5400BPage() {
  return <ProductPage {...product} />
}