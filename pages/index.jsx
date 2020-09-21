import Head from 'next/head'
import CarouselSection from '../components/CarouselSection'
import Catalog from '../components/Catalog'
import LandingLayout from '../components/layouts/LandingLayout'
import NavBar from '../components/NavBar'
import PromoBanner from '../components/PromoBanner'
import Sections from '../components/Sections'
import Topics from '../components/Topics'

export default function Home() {
  return (
    <>
      <Head>
        <title>SOD - Shop of Details</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/0f17c8408c.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <LandingLayout>
        <div className="flex flex-wrap relative items-center shadow-2xl justify-center h-screen bg-fixed bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512418490979-92798cec1380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')" }}>
          <div className="text-center" >
            <h1 className="font-black text-gray-800 text-xl" >Shop of details</h1>
            <h1 className="text-6xl font-black text-red-600" >SOD</h1>
            <p className="uppercase text-3xl font-thin">Tienda de detalles y mucho mas.</p>
          </div>
        </div>
        <div className="w-full h-full  relative">
          <NavBar />
          <Sections />
          <Catalog />
          <CarouselSection />
          <Topics />
          <PromoBanner/>
        </div>

      </LandingLayout>
    </>
  )
}
