'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check, Download, Sparkles, Globe } from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-orange-600/15 via-amber-500/10 to-red-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT & BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Start a <span className="text-gradient-accent">Conversation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in scaling your enterprise Magento 2 platform or discussing senior engineering roles? I am open to Remote, Relocation, and Visa Sponsorship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Copy Button */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-slate-100">
                  Direct Contact
                </h3>
                <p className="text-xs text-slate-400">
                  Reach out directly via email or professional network profiles.
                </p>
              </div>

              {/* Instant Email Copy Box */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Primary Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono text-orange-400 font-bold truncate">
                    {portfolioData.personal.contact.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex-shrink-0 cursor-pointer"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-[10px] font-mono text-emerald-400">
                    ✓ Copied email address to clipboard!
                  </p>
                )}
              </div>

              {/* Location & Status Card */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Globe className="w-4 h-4 text-orange-400" />
                  <span>{portfolioData.personal.availability}</span>
                </div>
              </div>

              {/* Social Link Buttons */}
              <div className="flex flex-col gap-2.5 pt-2">
                <a
                  href={portfolioData.personal.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/40 text-slate-200 text-xs font-bold transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-orange-400" />
                    <span>Connect on LinkedIn</span>
                  </div>
                  <span className="text-slate-500 group-hover:text-orange-400 transition-colors font-mono">→</span>
                </a>

                <a
                  href={portfolioData.personal.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/40 text-slate-200 text-xs font-bold transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-orange-400" />
                    <span>View GitHub Repositories</span>
                  </div>
                  <span className="text-slate-500 group-hover:text-orange-400 transition-colors font-mono">→</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/40 text-slate-200 text-xs font-bold transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Download className="w-4 h-4 text-orange-400" />
                    <span>Download Official PDF Resume</span>
                  </div>
                  <span className="text-slate-500 group-hover:text-orange-400 transition-colors font-mono">→</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-6">
              
              <div className="space-y-1 border-b border-slate-800 pb-4">
                <h3 className="text-2xl font-extrabold text-slate-100">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400">
                  Fill out the form below to send an immediate inquiry.
                </p>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-100">Message Received!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. I will get back to you promptly at your email address.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-bold font-mono">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Recruiter / Hiring Manager"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-bold font-mono">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-bold font-mono">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Adobe, Shopify, Stripe, Enterprise Brand"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-bold font-mono">Project / Inquiry Details *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your platform requirements, technical role details, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-extrabold text-sm shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all cursor-pointer"
                  >
                    <span>Send Inquiry Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
