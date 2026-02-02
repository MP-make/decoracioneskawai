import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 🔥 ESTA ES LA LÍNEA QUE TE FALTA PARA ARREGLAR EL 404: */
  output: "standalone",

  /* Opciones de React */
  reactStrictMode: true,

  /* Ignorar errores durante el build */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  /* Configuración de Imágenes */
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
    unoptimized: true,
  },
};

export default nextConfig;