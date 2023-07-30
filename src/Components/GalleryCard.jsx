import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Gallery } from "../assets/Data";
import { Image } from "antd";

const GalleryCard = () => {
  return (
    <Container className="w-full h-full px-4 py-10 md:pt-12 md:pb-5 sm:px-5 md:px-4 lg:px-12">
      <header className="pb-5 text-center">
        <h1 className="text-lg font-semibold md:text-xl">
          We Provide the best Bedrooms and Poolsides
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          saepe aut iusto debitis quo laboriosam?
        </p>
      </header>
      <Row className="grid grid-cols-1 gap-2 py-4 sm:gap-2 sm:grid-cols-3 lg:grid-cols-4 space-y-4 sm:space-y-0">
        {Gallery.map((item, index) => (
          <Col key={index}>
            <Image src={item.image} alt="/"  style={{height: 240, width: 500}} />
            <p className="py-2 text-center text-white bg-Header ">{item.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryCard;
