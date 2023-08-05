import React from "react";
import Layout from "../Layout/Layout";
import HeadTitle from "../Components/HeadTitle";
import BlogContent from "../Components/BlogSection/BlogContent";
import BlogCard from "../Components/BlogSection/BlogCard";


const Blog = () => {
  return (
    <Layout>
      <div className="w-full h-full mb-40">
        <HeadTitle />
        <BlogContent />
        <BlogCard />
      </div>
    </Layout>
  );
};

export default Blog;
