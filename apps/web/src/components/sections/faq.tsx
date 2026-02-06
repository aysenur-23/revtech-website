"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const faqData = [
  {
    id: 'energy-storage-capacity',
    question: 'Enerji depolama sistemlerinizin kapasitesi ne kadar?',
    answer: 'Ürünlerimiz 2.7kWh\'den 200kWh\'ye kadar farklı kapasitelerde mevcuttur. İhtiyacınıza göre modüler sistemlerle ölçeklendirilebilir.'
  },
  {
    id: 'installation-time',
    question: 'Kurulum süreci ne kadar sürer?',
    answer: 'Taşınabilir sistemler 1-2 gün, endüstriyel sistemler 1-2 hafta içinde tamamlanır. Proje büyüklüğüne göre detaylı süreç planlaması yapılır.'
  },
  {
    id: 'warranty-coverage',
    question: 'Garanti kapsamı nedir?',
    answer: 'Tüm ürünlerimiz 5 yıl garanti kapsamındadır. Batarya sistemleri için ek 10 yıl performans garantisi sunuyoruz.'
  },
  {
    id: 'maintenance-requirements',
    question: 'Bakım gereksinimleri nelerdir?',
    answer: 'Sistemlerimiz minimum bakım gerektirir. Yıllık kontrol ve temizlik yeterlidir. 7/24 uzaktan izleme ile proaktif bakım sağlıyoruz.'
  },
  {
    id: 'grid-connection',
    question: 'Şebekeye bağlantı mümkün mü?',
    answer: 'Evet, tüm sistemlerimiz şebekeye bağlanabilir. Hibrit sistemlerle hem şebeke hem de yenilenebilir enerji kaynaklarını kullanabilirsiniz.'
  },
  {
    id: 'cost-savings',
    question: 'Ne kadar tasarruf sağlayabilirim?',
    answer: 'Ortalama %40-60 elektrik faturası tasarrufu sağlanır. Detaylı analiz için ücretsiz enerji audit hizmetimizden yararlanabilirsiniz.'
  },
  {
    id: 'technical-support',
    question: 'Teknik destek nasıl sağlanıyor?',
    answer: '7/24 teknik destek hattımız mevcuttur. Uzaktan tanı ve çözüm, gerekirse sahada teknik ekip gönderimi yapılır.'
  }
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])
  const { t } = useTranslation()

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section aria-labelledby="faq-heading" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center space-y-8 md:space-y-12 mb-20">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-prose mx-auto">
            Enerji depolama sistemleri hakkında merak ettiğiniz soruların yanıtları
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item) => (
            <div 
              key={item.id}
              className="rounded-2xl border border-neutral-200/60 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl"
                aria-expanded={openItems.includes(item.id)}
                aria-controls={`faq-answer-${item.id}`}
                aria-label={`${item.question} - ${openItems.includes(item.id) ? 'Kapat' : 'Aç'}`}
              >
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {item.question}
                </h3>
                {openItems.includes(item.id) ? (
                  <ChevronUp className="h-5 w-5 text-neutral-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neutral-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(item.id) && (
                <div 
                  id={`faq-answer-${item.id}`}
                  className="px-6 pb-5"
                >
                  <p className="text-neutral-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-neutral-500">
            Başka sorularınız mı var?{' '}
            <a 
              href="/iletisim" 
              className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-primary/30 hover:decoration-primary/60 transition-colors"
            >
              İletişime geçin
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
