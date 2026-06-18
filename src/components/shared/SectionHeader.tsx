'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export function SectionHeader({ badge, title, subtitle, center = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-sm font-semibold bg-ts-gold/10 text-ts-gold">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight ${
          light ? 'text-white' : 'text-ts-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${center ? 'mx-auto' : ''} ${
            light ? 'text-white/70' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
