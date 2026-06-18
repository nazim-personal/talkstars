'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Users, User, Award } from 'lucide-react'
import { IMAGES } from '@/lib/images'
import type { Course } from '@/lib/constants'

interface CourseCardProps {
  course: Course
  index?: number
}

export function CourseCard({ course, index = 0 }: CourseCardProps) {
  const badgeColors: Record<string, string> = {
    Bestseller: 'bg-ts-gold text-white',
    Popular: 'bg-ts-indigo text-white',
    Advanced: 'bg-purple-600 text-white',
    Professional: 'bg-ts-navy text-white',
    Free: 'bg-ts-lime text-ts-navy',
  }

  const classTypeIcons = {
    group: <Users className="w-3.5 h-3.5" />,
    '1-on-1': <User className="w-3.5 h-3.5" />,
    batch: <Users className="w-3.5 h-3.5" />,
  }

  const priceDisplay =
    course.price === 'free'
      ? 'Free'
      : course.price === 'contact'
        ? 'Contact Us'
        : `₹${course.price}/mo`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/courses/${course.slug}`}
        className="group block h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
      >
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={IMAGES.courses[course.imageKey]}
            alt={course.title}
            width={600}
            height={400}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeColors[course.badge]}`}>
              {course.badge}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="px-3 py-1.5 rounded-full text-sm font-bold bg-white/95 text-ts-navy shadow-sm backdrop-blur-sm">
              {priceDisplay}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-ts-navy group-hover:text-ts-indigo transition-colors">
            {course.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {course.description}
          </p>

          <div className="mt-4 flex items-center gap-4 text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              {classTypeIcons[course.classType]}
              {course.classType === '1-on-1' ? '1-on-1' : course.classType === 'group' ? 'Group' : 'Batch'}
            </span>
            {course.certificate && (
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                Certificate
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
