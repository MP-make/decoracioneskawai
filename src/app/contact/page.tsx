'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    celular: '',
    tipoEvento: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por ahora solo UI, no funcional
    console.log('Formulario enviado:', formData);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contacto
          </h1>
          <p className="text-xl text-brand-100">
            Estamos aquí para hacer realidad tus ideas
          </p>
        </div>
      </section>

      {/* Main Content - 2 Columnas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Columna Izquierda - Información de Contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Hablemos
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ¿Tienes un evento próximo? Contáctanos y juntos crearemos la decoración perfecta 
                para ese momento especial.
              </p>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/51999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    +51 999 999 999
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Respuesta inmediata</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <a
                    href="mailto:ventas@kawai.pe"
                    className="text-2xl font-bold text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    ventas@kawai.pe
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Te respondemos en 24h</p>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Dirección</h3>
                  <p className="text-lg text-gray-700 font-semibold">
                    Av. San Martín 123
                  </p>
                  <p className="text-gray-600">Pisco, Ica - Perú</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Horario de Atención</h3>
                  <p className="text-gray-700">Lunes a Sábado</p>
                  <p className="text-lg font-semibold text-brand-600">9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Mapa Simulado */}
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-64 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Mapa de Ubicación</p>
                <p className="text-sm text-gray-500 mt-2">Av. San Martín 123, Pisco</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Envíanos un mensaje
            </h2>
            <p className="text-gray-600 mb-8">
              Completa el formulario y nos pondremos en contacto contigo
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none"
                  placeholder="Ej: María García"
                  required
                />
              </div>

              {/* Celular */}
              <div>
                <label htmlFor="celular" className="block text-sm font-semibold text-gray-700 mb-2">
                  Celular / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="celular"
                  value={formData.celular}
                  onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none"
                  placeholder="Ej: 999 999 999"
                  required
                />
              </div>

              {/* Tipo de Evento */}
              <div>
                <label htmlFor="tipoEvento" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de evento *
                </label>
                <select
                  id="tipoEvento"
                  value={formData.tipoEvento}
                  onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none bg-white"
                  required
                >
                  <option value="">Selecciona un tipo de evento</option>
                  <option value="boda">Boda</option>
                  <option value="quince">Quinceañero</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="cumpleanos">Cumpleaños</option>
                  <option value="bautizo">Bautizo</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cuéntanos sobre tu evento *
                </label>
                <textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Ej: Necesito decoración para mi boda el 15 de marzo. Me gustaría algo elegante con colores rosados..."
                  required
                />
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-500 to-brand-600 text-white font-bold py-4 px-6 rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Campos obligatorios
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
