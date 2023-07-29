import React from "react";
import Layout from "../Layout/Layout";
import HeadTitle from "../Components/HeadTitle";
import Food from "../Components/Food";

const Restaurants = () => {
  return (
    <Layout>
      <div className="w-full h-full mb-40">
        <HeadTitle />
        <Food />
      </div>
    </Layout>
  );
};

export default Restaurants;
