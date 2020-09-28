import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-wrap justify-center">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 flex flex-wrap">
            <div className="w-full xs:w-1/3 h-64 border bg-gray-900 ">
              <div className="h-full w-full flex justify-center items-center  text-transparent transition duration-500 ease-in-out hover:bg-opacity-75 hover:text-gray-800 hover:bg-white"><p className="font-black" >@shop_of_details</p></div>
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
          <div className="sm:w-1/2 md:w-4/12 my-4 ">
            <h1 className="text-3xl font-black text-red-600">SOD</h1>
            <h1 className="text-3xl font-cookie text-gray-800  -mt-8">Shop of details</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente, architecto neque recusand</p>
            <div className="flex my-2">
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 text-gray-700">
                <i className="fab fa-facebook-f text-gray-800"></i>
              </div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 text-gray-700"></div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 text-gray-700"></div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 text-gray-700"></div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 text-gray-700"></div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 flex justify-around">

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
            <div className="relative flex flex-wrap justify-center my-2">
              <input className="p-4 my-2 rounded-full border w-full" type="text" />
              <input className="p-4 my-2 sm:right-0 sm:absolute w-64 sm:w-auto rounded-full bg-red-600 text-white " type="button" value="Enviar" />
            </div>
            <div className="flex my-2">
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 text-gray-700">
                <i className="fab fa-facebook-f text-gray-800"></i>
              </div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 text-gray-700"></div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 text-gray-700"></div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 text-gray-700"></div>
              <div className="h-10 w-10 m-1 rounded-full bg-gray-200 text-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
