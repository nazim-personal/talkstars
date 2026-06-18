'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { TESTIMONIALS } from '@/lib/constants'

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const containerCenter = container.scrollLeft + container.clientWidth / 2

      const items = Array.from(container.querySelectorAll('.testimonial-card')) as HTMLElement[]
      let closestIndex = 0
      let minDistance = Infinity

      items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2
        const distance = Math.abs(containerCenter - itemCenter)
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })

      if (activeIndex !== closestIndex) {
        setActiveIndex(closestIndex)
      }
    }
  }

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const items = Array.from(scrollContainerRef.current.querySelectorAll('.testimonial-card')) as HTMLElement[]
      if (items[index]) {
        const item = items[index]
        const container = scrollContainerRef.current
        const scrollPosition = item.offsetLeft - container.clientWidth / 2 + item.offsetWidth / 2
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const items = Array.from(scrollContainerRef.current.querySelectorAll('.testimonial-card')) as HTMLElement[]
        if (!items.length) return

        let nextIndex = activeIndex + 1
        if (nextIndex >= items.length) {
          nextIndex = 0 // rewind to start
        }

        const nextItem = items[nextIndex]
        const container = scrollContainerRef.current
        const scrollPosition = nextItem.offsetLeft - container.clientWidth / 2 + nextItem.offsetWidth / 2

        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        })
      }
    }, 3500)

    return () => clearInterval(timer)
  }, [activeIndex, isHovered])

  return (
    <section className="py-20 lg:py-28 bg-ts-offwhite overflow-hidden">
      <div className="w-full">
        <SectionHeader
          badge="Student Stories"
          title="Real Students. Real Results."
          subtitle="Don't just take our word for it — hear from students who transformed their English speaking skills with TalkStars."
        />

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-12 pt-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          onScroll={handleScroll}
        >
          {/* Hide webkit scrollbar via inline styles */}
          <style dangerouslySetInnerHTML={{ __html: `
            div::-webkit-scrollbar { display: none; }
          `}} />
          
          {/* Start Spacer to center the first item */}
          <div className="shrink-0 w-[calc(50%-160px)] md:w-[calc(50%-200px)]" />

          {TESTIMONIALS.map((t, i) => {
            const isActive = activeIndex === i
            
            return (
              <div
                key={t.id}
                className={`testimonial-card snap-center shrink-0 w-[320px] md:w-[400px] bg-white rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-500 ease-out cursor-pointer ${
                  isActive 
                    ? 'scale-100 opacity-100 shadow-2xl border-ts-indigo/20 z-10' 
                    : 'scale-90 opacity-40 shadow-sm border-gray-100 hover:opacity-70'
                } border`}
                onClick={() => scrollToSlide(i)}
              >
                <Quote className={`w-10 h-10 mb-4 shrink-0 transition-colors duration-500 ${isActive ? 'text-ts-indigo/40' : 'text-gray-200'}`} />
                <p className={`text-base leading-relaxed mb-6 grow transition-colors duration-500 ${isActive ? 'text-gray-700' : 'text-gray-500'}`}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-gray-100 shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-ts-navy truncate">{t.name}</h4>
                    <p className="text-xs text-gray-400 truncate">{t.role}</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className={`w-4 h-4 fill-ts-gold transition-colors duration-500 ${isActive ? 'text-ts-gold' : 'text-gray-300 fill-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          })}

          {/* End Spacer to center the last item */}
          <div className="shrink-0 w-[calc(50%-160px)] md:w-[calc(50%-200px)]" />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'bg-ts-indigo w-8' : 'bg-ts-indigo/20 hover:bg-ts-indigo/40 w-2.5'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
