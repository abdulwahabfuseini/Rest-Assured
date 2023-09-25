import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { FaChevronLeft } from "react-icons/fa";
import HeadTitle from "../components/HeadTitle";
import Layout from "../layout/Layout";
import { Button, Card, Modal, Typography } from "antd";
import BookingForm from "../components/BookingForm";
import { HotelData } from "../components/review/HotelData";
import { Col } from "reactstrap";
import location from "../assets/images/location.gif";

const ReviewPage = () => {
  const { id } = useParams();

  let item = HotelData.find((item) => item.place === id);

  const [book, setBook] = useState(false);

  const handleClickOpen = () => {
    setBook(true);
  };

  return (
    <Layout>
      <div>
        <HeadTitle />
        {item ? (
          <div className="relative w-full h-full py-20 sm:px-4 lg:px-12">
            <div className="absolute left-3 top-8 sm:left-5 lg:left-12">
              <Link to="/review">
                <span className="flex items-center gap-2 px-2 py-2 text-white rounded-md pattern">
                  <FaChevronLeft /> Go Back
                </span>
              </Link>
            </div>
            <div className="flex flex-col my-8 sm:gap-4 lg:gap-10 sm:flex-row">
              <div className="w-full px-4 sm:w-1/2 lg:w-3/5 sm:px-0">
                <img src={item.cover} alt="cover" className="w-full" />
                <Col className="flex items-center gap-3 py-4">
                  <img src={location} alt="location" className="w-8 h-8" />
                  <h1 className="text-lg">{item.place}</h1>
                </Col>
                <Card.Meta
                  description={
                    <Typography.Paragraph
                      className="py-4 text-lg tracking-tight text-justify"
                      ellipsis={{
                        rows: 2,
                        expandable: true,
                        symbol: "Read More",
                      }}
                    >
                      {item.desc}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
                <Card.Meta
                  description={
                    <Typography.Paragraph
                      className="py-4 text-lg tracking-tight text-justify"
                      ellipsis={{
                        rows: 2,
                        expandable: true,
                        symbol: "Read More",
                      }}
                    >
                      {item.desc}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
              </div>
              <div className="w-full h-full p-4 sm:w-1/2 lg:w-2/5">
                <Col className="flex items-center gap-3 pb-4">
                  <img src={location} alt="location" className="w-8 h-8" />
                  <h1 className="text-lg sm:text-xl">{item.place}</h1>
                </Col>
                <Typography.Paragraph className="text-lg tracking-tighter text-justify ">
                  {item.desc}
                </Typography.Paragraph>
                <Typography.Paragraph style={{ fontSize: 20 }}>
                  Price: $ {item.price.toLocaleString()}.00 /per night
                </Typography.Paragraph>
                <Button
                  onClick={handleClickOpen}
                  type="primary"
                  className="h-12 my-4 text-xl bg-green-600"
                >
                  Book Now
                </Button>
              </div>
            </div>
            {book && (
              <Modal
                title="Provide your details to reserve a table"
                open={book}
                onOk={() => setBook(false)}
                onCancel={() => setBook(false)}
                footer={[]}
              >
                <BookingForm />
              </Modal>
            )}
          </div>
        ) : (
          <PageNotFound />
        )}
      </div>
    </Layout>
  );
};

export default ReviewPage;
