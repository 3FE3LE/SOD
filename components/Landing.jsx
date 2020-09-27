import { Fade, Slide } from '@material-ui/core'
import React from 'react'

const Landing = () => {
  return (
    <>
      <Fade in={true} timeout={1500}>
      <div className="flex flex-wrap relative items-center shadow-2xl justify-center h-screen bg-fixed bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512418490979-92798cec1380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')" }}>
          <Slide direction="up" in={true} timeout={3000}>
          <div className="text-center sticky top-0 " >
            <h1 className="font-black text-gray-800 text-xl" >Shop of details</h1>
            <h1 className="text-6xl font-black text-red-600" >SOD</h1>
            <p className="uppercase text-3xl font-thin">Tienda de detalles y mucho mas.</p>
          </div>
          </Slide>
        </div>
      </Fade>
    </>
  )
}

export default Landing
