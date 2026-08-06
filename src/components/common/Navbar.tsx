'use client'

import { useState, useEffect } from 'react'
import { Command, Menu, X, ArrowUpRight, Award, Briefcase, User, Code2, FolderGit2, Mail } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

interface NavbarProps {
  onOpenCommandPalette: () => void
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)

        const sections = ['hero', 'about', 'experience', 'projects', 'tech', 'certifications', 'contact']
        const scrollPosition = window.scrollY + 200

        for (const section of sections) {
          const el = document.getElementById(section)
          if (el) {
            const top = el.offsetTop
            const height = el.offsetHeight
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section)
              break
            }
          }
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { label: 'Case Studies', href: '#projects', id: 'projects', icon: FolderGit2 },
    { label: 'Tech Stack', href: '#tech', id: 'tech', icon: Code2 },
    { label: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-4 pb-2 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#hero')
          }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 hover:border-orange-500/40 transition-all group shadow-xl"
        >
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-[1px] flex items-center justify-center font-bold text-xs text-slate-950">
            <span className="w-full h-full rounded-full bg-slate-950 text-orange-400 flex items-center justify-center font-mono font-bold group-hover:bg-transparent group-hover:text-slate-950 transition-colors">
              NA
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-100 group-hover:text-orange-400 transition-colors leading-tight">
              Naseer Aslam
            </span>
            <span className="text-[10px] text-orange-400/90 font-mono leading-tight">
              Adobe Commerce Certified
            </span>
          </div>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 shadow-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'text-white font-semibold bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
              </a>
            )
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Command Palette Trigger Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 text-slate-300 hover:border-orange-500/40 hover:text-white transition-all text-xs shadow-xl cursor-pointer"
            title="Open Command Palette (⌘K)"
          >
            <Command className="w-3.5 h-3.5 text-orange-400" />
            <span className="hidden sm:inline font-mono text-[11px] text-slate-400">⌘K</span>
          </button>

          {/* Quick CTA button */}
          <a
            href={portfolioData.personal.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 text-xs font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all hover:scale-105"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 text-slate-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-2xl pointer-events-auto space-y-2 animate-fade-in">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/80 text-sm font-medium text-slate-200 hover:text-orange-400 transition-colors"
              >
                <Icon className="w-4 h-4 text-orange-400" />
                <span>{link.label}</span>
              </a>
            )
          })}
          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <a
              href={portfolioData.personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-bold text-center text-xs flex items-center justify-center gap-1.5"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
