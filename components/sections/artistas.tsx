import Image from 'next/image'
import Link from 'next/link'
import { artistas } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Artistas() {
  return (
    <section id="artistas" className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Quiénes crean
          </p>
          <h2 className="mt-4 text-balance font-sans text-4xl font-light leading-tight text-foreground lg:text-5xl">
            Artistas <span className="font-heading italic text-primary font-medium">representados</span>
          </h2>
          <p className="mt-6 text-pretty text-muted-foreground font-light border-l border-primary/30 pl-4">
            Trabajamos de cerca con creadores de distintas generaciones y
            disciplinas, unidos por una mirada honesta y un oficio riguroso.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {artistas.map((artista, i) => (
            <Link 
              href={`/obras?artista=${artista.id}`}
              key={artista.id} 
              className={cn(
                "group flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both relative cursor-pointer",
                i % 2 === 1 ? "lg:mt-12" : "",
                `delay-[${i * 150}ms]`
              )}
            >
              <article className="flex flex-col h-full">
                <div className="relative mb-6">
                  {/* Passepartout Offset Background */}
                  <div className="absolute -inset-3 bg-secondary/80 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                  <div className="absolute -inset-3 border border-border -translate-x-2 -translate-y-2 transition-transform duration-500 group-hover:-translate-x-3 group-hover:-translate-y-3"></div>
                  
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={artista.imagen || '/placeholder.svg'}
                      alt={`Retrato de ${artista.nombre}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
                <h3 className="mt-4 font-heading text-2xl leading-tight text-foreground transition-colors group-hover:text-primary">
                  {artista.nombre}
                </h3>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-primary">
                  {artista.especialidad}
                </p>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground font-light">
                  {artista.descripcion}
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2">
                  <span className="h-px w-4 bg-primary/40 transition-all duration-300 group-hover:w-8 group-hover:bg-primary"></span>
                  <p className="text-xs text-muted-foreground/80 font-mono tracking-widest uppercase transition-colors group-hover:text-primary">
                    Ver Obras
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
