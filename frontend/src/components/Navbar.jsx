import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex justify-between items-center px-10 pt-6 w-full z-50 absolute top-0 left-0'>
      {/* Left heading */}
      <div>
        <h1 className='text-4xl text-blue-400 cursor-pointer'>IEEE</h1>
      </div>

      {/* Desktop menu */}
      <div className='hidden md:block'>
        <ul className='flex gap-x-10 capitalize text-white'>
          <NavLink to={'/'}><li className='hover:text-gray-300 transition-all duration-300 cursor-pointer'>HOME</li></NavLink>
          <NavLink to={'/about'}><li className='hover:text-gray-300 transition-all duration-300 cursor-pointer'>ABOUT</li></NavLink>
          <NavLink to={'/event'}><li className='hover:text-gray-300 transition-all duration-300 cursor-pointer'>EVENTS</li></NavLink>
          <NavLink to={'/team'}><li className='hover:text-gray-300 transition-all duration-300 cursor-pointer'>TEAM</li></NavLink>
        </ul>
      </div>

      {/* Hamburger icon for mobile */}
      <div className='md:hidden text-2xl cursor-pointer text-white' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-white z-50 text-black shadow-md md:hidden'>
          <ul className='flex flex-col items-center gap-y-6 py-6 capitalize'>
            <NavLink to={'/'} onClick={() => setIsOpen(false)}><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>HOME</li></NavLink>
            <NavLink to={'/about'} onClick={() => setIsOpen(false)}><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>ABOUT</li></NavLink>
            <NavLink to={'/event'} onClick={() => setIsOpen(false)}><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>EVENTS</li></NavLink>
            <NavLink to={'/team'} onClick={() => setIsOpen(false)}><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>TEAM</li></NavLink>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
