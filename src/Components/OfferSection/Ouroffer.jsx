import React, { useEffect, useState } from "react";
import { Badge, Button, Card, List, Typography } from "antd";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const Ouroffer = ({ item: { id, title, cover, discount, desc } }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <List className="relative">
      {loading ? (
        <Skeleton variant="rectangular" width={450} height={250} />
      ) : (
        <img src={cover} alt="" className="object-cover w-full h-60" />
      )}
      <Badge.Ribbon
        text={discount}
        className="z-20 -mt-12 text-2xl pattern"
        color=""
        style={{ width: 72, height: 40 }}
      ></Badge.Ribbon>
      <Card
        title={title}
        actions={[
          <Link to={`/Offerpage/${id}`}>
            <Button
              type="primary"
              className="text-white pattern hover:ring-2 h-10"
            >
              {loading ? (
                <Skeleton variant="rectangular" width={90} height={20} />
              ) : (
                <h1>SEE THE OFFER</h1>
              )}
            </Button>
          </Link>,
        ]}
      >
        {loading ? (
          <Skeleton variant="rectangular" width={400} height={60} />
        ) : (
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
        )}
      </Card>
    </List>
  );
};

export default Ouroffer;
