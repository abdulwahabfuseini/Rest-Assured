import React from "react";
import { Col, Container, Row } from "reactstrap";
import { HotelData } from "./HotelData";
import HotelCard from "./HotelCard";

const HotelReview = () => {
  return (
    <Container className="w-full h-full py-16 lg:p-20">
      <Row>
        <Col className="text-center pb-10 leading-10">
          <header className="text-2xl">Hotel Reviews</header>
          <h1 className="text-lg">Five Star hotel reviews</h1>
        </Col>
        <Col>
          {HotelData.map((review) => {
            return (
              <HotelCard
                key={review.id}
                cover={review.cover}
                place={review.place}
                Rate={review.Rate}
                Room={review.Room}
                price={review.price}
                star={review.star}
                desc={review.desc}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default HotelReview;
