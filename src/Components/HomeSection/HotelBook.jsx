import React, { useState } from "react";
import { Card, Image, List, Modal, Rate, Typography } from "antd";
import Button from "@mui/material/Button";
import BookingForm from "../../components/BookingForm";



const HotelBook = ({ name, cover, rating, price, discount }) => {
  const [book, setBook] = useState(false);

  const handleClickOpen = () => {
    setBook(true);
  };


  return (
    <List>
      <Card
        className="rounded-none"
        cover={
          <Image
            src={cover}
            alt=""
            className="object-cover w-full"
            style={{ height: 180, width: 500 }}
          />
        }
        actions={[
          <Rate allowHalf value={rating} className="text-sm sm:text-md" />,
          <Button
            type="primary"
            onClick={handleClickOpen}
            className=" font-semibold"
          >
            Book Now
          </Button>,
        ]}
        title={name}
      >
        <Card.Meta
          title={
            <Typography.Paragraph>
              Price: $ {price}.00
              <Typography.Text delete type="danger" className="pl-4">
                {parseFloat(price + (price * discount) / 100).toFixed(2)}
              </Typography.Text>
            </Typography.Paragraph>
          }
        ></Card.Meta>
      </Card>
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
    </List>
  );
};

export default HotelBook;
