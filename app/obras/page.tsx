import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Catalogo } from '@/components/catalogo'
import { categorias, type Categoria } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Obras en venta · Arterial Galería',
  description:
    'Explora el catálogo completo de pintura, escultura, grabado y fotografía contemporánea disponible en Arterial Galería, Oaxaca.',
}

export default async function ObrasPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string, artista?: string }>
}) {
  const { categoria, artista } = await searchParams
  const categoriaInicial = categorias.includes(categoria as Categoria)
    ? (categoria as Categoria)
    : undefined
  const artistaInicial = artista || undefined

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Catálogo
            </p>
            <h1 className="mt-4 max-w-3xl text-balance font-heading text-5xl leading-[1.05] text-foreground lg:text-6xl">
              Obras en venta
            </h1>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Piezas únicas de artistas mexicanos contemporáneos. Cada obra
              incluye certificado de autenticidad y envío asegurado a todo el
              mundo.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <Catalogo categoriaInicial={categoriaInicial} artistaInicial={artistaInicial} />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
