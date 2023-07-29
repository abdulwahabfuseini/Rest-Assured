import React from "react";
import Layout from "../Layout/Layout";
import { Button, Form, Input, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Col } from "reactstrap";

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    navigate("/");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center w-full lg:h-[1400px] h-[1100px] pt-24 sm:pt-80 md:pt-20">
        <h1 className="px-10 pb-10 text-xl text-center font--bold">
          Sign up to enjoy member rate when booking{" "}
        </h1>
        <div>
          <Form
            onFinish={handleSubmit}
            form={form}
            layout="vertical"
            className="sm:w-[750px] w-96 sm:px-0 px-5"
          >
            <Col className="flex flex-col items-center gap-3 sm:flex-row">
              <Form.Item
                rules={[
                  {
                    required: true,
                    type: "text",
                    message: "Select Title",
                  },
                ]}
                hasFeedback
              >
                <Select placeholder="Title">
                  <Select.Option value="Mr">Mr</Select.Option>
                  <Select.Option value="Mrs">Mrs</Select.Option>
                  <Select.Option value="Miss">Miss</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    type: "text",
                    message: "Please Enter Full Name",
                  },
                ]}
                hasFeedback
              >
                <Input
                  placeholder="First Name*"
                  name="name"
                  className="w-64 border-2 cursor-pointer h-14 border-neutral-400"
                />
              </Form.Item>
              <Form.Item
              rules={[
                {
                  required: true,
                  type: "text",
                  message: "Please Enter Last Name",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Last Name*"
                name="LastName"
                className="w-64 border-2 cursor-pointer h-14 border-neutral-400"
              />
            </Form.Item>
            </Col>
            <Col className="flex flex-col items-center gap-3 sm:flex-row">
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please Enter a valid email",
                },
              ]}
            >
              <Input
                placeholder="E-Mail Address"
                name="email"
                className="border-2 cursor-pointer w-80 h-14 border-neutral-400"
                type="number"
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "text",
                  message: "Enter Country Name",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Country Name*"
                name="Country"
                className="border-2 cursor-pointer h-14 border-neutral-400 w-80"
              />
            </Form.Item>
            </Col>
            <Col className="flex flex-col items-center gap-3 sm:flex-row">
            </Col>
            <Col className="flex flex-col items-center gap-3 sm:flex-row">
            </Col>
          
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "number",
                  message: "Enter Phone Number",
                },
                { min: 10 },
              ]}
            >
              <Input
                placeholder="Phone Number"
                name="booking"
                className="border-2 cursor-pointer h-14 border-neutral-400"
                type="number"
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "password",
                  message: "Please Enter a booking number",
                },
                { min: 8 },
              ]}
            >
              <Input
                placeholder="Create Password"
                name="password"
                className="border-2 cursor-pointer h-14 border-neutral-400"
                type="password"
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "password",
                  message: "Please Confirm Password",
                },
                { min: 8 },
              ]}
            >
              <Input
                placeholder="Confirm Password"
                name="password"
                className="border-2 cursor-pointer h-14 border-neutral-400"
                type="password"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 pt-3 bg-blue-600 border sm:w-80 sm:mx-32 sm:mt-8 cursor-point border-neutral-300"
            >
              Submit
            </Button>
          </Form>
          <Link to="/sign-in">
            <p className="pt-12 text-center underline">
              Already have an account? Log in
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
