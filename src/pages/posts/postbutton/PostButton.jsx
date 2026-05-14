import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import './postbutton.css'
import { Button } from '../../../components/button/Button'

const NUM_COLS = 4
const SEGS_PER_COL = [4, 7, 5, 6]
const COL_X = [2, 13, 24, 35]
const SEG_Y_BASE = [38, 32, 26, 20, 14, 8, 2]
const SPEEDS = [1.8, 1.5, 2.1, 1.7]
const NOISE = [
  [0.2, 1.1, 0.5, 1.3],
  [0.8, 0.3, 1.2, 0.6],
  [0.4, 1.5, 0.7, 0.2],
  [1.4, 0.6, 0.3, 1.1],
]

// Fuera del componente — funciones puras, no necesitan estar dentro
const lerp = (a, b, f) => a + (b - a) * f

const getTarget = (col, t) => {
  const ph1 = Math.sin(t * SPEEDS[col] + NOISE[0][col]) * 0.5 + 0.5
  const ph2 = Math.sin(t * SPEEDS[col] * 0.7 + NOISE[1][col]) * 0.3 + 0.3
  const ph3 = Math.sin(t * SPEEDS[col] * 1.3 + NOISE[2][col]) * 0.2 + 0.2
  return Math.min(1, Math.max(0, ph1 + ph2 + ph3 - 0.5))
}

const IDLE_STATES = Array.from(
  { length: NUM_COLS }, 
  (_, c) => Array(SEGS_PER_COL[c]).fill(false)
)

// Componente separado para el SVG — evita que buildPath
// se recalcule en el componente padre
const WaveformSVG = ({ segStates }) => (
  <svg
    width="92"
    height="90"
    viewBox="0 0 42 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {Array.from({ length: NUM_COLS }, (_, c) =>
      Array.from({ length: SEGS_PER_COL[c] }, (_, s) => (
        <line
          key={`${c}-${s}`}
          x1={COL_X[c]}
          y1={SEG_Y_BASE[s]}
          x2={COL_X[c] + 5}
          y2={SEG_Y_BASE[s]}
          stroke={segStates[c]?.[s] ? 'var(--text)' : 'color-mix(in srgb, var(--text) 18%, transparent)'}
          strokeWidth="4"
          strokeLinecap="round"
          style={{ transition: 'stroke 0.04s' }}
        />
      ))
    )}
  </svg>
)

const PostButton = () => {
  const [playing, setPlaying] = useState(false)
  const [segStates, setSegStates] = useState(IDLE_STATES)
  const [shuffleKey, setShuffleKey] = useState(0)

  const tRef = useRef(0)
  const lastRef = useRef(0)
  const currentRef = useRef(new Array(NUM_COLS).fill(0))
  const rafRef = useRef(null)
  const playingRef = useRef(false)

  // useCallback para estabilizar la referencia del handler
  const handleToggle = useCallback(() => {
    setPlaying(prev => {
      const next = !prev
      playingRef.current = next
      return next
    })
    // Incrementar shuffleKey dispara la animación shuffle en el Button
    setShuffleKey(prev => prev + 1)
  }, [])

  useEffect(() => {
    playingRef.current = playing

    if (!playing) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      setSegStates(IDLE_STATES)
      currentRef.current = new Array(NUM_COLS).fill(0)
      tRef.current = 0
      return
    }

    lastRef.current = performance.now()

    const frame = (ts) => {
      if (!playingRef.current) return

      const dt = Math.min((ts - lastRef.current) / 1000, 0.05)
      lastRef.current = ts
      tRef.current += dt

      const newStates = Array.from({ length: NUM_COLS }, (_, c) => {
        const target = getTarget(c, tRef.current)
        const spd = target > currentRef.current[c] ? 8 : 4
        currentRef.current[c] = lerp(currentRef.current[c], target, dt * spd)
        const filled = Math.round(currentRef.current[c] * SEGS_PER_COL[c])
        return Array.from({ length: SEGS_PER_COL[c] }, (_, s) => s < filled)
      })

      setSegStates(newStates)
      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [playing])

  return (
    <div className="post-button"
    style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:'1080px',
      height:'1350px',
      border:'2px solid black'
    }}>
      <div className="nombre-animacion">
        <div className="nombre">
          <p className="titulo">DAS MODEL</p>
          <p className="subtitulo">KRAFTWERK</p>
        </div>

        <WaveformSVG segStates={segStates} />
      </div>

      <div className="btn-container">
        <Button
          shuffleKey={shuffleKey}
          onClick={handleToggle}
        >
          {playing ? 'PAUSE' : 'PLAY'}
        </Button>
      </div>
    </div>
  )
}

export default PostButton