import React from "react";
import Layout from "../Layout/Layout";
import HeadTitle from "../Components/HeadTitle";
import GalleryCard from "../Components/Gallery/GalleryCard";

const Gallery = () => {
  return (
    <Layout>
      <div className="w-full h-full mb-40">
        <HeadTitle />
        <GalleryCard />
      </div>
    </Layout>
  );
};

export default Gallery;
