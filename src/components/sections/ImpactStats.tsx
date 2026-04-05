import { Users, BookOpen, MapPin, Heart } from 'lucide-react'

const stats = [
  {
    label: 'Women Empowered',
    value: '300+',
    icon: <Users className="h-6 w-6" />,
    color: 'bg-primary/10 text-primary'
  },
  {
    label: 'Youth Trained',
    value: '150+',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'bg-secondary/10 text-secondary'
  },
  {
    label: 'Communities',
    value: '10+',
    icon: <MapPin className="h-6 w-6" />,
    color: 'bg-accent/10 text-accent'
  },
  {
    label: 'Lives Impacted',
    value: '5K+',
    icon: <Heart className="h-6 w-6" />,
    color: 'bg-primary/10 text-primary'
  },
]

export default function ImpactStats() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Growing Impact</h2>
          <p className="mt-4 text-lg text-slate-600">Making a real difference in the lives of women and youth every day.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="relative overflow-hidden rounded-2xl border p-8 transition-all hover:border-primary/20 hover:shadow-lg">
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg ${stat.color}`}>
                {stat.icon}
              </div>
              <p className="text-4xl font-extrabold text-slate-900">{stat.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
