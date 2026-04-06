import Image from 'next/image'
import { Quote } from 'lucide-react'

const stories = [
  {
    name: 'Sarah Akpan',
    role: 'Poultry Farming Graduate',
    content: "BYWI gave me the tools and the training to start my own poultry farm. Now, I can afford to send my children to school and save for the future. It's not just support; it's a new beginning for my entire family.",
    image: '/assets/images/testimonial-1.png'
  },
  {
    name: 'Joseph Okon',
    role: 'Vocational Training Student',
    content: 'I was unemployed for three years until I joined the BYWI vocational training program. Today, I have a steady income and new skills that will last a lifetime. I am proof that with the right support, we can thrive.',
    image: '/assets/images/testimonial-2.png'
  },
  {
    name: 'Mary Udo',
    role: 'Sewing Workshop Beneficiary',
    content: 'The sewing machines provided by BYWI changed my life. I am now the primary breadwinner for my family and a mentor to other women in my village. We are building a future where every woman can be independent.',
    image: '/assets/images/testimonial-3.png'
  }
]

export default function Testimonials() {
  return (
    <section id="stories" className="bg-[#1b5e4c] py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Background Quote Icon */}
      <div className="absolute -top-10 -left-10 text-emerald-800 pointer-events-none opacity-20">
        <Quote className="h-96 w-96 -rotate-12" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Voices of Change</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl uppercase">
            Real <span className="text-secondary">Stories</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-secondary" />
        </div>

        <div className="flex overflow-x-auto gap-8 pb-10 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-12 lg:overflow-visible lg:pb-0 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {stories.map((story) => (
            <div key={story.name} className="flex flex-col bg-emerald-900/30 border border-emerald-800/50 transition-all hover:bg-emerald-900/50 group flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-auto snap-center lg:snap-align-none">
              <div className="p-8 md:p-12 flex-grow h-full flex flex-col">
                <Quote className="h-10 w-10 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                <p className="text-xl leading-relaxed text-emerald-50/80 font-medium italic mb-12">
                  &ldquo;{story.content}&rdquo;
                </p>
                
                <div className="mt-auto flex items-center gap-6 pt-8 border-t border-emerald-800/50">
                  <div className="h-20 w-20 flex-shrink-0 border-4 border-white shadow-xl relative grayscale group-hover:grayscale-0 transition-all duration-500 rounded-none">
                    <Image 
                      src={story.image} 
                      alt={story.name} 
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white uppercase tracking-tight">{story.name}</h4>
                    <p className="text-sm font-bold text-secondary uppercase tracking-widest">{story.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
