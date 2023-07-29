import React from "react";
import { Col, Container, Row } from "reactstrap";
import { AllOffers } from "../assets/Data";

const Ouroffer = () => {
  return (
    <Container className="w-full lg:h-[1300px] sm:h-[1800px] h-[3500px] py-10 md:pt-12 md:pb-5">
      <Row className="relative">
        <header className="w-full h-40 py-5 text-2xl text-center bg-green-200">
          Our Best Offers with Discounts
        </header>
        <Row className="absolute left-0 px-4 top-20 lg:px-20 sm:px-5">
          <Col className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {AllOffers.map((offer, index) => {
              const { image, discount, desc, title } = offer;
              return (
                <Col key={index} className="relative">
                  <img
                    src={image}
                    alt=""
                    className="object-cover w-full h-72"
                  />
                  <Col className="px-6 py-3 mb-10 bg-white shadow-lg">
                    <h2 className="absolute right-0 p-2 text-xl font-bold text-white top-[15.25rem] bg-Header">
                      {discount}
                    </h2>
                    <h6 className="pb-5">{title}</h6>
                    <p>{desc}</p>
                    <button className="px-8 py-3 my-5 text-white md:px-12 md:py-4 rounded-3xl bg-Header">SEE THE OFFER</button>
                  </Col>
                </Col>
                
              );
            })}
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Ouroffer;
