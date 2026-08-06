'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 bg-slate-950/60 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK & BUSINESS IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Work <span className="text-gradient-accent">Experience & Track Record</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering high-scale commerce platforms, GraphQL API architectures, and zero-downtime release engineering for global retailers.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 lg:ml-12 space-y-12 pl-6 sm:pl-10">
          
          {portfolioData.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-orange-500 flex items-center justify-center text-orange-400 group-hover:scale-125 group-hover:bg-orange-500 group-hover:text-slate-950 transition-all shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-orange-500/40 backdrop-blur-xl shadow-2xl transition-all space-y-6">
                
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100">
                        {exp.jobTitle}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-semibold">
                          Present Role
                        </span>
                      )}
                    </div>
                    <p className="text-base font-bold text-orange-400 font-mono">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-xs w-fit">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.summary}
                </p>

                {/* Business Impact Box */}
                <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-xs text-slate-200 flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-orange-400 font-mono">Business Impact: </span>
                    <span>{exp.impact}</span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
                    Key Engineering Achievements:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono hover:border-orange-500/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
