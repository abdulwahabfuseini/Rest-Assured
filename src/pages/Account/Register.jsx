import React from "react";
import Layout from "../../Layout/Layout";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Col } from "reactstrap";

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    navigate("/Rest-Assured");
  };

  return (
    <Layout>
      <div className="py-40 sm:py-40">
        <h1 className="pb-10 sm:text-xl text-center font-bold capitalize">
          Sign up to enjoy member rate when booking{" "}
        </h1>
        <div>
          <Form onFinish={handleSubmit} form={form} layout="vertical" className=" mx-auto sm:max-w-4xl lg:max-w-3xl px-3 sm:px-6">
            <Col className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Form.Item
                name="Fname"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please Enter First Name",
                  },
                  { type: "name" },
                ]}
                hasFeedback
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter First Name"
                  className="h-12 cursor-pointer w-full"
                />
              </Form.Item>
              <Form.Item
                name="Lname"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Last Name",
                  },
                  { type: "name" },
                ]}
                hasFeedback
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter Last Name"
                  className="h-12 cursor-pointer"
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please Enter email",
                  },
                  { type: "email" },
                ]}
                hasFeedback
              >
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  className="h-12 cursor-pointer"
                />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Phone Number",
                  },
                  { type: "tel" },
                ]}
                hasFeedback
              >
                <Input
                  type="number"
                  name="number"
                  placeholder="(000) 000 000 0000"
                  className="h-12 cursor-pointer"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please Enter password",
                  },
                  { type: "password" },
                ]}
                hasFeedback
              >
                <Input.Password
                  type="password"
                  placeholder="Enter Password"
                  className="h-12 cursor-pointer"
                />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="ConfirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Please Confirm password",
                  },
                  { type: "password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Password don't match");
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password
                  type="password"
                  placeholder="Confirm Password"
                  className="h-12 cursor-pointer"
                />
              </Form.Item>
            </Col>
            <Col className="px-3">
              <Button
                type="primary"
                htmlType="submit"
                className="h-12 w-full  bg-blue-600 border sm:mt-8 cursor-point border-neutral-300 text-lg"
              >
                Submit
              </Button>
            </Col>
            <Link to="/sign-in">
              <p className="pt-4 text-center text-lg sm:text-xl underline">
                Already have an account? Log in
              </p>
            </Link>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
