export default function ServicesPage() {
  return (
<section id="services" className="relative z-10 w-full py-24 bg-[#23153c]/50">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Título de la sección */}
    <div className="text-center mb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Nos especializamos en
      </h1>
      <div className="w-24 h-1 bg-[#ff3f81] mx-auto"></div>
    </div>

    {/* Grid de 3 columnas */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      
      {/* 1. Soporte Técnico */}
      <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff3f81]/50 transition-all duration-300 group">
        <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff3f81] to-purple-600 text-white text-4xl shadow-lg group-hover:scale-110 transition-transform">
          <i className="fas fa-tools"></i> {/* Ícono FA: Herramientas */}
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">Soporte Técnico</h2>
        <p className="text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* 2. Seguridad Informática */}
      <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff3f81]/50 transition-all duration-300 group">
        <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff3f81] to-purple-600 text-white text-4xl shadow-lg group-hover:scale-110 transition-transform">
          <i className="fas fa-user-shield"></i> {/* Ícono FA: Escudo */}
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">Seguridad Informática</h2>
        <p className="text-gray-400 leading-relaxed">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.
        </p>
      </div>

      {/* 3. Backup y Recovery */}
      <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff3f81]/50 transition-all duration-300 group">
        <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff3f81] to-purple-600 text-white text-4xl shadow-lg group-hover:scale-110 transition-transform">
          <i className="fas fa-database"></i> {/* Ícono FA: Base de datos */}
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">Backup y Recovery</h2>
        <p className="text-gray-400 leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>
      </div>

      {/* 1. Soporte Técnico */}
      <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff3f81]/50 transition-all duration-300 group">
        <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff3f81] to-purple-600 text-white text-4xl shadow-lg group-hover:scale-110 transition-transform">
          <i className="fas fa-tools"></i> {/* Ícono FA: Herramientas */}
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">Soporte Técnico</h2>
        <p className="text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* 2. Seguridad Informática */}
      <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff3f81]/50 transition-all duration-300 group">
        <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff3f81] to-purple-600 text-white text-4xl shadow-lg group-hover:scale-110 transition-transform">
          <i className="fas fa-user-shield"></i> {/* Ícono FA: Escudo */}
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">Seguridad Informática</h2>
        <p className="text-gray-400 leading-relaxed">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.
        </p>
      </div>

      {/* 3. Backup y Recovery */}
      <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff3f81]/50 transition-all duration-300 group">
        <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff3f81] to-purple-600 text-white text-4xl shadow-lg group-hover:scale-110 transition-transform">
          <i className="fas fa-database"></i> {/* Ícono FA: Base de datos */}
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">Backup y Recovery</h2>
        <p className="text-gray-400 leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>
      </div>


    </div>
  </div>
</section>
  );
}
