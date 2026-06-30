import { Search, MessageCircle, ShieldCheck, Truck } from 'lucide-react'

const pasos = [
  {
    icon: Search,
    titulo: 'Descubre',
    texto:
      'Explora el catálogo en línea o visítanos en Oaxaca. Cada obra incluye ficha técnica, medidas y precio.',
  },
  {
    icon: MessageCircle,
    titulo: 'Consulta',
    texto:
      'Escríbenos por WhatsApp o correo. Resolvemos tus dudas y te asesoramos sin compromiso.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Adquiere con confianza',
    texto:
      'Formalizamos la compra con factura y certificado de autenticidad firmado por el artista.',
  },
  {
    icon: Truck,
    titulo: 'Recibe en casa',
    texto:
      'Embalaje profesional y envío asegurado a cualquier parte de México y el mundo.',
  },
]

export function Proceso() {
  return (
    <section id="proceso" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Cómo comprar
          </p>
          <h2 className="mt-4 text-balance font-heading text-4xl leading-tight text-foreground lg:text-5xl">
            Un proceso claro y cuidado
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Comprar arte debe ser una experiencia tranquila. Te acompañamos en
            cada etapa con transparencia.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso, i) => (
            <li key={paso.titulo} className="relative">
              <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <paso.icon className="size-5" />
              </div>
              <span className="mt-5 block font-mono text-xs text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="mt-1 font-heading text-2xl text-foreground">
                {paso.titulo}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {paso.texto}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-xl border border-border bg-secondary/50 p-8 lg:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-heading text-xl text-foreground">
                Envíos nacionales
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Entrega en 5 a 10 días hábiles a toda la República Mexicana, con
                seguro incluido.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl text-foreground">
                Envíos internacionales
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Coordinamos logística y aduanas para envíos a cualquier país.
                Cotización personalizada.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl text-foreground">
                Pagos seguros
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Aceptamos transferencia, tarjeta y pagos a meses. Apartado
                disponible para piezas seleccionadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
