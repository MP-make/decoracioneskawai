import { Clock, Lightbulb, Heart, Instagram } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Clock,
      title: 'Puntualidad',
      description: 'Cumplimos con los tiempos acordados. Tu evento es nuestra prioridad.',
    },
    {
      icon: Lightbulb,
      title: 'Creatividad',
      description: 'Diseños únicos y personalizados que superan tus expectativas.',
    },
    {
      icon: Heart,
      title: 'Calidad A1',
      description: 'Materiales premium y atención al detalle en cada creación.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-500 to-brand-600 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute transform rotate-45 -right-20 -top-20 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute transform -rotate-45 -left-20 -bottom-20 w-80 h-80 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestra Historia
          </h1>
          <p className="text-xl md:text-2xl text-brand-100">
            Decorando momentos inolvidables en Pisco desde 2020
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              En <strong className="text-brand-600">Kawai</strong>, nacimos de una pasión genuina por transformar 
              cada celebración en un recuerdo imborrable. Desde nuestros inicios en 2020, nos hemos dedicado 
              a crear experiencias visuales únicas que tocan el corazón de nuestros clientes.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Especializados en la decoración de <strong>bodas, quinceañeros, baby showers y eventos corporativos</strong>, 
              entendemos que cada detalle cuenta. No solo decoramos espacios, creamos atmósferas que reflejan 
              la esencia de cada persona y cada momento especial.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Recientemente, hemos ampliado nuestra línea con <strong className="text-brand-600">"Opitos"</strong>, 
              una colección infantil llena de ternura y color, diseñada especialmente para los más pequeños. 
              Porque sabemos que los mejores recuerdos comienzan desde la infancia.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Nuestro equipo trabaja con dedicación absoluta para que cada globo, cada arreglo floral y 
              cada elemento decorativo se convierta en parte de tu historia. En Kawai, no solo vendemos 
              decoraciones, <strong>creamos momentos que durarán para siempre</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="bg-gradient-to-b from-white to-brand-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Nuestros Valores
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Los pilares que nos definen y guían cada proyecto que realizamos
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-brand-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres ver más de nuestro trabajo?
            </h2>
            <p className="text-xl text-brand-100 mb-8">
              Síguenos en Instagram y descubre cientos de proyectos realizados
            </p>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Instagram className="w-6 h-6" />
              Ver nuestros trabajos en Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
