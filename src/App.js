import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Review from "./pages/Review";
import Blog from "./pages/Blog";
import Offer from "./pages/Offer";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import SignIn from "./pages/account/SignIn";
import Register from "./pages/account/Register";
import Booking from "./pages/account/Booking";
import OfferReview from "./pages/OfferReview";
import ReviewPage from "./pages/ReviewPage";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "./contexts/AuthContext";


Aos.init();


const ScrollTotop = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <AuthProvider>
     <ScrollTotop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="review" element={<Review />} />
        <Route path="blog" element={<Blog />} />
        <Route path="offer" element={<Offer />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route path="booking" element={<Booking />} />
        <Route path="OfferReview/:id" element={<OfferReview />} />
        <Route path="reviewPage/:id" element={<ReviewPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
