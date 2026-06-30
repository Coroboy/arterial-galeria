'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Obras', href: '/obras' },
  { label: 'Artistas', href: '/#artistas' },
  { label: 'Exposiciones', href: '/#exposiciones' },
  { label: 'Sobre la galería', href: '/#sobre' },
  { label: 'Contacto', href: '/#contacto' },
]

import Image from 'next/image'

function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center', className)}
      aria-label="Arterial Galería, inicio"
    >
      <Image 
        src="/logo.png" 
        alt="Arterial Galería" 
        width={100} 
        height={100} 
        className="h-14 w-auto object-contain"
        priority
      />
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 lg:px-8 relative">
        <Logo className="transition-opacity hover:opacity-80" />

        <nav className="hidden items-center gap-8 lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/obras"
            className="hidden items-center gap-2 rounded-none bg-foreground px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-background transition-all hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Colección
            <ArrowRight className="size-4" />
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Abrir menú"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full gap-0 sm:max-w-sm">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="px-6 pt-6 pb-2">
                <Logo />
              </div>
              <nav
                className="flex flex-col px-6 pt-6"
                aria-label="Navegación móvil"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/60 py-4 font-heading text-2xl text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-6">
                <Link
                  href="/obras"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground"
                >
                  Ver obras disponibles
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
