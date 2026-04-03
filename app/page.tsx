import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { MetricsSection } from "@/components/portfolio/metrics-section"
import { ExpertiseSection } from "@/components/portfolio/expertise-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0A1F35] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MetricsSection />
      <ExpertiseSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
