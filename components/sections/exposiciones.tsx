const exposiciones = [
  {
    estado: 'En curso',
    titulo: 'Materia y memoria',
    artista: 'Elena Márquez',
    fechas: '15 may — 30 jun, 2026',
    descripcion:
      'Una exploración de la pintura como territorio de la memoria y el paisaje.',
  },
  {
    estado: 'Próxima',
    titulo: 'El cuerpo silencioso',
    artista: 'Tomás Vega',
    fechas: '10 jul — 25 ago, 2026',
    descripcion:
      'Escultura reciente en bronce y madera sobre la forma y la quietud.',
  },
  {
    estado: 'Próxima',
    titulo: 'Telar de luz',
    artista: 'Lucía Fontes',
    fechas: '05 sep — 20 oct, 2026',
    descripcion:
      'Grabado y fotografía en diálogo con los oficios textiles del sur de México.',
  },
]
import { cn } from '@/lib/utils'

export function Exposiciones() {
  return (
    <section
      id="exposiciones"
      className="scroll-mt-24 bg-primary py-20 text-primary-foreground lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary-foreground/90">
            Programa
          </p>
          <h2 className="mt-4 text-balance font-sans text-4xl font-light leading-tight lg:text-5xl">
            Nuestras <span className="font-heading italic font-medium">exposiciones</span>
          </h2>
          <p className="mt-6 text-pretty text-primary-foreground/80 font-light border-l border-primary-foreground/30 pl-4">
            Nuestro calendario de muestras individuales y colectivas a lo largo
            del año.
          </p>
        </div>

        <div className="mt-16 divide-y divide-primary-foreground/20 border-y border-primary-foreground/20">
          {exposiciones.map((expo, i) => (
            <article
              key={expo.titulo}
              className={cn(
                "group grid gap-4 py-8 md:grid-cols-12 md:items-center md:gap-8 transition-all duration-500 hover:bg-primary-foreground/5 animate-in fade-in slide-in-from-bottom-8 fill-mode-both",
                `delay-[${i * 150}ms]`
              )}
            >
              <div className="md:col-span-2 px-4 md:px-0">
                <span className="inline-flex rounded-none border border-primary-foreground/30 px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/90 transition-colors group-hover:bg-primary-foreground group-hover:text-primary">
                  {expo.estado}
                </span>
              </div>
              <div className="md:col-span-5 px-4 md:px-0">
                <h3 className="font-heading text-3xl md:text-4xl leading-tight transition-transform duration-500 group-hover:translate-x-2 group-hover:italic">
                  {expo.titulo}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-widest text-primary-foreground/70 transition-transform duration-500 group-hover:translate-x-2">
                  {expo.artista}
                </p>
              </div>
              <p className="text-sm font-light text-primary-foreground/80 md:col-span-3 px-4 md:px-0 transition-opacity duration-500 group-hover:opacity-100 opacity-80">
                {expo.descripcion}
              </p>
              <p className="font-mono text-xs tracking-widest text-primary-foreground/70 md:col-span-2 md:text-right px-4 md:px-0">
                {expo.fechas}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
