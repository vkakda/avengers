import React from 'react'
import "./Navbar.css"

const Navbar = () => {
return (
    <div className='fixed h-15 w-screen bg-transparent p-2 z-10'>
            <div className='flex justify-between items-center ml-10'>
            <div className="container ml-10 mt-2">
            <h1 className="text-3xl font-bold text-white"><img className='h-12 w-25 ' src="/images/logo.png" alt="" /></h1>
            </div>
            <div className='mr-60 '>
                    <ul className='menu-links flex text-sm font-bold font-orbi items-center justify-center gap-10' >
                            <li className='cursor-pointer hover:text-amber-300 transition-transform hover:scale-110 duration-300'>Home</li>
                            <li className='cursor-pointer hover:text-amber-300 transition-transform hover:scale-110 duration-300'>Movies</li>
                            <li className='cursor-pointer hover:text-amber-300 transition-transform hover:scale-110 duration-300'>Mission</li>
                            <li className='cursor-pointer hover:text-amber-300 transition-transform hover:scale-110 duration-300'>Hero</li>
                    </ul>
            </div>
            <div className='ml-10 mr-15 pr-5 flex gap-2 items-center justify-center'>
                    <button className='cursor-pointer border-2 border-amber-300 p-1 rounded-lg text-md font-semibold transition-transform hover:scale-110 hover:text-yellow-300 duration-300'>login</button>
                    <button className='cursor-pointer border-2 border-amber-300 p-1 rounded-lg text-md font-semibold transition-transform hover:scale-110 hover:text-yellow-300 duration-300'>signin</button>
            </div>
            </div>
    </div>
)
}

export default Navbar