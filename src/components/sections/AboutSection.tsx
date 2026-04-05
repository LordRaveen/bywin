import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const goals = [
  "Sustainable development through farming",
  "Poverty alleviation using locally available resources",
  "Holistic support for orphans and vulnerable children",
  "Empowerment for youth and marginalized women",
]

export default function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-slate-200 overflow-hidden shadow-2xl relative">
              <Image 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop" 
                alt="Our mission in action" 
                fill
                className="object-cover"
              />
            </div>
            {/* Small floating image/card if needed */}
            <div className="absolute -top-6 -right-6 h-28 w-28 rounded-2xl bg-secondary shadow-lg hidden md:block" />
          </div>

          {/* Content side */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">About BYWI</h2>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Driven by a Mission to Restore Hope and Livelihoods
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Brighter Youth and Women Initiative (BYWI) is an indigenous non-governmental organization focused on the socio-economic empowerment of the most vulnerable members of society.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Founded on the principles of sustainability and community-led development, we believe that everyone deserves the chance to build a brighter future. Our work spans from practical agricultural training to vocational skills acquisition and educational support.
            </p>

            <ul className="mt-10 space-y-4">
              {goals.map((goal) => (
                <li key={goal} className="flex items-center gap-3 font-medium text-slate-900">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 w-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden relative">
                    <Image 
                      src={`https://i.pravatar.cc/100?u=${i}`} 
                      alt={`Beneficiary ${i}`} 
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-900">
                Joined by 200+ local partners and volunteers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
