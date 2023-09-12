import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { FaChevronLeft } from "react-icons/fa";
import HeadTitle from "../components/HeadTitle";
import Layout from "../layout/Layout";
import { Button, Card, Typography, DatePicker, Form, Input } from "antd";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { HotelData } from "../components/review/HotelData";
import { Col } from "reactstrap";
import location from "../assets/images/location.gif";

const ReviewPage = () => {
  const { id } = useParams();

  let item = HotelData.find((item) => item.place === id);

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
                <Button
                  onClick={handleOpen}
                  type="primary"
                  className="h-12 my-4 text-xl bg-green-600"
                >
                  Book Now
                </Button>
              </div>
            </div>
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
                        {
                          required: true,
                          message: "Please Enter Email Address",
                        },
                        { type: "email" },
                      ]}
                    >
                      <Input type="email" placeholder="Enter Email Address" />
                    </Form.Item>
                    <Form.Item
                      name={"number"}
                      rules={[
                        {
                          required: true,
                          message: "Please Enter Phone Number",
                        },
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
                      <DatePicker placeholder="Check In" className="w-full" />
                    </Form.Item>
                    <Form.Item
                      name={"Check out"}
                      rules={[
                        { required: true, message: "Please Select Date" },
                        { type: "date" },
                      ]}
                    >
                      <DatePicker placeholder="Check Out" className="w-full" />
                    </Form.Item>
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      className="w-full p-2 text-white pattern"
                      style={{ color: "white" }}
                    >
                      Book
                    </Button>
                  </Form>
                </DialogContent>
              </Dialog>
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
