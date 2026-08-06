'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import StatsSection from '@/components/sections/StatsSection'
import TechStackSection from '@/components/sections/TechStackSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'

// Dynamically import client components for sub-100ms LCP paint & 95+ Lighthouse score
const ThreeBackground = dynamic(() => import('@/components/common/ThreeBackground'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/common/CustomCursor'), { ssr: false })
const CommandPalette = dynamic(() => import('@/components/common/CommandPalette'), { ssr: false })
const CertificationsSection = dynamic(() => import('@/components/sections/CertificationsSection'), { ssr: true })
const GithubStatsSection = dynamic(() => import('@/components/sections/GithubStatsSection'), { ssr: true })
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'), { ssr: true })
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { ssr: true })

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 bg-noise">
      {/* Background Canvas */}
      <ThreeBackground />

      {/* Custom Cursor follower */}
      <CustomCursor />

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
