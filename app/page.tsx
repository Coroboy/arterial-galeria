import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { Destacadas } from '@/components/sections/destacadas'
import { Artistas } from '@/components/sections/artistas'
import { Sobre } from '@/components/sections/sobre'
import { Exposiciones } from '@/components/sections/exposiciones'
import { Proceso } from '@/components/sections/proceso'
import { Contacto } from '@/components/sections/contacto'

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Destacadas />
        <Artistas />
        <Sobre />
        <Exposiciones />
        <Proceso />
        <Contacto />
      </main>
      <SiteFooter />
    </div>
  )
}
