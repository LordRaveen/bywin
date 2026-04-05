'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Impact', href: '/impact' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <Heart className="h-6 w-6" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl font-bold tracking-tight text-primary">BYWI</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-secondary">Brighter Youth & Women</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-accent text-white rounded-full px-6">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn("lg:hidden", isOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-3 pt-2 sm:px-3 border-t bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-primary/5 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 px-3 pb-4">
            <Button asChild className="w-full bg-primary hover:bg-accent text-white rounded-full">
              <Link href="/donate" onClick={() => setIsOpen(false)}>
                Donate Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
