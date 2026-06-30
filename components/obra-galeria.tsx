'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function ObraGaleria({
  imagenes,
  titulo,
}: {
  imagenes: string[]
  titulo: string
}) {
  const galeria = imagenes.length > 0 ? imagenes : ['/placeholder.svg']
  const [activa, setActiva] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted shadow-sm">
        <Image
          src={galeria[activa] || '/placeholder.svg'}
          alt={`${titulo} — vista ${activa + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {galeria.length > 1 && (
        <div className="flex gap-3">
          {galeria.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActiva(i)}
              aria-label={`Ver imagen ${i + 1} de ${titulo}`}
              aria-current={i === activa}
              className={cn(
                'relative aspect-square w-20 shrink-0 overflow-hidden rounded-lg bg-muted ring-offset-2 ring-offset-background transition-all',
                i === activa
                  ? 'ring-2 ring-accent'
                  : 'opacity-70 hover:opacity-100',
              )}
            >
              <Image
                src={img || '/placeholder.svg'}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
