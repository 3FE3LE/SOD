import React from 'react'

const PromoBanner = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="max-w-screen-lg flex flex-wrap justify-center items-stretch  py-20 px-4 w-full h-full">
          <div className="w-10/12 md:w-1/2 py-48 md:py-0 bg-white bg-center bg-cover" style={{ backgroundImage: "url('https://colorlib.com/preview/theme/ashion/img/discount.jpg')" }}></div>
          <div className="w-10/12 md:w-1/2  py-24 bg-gray-300 flex flex-wrap items-center justify-center">
            <div className="rounded-full h-48 w-48 relative bg-white flex flex-wrap justify-center items-center">
              <h2 className="uppercase text-sm text-center p-0 m-0 absolute top-0 mt-12">discount</h2>
              <h1 className="text-red-600 text-center font-cookie text-6xl p-0 m-0 absolute w-80">Navidad 2020</h1>
              <h2 className="uppercase text-sm text-center p-0 m-0 absolute bottom-0 mb-12" >ventas <span className="text-red-600 font-semibold text-lg">50%</span></h2>
            </div>
            <div className="w-full flex justify-center">
              <div>
                <p className="px-2 xs:px-6 text-2xl font-semibold" >29<span className="text-xs">days</span></p>

              </div>
              <div>
                <p className="px-2 xs:px-6 text-2xl font-semibold" >13<span className="text-xs">h</span></p>

              </div>
              <div>
                <p className="px-2 xs:px-6 text-2xl font-semibold" >09<span className="text-xs">m</span></p>

              </div>
              <div>
                <p className="px-2 xs:px-6 text-2xl font-semibold" >45<span className="text-xs">s</span></p>

              </div>

            </div>
            <div className="flex  pt-4">
              <p className="uppercase font-semibold flex border-b-2 border-red-600"> shop now</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PromoBanner
