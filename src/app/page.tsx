import Hero from "@/components/ui/Hero";
import CategoryRail from "@/components/ecommerce/CategoryRail";
import FeaturedProducts from "@/components/ecommerce/FeaturedProducts";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-50">
      {/* El Navbar ya viene del layout.tsx, no hace falta ponerlo aquí */}
      
      {/* Sección Principal (Hero) */}
      <Hero />
      
      {/* Carrusel de Categorías */}
      <CategoryRail />
      
      {/* Productos Destacados */}
      <FeaturedProducts />
    </main>
  );
}