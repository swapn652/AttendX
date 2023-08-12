import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Webcam from './components/Webcam'
import { Navbar } from './components/Navbar'
import { MainSection } from './components/MainSection'
import { FeaturesSection } from './components/FeaturesSection'
import { TechStackSection } from './components/TechStackSection'
import { Footer } from './components/Footer'
import { Register } from './components/Register'

function App() {

  return (
    <>
      {/* // <Webcam/> */}
      <Navbar/>
      {/* <MainSection/>
      <FeaturesSection/>
      <TechStackSection/>
      <Footer/> */}

      <Register/>
    </>
  )
}

export default App
