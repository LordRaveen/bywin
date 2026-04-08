import Link from "next/link"
import { Heart, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "./Logo"

const footerLinks = [
  {
    title: "Organization",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Impact", href: "/impact" },
      { name: "Contact", href: "/contact" },
      { name: "Blog & News", href: "/blog" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Our Work",
    links: [
      { name: "Programs", href: "/programs" },
      { name: "Projects", href: "/projects" },
      { name: "Get Involved", href: "/get-involved" },
      { name: "Donate Now", href: "/donate" },
      { name: "FAQ", href: "/faq" },
    ],
  },
]

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    hoverColor: "hover:text-[#1877F2]",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    hoverColor: "hover:text-[#E4405F]",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    hoverColor: "hover:text-[#0A66C2]",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    hoverColor: "hover:text-[#FF0000]",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
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
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`text-slate-400 transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
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
