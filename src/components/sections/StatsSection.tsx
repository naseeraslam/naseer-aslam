'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolioData'

export default function StatsSection() {
  return (
    <section className="relative py-16 bg-slate-900/60 border-y border-slate-800/80 overflow-hidden">
      
      {/* Background glow strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/10 to-orange-500/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {portfolioData.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-orange-500/40 backdrop-blur-xl shadow-lg hover:scale-105 transition-all text-center space-y-1 group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 group-hover:scale-110 transition-transform">
                {metric.value}{metric.suffix}
              </div>
              <div className="text-xs font-bold text-slate-200">
                {metric.label}
              </div>
              <div className="text-[10px] text-slate-400 leading-tight">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
