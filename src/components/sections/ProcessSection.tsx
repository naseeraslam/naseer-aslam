'use client'

import { motion } from 'framer-motion'
import { Terminal, CheckCircle2 } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENGINEERING WORKFLOW & METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            How I Build <span className="text-gradient-accent">Reliable Systems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A battle-tested 6-step engineering process that ensures zero-downtime releases, high code quality, and measurable business performance.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-orange-500/40 backdrop-blur-xl transition-all space-y-4 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  {step.step}
                </span>
                <span className="p-2 rounded-xl bg-slate-800 text-orange-400 group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-100 group-hover:text-orange-400 transition-colors">
                {step.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
