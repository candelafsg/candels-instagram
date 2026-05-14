import './postext.css'
import '../PostVinil/postVinil.css'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import TextType from '../../../components/text/TypeText.jsx'

const Text = () => {
    const containerRef = useRef(null)
    const textOneRef = useRef(null)
    const textTwoRef = useRef(null)
    const textThreeRef = useRef(null)
    const textFourRef = useRef(null)
    const textFiveRef = useRef(null)
    const textSixRef = useRef(null)
    const textSevenRef = useRef(null)
    const textEightRef = useRef(null)
    const textNineRef = useRef(null)
    const textTenRef = useRef(null)
    const textElevenRef = useRef(null)
    const textTwelveRef = useRef(null)
    const textTwentyRef = useRef(null)
    const imageRef = useRef(null)
    const image2Ref = useRef(null)
    const image3Ref = useRef(null)
    const artistaCancionRef = useRef(null)
    const smileRef = useRef(null)
    const iconoRef = useRef(null)

    const [showSong, setShowSong] = useState(false)
    const [showArtist, setShowArtist] = useState(false)
    const [showSmile, setShowSmile] = useState(false)

    useEffect(() => {
        const allRefs = [
            textOneRef, textTwoRef, textThreeRef,
            textFourRef, textFiveRef, textSixRef,
            textSevenRef, textEightRef, textNineRef,
            textTenRef, textElevenRef, textTwelveRef, textTwentyRef
        ]

        allRefs.forEach(ref => {
            if (ref.current) {
                gsap.set(ref.current, { clipPath: 'inset(0 100% 0 0)' })
            }
        })

        gsap.set(imageRef.current, { clipPath: 'inset(0 100% 0 0)' })
        gsap.set(image2Ref.current, { clipPath: 'inset(0 100% 0 0)' })
        gsap.set(image3Ref.current, { clipPath: 'inset(0 100% 0 0)' })

        gsap.set(artistaCancionRef.current, { opacity: 0 })
        gsap.set(smileRef.current, { opacity: 0 })
        gsap.set(iconoRef.current, { clipPath: 'inset(0 100% 0 0)' })

        const APPEAR = { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power2.out' }
        const DISAPPEAR = { clipPath: 'inset(0 100% 0 0)', duration: 0.6, ease: 'power2.in' }

        gsap.timeline()
            .to(textOneRef.current, { ...APPEAR, delay: 2.0 })
            .to({}, { duration: 0.8 })
            .to(textTwoRef.current, { ...APPEAR }, '-=0.4')
            .to(textThreeRef.current, { ...APPEAR }, '-=0.4')
            .to({}, { duration: 0.8 })
            .to(textEightRef.current, { ...APPEAR }, '+=0.3')
            .to(textSixRef.current, { ...APPEAR }, '-=0.4')
            .to(textSevenRef.current, { ...APPEAR }, '-=0.4')
            .to(textNineRef.current, { ...APPEAR }, '-=0.4')
            .to(textFiveRef.current, { ...APPEAR }, '-=0.4')
            .to(textFourRef.current, { ...APPEAR }, '-=0.4')
            .to(textTwelveRef.current, { ...APPEAR }, '+=0.3')
            .to(textTenRef.current, { ...APPEAR }, '-=0.4')
            .to(textTwentyRef.current, { ...APPEAR }, '-=0.4')
            .to(textElevenRef.current, { ...APPEAR }, '-=0.4')
            .to({}, { duration: 1.5 })
            .to(textFiveRef.current, { ...DISAPPEAR })
            .to(textTwelveRef.current, { ...DISAPPEAR }, '-=0.3')
            .to(textTwentyRef.current, { ...DISAPPEAR }, '-=0.3')
            .to(textTwoRef.current, { ...DISAPPEAR }, '-=0.3')
            .to(textEightRef.current, { ...DISAPPEAR }, '-=0.3')
            .to(textElevenRef.current, { ...DISAPPEAR }, '-=0.3')
            .to(textThreeRef.current, { ...DISAPPEAR }, '-=0.3')
            .to(textFourRef.current, { ...DISAPPEAR }, '-=0.3')
            .to(textTenRef.current, { ...DISAPPEAR }, '-=0.3')
            .to(textOneRef.current, { ...DISAPPEAR }, '-=0.3')
            .to(textNineRef.current, { ...DISAPPEAR }, '-=0.3')
            .to(textSixRef.current, { ...DISAPPEAR }, '-=0.3')
            .to(textSevenRef.current, { ...DISAPPEAR }, '-=0.3')
            .to({}, { duration: 1 })

            // Slider imágenes
            .to(imageRef.current, { clipPath: 'inset(0 0% 0 0)', duration: 0.3, ease: "power2.out" })
            .to(image2Ref.current, { clipPath: 'inset(0 0% 0 0)', duration: 0.3, ease: "power2.out" }, '+=1.0')
            .to(image3Ref.current, { clipPath: 'inset(0 0% 0 0)', duration: 0.3, ease: "power2.out" }, '+=1.0')
            .to({}, { duration: 1.0 })
            .to(image3Ref.current, { clipPath: 'inset(0 100% 0 0)', duration: 0.3, ease: "power2.in" })
            .to({}, { duration: 0.5 })
            .to(image2Ref.current, { clipPath: 'inset(0 100% 0 0)', duration: 0.3, ease: "power2.in" })
            .to({}, { duration: 0.5 })
            .to(imageRef.current, { clipPath: 'inset(0 100% 0 0)', duration: 0.3, ease: "power2.in" })
            .to({}, { duration: 1.0 })

            // Aparecer bloque artista-cancion + disparar LET ME TRY
            .to(artistaCancionRef.current, { opacity: 1, duration: 0.3 })
            .call(() => setShowSong(true))

            // Pausa y disparar MC5
            .to({}, { duration: 1.5 })
            .call(() => setShowArtist(true))

            // Pausa después de que MC5 termine de escribirse (1.5s)
            .to({}, { duration: 1.5 })

            // Ocultar contenedor artista-cancion de golpe
            .set(artistaCancionRef.current, { opacity: 0 })

            // Pausa de 1.5s antes de mostrar el smile
            .to({}, { duration: 1.5 })

            // Aparecer contenedor smile con ":)"
            .to(smileRef.current, { opacity: 1, duration: 0.3 })
            .call(() => setShowSmile(true))

            // Pausa de 1.5s después del smile
            .to({}, { duration: 2 })

            // Desaparecer smile de golpe y aparecer icono con parallax
            .set(smileRef.current, { opacity: 0 })
            .to(iconoRef.current, { 
                clipPath: 'inset(0 0% 0 0)', 
                duration: 0.8, 
                ease: "power2.out" 
            })

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
                height: '1440px',
                backgroundColor: '##F8F5EE'
            }}
        >
             <div className="header">
                <p ref={textOneRef} className="text-one txt">I'LL BE YOUR SINGER</p>
                <p ref={textTwoRef} className="text-two txt">YOU'LL BE</p>
                <p ref={textThreeRef} className="text-three txt" style={{ textAlign: 'end' }}>MY SONG</p>
            </div>

            <div className="main">
                <p ref={textFourRef} className="text-four txt">I'LL PLAY YOU LIKE</p>
                <p ref={textFiveRef} className="text-five txt">MUSIC</p>
                <p ref={textSixRef} className="text-six txt">I'LL SING YOU LIKE</p>
                <p ref={textSevenRef} className="text-seven txt">A SONG</p>
                <p ref={textEightRef} className="text-eight txt">LAY YOU DOWN GENTLE</p>
                <p ref={textNineRef} className="text-nine txt">LOVE YOU STRONG</p>
            </div>

            <div className="footer">
                <div className="album">
                    <p ref={textTenRef} className="text-ten txt" style={{ fontSize: '2rem' }}>1970</p>
                    <p ref={textTwentyRef} className="text-twenty txt" style={{ fontSize: '2.5rem' }}>BACK IN THE USA</p>
                </div>
                <div className="artist">
                    <p ref={textElevenRef} className="text-eleven txt">MC5</p>
                    <p ref={textTwelveRef} className="text-twelve txt">LET ME TRY</p>
                </div>
            </div>

            <div className="imagen" ref={imageRef}>
                <img src="/img/mc5.jpeg" alt="MC5" className="img" />
            </div>
            <div className="imagen" ref={image2Ref}>
                <img src="/img/group.jpeg" alt="Group" className="img" />
            </div>
            <div className="imagen" ref={image3Ref}>
                <img src="/img/artist.png" alt="Artist" className="img" />
            </div> 

            <div className="arista-cancion" ref={artistaCancionRef}>
                {showSong && (
                    <TextType
                        text={["LET ME TRY."]}
                        typingSpeed={110}
                        showCursor={false}
                        loop={false}
                        className="typetext-song"
                        startOnVisible={false}
                    />
                )}
                {showArtist && (
                    <TextType
                        text={["MC5"]}
                        typingSpeed={90}
                        showCursor={false}
                        loop={false}
                        className="typetext-artist"
                        startOnVisible={false}
                    />
                )}
            </div>

            <div className="smile" ref={smileRef}>
                {showSmile && (
                    <TextType
                        text={[":)"]}
                        typingSpeed={150}
                        showCursor={false}
                        loop={false}
                        className="typetext-smile"
                        startOnVisible={false}
                    />
                )}
            </div>

            <div className="icono" ref={iconoRef}>
                <img src="/img/icon/logo-dark.svg" alt="Icono" className="icono-img" />
            </div>
        </div>
    )
}

export default Text