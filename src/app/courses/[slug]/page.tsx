import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle, Clock, Users, User, Award, ArrowLeft, Phone } from 'lucide-react'
import { COURSES, SITE } from '@/lib/constants'
import { IMAGES } from '@/lib/images'
import { JsonLd } from '@/components/seo/JsonLd'

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = COURSES.find((c) => c.slug === slug)
  if (!course) return {}

  const priceText =
    course.price === 'free'
      ? 'Free'
      : course.price === 'contact'
        ? 'Contact for pricing'
        : `₹${course.price}/month`

  return {
    title: course.title,
    description: `${course.description} ${priceText}. Duration: ${course.duration}. Enroll now at TalkStars.`,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/courses/${slug}`,
    },
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/courses/${slug}`,
      images: [
        {
          url: IMAGES.courses[course.imageKey],
          width: 600,
          height: 400,
          alt: course.title,
        },
      ],
    },
  }
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params
  const course = COURSES.find((c) => c.slug === slug)
  if (!course) notFound()

  const priceDisplay =
    course.price === 'free'
      ? 'Free'
      : course.price === 'contact'
        ? 'Contact Us'
        : `₹${course.price}`

  const priceValue =
    course.price === 'free' ? '0' : course.price === 'contact' ? '0' : String(course.price)

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'TalkStars',
      sameAs: 'https://talkstars.in',
    },
    offers: {
      '@type': 'Offer',
      price: priceValue,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  }

  const classTypeLabel =
    course.classType === '1-on-1'
      ? '1-on-1 Private'
      : course.classType === 'group'
        ? 'Group Classes'
        : 'Batch Program'

  return (
    <>
      <JsonLd data={courseSchema} />

      <div className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-ts-indigo transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            All Courses
          </Link>

          <div className="grid lg:grid-cols-[1fr_380px] gap-10">
            {/* Main Content */}
            <div>
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src={IMAGES.courses[course.imageKey]}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full object-cover aspect-[3/2]"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-ts-gold text-white">
                    {course.badge}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-ts-navy mb-4">
                {course.title}
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {course.description}
              </p>

              <h2 className="text-xl font-bold text-ts-navy mb-4">
                What You&apos;ll Learn
              </h2>
              <div className="space-y-3 mb-10">
                {course.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ts-lime shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-extrabold text-ts-navy">
                    {priceDisplay}
                  </div>
                  {typeof course.price === 'number' && (
                    <p className="text-sm text-gray-400 mt-1">per month</p>
                  )}
                </div>

                <div className="space-y-4 mb-6 text-sm">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      Duration
                    </span>
                    <span className="font-semibold text-ts-navy">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="flex items-center gap-2 text-gray-500">
                      {course.classType === '1-on-1' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Users className="w-4 h-4" />
                      )}
                      Class Type
                    </span>
                    <span className="font-semibold text-ts-navy">{classTypeLabel}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="flex items-center gap-2 text-gray-500">
                      <Award className="w-4 h-4" />
                      Certificate
                    </span>
                    <span className="font-semibold text-ts-navy">
                      {course.certificate ? 'Yes (ISO Certified)' : 'No'}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${SITE.phoneRaw.replace('+', '')}?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 rounded-xl bg-ts-gold text-white text-center font-bold hover:bg-ts-gold/90 transition-colors shadow-lg shadow-ts-gold/25 mb-3"
                >
                  Enroll via WhatsApp
                </a>

                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-ts-offwhite text-ts-navy text-center font-bold hover:bg-ts-lightgray transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call to Enroll
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
