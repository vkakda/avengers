import React from 'react'
import Hero from './pages/Hero.jsx'
import AvengersSlider from './pages/AvengersSlider.jsx'
import Navbar from './pages/Navbar.jsx'
import Footer from './pages/Footer.jsx'

// import Spline from '@splinetool/react-spline';

const App = () => {

  return (
    <div>
      
      <Navbar />
      <Hero />
      <AvengersSlider />
      
     
      {/* <Spline /> */}
      
    </div>
  )
}

export default App