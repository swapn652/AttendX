import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Webcam from './components/Webcam'
import { Navbar } from './components/Navbar'
import { MainSection } from './components/MainSection'

function App() {

  return (
    <>
      {/* // <Webcam/> */}
      <Navbar/>
      <MainSection/>
    </>
  )
}

export default App
