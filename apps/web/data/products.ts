export interface Product {
  slug: string
  name: string
  images: string[]
  description?: string
  specifications?: Record<string, string>
  price?: number
  category?: string
  capacity_kwh?: string
  power_output?: string
  output_w?: string | string[]
  battery_type?: string
  dimensions?: string
  weight?: string
  features?: string[]
  cycles?: string
  mppt_w?: string
}

export const PRODUCTS: Product[] = [
  // 2.7 kWh Model A
  {
    slug: 'r-p2700',
    name: '2.7 kWh Model A',
    images: ['/images/products/2-7kwh-a-1.png'],
    category: 'portable',
    capacity_kwh: '2.7',
    dimensions: '550 × 391 × 317 mm',
    weight: '33 kg',
    output_w: '230 VAC',
    battery_type: '≈20–28.8 VDC',
    mppt_w: '30–80 VDC (Voc ≈102 V)',
    cycles: 'Uzun ömürlü'
  },
  // 2.7 kWh Model B
  {
    slug: 'r-sb2700b',
    name: '2.7 kWh Model B',
    images: ['/images/products/2-7kwh-b-1.png'],
    category: 'portable',
    capacity_kwh: '2.7',
    dimensions: '550 × 391 × 317 mm',
    weight: '33 kg',
    output_w: '230 VAC',
    battery_type: '≈20–28.8 VDC',
    mppt_w: '30–80 VDC (Voc ≈102 V)',
    cycles: 'Uzun ömürlü'
  },
  // 5.4 kWh 2000W
  {
    slug: 'r-sb5400b',
    name: '5.4 kWh 2000W',
    images: ['/images/products/5-4kwh-2000w-1.png'],
    category: 'portable',
    capacity_kwh: '5.4',
    dimensions: '800 × 458 × 910 mm',
    weight: '60 kg',
    output_w: '2000W',
    battery_type: '≈20–28.8 VDC',
    mppt_w: '30–80 VDC (Voc ≈102 V)',
    cycles: 'Uzun ömürlü'
  },
  // Güç Kabini
  {
    slug: 'r-cabinet-21600',
    name: 'Güç Kabini',
    images: ['/images/products/cabin-power.png'],
    category: 'cabin',
    capacity_kwh: '21.6',
    dimensions: '600 × 500 × 1000 mm',
    weight: '200 kg',
    output_w: '5000W',
    battery_type: '51.2 VDC nominal',
    mppt_w: '≈30–80 VDC (modeline göre)',
    cycles: 'Uzun ömürlü'
  },
  // Güç Katmanı – Modüler Enerji Depolama Ünitesi
  {
    slug: 'r-m21600',
    name: 'Güç Katmanı – Modüler Enerji Depolama Ünitesi',
    images: ['/images/products/stack-21-6kwh-1.png'],
    category: 'cabin',
    capacity_kwh: 'Modüler',
    dimensions: '400 × 391 × 365/609/853/1097 mm',
    weight: '66/114/162/210 kg',
    output_w: '51.2 VDC nominal',
    battery_type: '51.2 VDC nominal (modüler)',
    cycles: 'Uzun ömürlü'
  },
  // GridPack 100
  {
    slug: 'gridpack-100',
    name: 'GridPack 100',
    images: ['/images/products/gridpack-100.png'],
    category: 'cabin',
    capacity_kwh: '100',
    dimensions: 'Proje bazlı',
    weight: 'Proje bazlı',
    output_w: 'Özelleştirilebilir',
    battery_type: 'LiFePO₄',
    cycles: 'Uzun ömürlü'
  },
  // Hilux Güç Paketi
  {
    slug: 'r-h21600',
    name: 'Hilux Güç Paketi',
    images: ['/images/products/hilux-21-6kwh-1.png'],
    category: 'vehicle',
    capacity_kwh: '80',
    dimensions: 'Araç entegrasyonuna bağlı',
    weight: 'Araç entegrasyonuna bağlı',
    output_w: '20000W',
    battery_type: '20 kW sistemle uyumlu (volt aralığı proje bazlı)',
    cycles: '4000'
  },
  // UNIMOG Güç Paketi
  {
    slug: 'r-u200000',
    name: 'Savunma Sanayi UNIMOG Güç Paketi',
    images: ['/images/products/unimog-200kwh-1.jpg'],
    category: 'vehicle',
    capacity_kwh: '200',
    dimensions: 'Araç entegrasyonuna bağlı',
    weight: 'Araç entegrasyonuna bağlı',
    output_w: '60000W',
    battery_type: 'DC hızlı şarj 100 kW (AC şarj 22 kW) – PV 80 kW sistemle uyumlu (volt aralığı proje bazlı)',
    cycles: '2000'
  },
  // GES Ürünleri
  {
    slug: 'ges-power-station',
    name: 'GES & Güç İstasyonu',
    images: ['/images/products/ges-power-station.png'],
    category: 'ges',
    capacity_kwh: 'Özelleştirilebilir',
    dimensions: 'Proje bazlı',
    weight: 'Proje bazlı',
    output_w: 'Özelleştirilebilir',
    battery_type: 'LiFePO₄',
    cycles: 'Uzun ömürlü'
  },
  {
    slug: 'solarport-duo',
    name: 'Solarport DUO',
    images: ['/images/products/solarport-duo.png'],
    category: 'ges',
    capacity_kwh: 'Özelleştirilebilir',
    dimensions: 'Proje bazlı',
    weight: 'Proje bazlı',
    output_w: 'Özelleştirilebilir',
    battery_type: 'LiFePO₄',
    cycles: 'Uzun ömürlü'
  },
  {
    slug: 'solar-voltwagon',
    name: 'Solar VOLTWAGON',
    images: ['/images/products/solar-voltwagon.png'],
    category: 'ges',
    capacity_kwh: 'Özelleştirilebilir',
    dimensions: 'Proje bazlı',
    weight: 'Proje bazlı',
    output_w: 'Özelleştirilebilir',
    battery_type: 'LiFePO₄',
    cycles: 'Uzun ömürlü'
  },
  {
    slug: 'ges-street-lighting',
    name: 'GES Sokak Aydınlatma Sistemi',
    images: ['/images/products/ges-street-lighting.png'],
    category: 'ges',
    capacity_kwh: 'Özelleştirilebilir',
    dimensions: 'Proje bazlı',
    weight: 'Proje bazlı',
    output_w: 'Özelleştirilebilir',
    battery_type: 'LiFePO₄',
    cycles: 'Uzun ömürlü'
  },
]

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter(product => product.category === category)
}
