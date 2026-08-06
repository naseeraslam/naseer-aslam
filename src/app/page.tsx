'use client'

import { useState } from 'react'
import Navbar from '@/components/common/Navbar'
import CommandPalette from '@/components/common/CommandPalette'
import Footer from '@/components/common/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import StatsSection from '@/components/sections/StatsSection'
import TechStackSection from '@/components/sections/TechStackSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import CertificationsSection from '@/components/sections/CertificationsSection'
import GithubStatsSection from '@/components/sections/GithubStatsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 bg-noise">
      {/* Navbar with ⌘K trigger handler */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Global Command Palette Dialog */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Main Single-Page Sections */}
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

      {/* Animated Footer */}
      <Footer />
    </div>
  )
}
