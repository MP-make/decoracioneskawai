'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';

// Función para obtener estilos del tag según su tipo
const getTagStyles = (tag: string) => {
  switch (tag) {
    case 'Cotizar':
      return 'bg-purple-500 text-white';
    case 'Campaña':
      return 'bg-red-500 text-white';
    case 'Opitos':
      return 'bg-blue-500 text-white';
    case 'Top Ventas':
      return 'bg-accent-gold text-white';
    case 'Hecho a mano':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-brand-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Los Favoritos de Kawai
        </h2>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group block"
            >
              {/* Contenedor de imagen con tag y botón */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Tag flotante (solo si existe) */}
                {product.tag && (
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${getTagStyles(
                      product.tag
                    )}`}
                  >
                    {product.tag}
                  </div>
                )}

                {/* Botón de acción circular flotante - Optimizado Mobile */}
                <button
                  className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-white text-brand-500 p-2.5 md:p-3 rounded-full shadow-lg hover:bg-brand-500 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={`Agregar ${product.name} al carrito`}
                  onClick={(e) => {
                    e.preventDefault();
                    // Aquí iría la lógica del carrito
                  }}
                >
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>

              {/* Información del producto */}
              <div className="p-5">
                <p className="text-xs text-brand-500 font-semibold mb-1 uppercase tracking-wide">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-brand-600">
                  S/ {product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
