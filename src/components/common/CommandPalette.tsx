'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, X, User, Briefcase, Award, Code2, 
  FolderGit2, Mail, FileText, ArrowRight, Sparkles, Terminal
} from 'lucide-react'
import { portfolioData } from '@/data/portfolioData'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
        else {
          // Trigger open handled by parent listener
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const commands = [
    { id: 'about', label: 'About & Story', category: 'Navigation', icon: User, target: '#about' },
    { id: 'experience', label: 'Work Experience', category: 'Navigation', icon: Briefcase, target: '#experience' },
    { id: 'projects', label: 'Featured Case Studies', category: 'Navigation', icon: FolderGit2, target: '#projects' },
    { id: 'tech', label: 'Technical Stack', category: 'Navigation', icon: Code2, target: '#tech' },
    { id: 'certifications', label: 'Adobe Certifications', category: 'Navigation', icon: Award, target: '#certifications' },
    { id: 'process', label: 'Engineering Process', category: 'Navigation', icon: Terminal, target: '#process' },
    { id: 'contact', label: 'Get In Touch', category: 'Actions', icon: Mail, target: '#contact' },
    { id: 'email', label: `Copy Email (${portfolioData.personal.contact.email})`, category: 'Actions', icon: FileText, action: 'copy-email' },
    { id: 'linkedin', label: 'Open LinkedIn Profile', category: 'Social', icon: Sparkles, url: portfolioData.personal.contact.linkedin },
    { id: 'github', label: 'Open GitHub Profile', category: 'Social', icon: FolderGit2, url: portfolioData.personal.contact.github },
  ]

  const filteredCommands = commands.filter(c => 
    c.label.toLowerCase().includes(query.toLowerCase()) || 
    c.category.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (cmd: typeof commands[0]) => {
    onClose()
    setQuery('')

    if (cmd.target) {
      const el = document.querySelector(cmd.target)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else if (cmd.url) {
      window.open(cmd.url, '_blank')
    } else if (cmd.action === 'copy-email') {
      navigator.clipboard.writeText(portfolioData.personal.contact.email)
      alert(`Copied email to clipboard: ${portfolioData.personal.contact.email}`)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Palette Dialog */}
          <motion.div
            className="relative w-full max-w-xl rounded-2xl border border-slate-700/60 bg-slate-900/90 shadow-2xl backdrop-blur-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', duration: 0.3 }}
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
              <Search className="w-5 h-5 text-orange-400" />
              <input
                type="text"
                placeholder="Type a command or search section (e.g. Experience, Certifications, Email)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-400">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((cmd) => {
                  const Icon = cmd.icon
                  return (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelect(cmd)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-800/80 text-left transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-800/60 text-slate-400 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                          {cmd.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          {cmd.category}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-orange-400 transition-colors" />
                      </div>
                    </button>
                  )
                })
              )}
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/60 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Use ↑ ↓ to navigate, ESC to exit</span>
              <span className="font-mono text-orange-400">Press ⌘K anytime</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
