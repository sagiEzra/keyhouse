import Head from 'next/head'

export interface SEOProps {
  title: string
  description: string
  canonical?: string
  keywords?: string[]
  ogType?: 'website' | 'article' | 'profile'
  ogImage?: string
  noindex?: boolean
  nofollow?: boolean
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

/**
 * SEOHead Component - מרכז את כל ה-meta tags לאופטימיזציה של SEO
 *
 * @param title - כותרת העמוד (יוצג בגוגל ובכרטיסייה)
 * @param description - תיאור העמוד (יוצג בתוצאות החיפוש)
 * @param canonical - URL קנוני (למניעת תוכן כפול)
 * @param keywords - מילות מפתח (אופציונלי)
 * @param ogType - סוג העמוד (website/article/profile)
 * @param ogImage - תמונה לשיתוף ברשתות חברתיות
 * @param noindex - האם למנוע אינדוקס בגוגל
 * @param nofollow - האם למנוע מעקב אחר קישורים
 */
export default function SEOHead({
  title,
  description,
  canonical = 'https://keyhouseeilat.co.il',
  keywords = [],
  ogType = 'website',
  ogImage = '/images/og-default.jpg',
  noindex = false,
  nofollow = false,
  author = 'Keyhouse Eilat - רותם קהלון',
  publishedTime,
  modifiedTime
}: SEOProps) {
  const siteUrl = 'https://keyhouseeilat.co.il'
  const fullCanonical = canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`

  // Default keywords לכל עמוד
  const defaultKeywords = [
    'קי האוס אילת',
    'Keyhouse Eilat',
    'נדל"ן אילת',
    'משרד תיווך אילת',
    'סוכנות נדל"ן אילת',
    'רותם קהלון',
    'שירז קהלון'
  ]

  const allKeywords = [...defaultKeywords, ...keywords].join(', ')

  // Robots meta tag
  const robotsContent = noindex || nofollow
    ? `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`
    : 'index,follow'

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />

      {/* Language & Locale */}
      <meta httpEquiv="Content-Language" content="he" />
      <meta property="og:locale" content="he_IL" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Keyhouse Eilat - קי האוס אילת" />

      {/* Article meta tags (if applicable) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Viewport (mobile optimization) */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

      {/* Favicon & App Icons */}
      <link rel="icon" type="image/png" href="/images/faviconKeyHouse.png" />
      <link rel="apple-touch-icon" href="/images/faviconKeyHouse.png" />

      {/* Theme Color (for mobile browsers) */}
      <meta name="theme-color" content="#192746" />
      <meta name="msapplication-TileColor" content="#192746" />

      {/* Additional SEO hints */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="IL-D" />
      <meta name="geo.placename" content="אילת, ישראל" />
      <meta name="geo.position" content="29.5581;34.9482" />
      <meta name="ICBM" content="29.5581, 34.9482" />
    </Head>
  )
}
