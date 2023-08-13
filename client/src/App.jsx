import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Webcam from './components/Webcam';
import { Navbar } from './components/Navbar';
import { MainSection } from './components/MainSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TechStackSection } from './components/TechStackSection';
import { Footer } from './components/Footer';
import { Register } from './components/Register';
import { Login } from './components/Login';
import AttendancePage from './components/AttendancePage'; // Import the AttendancePage component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState('');

  return (
    <>
      {/* // <Webcam/> */}
      {/* <Navbar/> */}
      {/* <MainSection/>
      <FeaturesSection/>
      <TechStackSection/>
      <Footer/> */}

      {/* <Register/> */}
      {/* <Login/> */}

      <Navbar isLoggedIn={isLoggedIn} studentName={studentName} />
      {isLoggedIn ? (
        <AttendancePage /> // Display the AttendancePage component when logged in
      ) : (
        <Login setStudentName={setStudentName} setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
