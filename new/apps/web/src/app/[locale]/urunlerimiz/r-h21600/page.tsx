import { ProductPage } from '@/components/templates/product-page'
import { Truck, Battery, Zap, Shield } from 'lucide-react'

const product = {
  name: 'R-H21600',
  title: 'Hilux Güç Paketi',
  description: 'Araç Üstü - Hilux araçları için özel olarak tasarlanmış araç üstü güç paketi. 80 kWh enerji ve çoklu tek/üç-faz kullanım ile mobil enerji çözümü sunar.',
  image: '/images/products/hilux-21-6kwh-1.png',
  features: [
    // Teknik Özellikler
    'Enerji: 80 kWh (LiFePO₄)',
    'Çıkış: 3×10 kW @ 380 VAC (tek çıkış 20 kW\'a kadar) / 5×5 kW @ 220 VAC (tek çıkış 10 kW\'a kadar)',
    'PV Girişi: 20 kW',
    'Boyutlar: Araç entegrasyonuna bağlı',
    'Ağırlık: Araç entegrasyonuna bağlı',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    'Çoklu tek/üç-faz kullanım',
    '20 kW PV desteği',
    'Araç uyumlu tasarım',
    'Hilux entegrasyonu',
    'Mobil enerji çözümü',
    'Endüstriyel kullanım'
  ],
  applications: [
    'Hilux araçları',
    'Mobil enerji sistemleri',
    'Araç üstü kurulumlar',
    'Endüstriyel araçlar',
    'Savunma sanayi',
    'Acil durum araçları'
  ]
}

export default function RH21600Page() {
  return <ProductPage {...product} />
}
