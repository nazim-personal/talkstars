import { IMAGES } from './images'

export const SITE = {
  name: 'TalkStars',
  tagline: 'Speak English with Confidence',
  phone: '+91 9153506542',
  phoneRaw: '+919153506542',
  customerCare: '03473-352-198',
  email: 'info@talkstars.in',
  address: 'TalkStars Building, 1st Floor, 1 No. Gobinda Nagar, Madanpur, Nadia, West Bengal 741245',
  facebook: 'https://www.facebook.com/talkstars.official',
  youtube: 'https://www.youtube.com/@talkstars7522',
  coordinates: { lat: 23.007738, lng: 88.492639 },
} as const

export const NAV_LINKS = [
  { label: 'Courses', href: '/courses' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const

export const PROFILE_TYPES = [
  { value: 'student', label: 'Student' },
  { value: 'working', label: 'Working Professional' },
  { value: 'homemaker', label: 'Homemaker' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'other', label: 'Other' },
] as const

export interface Course {
  id: string
  slug: string
  title: string
  description: string
  price: number | 'free' | 'contact'
  duration: string
  classType: 'group' | '1-on-1' | 'batch'
  badge: 'Bestseller' | 'Popular' | 'Advanced' | 'Professional' | 'Free'
  category: 'spoken-english' | 'communication' | 'training'
  imageKey: keyof typeof IMAGES.courses
  icon: string
  certificate: boolean
  features: string[]
}

export const COURSES: Course[] = [
  {
    id: 'basic-spoken-english',
    slug: 'spoken-english',
    title: 'Basic Spoken English',
    description: 'Build a strong foundation in English speaking. Learn everyday vocabulary, correct pronunciation, and gain confidence to speak fluently in real-life situations.',
    price: 299,
    duration: '3 months',
    classType: 'group',
    badge: 'Bestseller',
    category: 'spoken-english',
    imageKey: 'basic',
    icon: 'MessageCircle',
    certificate: true,
    features: [
      'Daily live interactive classes',
      'Vocabulary & pronunciation drills',
      'Real-life conversation practice',
      'Weekly assessment & feedback',
      'Course completion certificate',
    ],
  },
  {
    id: 'individual-classes',
    slug: 'individual-classes',
    title: '1-on-1 Individual Classes',
    description: 'Personalized English coaching tailored to your specific needs. Get undivided attention from expert trainers and accelerate your learning journey.',
    price: 999,
    duration: '3 months',
    classType: '1-on-1',
    badge: 'Popular',
    category: 'spoken-english',
    imageKey: 'individual',
    icon: 'User',
    certificate: true,
    features: [
      'Personalized lesson plans',
      'Flexible scheduling',
      'One-on-one expert guidance',
      'Focus on your weak areas',
      'Accelerated progress tracking',
    ],
  },
  {
    id: 'advanced-english',
    slug: 'advanced-english',
    title: 'Advanced English',
    description: 'Master advanced grammar, idioms, and professional communication. Perfect for those who want to excel in corporate environments and public speaking.',
    price: 499,
    duration: '4 months',
    classType: 'group',
    badge: 'Advanced',
    category: 'spoken-english',
    imageKey: 'advanced',
    icon: 'GraduationCap',
    certificate: true,
    features: [
      'Advanced grammar & syntax',
      'Idioms & phrasal verbs mastery',
      'Business English communication',
      'Public speaking practice',
      'ISO certified certificate',
    ],
  },
  {
    id: 'teachers-training',
    slug: 'teachers-training',
    title: 'Teachers Training Program',
    description: 'Become a certified English trainer. Learn teaching methodologies, classroom management, and modern techniques to teach English effectively.',
    price: 'contact',
    duration: '6 months',
    classType: 'batch',
    badge: 'Professional',
    category: 'training',
    imageKey: 'teachers',
    icon: 'BookOpen',
    certificate: true,
    features: [
      'Teaching methodology training',
      'Classroom management skills',
      'Curriculum development',
      'Practice teaching sessions',
      'Professional certification',
    ],
  },
  {
    id: 'grammar-course',
    slug: 'grammar-mastery',
    title: 'Grammar Mastery',
    description: 'Master English grammar from basics to advanced level. Understand tenses, sentence structures, and write error-free English with confidence.',
    price: 199,
    duration: '2 months',
    classType: 'group',
    badge: 'Popular',
    category: 'spoken-english',
    imageKey: 'grammar',
    icon: 'PenTool',
    certificate: true,
    features: [
      'Complete grammar fundamentals',
      'Tense mastery program',
      'Sentence construction drills',
      'Error correction exercises',
      'Weekly grammar quizzes',
    ],
  },
  {
    id: 'communication-skills',
    slug: 'communication-skills',
    title: 'Communication Skills',
    description: 'Develop powerful communication skills for professional and personal life. Learn presentation skills, email writing, and confident body language.',
    price: 399,
    duration: '3 months',
    classType: 'group',
    badge: 'Popular',
    category: 'communication',
    imageKey: 'communication',
    icon: 'Mic',
    certificate: true,
    features: [
      'Professional presentation skills',
      'Business email writing',
      'Body language & confidence',
      'Group discussion practice',
      'Interview preparation',
    ],
  },
  {
    id: 'personality-development',
    slug: 'personality-development',
    title: 'Personality Development',
    description: 'Transform your personality with our comprehensive program. Build confidence, leadership skills, and a winning attitude for success in life.',
    price: 499,
    duration: '3 months',
    classType: 'group',
    badge: 'Advanced',
    category: 'communication',
    imageKey: 'personality',
    icon: 'Star',
    certificate: true,
    features: [
      'Confidence building exercises',
      'Leadership development',
      'Soft skills training',
      'Social etiquette & grooming',
      'Goal setting & motivation',
    ],
  },
  {
    id: 'interview-preparation',
    slug: 'interview-preparation',
    title: 'Interview Preparation',
    description: 'Crack any interview with our expert-led preparation program. Practice mock interviews, learn body language tips, and ace your dream job interview.',
    price: 'free',
    duration: '1 month',
    classType: 'group',
    badge: 'Free',
    category: 'communication',
    imageKey: 'interview',
    icon: 'Briefcase',
    certificate: false,
    features: [
      'Mock interview sessions',
      'Resume building assistance',
      'Common question preparation',
      'Body language coaching',
      'Feedback & improvement tips',
    ],
  },
  {
    id: 'membership-plan',
    slug: 'membership',
    title: 'TalkStars Membership',
    description: 'Get unlimited access to all TalkStars resources, recorded classes, and community support at an unbeatable price.',
    price: 199,
    duration: 'Monthly',
    classType: 'group',
    badge: 'Popular',
    category: 'spoken-english',
    imageKey: 'membership',
    icon: 'Crown',
    certificate: false,
    features: [
      'Access to all recorded classes',
      'Community support group',
      'Weekly doubt clearing sessions',
      'Study materials & resources',
      'Priority enrollment for new courses',
    ],
  },
]

export const FEATURED_COURSES = COURSES.filter((c) =>
  ['basic-spoken-english', 'individual-classes', 'advanced-english', 'teachers-training'].includes(c.id)
)

export const TRUST_ITEMS = [
  { icon: 'Shield', label: 'ISO 9001:2015 Certified' },
  { icon: 'Users', label: '10,000+ Students' },
  { icon: 'Star', label: '4.8★ Google Rating' },
  { icon: 'Award', label: 'Govt. Registered Certificate' },
  { icon: 'Globe', label: 'Pan-India Online Classes' },
] as const

export const WHY_US = [
  {
    icon: 'Video',
    title: 'Live Interactive Classes',
    description: 'No boring recorded videos. Our expert trainers conduct live classes where you can ask questions, participate in discussions, and get real-time feedback.',
  },
  {
    icon: 'Trophy',
    title: 'ISO Certified Organization',
    description: 'TalkStars is an ISO 9001:2015 certified organization. Our certificates are government-registered and recognized across India.',
  },
  {
    icon: 'IndianRupee',
    title: 'Affordable Pricing',
    description: 'Quality English education starting at just ₹299/month. We believe every Indian deserves access to quality spoken English training.',
  },
  {
    icon: 'Clock',
    title: 'Flexible Timings',
    description: 'Choose from multiple batch timings that suit your schedule. Morning, afternoon, and evening batches available 6 days a week.',
  },
  {
    icon: 'Smartphone',
    title: 'Learn from Anywhere',
    description: 'Join classes from your smartphone, tablet, or PC. No special software needed — classes run on familiar platforms you already use.',
  },
  {
    icon: 'Target',
    title: 'Fluency in 90 Days',
    description: 'Our proven methodology helps you become a confident English speaker in just 90 days. Structured curriculum with daily practice ensures rapid progress.',
  },
] as const

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Book Free Counselling',
    description: 'Speak with our expert counsellors to understand your current level and learning goals.',
    icon: 'Phone',
  },
  {
    step: 2,
    title: 'Choose Your Course',
    description: 'Select the right course based on your level, goals, and budget from our range of programs.',
    icon: 'BookMarked',
  },
  {
    step: 3,
    title: 'Start Learning',
    description: 'Join live interactive classes, practice daily, and get regular feedback from expert trainers.',
    icon: 'Play',
  },
  {
    step: 4,
    title: 'Speak Confidently',
    description: 'Within 90 days, start speaking fluent English with confidence in any situation.',
    icon: 'Sparkles',
  },
] as const

export const TESTIMONIALS = [
  {
    id: 'rahul',
    name: 'Rahul Mondal',
    role: 'B.Tech Student, Kolkata',
    image: IMAGES.testimonials.rahul,
    rating: 5,
    text: 'TalkStars completely transformed my English speaking ability. I was always hesitant to speak in class, but after 3 months of their Basic course, I gave a full presentation in English and everyone was amazed! The teachers are so supportive and patient.',
  },
  {
    id: 'sunita',
    name: 'Sunita Ghosh',
    role: 'Homemaker, Nadia',
    image: IMAGES.testimonials.sunita,
    rating: 5,
    text: 'As a homemaker, I never thought I could learn English at this age. But TalkStars made it possible! The live classes are so interactive, and the teachers explain everything in a way that is easy to understand. Now I can help my children with their English homework!',
  },
  {
    id: 'arjun',
    name: 'Arjun Das',
    role: 'IT Professional, Bangalore',
    image: IMAGES.testimonials.arjun,
    rating: 5,
    text: 'I joined TalkStars Advanced course to improve my business communication. The improvement was dramatic — my manager noticed the change in my presentation skills within a month. Best investment I have made in my career. Highly recommend!',
  },
  {
    id: 'priya',
    name: 'Priya Sharma',
    role: 'Job Seeker, Delhi',
    image: IMAGES.testimonials.priya,
    rating: 5,
    text: 'I was struggling to clear interviews because of my broken English. The 1-on-1 coaching at TalkStars helped me overcome my fear and speak fluently. Within 2 months, I cracked an interview at a top MNC!',
  },
  {
    id: 'amit',
    name: 'Amit Patel',
    role: 'Businessman, Ahmedabad',
    image: IMAGES.testimonials.amit,
    rating: 5,
    text: 'As a business owner, dealing with international clients was tough for me. The Business Communication course taught me how to write professional emails and conduct meetings confidently in English.',
  },
  {
    id: 'sneha',
    name: 'Sneha Roy',
    role: 'Teacher, Pune',
    image: IMAGES.testimonials.sneha,
    rating: 5,
    text: 'The Teachers Training program is fantastic. I learned modern methodologies to teach English effectively. The certification has helped me secure a promotion at my school.',
  },
  {
    id: 'vikram',
    name: 'Vikram Singh',
    role: 'College Student, Chandigarh',
    image: IMAGES.testimonials.vikram,
    rating: 4,
    text: 'TalkStars provides a very friendly environment. The trainers make sure everyone participates in the group discussions. My spoken English and overall personality have improved a lot.',
  },
] as const

export const FAQS = [
  {
    question: 'How much does TalkStars spoken English course cost?',
    answer: 'TalkStars courses start at ₹299/month for the Basic Spoken English course. Membership plans are available from ₹199/month.',
  },
  {
    question: 'How long does it take to speak English fluently with TalkStars?',
    answer: 'Most students become confident English speakers within 90 days of joining the Basic Spoken English course.',
  },
  {
    question: 'Is the TalkStars certificate government recognized?',
    answer: 'Yes. TalkStars is an ISO 9001:2015 certified organization and issues government-registered certificates on course completion.',
  },
  {
    question: 'Can I join TalkStars from my smartphone?',
    answer: 'Yes. TalkStars classes run on any smartphone or PC. No special software is needed.',
  },
  {
    question: 'What languages do TalkStars teachers speak?',
    answer: 'Our teachers are fluent in English, Bengali, and Hindi. They can explain concepts in your preferred language to ensure you understand clearly.',
  },
  {
    question: 'Can I switch between courses?',
    answer: 'Yes! You can upgrade or switch courses at any time. Our counsellors will help you find the perfect fit for your current level and goals.',
  },
] as const

export const FOUNDER = {
  name: 'Aritra Saha',
  title: 'Founder & Lead Trainer',
  image: IMAGES.founder,
  bio: 'With over 8 years of experience in English language training, Aritra Saha founded TalkStars with a mission to make quality spoken English education accessible to every Indian. Having trained 10,000+ students from across India, he believes that the ability to speak English confidently can transform lives and open doors to countless opportunities.',
  credentials: [
    'Certified English Language Trainer',
    'ISO 9001:2015 Certified Organization',
    'B.A. in English Literature',
    '10,000+ Students Trained',
  ],
} as const

export const STATS = [
  { value: 10000, suffix: '+', label: 'Students Trained' },
  { value: 50, suffix: '+', label: 'Expert Trainers' },
  { value: 4.8, suffix: '★', label: 'Google Rating' },
  { value: 90, suffix: '%', label: 'Success Rate' },
] as const

export const FOOTER_LINKS = {
  courses: [
    { label: 'Basic Spoken English', href: '/courses/spoken-english' },
    { label: 'Advanced English', href: '/courses/advanced-english' },
    { label: '1-on-1 Classes', href: '/courses/individual-classes' },
    { label: 'Communication Skills', href: '/courses/communication-skills' },
    { label: 'Teachers Training', href: '/courses/teachers-training' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/contact' },
  ],
  support: [
    { label: 'Free Counselling', href: '/contact' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
} as const
