import React, { useState } from 'react'
import CarouselContent from './CarouselContent';

const CarouselSection = () => {


  return (
    <div className="w-full h-64 mt-20 bg-gray-600 flex justify-center bg-cover bg-center bg-no-repeat object-cover" style={{ backgroundImage: "url('https://colorlib.com/preview/theme/ashion/img/banner/banner-1.jpg')" }}>
      <div className="max-w-screen-sm w-full h-full">
        <div className="h-full flex flex-wrap items-center justify-center">
          <h1 className="w-full m-0 p-0 h-8 text-3xl font-black text-red-500 text-center">SOD</h1>
          <h2 className="w-full m-0 p-0 h-8 text-6xl font-cookie text-gray-800 text-center">Shop of details</h2>
          <p className="text-xl font-semibold border-b-2 border-red-600 uppercase text-center">Shop Now</p>
        </div>
      </div>
    </div>
  )
}

export default CarouselSection
