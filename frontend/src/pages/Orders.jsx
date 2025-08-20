import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setorderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });
        setorderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="relative border-t pt-16">
      {/* prestige blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-gradient-to-tr from-yellow-800/10 via-amber-700/10 to-orange-700/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-800/10 via-yellow-700/10 to-orange-600/10 blur-3xl" />
      </div>

      <div className="text-2xl mb-8">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-6 border-t border-b border-amber-200 bg-white/80 backdrop-blur rounded-xl px-4 mb-6 shadow-sm text-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition hover:shadow-md"
          >
            {/* left side */}
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20 rounded-lg border border-amber-100"
                src={item.image[0]}
                alt={item.name}
              />
              <div>
                <p className="sm:text-base font-semibold text-amber-900">{item.name}</p>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-700">
                  <p className="font-medium">{currency}{item.price}</p>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                  <p className="text-gray-600">Size: {item.size}</p>
                </div>
                <p className="mt-1 text-xs">
                  Date: <span className="text-gray-500">{new Date(item.date).toDateString()}</span>
                </p>
                <p className="mt-1 text-xs">
                  Payment: <span className="text-gray-500">{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            {/* right side */}
            <div className="md:w-1/2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span
                  className={`min-w-2 h-2 rounded-full ${
                    item.status.toLowerCase().includes('delivered')
                      ? 'bg-green-600'
                      : item.status.toLowerCase().includes('pending')
                      ? 'bg-amber-500'
                      : 'bg-gray-400'
                  }`}
                ></span>
                <p className="text-sm md:text-base font-medium text-gray-700">{item.status}</p>
              </div>

              <button
                onClick={loadOrderData}
                className="rounded-lg border border-amber-300 bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 px-5 py-2 text-xs sm:text-sm font-medium text-white shadow-sm transition hover:shadow-md hover:opacity-95 active:opacity-90"
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
