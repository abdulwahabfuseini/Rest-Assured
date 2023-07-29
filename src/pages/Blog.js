import React from "react";
import Layout from "../Layout/Layout";
import HeadTitle from "../Components/HeadTitle";
import BlogCard from "../Components/BlogCard";

const Blog = () => {
  return (
    <Layout>
      <div className="w-full h-full mb-40">
        <HeadTitle />
        <BlogCard />
      </div>
    </Layout>
  );
};

export default Blog;
