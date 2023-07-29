import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Col } from "reactstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Connect = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: 0,
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (values) => {
    setLoading(true);
    emailjs
      .send(
        "service_hc4os5t",
        "template_mnp1bqq",
        {
          name: form.name,
          email: form.email,
          phoneNumber: form.phoneNumber,
          address: form.address,
          message: form.message,
        },
        "9vSC2INYrwofrkKDo"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thanks for contacting Rest Assured Hotel we will get black to you as soon as possible. Stay Bless!!!"
          );
          setForm();
        },
        (error) => {
          setLoading(false);
          alert("oops!!! Something went wrong");
        }
      );
  };

  return (
    <div className="w-full h-full px-8 py-10 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col space-y-10 sm:space-y-0 sm:flex-row sm:gap-8 md:gap-14 lg:gap-20">
        <Form onFinish={handleSubmit} layout="vertical" className="sm:w-3/5 ">
          <Col className="grid grid-cols-1 sm:gap-2 md:gap-4 sm:grid-cols-2">
          <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please Enter your Full Name",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter Full Name"
                name="text"
                onChange={handleChange}
                className="h-12 border-2 cursor-pointer border-neutral-400"
                type="text"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please Enter a valid email",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter your email"
                name="email"
                onChange={handleChange}
                className="h-12 border-2 cursor-pointer border-neutral-400"
                type="email"
              />
            </Form.Item>
          </Col>
          <Col className="grid grid-cols-1 sm:gap-2 md:gap-4 sm:grid-cols-2">
            <Form.Item
              label="Phone Number"
              name="phonenumber"
              rules={[
                {
                  required: true,
                  type: "number",
                  message: "Please Enter your Phone Number",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="(000) 000 0000"
                name="number"
                onChange={handleChange}
                className="h-12 border-2 cursor-pointer border-neutral-400"
                type="number"
              />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please Enter Address",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter your Address"
                name="address"
                onChange={handleChange}
                className="h-12 border-2 cursor-pointer border-neutral-400"
                type="text"
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please Enter message",
                },
              ]}
              hasFeedback
            >
              <TextArea
                placeholder="Enter Message"
                name="message"
                onChange={handleChange}
                className="border-2 cursor-pointer border-neutral-400"
                type="text"
              />
            </Form.Item>
          </Col>
          <Col className="grid grid-cols-1">
            <Button
              htmlType="submit"
              type="primary"
              className="h-10 my-8 border-2 cursor-pointer border-neutral-300 bg-dry"
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </Col>
        </Form>
        <div className="space-y-5 lg:px-6 sm:w-2/5">
          <Col>
            <h1 className="pb-2 text-xl font-bold">Visit our loaction</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              saepe sed blanditiis?
            </p>
          </Col>
          <Col>
            <h1 className="pb-2 text-lg font-bold">Message Us</h1>
            <p className="text-sm">info@RestAssuredHotel.com</p>
            <a href="tel:+233245264999">+233 24 526 4999</a>
          </Col>
          <Col>
            <h1 className="pb-2 text-lg font-bold">Follow Us</h1>
            <Col className="flex items-center gap-4 pt-2">
              <FaFacebookF className="w-8 h-8 p-2 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
              <FaTwitter className="w-8 h-8 p-2 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
              <FaLinkedin className="w-8 h-8 p-2 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
              <FaInstagram className="w-8 h-8 p-2 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
              <FaYoutube className="w-8 h-8 p-2 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
              <FaWhatsapp className="w-8 h-8 p-2 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
            </Col>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Connect;
