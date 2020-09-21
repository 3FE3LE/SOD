import React from 'react'

const Sections = () => {
  return (
    <>
      <div className="h-2/3 w-full flex flex-wrap  mt-2 z-0">
        <div className="w-full md:w-1/2 py-32 mb-2 md:mb-0 md:pr-2 flex items-center  bg-orange-200">
          <div className="pl-8" >
            <h2 className="font-cookie text-6xl text-gray-900">Woman's fashion</h2>
            <p className="w-10/12 text-orange-900">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ducimus quas beatae aspernat</p>
            <div className="flex  pt-4">
              <p className="uppercase font-semibold flex border-b-2 border-red-600"> shop now</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 md:pl-2 md:pr-1">
          <div className="w-full  h-1/2 py-24 border-b-4 border-white flex justify-center items-center pl-8 bg-green-200">
            <div className="w-full  ">
              <h2 className="font-extrabold text-xl">Cajas de regalo</h2>
              <p className="font-thin text-sm text-gray-800">234 articles</p>
              <div className="flex  pt-4">
                <p className="uppercase font-semibold flex border-b-2 border-red-600"> shop now</p>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 py-24 border-t-4 border-b-8 md:border-b-0 border-white flex justify-center items-center pl-8 bg-red-200">
            <div className="w-full  ">
              <h2 className="font-extrabold text-xl">Detalles</h2>
              <p className="font-thin text-sm text-gray-800">234 articles</p>
              <div className="flex  pt-4">
                <p className="uppercase font-semibold flex border-b-2 border-red-600"> shop now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 md:pl-1">
          <div className="w-full h-1/2 py-24 border-b-4 border-white flex justify-center items-center pl-8 bg-purple-200 ">
            <div className="w-full   ">
              <h2 className="font-extrabold text-xl">Personalizadas</h2>
              <p className="font-thin text-sm text-gray-800">234 articles</p>
              <div className="flex  pt-4">
                <p className="uppercase font-semibold flex border-b-2 border-red-600"> shop now</p>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 py-24 border-t-4 border-white flex justify-center items-center pl-8 bg-blue-200 ">
            <div className="w-full  ">
              <h2 className="font-extrabold text-xl">Diseños especiales</h2>
              <p className="font-thin text-sm text-gray-800">234 articles</p>
              <div className="flex  pt-4">
                <p className="uppercase font-semibold flex border-b-2 border-red-600"> shop now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sections
