import React from 'react';

const Clients = () => {
    // Lista de logos con ajuste de escala individual
    const logos = [
        { id: 1, src: '/Puma.png', alt: 'Puma', scale: 'scale-250' },
        { id: 2, src: '/Shell.png', alt: 'Shell', scale: 'scale-125' },
        { id: 3, src: '/YPF.png', alt: 'YPF', scale: 'scale-100' }, 
        { id: 4, src: '/Axion.png', alt: 'Axion', scale: 'scale-150' },
        { id: 5, src: '/Caballero2.png', alt: 'Caballero', scale: 'scale-125' },
        { id: 6, src: '/Havanatur.png', alt: 'Havanatur', scale: 'scale-125' },
        { id: 7, src: '/Fusion2.png', alt: 'Fusion2', scale: 'scale-125' },
    ];

    return (
        <section className="py-20 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Empresas que confían en nosotros
                </h2>
                <div className="w-20 h-1 bg-[#ff3f81] mx-auto"></div>
            </div>

            {/* Contenedor del Carrusel */}
            <div className="relative flex overflow-hidden bg-white/5 backdrop-blur-sm border-y border-white/10 py-10">
                
                {/* Animación Infinita */}
                <div className="flex animate-infinite-scroll whitespace-nowrap">
           
                    {[...logos, ...logos].map((logo, index) => (
                        <div 
                            key={`${logo.id}-${index}`} 
                            className="inline-flex items-center justify-center w-[250px] h-32 px-10 "
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                // La clase scale ajusta el tamaño visual relativo
                                className={`max-w-full max-h-20 w-auto h-auto object-contain transition-transform duration-300 ${logo.scale}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Gradientes laterales para suavizar los bordes */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#000] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#000] to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default Clients;

