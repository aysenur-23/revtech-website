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
    slug: 'revium-2-7-kwh',
    name: '2.7 kWh Model A',
    images: ['/images/products/2-7kwh-a-1.webp'],
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
    slug: 'revium-2-7-kwh-bag',
    name: '2.7 kWh Model B',
    images: ['/images/products/2-7kwh-b-1.webp'],
    category: 'portable',
    capacity_kwh: '2.7',
    dimensions: '550 × 391 × 317 mm',
    weight: '33 kg',
    output_w: '230 VAC',
    battery_type: '≈20–28.8 VDC',
    mppt_w: '30–80 VDC (Voc ≈102 V)',
    cycles: 'Uzun ömürlü'
  },
  // 5.4 kWh 3000W
  {
    slug: 'revium-5-4-kwh',
    name: '5.4 kWh 3000W',
    images: ['/images/products/5-4kwh-h-1.webp'],
    category: 'portable',
    capacity_kwh: '5.4',
    dimensions: '800 × 458 × 910 mm',
    weight: '60 kg',
    output_w: '3000W',
    battery_type: '≈20–28.8 VDC',
    mppt_w: '30–80 VDC (Voc ≈102 V)',
    cycles: 'Uzun ömürlü'
  },
  // Güç Katmanı
  {
    slug: 'revium-power-layer',
    name: 'Güç Katmanı',
    images: ['/images/products/stack-21-6kwh-1.webp'],
    category: 'cabin',
    capacity_kwh: 'Modüler',
    dimensions: '400 × 391 × 365/609/853/1097 mm',
    weight: '66/114/162/210 kg',
    output_w: '51.2 VDC nominal',
    battery_type: '51.2 VDC nominal (modüler)',
    cycles: 'Uzun ömürlü'
  },
  // Güç Kabini
  {
    slug: 'revium-power-cabinet',
    name: 'Güç Kabini',
    images: ['/images/products/cabin-power.webp'],
    category: 'cabin',
    capacity_kwh: '21.6',
    dimensions: '600 × 500 × 1000 mm',
    weight: '200 kg',
    output_w: '5 kW',
    battery_type: 'LiFePO₄',
    cycles: 'Uzun ömürlü'
  },
  // GridPack
  {
    slug: 'revium-gridpack',
    name: 'Şebeke Paketi',
    images: ['/images/products/gridpack.webp'],
    category: 'cabin',
    capacity_kwh: '100+',
    dimensions: 'Varies',
    weight: 'Varies',
    output_w: 'Varies',
    battery_type: 'LiFePO₄',
    cycles: 'Uzun ömürlü'
  },
  // Hilux Güç Paketi (Araç Üstü)
  {
    slug: 'revium-pickup-power-pack',
    name: 'Pick Up Güç Paketi',
    images: ['/images/products/hilux-21-6kwh-1.webp'],
    category: 'vehicle',
    capacity_kwh: '21.6-80',
    dimensions: 'Araç entegrasyonuna bağlı',
    weight: 'Araç entegrasyonuna bağlı',
    output_w: '20000W',
    battery_type: '20 kW sistemle uyumlu (volt aralığı proje bazlı)',
    cycles: '4000'
  },
  // GES Products
  {
    slug: 'revium-powerstation-series',
    name: 'Powerstation Serisi',
    images: ['/images/products/ges-power-station.png'],
    category: 'ges',
    capacity_kwh: '500-5000',
    output_w: '200-1000 kW',
    cycles: '6000'
  },
  {
    slug: 'revium-solarport',
    name: 'Solarport',
    images: ['/images/products/solarport-duo.png'],
    category: 'ges',
    capacity_kwh: 'Solar Carport',
    output_w: '6-24 kW AC',
    cycles: 'Uzun'
  },
  // Battery Products
  {
    slug: 'revium-2-7-kwh-lfp',
    name: '2.7 kWh LFP Batarya',
    images: ['/images/products/2.7-lfp.webp'],
    category: 'battery',
    capacity_kwh: '2.7',
    output_w: '12 / 24 VDC',
    cycles: '6000'
  },
  {
    slug: 'revium-5-4-kwh-lfp',
    name: '5.4 kWh LFP Batarya',
    images: ['/images/products/5.4-lfp.webp'],
    category: 'battery',
    capacity_kwh: '5.4',
    output_w: '24 / 48 VDC',
    cycles: '6000'
  },
  // Charging Products
  {
    slug: 'revium-grid-core',
    name: 'Grid Core',
    images: ['/images/products/grid-core.webp'],
    category: 'charging',
    capacity_kwh: 'DC Şarj',
    output_w: '45-180 kW',
  },
  {
    slug: 'revium-grid-pulse',
    name: 'Grid Pulse',
    images: ['/images/products/grid-pulse.webp'],
    category: 'charging',
    capacity_kwh: 'DC Şarj',
    output_w: '90-270 kW',
  },
  {
    slug: 'revium-grid-pulse-gen2',
    name: 'Grid Pulse Gen2',
    images: ['/images/products/grid-pulse-gen2.webp'],
    category: 'charging',
    capacity_kwh: 'DC Şarj',
    output_w: '90-270 kW',
  }
]

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter(product => product.category === category)
}
