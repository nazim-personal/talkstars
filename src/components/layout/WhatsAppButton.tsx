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
      className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-[#25D366] text-white flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(37,211,102,0.4)' }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <span className="font-semibold text-[15px]">Chat with us</span>
    </motion.a>
  )
}
