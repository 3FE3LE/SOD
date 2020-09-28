import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear();

  console.log(year)

  return (
    <>
      <div className="w-full flex flex-wrap justify-center">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 flex flex-wrap">
            <div className="w-full xs:w-1/3 h-64 border bg-gray-900 ">
              <div className="h-full w-full flex-wrap flex justify-center items-center  text-transparent opacity-0 transition duration-500 ease-in-out hover:opacity-75 hover:text-gray-800 hover:bg-white">
                <div className="h-6 flex justify-center flex-wrap">
                <img className="w-6 text-gray-900 m-0 bg-center object-cover" src="https://simpleicons.org/icons/instagram.svg" alt="" />
                <p className="font-black w-full text-center m-0" >@shop_of_details</p>
                </div>
                </div>
                
            </div>
            <div className="w-full xs:w-1/3 h-64 border flex justify-center items-center"><p>@2</p></div>
            <div className="w-full xs:w-1/3 h-64 border flex justify-center items-center"><p>@3</p></div>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap">
            <div className="w-full xs:w-1/3 h-64 border flex justify-center items-center"><p>@4</p></div>
            <div className="w-full xs:w-1/3 h-64 border flex justify-center items-center"><p>@5</p></div>
            <div className="w-full xs:w-1/3 h-64 border flex justify-center items-center"><p>@6</p></div>
          </div>
        </div>
        <div className="max-w-screen-xl h-full w-full flex flex-wrap justify-center px-4 pt-8">
          <div className="w-full sm:w-1/2 md:w-4/12 my-4 ">
            <h1 className="text-3xl font-black text-red-600">SOD</h1>
            <h1 className="text-3xl font-cookie text-gray-800  -mt-8">Shop of details</h1>
            <p className="text-sm sm:pr-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente, architecto neque recusand</p>
            <div className="flex my-2">
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 flex justify-center items-center">
                <img className="h-4" src="https://simpleicons.org/icons/paypal.svg" alt="" />
              </div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 flex justify-center items-center">
                <img className="h-4" src="https://simpleicons.org/icons/mastercard.svg" alt="" />
              </div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 flex justify-center items-center">
                <img className="h-4" src="https://simpleicons.org/icons/visa.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 flex justify-around">

            <div className="sm:w-1/2 my-2">
              <h1 className="uppercase font-semibold my-4">Enlaces rápidos</h1>
              <ul>
                <li>Inicio</li>
                <li>Cajas</li>
                <li>Tienda</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="sm:w-1/2 my-2">
              <h1 className="uppercase font-semibold my-4">Cuenta</h1>
              <ul>
                <li>Mi cuenta</li>
                <li>Mis ordenes</li>
                <li>Compras</li>
                <li>Lista de deseos</li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-full md:w-4/12 my-2">
            <h1 className="uppercase font-semibold my-4">Newsletter</h1>
            <div className="relative flex flex-wrap justify-center items-center my-2">
              <input className="p-3 pl-5 my-2 rounded-full border w-full" placeholder="Email" type="email" />
              <input className="py-3 px-4 my-2 font-bold text-sm sm:right-0 sm:mr-1 sm:absolute w-64 sm:w-auto rounded-full bg-red-600 text-white " type="button" value="SUSCRIBETE" />
            </div>
            <div className="flex my-2">
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 flex justify-center items-center">
                <img className="h-4" src="https://simpleicons.org/icons/facebook.svg" alt="" />
              </div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 flex justify-center items-center">
                <img className="h-4" src="https://simpleicons.org/icons/twitter.svg" alt="" />
              </div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 flex justify-center items-center">
                <img className="h-4" src="https://simpleicons.org/icons/youtube.svg" alt="" />
              </div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 flex justify-center items-center">
                <img className="h-4" src="https://simpleicons.org/icons/instagram.svg" alt="" />
              </div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 flex justify-center items-center">
                <img className="h-4" src="https://simpleicons.org/icons/pinterest.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl w-full border-t text-sm">
          <p className="w-full text-center py-2 flex justify-center">Copyright © {year} All rights reserved | This page is code with <svg className="text-red-500 h-4 w-4 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg> by <span className="font-black mx-1">3FE 3lE</span></p>
        </div>

      </div>
    </>
  )
}

export default Footer
