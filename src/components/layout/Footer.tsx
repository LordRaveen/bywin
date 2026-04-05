import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Heart, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Programs", href: "/programs" },
      { name: "Recent Projects", href: "/projects" },
      { name: "Donate Now", href: "/donate" },
      { name: "Get Involved", href: "/get-involved" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer-bg-slate-50 border-t bg-slate-50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Logo & Desc */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                <Heart className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-primary">BYWI</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Brighter Youth and Women Initiative (BYWI) is dedicated to empowering marginalized communities through sustainable livelihoods and holistic support.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Nav Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <span>12 Mission Road, Central District, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <span>+234 812 345 6789</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <span>info@bywi.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t pt-8">
          <p className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Brighter Youth and Women Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
