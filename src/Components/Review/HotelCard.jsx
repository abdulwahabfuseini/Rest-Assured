import { Image, Card, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { Col, Row } from "reactstrap";
import Skeleton from "@mui/material/Skeleton";
import location from "../../assets/images/location.gif";
import { Link } from "react-router-dom";

const HotelCard = ({ cover, place, desc, rate, star, Room, price }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Row className="flex flex-col gap-4 p-2 mb-4 border sm:p-4 sm:flex-row">
      <Col className="w-full sm:w-1/2 lg:w-2/5">
        {loading ? (
          <Skeleton variant="rectangular" width={450} height={250} />
        ) : (
          <Image
            style={{ width: 600, height: 280 }}
            src={cover}
            alt="hotel"
            className="object-cover"
          />
        )}
      </Col>
      <Col className="w-full px-2 mb-4 sm:px-4 sm:w-1/2 lg:w-3/5">
        {loading ? (
          <Skeleton variant="rectangular" width={600} height={60} />
        ) : (
          <>
            <Col className="flex items-center gap-3 pb-4">
              <img src={location} alt="location" className="w-8 h-8" />
              <h1 className="text-lg">{place}</h1>
            </Col>
            <Card.Meta
              description={
                <Typography.Paragraph
                  ellipsis={{
                    rows: 2,
                    expandable: true,
                    symbol: "Read More",
                  }}
                >
                  {desc}
                </Typography.Paragraph>
              }
            ></Card.Meta>
          </>
        )}

        {loading ? (
          <Skeleton variant="rectangular" width={600} height={60} />
        ) : (
          <Col className="flex flex-wrap items-center justify-center gap-6 pt-14">
            <Col className="flex items-center gap-2 pr-10 border-r">
              <BsStar />
              <h4 className="text-gray-500">
                {rate} <br /> <span className="text-black">{star}</span>
              </h4>
            </Col>
            <Col className="flex items-center gap-2 pr-10 border-r">
              <BsStar />
              <h4 className="text-sm text-gray-500">
                {Room} <br />{" "}
                <span className="text-black">
                  ${price} <span className="text-gray-500">/per night</span>
                </span>
              </h4>
            </Col>
            <button className="px-4 py-2 text-white pattern">
              <Link to={`/reviewpage/${place}`}> CHECK AVALABILITY</Link>
            </button>
          </Col>
        )}
      </Col>
    </Row>
  );
};

export default HotelCard;
