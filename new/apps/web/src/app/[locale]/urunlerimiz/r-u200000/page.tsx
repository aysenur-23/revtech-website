import { ProductPage } from '@/components/templates/product-page'

const product = {
  name: 'R-U200000',
  title: 'Savunma Sanayi UNIMOG Güç Paketi',
  description: 'Araç Üstü - UNIMOG araçları için özel olarak tasarlanmış araç üstü güç paketi. 200 kWh enerji ve 60 kW yüksek güç ile zorlu koşullarda güvenilir enerji sağlar.',
  image: '/images/products/unimog-200kwh-1.jpg',
  features: [
    // Teknik Özellikler
    'Enerji: 200 kWh',
    'Çıkış: 230/380 VAC, 60 kW',
    'PV Girişi: 80 kW',
    'Şarj: 100 kW DC hızlı / 22 kW AC',
    'Boyutlar: Araç entegrasyonuna bağlı',
    'Ağırlık: Araç entegrasyonuna bağlı',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    '60 kW yüksek güç',
    '100 kW DC hızlı şarj',
    'UNIMOG uyumlu tasarım',
    'Endüstriyel kullanım',
    'Savunma sanayi uygulamaları',
    'Zorlu koşullarda kullanım'
  ],
  applications: [
    'UNIMOG araçları',
    'Mobil enerji sistemleri',
    'Araç üstü kurulumlar',
    'Endüstriyel araçlar',
    'Savunma sanayi',
    'Acil durum araçları'
  ]
}

export default function RU200000Page() {
  return <ProductPage {...product} />
}