import React from "react";
import Error from "../assets/images/404.webp";
import Layout from "../layout/Layout";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center w-full h-full py-24">
        <img src={Error} alt="404" />
      </div>
    </Layout>
  );
};

export default PageNotFound;
