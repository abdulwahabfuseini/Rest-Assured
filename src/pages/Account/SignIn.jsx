import React from "react";
import Layout from "../../Layout/Layout";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  
  const handleSubmit = (values) => {
    navigate("/Rest-Assured", {replace: true})
  };

  return (
    <Layout>
      <div className="flex flex-col items-center w-full h-full  py-40 justify-center">
        <h1 className="px-10 pb-10 sm:text-xl text-center font--bold">
          Log in to enjoy your member rates
        </h1>
        <Form
          onFinish={handleSubmit}
          form={form}
          name="normal_login"
          className="px-4 w-full sm:w-96"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              className="h-14"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="h-14"
            />
          </Form.Item>
          <Form.Item className="flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="/" className="relative mr-0">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-10 text-white text-lg bg-Header"
            >
              Log in
            </Button>
          </Form.Item>
          <Link to="/register">
            <h6 className="pt-5 text-lg sm:text-xl text-center underline">
              Don't have an account? Sign up
            </h6>
          </Link>
        </Form>
      </div>
    </Layout>
  );
};

export default SignIn;
