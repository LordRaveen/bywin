import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-white py-12 lg:py-0">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Photo Column */}
          <div className="relative h-[400px] lg:h-auto group bg-slate-100">
            <Image 
              src="/assets/images/volunteers-charity.png" 
              alt="Changing lives together" 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110 rounded-none"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e4c]/60 to-transparent lg:hidden" />
          </div>

          {/* Content Column */}
          <div className="bg-[#1b5e4c] flex flex-col justify-center p-12 lg:p-24 relative overflow-hidden">
            {/* Subtle Decorative Heart */}
            <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
              <Heart className="h-96 w-96 text-white rotate-12" />
            </div>

            <div className="relative z-10 max-w-xl">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Be Part of the Change</span>
              <h2 className="mt-6 text-xl md:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase leading-[1.1] lg:leading-none">
                Creating Lasting <br />
                <span className="text-secondary">Impact</span> Together
              </h2>
              <p className="mt-8 text-sm md:text-lg text-emerald-50/80 leading-relaxed max-w-md font-medium">
                Creating lasting impact requires collective effort. You can support our mission in several ways: Partner with us, Volunteer your time, or Support our programs through donations.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-[#1b5e4c] font-black rounded-none h-16 px-12 text-lg uppercase tracking-widest shadow-xl group w-full sm:w-auto text-center justify-center">
                  <Link href="/donate" className="flex items-center gap-3">
                    Donate
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#1b5e4c] font-black rounded-none h-16 px-12 text-lg uppercase tracking-widest transition-all w-full sm:w-auto text-center justify-center">
                  <Link href="/get-involved" className="flex items-center gap-3">
                    Volunteer
                    <Users className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Stats/Badge */}
              <div className="mt-16 pt-8 border-t border-emerald-800/50 flex items-center gap-8">
                <div>
                  <p className="text-4xl font-black text-white">5K+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#f8d568]">Lives Impacted</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">100%</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Goes to the field</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
