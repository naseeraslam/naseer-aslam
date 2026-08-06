'use client'

import dynamic from 'next/dynamic'

const ThreeBackground = dynamic(() => import('@/components/common/ThreeBackground'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/common/CustomCursor'), { ssr: false })
const ReadingProgressBar = dynamic(() => import('@/components/common/ReadingProgressBar'), { ssr: false })

export default function ClientShell() {
  return (
    <>
      <ReadingProgressBar />
      <ThreeBackground />
      <CustomCursor />
    </>
  )
}
