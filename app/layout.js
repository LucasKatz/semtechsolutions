// app/layout.js
import Navbar from '../Components/header';
import Footer from '../Components/footer';
import VantaBackground from '../Components/background'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="relative">
        <Navbar />
        <VantaBackground />
        <main className="relative z-10">
          {children}
        </main>
          <Footer />
      </body>
    </html>
  )
}
