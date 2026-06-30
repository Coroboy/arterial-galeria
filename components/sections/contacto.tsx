'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { galeria, whatsappLink } from '@/lib/data'

export function Contacto() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  const datos = [
    {
      icon: MapPin,
      label: 'Dirección',
      value: `${galeria.direccion}, ${galeria.ciudad}`,
    },
    { icon: Phone, label: 'Teléfono', value: galeria.telefono },
    { icon: Mail, label: 'Correo', value: galeria.email },
    { icon: Clock, label: 'Horario', value: galeria.horario },
  ]

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const texto = `Hola, soy ${nombre || 'un interesado'} (${
      email || 'sin correo'
    }). ${mensaje || 'Me gustaría recibir más información sobre la galería.'}`
    window.open(whatsappLink(texto), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Contacto
          </p>
          <h2 className="mt-4 text-balance font-heading text-4xl leading-tight text-foreground lg:text-5xl">
            Conversemos sobre tu próxima obra
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Visítanos en el centro histórico de Oaxaca o escríbenos. Con gusto
            te asesoramos sobre cualquier pieza de la colección.
          </p>

          <dl className="mt-10 space-y-6">
            {datos.map((d) => (
              <div key={d.label} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-background text-primary">
                  <d.icon className="size-5" />
                </div>
                <div>
                  <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    {d.label}
                  </dt>
                  <dd className="mt-1 text-foreground">{d.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-xl border border-border bg-card p-7 shadow-sm lg:p-9">
          <h3 className="font-heading text-2xl text-card-foreground">
            Envíanos un mensaje
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Te responderemos por WhatsApp a la brevedad.
          </p>
          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div className="grid gap-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="h-11"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                className="h-11"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Cuéntanos qué obra te interesa o qué estás buscando…"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Enviar por WhatsApp
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
