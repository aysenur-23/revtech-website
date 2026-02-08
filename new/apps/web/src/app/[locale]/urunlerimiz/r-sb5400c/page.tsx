import { ProductPage } from '@/components/templates/product-page'

const product = {
  name: 'R-SB5400C',
  title: '5.4 kWh Taşınabilir Güç Paketi',
  description: 'Orta kasa tasarımı ile 5.4 kWh kapasiteli taşınabilir güç paketi. 3 kW saf sinüs çıkışı ve saha kullanımına uygun form.',
  image: '/images/products/5-4kwh-3000w-1.png',
  features: [
    // Teknik Özellikler
    'Kapasite: 5.4 kWh (LiFePO₄)',
    'Güç Çıkışı: 220 VAC, 3000 W (pure sine)',
    'PV/MPPT: 1500 W PV şarj',
    'Çevrim Ömrü: ≈4000 cycle',
    'Boyutlar: 400 × 391 × 410 mm',
    'Ağırlık: 62 kg',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    '3 kW saf sinüs çıkış',
    'Saha kullanımına uygun form',
    'Orta kasa tasarımı',
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

export default function RSB5400CPage() {
  return <ProductPage {...product} />
}