import Hero from "@/components/ui/Hero";
import CategoryRail from "@/components/ecommerce/CategoryRail";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-50">
      {/* El Navbar ya viene del layout.tsx, no hace falta ponerlo aquí */}
      
      {/* Sección Principal (Hero) */}
      <Hero />
      
      {/* Carrusel de Categorías */}
      <CategoryRail />
      
      {/* Espacio para lo que sigue */}
      <div className="py-10 text-center">
        <p className="text-gray-400 text-sm">Próximamente: Productos destacados...</p>
      </div>
    </main>
  );
}