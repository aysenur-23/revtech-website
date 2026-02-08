import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reviumtech.com'
  const locales = ['tr', 'en', 'ar']
  
  const routes = [
    '',
    '/urunlerimiz',
    '/urunlerimiz/kategori/portable',
    '/urunlerimiz/kategori/cabin',
    '/urunlerimiz/kategori/vehicle',
    '/urunlerimiz/kategori/solar',
    '/hizmetlerimiz',
    '/hizmetlerimiz/ges-kurulumu',
    '/hizmetlerimiz/endustriyel-kurulum',
    '/hizmetlerimiz/size-ozel-cozumler',
    '/kurumsal',
    '/iletisim',
    '/fiyat-teklifi',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  locales.forEach(locale => {
    routes.forEach(route => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route.includes('urunlerimiz') || route.includes('hizmetlerimiz') ? 0.9 : 0.8,
      })
    })
  })

  return sitemapEntries
}

