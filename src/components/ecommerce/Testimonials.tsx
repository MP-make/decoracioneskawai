'use client';

import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  initials: string;
  review: string;
  rating: number;
  avatar?: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'María F.',
      initials: 'MF',
      review: '¡La decoración de 15 años quedó hermosa! Superaron mis expectativas.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Carlos R.',
      initials: 'CR',
      review: 'El pedido llegó puntual a Pisco y los chocolates estaban buenísimos.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ana P.',
      initials: 'AP',
      review: 'Excelente atención por WhatsApp, muy amables.',
      rating: 5,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Miles de clientes satisfechos confían en nosotros para sus momentos especiales
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 relative transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-brand-500" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {/* Avatar with Initials */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                {/* Name */}
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">Cliente verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-brand-600 mb-2">500+</p>
              <p className="text-gray-600">Eventos Decorados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-600 mb-2">98%</p>
              <p className="text-gray-600">Clientes Satisfechos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-600 mb-2">4 años</p>
              <p className="text-gray-600">En el mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
