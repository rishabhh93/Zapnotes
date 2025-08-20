import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          tempData.push({
            _id: itemId,
            quantity: cartItems[itemId],
          });
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      {/* Header */}
      <div className="text-2xl mb-6 text-center sm:text-left">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {/* Cart items */}
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          if (!productData) return null;

          return (
            <div
              key={index}
              className="py-5 border-t border-b grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 text-gray-800"
            >
              {/* Product Info */}
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20 rounded-lg border border-amber-200 shadow-sm"
                  src={productData.image[0]}
                  alt={productData.name}
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium text-amber-900">{productData.name}</p>
                  <p className="mt-2 font-semibold bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 bg-clip-text text-transparent">
                    {currency}
                    {productData.price}
                  </p>
                </div>
              </div>

              {/* Quantity Input */}
              <input
                onChange={(e) =>
                  e.target.value === '' || e.target.value === '0'
                    ? null
                    : updateQuantity(item._id, Number(e.target.value))
                }
                className="border border-amber-300 rounded-lg max-w-10 sm:max-w-20 px-2 py-1 text-sm text-center outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-300"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              {/* Remove Button */}
              <img
                onClick={() => updateQuantity(item._id, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer hover:opacity-80"
                src={assets.bin_icon}
                alt="Remove"
              />
            </div>
          );
        })}
      </div>

      {/* Cart total + checkout */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 text-white text-sm my-8 px-8 py-3 rounded-xl shadow-md transition hover:opacity-90 hover:shadow-lg active:opacity-80"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
