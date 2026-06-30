'use client'

import { MessageCircle, Mail } from 'lucide-react'
import { galeria, whatsappLink, formatPrecio, type Obra } from '@/lib/data'

export function ObraAcciones({
  obra,
  artistaNombre,
}: {
  obra: Obra
  artistaNombre: string
}) {
  const vendida = obra.disponibilidad === 'Vendida'

  const mensaje = `Hola, me interesa la obra "${obra.titulo}" de ${artistaNombre} (${formatPrecio(
    obra.precio,
  )}). ¿Podrían darme más información?`

  const asunto = `Consulta sobre "${obra.titulo}"`
  const mailto = `mailto:${galeria.email}?subject=${encodeURIComponent(
    asunto,
  )}&body=${encodeURIComponent(mensaje)}`

  if (vendida) {
    return (
      <div className="flex flex-col gap-3">
        <div className="rounded-lg border border-border bg-secondary/50 px-5 py-4 text-sm text-muted-foreground">
          Esta obra ya forma parte de una colección privada. Escríbenos para
          conocer piezas similares disponibles.
        </div>
        <a
          href={whatsappLink(
            `Hola, vi que "${obra.titulo}" ya está vendida. ¿Tienen obras similares de ${artistaNombre}?`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <MessageCircle className="size-4" />
          Solicitar obras similares
        </a>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <a
        href={whatsappLink(mensaje)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <MessageCircle className="size-4" />
        {obra.precio > 0 ? 'Adquirir por WhatsApp' : 'Solicitar cotización'}
      </a>
      <a
        href={mailto}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      >
        <Mail className="size-4" />
        Consultar por correo
      </a>
    </div>
  )
}
