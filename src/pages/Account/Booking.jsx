import React from "react";
import Layout from "../../layout/Layout";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-full px-auto sm:py-40 md:py-60">
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
                  type: "number",
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
           <Form.Item className="grid place-items-center">
           <Button
             type="primary"
              htmlType="submit"
              className="w-full h-12 pt-3 bg-blue-400 border sm:w-80 sm:mt-14 cursor-point border-neutral-300"
            >
              Search
            </Button>
           </Form.Item>
          </Form>
          <Link to="/signin">
            <p className="pt-20 text-lg text-center underline sm:text-xl">
              Already have an account? Log in to manage all your bookings
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
