import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Webcam from './components/Webcam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Webcam/>
  )
}

export default App
