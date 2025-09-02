import VideosCarousel from "@/components/home/videos-carousel";
import AboutHero from "../components/about/about-hero";
import AboutStory from "../components/about/about-story";
import ValuesSection from "../components/about/values-section";


export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <AboutHero />
      <AboutStory />
      <ValuesSection />
      <VideosCarousel />
    </main>
  )
}
