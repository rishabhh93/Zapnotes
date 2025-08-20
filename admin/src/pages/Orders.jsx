import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return null;

    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      )

      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: event.target.value },
        { headers: { token } }
      )
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div className="relative">
      {/* prestige background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-gradient-to-tr from-yellow-800/10 via-amber-700/10 to-orange-700/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-gradient-to-tr from-amber-800/10 via-yellow-700/10 to-orange-700/10 blur-3xl" />
      </div>

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-extrabold bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 bg-clip-text text-transparent">
          Orders
        </h3>
        <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
          {orders.length} total
        </span>
      </div>

      {/* List */}
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 items-start gap-4 rounded-2xl border border-amber-200 bg-white/85 p-5 text-xs text-gray-800 shadow-sm backdrop-blur transition hover:shadow-md sm:text-sm sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr]"
          >
            {/* Icon */}
            <div className="flex items-start">
              <img className="w-12 rounded-lg border border-amber-200" src={assets.parcel_icon} alt="Parcel" />
            </div>

            {/* Order details */}
            <div>
              <div className="text-gray-800">
                {order.items.map((item, i) => (
                  <p className="py-0.5" key={i}>
                    <span className="font-medium text-amber-900">{item.name}</span> × {item.quantity}{' '}
                    {item.size && <span className="text-gray-600">({item.size})</span>}
                    {i !== order.items.length - 1 && ','}
                  </p>
                ))}
              </div>

              <p className="mt-3 mb-1 font-semibold text-amber-900">
                {order.address.firstName + ' ' + order.address.lastName}
              </p>
              <div className="text-gray-600">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city + ', ' + order.address.state + ', ' + order.address.country + ', ' + order.address.zipcode}
                </p>
              </div>
              <p className="mt-1 text-gray-600">{order.address.phone}</p>
            </div>

            {/* Payment & meta */}
            <div className="space-y-1">
              <p className="text-[13px] sm:text-sm">Items: <span className="font-medium">{order.items.length}</span></p>
              <p>Method: <span className="font-medium">{order.paymentMethod}</span></p>
              <p>
                Payment:{' '}
                <span
                  className={`rounded-full px-2 py-[2px] text-[11px] font-semibold ${
                    order.payment
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}
                >
                  {order.payment ? 'Done' : 'Pending'}
                </span>
              </p>
              <p>Date: <span className="text-gray-600">{new Date(order.date).toLocaleDateString()}</span></p>
            </div>

            {/* Amount */}
            <div className="font-bold bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 bg-clip-text text-transparent">
              {currency}{order.amount}
            </div>

            {/* Status dropdown */}
            <div>
              <label className="mb-1 block text-[11px] font-medium text-amber-900">Status</label>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Ready for Download">Ready for Download</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        ))}

        {orders.length === 0 && (
          <div className="rounded-2xl border border-amber-200 bg-white/75 p-10 text-center text-sm text-gray-600 shadow-sm">
            No orders yet.
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders
