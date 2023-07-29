import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Gallery from './pages/Gallery'
import Restaurants from './pages/Restaurants'
import Blog from './pages/Blog'
import Offer from './pages/Offer'
import ContactUs from './pages/ContactUs'
import PageNotFound from './pages/PageNotFound'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Booking from './pages/Booking'



const App = () => {
  return (
    <>
    <Routes>
      <Route path='/Rest-Assured' element={<Home />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='restaurants' element={<Restaurants />} />
      <Route path='blog' element={<Blog />} />
      <Route path='offer' element={<Offer />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='sign-in' element={<SignIn />} />
      <Route path='register' element={<Register />} />
      <Route path='booking' element={<Booking />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default App