import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Bird, Fish, Scissors } from 'lucide-react'
import { Button } from '@/components/ui/button'

const programs = [
  {
    id: '01',
    title: 'Poultry Farming Training',
    description: 'We train women and youth in poultry farming, providing them with the knowledge and resources to start and sustain their own businesses.',
    icon: <Bird className="h-6 w-6" />,
    image: '/assets/images/program-poultry.png',
    color: 'text-amber-500'
  },
  {
    id: '02',
    title: 'Fish Farming Empowerment',
    description: 'Our fish farming program equips beneficiaries with modern techniques and support to create reliable sources of income.',
    icon: <Fish className="h-6 w-6" />,
    image: '/assets/images/program-fish-farming.png',
    color: 'text-sky-500'
  },
  {
    id: '03',
    title: 'Skills Acquisition',
    description: 'We provide hands-on training in sewing and other vocational skills, helping individuals develop sustainable livelihoods.',
    icon: <Scissors className="h-6 w-6" />,
    image: '/assets/images/program-sewing.png',
    color: 'text-lime-500'
  }
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4">
          <span className="text-sm font-bold tracking-widest text-[#1b5e4c] uppercase">Empowerment</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase leading-tight">
              What <br />
              We Do
            </h2>
            <div className="max-w-md">
              <p className="text-base md:text-sm text-slate-600 font-medium leading-relaxed">
                We provide practical, life-changing support through targeted programs designed to meet real needs in our communities.
              </p>
              <Link 
                href="/programs" 
                className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#1b5e4c] hover:text-secondary group transition-colors"
              >
                View all interventions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
          {programs.map((program) => (
            <div key={program.title} className="group relative bg-white border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="aspect-[7/5] overflow-hidden relative">
                <Image 
                  src={program.image} 
                  alt={program.title} 
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Number Overlay */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="text-6xl font-black text-transparent opacity-80" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
                    {program.id}
                  </span>
                </div>

                {/* Corner Decorative Accent */}
                <div className="absolute bottom-0 right-0 h-16 w-16 bg-white flex items-center justify-center translate-x-4 translate-y-4 rotate-45 group-hover:bg-white transition-colors" />
                <div className="absolute bottom-0 right-0 h-8 w-8 bg-white z-10 flex items-center justify-center p-1">
                  <div className={program.color}>
                    {program.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-black tracking-tight text-slate-900 leading-tight">
                  {program.title}
                </h3>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                  {program.description}
                </p>
                
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button asChild variant="ghost" className="h-auto p-0 font-black text-[10px] uppercase tracking-[0.25em] text-slate-900/60 group-hover:text-[#1b5e4c] transition-colors">
                    <Link href="/programs" className="flex items-center gap-4">
                      Explore Details
                      <div className="h-8 w-8 flex items-center justify-center border border-slate-300 group-hover:border-[#1b5e4c] group-hover:bg-[#1b5e4c] group-hover:text-white transition-all">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
