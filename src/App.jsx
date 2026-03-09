import { useState } from 'react'

import './App.css'
import ButtonStatePage from './pages/btns/buttonstate/ButtonStatePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <ButtonStatePage />
    </>
  )
}

export default App
