"use client"
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "5491140827211";
  const message = "Hola SEMTECH! Vengo desde la web y me gustaría realizar una consulta.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Efecto de Pulso/Glow */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
      
      {/* Botón Principal */}
      <div className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 transform group-hover:scale-110">
        <i className="fab fa-whatsapp text-4xl"></i>
      </div>

      {/* Tooltip opcional que aparece al hacer hover */}
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-black text-sm font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl">
        ¿En qué podemos ayudarte?
      </span>
    </a>
  );
};

export default WhatsAppButton;