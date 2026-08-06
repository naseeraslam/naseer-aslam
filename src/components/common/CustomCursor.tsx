'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable on desktop fine pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame throttling for sub-1ms mouse tracking
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
        if (!isVisible) setIsVisible(true)
      })

      // Fast event delegation instead of scanning DOM nodes
      const target = e.target as HTMLElement | null
      if (target && target.closest('a, button, [role="button"], input, textarea, .interactive-card')) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Outer glowing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-orange-500/40 mix-blend-screen"
        animate={{
          x: position.x - (isHovered ? 24 : 12),
          y: position.y - (isHovered ? 24 : 12),
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          backgroundColor: isHovered ? 'rgba(249, 115, 22, 0.15)' : 'rgba(249, 115, 22, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.5 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-orange-400"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      />
    </>
  )
}
