import React, { useState } from "react";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Image,
  Input,
  Rate,
  Typography,
  Row,
} from "antd";
import { Col } from "reactstrap";
import { FaTimes } from "react-icons/fa";


const BlogCard = ({ cover, desc, rating }) => {
  const [Book, setBook] = useState(false);
  const [form] = Form.useForm()

  const handleSubmit = (values) => {
    console.log("Received values of form:", values);
    form.resetFields()
  }
  
  return (
    <Row className="relative">
    <Card
      className="ounded-none "
      cover={
        <Image
          src={cover}
          alt={cover}
          className="object-cover w-full"
          style={{ height: 230, width: 500 }}
        />
      }
      actions={[
        <Rate allowHalf value={rating} className="text-sm sm:text-md" />,
        <Button onClick={() => setBook(true)}>Book Now</Button>,
      ]}
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
    {Book && (
            <Card className="absolute top-0 z-40 bg-white shadow-lg w-60">
              <Form onFinish={handleSubmit} form={form}>
               <Col className="flex justify-between">
               <h4 className="pb-3 text-center text-md">Provide Your Details</h4>
                <FaTimes onClick={() => setBook(false)} className="w-4 h-4 cursor-pointer text-slate-600"/>
               </Col>
                <Form.Item
                  name={"name"}
                  rules={[
                    { required: true, message: "Please Enter Full Name" },
                    {type: "name"}
                  ]}
                >
                  <Input type="text" placeholder="Enter Full Name" />
                </Form.Item>
                <Form.Item
                  name={"email"}
                  rules={[
                    { required: true, message: "Please Enter Email Address" },
                    {type: "email"}
                  ]}
                >
                  <Input type="email" placeholder="Enter Email Address" />
                </Form.Item>
                <Form.Item
                  name={"number"}
                  rules={[
                    { required: true, message: "Please Enter Phone Number" },
                    {type: "tel"}
                  ]}
                >
                  <Input type="tel" placeholder="Enter Phone Number" />
                </Form.Item>
                <Form.Item
                  name={"Check in"}
                  rules={[
                    { required: true, message: "Please Select Date" },
                    {type: "date"}
                  ]}
                >
                 <DatePicker placeholder="Check In" className="w-full"/>
                </Form.Item>
                <Form.Item
                  name={"Check out"}
                  rules={[
                    { required: true, message: "Please Select Date" },
                    {type: "date"}
                  ]}
                >
                 <DatePicker placeholder="Check Out" className="w-full"/>
                </Form.Item>
                <Button type="primary" size="large" htmlType="submit" className="w-full bg-dryBlue">Book</Button>
              </Form>
            </Card>
          )}
    </Row>
  );
};

export default BlogCard;


