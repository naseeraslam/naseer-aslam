'use client'

import { ReactNode, useEffect } from 'react'

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Disable Lenis on mobile/touch devices to prevent main thread layout locking
    if (window.matchMedia('(pointer: coarse)').matches) return

    let lenisInstance: any
    let rafId: number
    let timeoutId: NodeJS.Timeout

    const initLenis = async () => {
      const { default: Lenis } = await import('lenis')
      lenisInstance = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      })

      function raf(time: number) {
        if (lenisInstance) {
          lenisInstance.raf(time)
          rafId = requestAnimationFrame(raf)
        }
      }

      rafId = requestAnimationFrame(raf)
    }

    if ('requestIdleCallback' in window) {
      // @ts-ignore
      window.requestIdleCallback(initLenis)
    } else {
      timeoutId = setTimeout(initLenis, 300)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (rafId) cancelAnimationFrame(rafId)
      if (lenisInstance) lenisInstance.destroy()
    }
  }, [])

  return <>{children}</>
}
