import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { obras } from '@/lib/data'
import { ObraCard } from '@/components/obra-card'
import { cn } from '@/lib/utils'

export function Destacadas() {
  const destacadas = obras.filter((o) => o.destacada).slice(0, 6)

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Selección
          </p>
          <h2 className="mt-4 text-balance font-sans text-4xl font-light leading-tight text-foreground lg:text-5xl">
            Obras <span className="font-heading italic text-primary font-medium">destacadas</span>
          </h2>
          <p className="mt-6 text-pretty text-muted-foreground font-light border-l border-primary/30 pl-4">
            Una muestra rotativa de las piezas más significativas de nuestra
            colección actual.
          </p>
        </div>
        <Link
          href="/obras"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground"
        >
          Ver todo el catálogo
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {destacadas.map((obra, i) => (
          <div 
            key={obra.id} 
            className={cn(
              "animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both",
              i % 3 === 1 ? "lg:mt-16" : i % 3 === 2 ? "lg:mt-32" : "",
              `delay-[${i * 100}ms]`
            )}
          >
            <ObraCard obra={obra} priority={i < 3} />
          </div>
        ))}
      </div>
    </section>
  )
}
