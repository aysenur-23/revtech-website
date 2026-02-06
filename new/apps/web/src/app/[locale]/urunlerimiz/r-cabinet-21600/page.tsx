import { Metadata } from 'next'
import { ProductPage } from '@/components/templates/product-page'

export const metadata: Metadata = {
  title: 'Güç Kabini',
  description: '21.6 kWh kapasiteli entegre güç kabini sistemi. Sabit kurulum için yüksek kapasiteli enerji depolama çözümü. 5 kW çıkış gücü ve modüler tasarım.',
  openGraph: {
    title: 'Güç Kabini',
    description: '21.6 kWh kapasiteli entegre güç kabini sistemi. Sabit kurulum için yüksek kapasiteli enerji depolama çözümü. 5 kW çıkış gücü ve modüler tasarım.',
    images: ['/images/products/cabin-power.png']
  }
}

const productFeatures = [
  // Teknik Özellikler
  '21.6 kWh enerji kapasitesi',
  '5 kW çıkış gücü',
  '51.2 VDC nominal voltaj',
  '600 × 500 × 1000 mm boyutlar',
  '200 kg ağırlık',
  'Uzun ömürlü batarya teknolojisi',
  
  // Özellikler
  'Entegre sistem tasarımı',
  'Sabit kurulum için optimize edilmiş',
  'Yüksek kapasiteli enerji depolama',
  'Modüler yapı',
  'Güvenli operasyon',
  'Kolay bakım ve servis',
  
  // Kullanım Alanları
  'Endüstriyel tesisler',
  'Veri merkezleri',
  'Hastaneler ve sağlık tesisleri',
  'Telekomünikasyon merkezleri',
  'Güneş enerjisi santralleri',
  'Kritik altyapı sistemleri'
]

export default function Cabinet21600Page() {
  return (
    <ProductPage
      name="R-CABINET-21600"
      title="Güç Kabini"
      description="21.6 kWh Entegre Sistem - Sabit kurulum için tasarlanmış yüksek kapasiteli entegre güç kabini sistemi. 21.6 kWh enerji kapasitesi ve 5 kW çıkış gücü ile kritik altyapı sistemleri için güvenilir enerji çözümü."
      image="/images/products/cabin-power.png"
      features={productFeatures}
      applications={[
        'Endüstriyel tesisler',
        'Veri merkezleri',
        'Hastaneler ve sağlık tesisleri',
        'Telekomünikasyon merkezleri',
        'Güneş enerjisi santralleri',
        'Kritik altyapı sistemleri'
      ]}
      specifications={{
        'Enerji Kapasitesi': '21.6 kWh',
        'Çıkış Gücü': '5 kW',
        'Voltaj': '51.2 VDC nominal',
        'Boyutlar': '600 × 500 × 1000 mm',
        'Ağırlık': '200 kg',
        'Batarya Tipi': 'LiFePO₄',
        'Döngü Ömrü': 'Uzun ömürlü',
        'MPPT': '≈30–80 VDC (modeline göre)'
      }}
    />
  )
}