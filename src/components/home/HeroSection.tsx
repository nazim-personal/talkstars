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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#11235A] to-[#1E3B8E]">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ts-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ts-sky/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-8"
            >
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ts-lime animate-pulse" />
                ISO 9001:2015 Certified • Since 2020
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Speak English
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <span className="text-ts-gold">Confidently</span> from
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Day One.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-lg md:text-xl text-white/80 max-w-lg leading-relaxed font-medium"
            >
              India's most trusted online spoken English platform. Join 5,000+ students, working professionals & homemakers who speak fearlessly today.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-lg"
            >
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white">5,000+</div>
                <div className="text-sm text-white/70 mt-1 font-medium">Active Students</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white">8 yrs</div>
                <div className="text-sm text-white/70 mt-1 font-medium">Expert Coaching</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white">90 days</div>
                <div className="text-sm text-white/70 mt-1 font-medium">Fluent & Confident</div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10"
            >
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-8 py-3.5 rounded-full bg-ts-gold text-ts-navy font-bold hover:bg-ts-gold/90 transition-all text-base">
                  Book Free Class
                </button>
                <button className="px-8 py-3.5 rounded-full bg-transparent border border-white text-white font-bold hover:bg-white/10 transition-all text-base">
                  Explore Courses
                </button>
              </div>
              <p className="mt-4 text-sm text-white/50 font-medium">
                No payment needed to start. Cancel anytime.
              </p>
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
