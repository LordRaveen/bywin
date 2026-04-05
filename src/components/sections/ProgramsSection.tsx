import Link from 'next/link'
import { ArrowRight, Bird, Fish, Scissors } from 'lucide-react'
import { Button } from '@/components/ui/button'

const programs = [
  {
    title: 'Poultry Farming Training',
    description: 'Providing sustainable livelihoods through poultry management training and initial chick supply to marginalized women.',
    icon: <Bird className="h-10 w-10" />,
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2673&auto=format&fit=crop',
    color: 'bg-primary'
  },
  {
    title: 'Sustainable Fish Farming',
    description: 'Teaching modern aquaculture techniques to youth, ensuring food security and consistent income generations.',
    icon: <Fish className="h-10 w-10" />,
    image: 'https://images.unsplash.com/photo-1524704685771-3181d83ebb92?q=80&w=2669&auto=format&fit=crop',
    color: 'bg-secondary'
  },
  {
    title: 'Sewing & Skills Acquisition',
    description: 'Equipping women with professional tailoring skills and vocational training to build their own businesses.',
    icon: <Scissors className="h-10 w-10" />,
    image: 'https://images.unsplash.com/photo-1550584552-46346893a216?q=80&w=2674&auto=format&fit=crop',
    color: 'bg-accent'
  }
]

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Empowerment Programs</h2>
            <p className="mt-4 text-lg text-slate-600">We don&apos;t just give hand-outs; we give hand-ups. Our programs are designed for long-term sustainability and independence.</p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div key={program.title} className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all hover:-translate-y-2">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${program.color} text-white shadow-lg`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{program.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {program.description}
                </p>
                <Link 
                  href={`/programs/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-6 flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
