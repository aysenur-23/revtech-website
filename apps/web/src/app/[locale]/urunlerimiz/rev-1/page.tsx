import { ProductPage } from '@/components/templates/product-page'

const product = {
  name: 'REV-1',
  title: '10.5 kWh Güç Paketi (Raf/Kabin Tip)',
  description: 'Raf ve kabin tipi kurulum için 10.5 kWh kapasiteli güç paketi. Yüksek kapasitesi ve modüler tasarımı ile endüstriyel kullanım için ideal çözüm.',
  image: '/images/products/10-5kwh-1.png',
  features: [
    // Teknik Özellikler
    'Kapasite: 10.5 kWh',
    'AC Çıkış: 220 VAC',
    'Batarya Çalışma: ≈51.2 VDC nominal',
    'PV/MPPT: ≈30–80 VDC (modeline göre)',
    'Boyutlar: 400 × 391 × 732 mm',
    'Ağırlık: 100 kg',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    'Raf/kabin uyumlu tasarım',
    'Yüksek kapasite',
    'Modüler yapı',
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

export default function Rev1Page() {
  return <ProductPage {...product} />
}