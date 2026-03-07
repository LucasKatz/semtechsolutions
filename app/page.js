import Navbar from "../Components/header";
import ServicesPage from "./services/page";
import ContactForm from "./contact/page";
import About from "./info/page";
import Clients from "./clients/page";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main>
        {/* SECCIÓN INTRO (Ya la tienes) */}
        <section id="intro" className="relative w-full h-screen flex items-center justify-center overflow-hidden">

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

            {/* Etiqueta pequeña arriba */}
            <span className="block text-[#ff3f81] bg-white uppercase tracking-[0.3em] text-xs font-bold mb-4 animate-fade-in">
              Soluciones Informáticas Especializadas
            </span>

            {/* Título Gigante */}
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-8">
              Mantenimiento y <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3f81] to-purple-400">
                consultoria informatica.
              </span>
            </h1>

            {/* Párrafo descriptivo */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ">
              "Soluciones IT sin complicaciones para todo tipo de organizaciones."
            </p>

            {/* Botones estilo Tyndale con Tailwind */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="#services" className="px-10 py-4 bg-[#ff3f81] text-white uppercase tracking-widest text-xs font-bold rounded-sm hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto">
                Ver Servicios
              </a>
              <a href="#contact" className="px-10 py-4 border border-white/20 text-white uppercase tracking-widest text-xs font-bold rounded-sm hover:border-[#ff3f81] hover:text-[#ff3f81] transition-all duration-300 w-full md:w-auto">
                Contacto
              </a>
            </div>

          </div>

          {/* Decoración del mouse scroll */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#ff3f81] to-transparent"></div>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
          </div>

        </section>

        {/* SECCIÓN SERVICIOS */}
        <section id="services" className="relative w-full min-h-screen bg-[#23153c] py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <ServicesPage />
          </div>
        </section>

        {/* SECCIÓN NOSOTROS */}
        <section id="info" className="relative w-full min-h-screen bg-black py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[#ff3f81] text-4xl font-bold mb-12">Sobre Nosotros</h2>
            <About/>
          </div>
        </section>

{/* SECCIÓN CLIENTES */}
           <section id="services" className="relative w-full min-h-screen bg-[#23153c] py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Clients />
          </div>
        </section>

        {/* SECCIÓN CONTACTO */}
        <section id="contact" className="relative w-full min-h-screen bg-black py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[#ff3f81] text-4xl font-bold mb-12">Contacto</h2>
            <ContactForm/>
          </div>
        </section>
      </main>
    </div>
  );
}