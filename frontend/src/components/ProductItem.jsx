import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      to={`/product/${id}`}
      className="group block cursor-pointer"
    >
      <div className="overflow-hidden rounded-xl border border-yellow-700/60 bg-white shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-yellow-800 group-hover:ring-2 group-hover:ring-yellow-600/50">
        <img
          className="w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
          src={image[0]}
          alt={name}
        />
      </div>

      <p className="pt-3 text-sm font-medium text-gray-800 transition group-hover:text-yellow-800">
        {name}
      </p>
      <p className="text-sm font-semibold bg-gradient-to-r from-yellow-800 via-amber-600 to-orange-600 bg-clip-text text-transparent">
        {currency}{price}
      </p>
    </Link>
  )
}

export default ProductItem
