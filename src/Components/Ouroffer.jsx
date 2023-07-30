import React from "react";
import { Col, Container, Row } from "reactstrap";
import { AllOffers } from "../assets/Data";
import { Badge, Button, Card, List, Typography } from "antd";

const Ouroffer = () => {
  return (
    <Container className="w-full lg:h-[1300px] sm:h-[1800px] h-[3200px] py-10 md:pt-12 md:pb-5">
      <Row className="relative">
        <header className="w-full h-40 py-5 text-2xl text-center bg-green-200">
          Our Best Offers with Discounts
        </header>
        <Row className="absolute left-0 px-4 top-20 lg:px-20 sm:px-5">
          <Col className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AllOffers.map((offer, index) => {
              const { image, discount, desc, title } = offer;
              return (
                <List key={index} className="relative">
                  <img
                    src={image}
                    alt=""
                    className="object-cover w-full h-72"
                  />
                  <Badge.Ribbon
                    text={discount}
                    className="text-2xl z-20 -mt-12"
                    color="green"
                    style={{ width: 72, height: 40 }}
                  ></Badge.Ribbon>
                  <Card
                    title={title}
                    actions={[<Button type="primary" className="bg-green-500 hover:ring-2">SEE THE OFFER</Button>]}
                  >
                    <Card.Meta
                      description={
                        <Typography.Paragraph
                          ellipsis={{
                            rows: 2,
                            expandable: true,
                            symbol: "more",
                          }}
                        >
                          {desc}
                        </Typography.Paragraph>
                      }
                    ></Card.Meta>
                  </Card>
                </List>
              );
            })}
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Ouroffer;
