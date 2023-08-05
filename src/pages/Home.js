import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../Components/HomeSection/Hero";
import PopularHotels from "../Components/HomeSection/PopularHotels";
import Partnership from "../Components/HomeSection/Partnership";
import Download from "../Components/HomeSection/Download";
import Discover from "../Components/HomeSection/Discover";
import MapDirection  from "../Components/MapDirection";


const Home = () => {
  return (
    <Layout>
      <div className="w-full h-full space-y-5 overflow-hidden sm:space-y-0" >
        <Hero />
        <PopularHotels />
        <Partnership />
        <Download />
        <Discover />
        <MapDirection />
      </div>
    </Layout>
  );
};

export default Home;
