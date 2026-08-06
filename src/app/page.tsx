import dynamic from 'next/dynamic'
import ClientShell from '@/components/common/ClientShell'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import TechStackSection from '@/components/sections/TechStackSection'

// Below-fold sections: dynamically imported to keep initial JS minimal
const CertificationsSection = dynamic(() => import('@/components/sections/CertificationsSection'))
const GithubStatsSection = dynamic(() => import('@/components/sections/GithubStatsSection'))
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'))
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'))
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'))

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 bg-noise">
      <ClientShell />
      <Navbar />
      
      <main className="relative z-10 space-y-0">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <CertificationsSection />
        <GithubStatsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
