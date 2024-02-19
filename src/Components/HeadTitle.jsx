import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import HeadImage from "../assets/images/FooterBg.jpg"

const HeadTitle = () => {
  const location = useLocation();
  return (
    <>
      <Container className="relative">
        <Row>
          <img src={HeadImage} alt="banner" className="w-full h-[140px] sm:h-[180px] object-cover relative"/>
        </Row>
        <Row className="absolute top-0 left-0 w-full h-full px-4 bg-opacity-50 bg-dry sm:px-10 md:px-6">
          <Col className="flex flex-wrap items-center justify-between py-10 mx-auto sm:py-16 max-w-7xl">
          <h1 className="text-2xl font-bold text-white capitalize sm:text-5xl">
            {location.pathname.split("/")[1]}
          </h1>
          <button className="px-2 py-2 text-white rounded sm:px-4 md:text-lg pattern">
            <Link to="/">Home / </Link>
            <span className="text-lg capitalize">
              {location.pathname.split("/")[1]}
            </span>
          </button>
          </Col>
         
        </Row>
      </Container>
    </>
  );
};

export default HeadTitle;
