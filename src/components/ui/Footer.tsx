import { Facebook, Instagram, Music2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Marca */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-brand-300">Kawai</h2>
            <p className="text-gray-300 mb-6">
              Decorando momentos inolvidables en Pisco.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-brand-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-brand-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-brand-500 transition-colors duration-300"
                aria-label="TikTok"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces de Ayuda */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ayuda</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-brand-300 transition-colors duration-200"
                >
                  Cómo comprar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-brand-300 transition-colors duration-200"
                >
                  Envíos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-brand-300 transition-colors duration-200"
                >
                  Reclamaciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-brand-300 transition-colors duration-200"
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-300 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Av. San Martín 123, Pisco</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-300 flex-shrink-0" />
                <a
                  href="tel:+51999999999"
                  className="text-gray-300 hover:text-brand-300 transition-colors duration-200"
                >
                  +51 999 999 999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-300 flex-shrink-0" />
                <a
                  href="mailto:ventas@kawai.pe"
                  className="text-gray-300 hover:text-brand-300 transition-colors duration-200"
                >
                  ventas@kawai.pe
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © 2026 Kawai. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
