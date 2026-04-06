import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Decorative Dots - Left */}
      <div className="absolute top-40 left-8 z-20 hidden xl:block">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-secondary/80" />
          ))}
        </div>
      </div>

      {/* Decorative Hollow Circle - Bottom Left */}
      <div className="absolute bottom-40 left-20 z-10 opacity-40 hidden lg:block">
        <div className="h-4 w-4 rounded-full border-2 border-secondary" />
      </div>

      {/* Decorative Triangle - Left Center */}
      <div className="absolute top-1/2 left-4 z-10 opacity-60 hidden lg:block">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f8d568" strokeWidth="2.5" className="rotate-[15deg]">
          <path d="M3 20L12 4L21 20H3Z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content Left */}
          <div className="max-w-xl text-left">
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl leading-[1.1]">
              Charity is <br />
              an <span className="underline-yellow">Act of</span> <br />
              A Soft Heart!
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-white/70 font-medium max-w-md">
              Join us in our mission to build brighter futures for women and youth through sustainable community-led initiatives in agriculture and vocational training.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-10">
              <Button 
                asChild 
                size="lg" 
                className="h-16 rounded-none px-10 text-lg bg-secondary hover:bg-secondary/90 text-primary font-black shadow-xl transition-all hover:-translate-y-1"
              >
                <Link href="/get-involved">Join our mission</Link>
              </Button>
              <button className="flex items-center gap-3 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-none border-2 border-white/20 text-white group-hover:bg-white/10 transition-all">
                  <Play className="h-4 w-4 fill-current ml-1" />
                </div>
                <span className="text-lg font-bold text-white group-hover:text-secondary transition-colors">Learn more</span>
              </button>
            </div>
          </div>

          {/* Visual Piece - Circular Motif Right */}
          <div className="relative mx-auto lg:ml-auto lg:mr-0 group">
            <div className="relative h-[400px] w-[400px] sm:h-[520px] sm:w-[520px]">
              {/* Outer Decorative Circle/Shadow */}
              <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10 scale-105" />
              <div className="absolute -inset-10 rounded-full border-[20px] border-white/5 opacity-50 blur-sm" />

              {/* Main Image Circle */}
              <div className="absolute inset-0 rounded-full border-[12px] border-white/10 overflow-hidden shadow-2xl z-10">
                <Image 
                  src="/assets/images/volunteers-charity.png" 
                  alt="Our dedicated volunteers" 
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

              {/* Decorative Dots - Bottom Right of Image */}
              <div className="absolute -bottom-6 -right-6 z-20 hidden md:block">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="h-1 w-1 rounded-full bg-secondary" />
                  ))}
                </div>
              </div>

              {/* Floating Triangle - Top Right of Image */}
              <div className="absolute -top-10 -right-4 z-20 opacity-80 hidden md:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8d568" strokeWidth="2.5" className="rotate-[-15deg]">
                  <path d="M3 20L12 4L21 20H3Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
