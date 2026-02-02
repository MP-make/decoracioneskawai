'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Clock, Gift } from 'lucide-react';
import { products } from '@/data/products';

export default function SanValentinPage() {
  // Filtrar productos de San Valentín
  const valentineProducts = products.filter(product => product.category === 'San Valentín');

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 overflow-x-hidden">
      {/* Hero Boutique Elegante */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna Izquierda - Texto Elegante */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-200 bg-white">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span className="text-sm font-light text-gray-700">Edición Especial 2026</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-rose-600 leading-tight">
                San Valentín
                <br />
                <span className="font-normal text-gray-900">Con Amor</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                Demuéstrale tu amor con regalos únicos y detalles que hablan del corazón
              </p>

              {/* Countdown Minimalista */}
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-2 px-4 py-3 border border-rose-200 bg-white rounded-lg">
                  <Clock className="w-5 h-5 text-rose-500" />
                  <span className="text-sm font-light text-gray-700">12 días restantes</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 border border-rose-200 bg-white rounded-lg">
                  <Gift className="w-5 h-5 text-rose-500" />
                  <span className="text-sm font-light text-gray-700">Envío gratis</span>
                </div>
              </div>

              {/* CTA Principal */}
              <div className="pt-4">
                <a
                  href="#productos"
                  className="inline-block px-8 py-4 bg-rose-600 text-white font-light rounded-full hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explorar Colección
                </a>
              </div>
            </div>

            {/* Columna Derecha - Imagen Hero */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/catalogo/san-valentin.jpg"
                  alt="San Valentín 2026"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Badge flotante sutil */}
              <div className="absolute -top-4 -right-4 bg-white px-6 py-3 rounded-full shadow-lg border border-rose-100">
                <p className="text-xs font-light text-gray-600">Cupos</p>
                <p className="text-lg font-normal text-rose-600">Limitados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Productos */}
      <section id="productos" className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Minimalista */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Regalos Especiales
            </h2>
            <div className="w-16 h-[1px] bg-rose-300 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Cada regalo cuenta una historia de amor
            </p>
          </div>

          {/* Grid de Productos Centrado */}
          <div className={`grid gap-8 ${
            valentineProducts.length === 1 
              ? 'grid-cols-1 place-items-center' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {valentineProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm w-full"
              >
                {/* Imagen del Producto */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Tag minimalista */}
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-xs font-light text-rose-600">{product.tag}</span>
                    </div>
                  )}

                  {/* Botón flotante sutil */}
                  <button
                    className="absolute bottom-4 right-4 bg-white text-rose-600 p-3 rounded-full shadow-lg hover:bg-rose-600 hover:text-white transition-all duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      // Lógica del carrito
                    }}
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>

                {/* Info del Producto */}
                <div className="p-6">
                  <p className="text-xs text-rose-500 font-light mb-2 uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-light text-gray-900 mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-normal text-rose-600">
                    S/ {product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mensaje si no hay productos */}
          {valentineProducts.length === 0 && (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-rose-200 mx-auto mb-4" />
              <p className="text-gray-600 text-lg font-light">
                Próximamente más productos especiales para San Valentín
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final Elegante */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-rose-500 mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            No Dejes Pasar Este Momento
          </h2>
          <p className="text-lg text-gray-600 font-light mb-2">
            Quedan solo 12 días para San Valentín
          </p>
          <p className="text-base text-gray-500 font-light mb-8">
            Reserva ahora y asegura la entrega el 14 de febrero
          </p>
          
          <a
            href="https://wa.me/51999999999?text=Hola%20Kawai%2C%20quiero%20reservar%20mi%20regalo%20de%20San%20Valentín"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-rose-600 text-white font-light rounded-full hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Heart className="w-5 h-5" />
            Reservar Mi Regalo
          </a>
        </div>
      </section>
    </main>
  );
}
