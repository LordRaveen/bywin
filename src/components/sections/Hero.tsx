import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <Heart className="h-4 w-4" />
              <span>Building Brighter Futures</span>
            </div>
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Empowering <span className="text-primary">Women</span> and <span className="text-secondary">Youth</span> for a Better Tomorrow
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-600 max-w-xl">
              Brighter Youth and Women Initiative (BYWI) is dedicated to breaking the cycle of poverty through skills acquisition, sustainable agriculture, and community empowerment.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-full px-8 text-base bg-primary hover:bg-accent text-white">
                <Link href="/get-involved" className="flex items-center gap-2">
                  Join Our Mission
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-full px-8 text-base border-primary text-primary hover:bg-primary/5">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Visual Piece */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-slate-200 overflow-hidden shadow-2xl">
              {/* This would be a real image of beneficiaries */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop" 
                  alt="Women working in community project" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* Floating Trust Card */}
            <div className="absolute -bottom-8 -left-8 rounded-2xl bg-white p-6 shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl">
                  300+
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Women Trained</p>
                  <p className="text-xs text-slate-500">In sustainable farming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
