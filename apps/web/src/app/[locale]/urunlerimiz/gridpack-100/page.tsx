'use client'

import { ProductPage } from '@/components/templates/product-page'
import { useTranslation } from '@/hooks/useTranslation'

export default function GridPack100Page() {
  const { t, loading } = useTranslation()
  
  const product = {
    name: 'GridPack 100',
    title: loading ? 'GridPack 100' : t('productDetails.gridpack100.title'),
    description: loading ? 'REVIUM GridPack 100, endüstriyel tesisler, savunma alanları, mobil enerji merkezleri ve afet bölgeleri için geliştirilmiş, yüksek kapasiteli enerji depolama ve yönetim sistemidir. Entegre inverter, MPPT şarj kontrolü, akıllı batarya yönetim sistemi (BMS) ve uzaktan izleme özellikleriyle, tüm enerji sürecini tek noktadan yönetilebilen tam entegre bir plug-and-play enerji istasyonu sunar. Dayanıklı yapısı, uzun ömürlü LiFePO₄ batarya teknolojisi ve yüksek verimliliği sayesinde, her koşulda kesintisiz, güvenli ve sürdürülebilir enerji sağlar.' : t('productDetails.gridpack100.description'),
    image: '/images/products/gridpack-100.png',
    features: [],
    applications: loading ? [
      'Endüstriyel tesisler',
      'Savunma alanları',
      'Mobil enerji merkezleri',
      'Afet bölgeleri',
      'Kritik altyapı sistemleri',
      'Şebeke dışı sistemler'
    ] : [
      t('productDetails.gridpack100.applications.industrial'),
      t('productDetails.gridpack100.applications.defense'),
      t('productDetails.gridpack100.applications.mobile'),
      t('productDetails.gridpack100.applications.disaster'),
      t('productDetails.gridpack100.applications.critical'),
      t('productDetails.gridpack100.applications.offGrid')
    ]
  }

  return <ProductPage {...product} />
}

