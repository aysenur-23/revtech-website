import { ProductPage } from '@/components/templates/product-page'

const product = {
  name: 'R-S10500',
  title: '10.5 kWh Güç Paketi',
  description: 'Raf ve kabin tipi kurulum için 10.5 kWh kapasiteli güç paketi. Yüksek kapasite ve 3-4 kW inverter opsiyonları ile endüstriyel kullanım için ideal çözüm.',
  image: '/images/products/10-5kwh-1.png',
  features: [
    // Teknik Özellikler
    'Kapasite: 10.5 kWh (LiFePO₄)',
    'Güç Çıkışı: 220 VAC, 3000-4000 W (pure/tam sinüs seçenekleri)',
    'PV/MPPT: ~3000 W (modeline göre)',
    'Ömür: ≈4000 cycle',
    'Boyutlar: 400 × 391 × 732 mm',
    'Ağırlık: 100 kg',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    'Yüksek kapasite',
    '3-4 kW inverter opsiyonları',
    'Raf/kabin uyumlu tasarım',
    'Endüstriyel kullanım',
    'Kolay kurulum',
    'Uzun ömürlü'
  ],
  applications: [
    'Endüstriyel tesisler',
    'Kabin sistemleri',
    'Konteyner uygulamaları',
    'Mobil ofisler',
    'İnşaat sahaları',
    'Acil durum sistemleri'
  ]
}

export default function RS10500Page() {
  return <ProductPage {...product} />
}