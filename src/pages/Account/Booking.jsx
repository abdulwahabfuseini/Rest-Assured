import React from "react";
import Layout from "../../layout/Layout";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";


const Booking = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full py-32 sm:items-center sm:justify-center sm:py-40 md:py-60">
        <h1 className="px-10 pb-10 text-xl font-bold">Manage my Booking</h1>
        <div>
          <Form layout="vertical" className="sm:w-[600px] sm:px-0 px-5">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please Enter Full Name",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter your full name"
                name="name"
                className="border-2 cursor-pointer h-14 border-neutral-400"
              />
            </Form.Item>
            <Form.Item
              label="Booking"
              name="booking"
              rules={[
                {
                  required: true,
                  message: "Please Enter a booking number",
                },
                { whitespace: false },
                { min: 8 },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter booking number"
                name="booking"
                className="border-2 cursor-pointer h-14 border-neutral-400"
                type="number"
              />
            </Form.Item>
           <Form.Item className="grid sm:place-items-center">
          <Link to="/review">
          <Button
             type="primary"
              htmlType="submit"
              className="w-full h-12 text-lg bg-blue-600 border sm:w-80 sm:mt-14 cursor-point border-neutral-300"
            >
              Search
            </Button>
          </Link>
           </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
