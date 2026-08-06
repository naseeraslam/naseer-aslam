'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Terminal, Cpu, Layers, ShieldAlert, Award, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'journey' | 'focus' | 'philosophy'>('journey')

  const stories = {
    journey: {
      title: 'Built on Rigorous Computer Science Foundations',
      subtitle: 'From PUCIT BS IT graduate to dual Adobe Commerce Certified Expert.',
      paragraphs: [
        'My journey in software engineering began at Punjab University College of Information Technology (PUCIT), mastering computer science fundamentals, data structures, relational databases, and distributed systems.',
        'Over the last 4+ years, I specialized exclusively in the Magento 2 / Adobe Commerce ecosystem — moving from customizing core modules to architecting massive multi-store enterprise platforms for leading UK electronics retailers.',
        'In November 2024, I achieved the Adobe Commerce Certified Expert credential, cementing my ability to lead complex customizations, performance tuning, and high-availability enterprise deployments.'
      ]
    },
    focus: {
      title: 'Architecting Platforms Serving Thousands of Daily Transactions',
      subtitle: 'Box.co.uk, LaptopOutlet.co.uk, OppoStore.co.uk and beyond.',
      paragraphs: [
        'High-volume enterprise commerce demands an uncompromising commitment to system performance, security, and scalability.',
        'I specialize in decoupling heavy legacy storefronts with high-throughput GraphQL APIs, building custom B2B self-service portals, accelerating storefront load times with Hyvä themes, and integrating mission-critical payment gateways like Stripe under peak transaction loads.',
        'My work directly translates into higher conversion rates, zero log-induced server outages, and streamlined checkout experiences for thousands of daily active buyers.'
      ]
    },
    philosophy: {
      title: 'Clean Architecture, Test-Driven Quality & Zero-Downtime DevOps',
      subtitle: 'Engineering excellence over temporary workarounds.',
      paragraphs: [
        'I believe in strict adherence to Adobe Commerce design patterns — leveraging repository patterns, dependency injection, and clean module boundaries to eliminate technical debt.',
        'By automating deployment pipelines with CI/CD, every code change is validated through automated static analysis, security audits, and database patch checks before reaching production nodes.',
        'Whether remote or on-site, I collaborate with cross-functional product, QA, and infrastructure teams to deliver enterprise systems built to scale for years to come.'
      ]
    }
  }

  return (
    <section id="about" className="relative py-24 bg-slate-950/60 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE SUMMARY & NARRATIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Architecting <span className="text-gradient-accent">Enterprise Commerce</span> Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Why leading e-commerce brands and recruiters rely on my engineering expertise to scale high-traffic Magento storefronts.
          </p>
        </div>

        {/* Narrative Tabs Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { id: 'journey', label: 'The Journey', icon: Terminal, desc: 'Education & Adobe Expert Certification' },
              { id: 'focus', label: 'Enterprise Focus', icon: Cpu, desc: 'High-traffic UK Storefront Architectures' },
              { id: 'philosophy', label: 'Engineering Philosophy', icon: Layers, desc: 'Clean Architecture & CI/CD Hygiene' },
            ].map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 border-orange-500/60 shadow-[0_0_25px_rgba(249,115,22,0.15)]'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${isActive ? 'bg-orange-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                          {tab.label}
                        </p>
                        <p className="text-[11px] text-slate-400 font-mono mt-0.5">{tab.desc}</p>
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Narrative Story Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6"
              >
                <div className="space-y-2 border-b border-slate-800 pb-6">
                  <h3 className="text-2xl font-bold text-slate-100">
                    {stories[activeTab].title}
                  </h3>
                  <p className="text-sm font-mono text-orange-400">
                    {stories[activeTab].subtitle}
                  </p>
                </div>

                <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                  {stories[activeTab].paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Highlight Pills */}
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono">
                    ✓ Adobe Commerce Expert Certified
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono">
                    ✓ Magento 2.4.7 Upgrade Leader
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono">
                    ✓ GraphQL & Hyvä Frontend Speeds
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
