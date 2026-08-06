'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Keyboard, X } from 'lucide-react'

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if active in input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return
      if (e.key === '?') {
        setIsOpen((prev) => !prev)
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const shortcuts = [
    { key: '⌘ K', description: 'Open Command Palette' },
    { key: '?', description: 'Toggle Keyboard Shortcuts' },
    { key: 'ESC', description: 'Close Modals & Drawers' },
  ]

  return (
    <>
      {/* Floating help hint badge on bottom right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 p-2.5 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 text-slate-400 hover:text-orange-400 hover:border-orange-500/40 transition-all shadow-xl hidden sm:flex items-center gap-1.5 text-xs font-mono cursor-pointer"
        title="Keyboard Shortcuts (?)"
      >
        <Keyboard className="w-3.5 h-3.5" />
        <span>Press ?</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="relative w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-slate-200">
                  <Keyboard className="w-4 h-4 text-orange-400" />
                  <h3 className="text-sm font-bold">Keyboard Shortcuts</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-4 space-y-3">
                {shortcuts.map((s) => (
                  <div key={s.key} className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">{s.description}</span>
                    <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-orange-400 font-bold">
                      {s.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
