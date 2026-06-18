'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, BookMarked, Play, Sparkles } from 'lucide-react'
import { HOW_IT_WORKS } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  Phone: <Phone className="w-7 h-7" />,
  BookMarked: <BookMarked className="w-7 h-7" />,
  Play: <Play className="w-7 h-7" />,
  Sparkles: <Sparkles className="w-7 h-7" />,
}

export function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(2) // Default to step 3 as in the design

  return (
    <section className="relative py-20 lg:py-32 bg-[linear-gradient(135deg,#0D1B40_0%,#1A3A8F_100%)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block mb-4 px-5 py-1.5 rounded-full text-sm font-bold border border-ts-gold text-ts-gold tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Start Speaking English in 4 Simple Steps
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Our proven process makes learning English easy and structured.
          </p>
        </div>

        {/* Stepper Timeline (Desktop only) */}
        <div className="hidden lg:flex relative mb-12 px-16 items-center justify-between max-w-5xl mx-auto">
          {/* Background Line */}
          <div className="absolute left-16 right-16 top-1/2 h-1 bg-white/20 -translate-y-1/2 rounded-full z-0" />
          
          {/* Active Line */}
          <div 
            className="absolute left-16 top-1/2 h-1 bg-ts-gold -translate-y-1/2 transition-all duration-500 rounded-full z-0"
            style={{ width: `calc(${(activeIndex / (HOW_IT_WORKS.length - 1)) * 100}% - ${activeIndex === 3 ? 32 : 16}px)` }} 
            // the calc adjustment prevents the yellow line from poking out past the dots
          />

          {HOW_IT_WORKS.map((_, i) => {
            const isCompleted = i < activeIndex;
            const isActive = i === activeIndex;

            return (
              <div key={i} className="relative z-10">
                <div 
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isCompleted 
                      ? 'bg-ts-gold' 
                      : isActive 
                        ? 'bg-[#0D1B40] border-2 border-white shadow-[0_0_0_2px_rgba(255,255,255,0.2)]' 
                        : 'bg-white'
                  }`}
                >
                  {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>
            )
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {HOW_IT_WORKS.map((item, i) => {
            const isActive = activeIndex === i;
            
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setActiveIndex(i)}
                className={`rounded-3xl p-8 border transition-all duration-500 cursor-pointer flex flex-col items-center text-center relative ${
                  isActive 
                    ? 'bg-white/10 border-white/20 scale-105 shadow-2xl z-10' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10 z-0'
                }`}
              >
                <span className={`text-sm font-bold uppercase tracking-wider mb-8 transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-ts-gold'
                }`}>
                  STEP 0{item.step}
                </span>
                
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 ${
                  isActive ? 'bg-[#987640]/40 text-ts-gold shadow-inner' : 'bg-ts-indigo text-white shadow-lg'
                }`}>
                  {iconMap[item.icon]}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
