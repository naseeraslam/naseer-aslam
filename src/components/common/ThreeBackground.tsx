'use client'

import { useEffect, useRef } from 'react'

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let animationFrameId: number
    let timeoutId: NodeJS.Timeout

    // Defer canvas startup until browser idle to ensure 0ms main thread blocking on boot
    const startCanvas = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d', { alpha: true })
      if (!ctx) return

      let width = (canvas.width = window.innerWidth)
      let height = (canvas.height = window.innerHeight)

      const particles: Array<{
        x: number
        y: number
        radius: number
        vx: number
        vy: number
        alpha: number
      }> = []

      // Reduced count for maximum 60fps performance
      const particleCount = Math.min(Math.floor((width * height) / 25000), 40)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.8 + 0.8,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          alpha: Math.random() * 0.35 + 0.1,
        })
      }

      const handleResize = () => {
        if (!canvas) return
        width = canvas.width = window.innerWidth
        height = canvas.height = window.innerHeight
      }

      window.addEventListener('resize', handleResize, { passive: true })

      const render = () => {
        ctx.clearRect(0, 0, width, height)

        particles.forEach((p, i) => {
          p.x += p.vx
          p.y += p.vy

          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0

          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(249, 115, 22, ${p.alpha})`
          ctx.fill()

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j]
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 100) {
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.strokeStyle = `rgba(249, 115, 22, ${0.12 * (1 - dist / 100)})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })

        animationFrameId = requestAnimationFrame(render)
      }

      render()
    }

    if ('requestIdleCallback' in window) {
      // @ts-ignore
      window.requestIdleCallback(startCanvas)
    } else {
      timeoutId = setTimeout(startCanvas, 200)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
    />
  )
}
