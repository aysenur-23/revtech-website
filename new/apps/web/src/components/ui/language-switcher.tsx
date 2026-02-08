'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'tr', name: 'TÃ¼rkÃ§e', flag: 'ğŸ‡¹ğŸ‡·' },
  { code: 'en', name: 'English', flag: 'ğŸ‡ºğŸ‡¸' },
];

export function LanguageSwitcher() {
  const { locale, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (langCode: 'tr' | 'en') => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:text-green-400 hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
            <div className="py-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code as 'tr' | 'en')}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
                    locale === language.code 
                      ? 'text-green-400 bg-green-400/10' 
                      : 'text-white'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                  {locale === language.code && (
                    <div className="ml-auto w-2 h-2 bg-green-400 rounded-full" />
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
