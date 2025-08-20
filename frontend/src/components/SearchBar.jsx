import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false)
    }
  }, [location])

  return showSearch && visible ? (
    <div className="border-t border-b bg-amber-50/50 text-center">
      <div className="inline-flex w-3/4 items-center justify-center rounded-full border border-amber-300 bg-white/70 px-5 py-2 my-5 mx-3 shadow-sm backdrop-blur-sm transition sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
          type="text"
          placeholder="Search notes, subjects, or exams..."
        />
        <img className="w-4 opacity-70" src={assets.search_icon} alt="Search" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer opacity-70 hover:opacity-100"
        src={assets.cross_icon}
        alt="Close"
      />
    </div>
  ) : null
}

export default SearchBar
