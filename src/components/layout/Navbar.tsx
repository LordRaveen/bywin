"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "./Logo"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Impact", href: "/impact" },
  { name: "Projects", href: "/projects" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
          isScrolled 
            ? "bg-primary/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10" 
            : "bg-transparent py-8"
        )}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
            <Logo />
          </Link>
  
          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[14px] font-medium transition-colors relative group",
                    isActive ? "text-secondary" : "text-white/90 hover:text-secondary"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-secondary rounded-full transition-all",
                    isActive ? "w-4" : "w-0 group-hover:w-4"
                  )} />
                </Link>
              )
            })}
          </div>
  
          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              asChild
              className="bg-secondary hover:bg-white text-primary font-black rounded-none px-10 h-14 text-sm uppercase tracking-widest shadow-xl transition-all"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
  
          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </nav>
  
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-primary lg:hidden transition-transform duration-500 ease-in-out flex flex-col items-center justify-center",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center gap-6 p-8 w-full max-w-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-2xl font-bold transition-all",
                  isActive ? "text-secondary scale-110" : "text-white hover:text-secondary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                {isActive && <div className="h-1 w-full bg-secondary mt-1 mx-auto" />}
              </Link>
            )
          })}
          <div className="w-full flex flex-col gap-4 mt-8">
            <Button 
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary font-black rounded-none w-full h-16 text-lg tracking-widest uppercase shadow-xl"
            >
              <Link href="/donate" onClick={() => setIsMobileMenuOpen(false)}>Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
