const Schema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "National AI Health Mission for Soul-Oriented Medicine (NAHM-SOM)",
    "alternateName": "NAHM-SOM",
    "description": "Transforming healthcare in India through AI-powered wellness centers in temples and communities, blending precision medicine with soul-oriented care.",
    "url": "/",
    // "logo": "/favicon.ico",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Organization",
        "name": "Ameri India Trust"
      },
      {
        "@type": "Organization", 
        "name": "Telth Healthcare"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "AI Healthcare",
      "Digital Health Mission",
      "Community Healthcare",
      "Temple Healthcare Services",
      "Soul-Oriented Medicine",
      "Preventive Healthcare",
      "CSR Healthcare Partnerships"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Powered Community Healthcare Centers",
    "description": "Comprehensive healthcare services delivered through AI Care Hubs in temples and community centers across India.",
    "provider": {
      "@type": "Organization",
      "name": "NAHM-SOM"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": [
      "Preventive Healthcare",
      "AI Diagnostics", 
      "Community Wellness Programs",
      "Soul-Oriented Medicine",
      "Digital Health Services"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
    </>
  );
};

export default Schema;