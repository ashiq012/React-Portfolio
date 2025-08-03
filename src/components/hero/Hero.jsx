import React from 'react'
import log from "../../assets/logo/log.jpg"
function  Hero() {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">
  <div className="w-full md:w-2/4 md:pt-10 text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter">
      Hello, I am Ashiq
    </h1>
    <p className="text-base md:text-xl mt-4 tracking-tight">
      MERN Stack Developer skilled in building responsive UIs, RESTful APIs, 
      and full-stack applications with React, Node.js, Express, and MongoDB.
    </p>
    <button className="px-6 py-3 mt-6 text-sm md:text-lg font-medium hover:opacity-80 hover:scale-105 duration-300 rounded-2xl bg-blue-900">
      Contact Me
    </button>
  </div>

  <div className="w-full md:w-2/5 flex justify-center mt-6 md:mt-0">
    <img className="w-3/4 md:w-full max-w-sm" src={log} alt="Ashiq Logo" />
  </div>
</div>


  )
}

export default  Hero