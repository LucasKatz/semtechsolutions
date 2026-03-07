"use client"
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative z-10 w-full bg-[#23153c]/95 border-t border-white/5 py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* PARTE SUPERIOR: 3 COLUMNAS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

                    {/* Direccion */}
                    <div className="lg:col-span-5">
                        <h4 className="text-[#ff3f81] uppercase tracking-[0.2em] text-xs font-bold mb-6">
                            Dónde encontrarnos
                        </h4>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Ramón Falcón 5939<br />
                            CABA <br />
                            CP 1408
                        </p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[#ff3f81] uppercase tracking-[0.2em] text-xs font-bold mb-6">
                            Síguenos
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://www.instagram.com/semtech.soluciones?igsh=MWVhbXlocXVmdGx0dA=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ff3f81] transition-colors text-sm">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/share/1ArMujbRCq/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ff3f81] transition-colors text-sm">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/semtech-soluciones-53a9723b5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ff3f81] transition-colors text-sm">
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="lg:col-span-4">
                        <h4 className="text-[#ff3f81] uppercase tracking-[0.2em] text-xs font-bold mb-6">
                            Contáctanos
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#contact" className="text-white hover:text-[#ff3f81] transition-colors text-sm">
                                    soporte@semtechsoluciones.com.ar
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/5491140827211"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ff3f81] transition-colors text-sm"
                                >
                                    +54 9 11 4082-7211
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* PARTE INFERIOR: COPYRIGHT Y BOTÓN TOP */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">

                    <div className="text-gray-500 text-[11px] uppercase tracking-widest flex flex-col md:flex-row md:gap-4 items-center">
                        <span>© Copyright {new Date().getFullYear()} Semtech</span>
                        <span className="hidden md:block text-gray-700">|</span>
                        <span>Design by <a href="#" className="text-white hover:text-[#ff3f81]">Lucas Katz</a></span>
                    </div>

                    {/* Botón Volver Arriba */}
                    <div className="group">
                        <a
                            href="#intro"
                            className="flex items-center gap-3 text-white uppercase tracking-[0.2em] text-[10px] font-bold transition-all hover:text-[#ff3f81]"
                        >
                            <span>Volver arriba</span>
                            <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full group-hover:border-[#ff3f81] transition-all">
                                <FaArrowUp className="text-[10px]" />
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;