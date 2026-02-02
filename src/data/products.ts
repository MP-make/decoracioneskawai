// Datos centralizados de productos - KAWAI (Datos Reales)
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  tag: string | null;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 'deco-15-001',
    name: 'Decoración 15 Años - Temática Luxury',
    price: 650.00,
    image: '/catalogo/deco-15.jpg',
    category: 'Decoraciones',
    tag: 'Cotizar',
    description: 'Montaje completo de temática 15 años. Incluye mobiliario, estructuras de fondo, arco de globos orgánico y luces decorativas.'
  },
  {
    id: 'opitos-001',
    name: 'Conjunto Corduroy Baby Niñas',
    price: 45.00,
    image: '/catalogo/opitos-baby.jpg',
    category: 'Infantil',
    tag: 'Opitos',
    description: 'Conjunto exclusivo de la línea Opitos. Tela corduroy suave, ideal para media estación. Tallas 2-4-6.'
  },
  {
    id: 'tutsi-giant',
    name: 'Tutsi Pop Gigante Sorpresa',
    price: 12.00,
    image: '/catalogo/tutsi-pop.jpg',
    category: 'Detalles',
    tag: 'Top Ventas',
    description: 'El detalle perfecto y económico. Tutsi Pop gigante relleno de dulces surtidos y chocolates.'
  },
  {
    id: 'flores-crochet',
    name: 'Tulipán Tejido a Crochet (Eterno)',
    price: 15.00,
    image: '/catalogo/flores-tejidas.jpg',
    category: 'Flores',
    tag: 'Hecho a mano',
    description: 'Flores eternas tejidas a mano con hilo de algodón premium. Nunca se marchitan. Disponible en amarillo y rojo.'
  },
  {
    id: 'joyas-pulsera',
    name: 'Pulsera Dorada Corazón',
    price: 35.00,
    image: '/catalogo/joyas.jpg',
    category: 'Joyería',
    tag: null,
    description: 'Joyería de fantasía fina con baño de oro. Diseño delicado de corazón.'
  },
  {
    id: 'box-sanvalentin',
    name: 'Box Amor Infinito',
    price: 85.00,
    image: '/catalogo/san-valentin.jpg',
    category: 'San Valentín',
    tag: 'Campaña',
    description: 'Caja de regalo premium con rosas, chocolates y peluche pequeño.'
  }
];

// Helper para buscar un producto por ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
