// Modelos de datos y datos de ejemplo.
// Diseñado para conectarse fácilmente con Supabase más adelante:
// cada función puede reemplazarse por una consulta a la base de datos.

export type Disponibilidad = 'Disponible' | 'Vendida' | 'Bajo cotización'

export type Categoria = 'Pintura' | 'Escultura' | 'Grabado' | 'Fotografía'

export type Artista = {
  id: string
  nombre: string
  especialidad: string
  descripcion: string
  bio: string
  imagen: string
  origen: string
}

export type Obra = {
  id: string
  titulo: string
  artistaId: string
  categoria: Categoria
  tecnica: string
  medidas: string
  anio: number
  precio: number // en MXN; 0 = bajo cotización
  disponibilidad: Disponibilidad
  descripcion: string
  imagen: string
  galeria: string[]
  destacada: boolean
}

export const artistas: Artista[] = [
  {
    id: 'elena-marquez',
    nombre: 'Elena Márquez',
    especialidad: 'Pintura abstracta',
    descripcion:
      'Explora el color y la memoria del paisaje oaxaqueño a través de la abstracción gestual.',
    bio: 'Elena Márquez (Oaxaca, 1985) construye su obra a partir de la luz y la tierra de los valles centrales. Su pintura, de gran formato y materia densa, ha sido exhibida en México, Estados Unidos y España.',
    imagen: '/artists/artista-1.png',
    origen: 'Oaxaca, México',
  },
  {
    id: 'tomas-vega',
    nombre: 'Tomás Vega',
    especialidad: 'Escultura',
    descripcion:
      'Trabaja el bronce y la madera para indagar en la forma orgánica y el cuerpo.',
    bio: 'Tomás Vega (Ciudad de México, 1978) es escultor formado entre México e Italia. Su trabajo en bronce y madera dialoga con la tradición artesanal mexicana y la escultura contemporánea internacional.',
    imagen: '/artists/artista-2.png',
    origen: 'Ciudad de México',
  },
  {
    id: 'lucia-fontes',
    nombre: 'Lucía Fontes',
    especialidad: 'Grabado y fotografía',
    descripcion:
      'Investiga el oficio, el textil y la identidad a través del grabado y la imagen.',
    bio: 'Lucía Fontes (Puebla, 1990) combina grabado tradicional y fotografía analógica. Su obra documenta y reinterpreta los oficios y los textiles del sur de México.',
    imagen: '/artists/artista-3.png',
    origen: 'Puebla, México',
  },
  {
    id: 'rafael-mendoza',
    nombre: 'Rafael Mendoza',
    especialidad: 'Pintura figurativa',
    descripcion:
      'Su pintura expresionista aborda la figura humana, la emoción y el desarraigo.',
    bio: 'Rafael Mendoza (Oaxaca, 1962) es una figura consolidada del expresionismo mexicano. Con más de tres décadas de trayectoria, su obra forma parte de colecciones públicas y privadas en América y Europa.',
    imagen: '/artists/artista-4.png',
    origen: 'Oaxaca, México',
  },
]

export const obras: Obra[] = [
  {
    id: 'valle-al-anochecer',
    titulo: 'Valle al anochecer',
    artistaId: 'elena-marquez',
    categoria: 'Pintura',
    tecnica: 'Óleo sobre tela',
    medidas: '150 × 120 cm',
    anio: 2024,
    precio: 86000,
    disponibilidad: 'Disponible',
    descripcion:
      'Una abstracción del paisaje de los valles centrales de Oaxaca al caer la tarde. Capas de terracota e índigo construyen una atmósfera densa y luminosa.',
    imagen: '/artworks/obra-1.png',
    galeria: ['/artworks/obra-1.png', '/artworks/hero-featured.png', '/artworks/obra-6.png'],
    destacada: true,
  },
  {
    id: 'figura-en-reposo',
    titulo: 'Figura en reposo',
    artistaId: 'tomas-vega',
    categoria: 'Escultura',
    tecnica: 'Bronce con pátina',
    medidas: '48 × 22 × 20 cm',
    anio: 2023,
    precio: 124000,
    disponibilidad: 'Disponible',
    descripcion:
      'Forma orgánica que sintetiza el cuerpo humano en reposo. La pátina cálida acentúa los volúmenes y el gesto contenido de la pieza.',
    imagen: '/artworks/obra-2.png',
    galeria: ['/artworks/obra-2.png', '/artworks/obra-7.png'],
    destacada: true,
  },
  {
    id: 'geometria-del-telar',
    titulo: 'Geometría del telar',
    artistaId: 'lucia-fontes',
    categoria: 'Grabado',
    tecnica: 'Grabado en linóleo, edición de 25',
    medidas: '70 × 50 cm',
    anio: 2024,
    precio: 18500,
    disponibilidad: 'Disponible',
    descripcion:
      'Composición geométrica inspirada en los patrones del textil oaxaqueño. Una reflexión sobre el oficio, el ritmo y la repetición.',
    imagen: '/artworks/obra-3.png',
    galeria: ['/artworks/obra-3.png'],
    destacada: true,
  },
  {
    id: 'manos-de-barro',
    titulo: 'Manos de barro',
    artistaId: 'lucia-fontes',
    categoria: 'Fotografía',
    tecnica: 'Impresión en gelatina de plata, edición de 10',
    medidas: '60 × 40 cm',
    anio: 2022,
    precio: 22000,
    disponibilidad: 'Vendida',
    descripcion:
      'Retrato íntimo de las manos de una alfarera trabajando el barro. La luz dramática revela la textura del oficio ancestral.',
    imagen: '/artworks/obra-4.png',
    galeria: ['/artworks/obra-4.png'],
    destacada: false,
  },
  {
    id: 'floracion',
    titulo: 'Floración',
    artistaId: 'elena-marquez',
    categoria: 'Pintura',
    tecnica: 'Técnica mixta y hoja de oro sobre tela',
    medidas: '130 × 130 cm',
    anio: 2025,
    precio: 0,
    disponibilidad: 'Bajo cotización',
    descripcion:
      'Formas florales abstractas en carmesí y óxido con acentos de hoja de oro. Una pieza sobre la abundancia y lo efímero.',
    imagen: '/artworks/obra-5.png',
    galeria: ['/artworks/obra-5.png'],
    destacada: true,
  },
  {
    id: 'silencio',
    titulo: 'Silencio',
    artistaId: 'elena-marquez',
    categoria: 'Pintura',
    tecnica: 'Acrílico sobre tela',
    medidas: '100 × 100 cm',
    anio: 2023,
    precio: 54000,
    disponibilidad: 'Disponible',
    descripcion:
      'Una pintura minimalista de grandes campos de color cálido atravesados por una sola línea de índigo. Una invitación a la contemplación.',
    imagen: '/artworks/obra-6.png',
    galeria: ['/artworks/obra-6.png'],
    destacada: false,
  },
  {
    id: 'totem',
    titulo: 'Tótem',
    artistaId: 'tomas-vega',
    categoria: 'Escultura',
    tecnica: 'Madera tallada y pigmento',
    medidas: '120 × 30 × 28 cm',
    anio: 2024,
    precio: 98000,
    disponibilidad: 'Disponible',
    descripcion:
      'Forma totémica tallada en madera con vetas naturales y sutiles pigmentos. Un diálogo entre lo ancestral y lo contemporáneo.',
    imagen: '/artworks/obra-7.png',
    galeria: ['/artworks/obra-7.png', '/artworks/obra-2.png'],
    destacada: false,
  },
  {
    id: 'aparicion',
    titulo: 'Aparición',
    artistaId: 'rafael-mendoza',
    categoria: 'Pintura',
    tecnica: 'Óleo sobre tela',
    medidas: '160 × 130 cm',
    anio: 2025,
    precio: 142000,
    disponibilidad: 'Disponible',
    descripcion:
      'Una figura expresionista que emerge de un fondo de índigo profundo. Trazos de ocre y carmesí construyen una presencia intensa y emotiva.',
    imagen: '/artworks/obra-8.png',
    galeria: ['/artworks/obra-8.png'],
    destacada: true,
  },
]

export const categorias: Categoria[] = ['Pintura', 'Escultura', 'Grabado', 'Fotografía']

export const disponibilidades: Disponibilidad[] = [
  'Disponible',
  'Vendida',
  'Bajo cotización',
]

export function getArtista(id: string): Artista | undefined {
  return artistas.find((a) => a.id === id)
}

export function getObra(id: string): Obra | undefined {
  return obras.find((o) => o.id === id)
}

export function getObrasByArtista(artistaId: string): Obra[] {
  return obras.filter((o) => o.artistaId === artistaId)
}

export function getObrasRelacionadas(obra: Obra, limite = 3): Obra[] {
  return obras
    .filter((o) => o.id !== obra.id)
    .sort((a, b) => {
      const scoreA = (a.artistaId === obra.artistaId ? 2 : 0) + (a.categoria === obra.categoria ? 1 : 0)
      const scoreB = (b.artistaId === obra.artistaId ? 2 : 0) + (b.categoria === obra.categoria ? 1 : 0)
      return scoreB - scoreA
    })
    .slice(0, limite)
}

export function formatPrecio(precio: number): string {
  if (precio <= 0) return 'Bajo cotización'
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(precio)
}

// Contacto / configuración de la galería (centralizado para fácil edición)
export const galeria = {
  nombre: 'Arterial Galería',
  ciudad: 'Oaxaca de Juárez, Oaxaca, México',
  direccion: 'Calle Macedonio Alcalá 302, Centro Histórico',
  telefono: '+52 951 000 0000',
  whatsapp: '5219510000000',
  email: 'hola@arterialgaleria.mx',
  instagram: 'arterial.galeria',
  horario: 'Martes a domingo · 11:00 – 19:00 h',
}

export function whatsappLink(mensaje: string): string {
  return `https://wa.me/${galeria.whatsapp}?text=${encodeURIComponent(mensaje)}`
}
