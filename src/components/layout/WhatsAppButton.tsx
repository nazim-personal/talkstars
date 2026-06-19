'use client'

import { MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.phoneRaw.replace('+', '')}?text=Hi%20TalkStars!%20I%20want%20to%20know%20more%20about%20your%20spoken%20English%20courses.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-200 hover:scale-110 hover:shadow-[0_10px_40px_rgba(34,197,94,0.4)] active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
