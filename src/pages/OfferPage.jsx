import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AllOffers } from "../Components/OfferSection/OfferData";
import PageNotFound from "./PageNotFound";
import { FaChevronLeft } from "react-icons/fa";
import HeadTitle from "../Components/HeadTitle";
import Layout from "../Layout/Layout";
import { Button, Card, Typography } from "antd";

const OfferPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = AllOffers.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <Layout>
      <div>
        <HeadTitle />
        {item ? (
          <div className="relative w-full h-full px-4 py-20 lg:px-12">
            <div className="absolute sm:right-16 top-8">
              <Link to="/offer">
                <span className="flex items-center gap-2 px-4 py-2 text-white rounded-md pattern">
                  <FaChevronLeft /> Go Back
                </span>
              </Link>
            </div>
            <div className="flex flex-col my-8 sm:gap-4 lg:gap-10 sm:flex-row">
              <div className="w-full sm:w-1/2 lg:w-3/5">
                <img src={item.cover} alt="cover" className="w-full" />
                <h1 className="pt-4 text-xl text-center underline">
                  {item.title}
                </h1>

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
                      {item.offerdesc}
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
                      {item.offerdesc}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
              </div>

              <div className="w-full h-full p-4 text-white pattern sm:w-1/2 lg:w-2/5">
                <h1 className="py-2 text-2xl">
                  Are you interrested in this offer?
                </h1>
                <p className="text-lg tracking-tight text-justify">
                  {item.offerdesc}
                </p>
                <Button
                  type="primary"
                  className="h-12 my-4 text-xl bg-green-600"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <PageNotFound />
        )}
      </div>
    </Layout>
  );
};

export default OfferPage;
