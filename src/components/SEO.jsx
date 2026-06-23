import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path = "" }) => {
  const siteUrl = "https://shrishambhokrushisevakendra.com"; // Replace with real domain when deployed
  const fullUrl = `${siteUrl}${path}`;
  
  // LocalBusiness Schema JSON-LD
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shri Shambho Krushi Seva Kendra",
    "image": `${siteUrl}/assets/exterior_1.png`,
    "@id": fullUrl,
    "url": siteUrl,
    "telephone": "+91XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Balaji Nagar",
      "addressLocality": "Devisinga (Tuljapur)",
      "addressRegion": "Maharashtra",
      "postalCode": "413601",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.934204,
      "longitude": 76.171814
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    }
  };

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}/assets/exterior_1.png`} />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
