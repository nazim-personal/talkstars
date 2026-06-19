import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { CourseCard } from '@/components/shared/CourseCard'
import { FEATURED_COURSES } from '@/lib/constants'

export function CoursesSection() {
  return (
    <section className="py-20 lg:py-28 bg-ts-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Courses"
          title="Find the Perfect Course for You"
          subtitle="From complete beginners to advanced speakers — we have a course designed for every level and every goal."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-ts-indigo text-white font-bold text-sm hover:bg-ts-navy transition-colors shadow-lg shadow-ts-indigo/25"
          >
            View All Courses
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
