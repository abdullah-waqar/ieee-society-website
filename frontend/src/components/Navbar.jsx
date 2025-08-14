import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between mr-40 ml-40 pt-10 z-10'>
        {/* Left heading */}
        <div>
            <h1 className='text-4xl text-blue-400 leading-wider cursor-pointer'>IEEE</h1>
        </div>
        {/* Right heading navbar */}
        <div>
            <ul className='flex gap-x-10 capitalize'>
                <NavLink to={'/'} ><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>HOME</li> </NavLink> 
                <NavLink to={'/about'} > <li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>ABOUT</li> </NavLink>
                <NavLink to={'/event'} ><li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>EVENTS</li> </NavLink>
                <NavLink to={'/team'} > <li className='hover:text-gray-600 transition-all duration-300 cursor-pointer'>TEAM</li> </NavLink>
            </ul>
        </div>
    </nav>
  )
  
}

export default Navbar