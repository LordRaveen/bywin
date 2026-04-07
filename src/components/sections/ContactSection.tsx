import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info Column */}
          <div className="flex flex-col justify-center">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Finishing Strong</span>
            <h2 className="mt-6 text-4xl lg:text-6xl font-black tracking-tight text-slate-900 uppercase">
              Your Support <br />
              Can <span className="text-primary italic">Change a Life</span>
            </h2>
            <p className="mt-8 text-xl text-slate-600 font-medium leading-relaxed max-w-lg">
              With your support, we can expand our reach, empower more individuals, and build stronger communities. Every contribution — big or small — makes a difference.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 bg-white shadow-xl flex items-center justify-center p-4 border border-slate-100 rounded-none">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Us</p>
                  <p className="text-lg font-black text-slate-900">hello@brighteryouthandwomeninitiative.org</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 bg-white shadow-xl flex items-center justify-center p-4 border border-slate-100 rounded-none">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Call Us</p>
                  <p className="text-lg font-black text-slate-900">+234 912 536 5885</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="h-14 w-14 bg-white shadow-xl flex items-center justify-center p-4 border border-slate-100 rounded-none">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Visit Us</p>
                  <p className="text-lg font-black text-slate-900">No. 42 Post Office Road Sabon Tasha Kaduna State</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-12 shadow-2xl relative rounded-none">
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-secondary" />
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none px-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all rounded-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border-none px-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all rounded-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Inquiry Type</label>
                <select className="w-full bg-slate-50 border-none px-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all rounded-none">
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Donation Question</option>
                  <option>Volunteer Interest</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                <textarea rows={6} className="w-full bg-slate-50 border-none px-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all resize-none rounded-none" placeholder="Tell us how we can help..."></textarea>
              </div>
              <Button className="w-full bg-primary hover:bg-[#1b5e4c] text-white font-black h-16 uppercase tracking-[0.2em] rounded-none group">
                Send Message
                <Send className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
