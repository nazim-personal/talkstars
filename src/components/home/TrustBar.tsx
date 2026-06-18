'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Star, Award, Globe } from 'lucide-react'
import { TRUST_ITEMS } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Star: <Star className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
}

export function TrustBar() {
  return (
    <section className="bg-ts-offwhite border-y border-ts-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 justify-center"
            >
              <div className="w-10 h-10 rounded-xl bg-ts-indigo/10 text-ts-indigo flex items-center justify-center shrink-0">
                {iconMap[item.icon]}
              </div>
              <span className="text-sm font-semibold text-ts-navy">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
