import "./postVinil.css"
import { gsap } from "gsap"
import { useRef, useEffect } from "react"

export const Post = () => {
    const viniloRef = useRef(null)
    const shadowRef = useRef(null)
    const masterRef = useRef(null)

    useEffect(() => {
        const el = viniloRef.current
        const sh = shadowRef.current
        if (!el || !sh) return

        const FLIP          = 0.6  // duración de cada mitad del giro
        const PAUSE_CONTRA  = 7    // tiempo en contraportada
        const PAUSE_PORTADA = 2    // tiempo en portada

        gsap.set(el, { rotationX: 90, opacity: 0 })
        gsap.set(sh, { scaleX: 0.3,   opacity: 0 })

        const master = gsap.timeline()
        masterRef.current = master

        // Entrada
        master
            .to(el, { rotationX: 0, opacity: 1, duration: 1, ease: "power3.out" }, 3)
            .to(sh, { scaleX: 1,   opacity: 1, duration: 1, ease: "power3.out" }, 3)

        // Loop
        const loop = gsap.timeline({ repeat: -1 })

        // Giro portada → contraportada (sleeve y sombra en paralelo)
        loop
            .to(el, { rotationY: -90,  scale: 0.97, duration: FLIP, ease: "power2.in"  }, 0)
            .to(sh, { scaleX: 0.08, opacity: 0.15,  duration: FLIP, ease: "power2.in"  }, 0)
            .to(el, { rotationY: -180, scale: 1,    duration: FLIP, ease: "power2.out" }, FLIP)
            .to(sh, { scaleX: 1,    opacity: 1,     duration: FLIP, ease: "power2.out" }, FLIP)

        // Pausa contraportada
        loop.to({}, { duration: PAUSE_CONTRA })

        // Giro contraportada → portada (sleeve y sombra en paralelo)
        const t2 = FLIP * 2 + PAUSE_CONTRA
        loop
            .to(el, { rotationY: -270, scale: 0.97, duration: FLIP, ease: "power2.in"  }, t2)
            .to(sh, { scaleX: 0.08, opacity: 0.15,  duration: FLIP, ease: "power2.in"  }, t2)
            .to(el, { rotationY: -360, scale: 1,    duration: FLIP, ease: "power2.out" }, t2 + FLIP)
            .to(sh, { scaleX: 1,    opacity: 1,     duration: FLIP, ease: "power2.out" }, t2 + FLIP)

        // Pausa portada
        loop.to({}, { duration: PAUSE_PORTADA })

        master.add(loop, "+=0.1")

        return () => { master.kill() }
    }, [])

    const imageVinilo = [
        './img/portada.png',
        './img/contraportada.png'
    ]

    return (
        <div className="post-container">
            <section className="post-content">
                <div className="vinilo-scene">
                    <div className="vinilo-content" ref={viniloRef}>
                        <div className="vinilo-face front">
                            <img src={imageVinilo[0]} alt="Portada" />
                        </div>
                        <div className="vinilo-face back">
                            <img src={imageVinilo[1]} alt="Contraportada" />
                        </div>
                    </div>
                </div>
                <div className="vinilo-shadow" ref={shadowRef} />
            </section>
        </div>
    )
}