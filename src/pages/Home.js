import React from "react";
import Layout from "../layout/Layout";
import Hero from "../components/homeSection/Hero";
import PopularHotels from "../components/homeSection/PopularHotels";
import Partnership from "../components/homeSection/Partnership";
import Download from "../components/homeSection/Download";
import Discover from "../components/homeSection/Discover";
import MapDirection  from "../components/MapDirection";


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
