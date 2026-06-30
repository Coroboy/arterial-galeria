'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import {
  obras as todasLasObras,
  artistas,
  categorias,
  type Categoria,
  type Disponibilidad,
} from '@/lib/data'
import { ObraCard } from '@/components/obra-card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

type Orden = 'destacadas' | 'precio-asc' | 'precio-desc' | 'recientes'

const ordenLabels: Record<Orden, string> = {
  destacadas: 'Destacadas',
  recientes: 'Más recientes',
  'precio-asc': 'Precio: menor a mayor',
  'precio-desc': 'Precio: mayor a menor',
}

const disponibilidadOpciones: { value: Disponibilidad | 'todas'; label: string }[] = [
  { value: 'todas', label: 'Todas' },
  { value: 'Disponible', label: 'Disponibles' },
  { value: 'Bajo cotización', label: 'Bajo cotización' },
  { value: 'Vendida', label: 'Vendidas' },
]

export function Catalogo({
  categoriaInicial,
  artistaInicial,
}: {
  categoriaInicial?: Categoria
  artistaInicial?: string
}) {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState<Categoria | 'todas'>(
    categoriaInicial ?? 'todas',
  )
  const [artistaId, setArtistaId] = useState<string>(artistaInicial ?? 'todos')
  const [disponibilidad, setDisponibilidad] = useState<Disponibilidad | 'todas'>(
    'todas',
  )
  const [orden, setOrden] = useState<Orden>('destacadas')

  const obrasFiltradas = useMemo(() => {
    const q = busqueda.trim().toLowerCase()

    const filtradas = todasLasObras.filter((obra) => {
      if (categoria !== 'todas' && obra.categoria !== categoria) return false
      if (artistaId !== 'todos' && obra.artistaId !== artistaId) return false
      if (disponibilidad !== 'todas' && obra.disponibilidad !== disponibilidad)
        return false
      if (q) {
        const artista = artistas.find((a) => a.id === obra.artistaId)
        const haystack = `${obra.titulo} ${obra.tecnica} ${obra.descripcion} ${
          artista?.nombre ?? ''
        }`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })

    const ordenadas = [...filtradas]
    switch (orden) {
      case 'precio-asc':
        ordenadas.sort((a, b) => a.precio - b.precio)
        break
      case 'precio-desc':
        ordenadas.sort((a, b) => b.precio - a.precio)
        break
      case 'recientes':
        ordenadas.sort((a, b) => b.anio - a.anio)
        break
      default:
        ordenadas.sort(
          (a, b) => Number(b.destacada) - Number(a.destacada) || b.anio - a.anio,
        )
    }
    return ordenadas
  }, [busqueda, categoria, artistaId, disponibilidad, orden])

  const hayFiltros =
    busqueda !== '' ||
    categoria !== 'todas' ||
    artistaId !== 'todos' ||
    disponibilidad !== 'todas'

  function limpiar() {
    setBusqueda('')
    setCategoria('todas')
    setArtistaId('todos')
    setDisponibilidad('todas')
    setOrden('destacadas')
  }

  return (
    <div>
      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        <CategoriaChip
          activa={categoria === 'todas'}
          onClick={() => setCategoria('todas')}
        >
          Todas
        </CategoriaChip>
        {categorias.map((c) => (
          <CategoriaChip
            key={c}
            activa={categoria === c}
            onClick={() => setCategoria(c)}
          >
            {c}
          </CategoriaChip>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-col gap-4 border-y border-border py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar obra, técnica o artista…"
            className="h-11 pl-9"
            aria-label="Buscar obras"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="size-4 text-muted-foreground" />
            <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground sm:inline">
              Filtrar
            </span>
          </div>

          <Select
            value={artistaId}
            onValueChange={(v) => setArtistaId(v as string)}
          >
            <SelectTrigger className="h-11" aria-label="Filtrar por artista">
              <SelectValue placeholder="Artista" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los artistas</SelectItem>
              {artistas.map((a) => (
                <SelectItem key={a.id} value={a.id}>
                  {a.nombre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={disponibilidad}
            onValueChange={(v) => setDisponibilidad(v as Disponibilidad | 'todas')}
          >
            <SelectTrigger className="h-11" aria-label="Filtrar por disponibilidad">
              <SelectValue placeholder="Disponibilidad" />
            </SelectTrigger>
            <SelectContent>
              {disponibilidadOpciones.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={orden} onValueChange={(v) => setOrden(v as Orden)}>
            <SelectTrigger className="h-11" aria-label="Ordenar">
              <SelectValue placeholder="Ordenar" />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(ordenLabels) as Orden[]).map((o) => (
                <SelectItem key={o} value={o}>
                  {ordenLabels[o]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results meta */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {obrasFiltradas.length}{' '}
          {obrasFiltradas.length === 1 ? 'obra' : 'obras'}
        </p>
        {hayFiltros && (
          <button
            type="button"
            onClick={limpiar}
            className="inline-flex items-center gap-1.5 text-sm text-primary transition-opacity hover:opacity-80"
          >
            <X className="size-4" />
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Grid */}
      {obrasFiltradas.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {obrasFiltradas.map((obra, i) => (
            <ObraCard key={obra.id} obra={obra} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-20 text-center">
          <p className="font-heading text-2xl text-foreground">
            No encontramos obras
          </p>
          <p className="mt-2 max-w-sm text-pretty text-sm text-muted-foreground">
            Prueba ajustar la búsqueda o los filtros para descubrir más piezas de
            la colección.
          </p>
          <button
            type="button"
            onClick={limpiar}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  )
}

function CategoriaChip({
  activa,
  onClick,
  children,
}: {
  activa: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full border px-5 py-2 text-sm font-medium transition-colors',
        activa
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary',
      )}
    >
      {children}
    </button>
  )
}
