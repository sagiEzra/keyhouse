import { businessStaticData } from '@/config'

// Types for different Schema.org structures
export type SchemaType =
  | 'Organization'
  | 'LocalBusiness'
  | 'RealEstateAgent'
  | 'WebSite'
  | 'WebPage'
  | 'BreadcrumbList'
  | 'Product'
  | 'FAQPage'
  | 'Person'

interface BaseStructuredDataProps {
  type: SchemaType
  data?: any
}

/**
 * StructuredData Component - מוסיף Schema.org JSON-LD לעמוד
 *
 * מאפשר למנועי חיפוש ולמודלי AI להבין את התוכן בצורה טובה יותר
 */
export default function StructuredData({ type, data = {} }: BaseStructuredDataProps) {
  const siteUrl = 'https://keyhouseeilat.co.il'

  let schema: any = {}

  switch (type) {
    case 'Organization':
    case 'RealEstateAgent':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: 'Keyhouse Eilat - קי האוס אילת',
        alternateName: 'קי האוס אילת',
        description: 'משרד תיווך נדל"ן מוביל באילת, המתמחה בדירות למכירה, דירות להשכרה, ניהול נכסים ויעוץ נדל"ן',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/images/og-default.jpg`,
        telephone: businessStaticData.rotemPhone.callLink,
        email: businessStaticData.social.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'אנפה 1, מרכז מור',
          addressLocality: 'אילת',
          addressRegion: 'מחוז הדרום',
          postalCode: '88000',
          addressCountry: 'IL'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 29.5581,
          longitude: 34.9482
        },
        areaServed: {
          '@type': 'City',
          name: 'אילת',
          '@id': 'https://www.wikidata.org/wiki/Q47832'
        },
        priceRange: '$$-$$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '09:00',
            closes: '18:00'
          }
        ],
        sameAs: [
          businessStaticData.social.facebook,
          businessStaticData.social.instagram
        ],
        founder: {
          '@type': 'Person',
          name: 'רותם קהלון',
          jobTitle: 'בעלת משרד תיווך נדל"ן',
          email: businessStaticData.social.email,
          telephone: businessStaticData.rotemPhone.callLink
        },
        ...data
      }
      break

    case 'LocalBusiness':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Keyhouse Eilat - קי האוס אילת',
        image: `${siteUrl}/logo.png`,
        '@id': siteUrl,
        url: siteUrl,
        telephone: businessStaticData.rotemPhone.callLink,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'אנפה 1, מרכז מור',
          addressLocality: 'אילת',
          addressCountry: 'IL'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 29.5581,
          longitude: 34.9482
        },
        ...data
      }
      break

    case 'WebSite':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Keyhouse Eilat - קי האוס אילת',
        url: siteUrl,
        description: 'משרד תיווך נדל"ן מוביל באילת - דירות למכירה, להשכרה, ניהול נכסים ויעוץ נדל"ן מקצועי',
        inLanguage: 'he-IL',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/catalog?search={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        },
        ...data
      }
      break

    case 'WebPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: data.name || 'Keyhouse Eilat',
        url: data.url || siteUrl,
        description: data.description || 'משרד תיווך נדל"ן באילת',
        inLanguage: 'he-IL',
        isPartOf: {
          '@type': 'WebSite',
          url: siteUrl
        },
        ...data
      }
      break

    case 'BreadcrumbList':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.items?.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url ? `${siteUrl}${item.url}` : undefined
        })) || []
      }
      break

    case 'Product':
      // For property listings
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        category: 'Real Estate',
        name: data.name || 'נכס באילת',
        description: data.description || '',
        image: data.image || [],
        offers: {
          '@type': 'Offer',
          price: data.price || 0,
          priceCurrency: 'ILS',
          availability: data.availability || 'https://schema.org/InStock',
          seller: {
            '@type': 'RealEstateAgent',
            name: 'Keyhouse Eilat - קי האוס אילת'
          }
        },
        ...data
      }
      break

    case 'FAQPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions?.map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer
          }
        })) || []
      }
      break

    case 'Person':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: data.name || 'רותם קהלון',
        jobTitle: data.jobTitle || 'בעלת משרד תיווך נדל"ן',
        worksFor: {
          '@type': 'RealEstateAgent',
          name: 'Keyhouse Eilat - קי האוס אילת'
        },
        email: data.email || businessStaticData.social.email,
        telephone: data.telephone || businessStaticData.rotemPhone.callLink,
        image: data.image || '',
        ...data
      }
      break

    default:
      return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Multi-Schema Component - מאפשר להוסיף כמה schemas בבת אחת
 */
export function MultipleStructuredData({ schemas }: { schemas: Array<{ type: SchemaType; data?: any }> }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <StructuredData key={index} type={schema.type} data={schema.data} />
      ))}
    </>
  )
}
