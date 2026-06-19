import type { Metadata } from 'next'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'
import { Rss } from 'lucide-react'

import { PageBanner } from '@/components/shared/PageBanner'

export const metadata: Metadata = {
  title: 'Blog — English Learning Tips & Guides',
  description:
    'Read the latest articles, tips, and guides on spoken English, grammar, communication skills, and more from TalkStars experts.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
  },
}

const upcomingPosts = [
  {
    title: '10 Simple Tips to Improve Your English Speaking Skills',
    excerpt: 'Practical, everyday tips that any beginner can start using today to build confidence in English conversation.',
    image: 'https://picsum.photos/seed/ts-blog-1/600/400',
    category: 'Speaking Tips',
    date: 'Coming Soon',
  },
  {
    title: 'Common English Grammar Mistakes Indians Make',
    excerpt: 'We break down the most frequent grammar errors and show you the correct way — with examples in Hindi and Bengali.',
    image: 'https://picsum.photos/seed/ts-blog-2/600/400',
    category: 'Grammar',
    date: 'Coming Soon',
  },
  {
    title: 'How to Prepare for an English Interview',
    excerpt: 'A complete guide to cracking English interviews — from common questions to body language tips.',
    image: 'https://picsum.photos/seed/ts-blog-3/600/400',
    category: 'Career',
    date: 'Coming Soon',
  },
]

export default function BlogPage() {
  return (
    <>
      <PageBanner 
        title="Learn & Grow with TalkStars"
        subtitle="Expert tips, guides, and insights to help you on your English learning journey."
      />
      <div className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-br from-ts-indigo/5 to-ts-sky/5 border border-ts-lightgray rounded-2xl p-8 md:p-12 text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-ts-indigo/10 text-ts-indigo flex items-center justify-center mx-auto mb-4">
            <Rss className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-ts-navy mb-3">
            Blog Coming Soon!
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            We&apos;re working on amazing content to help you improve your English skills. Stay tuned for articles on grammar, speaking tips, interview preparation, and more.
          </p>
        </div>

        {/* Preview Cards */}
        <h3 className="text-xl font-bold text-ts-navy mb-6">Upcoming Articles</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingPosts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden opacity-80"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-ts-indigo text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-ts-gold font-semibold mb-2">{post.date}</p>
                <h4 className="text-base font-bold text-ts-navy mb-2 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  )
}
