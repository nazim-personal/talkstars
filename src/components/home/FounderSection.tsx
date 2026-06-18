'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { FOUNDER } from '@/lib/constants'

export function FounderSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-ts-indigo/20 to-ts-gold/20 rounded-3xl blur-xl" />
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                width={400}
                height={400}
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-xl"
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 256px, 320px"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold bg-ts-gold/10 text-ts-gold">
              Meet Our Founder
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ts-navy mb-2">
              {FOUNDER.name}
            </h2>
            <p className="text-ts-indigo font-semibold mb-6">
              {FOUNDER.title}
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              {FOUNDER.bio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FOUNDER.credentials.map((cred) => (
                <div key={cred} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-ts-lime shrink-0" />
                  <span className="text-gray-600 font-medium">{cred}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
