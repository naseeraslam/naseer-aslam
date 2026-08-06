'use client'

import { Github, Linkedin, Mail, MapPin, Download, ArrowUp } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/80 pt-16 pb-12 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 p-[1px] flex items-center justify-center">
                <span className="w-full h-full rounded-xl bg-slate-950 text-orange-400 font-mono font-bold flex items-center justify-center text-sm">
                  NA
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">Muhammad Naseer Aslam</h3>
                <p className="text-xs text-orange-400 font-mono">Adobe Commerce Certified Expert</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Specialist Senior Software Engineer architecting enterprise Magento 2 / Adobe Commerce platforms, high-throughput GraphQL APIs, custom modules, and CI/CD pipelines for global retailers.
            </p>
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Remote, Relocation & Visa Sponsorship</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About & Story</a></li>
              <li><a href="#experience" className="hover:text-orange-400 transition-colors">Work Experience</a></li>
              <li><a href="#projects" className="hover:text-orange-400 transition-colors">Featured Case Studies</a></li>
              <li><a href="#tech" className="hover:text-orange-400 transition-colors">Technical Stack</a></li>
              <li><a href="#certifications" className="hover:text-orange-400 transition-colors">Adobe Certifications</a></li>
              <li><a href="#process" className="hover:text-orange-400 transition-colors">Engineering Workflow</a></li>
            </ul>
          </div>

          {/* Direct Social Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
              Direct Contact & Socials
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-300">
              <a
                href={`mailto:${portfolioData.personal.contact.email}`}
                className="flex items-center gap-2.5 hover:text-orange-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-orange-500/40 text-orange-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{portfolioData.personal.contact.email}</span>
              </a>
              <a
                href={portfolioData.personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-orange-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-orange-500/40 text-orange-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={portfolioData.personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-orange-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-orange-500/40 text-orange-400">
                  <Github className="w-4 h-4" />
                </div>
                <span>GitHub Repositories</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Muhammad Naseer Aslam. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-orange-400 hover:border-orange-500/40 transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
