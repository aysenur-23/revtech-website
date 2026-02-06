import { ProductPage } from '@/components/templates/product-page'

const product = {
  name: 'REV-2',
  title: 'Güç Katmanı – Modüler Enerji Depolama Ünitesi',
  description: 'Modüler tasarımı ile esnek enerji depolama çözümü. Farklı kapasite seçenekleri ile endüstriyel ve ticari uygulamalar için ideal çözüm.',
  image: '/images/products/modular-1.png',
  features: [
    // Teknik Özellikler
    'Kapasite: Modüler',
    'AC Çıkış: 51.2 VDC nominal',
    'Batarya Çalışma: 51.2 VDC nominal (modüler)',
    'Boyutlar: 400 × 391 × 365/609/853/1097 mm',
    'Ağırlık: 66/114/162/210 kg',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    'Modüler tasarım',
    'Esnek kapasite',
    'Endüstriyel kullanım',
    'Kolay kurulum',
    'Uzun ömürlü',
    'Yüksek verim'
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

export default function Rev2Page() {
  return <ProductPage {...product} />
}