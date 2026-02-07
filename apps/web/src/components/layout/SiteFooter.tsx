import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function SiteFooter() {
    const locale = await getLocale();
    const t = await getTranslations('footer');

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-neutral-300 bg-neutral-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {/* Products */}
                    <div>
                        <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-neutral-900">
                            {t('products')}
                        </h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-600">
                            <li>
                                <Link href={`/${locale}/urunlerimiz/kategori/portable/`} className="hover:text-blue-600 transition-colors">
                                    {t('portablePower')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/urunlerimiz/kategori/cabin/`} className="hover:text-blue-600 transition-colors">
                                    {t('cabinPower')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/urunlerimiz/kategori/charging/`} className="hover:text-blue-600 transition-colors">
                                    {t('evCharging')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/urunlerimiz/kategori/ges/`} className="hover:text-blue-600 transition-colors">
                                    {t('gesProducts')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/urunlerimiz/kategori/battery/`} className="hover:text-blue-600 transition-colors">
                                    {t('batteryPower')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/urunlerimiz/kategori/vehicle/`} className="hover:text-blue-600 transition-colors">
                                    {t('vehiclePower')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-neutral-900">
                            {t('services')}
                        </h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-600">
                            <li>
                                <Link href={`/${locale}/hizmetlerimiz/ges-kurulumu/`} className="hover:text-blue-600 transition-colors">
                                    {t('gesInstallation')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/hizmetlerimiz/endustriyel-kurulum/`} className="hover:text-blue-600 transition-colors">
                                    {t('industrialInstallation')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-neutral-900">
                            {t('quickLinks')}
                        </h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-600">
                            <li>
                                <Link href={`/${locale}/kurumsal/`} className="hover:text-blue-600 transition-colors">
                                    {t('corporate')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/iletisim/`} className="hover:text-blue-600 transition-colors">
                                    {t('contact')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/fiyat-teklifi/`} className="hover:text-blue-600 transition-colors">
                                    {t('getQuote')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-neutral-900">
                            {t('contact')}
                        </h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-neutral-600">
                            <li>
                                <a href="tel:+905518291613" className="hover:text-blue-600 transition-colors">
                                    {locale === 'ar' ? '+٩٠ (٥٥١) ٨٢٩-١٦١٣' : '+90 (551) 829-1613'}
                                </a>
                            </li>
                            <li>
                                {t.has('email') && <span className="font-bold text-slate-700">{t('email')}: </span>}
                                <a href="mailto:info@reviumtech.com" dir="ltr" className="hover:text-blue-600 transition-colors">
                                    info@reviumtech.com
                                </a>
                            </li>
                            <li className="text-neutral-600">
                                {t.has('address') ? t('address') : 'Fevzi Çakmak Mahallesi Milenyum Caddesi No:81\nKaratay/KONYA'}
                            </li>
                            <li>
                                <a
                                    href="https://maps.app.goo.gl/dEJViRBejc7dpB3WA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-700 hover:underline transition-colors text-xs sm:text-sm font-medium"
                                >
                                    {t('getDirections')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 sm:mt-10 border-t border-neutral-200 pt-4 sm:pt-6 text-xs text-neutral-600">
                    <p className="text-center">
                        © {
                            locale === 'ar'
                                ? String(currentYear).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[parseInt(d)])
                                : currentYear
                        } Revium — {t('copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
