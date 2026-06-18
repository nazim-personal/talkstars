'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { TESTIMONIALS } from '@/lib/constants'

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-ts-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Student Stories"
          title="Real Students. Real Results."
          subtitle="Don't just take our word for it — hear from students who transformed their English speaking skills with TalkStars."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow ${
                i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <Quote className="w-8 h-8 text-ts-indigo/20 mb-3" />
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-ts-navy">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-3.5 h-3.5 fill-ts-gold text-ts-gold"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
