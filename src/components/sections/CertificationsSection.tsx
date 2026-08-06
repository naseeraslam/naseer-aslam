'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Award, CheckCircle2, ArrowUpRight, Lock } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 bg-slate-950/60 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-red-600/10 via-orange-600/10 to-amber-500/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>OFFICIAL ADOBE CERTIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Dual <span className="text-gradient-accent">Adobe Commerce</span> Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous proctored exam certifications awarded directly by Adobe validating elite competency in enterprise platform architecture, custom extension engineering, and performance tuning.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-orange-500/50 backdrop-blur-xl shadow-2xl transition-all space-y-6 group overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.badgeColor}`} />

              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-orange-400">
                      {cert.issuer}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-400">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-100 group-hover:text-orange-400 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className={`p-3 rounded-2xl bg-gradient-to-tr ${cert.badgeColor} text-slate-950 flex-shrink-0 shadow-lg`}>
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {cert.description}
              </p>

              {/* Verified Capabilities */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  Validated Core Competencies:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>Custom Plugin/Observer</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>GraphQL / REST APIs</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>EAV & DB Customization</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>High-Load Performance</span>
                  </span>
                </div>
              </div>

              {/* Bottom verification badge */}
              <div className="pt-2 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                  <Lock className="w-3 h-3" />
                  <span>Proctored Verification Active</span>
                </span>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <span>Verify Credential</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
