import AboutSection from "../components/home/about-section";
import HeroSection from "../components/home/hero-section";
import ServicesGrid from "../components/home/services-grid";
import TestimonialsCarousel from "../components/home/testimonials-carousel";

export default function HomePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <TestimonialsCarousel />
    </main>
  )
}
