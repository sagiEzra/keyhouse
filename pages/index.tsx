import CTASection from "@/components/common/cta-section";
import StatsSection from "../components/common/stats-section";
import AboutSection from "../components/home/about-section";
import HeroSection from "../components/home/hero-section";
import ServicesGrid from "../components/home/services-grid";
import TestimonialsCarousel from "../components/home/testimonials-carousel";
import VideosCarousel from "../components/home/videos-carousel";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData, { MultipleStructuredData } from "@/components/seo/StructuredData";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="קי האוס אילת | משרד תיווך נדל״ן מוביל באילת | דירות למכירה והשכרה"
        description="משרד תיווך קי האוס - מומחים לנדל״ן באילת. דירות למכירה, דירות להשכרה, דירות להשקעה, ניהול נכסים ויעוץ מקצועי. 13 שנות ניסיון, +1000 עסקאות מוצלחות, 98% שביעות רצון לקוחות."
        canonical="/"
        keywords={[
          'דירות למכירה באילת',
          'דירות להשכרה באילת',
          'תיווך אילת',
          'נדל"ן אילת',
          'משרד תיווך באילת',
          'דירות להשקעה באילת',
          'מכירת דירה אילת',
          'השכרת דירה אילת',
          'ניהול נכסים אילת'
        ]}
        ogType="website"
      />

      <MultipleStructuredData
        schemas={[
          { type: 'RealEstateAgent' },
          { type: 'WebSite' },
          {
            type: 'BreadcrumbList',
            data: {
              items: [
                { name: 'דף הבית', url: '/' }
              ]
            }
          }
        ]}
      />

      <main id="main-content" dir="rtl" className="min-h-screen bg-white">
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <StatsSection
            title="למה לתת לנו לעזור לכם?"
            description="הנתונים מדברים בעד עצמם - אנחנו מביאים תוצאות"
            stats={[
              { value: 13, label: "שנות ניסיון בשוק האילתי", type: '+' },
              { value: 1000, label: "עסקאות מוצלחות", type: '+' },
              { value: 98, label: "שביעות רצון לקוחות", type: 'precentage' },
              { value: 98, label: "אחוז מהלקוחות שלנו הם לקוחות חוזרים", type: 'precentage' },
            ]}
          />
        <TestimonialsCarousel />
        <CTASection
          title="רוצה להתייעץ איתנו?"
          description="צור קשר עוד היום ונשמח לעזור לך למצוא את הנכס המושלם או למכור את הנכס שלך במחיר הטוב ביותר."
          buttonText="צור קשר"
        />
      </main>
    </>
  )
}
