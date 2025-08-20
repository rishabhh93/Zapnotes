import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className="relative">
      {/* prestige background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-gradient-to-tr from-yellow-800/10 via-amber-700/10 to-orange-700/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-tr from-amber-800/10 via-yellow-700/10 to-orange-700/10 blur-3xl" />
      </div>

      <div className="mb-3 flex items-center justify-between">
        <p className="text-lg font-extrabold bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 bg-clip-text text-transparent">
          All Products
        </p>
        <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
          {list.length} items
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white/85 shadow-sm backdrop-blur">
        {/* Table header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 border-b border-amber-200 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 px-3 py-3 text-sm font-semibold text-amber-900">
          <b>Image</b>
          <b>Name</b>
          <b>Exam</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Empty state */}
        {list.length === 0 && (
          <div className="px-4 py-10 text-center text-sm text-gray-600">
            No products yet. Add your first product to see it here.
          </div>
        )}

        {/* Rows */}
        <div className="divide-y divide-amber-100">
          {list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_3fr_1fr] items-center gap-3 px-3 py-3 text-sm text-gray-800 transition hover:bg-amber-50/50 md:grid-cols-[1fr_3fr_1fr_1fr_1fr]"
            >
              <div className="flex items-center">
                <img className="w-12 rounded-lg border border-amber-200" src={item.image?.[0]} alt={item.name} />
              </div>

              <div className="min-w-0">
                <p className="truncate font-medium text-amber-900">{item.name}</p>
                {/* optional flags */}
                <div className="mt-1 flex flex-wrap gap-2 text-[10px]">
                  {item.bestseller && (
                    <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-[2px] font-medium text-amber-800">
                      Bestseller
                    </span>
                  )}
                  {item.subCategory && (
                    <span className="rounded-full border border-amber-200 bg-white px-2 py-[2px] text-gray-600">
                      {item.subCategory}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-700">{item.category}</p>
              <p className="font-semibold bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700 bg-clip-text text-transparent">
                {currency}{item.price}
              </p>

              <div className="text-right md:text-center">
                <button
                  onClick={() => removeProduct(item._id)}
                  className="inline-flex items-center justify-center rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-xs font-medium text-amber-900 shadow-sm transition hover:bg-amber-50 active:opacity-90"
                  title="Remove"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default List
