import React, { useState } from 'react'
import Navbar from './Component/Navbar/navbar'
import Hero from './Component/Hero/hero'
import Programs from './Component/Programs/program'  
import Title from './Component/Title/title'
import About from './Component/About/about'
import Campus from './Component/Campus/campus'
import Testimonials from './Component/Testimonials/testimonials'
import Contact from './Component/Contact/contact'
import Footer from './Component/Footer/footer'
import Videoplayer from './Component/Videoplayer/videoplayer'
const App = () => {
  const [playstate, setPlaystate] =useState(false);
  return (
    <div>
      
      <Hero/>
      <div className='container'>
      <Navbar/>
        <Title subTitle="Our Program" title="What We Offer"/>
        <Programs/>
        
        <About setPlaystate={setPlaystate}/>
        <Title subTitle="Gallary" title="Campus photos"/>
        <Campus/>
        <Title subTitle="TESTIMONIALS" title="What student says"/>

        <Testimonials/>
        <Title subTitle="Contacts Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
        
      </div>
      <Videoplayer playstate={playstate} setPlaystate={setPlaystate}/>
    </div>
  )
}

export default App
