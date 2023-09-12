import React from "react";
import Layout from "../layout/Layout";
import HeadTitle from "../components/HeadTitle";
import GalleryCard from "../components/gallery/GalleryCard";

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
