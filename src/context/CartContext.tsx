'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/data/products';

// Tipo para los items del carrito
export interface CartItem extends Product {
  quantity: number;
}

// Tipo del contexto
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  totalItems: number;
  totalPrice: number;
  clearCart: () => void;
}

// Crear el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider del carrito
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Cargar carrito desde localStorage al montar (solo en cliente)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('kawai-cart');
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart));
        } catch (error) {
          console.error('Error al cargar el carrito:', error);
        }
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie (solo en cliente)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('kawai-cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Agregar producto al carrito
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Si ya existe, incrementar cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Si no existe, agregarlo
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Remover producto del carrito
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (id: string, quantity: number) => {
    // No permitir cantidades menores a 1
    if (quantity < 1) return;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Limpiar todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Calcular total de items
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calcular precio total
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el carrito
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
}
