import { Zap, Shield, Bird, TreePine, Hexagon, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const partners = [
  { name: "TreeFrh", icon: <TreePine className="h-6 w-6 text-green-600" />, color: "text-green-600" },
  { name: "KeddarN", icon: <Hexagon className="h-6 w-6 text-blue-600" />, color: "text-blue-600" },
  { name: "breakHt", icon: <Zap className="h-6 w-6 text-lime-500" />, color: "text-lime-500" },
  { name: "ShieldT", icon: <Shield className="h-6 w-6 text-amber-500" />, color: "text-amber-500" },
  { name: "Tandov", icon: <Globe className="h-6 w-6 text-sky-600" />, color: "text-sky-600" },
  { name: "Birdseye", icon: <Bird className="h-6 w-6 text-cyan-500" />, color: "text-cyan-500" },
]

export default function PartnerLogos() {
  return (
    <section className="relative z-30 -mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-none bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
          <p className="text-center text-sm font-bold text-slate-500 mb-10 tracking-wide uppercase">
            Working with communities across <span className="text-primary font-black">Kaduna State</span> and beyond to create lasting impact.
          </p>
          
          <div className="relative overflow-hidden">
            {/* Seamless Marquee Container */}
            <div className="flex w-max animate-marquee items-center gap-20 pr-20 py-4 group">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex items-center gap-4 group cursor-pointer transition-all hover:scale-105 opacity-60 grayscale hover:grayscale-0 hover:opacity-100">
                  <div className={cn("p-2 rounded-none bg-slate-50 transition-colors group-hover:bg-white bg-transparent", partner.color)}>
                    {partner.icon}
                  </div>
                  <span className="text-xl font-black uppercase tracking-widest text-slate-900 whitespace-nowrap">{partner.name}</span>
                </div>
              ))}
            </div>

            {/* Fading Edge Overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
