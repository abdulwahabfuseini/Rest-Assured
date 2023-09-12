import React from "react";
import Layout from "../layout/Layout";
import HeadTitle from "../components/HeadTitle";
import BlogContent from "../components/blogSection/BlogContent";
import BlogCard from "../components/blogSection/BlogCard";


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
