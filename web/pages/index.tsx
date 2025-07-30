import StatsSection from "../components/common/stats-section";
import AboutSection from "../components/home/about-section";
import HeroSection from "../components/home/hero-section";
import ServicesGrid from "../components/home/services-grid";
import TestimonialsCarousel from "../components/home/testimonials-carousel";
import VideosCarousel from "../components/home/videos-carousel";

export default function HomePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <StatsSection
          title="למה לתת לנו לעזור לכם?"
          description="הנתונים מדברים בעד עצמם - אנחנו מביאים תוצאות"
          stats={[
            { value: 12, label: "שנות ניסיון בשוק האילתי", type: '+' },
            { value: 350, label: "עסקאות מוצלחות", type: '+' },
            { value: 98, label: "שביעות רצון לקוחות", type: 'precentage' },
            { value: 72, label: "אחוז מהלקוחות שלנו הם לקוחות חוזרים", type: 'precentage' },
            { value: 12, label: "שנות ניסיון בשוק האילתי", type: '+' },
            { value: 350, label: "עסקאות מוצלחות", type: '+' },
            { value: 98, label: "שביעות רצון לקוחות", type: 'precentage' },
            { value: 72, label: "אחוז מהלקוחות שלנו הם לקוחות חוזרים", type: 'precentage' },
          ]}
        />
      <TestimonialsCarousel />
      <VideosCarousel />
    </main>
  )
}
