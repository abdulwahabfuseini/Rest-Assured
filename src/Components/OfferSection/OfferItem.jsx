import React from "react";
import { Container, Row, Col } from "reactstrap";
import Ouroffer from "./Ouroffer";
import { AllOffers } from "./OfferData";

const OfferItem = () => {
  return (
    <Container className="w-full lg:h-[1000px] sm:h-[1470px] h-[3000px] py-10 md:pt-12 md:pb-5">
      <Row className="relative">
        <header className="w-full py-5 text-2xl text-center text-white h-44 pattern">
          Our Best Offers with Discounts
        </header>
        <Row className="absolute left-0 px-4 top-20 lg:px-20 sm:px-5">
          <Col className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {AllOffers.map((item) => {
              return (
                <Col className="flex items-center justify-center">
                  <Ouroffer key={item.id} item={item} />
                </Col>
              );
            })}
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default OfferItem;
