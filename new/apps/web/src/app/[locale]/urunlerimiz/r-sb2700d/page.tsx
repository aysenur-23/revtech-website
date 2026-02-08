import { ProductPage } from '@/components/templates/product-page'

const product = {
  name: 'R-SB2700D',
  title: '2.7 kWh Taşınabilir Güç Paketi',
  description: 'Dayanıklı tasarımı ile zorlu koşullarda kullanım için ideal 2.7 kWh taşınabilir güç paketi. Kompakt/sağlam gövde ve 2 kW saf sinüs çıkışı.',
  image: '/images/products/2-7kwh-b-1.png',
  features: [
    // Teknik Özellikler
    'Kapasite: 2.7 kWh (LiFePO₄)',
    'Güç Çıkışı: 230 VAC, 2000 W (pure sine)',
    'PV/MPPT: 700 W PV şarj',
    'Çevrim Ömrü: ≈4000 cycle',
    'Boyutlar: 500 × 335 × 285 mm',
    'Ağırlık: 35 kg',
    'Çalışma Sıcaklığı: -20°C ile +60°C',
    'Garanti: 3 yıl',
    // Özellikler
    'Kompakt/sağlam gövde',
    '2 kW saf sinüs çıkış',
    'Dayanıklı kasa tasarımı',
    'USB ve AC çıkışları',
    'LED ışık sistemi',
    'Hızlı şarj desteği'
  ],
  applications: [
    'İnşaat sahaları',
    'Acil durumlar',
    'Seyahat ve kamp',
    'Dış mekan etkinlikleri',
    'Küçük işletmeler',
    'Mobil ofisler'
  ]
}

export default function RSB2700DPage() {
  return <ProductPage {...product} />
}
