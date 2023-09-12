import React, { useState } from "react";
import {
  Card,
  DatePicker,
  Form,
  Image,
  Input,
  List,
  Rate,
  Typography,
} from "antd";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const HotelBook = ({ name, cover, rating, price, discount }) => {
  const [Book, setBook] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Received values of form:", values);
    form.resetFields();
  };

  const handleOpen = () => {
    setBook(true);
  };

  const handleClose = () => {
    setBook(false);
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
            onClick={handleOpen}
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
              Price: ${price}
              <Typography.Text delete type="danger" className="pl-4">
                {parseFloat(price + (price * discount) / 100).toFixed(2)}
              </Typography.Text>
            </Typography.Paragraph>
          }
        ></Card.Meta>
      </Card>
      {Book && (
        <Dialog open={Book} onClose={handleClose}>
          <DialogTitle className="pb-3 text-center text-md">
            Provide Your Details
          </DialogTitle>
          <DialogContent>
            <Form onFinish={handleSubmit} form={form}>
              <Form.Item
                name={"name"}
                rules={[
                  { required: true, message: "Please Enter Full Name" },
                  { type: "name" },
                ]}
              >
                <Input type="text" placeholder="Enter Full Name" />
              </Form.Item>
              <Form.Item
                name={"email"}
                rules={[
                  { required: true, message: "Please Enter Email Address" },
                  { type: "email" },
                ]}
              >
                <Input type="email" placeholder="Enter Email Address" />
              </Form.Item>
              <Form.Item
                name={"number"}
                rules={[
                  { required: true, message: "Please Enter Phone Number" },
                  { type: "tel" },
                ]}
              >
                <Input type="tel" placeholder="Enter Phone Number" />
              </Form.Item>
              <Form.Item
                name={"Check in"}
                rules={[
                  { required: true, message: "Please Select Date" },
                  { type: "date" },
                ]}
              >
                <DatePicker placeholder="Check In" className="w-full " />
              </Form.Item>
              <Form.Item
                name={"Check out"}
                rules={[
                  { required: true, message: "Please Select Date" },
                  { type: "date" },
                ]}
                className="z-50"
              >
                <DatePicker placeholder="Check Out" className="w-full" />
              </Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="pattern text-white p-2 w-full"
                style={{ color: "white" }}
              >
                Book
              </Button>
            </Form>
          </DialogContent>
        </Dialog>
      )}
    </List>
  );
};

export default HotelBook;
