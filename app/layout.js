// app/layout.js
import Navbar from '../Components/header';
import Footer from '../Components/footer';
import VantaBackground from '../Components/background'
import WhatsAppButton from '../Components/whatsapp'; // <-- Importalo aquí
import './globals.css'

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