import React from "react";
import Layout from "../../Layout/Layout";
import { Button, Form, Input, Select } from "antd";
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
      <div className="flex flex-col items-center w-full lg:h-[1400px] h-[1100px] pt-24 sm:pt-80 md:pt-36">
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
            <Col className="flex flex-col items-center gap-4 sm:flex-row">
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  {
                    required: true,
                    type: "text",
                    message: "Please Select Title",
                  },
                ]}
              >
                <Select placeholder="Select Title">
                  <Select.Option value="Mr">Mr</Select.Option>
                  <Select.Option value="Mrs">Mrs</Select.Option>
                  <Select.Option value="Miss">Miss</Select.Option>
                </Select>
              </Form.Item>
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
                  className="h-12 cursor-pointer w-80"
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
                  className="h-12 cursor-pointer w-80"
                />
              </Form.Item>
            </Col>
            <Col className="flex flex-col items-center gap-3 sm:flex-row">
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
                  className="h-12 cursor-pointer sm:w-96 w-80"
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
                  className="h-12 cursor-pointer sm:w-96 w-80"
                />
              </Form.Item>
            </Col>
            <Col className="flex flex-col items-center gap-3 sm:flex-row">
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
                  className="h-12 cursor-pointer sm:w-96 w-80"
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
                  className="h-12 cursor-pointer sm:w-96 w-80"
                />
              </Form.Item>
            </Col>
            <Col className="flex flex-col items-center gap-3 sm:flex-row"></Col>
            <Form.Item className="grid place-items-center">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 pt-3 bg-blue-600 border sm:w-80 sm:mt-8 cursor-point border-neutral-300"
            >
              Submit
            </Button>
            </Form.Item>
          </Form>
          <Link to="/sign-in">
            <p className="pt-4 text-center underline">
              Already have an account? Log in
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
