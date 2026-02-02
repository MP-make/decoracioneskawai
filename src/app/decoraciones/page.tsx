'use client';

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function DecoracionesPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: '15 Años Luxury',
      description: 'Decoración elegante con globos dorados y arcos florales',
      image: '/catalogo/deco-15.jpg',
      category: 'Quinceañeros',
    },
    {
      id: 2,
      title: 'Boda de Ensueño',
      description: 'Ambientación romántica para el día más especial',
      image: '/catalogo/boda.jpg',
      category: 'Bodas',
    },
    {
      id: 3,
      title: 'Baby Shower',
      description: 'Decoración tierna para recibir al nuevo integrante',
      image: '/catalogo/babyshower.jpg',
      category: 'Baby Shower',
    },
    {
      id: 4,
      title: 'Bautizo Especial',
      description: 'Decoración delicada para celebrar el bautizo',
      image: '/catalogo/bautizo.jpg',
      category: 'Bautizos',
    },
    {
      id: 5,
      title: 'Celebración Única',
      description: 'Cumpleaños y eventos corporativos a medida',
      image: '/catalogo/deco-15.jpg',
      category: 'Eventos',
    },
    {
      id: 6,
      title: 'Ambientación Premium',
      description: 'Decoración sofisticada para ocasiones especiales',
      image: '/catalogo/boda.jpg',
      category: 'Premium',
    },
  ];

  const handleWhatsAppClick = (projectTitle: string) => {
    const phoneNumber = '51999999999';
    const message = encodeURIComponent(`Hola Kawai, vi la decoración de ${projectTitle} y quisiera una cotización`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Cinematográfico */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {/* Imagen de Fondo */}
        <div className="absolute inset-0">
          <Image
            src="/catalogo/boda.jpg"
            alt="Decoraciones de Lujo"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay Oscuro */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase mb-4 text-white/80">
              Portafolio
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              Transformamos Espacios,
              <br />
              <span className="font-semibold">Creamos Recuerdos</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
              Cada evento es único. Diseñamos experiencias inolvidables con atención al más mínimo detalle.
            </p>
          </div>
        </div>
      </section>

      {/* Galería Masonry - Luxury Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header minimalista */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Nuestros Proyectos
            </h2>
            <div className="w-16 h-[1px] bg-gray-300 mx-auto"></div>
          </div>

          {/* Grid de Proyectos - Masonry Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden cursor-pointer"
              >
                {/* Imagen del Proyecto */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Overlay con información - Aparece al hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    {/* Badge de Categoría */}
                    <div className="mb-3">
                      <span className="inline-block text-xs tracking-widest uppercase text-white/70 font-light">
                        {project.category}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl font-light text-white mb-2">
                      {project.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-sm text-white/80 mb-4 font-light">
                      {project.description}
                    </p>

                    {/* Botón WhatsApp - Minimalista */}
                    <button
                      onClick={() => handleWhatsAppClick(project.title)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-light rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">Consultar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Minimalista */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            ¿Tienes un evento próximo?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-light">
            Conversemos sobre cómo podemos hacer realidad tu visión
          </p>
          <button
            onClick={() => handleWhatsAppClick('mi evento')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-light rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar Ahora
          </button>
        </div>
      </section>
    </main>
  );
}
