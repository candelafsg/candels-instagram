import './postext.css'
import '../PostVinil/postVinil.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Text = () => {
    const containerRef = useRef(null)
    const textOneRef   = useRef(null)
    const textTwoRef   = useRef(null)
    const textThreeRef = useRef(null)
    const textFourRef  = useRef(null)
    const textFiveRef  = useRef(null)
    const textSixRef   = useRef(null)
    const textSevenRef = useRef(null)
    const textEightRef = useRef(null)
    const textNineRef  = useRef(null)
    const textTenRef   = useRef(null)
    const textElevenRef = useRef(null)
    const textTwelveRef = useRef(null)

    useEffect(() => {
        const allRefs = [
            textOneRef, textTwoRef, textThreeRef,
            textFourRef, textFiveRef, textSixRef,
            textSevenRef, textEightRef, textNineRef,
            textTenRef, textElevenRef, textTwelveRef
        ]

        // Estado inicial: todas ocultas por la derecha
        allRefs.forEach(ref => {
            if (ref.current) {
                gsap.set(ref.current, { clipPath: 'inset(0 100% 0 0)' })
            }
        })

        const APPEAR = { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power2.out' }
        // ← borde derecho avanza hacia la derecha = texto se borra de izq a der
        const DISAPPEAR = { clipPath: 'inset(0 100% 0 0)', duration: 0.6, ease: 'power2.in' }

        gsap.timeline()
            // ── APARICIÓN ──────────────────────────────
            // Header
            .to(textOneRef.current,   { ...APPEAR, delay: 0.5 })
            .to(textTwoRef.current,   { ...APPEAR }, '-=0.4')
            .to(textThreeRef.current, { ...APPEAR }, '-=0.4')

            // Main
            .to(textEightRef.current, { ...APPEAR }, '+=0.3')
            .to(textSixRef.current,   { ...APPEAR }, '-=0.4')
            .to(textSevenRef.current, { ...APPEAR }, '-=0.4')
            .to(textNineRef.current,  { ...APPEAR }, '-=0.4')
            .to(textFiveRef.current,  { ...APPEAR }, '-=0.4')
            .to(textFourRef.current,  { ...APPEAR }, '-=0.4')

            // Footer
            .to(textTwelveRef.current, { ...APPEAR }, '+=0.3')
            .to(textTenRef.current,    { ...APPEAR }, '-=0.4')
            .to(textElevenRef.current, { ...APPEAR }, '-=0.4')

            // ── PAUSA ───────────────────────────────────
            .to({}, { duration: 3 })

            // ── DESAPARICIÓN — completamente alternado ──────────
            // Mezclamos todo: main, footer, header en secuencia alternada
            .to(textFiveRef.current,    { ...DISAPPEAR })      // Main
            .to(textTwelveRef.current,  { ...DISAPPEAR }, '-=0.3')  // Footer
            .to(textTwoRef.current,     { ...DISAPPEAR }, '-=0.3')  // Header
            .to(textEightRef.current,   { ...DISAPPEAR }, '-=0.3')  // Main
            .to(textElevenRef.current,  { ...DISAPPEAR }, '-=0.3')  // Footer
            .to(textThreeRef.current,   { ...DISAPPEAR }, '-=0.3')  // Header
            .to(textFourRef.current,    { ...DISAPPEAR }, '-=0.3')  // Main
            .to(textTenRef.current,     { ...DISAPPEAR }, '-=0.3')  // Footer
            .to(textOneRef.current,     { ...DISAPPEAR }, '-=0.3')  // Header
            .to(textNineRef.current,    { ...DISAPPEAR }, '-=0.3')  // Main
            .to(textSixRef.current,     { ...DISAPPEAR }, '-=0.3')  // Main
            .to(textSevenRef.current,   { ...DISAPPEAR }, '-=0.3')  // Main

        return () => gsap.globalTimeline.clear()
    }, [])

    return (
        <div
            className="post-text"
            ref={containerRef}
            style={{
                border: '2px solid black',
                position: 'relative',
                width: '1080px',
                height: '1920px'
            }}
        >
            <div className="header">
                <p ref={textOneRef}   className="text-one txt">I'LL BE YOUR SINGER</p>
                <p ref={textTwoRef}   className="text-two txt">YOU'LL BE</p>
                <p ref={textThreeRef} className="text-three txt" style={{ textAlign: 'end' }}>MY SONG</p>
            </div>

            <div className="main">
                <p ref={textFourRef}  className="text-four txt">I'LL PLAY YOU LIKE</p>
                <p ref={textFiveRef}  className="text-five txt">MUSIC</p>
                <p ref={textSixRef}   className="text-six txt">I'LL SING YOU LIKE</p>
                <p ref={textSevenRef} className="text-seven txt">A SONG</p>
                <p ref={textEightRef} className="text-eight txt">LAY YOU DOWN GENTLE</p>
                <p ref={textNineRef}  className="text-nine txt">LOVE YOU STRONG</p>
            </div>

            <div className="footer">
                <p ref={textTenRef} className="text-ten txt">1970</p>
                <div className="artist">
                    <p ref={textElevenRef} className="text-eleven txt">MC5</p>
                    <p ref={textTwelveRef} className="text-twelve txt">LET ME TRY</p>
                </div>
            </div>
        </div>
    )
}

export default Text