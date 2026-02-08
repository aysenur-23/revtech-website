"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type Locale = 'tr' | 'en';

interface Translations {
  [key: string]: any;
}

export function useTranslation() {
  const [translations, setTranslations] = useState<Translations>({});
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState<Locale>('tr');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // URL'den locale'i al
        const currentLocale = pathname.startsWith('/en') ? 'en' : 'tr';
        setLocale(currentLocale);
        
        // Dynamic import with error handling
        const translationModule = await import(`../locales/${currentLocale}.json`);
        if (translationModule.default) {
          setTranslations(translationModule.default);
        } else {
          throw new Error('Translation module is empty');
        }
      } catch (error) {
        console.error('Translation loading error:', error);
        // Fallback to Turkish if loading fails
        try {
          const fallbackModule = await import('../locales/tr.json');
          setTranslations(fallbackModule.default || {});
          setLocale('tr');
        } catch (fallbackError) {
          console.error('Fallback translation loading error:', fallbackError);
          // Ultimate fallback
          setTranslations({
            nav: {
              home: 'Ana Sayfa',
              products: 'Ürünlerimiz',
              services: 'Hizmetlerimiz',
              contact: 'İletişim',
              quote: 'Teklif Talep Et'
            },
            hero: {
              title: 'Enerjiyi',
              subtitle: 'Yeniden Tanımlıyoruz',
              description: 'Performans, dayanıklılık ve özgürlük ile enerji depolama çözümlerinde yeni standartlar belirliyoruz.',
              cta: 'Ürünlerimizi İncele',
              ctaSecondary: 'Teklif Al'
            },
            mission: {
              title: 'Performans, dayanıklılık ve özgürlük',
              subtitle: '— enerjiyi yeniden tanımlıyoruz.',
              cta: 'KURUMSAL'
            }
          });
          setLocale('tr');
        }
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [pathname]);

  const t = (key: string): string => {
    if (loading || !translations || Object.keys(translations).length === 0) {
      return key; // Return key if still loading or no translations
    }
    
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const changeLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return {
    t,
    changeLanguage,
    locale,
    loading
  };
}
