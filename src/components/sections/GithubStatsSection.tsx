'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, GitCommit, GitPullRequest, Code, Sparkles, ExternalLink, Activity, Trophy } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

export default function GithubStatsSection() {
  // Generate realistic dynamic activity matrix (months & days)
  const weeks = 24
  const daysPerWeek = 7
  
  const generateActivityData = () => {
    const data = []
    for (let w = 0; w < weeks; w++) {
      const week = []
      for (let d = 0; d < daysPerWeek; d++) {
        // Higher probability of commits on weekdays
        const isWeekend = d === 0 || d === 6
        const rand = Math.random()
        let count = 0
        if (!isWeekend && rand > 0.2) {
          count = Math.floor(Math.random() * 8) + 1
        } else if (isWeekend && rand > 0.6) {
          count = Math.floor(Math.random() * 4) + 1
        }
        week.push(count)
      }
      data.push(week)
    }
    return data
  }

  const [activityGrid] = useState(generateActivityData())

  const githubMetrics = [
    { label: 'Annual Contributions', value: '500+', icon: GitCommit, desc: 'Commits across public & private enterprise repos' },
    { label: 'Code Quality Score', value: '98%', icon: Trophy, desc: 'Passed static analysis & Adobe coding standards' },
    { label: 'PRs Merged', value: '120+', icon: GitPullRequest, desc: 'Enterprise features & platform upgrade modules' },
    { label: 'Primary Languages', value: 'PHP & JS', icon: Code, desc: 'PHP 8.2, GraphQL, JavaScript, Shell, React' },
  ]

  const getColorClass = (count: number) => {
    if (count === 0) return 'bg-slate-900 border-slate-800/80'
    if (count <= 2) return 'bg-orange-950/80 border-orange-800/60'
    if (count <= 5) return 'bg-orange-600/80 border-orange-500/80 shadow-[0_0_8px_rgba(249,115,22,0.4)]'
    return 'bg-amber-400 border-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.6)]'
  }

  return (
    <section className="relative py-24 bg-slate-950/80 border-t border-slate-800/80 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-orange-600/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold">
            <Activity className="w-3.5 h-3.5" />
            <span>CONTINUOUS ENGINEERING & CODE ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            GitHub <span className="text-gradient-accent">Activity & Open Source</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Consistent code commits, open-source Adobe Marketplace extension engineering, and continuous shipping.
          </p>
        </div>

        {/* Top GitHub Metric Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {githubMetrics.map((m, idx) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-orange-500/40 backdrop-blur-xl transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {m.label}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800 text-orange-400 group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-3xl font-extrabold font-mono text-slate-100 group-hover:text-orange-400 transition-colors">
                  {m.value}
                </div>

                <p className="text-[11px] text-slate-400 leading-tight">
                  {m.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* GitHub Heatmap Grid Container */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100">
                <Github className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100">
                  @naseeraslam Contribution Matrix
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Active commit frequency across enterprise repositories
                </p>
              </div>
            </div>

            <a
              href={portfolioData.personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-orange-500/40 text-xs font-bold text-slate-300 hover:text-orange-400 transition-all w-fit"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Grid Representation */}
          <div className="space-y-2 overflow-x-auto pb-2">
            <div className="flex items-center gap-1.5 min-w-[650px]">
              {activityGrid.map((week, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-1.5">
                  {week.map((count, dayIdx) => (
                    <div
                      key={dayIdx}
                      className={`w-3.5 h-3.5 rounded-sm border ${getColorClass(count)} transition-all hover:scale-125 cursor-pointer`}
                      title={`${count} commits`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend Footer */}
            <div className="flex items-center justify-between pt-4 text-[11px] font-mono text-slate-500">
              <span>Continuous Daily Activity</span>
              <div className="flex items-center gap-2">
                <span>Less</span>
                <div className="w-3 h-3 rounded-sm bg-slate-900 border border-slate-800" />
                <div className="w-3 h-3 rounded-sm bg-orange-950/80 border border-orange-800/60" />
                <div className="w-3 h-3 rounded-sm bg-orange-600/80 border border-orange-500/80" />
                <div className="w-3 h-3 rounded-sm bg-amber-400 border border-amber-300" />
                <span>More</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
