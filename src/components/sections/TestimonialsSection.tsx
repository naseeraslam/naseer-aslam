'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Star, Quote } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-slate-950/60 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ENTERPRISE ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Client & Leader <span className="text-gradient-accent">Recommendations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Feedback from engineering managers and commerce directors on platform upgrades, API performance, and reliable delivery.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-orange-500/40 backdrop-blur-xl shadow-2xl transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-orange-500/30" />

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-100">{item.author}</h4>
                  <p className="text-xs text-orange-400 font-mono">{item.company}</p>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-950 text-emerald-400 border border-slate-800">
                  Verified Recommendation
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
