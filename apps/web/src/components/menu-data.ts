// This function should be called inside a component that has access to useTranslation
export const getMenuSeries = (t: any, locale: string, loading: boolean = false) => [
  {
    title: t('menuData.portablePowerPacks'),
    href: `/${locale}/urunlerimiz/kategori/portable`,
    items: [
      { title: '2.7 kWh Model A', href: `/${locale}/urunlerimiz/r-p2700` },
      { title: '2.7 kWh Model B', href: `/${locale}/urunlerimiz/r-sb2700b` },
      { title: '5.4 kWh 3000W', href: `/${locale}/urunlerimiz/r-sb5400b` },
    ],
  },
  {
    title: t('menuData.cabinPowerPacks'),
    href: `/${locale}/urunlerimiz/kategori/cabin`,
    items: [
      { title: t('menuData.powerLayer'), href: `/${locale}/urunlerimiz/r-m21600` },
      { title: t('menuData.powerCabinet'), href: `/${locale}/urunlerimiz/r-cabinet-21600` },
    ],
  },
  {
    title: t('menuData.vehiclePowerPacks'),
    href: `/${locale}/urunlerimiz/kategori/vehicle`,
    items: [
      { title: t('menuData.hiluxPowerPack'), href: `/${locale}/urunlerimiz/r-h21600` },
      { title: t('menuData.unimogPowerPack'), href: `/${locale}/urunlerimiz/r-u200000` },
    ],
  },
  {
    title: loading ? 'GES Ürünler' : t('products.gesProducts.title'),
    href: `/${locale}/urunlerimiz/kategori/ges`,
    items: [
      { title: loading ? 'GES & Güç İstasyonu' : t('productDetails.gesPowerStation.title'), href: `/${locale}/urunlerimiz/ges-power-station` },
      { title: loading ? 'Solarport DUO' : t('productDetails.solarportDuo.title'), href: `/${locale}/urunlerimiz/solarport-duo` },
      { title: loading ? 'Solar VOLTWAGON' : t('productDetails.solarVoltwagon.title'), href: `/${locale}/urunlerimiz/solar-voltwagon` },
      { title: loading ? 'GES Sokak Aydınlatma Sistemi' : t('productDetails.gesStreetLighting.title'), href: `/${locale}/urunlerimiz/ges-street-lighting` },
    ],
  },
]
