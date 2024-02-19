import React, { useEffect, useState } from "react";
import { Badge, Button, Card, List, Typography } from "antd";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const Ouroffer = ({ item: { title, cover, discount, desc } }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <List className="relative w-full">
      {loading ? (
        <Skeleton variant="rectangular" height={250} />
      ) : (
        <img src={cover} alt="" className="object-cover w-full h-60" />
      )}
      <Badge.Ribbon
        text={`${discount}% off`}
        className="z-20 -mt-10 text-lg pattern"
        color=""
        style={{ width: 76, height: 32 }}
      />
      <Card
        title={title}
        actions={[
          <Link to={`/OfferReview/${title}`}>
            {loading ? (
              <Skeleton variant="rectangular" height={40} className="mx-20 " />
            ) : (
              <Button
                type="primary"
                className="h-10 text-white pattern hover:ring-2"
              >
                <h1>SEE THE OFFER</h1>
              </Button>
            )}
          </Link>,
        ]}
      >
        {loading ? (
          <Skeleton variant="rectangular" height={30} />
        ) : (
          <Card.Meta
            description={
              <Typography.Paragraph
                className="text-lg text-left break-word"
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
        )}
      </Card>
    </List>
  );
};

export default Ouroffer;
