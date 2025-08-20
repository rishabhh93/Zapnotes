import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="relative border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* subtle prestige background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-24 h-64 w-64 rounded-full bg-gradient-to-tr from-yellow-800/10 via-amber-700/10 to-orange-700/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-800/10 via-yellow-700/10 to-orange-700/10 blur-3xl" />
      </div>

      {/*----------- Product Data-------------- */}
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-12">
        {/*---------- Product Images------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex w-full justify-between overflow-x-auto sm:w-[18.7%] sm:flex-col sm:justify-normal sm:overflow-y-scroll">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-lg border border-amber-200 hover:border-amber-400 transition"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <div className="overflow-hidden rounded-xl border border-amber-200 bg-white shadow-sm">
              <img className="w-full h-auto object-cover" src={image} alt="" />
            </div>
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-semibold text-amber-900">{productData.name}</h1>

          <div className="mt-2 flex items-center gap-1">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2 text-gray-600">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-bold bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 bg-clip-text text-transparent">
            {currency}{productData.price}
          </p>

          <p className="mt-5 mb-6 text-gray-600 md:w-4/5">
            {productData.description}
          </p>

          <button
            onClick={() => addToCart(productData._id)}
            className="mb-6 rounded-xl bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-md hover:opacity-95 active:opacity-90"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5 border-amber-200" />

          <div className="mt-5 flex flex-col gap-1 text-sm text-gray-600">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Review Section ------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm rounded-tl-lg rounded-tr-lg border-amber-300 bg-amber-50 text-amber-900">
            Description
          </b>
          <p className="border px-5 py-3 text-sm border-amber-200 text-gray-700">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-amber-200 px-6 py-6 text-sm text-gray-600 rounded-b-xl">
          <p>
            ZapNotes is an online platform where students can discover and purchase
            high-quality study notes created by top-performing students (toppers).
            It serves as a digital marketplace for academic resources, allowing
            learners to access subject-wise, well-structured notes anytime,
            anywhere. With no need for physical exchange, ZapNotes makes studying
            more convenient, accessible, and efficient.
          </p>
          <p>
            The platform showcases each note with clear titles, preview options,
            subject categories, and pricing. Every note has a dedicated page with
            contributor info, file format, and a description—helping students make
            smart choices before downloading.
          </p>
        </div>
      </div>

      {/* --------- display related products ---------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
