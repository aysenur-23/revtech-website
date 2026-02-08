"use client"
// References component with logo spacing

export function References() {
  const logos = [
    { name: 'FORD OTOSAN', image: '/images/references/logo1.png' },
    { name: 'TURKUAZ MÜHENDİSLİK', image: '/images/references/logo2.png' },
    { name: 'TREDIUM', image: '/images/references/logo3.png' },
    { name: 'AFET TEKNOLOJİLERİ', image: '/images/references/logo4.png' },
    { name: 'IMECAR', image: '/images/references/logo5.png' },
  ]

  return (
    <section aria-labelledby="references-heading" className="section-mobile-enhanced bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="container-mobile-enhanced">
        
        {/* Scrolling Logo Container */}
        <div className="relative">
          <div className="flex animate-scroll-right" style={{width: '200%'}}>
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className={`flex-shrink-0 py-1 sm:py-2 md:py-3 flex items-center px-12 sm:px-16 md:px-20`}>
                <div className="flex items-center justify-center">
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    width={200}
                    height={80}
                    className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    onError={(e) => {
                      console.error('Logo failed to load:', {
                        src: logo.image,
                        name: logo.name,
                        error: e,
                        target: e.currentTarget
                      })
                      e.currentTarget.style.display = 'none'
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement
                      if (fallback) fallback.style.display = 'block'
                    }}
                    onLoad={() => {
                      console.log('Logo loaded successfully:', logo.image, logo.name)
                    }}
                  />
                  <div className="text-slate-400 font-medium text-lg" style={{display: 'none'}}>
                    {logo.name}
                  </div>
                </div>
              </div>
            ))}
            {/* Second set of logos for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className={`flex-shrink-0 py-1 sm:py-2 md:py-3 flex items-center px-12 sm:px-16 md:px-20`}>
                <div className="flex items-center justify-center">
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    width={200}
                    height={80}
                    className="h-12 sm:h-14 md:h-16 object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    onError={(e) => {
                      console.error('Logo failed to load:', {
                        src: logo.image,
                        name: logo.name,
                        error: e,
                        target: e.currentTarget
                      })
                      e.currentTarget.style.display = 'none'
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement
                      if (fallback) fallback.style.display = 'block'
                    }}
                    onLoad={() => {
                      console.log('Logo loaded successfully:', logo.image, logo.name)
                    }}
                  />
                  <div className="text-slate-400 font-medium text-lg" style={{display: 'none'}}>
                    {logo.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
