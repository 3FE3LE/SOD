import { Drawer } from '@material-ui/core'
import React, { useState } from 'react'

const NavBar = () => {

  const [show, setShow] = useState(false);

  const toggleDrawer = ( open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setShow( open );
  };

  return (
    <>
      <nav className="w-full h-18 bg-white z-10 sticky top-0 shadow-xl p-4 flex justify-between items-center">
        <div className="sm:w-3/12 h-10 -mt-4">
          <h1 className="text-3xl font-black text-red-600">SOD</h1>
          <h1 className="text-3xl font-cookie text-gray-800  -mt-8">Shop of details</h1>
        </div>
        <div className="hidden md:flex w-full items-center justify-between">
          <ul className="flex items-center " >
            <li className="px-4 uppercase font-semibold">inicio</li>
            <li className="px-4 uppercase font-semibold">cajas</li>
            <li className="px-4 uppercase font-semibold">regalos</li>
            <li className="px-4 uppercase font-semibold">tienda</li>
            <li className="px-4 uppercase font-semibold">blog</li>
            <li className="px-4 uppercase font-semibold">contactanos</li>
          </ul>
          <div className="flex items-center">
            <h6 className="text-sm text-gray-600" >Log in/register</h6>
            <svg className="h-6 px-2 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <svg className="h-6 px-2 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg className="h-6 px-2 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
        <button onClick={toggleDrawer(true)} className="md:hidden p-2">
          <svg className="h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Drawer onClose={toggleDrawer(false)} open={show} anchor="top"  >
        <div className="bg-white w-full shadow-lg py-2 px-4">
        <div className="sm:w-3/12 h-10">
          <h1 className="text-3xl font-black text-red-600">SOD</h1>
          <h1 className="text-3xl font-cookie text-gray-800  -mt-8">Shop of details</h1>
        </div>
        <div className="flex flex-wrap w-full items-center justify-between mt-4">
          <ul className="flex flex-wrap items-center " >
            <li className="w-full py-2 uppercase font-semibold">inicio</li>
            <li className="w-full py-2 uppercase font-semibold">cajas</li>
            <li className="w-full py-2 uppercase font-semibold">regalos</li>
            <li className="w-full py-2 uppercase font-semibold">tienda</li>
            <li className="w-full py-2 uppercase font-semibold">blog</li>
            <li className="w-full py-2 uppercase font-semibold">contactanos</li>
          </ul>
          <div className="w-full py-4">
            <h6 className="text-sm text-gray-600 w-full" >Log in/register</h6>
          </div>
          <div className="flex h-12 flex-row-reverse flex-wrap justify-center w-full   items-center">
          <svg className="h-6 px-2 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <svg className="h-6 px-2 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg className="h-6 px-2 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
          
        </div>
        </Drawer>
      </nav>
    </>
  )
}

export default NavBar
