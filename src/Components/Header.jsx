import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from "lucide-react"; // 3-dot icon

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className='fixed top-0 right-0 left-0 z-100  bg-gradient-to-l bg-gray-500 via-green-300 from-pink-950/50 hover:bg-gradient-to-r bg-amber-700 from-pink-950/50'>
      
      <div className='flex justify-between items-center px-4 py-2'>
        
        {/* Logo */}
        <h1 className='font-bold text-lg bg-gradient-to-l bg-black from-blue-500 bg-clip-text text-transparent'>ABDUN NUR~</h1>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-4'>
          <NavLink className='text-white border bg-amber-800 rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/">Home</NavLink>
          <NavLink className='text-white border bg-amber-800 rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/about">About</NavLink>
          <NavLink className='text-white border bg-amber-800 rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/skills">Skills</NavLink>
          <NavLink className='text-white border bg-amber-800 rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/projects">Projects</NavLink>
          <NavLink className='text-white border bg-amber-800 rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/contact">Contact</NavLink>
        </div>

        {/* Get More Button (Desktop only) */}
        <div className=' '>
          <button className='border border-blue-400 bg-blue-400 text-white py-1 px-2 rounded-lg hover:text-black hover:bg-blue-600 transition duration-300'>
            <NavLink to='/getmore'>Get More</NavLink>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className=" md:hidden flex flex-col items-center gap-1 pb-1  border-t border-gray-400 bg-gray-100/60">
          <NavLink className='text-white border bg-amber-800 rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink className='text-white border bg-amber-800 rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink className='text-white border bg-amber-800 rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/skills" onClick={() => setOpen(false)}>Skills</NavLink>
          <NavLink className='text-white border bg-amber-800 rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink className='text-white border bg-amber-800 rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
         
        </div>
      )}
    </div>
  )
}

export default Header;
