import Hero from "@/components/ui/Hero";
import CategoryRail from "@/components/ecommerce/CategoryRail";
import FeaturedProducts from "@/components/ecommerce/FeaturedProducts";
import Testimonials from "@/components/ecommerce/Testimonials";
import InstagramFeed from "@/components/ecommerce/InstagramFeed";

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
      
      {/* Testimonios de Clientes */}
      <Testimonials />
      
      {/* Feed de Instagram */}
      <InstagramFeed />
    </main>
  );
}