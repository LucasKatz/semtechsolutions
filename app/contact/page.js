"use client"

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    razonSocial: '',
    asunto: '',
    mensaje: ''
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validación de teléfono: Solo permite números
    if (name === 'telefono') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, [name]: onlyNums });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      toast.warn("Por favor, completa los campos obligatorios.");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error("El formato del email no es válido.");
      return false;
    }
    if (formData.telefono && formData.telefono.length < 8) {
        toast.warn("El número de teléfono parece incompleto.");
        return false;
    }
    return true;
  };

const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        toast.success("¡Mensaje enviado con éxito!", { theme: "dark" });
        setFormData({ nombre: '', email: '', telefono: '', razonSocial: '', asunto: '', mensaje: '' });
      })
      .catch((err) => {
        toast.error("Error al enviar. Revisá la consola.");
        console.error("Error de EmailJS:", err);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="relative z-10 w-full py-24 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">¿Tienes un proyecto en mente?</h1>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-sm p-8 md:p-12 border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              
              {/* Nombre */}
              <div className="relative group">
                <input name="nombre" type="text" placeholder=" " value={formData.nombre} onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#ff3f81] transition-colors" />
                <label className="absolute left-0 top-3 text-gray-500 uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-4 peer-focus:text-[#ff3f81] peer-[:not(:placeholder-shown)]:-top-4">
                  Nombre *
                </label>
              </div>

              {/* Email */}
              <div className="relative group">
                <input name="email" type="email" placeholder=" " value={formData.email} onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#ff3f81] transition-colors" />
                <label className="absolute left-0 top-3 text-gray-500 uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-4 peer-focus:text-[#ff3f81] peer-[:not(:placeholder-shown)]:-top-4">
                  Email *
                </label>
              </div>

              {/* Teléfono */}
              <div className="relative group">
                <input name="telefono" type="tel" placeholder=" " value={formData.telefono} onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#ff3f81] transition-colors" />
                <label className="absolute left-0 top-3 text-gray-500 uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-4 peer-focus:text-[#ff3f81] peer-[:not(:placeholder-shown)]:-top-4">
                  Teléfono (Solo números)
                </label>
              </div>

              {/* Razón Social */}
              <div className="relative group">
                <input name="razonSocial" type="text" placeholder=" " value={formData.razonSocial} onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#ff3f81] transition-colors" />
                <label className="absolute left-0 top-3 text-gray-500 uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-4 peer-focus:text-[#ff3f81] peer-[:not(:placeholder-shown)]:-top-4">
                  Razón Social
                </label>
              </div>

              {/* Asunto */}
              <div className="relative group md:col-span-2">
                <input name="asunto" type="text" placeholder=" " value={formData.asunto} onChange={handleChange}
                  className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#ff3f81] transition-colors" />
                <label className="absolute left-0 top-3 text-gray-500 uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-4 peer-focus:text-[#ff3f81] peer-[:not(:placeholder-shown)]:-top-4">
                  Asunto *
                </label>
              </div>
            </div>

            {/* Mensaje */}
            <div className="relative group pt-4">
              <textarea name="mensaje" placeholder=" " rows="4" value={formData.mensaje} onChange={handleChange}
                className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#ff3f81] transition-colors resize-none"></textarea>
              <label className="absolute left-0 top-3 text-gray-500 uppercase tracking-widest text-xs font-bold transition-all peer-focus:-top-4 peer-focus:text-[#ff3f81] peer-[:not(:placeholder-shown)]:-top-4">
                Mensaje *
              </label>
            </div>

            <div className="flex justify-center pt-10">
              <button
                type="submit"
                disabled={isSending}
                className={`px-16 py-5 bg-[#ff3f81] text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSending ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </section>
  );
};

export default ContactForm;
