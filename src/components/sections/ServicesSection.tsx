import { Utensils, GraduationCap, Droplets, Stethoscope, Shirt, DollarSign } from 'lucide-react'

const services = [
  {
    title: 'Healthy Food',
    description: 'Providing nutritious meals and food security programs for marginalized families and school children.',
    icon: <Utensils className="h-6 w-6" />,
    highlighted: true
  },
  {
    title: 'Education',
    description: 'Supporting formal education and vocational training to empower the next generation of leaders.',
    icon: <GraduationCap className="h-6 w-6" />,
    highlighted: false
  },
  {
    title: 'Pure Water',
    description: 'Installing clean water systems and providing sanitation education to prevent water-borne diseases.',
    icon: <Droplets className="h-6 w-6" />,
    highlighted: false
  },
  {
    title: 'Medical',
    description: 'Offering primary healthcare services and medical outreach to underserved rural communities.',
    icon: <Stethoscope className="h-6 w-6" />,
    highlighted: false
  },
  {
    title: 'Clothes',
    description: 'Distributing clean clothing and basic essentials to those in need during times of crisis and beyond.',
    icon: <Shirt className="h-6 w-6" />,
    highlighted: false
  },
  {
    title: 'Money',
    description: 'Financial literacy training and micro-grants to help individuals start sustainable small businesses.',
    icon: <DollarSign className="h-6 w-6" />,
    highlighted: false
  }
]

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Corner Decorative Dots */}
      <div className="absolute top-10 left-10 opacity-30">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-secondary" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-30">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-secondary" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl font-black text-slate-900 leading-tight">
            Our Work <br />
            in <span className="underline-yellow">Action</span>
          </h2>
          <p className="mt-8 text-lg text-slate-600 font-medium leading-relaxed">
            Across different communities, we continue to implement projects that address real challenges and create meaningful change.
            From training sessions to community outreach programs, our work is focused on delivering practical results that improve lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div 
              key={service.title} 
              className={`p-10 transition-all ${
                service.highlighted 
                ? 'bg-[#1b5e4c] text-white shadow-2xl lg:scale-105' 
                : 'bg-white hover:bg-slate-50 border border-transparent hover:border-slate-100'
              }`}
            >
              <div className={`mb-8 h-12 w-12 flex items-center justify-center p-2 rounded-none ${
                service.highlighted 
                ? 'bg-secondary text-[#1b5e4c]' 
                : 'bg-emerald-50 text-emerald-600'
              }`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-black uppercase tracking-tight mb-4 ${
                service.highlighted ? 'text-white' : 'text-slate-900'
              }`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                service.highlighted ? 'text-emerald-50/70' : 'text-slate-500'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
