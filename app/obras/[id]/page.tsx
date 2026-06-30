import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ObraGaleria } from '@/components/obra-galeria'
import { ObraAcciones } from '@/components/obra-acciones'
import { ObraCard } from '@/components/obra-card'
import {
  obras,
  getObra,
  getArtista,
  getObrasRelacionadas,
  formatPrecio,
} from '@/lib/data'

export function generateStaticParams() {
  return obras.map((o) => ({ id: o.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const obra = getObra(id)
  if (!obra) return { title: 'Obra no encontrada · Arterial Galería' }
  const artista = getArtista(obra.artistaId)
  return {
    title: `${obra.titulo} — ${artista?.nombre} · Arterial Galería`,
    description: obra.descripcion,
  }
}

export default async function ObraPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const obra = getObra(id)
  if (!obra) notFound()

  const artista = getArtista(obra.artistaId)
  const relacionadas = getObrasRelacionadas(obra)

  const ficha = [
    { label: 'Artista', value: artista?.nombre ?? '' },
    { label: 'Categoría', value: obra.categoria },
    { label: 'Técnica', value: obra.tecnica },
    { label: 'Medidas', value: obra.medidas },
    { label: 'Año', value: String(obra.anio) },
    { label: 'Disponibilidad', value: obra.disponibilidad },
  ]

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
          <Link
            href="/obras"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Volver al catálogo
          </Link>
        </div>

        <article className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-14">
          <ObraGaleria imagenes={obra.galeria} titulo={obra.titulo} />

          <div className="lg:py-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {obra.categoria}
            </p>
            <h1 className="mt-4 text-balance font-heading text-4xl leading-tight text-foreground lg:text-5xl">
              {obra.titulo}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {artista?.nombre}, {obra.anio}
            </p>

            <p className="mt-7 text-2xl font-medium text-foreground">
              {formatPrecio(obra.precio)}
            </p>

            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {obra.descripcion}
            </p>

            <div className="mt-8">
              <ObraAcciones obra={obra} artistaNombre={artista?.nombre ?? ''} />
            </div>

            <dl className="mt-10 divide-y divide-border border-y border-border">
              {ficha.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="text-right text-sm text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Incluye certificado de autenticidad firmado por el artista.
              Embalaje profesional y envío asegurado a todo el mundo.
            </p>
          </div>
        </article>

        {/* Artist bio */}
        {artista && (
          <section className="border-y border-border bg-secondary/40 py-16">
            <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:grid-cols-[auto_1fr] sm:gap-10 lg:px-8">
              <div className="relative size-28 shrink-0 overflow-hidden rounded-full bg-muted sm:size-36">
                <Image
                  src={artista.imagen || '/placeholder.svg'}
                  alt={`Retrato de ${artista.nombre}`}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                  El artista
                </p>
                <h2 className="mt-3 font-heading text-3xl text-foreground">
                  {artista.nombre}
                </h2>
                <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {artista.bio}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Related */}
        {relacionadas.length > 0 && (
          <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-heading text-3xl text-foreground lg:text-4xl">
                Obras relacionadas
              </h2>
              <Link
                href="/obras"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground"
              >
                Ver todo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {relacionadas.map((rel) => (
                <ObraCard key={rel.id} obra={rel} />
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
