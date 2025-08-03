import { RiMenu2Line } from '@remixicon/react';
import React from 'react'
import { useState } from 'react';
import { RiCloseLine } from '@remixicon/react';
function Navbar() {
  const [menu,showMenu] = useState(false);
  const [showmenu, setShowMenu] = useState(true);
  return (
    <div className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20'>
      <span className='text-xl font-bold'>Portfolio</span>
      <ul className={`${menu ? "block" : "hidden"}
      mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <a href="">
        <li className='text-md transition-all duration-300 p-1 md:p-0 '>About</li>
        </a>
        <a href="">
        <li className='text-md transition-all duration-300 p-1 md:p-0 '>Project</li>
        </a>
        <a href="">
        <li className='text-md transition-all duration-300 p-1 md:p-0 '>Education</li>
        </a>
        <a href="">
        <li className='text-md transition-all duration-300 p-1 md:p-0 '>Contact</li>
        </a>
      </ul>
      {
        showMenu? (
          <RiMenu2Line size={30} className='md:hidden absolute top-6 right-10 transition-all duration-300 ' 
          onClick={()=>{
            showMenu(!menu);
            setShowMenu(!showMenu);
          }}/>
        ):<RiCloseLine size={30} className='md:hidden absolute top-6 right-10 transition-all duration-300 ' />
      }
    </div>
  )
}

export default Navbar