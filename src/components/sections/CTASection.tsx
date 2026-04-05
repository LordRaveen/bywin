import Link from "next/link"
import { Heart, HandHeart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
      {/* Decorative patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            You Can Change a <span className="text-secondary">Life</span> Today
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/80 leading-relaxed">
            Your support provides the training, tools, and hope necessary for women and youth to break free from poverty. Choose how you want to help!
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1: Donate */}
          <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-xl transition-all hover:-translate-y-2">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Make a Donation</h3>
            <p className="mt-4 text-slate-600">Your financial gifts go directly to supporting our empowerment programs.</p>
            <Button asChild size="lg" className="mt-8 h-12 w-full rounded-full bg-primary hover:bg-accent text-white">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Card 2: Volunteer */}
          <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-xl transition-all hover:-translate-y-2 scale-105 border-2 border-secondary overflow-hidden">
            <div className="absolute top-0 right-0 bg-secondary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Popular</div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Become a Volunteer</h3>
            <p className="mt-4 text-slate-600">Lend your skills and time to help us train the next generation of beneficiaries.</p>
            <Button asChild size="lg" className="mt-8 h-12 w-full rounded-full bg-secondary hover:bg-amber-600 text-white">
              <Link href="/get-involved">Start Volunteering</Link>
            </Button>
          </div>

          {/* Card 3: Partner */}
          <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-xl transition-all hover:-translate-y-2">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <HandHeart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Partner With Us</h3>
            <p className="mt-4 text-slate-600">Join our growing network of organizations making a community-level impact.</p>
            <Button asChild variant="outline" size="lg" className="mt-8 h-12 w-full rounded-full border-primary text-primary hover:bg-primary/5">
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
