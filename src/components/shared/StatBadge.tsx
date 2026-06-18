'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatBadgeProps {
  value: number
  suffix?: string
  label: string
}

export function StatBadge({ value, suffix = '', label }: StatBadgeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const steps = 60
    const increment = value / steps
    let current = 0
    const isDecimal = value % 1 !== 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-white">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-white/70 font-medium">{label}</div>
    </div>
  )
}
