import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to="/">
        <img src={assets.zapnotes} className="w-36" alt="ZapNotes" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden gap-5 text-sm text-gray-800 sm:flex">
        {[
          { to: '/', label: 'HOME' },
          { to: '/collection', label: 'NOTES' },
          { to: '/about', label: 'ABOUT' },
          { to: '/contact', label: 'CONTACT' },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive
                  ? 'text-amber-700'
                  : 'hover:text-amber-700 transition-colors'
              }`
            }
          >
            <p>{label}</p>
            <hr className="hidden h-[1.5px] w-2/4 border-none bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700" />
          </NavLink>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img
          onClick={() => { setShowSearch(true); navigate('/collection'); }}
          src={assets.search_icon}
          className="w-5 cursor-pointer hover:opacity-80"
          alt="Search"
        />

        {/* Profile */}
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate('/login'))}
            className="w-5 cursor-pointer hover:opacity-80"
            src={assets.profile_icon}
            alt="Profile"
          />
          {token && (
            <div className="absolute right-0 hidden pt-4 group-hover:block">
              <div className="flex w-36 flex-col gap-2 rounded border border-amber-200 bg-white py-3 px-5 text-gray-700 shadow-lg">
                <p className="cursor-pointer hover:text-amber-700">My Profile</p>
                <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-amber-700">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-amber-700">Logout</p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5 hover:opacity-80" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 text-white aspect-square rounded-full text-[8px] font-semibold bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Trigger */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden hover:opacity-80"
          alt="Menu"
        />
      </div>

      {/* Mobile Sidebar */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full sm:w-1/3 shadow-lg' : 'w-0'}`}>
        <div className="flex flex-col text-gray-800">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer text-white bg-gradient-to-r from-yellow-800 via-amber-700 to-orange-700"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="border-b py-3 pl-6 hover:bg-amber-50 hover:text-amber-700" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="border-b py-3 pl-6 hover:bg-amber-50 hover:text-amber-700" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="border-b py-3 pl-6 hover:bg-amber-50 hover:text-amber-700" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="border-b py-3 pl-6 hover:bg-amber-50 hover:text-amber-700" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
