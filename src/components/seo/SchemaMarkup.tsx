import Script from 'next/script'

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Jamek Automação Industrial",
  "url": "https://jamek.com.br",
  "logo": "https://jamek.com.br/logo.png",
  "description": "Especialistas em automação industrial com mais de 15 anos de experiência. Soluções completas em painéis elétricos, programação CLP, retrofit e software de monitoramento.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua da Automação, 123",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01234-567",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-99999-9999",
    "contactType": "customer service",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://linkedin.com/company/jamek",
    "https://instagram.com/jamek_automacao"
  ],
  "foundingDate": "2008",
  "numberOfEmployees": "50-100",
  "industry": "Industrial Automation",
  "areaServed": "Brazil"
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automação Industrial",
  "description": "Soluções completas em automação industrial incluindo painéis elétricos, programação CLP, retrofit industrial e software de monitoramento.",
  "provider": {
    "@type": "Organization",
    "name": "Jamek Automação Industrial"
  },
  "areaServed": "Brazil",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Automação Industrial",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Painéis Elétricos",
          "description": "Desenvolvimento e montagem de painéis elétricos industriais"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Programação CLP",
          "description": "Programação de Controladores Lógicos Programáveis"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Retrofit Industrial",
          "description": "Modernização de equipamentos e linhas de produção"
        }
      }
    ]
  }
}

export default function SchemaMarkup() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
    </>
  )
}