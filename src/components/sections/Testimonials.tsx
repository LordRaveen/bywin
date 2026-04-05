import Image from 'next/image'
import { Quote } from 'lucide-react'

const stories = [
  {
    name: 'Sarah Akpan',
    role: 'Poultry Farming Graduate',
    content: 'BYWI gave me the tools and the training to start my own poultry farm. Now, I can afford to send my children to school and save for the future.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop'
  },
  {
    name: 'Joseph Okon',
    role: 'Vocational Training Student',
    content: 'I was unemployed for three years until I joined the BYWI vocational training program. Today, I have a steady income and new skills that will last a lifetime.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop'
  },
  {
    name: 'Mary Udo',
    role: 'Sewing Workshop Beneficiary',
    content: 'The sewing machines provided by BYWI changed my life. I am now the primary breadwinner for my family and a mentor to other women in my village.',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=2574&auto=format&fit=crop'
  }
]

export default function Testimonials() {
  return (
    <section id="stories" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Real Stories</h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Hear from the Lives We&apos;ve Touched</h3>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <div key={story.name} className="flex flex-col justify-between rounded-3xl bg-slate-50 p-8 shadow-sm transition-all hover:bg-white hover:shadow-xl">
              <div>
                <Quote className="h-10 w-10 text-primary opacity-20" />
                <p className="mt-4 text-lg leading-relaxed text-slate-600 font-medium">
                  &ldquo;{story.content}&rdquo;
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-200 relative">
                  <Image 
                    src={story.image} 
                    alt={story.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{story.name}</h4>
                  <p className="text-xs text-slate-500">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
