import Head from 'next/head'
import CarouselSection from '../components/CarouselSection'
import Catalog from '../components/Catalog'
import Landing from '../components/Landing'
import LandingLayout from '../components/layouts/LandingLayout'
import NavBar from '../components/NavBar'
import PromoBanner from '../components/PromoBanner'
import Sections from '../components/Sections'
import Services from '../components/Services'
import Topics from '../components/Topics'

export default function Home() {
  return (
    <>
      <Head>
        <title>SOD - Shop of Details</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/0f17c8408c.js" crossOrigin="anonymous"></script>
      </Head>
      <LandingLayout>
        <Landing/>
        <div className="w-full h-full  relative">
          <NavBar />
          <Sections />
          <Catalog />
          <CarouselSection />
          <Topics />
          <PromoBanner />
          <Services/>
        </div>
      </LandingLayout>
    </>
  )
}
