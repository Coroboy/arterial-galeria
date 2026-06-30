import Image from 'next/image'

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-last aspect-[5/4] overflow-hidden rounded-xl bg-muted lg:order-first">
          <Image
            src="/gallery-interior.png"
            alt="Interior de Arterial Galería con muros de color marfil y obras enmarcadas"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-primary"></span>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
              Sobre la galería
            </p>
          </div>
          <h2 className="mt-8 text-balance font-sans text-4xl font-light leading-tight text-foreground lg:text-5xl">
            Un espacio para el <span className="font-heading italic font-medium text-primary">arte</span> que perdura
          </h2>
          <div className="mt-10 space-y-6 text-pretty leading-relaxed text-muted-foreground font-light">
            <p className="relative">
              <span className="absolute -left-8 -top-6 text-7xl font-heading text-primary/10">"</span>
              <span className="float-left mr-3 mt-1 font-heading text-6xl text-primary leading-none">A</span>rterial Galería nace en el corazón de Oaxaca con una convicción
              clara: el arte contemporáneo mexicano merece espacios que lo
              cuiden, lo expliquen y lo acerquen a quienes lo aprecian.
            </p>
            <p>
              Acompañamos a coleccionistas nuevos y experimentados en cada paso,
              desde la primera conversación hasta la instalación de la obra en su
              destino final. Creemos en relaciones de largo plazo, basadas en la
              confianza y el conocimiento.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
            <div>
              <h3 className="font-heading text-xl text-foreground">
                Certificado de autenticidad
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Cada obra se entrega con documentación firmada por el artista.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl text-foreground">
                Asesoría personal
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Te guiamos para formar una colección coherente y significativa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
