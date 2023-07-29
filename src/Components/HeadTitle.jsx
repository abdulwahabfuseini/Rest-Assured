import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row } from "reactstrap";

const HeadTitle = () => {
  const location = useLocation();
  return (
    <>
      <Container className="relative">
        <row>
          <video
            src="/video/HeadVideo.mp4"
            autoPlay
            muted
            loop
            className="w-full h-[220px] object-cover relative"
          ></video>
        </row>
        <Row className="absolute top-0 left-0 flex items-center justify-between w-full h-full px-3 pt-16 bg-Transparent sm:px-10 md:px-20">
          <h1 className="text-lg font-semibold text-white capitalize md:text-4xl">
            {location.pathname.split("/")[1]}
          </h1>
          <button className="px-2 py-2 text-white sm:px-4 md:text-lg bg-dry">
            <Link to="/">Home / </Link>
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
