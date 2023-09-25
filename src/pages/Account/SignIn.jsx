import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { Button, Checkbox, Form, Input, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { ClipLoader } from "react-spinners";
import { BsEnvelopeAt } from "react-icons/bs";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      navigate("/Rest-Assured", { replace: true });
      message.success("Successfully Logged in")
    } catch (error) {
      message.error("Ooops!!! failed to Login")
    }
    setLoading(false);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-full py-40">
        <h1 className="px-10 pb-10 text-center sm:text-xl font--bold">
          Log in to enjoy your member rates
        </h1>
        <Form
          onFinish={handleSubmit}
          form={form}
          name="normal_login"
          className="w-full px-4 sm:w-96"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email" },
            ]}
          >
            <Input
              prefix={<BsEnvelopeAt />}
              placeholder="Email"
              className="h-14"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
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
              disabled={loading}
              htmlType="submit"
              className="w-full h-10 text-lg text-white pattern"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <ClipLoader
                    color="#36d7b7"
                    loading={loading}
                    size={20}
                    margin={2}
                  />
                  <h6>Loading...</h6>
                </div>
              ) : (
                "Log in"
              )}
            </Button>
          </Form.Item>
          <Link to="/register">
            <h6 className="pt-5 text-lg text-center hover:underline sm:text-xl">
              Don't have an account? Sign up
            </h6>
          </Link>
        </Form>
      </div>
    </Layout>
  );
};

export default SignIn;
