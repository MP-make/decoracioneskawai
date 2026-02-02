'use client';

import { Heart, Cake, PartyPopper, Coffee, Smile } from 'lucide-react';

// Datos de las categorías
const categories = [
  { id: 1, name: 'San Valentín', icon: Heart, color: 'text-brand-500' },
  { id: 2, name: 'Cumpleaños', icon: Cake, color: 'text-brand-500' },
  { id: 3, name: 'Globos', icon: PartyPopper, color: 'text-brand-500' },
  { id: 4, name: 'Desayunos', icon: Coffee, color: 'text-brand-500' },
  { id: 5, name: 'Peluches', icon: Smile, color: 'text-brand-500' },
];

export default function CategoryRail() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Explora por Categoría
          </h2>
          <p className="text-gray-600 mt-2">
            Encuentra el regalo perfecto para cada ocasión
          </p>
        </div>

        {/* Contenedor con scroll horizontal */}
        <div className="relative px-2">
          <div className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide py-4 px-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              
              return (
                <div
                  key={category.id}
                  className="flex-shrink-0 cursor-pointer group"
                >
                  {/* Círculo con icono */}
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center transition-all duration-300 group-hover:border-brand-500 group-hover:scale-110 group-hover:shadow-xl shadow-md">
                      <IconComponent className={`w-9 h-9 md:w-11 md:h-11 ${category.color} transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                    
                    {/* Efecto de resplandor en hover */}
                    <div className="absolute inset-0 rounded-full bg-brand-500/0 group-hover:bg-brand-500/5 transition-all duration-300"></div>
                  </div>

                  {/* Nombre de la categoría */}
                  <p className="text-xs md:text-sm font-medium text-gray-600 text-center mt-3 max-w-[80px] md:max-w-[96px] group-hover:text-brand-500 transition-colors duration-300">
                    {category.name}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Indicador de scroll (opcional - solo visual) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none md:hidden"></div>
        </div>

        {/* Indicador sutil de que se puede hacer scroll */}
        <div className="mt-4 text-center md:hidden">
          <p className="text-xs text-gray-400">
            Desliza para ver más →
          </p>
        </div>
      </div>
    </section>
  );
}
