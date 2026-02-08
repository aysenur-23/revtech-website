'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', nativeName: 'Türkçe' },
  { code: 'en', name: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', nativeName: 'العربية' },
];

export function LanguageSwitcher() {
  const { locale, loading } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isNavigatingRef = useRef(false);

  // Locale validation ve fallback
  const validLocale = locale && ['tr', 'en', 'ar'].includes(locale) ? locale : 'tr';
  const currentLanguage = languages.find(lang => lang.code === validLocale) || languages[0];
  const isRTL = validLocale === 'ar';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Close dropdown on route change
  useEffect(() => {
    // Pathname validation
    if (!pathname || typeof pathname !== 'string') {
      return;
    }
    
    setIsOpen(false);
    isNavigatingRef.current = false;
  }, [pathname]);

  const handleLanguageChange = (langCode: string) => {
    // Geçersiz locale kontrolü
    if (!langCode || !['tr', 'en', 'ar'].includes(langCode)) {
      console.error('Invalid language code:', langCode);
      return;
    }

    // Aynı dile geçiş yapılmaya çalışılıyorsa iptal et
    if (langCode === validLocale) {
      setIsOpen(false);
      return;
    }

    // Zaten navigation yapılıyorsa iptal et
    if (isNavigatingRef.current) {
      return;
    }

    // Router ve pathname kontrolü
    if (!router || !pathname) {
      console.error('Router or pathname not available');
      return;
    }

    // Loading durumunda bekle
    if (loading) {
      console.warn('Translation still loading, waiting...');
      return;
    }

    isNavigatingRef.current = true;
    setIsOpen(false);

    try {
      // Pathname'i güvenli bir şekilde parse et
      let currentPath = pathname || '/';
      
      // Locale'i kaldır - hem /tr hem de /tr/ formatlarını handle et
      // Önce /tr/ formatını kontrol et, sonra /tr formatını
      if (currentPath.match(/^\/(tr|en|ar)\//)) {
        // /tr/urunlerimiz/ gibi format
        currentPath = currentPath.replace(/^\/(tr|en|ar)/, '');
      } else if (currentPath.match(/^\/(tr|en|ar)$/)) {
        // /tr gibi format - root path
        currentPath = '';
      } else {
        // Locale yoksa, path'i olduğu gibi kullan
        // Ama başında / varsa kaldır
        if (currentPath.startsWith('/')) {
          currentPath = currentPath.substring(1);
        }
      }
      
      // Trailing slash kontrolü - Next.js trailingSlash: true olduğu için
      // Eğer path boş değilse ve trailing slash yoksa ekle
      if (currentPath && !currentPath.endsWith('/')) {
        currentPath = currentPath + '/';
      }
      
      // Yeni path'i oluştur - güvenli string concatenation
      const newPath = currentPath ? `/${langCode}/${currentPath}` : `/${langCode}/`;
      
      // Path validation - geçersiz karakter kontrolü
      if (!newPath.match(/^\/[a-z]{2}(\/.*)?$/)) {
        console.error('Invalid path generated:', newPath);
        router.replace(`/${langCode}/`);
        setIsOpen(false);
        return;
      }
      
      // Router ile güvenli bir şekilde navigate et - replace kullan history'yi kirletmez
      // setTimeout ile async navigation - race condition önleme
      setTimeout(() => {
        try {
          router.replace(newPath);
        } catch (navError) {
          console.error('Navigation error:', navError);
          isNavigatingRef.current = false;
          // Fallback navigation
          try {
            window.location.href = newPath;
          } catch (windowError) {
            console.error('Window location error:', windowError);
            isNavigatingRef.current = false;
          }
        }
      }, 0);
    } catch (error) {
      console.error('Language change error:', error);
      isNavigatingRef.current = false;
      // Hata durumunda root path'e yönlendir
      try {
        router.replace(`/${langCode}/`);
      } catch (fallbackError) {
        console.error('Fallback navigation error:', fallbackError);
        // Ultimate fallback - window.location
        try {
          window.location.href = `/${langCode}/`;
        } catch (windowError) {
          console.error('Window location error:', windowError);
          isNavigatingRef.current = false;
        }
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
             <Button
               variant="ghost"
               size="sm"
               onClick={() => setIsOpen(!isOpen)}
               className="flex items-center gap-1.5 text-neutral-700 hover:text-blue-600 hover:bg-neutral-100 px-2.5 sm:px-2 py-2 sm:py-1.5 rounded-md transition-all duration-200 border border-neutral-200 hover:border-blue-300 min-h-[40px] sm:min-h-[36px] h-[40px] sm:h-[36px] touch-manipulation"
               aria-label="Change language"
               aria-expanded={isOpen}
               aria-haspopup="true"
             >
               <Globe className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
               <span className="text-base sm:text-sm font-medium">{currentLanguage.flag}</span>
               <span className="text-xs font-medium hidden xl:inline">{currentLanguage.name}</span>
               <ChevronDown className={`h-3.5 w-3.5 sm:h-3 sm:w-3 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
             </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
                 <div
                   className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-full mt-1 w-40 bg-white border border-neutral-200 rounded-lg shadow-xl z-50 overflow-hidden`}
                   dir="ltr"
                 >
                   <div className="py-0.5">
                     {languages.map((language) => (
                       <button
                         key={language.code}
                         onClick={() => handleLanguageChange(language.code)}
                         className={`w-full flex items-center gap-1.5 px-2.5 py-1.5 text-left hover:bg-blue-50 transition-colors duration-200 ${
                           validLocale === language.code
                             ? 'bg-blue-50 text-blue-600 font-semibold'
                             : 'text-neutral-700'
                         }`}
                       >
                         <span className="text-sm">{language.flag}</span>
                         <span className="flex-1 text-[11px] font-medium">{language.nativeName}</span>
                         {validLocale === language.code && (
                           <Check className="h-2.5 w-2.5 text-blue-600" />
                         )}
                       </button>
                     ))}
                   </div>
                 </div>
        </>
      )}
    </div>
  );
}
