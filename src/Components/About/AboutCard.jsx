import React from "react";
import { Col, Container, Row } from "reactstrap";
import staff1 from "../../assets/images/restaurant1.jpg";
import about1 from "../../assets/images/about1.jpg";
import { FaArrowRight } from "react-icons/fa";


const AboutCard = () => {
  return (
    <Container className="w-full h-full px-2 md:pt-12 md:pb-5 sm:px-5 md:px-4 lg:px-8">
      <Row className="">
        <h1 className="text-lg font-bold text-Header">About Us</h1>
        <Row className="flex flex-col gap-8 space-y-1 sm:flex-row">
          <Col className=" sm:w-3/5 lg:w-1/2">
            <h3 className="py-3 text-2xl">
              We provide best places for rest and business meetings
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit saepe harum delectus nihil, ducimus temporibus
              quidem dolor animi incidunt tempore eligendi soluta ipsa expedita,
            </p>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit saepe harum delectus nihil, ducimus temporibus
            </p>
            <button className="flex items-center gap-3 px-3 py-2 mt-5 text-white sm:mt-2 bg-Header">
              Explore More{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </Col>
          <Col className=" sm:w-2/5 lg:w-1/2">
            <img
              src={about1}
              alt="staff"
              className="object-cover w-full lg:px-14 sm:h-72"
            />
          </Col>
        </Row>
      </Row>
      <Row className="py-10 mb-8">
        <Row className="flex flex-col-reverse gap-8 space-y-1 sm:flex-row">
          <Col className=" sm:w-2/5 lg:w-1/2">
            <img
              src={staff1}
              alt="staff"
              className="object-cover w-full lg:pr-14 sm:h-72"
            />
          </Col>
          <Col className=" sm:w-3/5 lg:w-1/2">
            <h1 className="pt-5 text-xl font-bold sm:p-0 text-Header">
              Our BreakFast
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit saepe harum delectus nihil, ducimus temporibus
              quidem dolor animi incidunt tempore eligendi soluta ipsa expedita,
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default AboutCard;
