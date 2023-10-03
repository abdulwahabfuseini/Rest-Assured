import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AllOffers } from "../components/offerSection/OfferData";
import PageNotFound from "./PageNotFound";
import { FaChevronLeft } from "react-icons/fa";
import HeadTitle from "../components/HeadTitle";
import Layout from "../layout/Layout";
import { Button, Card, Modal, Typography } from "antd";
import BookingForm from "../components/BookingForm";

const OfferPage = () => {
  const { id } = useParams();

  let item = AllOffers.find((item) => item.title === id);

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
              <Link to="/offer">
                <span className="flex items-center gap-2 px-2 py-2 text-white rounded-md pattern">
                  <FaChevronLeft /> Go Back
                </span>
              </Link>
            </div>
            <div className="flex flex-col my-8 sm:gap-4 lg:gap-10 sm:flex-row">
              <div className="w-full px-4 sm:w-1/2 lg:w-3/5 sm:px-0">
                <img src={item.cover} alt="cover" className="w-full" />
                <h1 className="pt-4 text-xl text-center underline">
                  {item.title}
                </h1>
                <Card.Meta
                  description={
                    <Typography.Paragraph
                      className="py-4  text-justify text-[18px] sm:text-lg"
                      ellipsis={{
                        rows: 2,
                        expandable: true,
                        symbol: "Read More",
                      }}
                    >
                      {item.offerdesc}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
                <Card.Meta
                  description={
                    <Typography.Paragraph
                      className="py-4 text-justify text-[18px] sm:text-lg"
                      ellipsis={{
                        rows: 2,
                        expandable: true,
                        symbol: "Read More",
                      }}
                    >
                      {item.offerdesc}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
              </div>
              <div className="w-full h-full p-4 sm:w-1/2 lg:w-2/5">
                <h1 className="py-2 text-2xl sm:text-2xl">
                  Are you interrested in this offer?
                </h1>
                <Typography.Paragraph className="text-justify text-[17px] sm:text-lg">
                  {item.offerdesc}
                </Typography.Paragraph>
                <Typography.Paragraph style={{ fontSize: 20 }}>
                  Price: $ {item.price.toLocaleString()}.00
                  <Typography.Text delete type="danger" className="pl-4">
                    {parseFloat(
                      item.price + (item.price * item.discount) / 100
                    ).toLocaleString()}
                    .00
                  </Typography.Text>
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

export default OfferPage;
