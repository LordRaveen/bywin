import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Decorative Dots Pattern (Left Side) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
        <div className="grid grid-cols-2 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-secondary" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* Content Side (5 columns) */}
          <div className="lg:col-span-5 relative z-10">
            <span className="text-sm font-bold tracking-widest text-[#1b5e4c] uppercase">About us</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.2] md:leading-[1.1]">
              We are building <br />
              lives, <span className="underline-yellow">one opportunity</span> <br />
              at a time
            </h2>
            
            <div className="mt-8 space-y-6 text-slate-600 font-medium text-base md:text-sm leading-relaxed max-w-xl">
              <p>
                At Brighter Youth and Women Initiative, we believe that real change begins when people are given the tools to improve their own lives.
              </p>
              <p>
                From skills acquisition to livelihood support, we work closely with communities to empower women, youth, and the elderly to become financially independent and socially confident.
              </p>
              <p>
                Our approach is simple — we listen, we understand, and we act with purpose.
              </p>
            </div>

            <div className="mt-10">
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary font-black rounded-none h-14 px-10 text-sm shadow-xl w-full sm:w-auto text-center justify-center">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            {/* Decorative Hollow Circle (Below text) */}
            <div className="mt-12 opacity-40">
              <div className="h-6 w-6 rounded-full border-4 border-primary" />
            </div>
            
            {/* Decorative Triangle (Bottom Left) */}
            <div className="mt-20 opacity-30 transform -rotate-12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8d568" strokeWidth="2.5">
                <path d="M3 20L12 4L21 20H3Z" />
              </svg>
            </div>
          </div>

          {/* Overlapping Image Grid (7 columns) */}
          <div className="lg:col-span-7 relative h-[400px] md:h-[500px] lg:h-[600px] mt-16 lg:mt-0">
            {/* Decorative Dots Pattern (Top Left area) */}
            <div className="absolute top-0 left-0 z-0 opacity-40">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-secondary" />
                ))}
              </div>
            </div>

            {/* Main Image (Hut with people) - Centered-ish */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] z-10 shadow-2xl border-[12px] border-white transition-transform hover:scale-105">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image 
                  src="/assets/images/about-community.png" 
                  alt="Community at traditional hut" 
                  width={600}
                  height={450}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Top-Right Image (Planting/Gardening) */}
            <div className="absolute top-0 right-0 w-[45%] aspect-[4/3] z-20 shadow-xl border-8 border-white transition-transform hover:scale-105">
              <div className="h-full w-full bg-slate-100">
                <Image 
                  src="/assets/images/about-farming.png" 
                  alt="Planting seeds" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle-Left Image (Children) */}
            <div className="absolute top-[45%] left-0 w-[40%] aspect-square z-30 shadow-xl border-8 border-white transition-transform hover:scale-105">
              <div className="h-full w-full bg-slate-100">
                <Image 
                  src="/assets/images/about-children.png" 
                  alt="Happy children" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom-Right Image (Volunteer & Student) */}
            <div className="absolute bottom-0 right-[5%] w-[50%] aspect-[4/3] z-40 shadow-xl border-8 border-white transition-transform hover:scale-105">
              <div className="h-full w-full bg-slate-100">
                <Image 
                  src="/assets/images/about-mentorship.png" 
                  alt="Learning and mentorship" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Decorative Dots Pattern (Bottom Right of Hut Image) */}
            <div className="absolute bottom-1/4 right-0 z-50 opacity-80">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-secondary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
