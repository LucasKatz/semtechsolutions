import React from 'react';



const About = () => {
  return (
    <section id="info" className="relative z-10 w-full py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* COLUMNA 1: IMAGEN CON DECORACIÓN */}
          <div className="relative group order-2 lg:order-1">
            {/* Marco decorativo de fondo */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#ff3f81]/20 z-0"></div>

            {/* Contenedor de la imagen */}
            <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 p-2 shadow-2xl overflow-hidden">
              <div className="aspect-[4/5] md:aspect-video lg:aspect-[4/5] bg-[#23153c] relative flex items-center justify-center">
                {/* ESPACIO PARA TU IMAGEN */}
                <img
                  src="/semtech.png"
                  alt="Soluciones IT"
                  className="w-full h-full object-cover opacity-60 mix-blend-lighten group-hover:opacity-90 transition-opacity duration-500"
                />
                {/* Overlay decorativo (si no hay imagen aún) */}
                <div className="absolute inset-0 flex items-center justify-center text-white/10 pointer-events-none">
                  <span className="text-sm tracking-widest uppercase">Espacio para Imagen</span>
                </div>
              </div>
            </div>

            {/* Elemento flotante decorativo */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff3f81]/10 rounded-full blur-3xl"></div>
          </div>

          {/* COLUMNA 2: TEXTO */}
          <div className="order-1 lg:order-2">
            <h4 className="text-[#ff3f81] uppercase tracking-[0.3em] text-xs font-bold mb-4">
              Nuestra Esencia
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Expertos en transformar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3f81] to-purple-400">
                desafíos en soluciones.
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                En nuestro núcleo, somos facilitadores tecnológicos. Entendemos que cada empresa, desde la PyME local hasta la gran corporación, enfrenta retos técnicos únicos que requieren una visión estratégica y ejecución precisa.
              </p>
              <p>
                No solo reparamos sistemas; construimos infraestructuras resilientes. Nuestro enfoque se centra en la prevención y la optimización, asegurando que tu única preocupación sea hacer crecer tu negocio mientras nosotros gestionamos el motor digital que lo impulsa.
              </p>
            </div>

            {/* Pequeña lista de valores/puntos clave */}
            <ul className="mt-10 space-y-4">
              {['Atención personalizada 24/7', 'Escalabilidad garantizada', 'Seguridad de grado empresarial'].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-white text-sm font-semibold tracking-wider uppercase">
                  <span className="w-6 h-[1px] bg-[#ff3f81]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

