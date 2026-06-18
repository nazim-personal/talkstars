'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${SITE.phoneRaw.replace('+', '')}?text=Hi%20TalkStars!%20I%20want%20to%20know%20more%20about%20your%20spoken%20English%20courses.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30"
      whileHover={{ scale: 1.1, boxShadow: '0 10px 40px rgba(34,197,94,0.4)' }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  )
}
