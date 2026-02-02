'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProductById(id);
  const { addToCart } = useCart();

  // Si el producto no existe
  if (!product) {
    return (
      <div className="min-h-screen bg-brand-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Producto no encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, el producto que buscas no existe o ha sido removido.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-500 text-white px-6 py-3 rounded-full hover:bg-brand-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    alert('¡Agregado al carrito! 🎉');
  };

  return (
    <div className="min-h-screen bg-brand-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Botón de regresar */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver a la tienda
        </Link>

        {/* Layout de 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna Izquierda: Imagen */}
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Tag flotante si existe */}
            {product.tag && (
              <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold ${
                product.tag === 'Cotizar' ? 'bg-purple-500' :
                product.tag === 'Campaña' ? 'bg-red-500' :
                product.tag === 'Opitos' ? 'bg-blue-500' :
                product.tag === 'Top Ventas' ? 'bg-accent-gold' :
                product.tag === 'Hecho a mano' ? 'bg-green-500' :
                'bg-gray-500'
              } text-white`}>
                {product.tag}
              </div>
            )}
          </div>

          {/* Columna Derecha: Información */}
          <div className="flex flex-col justify-center">
            {/* Categoría */}
            <p className="text-sm text-brand-500 font-semibold uppercase tracking-wide mb-3">
              {product.category}
            </p>

            {/* Título */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {product.name}
            </h1>

            {/* Precio con indicador especial para "Cotizar" */}
            <div className="mb-8">
              {product.tag === 'Cotizar' ? (
                <div>
                  <p className="text-3xl font-bold text-purple-600 mb-2">
                    Desde S/ {product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600 bg-purple-50 px-4 py-2 rounded-lg inline-block">
                    💜 Precio referencial. Solicita cotización personalizada
                  </p>
                </div>
              ) : (
                <p className="text-5xl font-bold text-brand-500">
                  S/ {product.price.toFixed(2)}
                </p>
              )}
            </div>

            {/* Descripción */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Descripción
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Características */}
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-md">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-brand-500">✓</span>
                  <span>Entrega en 24-48 horas en Pisco</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-500">✓</span>
                  <span>Pago contraentrega disponible</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-500">✓</span>
                  <span>Atención personalizada por WhatsApp</span>
                </li>
              </ul>
            </div>

            {/* Botón de añadir al carrito - Con texto diferente para "Cotizar" */}
            <button 
              onClick={handleAddToCart}
              className={`w-full py-4 px-8 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3 ${
                product.tag === 'Cotizar'
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'bg-brand-500 hover:bg-brand-600 text-white'
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              {product.tag === 'Cotizar' ? 'Solicitar Cotización' : 'Añadir al Carrito'}
            </button>

            {/* Botón secundario */}
            <button className="w-full mt-4 bg-white text-brand-500 py-4 px-8 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-brand-500">
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
