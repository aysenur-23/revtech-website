'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { MENU_SERIES } from './menu-data'

export function SiteFooter() {
  const { t, locale } = useTranslation()
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* 1: ÜRÜNLERİMİZ */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-white">
              Ürünlerimiz
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <Link href={`/${locale}/urunlerimiz/kategori/portable`} className="hover:text-blue-400 transition-colors">
                  Taşınabilir Güç Paketleri
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/urunlerimiz/kategori/cabin`} className="hover:text-blue-400 transition-colors">
                  Kabin Tipi Güç Paketleri
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/urunlerimiz/kategori/vehicle`} className="hover:text-blue-400 transition-colors">
                  Araç Tipi Güç Paketleri
                </Link>
              </li>
            </ul>
          </div>

          {/* 3: HİZMETLERİMİZ */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-white">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <Link href={`/${locale}/hizmetlerimiz/ges-kurulumu`} className="hover:text-blue-400 transition-colors">
                  GES Kurulumu
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/hizmetlerimiz/endustriyel-kurulum`} className="hover:text-blue-400 transition-colors">
                  Endüstriyel Kurulum
                </Link>
              </li>
            </ul>
          </div>

          {/* 4: HIZLI ERİŞİM */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-white">
              Hızlı Erişim
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <Link href={`/${locale}/kurumsal`} className="hover:text-blue-400 transition-colors">
                  Kurumsal
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/iletisim`} className="hover:text-blue-400 transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/fiyat-teklifi`} className="hover:text-blue-400 transition-colors">
                  Teklif Al
                </Link>
              </li>
            </ul>
          </div>

          {/* 4: İLETİŞİM */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-white">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="tel:+905518291613" className="hover:text-blue-400 transition-colors">
                  +90 (551) 829-1613
                </a>
              </li>
              <li>
                <a href="mailto:info@reviumtech.com" className="hover:text-blue-400 transition-colors">
                  info@reviumtech.com
                </a>
              </li>
              <li>Nişantaş Mah. Şehit Ömer Taşer Sok. No:10</li>
              <li>Kat:2 Daire:16 Selçuklu/KONYA</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 border-t border-neutral-800 pt-4 sm:pt-6 text-xs text-neutral-500">
          <p className="text-center">
            © {new Date().getFullYear()} Revium — Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
