import React from 'react'
import { Navbar } from './components/navbar'
import { ShopContextProvider } from './context/shop-context'
import { Shop } from './pages/shop/shop'
import './Release.css'
import { Cart } from './pages/cart/cart'
import { Link, Route, Router, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Release = () => {
  return (
    <div className="real">

      <ShopContextProvider>
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<Shop />} /> {/* Renders Shop on /Products */}
          <Route path="/cart" element={<Cart />} /> {/* Renders Cart on /Products/cart */}
        </Routes>
        </div>
      </ShopContextProvider>

    </div>
  )
}

export default Release
