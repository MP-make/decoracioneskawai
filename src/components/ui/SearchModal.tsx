'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus en el input cuando se abre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Limpiar búsqueda al cerrar
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Filtrar productos
  const filteredProducts = query.trim()
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
      {/* Overlay oscuro */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal de búsqueda */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
        {/* Input de búsqueda */}
        <div className="flex items-center gap-3 p-6 border-b border-gray-200">
          <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar productos por nombre o categoría..."
            className="flex-1 text-lg outline-none text-gray-900 placeholder-gray-400"
          />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Cerrar búsqueda"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Resultados */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-12 text-center text-gray-400">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg">Escribe para buscar productos...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="p-4 space-y-2">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 hover:bg-brand-50 rounded-2xl transition-colors group"
                >
                  {/* Imagen del producto */}
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-xl"
                      sizes="64px"
                    />
                  </div>

                  {/* Información del producto */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-brand-500 transition-colors truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>

                  {/* Precio */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-brand-500">
                      S/ {product.price.toFixed(2)}
                    </p>
                    {product.tag && (
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold">
                        {product.tag}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center text-gray-400">
              <p className="text-lg mb-2">No se encontraron productos</p>
              <p className="text-sm">
                Intenta con otro término de búsqueda
              </p>
            </div>
          )}
        </div>

        {/* Footer con sugerencia */}
        {query.trim() === '' && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-500 text-center">
              💡 Tip: Puedes buscar por nombre o categoría (ej: "desayuno", "flores", "peluche")
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
