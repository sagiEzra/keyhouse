import AboutHero from "../components/about/about-hero";
import AboutStory from "../components/about/about-story";
import TeamSection from "../components/about/team-section";
import ValuesSection from "../components/about/values-section";


export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <AboutHero />
      <AboutStory />
      <TeamSection />
      <ValuesSection />
    </main>
  )
}
