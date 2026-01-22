"use client"

import { cn } from "@/lib/utils"
import { Menu, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contacto", label: "Contácto" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isRoot = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isScrolled = scrollY > 64

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300 z-999 py-2",
        isRoot ? (isScrolled ? "bg-black" : "bg-transparent") : "bg-black"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4 md:gap-16">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo-white.svg"
              alt="Zebra"
              width={100}
              height={40}
              className="w-14 h-auto md:w-auto md:h-auto"
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-16">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg uppercase transition-colors hover:text-white",
                    isActive ? "text-white font-medium" : "text-white/70 font-light"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <button type="button">
              <Search className="w-6 h-6 text-white" />
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button type="button" className="p-2 flex items-center justify-center">
              <Search className="w-6 h-6 text-white" />
            </button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="text-white p-2 flex items-center justify-center"
                  aria-label="Abrir menú"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[80vw] sm:w-[300px] bg-black border-white/20 flex flex-col"
              >
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <nav className="flex flex-col items-center justify-center gap-6 flex-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "text-2xl uppercase transition-colors py-2",
                          isActive ? "text-white font-medium" : "text-white/70 font-light"
                        )}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
