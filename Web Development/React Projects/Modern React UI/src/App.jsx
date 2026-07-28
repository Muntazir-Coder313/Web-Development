import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Service from './Components/Service'
import OurWork from './Components/OurWork'
import Teams from './Components/Teams'
import ContactUs from './Components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './Components/Footer'
import { useRef } from 'react'

const App = () => {

  const[theme , setTheme]= useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'ligth')

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  const mouse=useRef({x:0,y:0})
  const position=useRef({x:0,y:0})

  useEffect(()=>{
    const handleMouseMove=(e)=>{
      mouse.current.x=e.clientX
      mouse.current.y=e.clientY
    }

    document.addEventListener('mousemove',handleMouseMove)

    const animate=()=>{
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1
      if(dotRef.current && outlineRef.current){
       dotRef.current.style.transform =`translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
       outlineRef.current.style.transform =`translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }
      requestAnimationFrame(animate)
    }

    animate()

    return ()=>{
      document.removeEventListener('mousemove',handleMouseMove)
    }

  },[])

 
  return (
    <div className='dark:bg-black relative  '>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} /> 
      <Hero/>
      <TrustedBy/>
      <Service/>
      <OurWork/> 
      <Teams/>
      <ContactUs/>
      <Footer theme={theme}/>  
      {/* Custom Cursor Ring */}
      <div ref={outlineRef} className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary pointer-events-none z-[9999]" style={{transition:'transform 0.1s ease-out'}}></div>

      {/* Custom Cursor Dot */}
      <div ref={dotRef} className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999]"></div>
    </div>
  )
}

export default App