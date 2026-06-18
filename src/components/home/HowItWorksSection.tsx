'use client'

import { motion } from 'framer-motion'
import { Phone, BookMarked, Play, Sparkles } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { HOW_IT_WORKS } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  Phone: <Phone className="w-6 h-6" />,
  BookMarked: <BookMarked className="w-6 h-6" />,
  Play: <Play className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
}

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title="Start Speaking English in 4 Simple Steps"
          subtitle="Our proven process makes learning English easy and structured."
        />

        {/* Desktop: horizontal row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-ts-indigo via-ts-sky to-ts-gold" />

          {HOW_IT_WORKS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center px-6"
            >
              <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-ts-indigo to-ts-sky text-white flex items-center justify-center shadow-lg shadow-ts-indigo/20">
                {iconMap[item.icon]}
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-ts-gold text-white text-sm font-bold flex items-center justify-center -translate-y-1 translate-x-2 z-20 shadow-md" style={{ left: 'calc(50% + 24px)' }}>
                {item.step}
              </div>
              <h3 className="mt-6 text-lg font-bold text-ts-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tablet: 2x2 grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-8">
          {HOW_IT_WORKS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ts-indigo to-ts-sky text-white flex items-center justify-center shrink-0 shadow-lg shadow-ts-indigo/20">
                {iconMap[item.icon]}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-ts-gold text-white text-xs font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-ts-navy">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stack with left border */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-ts-indigo via-ts-sky to-ts-gold" />
          <div className="space-y-8">
            {HOW_IT_WORKS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-8 top-1 w-9 h-9 rounded-full bg-gradient-to-br from-ts-indigo to-ts-sky text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-ts-navy">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
