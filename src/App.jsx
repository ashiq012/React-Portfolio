import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
function App() {
  return (
    <div className='h-auto w-full overflow-hidden bg-[#171d32]'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App