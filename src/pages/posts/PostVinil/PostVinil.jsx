
import "./post.css"
import { Button } from "../../../components/button/Button"

import { gsap } from "gsap"

export const Post = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const viniloRef = useRef(null)
    const portadaRef = useRef(null)
    const contraportadaRef = useRef(null)

    const handleButtonClick = () => {
        setIsPlaying(!isPlaying)
    }

 useEffect(() => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 })

  gsap.set(viniloRef.current, { rotationY: 0 })

 tl
  .to(viniloRef.current, {
    duration: 1.2,
    rotationY: -180,
 keyframes: [
      { rotationY: -90, scale: 0.97, duration: 0.6 },   // punto medio: más pequeño
      { rotationY: -180, scale: 1, duration: 0.6 }      // llega a contraportada: tamaño normal
    ]   ,
     ease: "power2.inOut"
  })
  .to({}, { duration: 10 })  // ← pausa en contraportada (segunda imagen)
  .to(viniloRef.current, {
    duration: 1.2,
    rotationY: 0,
    keyframes: [
      { rotationY: -90, scale: 0.97, duration: 0.6 },   // punto medio
      { rotationY: 0, scale: 1, duration: 0.6 }         // llega a portada: tamaño normal
    ],
    ease: "power2.inOut"
  })
  .to({}, { duration: 2 })   // ← pausa en portada (primera imagen)

  return () => {
    tl.kill()
    gsap.set(viniloRef.current, { rotationY: 0 }) // ← limpia el estado al desmontar
  }
}, [])

    const imageVinilo = [

        './img/portada.png',
        './img/contraportada.png'

    ]

    return (
        <div className="post-container">

            <div className="line top"></div>
            <div className="line bottom"></div>
            <div className="line left"></div>
            <div className="line right"></div>







            <section className="post-content">



<div className="vinilo-content" ref={viniloRef}>
    <div className="vinilo-face" ref={portadaRef}>
        <img src={imageVinilo[0]} alt="Portada" />
    </div>
    <div className="vinilo-face" ref={contraportadaRef}>
        <img src={imageVinilo[1]} alt="Contraportada" />
    </div>
</div>










                {/* ------------ 
             BUTTON POST 
             ---------------*/}
                {/* <div className="post-title-animation">
                    <div className="post-title">
                        <p className="title">LET ME TRY.</p>
                        <p className="subtitle">MC5</p>
                    </div>
                    <div className="equalizer-container">
                        <Equalizer isAnimating={isPlaying} />
                    </div>
                </div>
                <div className="button-container">
                    <Button variant="terciary" onClick={handleButtonClick}>
                        {isPlaying ? "PAUSE" : "PLAY"}
                    </Button>
                </div> */}
            </section>
            {/* <Footer /> */}
        </div>
    );
}