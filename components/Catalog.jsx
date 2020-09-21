import React from 'react'
import Rating from '@material-ui/lab/Rating';

const Catalog = () => {

  const products = [
    {
      name: 'caja 1',
      price: '12',
      img: 'https://colorlib.com/preview/theme/ashion/img/product/product-2.jpg',
      rate: 3,
      status: ''
    },
    {
      name: 'caja 1',
      price: '12',
      img: 'https://colorlib.com/preview/theme/ashion/img/product/product-3.jpg',
      rate: 3,
      status: ''
    },
    {
      name: 'caja 1',
      price: '12',
      img: 'https://colorlib.com/preview/theme/ashion/img/product/product-5.jpg',
      rate: 3,
      status: ''
    },
    {
      name: 'caja 1',
      price: '12',
      img: 'https://colorlib.com/preview/theme/ashion/img/product/product-6.jpg',
      rate: 3,
      status: ''
    },
    {
      name: 'caja 1',
      price: '12',
      img: 'https://colorlib.com/preview/theme/ashion/img/product/product-7.jpg',
      rate: 3,
      status: ''
    },
    {
      name: 'caja 1',
      price: '12',
      img: 'https://colorlib.com/preview/theme/ashion/img/product/product-8.jpg',
      rate: 3,
      status: ''
    },
    {
      name: 'caja 1',
      price: '12',
      img: 'https://colorlib.com/preview/theme/ashion/img/product/product-4.jpg',
      rate: 3,
      status: ''
    },
    {
      name: 'caja 1',
      price: '12',
      img: 'https://colorlib.com/preview/theme/ashion/img/product/product-4.jpg',
      rate: 3,
      status: ''
    },
    {
      name: 'caja 1',
      price: '12',
      img: 'https://colorlib.com/preview/theme/ashion/img/product/product-4.jpg',
      rate: 3,
      status: ''
    },
  ]

  return (
    <div className="w-full h-full flex justify-center">
      <div className="max-w-screen-lg w-full h-full">
        <nav className="flex flex-wrap justify-between w-full py-16 px-4">
          <h2 className="uppercase font-bold text-2xl border-red-600 border-b-2 mb-8">nuevos productos</h2>
          <ul className="flex flex-wrap">
            <li className="pr-4">Todos</li>
            <li className="pr-4">Cajas</li>
            <li className="pr-4">Detalles</li>
            <li className="pr-4">Con acetato</li>
            <li className="pr-4">Sencillas</li>
            <li className="pr-4">Mas vendidas</li>
          </ul>
        </nav>
        <div className="w-full flex flex-wrap justify-center   sm:justify-between">
          {products.map((product, i) => (
            <div
              key={product.img}
              className={`${i >= 8 ? 'hidden' : ''} xs:max-w-xxs flex justify-center flex-wrap w-full  sm:w-4/12 md:w-3/12 h-full px-4 py-2 relative `}
            >
              <div
                className="h-64 w-full bg-cover object-center bg-no-repeat"
                style={{ backgroundImage: `url(${product.img})` }}
              >
              </div>
              <p className="w-full text-center">{product.name}</p>
              <div className="w-full text-center">
                <Rating
                  name="half-rating"
                  defaultValue={product.rate}
                  size="small"
                  precision={0.5} />
              </div>
              <p className="w-full text-center font-semibold">${product.price} COP</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalog
