import React from "react";
import { Col, Container, Row } from "reactstrap";
import { AboutData } from "./AboutData";

const AboutCard = () => {
  return (
    <Container className="w-full h-[1600px] sm:h-[1120px] lg:h-[1300px] px-2 pt-12 md:pb-5 sm:px-5 md:px-4 lg:px-16">
      <Row>
        <h1 className="text-xl font-bold sm:text-3xl text-Header">About Us</h1>
        <Row className="flex flex-col-reverse py-5 sm:py-0 sm:flex-row ">
          {AboutData.map((items, index) => {
            const { title1, desc, Cover1 } = items;
            return (
              <>
                <Col key={index} className="sm:w-1/2 lg:w-6/12 lg:pr-4 sm:pr-2"  data-aos="fade-right"> 
                  <h3 className="pt-5 pb-2 text-xl font-bold sm:text-2xl text-Header">
                    {title1}
                  </h3>
                  <p className="text-lg tracking-tight text-justify">{desc}</p>
                </Col>
                <Col className="sm:w-1/2 lg:w-3/5"  data-aos="fade-left">
                  <img
                    src={Cover1}
                    alt={Cover1}
                    className="object-cover w-full sm:h-80 lg:h-96"
                  />
                </Col>
              </>
            );
          })}
        </Row>
        <Row className="flex flex-col sm:flex-row gap-y-5">
          {AboutData.map((items, index) => {
            const { title2, desc, Cover2 } = items;
            return (
              <>
                <Col className="sm:w-1/2 lg:w-8/12"  data-aos="fade-right">
                  <img
                    src={Cover2}
                    alt={Cover2}
                    className="object-cover w-full sm:h-80 lg:h-96"
                  />
                </Col>
                <Col className=" sm:w-1/2 lg:w-6/12 sm:py-4 lg:py-8 sm:px-6"  data-aos="fade-left">
                  <h1 className="pb-2 text-xl font-bold lg:pt-5 sm:text-3xl text-Header">
                    {title2}
                  </h1>
                  <p className="text-lg tracking-tight text-justify">{desc}</p>
                </Col>
              </>
            );
          })}
        </Row>
        <Row className="flex flex-col sm:flex-row gap-y-5">
          {AboutData.map((items, index) => {
            const { title3, desc, Cover3 } = items;
            return (
              <>
                <Col className="sm:w-1/2 lg:w-6/12 lg:px-4 sm:pr-4 lg:pr-4"  data-aos="fade-right">
                  <h3 className="pt-5 pb-2 text-xl font-bold sm:text-3xl text-Header">
                    {title3}
                  </h3>
                  <p className="text-lg tracking-tight text-justify">{desc}</p>
                </Col>
                <Col className="sm:w-1/2 lg:w-3/5"  data-aos="fade-left">
                  <img
                    src={Cover3}
                    alt={Cover3}
                    className="object-cover w-full sm:h-80 lg:h-96"
                  />
                </Col>
              </>
            );
          })}
        </Row>
      </Row>
    </Container>
  );
};

export default AboutCard;
