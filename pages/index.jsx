import Head from 'next/head'
import Catalog from '../components/Catalog'
import LandingLayout from '../components/layouts/LandingLayout'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>SOD - Shop of Details</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/0f17c8408c.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Head>
      <LandingLayout>
      <div className="flex flex-wrap relative items-center shadow-2xl justify-center h-screen bg-fixed bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512418490979-92798cec1380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="text-center" >
          <h1 className="font-black text-gray-800 text-xl" >Shop of details</h1>
          <h1 className="text-6xl font-black text-red-600" >SOD</h1>
          <p className="uppercase text-3xl font-thin">Tienda de detalles y mucho mas.</p>
        </div>
        {/* <div className="h-56 bg-gray-100 w-full absolute bottom-0 shadow-inner"></div> */}
      </div>
      <div className="w-full  relative">
        <NavBar />
        <div className="h-2/3 w-full flex flex-wrap  mt-2 z-0">
          <div className="w-full md:w-1/2 py-32 mb-2 sm:mb-0 sm:pr-2 flex items-center  bg-orange-200">
            <div className="pl-8" >
              <h2 className="cookie text-6xl text-gray-900">Woman's fashion</h2>
              <p className="w-10/12 text-orange-900">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ducimus quas beatae aspernat</p>
              <div className="flex  pt-4">
                <p className="uppercase font-semibold flex border-b-2 border-red-600"> shop now</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 sm:pl-2 sm:pr-1">
            <div className="w-full  h-1/2 py-24 border-b-4 border-white flex justify-center items-center pl-8 bg-green-200">
              <div className="w-full  ">
                <h2 className="font-extrabold text-xl">Cajas de regalo</h2>
                <p className="font-thin text-sm text-gray-800">234 articles</p>
                <div className="flex  pt-4">
                  <p className="uppercase font-semibold flex border-b-2 border-red-600"> shop now</p>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 py-24 border-t-4 border-b-8 sm:border-b-0 border-white flex justify-center items-center pl-8 bg-red-200">
              <div className="w-full  ">
                <h2 className="font-extrabold text-xl">Detalles</h2>
                <p className="font-thin text-sm text-gray-800">234 articles</p>
                <div className="flex  pt-4">
                  <p className="uppercase font-semibold flex border-b-2 border-red-600"> shop now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 sm:pl-1">
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
        <div className="w-full h-full flex justify-center">
          <div className="max-w-screen-lg w-full h-full">
            <nav className="flex flex-wrap justify-between w-full py-16">
              <h2 className="uppercase font-bold text-2xl border-red-600 border-b-2">nuevos productos</h2>
              <ul className="flex flex-wrap">
                <li className="px-4">Todos</li>
                <li className="px-4">Cajas</li>
                <li className="px-4">Detalles</li>
                <li className="px-4">Con acetato</li>
                <li className="px-4">Sencillas</li>
                <li className="px-4">Mas vendidas</li>
              </ul>
            </nav>
            <Catalog/>
          </div>
        </div>
      </div>
      </LandingLayout>
    </>
  )
}
