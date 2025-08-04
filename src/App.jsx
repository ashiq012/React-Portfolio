import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className='h-auto w-full overflow-hidden bg-[#171d32]'>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App