import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../Components/HomeSection/Hero";
import AboutCard from "../Components/About/AboutCard";
import Popular from "../Components/HomeSection/Popular";
import Partnership from "../Components/HomeSection/Partnership";
import Download from "../Components/HomeSection/Download";
import Discover from "../Components/HomeSection/Discover";



const Home = () => {
  return (
    <Layout>
      <div className="w-full h-full space-y-5 sm:space-y-0">
        <Hero /> 
        <AboutCard />
        <Popular />
        <Partnership />
        <Download />
        <Discover />
      </div>
    </Layout>
  );
};

export default Home;
