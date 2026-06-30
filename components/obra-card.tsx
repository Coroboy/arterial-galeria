import Image from 'next/image'
import Link from 'next/link'
import { formatPrecio, getArtista, type Obra } from '@/lib/data'
import { cn } from '@/lib/utils'

function DisponibilidadTag({ obra }: { obra: Obra }) {
  if (obra.disponibilidad === 'Vendida') {
    return (
      <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-primary-foreground backdrop-blur">
        Vendida
      </span>
    )
  }
  if (obra.disponibilidad === 'Bajo cotización') {
    return (
      <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-foreground backdrop-blur">
        Bajo cotización
      </span>
    )
  }
  return null
}

export function ObraCard({
  obra,
  className,
  priority = false,
}: {
  obra: Obra
  className?: string
  priority?: boolean
}) {
  const artista = getArtista(obra.artistaId)

  return (
    <Link
      href={`/obras/${obra.id}`}
      className={cn(
        'group flex flex-col focus:outline-none',
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
        <Image
          src={obra.imagen || '/placeholder.svg'}
          alt={`${obra.titulo}, ${obra.tecnica}, por ${artista?.nombre ?? ''}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className={cn(
            'object-cover transition-transform duration-[3s] ease-out group-hover:scale-105',
            obra.disponibilidad === 'Vendida' && 'opacity-90',
          )}
        />
        <DisponibilidadTag obra={obra} />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 transition-colors duration-300 group-focus-visible:ring-2 group-focus-visible:ring-accent" />
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-heading text-xl leading-tight text-foreground">
            {obra.titulo}
          </h3>
          <span className="font-mono text-xs text-muted-foreground">
            {obra.anio}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{artista?.nombre}</p>
        <p className="mt-0.5 text-sm text-muted-foreground/80">{obra.tecnica}</p>
        <p className="mt-3 text-sm font-medium text-foreground">
          {formatPrecio(obra.precio)}
        </p>
      </div>
    </Link>
  )
}
