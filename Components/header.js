"use client"

import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; // Importamos los iconos
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
    { label: 'Inicio', href: '#intro' },
    { label: 'Servicios', href: '#services' },
    { label: 'Nosotros', href: '#info' },
    { label: 'Contacto', href: '#contact' },
];

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-is-open');
        } else {
            document.body.classList.remove('menu-is-open');
        }
    }, [isMenuOpen]);

    return (
        <header className={`s-header w-full left-0 z-50 fixed bg-black shadow-sm ${isMenuOpen ? 'menu-is-open' : ''}`}>

            <div className="s-header__block flex items-center w-full px-6 md:px-12 h-24">

                {/* 1. CONTENEDOR LOGO (Izquierda) */}
                <div className="flex-1 flex justify-start">
                    <div className="s-header__logo">
                        <Link href="/">
                            <Image
                                src="/logo.jpg"
                                alt="Logo"
                                width={150}
                                height={150}
                                priority
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>

                {/* 2. LINKS (Centro exacto) */}
                <nav className="hidden md:flex items-center justify-center">
                    <ul className="flex flex-row gap-2 list-none m-0 p-0">
                        {links.map((link) => (
                            <li key={link.label} className="m-0">
                                <Link
                                    href={link.href}
                                    className={`
                                        px-4 py-2 rounded-md transition-all duration-300
                                        hover:bg-gray-100/10 hover:text-white
                                        ${pathname === link.href ? "font-bold text-purple-900 bg-gray-50" : "text-gray-400"}
                                    `}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 3. REDES SOCIALES (Derecha - Solo Desktop) */}
                <div className="flex-1 hidden md:flex justify-end items-center gap-6">
                    <a href="https://www.linkedin.com/in/semtech-soluciones-53a9723b5" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                        <FaLinkedin size={22} />
                    </a>
                    <a href="https://www.instagram.com/semtech.soluciones?igsh=MWVhbXlocXVmdGx0dA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e4405f] transition-colors">
                        <FaInstagram size={22} />
                    </a>
                    <a href="https://www.facebook.com/share/1ArMujbRCq/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877f2] transition-colors">
                        <FaFacebook size={22} />
                    </a>
                </div>

                {/* BOTÓN HAMBURGUESA (Móvil) */}
                <a
                    className={`s-header__menu-toggle md:hidden ${isMenuOpen ? 'is-clicked' : ''} ml-4`}
                    href="#0"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(!isMenuOpen);
                    }}
                >
                    <button className="flex flex-col gap-1.5 p-2 bg-transparent border-2 border-white rounded-md">
                        <span className="block w-8 h-1 bg-white"></span>
                        <span className="block w-8 h-1 bg-white"></span>
                        <span className="block w-8 h-1 bg-white"></span>
                    </button>
                </a>
            </div>

            {/* MENÚ MÓVIL (Overlay) */}
            <div className={`
                md:hidden fixed inset-0 bg-white z-[40] transition-transform duration-500
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 p-2 text-gray-800 hover:text-purple-900 transition-colors"
                    aria-label="Cerrar menú"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <nav className="flex flex-col items-center justify-center h-full space-y-8">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl ${pathname === link.href ? "font-bold text-purple-900" : "text-gray-600"}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;