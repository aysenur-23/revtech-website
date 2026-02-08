'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { getMenuSeries } from './menu-data'

export function SiteFooter() {
  const { t, locale, loading } = useTranslation()
  return (
    <footer className="border-t border-neutral-300 bg-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* 1: ÜRÜNLERİMİZ */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-neutral-900">
              {loading ? 'Ürünlerimiz' : t('footer.products')}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-600">
              <li>
                <Link href={`/${locale}/urunlerimiz/kategori/portable`} className="hover:text-blue-600 transition-colors">
                  {loading ? 'Taşınabilir Güç Paketleri' : t('footer.portablePower')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/urunlerimiz/kategori/cabin`} className="hover:text-blue-600 transition-colors">
                  {loading ? 'Kabin Tipi Güç Paketleri' : t('footer.cabinPower')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/urunlerimiz/kategori/vehicle`} className="hover:text-blue-600 transition-colors">
                  {loading ? 'Araç Tipi Güç Paketleri' : t('footer.vehiclePower')}
                </Link>
              </li>
            </ul>
          </div>

          {/* 3: HİZMETLERİMİZ */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-neutral-900">
              {loading ? 'Hizmetlerimiz' : t('footer.services')}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-600">
              <li>
                <Link href={`/${locale}/hizmetlerimiz/ges-kurulumu`} className="hover:text-blue-600 transition-colors">
                  {loading ? 'GES Kurulumu' : t('nav.gesInstallation')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/hizmetlerimiz/endustriyel-kurulum`} className="hover:text-blue-600 transition-colors">
                  {loading ? 'Endüstriyel Kurulum' : t('nav.industrialInstallation')}
                </Link>
              </li>
            </ul>
          </div>

          {/* 4: HIZLI ERİŞİM */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-neutral-900">
              {loading ? 'Hızlı Erişim' : t('footer.quickAccess')}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-600">
              <li>
                <Link href={`/${locale}/kurumsal`} className="hover:text-blue-600 transition-colors">
                  {loading ? 'Kurumsal' : t('nav.corporate')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/iletisim`} className="hover:text-blue-600 transition-colors">
                  {loading ? 'İletişim' : t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/fiyat-teklifi`} className="hover:text-blue-600 transition-colors">
                  {loading ? 'Teklif Al' : t('nav.quote')}
                </Link>
              </li>
            </ul>
          </div>

          {/* 4: İLETİŞİM */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-neutral-900">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-600">
              <li>
                <a href="tel:+905518291613" className="hover:text-blue-600 transition-colors">
                  {loading ? '+90 (551) 829-1613' : (t('contactPage.phoneNumber') || '+90 (551) 829-1613')}
                </a>
              </li>
              <li>
                <a href="mailto:info@reviumtech.com" className="hover:text-blue-600 transition-colors">
                  {loading ? 'info@reviumtech.com' : (t('contactPage.emailAddress') || 'info@reviumtech.com')}
                </a>
              </li>
              <li className="text-neutral-600">
                {loading ? 'Fevzi Çakmak Mahallesi Milenyum Caddesi No:81' : (
                  <>
                    {t('footer.address.neighborhood')} {t('footer.address.street')} {t('footer.address.number')} {locale === 'ar' ? t('footer.address.numberValue') : '81'}
                  </>
                )}
              </li>
              <li className="text-neutral-600">
                {loading ? 'Karatay/KONYA' : (
                  <>
                    {t('footer.address.city')}
                  </>
                )}
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/dEJViRBejc7dpB3WA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors text-xs sm:text-sm font-medium"
                >
                  {loading ? 'Yol Tarifi Al' : t('footer.getDirections')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 border-t border-neutral-200 pt-4 sm:pt-6 text-xs text-neutral-600">
          <p className="text-center">
            © {new Date().getFullYear()} Revium — {loading ? 'Tüm hakları saklıdır.' : t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
