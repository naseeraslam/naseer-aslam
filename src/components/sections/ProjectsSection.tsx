'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderGit2, ArrowUpRight, Zap, CheckCircle2, Layers, AlertCircle, X, Sparkles } from 'lucide-react'
import { portfolioData, CaseStudy } from '@/data/portfolioData'

export default function ProjectsSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)

  return (
    <section id="projects" className="relative py-24 bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED CASE STUDIES & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            High-Impact <span className="text-gradient-accent">Commerce Extensions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Case studies detailing enterprise problem statements, decoupled architectures, technical challenges, and verified business outcomes.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-orange-500/40 backdrop-blur-xl shadow-2xl transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-8 space-y-5">
                
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-orange-400 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 font-bold">
                    <Zap className="w-3 h-3" />
                    <span>{project.performanceGains}</span>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-orange-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Short Problem & Solution */}
                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="font-mono text-amber-400 font-bold flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Problem:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] font-mono border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-800/80 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 text-slate-200 hover:text-slate-950 text-xs font-bold transition-all cursor-pointer group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
                >
                  <span>View Full Architecture Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Deep Dive Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            {/* Modal Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
            />

            {/* Modal Container */}
            <motion.div
              className="relative w-full max-w-3xl rounded-3xl border border-slate-700/60 bg-slate-900/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl max-h-[90vh] overflow-y-auto space-y-6 text-slate-200"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-800 pb-4 gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-orange-400 font-bold">
                    {selectedCaseStudy.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-100">
                    {selectedCaseStudy.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {selectedCaseStudy.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-bold text-amber-400 font-mono flex items-center gap-1.5 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    Problem Statement
                  </span>
                  <p className="text-slate-300 leading-relaxed">{selectedCaseStudy.problem}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="font-bold text-emerald-400 font-mono flex items-center gap-1.5 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Implemented Solution
                  </span>
                  <p className="text-slate-300 leading-relaxed">{selectedCaseStudy.solution}</p>
                </div>
              </div>

              {/* Architecture Breakdown */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="font-bold text-orange-400 font-mono flex items-center gap-1.5 text-sm">
                  <Layers className="w-4 h-4" />
                  System Architecture Approach
                </span>
                <p className="text-slate-300 leading-relaxed font-mono">{selectedCaseStudy.architecture}</p>
              </div>

              {/* Challenges */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="font-bold text-slate-200 font-mono flex items-center gap-1.5 text-sm">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  Key Technical Challenges Overcome
                </span>
                <p className="text-slate-300 leading-relaxed">{selectedCaseStudy.challenges}</p>
              </div>

              {/* Business Results */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
                  Verified Business Outcomes:
                </h4>
                <ul className="space-y-2 text-xs">
                  {selectedCaseStudy.results.map((res, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Performance Pill */}
              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-xs font-mono text-orange-400 flex items-center justify-between">
                <span>Verified Metric:</span>
                <span className="font-bold text-slate-100">{selectedCaseStudy.performanceGains}</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}
