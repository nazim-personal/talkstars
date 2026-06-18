'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-ts-navy via-ts-blue to-ts-indigo">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ts-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-ts-sky/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Ready to Start Speaking
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ts-gold to-yellow-300">
              English Confidently?
            </span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Book a free counselling session today and take the first step towards transforming your English speaking skills. No commitment required.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ts-gold text-white font-bold text-base hover:bg-ts-gold/90 transition-all shadow-lg shadow-ts-gold/25 hover:shadow-xl hover:shadow-ts-gold/30"
            >
              Get Free Counselling
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-bold text-base hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call {SITE.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
