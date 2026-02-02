import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar"; // <--- Importamos tu nueva creación

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kawai | Decorando Momentos",
  description: "Regalos, decoraciones y sorpresas en Pisco, Perú.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-50`}>
        {/* Aquí va el Navbar para que sea visible en toda la web */}
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}