import Image from 'next/image'

interface PageBannerProps {
  title: string
  subtitle?: string
  imageSrc?: string
}

export function PageBanner({ 
  title, 
  subtitle, 
  imageSrc = 'https://picsum.photos/seed/ts-generic-banner/1600/600' 
}: PageBannerProps) {
  return (
    <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-start overflow-hidden rounded-b-[4rem] md:rounded-b-[8rem]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ts-indigo/90 to-ts-indigo/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white pt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl font-medium max-w-2xl opacity-90">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
