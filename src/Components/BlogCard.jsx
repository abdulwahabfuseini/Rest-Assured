import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Blog } from "../assets/Data";
import { FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

const BlogCard = () => {
  return (
    <Container className="w-full h-full px-5 py-10 md:pt-12 md:pb-5 sm:px-5 md:px-8 lg:px-20">
      <header className="pb-5 text-center">
        <h1 className="text-lg font-semibold md:text-xl">
          We Provide the best Bedrooms and Poolsides
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          saepe aut iusto debitis quo laboriosam?
        </p>
      </header>
      <Row className="grid grid-cols-1 gap-3 py-4 sm:gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {Blog.map((blog, index) => {
          const { image, date, button, title, desc } = blog;
          return (
            <Col
              key={index}
              className="p-3 bg-white shadow-xl cursor-pointer hover:bg-dry hover:text-white "
            >
              <img
                src={image}
                alt=""
                className="object-cover w-full h-44 md:h-48 lg:h-40"
              />
              <Col className="flex items-center justify-between py-2">
                <p className="text-sm text-gray-500">{date}</p>
                <p className="px-2 py-1 text-sm text-white text bg-Header">
                  {button}
                </p>
              </Col>
              <Col>
                <h1>{title}</h1>
                <p className="text-sm">{desc}</p>
              </Col>
              <Col className="flex items-center justify-between pt-3">
                <Col className="flex items-center justify-center gap-1 py-2">
                  <FaStar className="w-4 h-3 text-yellow-500" />
                  <FaStar className="w-4 h-3 text-yellow-500" />
                  <FaStar className="w-4 h-3 text-yellow-500" />
                  <FaStarHalfAlt className="w-4 h-3 text-yellow-500" />
                  <FaStarHalfAlt className="w-4 h-3 text-yellow-500" />
                </Col>
                <button className="flex items-center gap-1 pt-3 text-xs">
                  READ MORE{" "}
                  <span className="w-3 h-3 text-Header">
                    <FaArrowRight />
                  </span>
                </button>
              </Col>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BlogCard;
