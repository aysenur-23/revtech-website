"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type Locale = 'tr' | 'en' | 'ar';

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
    let isMounted = true;

    const loadTranslations = async () => {
      try {
        // URL'den locale'i al - güvenli parsing
        let currentLocale: Locale = 'tr';
        const normalizedPath = pathname || '/';
        
        // Pathname validation
        if (!normalizedPath || typeof normalizedPath !== 'string') {
          console.warn('Invalid pathname:', normalizedPath);
          currentLocale = 'tr';
        } else {
          // Locale'i pathname'den çıkar - güvenli parsing
          if (normalizedPath.startsWith('/en/') || normalizedPath === '/en') {
            currentLocale = 'en';
          } else if (normalizedPath.startsWith('/ar/') || normalizedPath === '/ar') {
            currentLocale = 'ar';
          } else if (normalizedPath.startsWith('/tr/') || normalizedPath === '/tr' || normalizedPath === '/') {
            currentLocale = 'tr';
          } else {
            // Geçersiz pathname - default to Turkish
            console.warn('Unknown locale in pathname, defaulting to Turkish:', normalizedPath);
            currentLocale = 'tr';
          }
        }
        
        // Locale validation
        if (!['tr', 'en', 'ar'].includes(currentLocale)) {
          console.warn('Invalid locale detected, defaulting to Turkish:', currentLocale);
          currentLocale = 'tr';
        }

        if (isMounted) {
          setLocale(currentLocale);
        }
        
        // Dynamic import with error handling and timeout
        const importPromise = import(`../locales/${currentLocale}.json`);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Translation import timeout')), 5000)
        );
        
        const translationModule = await Promise.race([importPromise, timeoutPromise]) as any;
        
        if (!isMounted) return; // Component unmounted, don't update state
        
        if (translationModule && translationModule.default) {
          setTranslations(translationModule.default);
        } else {
          throw new Error('Translation module is empty or invalid');
        }
      } catch (error) {
        console.error('Translation loading error:', error);
        
        if (!isMounted) return; // Component unmounted, don't update state
        
        // Fallback to Turkish if loading fails
        try {
          const fallbackModule = await import('../locales/tr.json');
          if (isMounted && fallbackModule.default) {
            setTranslations(fallbackModule.default);
            setLocale('tr');
          }
        } catch (fallbackError) {
          console.error('Fallback translation loading error:', fallbackError);
          
          if (!isMounted) return; // Component unmounted, don't update state
          
          // Ultimate fallback - minimal translations
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
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadTranslations();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [pathname]);

  // Update HTML dir attribute for RTL
  useEffect(() => {
    if (locale === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', locale);
    }
  }, [locale]);

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
    // Geçersiz locale kontrolü
    if (!newLocale || !['tr', 'en', 'ar'].includes(newLocale)) {
      console.error('Invalid locale:', newLocale);
      return;
    }

    // Router ve pathname kontrolü
    if (!router || !pathname) {
      console.error('Router or pathname not available');
      return;
    }

    try {
      // Pathname'i güvenli bir şekilde parse et
      let pathWithoutLocale = pathname || '/';
      
      // Locale'i kaldır
      pathWithoutLocale = pathWithoutLocale.replace(/^\/(tr|en|ar)(\/|$)/, '/');
      
      // Trailing slash kontrolü
      if (pathWithoutLocale === '/') {
        pathWithoutLocale = '';
      } else if (!pathWithoutLocale.endsWith('/')) {
        pathWithoutLocale = pathWithoutLocale + '/';
      }
      
      const newPath = `/${newLocale}${pathWithoutLocale}`;
      
      // Path validation
      if (!newPath.match(/^\/[a-z]{2}(\/.*)?$/)) {
        console.error('Invalid path generated:', newPath);
        router.replace(`/${newLocale}/`);
        return;
      }
      
      router.replace(newPath);
    } catch (error) {
      console.error('Language change error:', error);
      // Fallback navigation
      try {
        router.replace(`/${newLocale}/`);
      } catch (fallbackError) {
        console.error('Fallback navigation error:', fallbackError);
        window.location.href = `/${newLocale}/`;
      }
    }
  };

  return {
    t,
    changeLanguage,
    locale,
    loading
  };
}
