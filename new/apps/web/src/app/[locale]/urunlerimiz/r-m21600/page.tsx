import { ProductPage } from '@/components/templates/product-page'

const product = {
  name: 'R-M21600',
  title: 'Güç Katmanı – Modüler Enerji Depolama Ünitesi',
  description: 'Modüler tasarımı ile esnek enerji depolama çözümü. Katmanlı ölçeklenme ve aynı taban alanda kapasite artışı ile endüstriyel ve ticari uygulamalar için ideal çözüm.',
  image: '/images/products/stack-21-6kwh-1.png',
  features: [
    // Teknik Özellikler
    'Nominal Gerilim: 51.2 V DC',
    'Modüler Kapasite: 105/210/315/420 Ah • 5.4/10.8/16.2/21.6 kWh',
    'Ömür: ≈4000 cycle',
    'Boyutlar: 400 × 391 × 365/609/853/1097 mm',
    'Ağırlık: 66/114/162/210 kg',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    'Katmanlı ölçeklenme',
    'Aynı taban alanda kapasite artışı',
    'Modüler tasarım',
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

export default function RM21600Page() {
  return <ProductPage {...product} />
}