'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { IMAGES } from '@/lib/images'
import { STATS } from '@/lib/constants'
import { StatBadge } from '@/components/shared/StatBadge'
import { LeadCaptureCard } from './LeadCaptureCard'

export function HeroSection() {
  const headingLines = [
    'Speak English',
    'with Confidence.',
    'Transform Your Life.',
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-ts-navy via-ts-blue to-ts-indigo">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Students learning English online"
          fill
          className="object-cover opacity-[0.07]"
          priority
          sizes="100vw"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ts-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ts-sky/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-ts-gold/15 text-ts-gold text-sm font-semibold border border-ts-gold/20">
                🎓 ISO 9001:2015 Certified • Trusted by 10,000+ Students
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              {headingLines.map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                >
                  {i === 1 && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ts-gold to-yellow-300">
                      {line}
                    </span>
                  )}
                  {i !== 1 && line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-lg md:text-xl text-white/70 max-w-lg leading-relaxed"
            >
              Join India&apos;s most trusted online spoken English platform. Live classes, expert trainers &amp; ISO-certified courses from just{' '}
              <span className="text-ts-gold font-bold">₹299/month</span>.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {STATS.map((stat) => (
                <StatBadge
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </motion.div>
          </div>

          {/* Lead Capture Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-4 lg:mx-0"
          >
            <LeadCaptureCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
