// app/layout.js
import Navbar from '../Components/header';
import Footer from '../Components/footer';
import VantaBackground from '../Components/background'
import WhatsAppButton from '../Components/whatsapp';
import './globals.css'

// --- CONFIGURACIÓN DE METADATA PARA SEO ---
export const metadata = {
  title: "SEMTECH | Soluciones Tecnológicas y Proyectos Industriales",
  description: "Especialistas en ingeniería y proyectos tecnológicos para empresas líderes como YPF, Shell, Puma y Axion. Innovación y eficiencia en infraestructura industrial.",
keywords: [
    "SEMTECH", 
    "proyectos industriales", 
    "soluciones tecnológicas", 
    "ingeniería argentina", 
    "automatización industrial", 
    "infraestructura",
    "mantenimiento industrial",
    "gestión de proyectos de ingeniería",
    "instalaciones industriales",
    "montajes electromecánicos",
    "servicios para empresas petroleras",
    "proveedor industrial YPF",
    "servicios para refinerías",
    "consultoría en tecnología industrial",
    "optimización de procesos industriales",
    "seguridad electrónica industrial",
    "redes y conectividad industrial",
    "desarrollo de infraestructura tecnológica",
    "obras llave en mano",
    "outsourcing de ingeniería",
    "mantenimiento preventivo y correctivo",
    "instrumentación y control",
    "tableros eléctricos industriales",
    "proyectos de energía",
    "soluciones de hardware y software industrial"
  ],  authors: [{ name: "SEMTECH" }],
  openGraph: {
    title: "SEMTECH | Soluciones Tecnológicas e Industriales",
    description: "Liderando el futuro de los proyectos tecnológicos industriales en Argentina.",
    url: "https://tu-dominio.com.ar", // Reemplazá por tu URL real
    siteName: "SEMTECH",
    images: [
      {
        url: "/logo.jpg", 
        width: 1200,
        height: 630,
        alt: "Logo SEMTECH",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      <body className="relative bg-black">
        
        {/* FONDO VANTA */}
        <div className="fixed inset-0 -z-20 w-full h-full">
          <VantaBackground />
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>

        <Navbar />
        
        <main className="relative z-10">
          {children}
        </main>
        
        <Footer />

        {/* BOTÓN DE WHATSAPP AL FINAL */}
        <WhatsAppButton />
      </body>
    </html>
  )
}