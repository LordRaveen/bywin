import { Users, BookOpen, MapPin, Heart } from 'lucide-react'

const stats = [
  {
    label: 'Women Empowered',
    value: '5,000+',
    icon: <Users className="h-8 w-8" />,
    description: 'Providing women and youth with tools for financial independence.'
  },
  {
    label: 'Communities',
    value: '20+',
    icon: <MapPin className="h-8 w-8" />,
    description: 'Directly reaching diverse communities across Kaduna State.'
  },
  {
    label: 'Projects',
    value: '12+',
    icon: <Heart className="h-8 w-8" />,
    description: 'Successful vocational and empowerment projects completed.'
  },
  {
    label: 'Skills Training',
    value: '2,500+',
    icon: <BookOpen className="h-8 w-8" />,
    description: 'Youth and vulnerable persons trained in vocational skills.'
  },
]

export default function ImpactStats() {
  return (
    <section className="bg-[#1b5e4c] py-24 sm:py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
        <Heart className="h-96 w-96 text-white rotate-12" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Impact</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            Our Impact <span className="text-secondary">So Far</span>
          </h2>
          <p className="mt-4 text-base md:text-sm text-emerald-50/70 max-w-2xl">
            Every number represents a life changed and a future restored.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px bg-emerald-800/30 sm:grid-cols-2 lg:grid-cols-4 border border-emerald-800/30">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-emerald-900/40 p-12 transition-all hover:bg-emerald-800/50 group">
              <div className="text-secondary mb-8 transition-transform group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-white tracking-tighter">{stat.value}</span>
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">{stat.label}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-emerald-50/50">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
