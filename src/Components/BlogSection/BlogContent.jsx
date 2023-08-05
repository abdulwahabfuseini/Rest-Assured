import React from "react";
import { Container, Row } from "reactstrap";
import { Blog } from "./BlogData";
import BlogCard from "./BlogCard";

const BlogContent = () => {
  return (
    <Container className="w-full h-full px-5 py-10 md:pt-12 md:pb-5 sm:px-5 md:px-8 lg:px-12">
      <header className="pb-5 text-center">
        <h1 className="text-lg font-semibold md:text-xl">
          We Provide the best Bedrooms and Poolsides
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          saepe aut iusto debitis quo laboriosam?
        </p>
      </header>
      <Row className="grid grid-cols-1 gap-3 py-4 sm:gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {Blog.map((blog, index) => {
          return (
            <BlogCard key={index} cover={blog.cover} desc={blog.desc} rating={blog.rating} />
          );
        })}
      </Row>
    </Container>
  );
};

export default BlogContent;
