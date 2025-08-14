// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav className='flex justify-between mr-40 ml-40 pt-10 z-10'>
//         {/* Left heading */}
//         <div>
//             <h1 className='text-4xl text-blue-400 leading-wider cursor-pointer'>IEEE</h1>
//         </div>
//         {/* Right heading navbar */}
//         <div>
//             <ul className='flex gap-x-10 capitalize'>
//                 <NavLink to={'/'} ><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>HOME</li> </NavLink> 
//                 <NavLink to={'/about'} > <li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>ABOUT</li> </NavLink>
//                 <NavLink to={'/event'} ><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>EVENTS</li> </NavLink>
//                 <NavLink to={'/team'} > <li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>TEAM</li> </NavLink>
//             </ul>
//         </div>
//     </nav>
//   )
  
// }

// export default Navbar

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex justify-between mr-40 ml-40 pt-10 z-10'>
      {/* Left heading */}
      <div>
        <h1 className='text-4xl text-blue-400 leading-wider cursor-pointer'>IEEE</h1>
      </div>

      {/* Desktop menu */}
      <div className='hidden md:block'>
        <ul className='flex gap-x-10 capitalize'>
          <NavLink to={'/'}><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>HOME</li></NavLink>
          <NavLink to={'/about'}><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>ABOUT</li></NavLink>
          <NavLink to={'/event'}><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>EVENTS</li></NavLink>
          <NavLink to={'/team'}><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>TEAM</li></NavLink>
        </ul>
      </div>

      {/* Hamburger icon for mobile */}
      <div className='md:hidden text-3x flex items-center ml-38 text-2xl l cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-white text-black overflow-x-hidden shadow-md md:hidden'>
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
