import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-12 pb-16 md:pt-20 md:pb-24 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-5 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-primary"></span>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
              Oaxaca · México
            </p>
          </div>
          <h1 className="mt-8 text-balance font-sans text-5xl font-light leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
            Arte contemporáneo con <span className="font-heading italic text-primary font-medium">raíz</span> y <span className="font-heading italic text-primary font-medium">horizonte</span>
          </h1>
          <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-muted-foreground font-light border-l border-primary/30 pl-4">
            En Arterial somos un espacio, donde convergen los artistas contemporáneos de #Oaxaca, a través de obras que están disponibles a la venta.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/obras"
              className="group inline-flex items-center gap-3 rounded-none bg-primary px-8 py-4 text-xs tracking-widest uppercase font-medium text-primary-foreground transition-all hover:bg-foreground hover:text-background"
            >
              Explorar Colección
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#artistas"
              className="inline-flex items-center gap-2 border-b border-border pb-1 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Conocer artistas
            </Link>
          </div>

          <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 pt-8 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-border to-transparent"></div>
            <div>
              <dt className="font-heading text-4xl italic text-foreground">12+</dt>
              <dd className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                Años
              </dd>
            </div>
            <div>
              <dt className="font-heading text-4xl italic text-foreground">40</dt>
              <dd className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                Artistas
              </dd>
            </div>
            <div>
              <dt className="font-heading text-4xl italic text-foreground">600</dt>
              <dd className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                Obras
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7 mt-12 lg:mt-0 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both">
          <div className="relative max-w-2xl mx-auto lg:ml-auto">
            {/* Marco decorativo desfasado */}
            <div className="absolute -inset-4 sm:-inset-6 border border-primary/20 translate-x-2 translate-y-4"></div>
            <div className="absolute -inset-4 sm:-inset-6 border border-border -translate-x-2 -translate-y-4"></div>
            
            <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden bg-muted group">
              <Image
                src="/artworks/hero-featured.png"
                alt="Pintura abstracta contemporánea en tonos terracota e índigo expuesta en la galería"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-[20s] ease-out group-hover:scale-110"
              />
              {/* Overlay oscuro sutil */}
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            </div>
            
            <div className="absolute -bottom-10 right-4 sm:-bottom-8 sm:-right-8 w-56 border-t border-l border-primary bg-background p-5 shadow-2xl">
              <p className="font-heading text-xl italic leading-tight text-foreground">
                Valle al anochecer
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                Elena Márquez
              </p>
              <p className="mt-1 text-xs font-medium text-primary">
                Óleo sobre tela · 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
