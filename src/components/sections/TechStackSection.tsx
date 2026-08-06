'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Server, Layout, Cloud, Cpu, CheckCircle2 } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

export default function TechStackSection() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0)

  const categories = portfolioData.skillCategories
  const icons = [Server, Cpu, Layout, Cloud, Code2]

  return (
    <section id="tech" className="relative py-24 bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            <span>ENTERPRISE TECH STACK & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Full-Stack <span className="text-gradient-accent">Magento 2 & PHP</span> Expertise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Deep domain mastery spanning backend PHP modules, high-throughput GraphQL endpoints, Hyvä storefront acceleration, and automated CI/CD DevOps pipelines.
          </p>
        </div>

        {/* Category Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => {
            const Icon = icons[idx % icons.length]
            const isSelected = selectedCategoryIndex === idx
            return (
              <button
                key={cat.title}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-[0_0_20px_rgba(249,115,22,0.3)] scale-105'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Category Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategoryIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  {categories[selectedCategoryIndex].title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {categories[selectedCategoryIndex].description}
                </p>
              </div>
              <span className="text-xs font-mono text-orange-400 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 w-fit">
                Production Verified
              </span>
            </div>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories[selectedCategoryIndex].skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-5 rounded-2xl bg-slate-900/80 border transition-all hover:scale-102 flex flex-col justify-between gap-3 ${
                    skill.highlight
                      ? 'border-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.1)]'
                      : 'border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${skill.highlight ? 'text-orange-400' : 'text-slate-500'}`} />
                      <span className="text-sm font-bold text-slate-100">{skill.name}</span>
                    </div>
                    {skill.highlight && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 font-semibold">
                        Core Specialty
                      </span>
                    )}
                  </div>

                  {/* Level Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                      <span>Proficiency</span>
                      <span className="text-orange-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
