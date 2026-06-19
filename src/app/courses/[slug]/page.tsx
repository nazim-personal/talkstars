import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle, Clock, Users, User, Award, ArrowLeft, Phone, PlayCircle, Video, Star } from 'lucide-react'
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

                <Link
                  href={`/payment/${course.slug}`}
                  className="block w-full py-3.5 rounded-xl bg-ts-indigo text-white text-center font-bold hover:bg-ts-navy transition-colors shadow-lg shadow-ts-indigo/25 mb-3"
                >
                  Buy Now
                </Link>

                <a
                  href={`https://wa.me/${SITE.phoneRaw.replace('+', '')}?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-ts-gold text-white text-center font-bold hover:bg-ts-gold/90 transition-colors shadow-lg shadow-ts-gold/25 mb-3"
                >
                  <Phone className="w-4 h-4" />
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

          {/* Demo Video Section */}
          <div className="mt-20 bg-ts-offwhite rounded-[2rem] p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-ts-indigo text-sm font-bold shadow-sm mb-6">
                  <PlayCircle className="w-4 h-4" />
                  Watch a Free Demo Class
                </div>
                <h2 className="text-3xl font-extrabold text-ts-navy mb-4">
                  See How Our Classes Work
                </h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Watch this demo class to experience our teaching style, live interaction, and student engagement.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Users, text: 'Real classroom interaction' },
                    { icon: User, text: 'Expert trainer guidance' },
                    { icon: Video, text: 'Practical speaking practice' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-ts-navy font-medium">
                      <div className="w-8 h-8 rounded-full bg-ts-indigo/10 text-ts-indigo flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4" />
                      </div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl group cursor-pointer border border-white/20">
                <Image src="https://picsum.photos/seed/ts-demo/800/450" alt="Demo Class" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-ts-indigo transition-colors duration-300">
                    <PlayCircle className="w-10 h-10 text-white fill-white" />
                  </div>
                </div>
                {/* Fake player controls */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-end px-4 pb-3">
                  <div className="w-full flex items-center gap-4">
                    <PlayCircle className="w-4 h-4 text-white" />
                    <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-ts-indigo rounded-full" />
                    </div>
                    <span className="text-xs text-white/80 font-medium">1:35 / 3:47</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-ts-navy">What Our Students Say</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Priya S.',
                  role: 'Student',
                  text: 'TalkStars has improved my confidence a lot. Now I can speak English without any hesitation.',
                  avatar: 'https://picsum.photos/seed/ts-priyas/100/100',
                },
                {
                  name: 'Rohit K.',
                  role: 'Student',
                  text: 'The teachers are very supportive and the classes are interactive. Highly recommended!',
                  avatar: 'https://picsum.photos/seed/ts-rohit/100/100',
                },
                {
                  name: 'Anjali M.',
                  role: 'Student',
                  text: 'Great experience! The practice sessions and feedback really help in improving.',
                  avatar: 'https://picsum.photos/seed/ts-anjali/100/100',
                },
              ].map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative">
                  <div className="flex text-ts-gold mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic text-sm">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <Image src={review.avatar} alt={review.name} width={40} height={40} className="rounded-full" />
                    <div>
                      <h4 className="font-bold text-ts-navy text-sm">{review.name}</h4>
                      <p className="text-xs text-ts-indigo font-medium">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-8">
              <div className="w-2.5 h-2.5 rounded-full bg-ts-indigo" />
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
