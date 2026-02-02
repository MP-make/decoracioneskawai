'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramPost {
  id: number;
  image: string;
  alt: string;
}

export default function InstagramFeed() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const posts: InstagramPost[] = [
    {
      id: 1,
      image: '/catalogo/deco-15.jpg',
      alt: 'Decoración de 15 años',
    },
    {
      id: 2,
      image: '/catalogo/san-valentin.jpg',
      alt: 'Decoración San Valentín',
    },
    {
      id: 3,
      image: '/catalogo/opitos-baby.jpg',
      alt: 'Opitos Baby',
    },
    {
      id: 4,
      image: '/catalogo/flores-tejidas.jpg',
      alt: 'Flores tejidas',
    },
    {
      id: 5,
      image: '/catalogo/joyas.jpg',
      alt: 'Joyas personalizadas',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-brand-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Síguenos en @decoraciones_kawai
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre cientos de proyectos reales y encuentra inspiración para tu próximo evento
          </p>
        </div>

        {/* Instagram Grid - Mosaico */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Image */}
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center transition-opacity duration-300 ${
                  hoveredPost === post.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-center text-white transform transition-transform duration-300 group-hover:scale-110">
                  <Instagram className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold text-sm">Ver Post</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Instagram className="w-6 h-6" />
            Ver más en Instagram
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Social Proof Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
            <p className="text-gray-600">
              <span className="font-bold text-brand-600">2.5K+</span> Seguidores
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
            <p className="text-gray-600">
              <span className="font-bold text-brand-600">350+</span> Posts
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
            <p className="text-gray-600">
              <span className="font-bold text-brand-600">98%</span> Engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
