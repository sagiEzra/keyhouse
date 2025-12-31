import VideosCarousel from "@/components/home/videos-carousel";
import AboutHero from "../components/about/about-hero";
import AboutStory from "../components/about/about-story";
import ValuesSection from "../components/about/values-section";
import SEOHead from "@/components/seo/SEOHead";
import { MultipleStructuredData } from "@/components/seo/StructuredData";


export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="אודות קי האוס אילת | רותם קהלון | משרד תיווך מוביל"
        description="הכירו את צוות קי האוס - 13 שנות ניסיון בשוק הנדל״ן האילתי, מאות לקוחות מרוצים, ושירות ברמה הגבוהה ביותר. רותם קהלון ושירז סבח מובילות את אחד ממשרדי התיווך המובילים באילת."
        canonical="/about"
        keywords={[
          'אודות',
          'רותם קהלון',
          'שירז סבח',
          'משרד תיווך אילת',
          'קי האוס אילת',
          'נדל"ן אילת',
          'ניסיון בתיווך',
          'צוות נדל"ן'
        ]}
        ogType="profile"
      />

      <MultipleStructuredData
        schemas={[
          {
            type: 'BreadcrumbList',
            data: {
              items: [
                { name: 'דף הבית', url: '/' },
                { name: 'אודות', url: '/about' }
              ]
            }
          },
          {
            type: 'WebPage',
            data: {
              name: 'אודות קי האוס אילת - הסיפור שלנו',
              url: '/about',
              description: 'הכירו את הצוות המקצועי של קי האוס - 13 שנות ניסיון בנדל"ן אילת'
            }
          },
          {
            type: 'Person',
            data: {
              name: 'רותם קהלון',
              jobTitle: 'בעלת משרד תיווך נדל"ן',
              image: '/images/rotem5.jpg'
            }
          }
        ]}
      />

      <main id="main-content" dir="rtl" className="min-h-screen bg-white">
        <AboutHero />
        <AboutStory />
        <ValuesSection />
        <VideosCarousel />
      </main>
    </>
  )
}
