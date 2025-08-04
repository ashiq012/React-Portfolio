import React from 'react'
import my from "../../assets/logo/my.jpg"
import TypewriterText from '../TypewriterText'
function  Hero() {
  return (
    <div className="text-[#171d32] flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 bg-white">
  <div className="w-full md:w-2/4 md:pt-10 text-center md:text-left">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
      Md Ashiq , I'm <TypewriterText />
    </h1>
    <p className=" md:text-lg mt-4 text-sm tracking-tight ">
      MERN Stack Developer skilled in building responsive UIs, RESTful APIs, 
      and full-stack applications with React, Node.js, Express, and MongoDB.
    </p>
    <button className="px-6 py-3 mt-6 text-sm md:text-lg font-medium hover:opacity-80 hover:scale-105 duration-300 rounded-2xl bg-blue-900 text-white border-none">
      Contact Me
    </button>
  </div>

  <div className="w-full md:w-2/5 flex justify-center mt-6 md:mt-0  hover:scale-102 duration-300">
    <img className="w-3/4 md:w-80 max-w-sm hover:shadow-xl/60 duration-300 shadow-xl/20" src={my} alt="Ashiq Logo" />
  </div>
</div>


  )
}

export default  Hero