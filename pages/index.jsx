import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Head>
        <title>SOD - Shop of Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center">
        <h1 className="font-black text-gray-800 text-xl" >Shop of details</h1>
        <h1 className="text-6xl font-black text-red-600" >SOD</h1>

        <p className="uppercase text-3xl font-thin">Tienda de detalles y mucho mas.</p>
      </div>
    </div>
  )
}
