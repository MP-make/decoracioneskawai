'use client';

import { Heart, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-pink-50 py-12 md:py-20 lg:py-28">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-gold/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Columna Izquierda - Texto */}
          <div className="text-center lg:text-left space-y-6 z-10">
            {/* Badge Especial */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/20 text-accent-gold-dark font-medium text-sm">
              ✨ Especial San Valentín
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Haz que su corazón{' '}
              <span className="text-brand-500 relative inline-block">
                lata más fuerte
                <Heart className="inline-block w-8 h-8 sm:w-10 sm:h-10 ml-2 fill-brand-500 text-brand-500 animate-pulse" />
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Arreglos personalizados, globos y detalles únicos en Pisco. 
              Porque cada momento merece ser celebrado.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="group px-8 py-4 bg-brand-500 text-white font-semibold rounded-full hover:bg-brand-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Ver Colección
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              
              <button className="group px-8 py-4 bg-white border-2 border-brand-500 text-brand-500 font-semibold rounded-full hover:bg-brand-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Contactar al WhatsApp
              </button>
            </div>

            {/* Stats o Features pequeños */}
            <div className="flex flex-wrap gap-6 pt-8 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎈</span>
                <span>Entrega el mismo día</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💝</span>
                <span>Personalización gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>+500 clientes felices</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Visual */}
          <div className="relative z-10">
            <div className="relative group">
              {/* Imagen Principal */}
              <div className="relative overflow-hidden rounded-4xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop"
                  alt="Regalos y decoraciones especiales"
                  className="w-full h-auto object-cover aspect-square lg:aspect-[4/5]"
                />
                
                {/* Overlay gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-500/10 to-transparent"></div>
              </div>

              {/* Sticker de Precio Flotante */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-accent-gold text-white rounded-full w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300 border-4 border-white">
                <span className="text-xs sm:text-sm font-semibold">Desde</span>
                <span className="text-xl sm:text-3xl font-bold">S/ 45</span>
                <span className="text-xs">✨</span>
              </div>

              {/* Badge decorativo inferior */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl shadow-xl p-4 sm:p-6 flex items-center gap-3 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-brand-100 rounded-full p-3">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-brand-500 fill-brand-500" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">Calidad</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900">Premium</p>
                </div>
              </div>

              {/* Elementos decorativos flotantes */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-pink-200 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-brand-200 rounded-full opacity-60 blur-xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
