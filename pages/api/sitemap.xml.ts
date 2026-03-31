import { NextApiRequest, NextApiResponse } from 'next'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../lib/firebase'

/**
 * Dynamic Sitemap Generator for SEO
 *
 * Generates an XML sitemap including:
 * - Static pages (home, about, services, etc.)
 * - Dynamic property pages from Firebase
 *
 * Google uses this to understand the site structure and crawl efficiently
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const siteUrl = 'https://keyhouseeilat.co.il'

    // Static pages with their priority and change frequency
    const staticPages = [
      { url: '/', changefreq: 'weekly', priority: '1.0', lastmod: new Date().toISOString() },
      { url: '/about', changefreq: 'monthly', priority: '0.8', lastmod: new Date().toISOString() },
      { url: '/catalog', changefreq: 'daily', priority: '0.9', lastmod: new Date().toISOString() },
      { url: '/buying', changefreq: 'monthly', priority: '0.8', lastmod: new Date().toISOString() },
      { url: '/selling', changefreq: 'monthly', priority: '0.8', lastmod: new Date().toISOString() },
      { url: '/property-management', changefreq: 'monthly', priority: '0.8', lastmod: new Date().toISOString() },
      { url: '/property-valuation', changefreq: 'monthly', priority: '0.7', lastmod: new Date().toISOString() },
      { url: '/contact', changefreq: 'monthly', priority: '0.7', lastmod: new Date().toISOString() },
    ]

    // Fetch dynamic property pages from Firebase
    let propertyPages: Array<{ url: string; changefreq: string; priority: string; lastmod: string }> = []

    try {
      const propertiesRef = collection(db, 'properties')
      const querySnapshot = await getDocs(propertiesRef)

      propertyPages = querySnapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          url: `/catalog/${doc.id}`,
          changefreq: 'weekly',
          priority: '0.7',
          lastmod: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        }
      })
    } catch (error) {
      console.error('Error fetching properties for sitemap:', error)
      // Continue without property pages if Firebase fails
    }

    // Combine all pages
    const allPages = [...staticPages, ...propertyPages]

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

    // Set proper headers for XML
    res.setHeader('Content-Type', 'text/xml; charset=utf-8')
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600, stale-while-revalidate')

    res.status(200).send(sitemap)
  } catch (error) {
    console.error('Error generating sitemap:', error)
    res.status(500).json({ error: 'Failed to generate sitemap' })
  }
}
