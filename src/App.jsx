import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Prestige background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-28 h-80 w-80 rounded-full bg-gradient-to-tr from-yellow-800/10 via-amber-700/10 to-orange-700/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-28 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-800/10 via-yellow-700/10 to-orange-700/10 blur-3xl" />
      </div>

      {/* Toasts themed to match */}
      <ToastContainer
        position="top-right"
        theme="colored"
        toastStyle={{ background: 'linear-gradient(90deg,#92400e,#b45309,#9a3412)', color: 'white' }}
        progressStyle={{ background: '#fde68a' }}
      />

      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
        <SearchBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>

        <Footer />
      </div>
    </div>
  )
}

export default App
