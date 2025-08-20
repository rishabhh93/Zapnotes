import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts,setLatestProducts] = useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[products])

  return (
    <div className="my-12">
      <div className="text-center py-8 text-3xl">
        <Title text1={'Trending'} text2={'Study Sets'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700">
          Explore the most popular study sets, curated from real student demand. Updated regularly to help you focus on what matters now.
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {latestProducts.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>

      {/* subtle divider */}
      <div className="mt-8 flex justify-center">
        <span className="h-1 w-24 rounded-full bg-gradient-to-r from-yellow-800 via-amber-600 to-orange-700" />
      </div>
    </div>
  )
}

export default LatestCollection
