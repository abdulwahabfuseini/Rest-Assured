import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Review from "./pages/Review";
import Blog from "./pages/Blog";
import Offer from "./pages/Offer";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import SignIn from "./pages/Account/SignIn";
import Register from "./pages/Account/Register";
import Booking from "./pages/Account/Booking";
import SinglePage from "./pages/OfferPage";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="review" element={<Review />} />
        <Route path="blog" element={<Blog />} />
        <Route path="offer" element={<Offer />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route path="booking" element={<Booking />} />
        <Route path="Offerpage/:id" element={<SinglePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
