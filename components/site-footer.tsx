import Image from 'next/image'
import Link from 'next/link'
import { AtSign, Mail, MapPin, Phone } from 'lucide-react'
import { galeria } from '@/lib/data'

const explorar = [
  { label: 'Todas las obras', href: '/obras' },
  { label: 'Pintura', href: '/obras?categoria=Pintura' },
  { label: 'Escultura', href: '/obras?categoria=Escultura' },
  { label: 'Grabado', href: '/obras?categoria=Grabado' },
  { label: 'Fotografía', href: '/obras?categoria=Fotografía' },
]

const galeriaLinks = [
  { label: 'Sobre la galería', href: '/#sobre' },
  { label: 'Artistas', href: '/#artistas' },
  { label: 'Exposiciones', href: '/#exposiciones' },
  { label: 'Cómo comprar', href: '/#proceso' },
  { label: 'Contacto', href: '/#contacto' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Arterial Galería, inicio">
              <Image 
                src="/logo.png" 
                alt="Arterial Galería" 
                width={150} 
                height={150} 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Espacio dedicado a la promoción, exhibición y comercialización de
              arte contemporáneo desde Oaxaca, México.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Explorar
            </h3>
            <ul className="mt-5 space-y-3">
              {explorar.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Galería
            </h3>
            <ul className="mt-5 space-y-3">
              {galeriaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Visítanos
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  {galeria.direccion}
                  <br />
                  {galeria.ciudad}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`tel:${galeria.telefono}`} className="hover:text-primary">
                  {galeria.telefono}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`mailto:${galeria.email}`} className="hover:text-primary">
                  {galeria.email}
                </a>
              </li>
              <li className="flex gap-3">
                <AtSign className="mt-0.5 size-4 shrink-0 text-primary" />
                <a
                  href={`https://instagram.com/${galeria.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  @{galeria.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Arterial Galería. Todos los derechos
            reservados.
          </p>
          <p>{galeria.horario}</p>
        </div>
      </div>
    </footer>
  )
}
