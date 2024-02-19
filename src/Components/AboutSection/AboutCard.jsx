import React from "react";
import { Col, Row } from "reactstrap";

const AboutCard = ({ title, desc, Cover, style }) => {
  return (
    <Row className={`${style}`}>
      <Col className="sm:w-1/2 lg:w-6/12 lg:pr-4 sm:pr-2" data-aos="fade-right">
        <h3 className="pt-5 pb-2 text-xl font-bold sm:text-2xl text-Header">
          {title}
        </h3>
        <p className="mb-10 text-lg break-all">{desc}</p>
      </Col>
      <Col className="sm:w-1/2 lg:w-3/5" data-aos="fade-left">
        <img
          src={Cover}
          alt={title}
          className="object-cover w-full sm:h-80 lg:h-96"
        />
      </Col>
    </Row>
  );
};

export default AboutCard;
