import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row } from "reactstrap";
import HeadImage from "../assets/images/FooterBg.jpg"

const HeadTitle = () => {
  const location = useLocation();
  return (
    <>
      <Container className="relative">
        <Row>
          <img src={HeadImage} alt=""  className="w-full h-[200px] sm:h-[250px] object-cover relative"/>
        </Row>
        <Row className="absolute top-0 left-0 flex items-center justify-between w-full h-full px-3 pt-16 bg-opacity-50 sm:pt-20 lg:pt-16 bg-dry sm:px-10 md:px-20">
          <h1 className="text-xl font-bold text-white capitalize md:text-4xl">
            {location.pathname.split("/")[1]}
          </h1>
          <button className="px-2 py-2 text-white rounded sm:px-4 md:text-lg pattern">
            <Link to="/Rest-Assured">Home / </Link>
            <span className="capitalize ">
              {location.pathname.split("/")[1]}
            </span>
          </button>
        </Row>
      </Container>
    </>
  );
};

export default HeadTitle;
