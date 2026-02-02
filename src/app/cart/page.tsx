'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Trash2, ArrowLeft, MessageCircle, Plus, Minus } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  // Función para generar el mensaje de WhatsApp
  const generateWhatsAppMessage = () => {
    let message = 'Hola Kawai, quiero pedir:\n\n';
    
    cart.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} (S/ ${item.price.toFixed(2)})\n`;
    });
    
    message += `\nTotal: S/ ${totalPrice.toFixed(2)}`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppCheckout = () => {
    const phoneNumber = '51999999999';
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Estado vacío
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-brand-50 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <div className="mb-6 flex justify-center">
            <div className="bg-white p-8 rounded-full shadow-lg">
              <ShoppingBag className="w-24 h-24 text-gray-300" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-gray-600 mb-8">
            ¡No te preocupes! Tenemos muchos productos hermosos esperando por ti.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-full hover:bg-brand-600 transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a la Tienda
          </Link>
        </div>
      </div>
    );
  }

  // Carrito con productos
  return (
    <div className="min-h-screen bg-brand-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Continuar comprando
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">
            Mi Carrito
          </h1>
          <p className="text-gray-600 mt-2">
            {cart.length} {cart.length === 1 ? 'producto' : 'productos'} en tu carrito
          </p>
        </div>

        {/* Layout de 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Izquierda: Lista de productos */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-6">
                  {/* Imagen del producto */}
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-xl"
                      sizes="96px"
                    />
                  </div>

                  {/* Información del producto */}
                  <div className="flex-grow">
                    <Link
                      href={`/product/${item.id}`}
                      className="text-lg font-bold text-gray-900 hover:text-brand-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.category}
                    </p>
                    
                    {/* Control de cantidad */}
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="px-4 py-1 font-semibold text-gray-900 min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 bg-brand-100 hover:bg-brand-200 transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-4 h-4 text-brand-600" />
                        </button>
                      </div>
                      <p className="text-lg font-bold text-brand-500">
                        S/ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      S/ {item.price.toFixed(2)} c/u
                    </p>
                  </div>

                  {/* Botón eliminar */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
                    aria-label={`Eliminar ${item.name}`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Columna Derecha: Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Resumen del Pedido
              </h2>

              {/* Desglose */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">S/ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Envío</span>
                  <span className="text-sm text-brand-500 font-medium">
                    Por coordinar
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold text-brand-500">
                  S/ {totalPrice.toFixed(2)}
                </span>
              </div>

              {/* Botón WhatsApp */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Completar Pedido por WhatsApp
              </button>

              {/* Mensaje de seguridad */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Te redirigiremos a WhatsApp para finalizar tu pedido de forma segura
              </p>

              {/* Características */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Entrega en 24-48 horas</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Pago contraentrega disponible</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>Tarjeta personalizada incluida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
