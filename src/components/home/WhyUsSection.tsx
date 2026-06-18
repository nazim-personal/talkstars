'use client'

import { motion } from 'framer-motion'
import { Video, Trophy, IndianRupee, Clock, Smartphone, Target } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { WHY_US } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  Video: <Video className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
  IndianRupee: <IndianRupee className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
}

const cardColors = [
  'from-blue-500/10 to-indigo-500/10 border-blue-200',
  'from-amber-500/10 to-orange-500/10 border-amber-200',
  'from-green-500/10 to-emerald-500/10 border-green-200',
  'from-purple-500/10 to-violet-500/10 border-purple-200',
  'from-cyan-500/10 to-teal-500/10 border-cyan-200',
  'from-rose-500/10 to-pink-500/10 border-rose-200',
]

const iconColors = [
  'bg-blue-500 text-white',
  'bg-amber-500 text-white',
  'bg-green-500 text-white',
  'bg-purple-500 text-white',
  'bg-cyan-500 text-white',
  'bg-rose-500 text-white',
]

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Why 10,000+ Students Trust TalkStars"
          subtitle="We don't just teach English — we build confidence. Here's what makes us different from every other platform."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br border ${cardColors[i]} hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${iconColors[i]} flex items-center justify-center mb-4`}>
                {iconMap[item.icon]}
              </div>
              <h3 className="text-lg font-bold text-ts-navy mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
