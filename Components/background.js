"use client" // Importante: Vanta solo corre en el cliente

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

export default function VantaBackground() {
    const vantaRef = useRef(null)
    const [vantaEffect, setVantaEffect] = useState(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,

                    // --- ESTO ES LO QUE ESTABA FALTANDO ---
                    color: 0xff3f81,           // Color de los puntos
                    backgroundColor: 0x0, // Color del fondo

                    points: 15.00,
                    maxDistance: 20.00,
                    spacing: 15.00,

                    // ESTA ES LA CLAVE PARA QUE LAS LÍNEAS TENGAN COLOR:
                    showDots: true,
                })
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div
            ref={vantaRef}
            className="fixed inset-0 -z-10 w-full h-full"
        /* El -z-10 lo manda al fondo de todo */
        />
    )
}