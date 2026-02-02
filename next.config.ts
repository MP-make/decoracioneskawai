import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Opciones de React */
  reactStrictMode: true,

  /* IMPORTANTE: Ignorar errores de TypeScript y ESLint durante el build de Vercel */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  /* Configuración de Imágenes (para que funcionen las de Unsplash y locales) */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
    // Permitir imágenes locales sin optimización estricta si es necesario
    unoptimized: true,
  },
};

export default nextConfig;
