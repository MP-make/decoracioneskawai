'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import SearchModal from '@/components/ui/SearchModal';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems } = useCart();

  const menuLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/about' },
    { name: 'Decoraciones', href: '/decoraciones' },
    { name: 'San Valentín', href: '/san-valentin' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50">
        {/* TopBar con mensaje de San Valentín */}
        <div className="bg-brand-500 text-white text-center py-2 px-4">
          <p className="text-sm font-medium">
            🎈 ¡Modo San Valentín Activado! Regalos y Decoraciones 🎈
          </p>
        </div>

        {/* Barra Principal */}
        <div className="bg-white/90 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo - Optimizado Mobile */}
              <Link href="/" className="flex-shrink-0">
                <div className="flex flex-col">
                  <h1 className="text-xl md:text-2xl font-bold text-gray-800">Kawai</h1>
                  <p className="text-xs text-gray-500">Decorando momentos</p>
                </div>
              </Link>

              {/* Menú Desktop - Links centrados */}
              <div className="hidden md:flex items-center justify-center flex-1 px-8">
                <div className="flex space-x-8">
                  {menuLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-700 hover:text-brand-500 transition-colors duration-200 font-medium"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Iconos a la derecha */}
              <div className="hidden md:flex items-center space-x-6">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-700 hover:text-brand-500 transition-colors duration-200"
                  aria-label="Búsqueda"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button
                  className="text-gray-700 hover:text-brand-500 transition-colors duration-200"
                  aria-label="Usuario"
                >
                  <User className="w-5 h-5" />
                </button>
                <Link
                  href="/cart"
                  className="text-gray-700 hover:text-brand-500 transition-colors duration-200 relative"
                  aria-label="Carrito"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>

              {/* Botón menú móvil */}
              <div className="md:hidden flex items-center space-x-4">
                <Link
                  href="/cart"
                  className="text-gray-700 hover:text-brand-500 transition-colors duration-200 relative"
                  aria-label="Carrito"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 hover:text-brand-500 transition-colors duration-200"
                  aria-label="Menú"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Menú Móvil */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-4 pt-2 pb-4 space-y-1">
                {menuLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 text-gray-700 hover:text-brand-500 hover:bg-brand-50 rounded-md transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex items-center space-x-4 px-3 py-2 pt-4 border-t border-gray-200 mt-2">
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="text-gray-700 hover:text-brand-500 transition-colors duration-200"
                    aria-label="Búsqueda"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                  <button
                    className="text-gray-700 hover:text-brand-500 transition-colors duration-200"
                    aria-label="Usuario"
                  >
                    <User className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modal de búsqueda */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
