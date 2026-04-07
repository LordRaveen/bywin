"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "./Logo"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Explore NGOs", href: "#programs" },
  { name: "Are You a Volunteer?", href: "#join" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
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
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[15px] font-medium text-white/90 hover:text-secondary transition-colors relative group",
                link.name === "Home" && "text-secondary"
              )}
            >
              {link.name}
              {link.name === "Home" && (
                <span className="absolute -bottom-1 left-0 w-4 h-0.5 bg-secondary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            asChild
            className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-none px-8 h-12 shadow-lg shadow-black/10"
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-primary lg:hidden transition-transform duration-500 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8 relative">
          <button 
            className="absolute top-8 right-8 text-white" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white hover:text-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-primary font-bold rounded-xl w-full max-w-xs h-14"
          >
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
