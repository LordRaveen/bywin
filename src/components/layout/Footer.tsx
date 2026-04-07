import Link from "next/link"
import { Globe, Heart, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "./Logo"

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
    <footer className="border-t bg-slate-50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Logo & Desc */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center group">
              <Logo variant="dark" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 font-medium">
              Brighter Youth and Women Initiative — Empowering people. Transforming communities.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
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
                <span>No. 42 Post Office Road Sabon Tasha Kaduna State</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <span>+234 912 536 5885</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <span>info@brighteryouthandwomeninitiative.org</span>
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
