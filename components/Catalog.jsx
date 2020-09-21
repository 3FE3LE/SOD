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
    <div className="w-full flex flex-wrap  sm:justify-between">
      {products.map((product, i) => (
        <div
          key={product.img}
          className={`${i >= 8 ? 'hidden' : ''} flex justify-center flex-wrap w-full  sm:w-3/12 h-full px-6 py-2 relative max-w-2xl `}
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
              precision={0.5} />
          </div>
          <p className="w-full text-center">{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Catalog
