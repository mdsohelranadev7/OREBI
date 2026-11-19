import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Error from './layouts/Error'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import './App.css'
import ProductDetails from './layouts/ProductDetails'
import { Counter } from './features/counter/Counter'
import Loging from './components/Loging'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="count" element={<Counter />} />
          <Route path="cart" element={<Cart />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="loging" element={<Loging />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
