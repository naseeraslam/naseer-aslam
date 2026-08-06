'use client'

import Image from 'next/image'
import { ArrowRight, Download, ShieldCheck, ShoppingBag, MapPin } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

export default function HeroSection() {
  const handleScrollToProjects = () => {
    const el = document.querySelector('#projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-600/20 via-amber-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Badge */}
            <div className="hero-fade hero-fade-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-orange-500/30 backdrop-blur-xl shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200">
                Open to Remote · Relocation · Visa Sponsorship
              </span>
            </div>

            {/* Title & Name */}
            <div className="space-y-3">
              <h1 className="hero-fade hero-fade-2 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.08]">
                Muhammad<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
                  Naseer Aslam
                </span>
              </h1>

              <p className="hero-fade hero-fade-3 text-lg sm:text-xl font-semibold text-orange-400 font-mono flex items-center gap-2">
                <span>Senior Software Engineer</span>
                <span className="text-slate-600">•</span>
                <span>Adobe Commerce Certified Expert</span>
              </p>
            </div>

            {/* Bio Narrative */}
            <p className="hero-fade hero-fade-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              {portfolioData.personal.bio}
            </p>

            {/* Adobe Certification Badges */}
            <div className="hero-fade hero-fade-5 flex flex-wrap gap-2.5 pt-1">
              {portfolioData.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r ${cert.badgeColor} text-slate-950 font-bold text-xs shadow-lg hover:scale-105 transition-transform cursor-default`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{cert.title}</span>
                </div>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="hero-fade hero-fade-6 flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={handleScrollToProjects}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-extrabold text-sm shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:scale-105 transition-all cursor-pointer"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleScrollToContact}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 hover:border-orange-500/50 text-slate-200 hover:text-white font-bold text-sm backdrop-blur-xl transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded-2xl text-slate-400 hover:text-orange-400 text-xs font-mono transition-colors"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Profile & Tech Card Visual Column */}
          <div className="hero-fade hero-fade-3 lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-500 to-amber-400 blur-2xl opacity-30 scale-105 animate-pulse-glow" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-4 backdrop-blur-2xl shadow-2xl space-y-4">
                
                {/* Next.js Optimized Image Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-4/5 border border-slate-700/50 group">
                  <Image
                    src={portfolioData.personal.headshot}
                    alt={portfolioData.personal.name}
                    width={320}
                    height={400}
                    priority
                    sizes="(max-width: 768px) 240px, 320px"
                    quality={75}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Overlay Badge: Enterprise Retail */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 border border-slate-700/60 backdrop-blur-md flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-100">Enterprise Commerce</p>
                        <p className="text-[10px] text-slate-400 font-mono">Box.co.uk · LaptopOutlet.co.uk</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Quick Details */}
                <div className="p-2 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-orange-400" />
                      <span>{portfolioData.personal.location}</span>
                    </span>
                    <span className="font-mono text-emerald-400 font-bold">● Active Certified</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <span>Target Companies:</span>
                    <span className="text-slate-200 font-medium">Adobe, Shopify, Stripe, Amazon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
