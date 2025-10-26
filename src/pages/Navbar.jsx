import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav fixed top-0 w-screen bg-transparent p-2 z-10'>
      <div className='flex justify-between items-center px-4 sm:px-10'>

        {/* Logo */}
        <div className="flex items-center">
          <img className='h-10 sm:h-12 w-auto' src="/images/logo.png" alt="logo" />
        </div>

        {/* Menu Links - hidden on small screens */}
        <ul className='menu-links hidden sm:flex text-sm font-bold font-orbi items-center justify-center gap-6 text-white'>
          <li className='cursor-pointer hover:text-amber-300 transition-transform hover:scale-105 duration-300'>Home</li>
          <li className='cursor-pointer hover:text-amber-300 transition-transform hover:scale-105 duration-300'>Movies</li>
          <li className='cursor-pointer hover:text-amber-300 transition-transform hover:scale-105 duration-300'>Mission</li>
          <li className='cursor-pointer hover:text-amber-300 transition-transform hover:scale-105 duration-300'>Hero</li>
        </ul>

        {/* Buttons - hidden on small screens */}
        <div className='hidden sm:flex gap-2'>
          <button className='cursor-pointer border-2 border-amber-300 px-3 py-1 rounded-md text-sm font-semibold transition-transform hover:scale-105 hover:text-yellow-300 duration-300'>
            Login
          </button>
          <button className='cursor-pointer border-2 border-amber-300 px-3 py-1 rounded-md text-sm font-semibold transition-transform hover:scale-105 hover:text-yellow-300 duration-300'>
            Signin
          </button>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
