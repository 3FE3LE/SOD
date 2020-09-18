import Head from 'next/head'

export default function Home() {
  return (
    <>
    <div className="flex flex-wrap relative items-center justify-center h-screen bg-fixed bg-no-repeat bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1512418490979-92798cec1380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"}}>
      <Head>
        <title>SOD - Shop of Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center" >
        <h1 className="font-black text-gray-800 text-xl" >Shop of details</h1>
        <h1 className="text-6xl font-black text-red-600" >SOD</h1>

        <p className="uppercase text-3xl font-thin">Tienda de detalles y mucho mas.</p>
      </div>
        <div className="h-56 bg-white w-full absolute bottom-0"></div>
    </div>
    <div className="w-full h-screen">

    </div>
    </>
  )
}
