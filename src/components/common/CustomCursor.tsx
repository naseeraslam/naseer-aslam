'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
        if (!isVisible) setIsVisible(true)
      })

      const target = e.target as HTMLElement | null
      if (target && target.closest('a, button, [role="button"], input, textarea')) {
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

  const outerSize = isHovered ? 48 : 24
  const outerOffset = outerSize / 2

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-orange-500/40 mix-blend-screen transition-all duration-150 ease-out"
        style={{
          transform: `translate(${position.x - outerOffset}px, ${position.y - outerOffset}px)`,
          width: outerSize,
          height: outerSize,
          backgroundColor: isHovered ? 'rgba(249, 115, 22, 0.15)' : 'rgba(249, 115, 22, 0.05)',
        }}
      />
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-orange-400 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isHovered ? 0.5 : 1})`,
        }}
      />
    </>
  )
}
