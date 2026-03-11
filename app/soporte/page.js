export default function Soporte() {
    return (
        <section id="info" className="relative z-10 w-full py-24 px-6 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff3f81]/40 transition-all duration-500 group overflow-hidden relative mt-[5%]">

                {/* COLUMNA IZQUIERDA: ICONO/LOGO */}
                <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff3f81] to-purple-800 text-white text-5xl shadow-2xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 relative z-10">
                        <i className="fas fa-laptop-code"></i>
                    </div>
                    {/* Efecto de brillo de fondo al pasar el mouse */}
                    <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#ff3f81]/10 rounded-full blur-3xl group-hover:bg-[#ff3f81]/20 transition-colors" />
                </div>

                {/* COLUMNA DERECHA: TEXTO EXTENSO */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#ff3f81] transition-colors tracking-tight">
                        Soporte Técnico Integral
                    </h2>

                    <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                        <p>
                            Ofrecemos un servicio de **soporte informático de alta disponibilidad** diseñado para garantizar la continuidad operativa de su empresa. No solo reparamos equipos, sino que gestionamos toda su infraestructura digital.
                        </p>
                        <p>
                            Nuestro alcance incluye el mantenimiento preventivo y correctivo de estaciones de trabajo, optimización de servidores críticos y gestión de redes. Nos especializamos en entornos industriales donde la estabilidad del hardware es fundamental para la producción.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 mt-6">
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check text-[#ff3f81]"></i> Mantenimiento de Servidores
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check text-[#ff3f81]"></i> Seguridad Perimetral
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check text-[#ff3f81]"></i> Backup en la Nube
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check text-[#ff3f81]"></i> Soporte Remoto 24/7
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}