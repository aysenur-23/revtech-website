"use client"

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Revium",
    "alternateName": "Reviumtech",
    "url": "https://reviumtech.com",
    "logo": "https://reviumtech.com/images/logo.png",
    "description": "Enerji depolama ve yenilenebilir enerji çözümleri sunan teknoloji şirketi",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fevzi Çakmak Mahallesi Milenyum Caddesi No:81",
      "addressLocality": "Karatay",
      "addressRegion": "Konya",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-551-829-1613",
      "contactType": "customer service",
      "email": "info@reviumtech.com",
      "availableLanguage": ["Turkish", "English"]
    },
    "sameAs": [
      "https://reviumtech.com"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Revium",
    "alternateName": "Reviumtech",
    "url": "https://reviumtech.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://reviumtech.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}

