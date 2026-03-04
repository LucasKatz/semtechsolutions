"use client"

import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
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
        /* w-full y left-0 aseguran el ancho total. bg-white o el color que prefieras */
        <header className={`s-header w-full left-0 z-50 fixed bg-black shadow-sm ${isMenuOpen ? 'menu-is-open' : ''}`}>

            <div className="s-header__block flex items-center w-full px-6 md:px-12 h-24"> {/* Aumenté h-20 a h-24 para que el logo de 150 respire */}

                {/* 1. CONTENEDOR LOGO (Izquierda) */}
                <div className="flex-1 flex justify-start">
                    <div className="s-header__logo">
                        <Link href="/">
                            <Image
                                src="/logo.jpg"
                                alt="Logo"
                                width={150} // Valor solicitado
                                height={150} // Valor solicitado
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
                            hover:bg-gray-100 hover:shadow-inner
                            ${pathname === link.href ? "font-bold text-purple-900 bg-gray-50" : "text-gray-600"}
                        `}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 3. ESPACIADOR (Derecha) */}
                {/* Este div vacío con flex-1 obliga al nav a quedarse en el centro real */}
                <div className="flex-1 hidden md:flex justify-end">
                    {/* Aquí puedes poner el icono de FaUser si quieres que se vea */}
                </div>

                {/* BOTÓN HAMBURGUESA (Móvil) */}
                <a
                    className={`s-header__menu-toggle md:hidden ${isMenuOpen ? 'is-clicked' : ''}`}
                    href="#0"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(!isMenuOpen);
                    }}
                >
                    <span className="bg-purple-900">Menu</span>
                </a>
            </div>

            {/* MENÚ MÓVIL (Overlay cuando isMenuOpen es true) */}
            <div className={`
                md:hidden fixed inset-0 bg-white z-[40] transition-transform duration-500
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
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