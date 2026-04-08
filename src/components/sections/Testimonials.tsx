"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const stories = [
  {
    name: 'Sarah Akpan',
    role: 'Poultry Farming Graduate',
    content: "BYWIN gave me the tools and the training to start my own poultry farm. Now, I can afford to send my children to school and save for the future. It's not just support; it's a new beginning for my entire family.",
    image: '/assets/images/testimonial-1.png'
  },
  {
    name: 'Joseph Okon',
    role: 'Vocational Training Student',
    content: 'I was unemployed for three years until I joined the BYWIN vocational training program. Today, I have a steady income and new skills that will last a lifetime. I am proof that with the right support, we can thrive.',
    image: '/assets/images/testimonial-2.png'
  },
  {
    name: 'Mary Udo',
    role: 'Sewing Workshop Beneficiary',
    content: 'The sewing machines provided by BYWIN changed my life. I am now the primary breadwinner for my family and a mentor to other women in my village. We are building a future where every woman can be independent.',
    image: '/assets/images/testimonial-3.png'
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % stories.length)
  }, [])

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(timer)
  }, [next])

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth
      scrollRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'smooth'
      })
    }
  }, [activeIndex])

  return (
    <section id="stories" className="bg-[#1b5e4c] py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Background Quote Icon */}
      <div className="absolute -top-10 -left-10 text-emerald-800 pointer-events-none opacity-20">
        <Quote className="h-96 w-96 -rotate-12" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Stories / Human Angle</span>
          <h2 className="mt-4 text-3xl md:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase leading-tight">
            Real People. <span className="text-secondary">Real Change.</span>
          </h2>
          <p className="mt-6 text-base md:text-sm text-emerald-50/70 leading-relaxed font-medium">
            Behind every program is a story of resilience, growth, and transformation.
            We have seen women start businesses, young people gain confidence, and families experience new opportunities.
          </p>
          <div className="mt-4 h-1 w-20 bg-secondary" />
        </div>

        <div className="relative group">
          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-hidden pb-12 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {stories.map((story, index) => (
              <div 
                key={story.name} 
                className="w-full flex-shrink-0 px-2 sm:px-10 snap-center"
              >
                <div className="flex flex-col bg-emerald-900/30 border border-emerald-800/50 p-8 md:p-16 transition-all group/card hover:bg-emerald-900/50 max-w-5xl mx-auto items-center text-center">
                  <Quote className="h-10 w-10 text-secondary mb-10 group-hover/card:scale-110 transition-transform" />
                  <p className="text-xl md:text-lg leading-relaxed text-emerald-50/90 font-medium italic mb-4 max-w-4xl">
                    &ldquo;{story.content}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-6 pt-4 border-t border-emerald-800/50 w-full justify-center">
                    <div className="h-20 w-20 flex-shrink-0 border-4 border-white shadow-xl relative grayscale group-hover/card:grayscale-0 transition-all duration-500 rounded-none">
                      <Image 
                        src={story.image} 
                        alt={story.name} 
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-black text-white uppercase tracking-tight">{story.name}</h4>
                      <p className="text-sm font-bold text-secondary uppercase tracking-widest">{story.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators / Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2 transition-all duration-300 rounded-full",
                  activeIndex === index ? "w-10 bg-secondary" : "w-2 bg-emerald-800 hover:bg-emerald-700"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Nav Arrows (Hidden on mobile) */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-14 w-14 bg-emerald-900/50 text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-14 w-14 bg-emerald-900/50 text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}
