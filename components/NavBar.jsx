import React from 'react'

const NavBar = () => {
  return (
    <>
      <nav className="w-full h-18 bg-white z-10 sticky top-0 shadow-xl p-4 flex justify-between items-center">
          <div className="sm:w-3/12 h-10 -mt-4">
            <h1 className="text-3xl font-black text-red-600">SOD</h1>
            <h1 className="text-3xl cookie text-gray-800  -mt-8">Shop of details</h1>
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
              <svg className="h-6 px-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <svg className="h-6 px-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <svg className="h-6 px-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </nav>
    </>
  )
}

export default NavBar
