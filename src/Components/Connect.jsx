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
  const [form] = Form.useForm();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNumber: '',
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (values) => {
    setLoading(true);
    emailjs
      .send(
        "service_hc4os5t",
        "template_mnp1bqq",
        {
          name: contact.name,
          email: contact.email,
          phoneNumber: contact.phoneNumber,
          address: contact.address,
          message: contact.message,
        },
        "9vSC2INYrwofrkKDo"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thanks for contacting Rest Assured Hotel, we will get back to you as soon as possible. Stay Bless!!!"
          );
          setContact();
          form.resetFields();
        },
        (error) => {
          setLoading(false);
          alert("oops!!! Something went wrong");
        }
      );
  };

  return (
    <div className="w-full h-full px-4 py-10 sm:px-8 lg:px-20">
      <div className="flex flex-col gap-y-10 lg:flex-row sm:gap-8 lg:gap-20">
        <Form onFinish={handleSubmit} form={form}  layout="vertical" className="lg:w-3/5 ">
          <Col className="grid grid-cols-1 sm:gap-2 md:gap-4 sm:grid-cols-2">
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
                placeholder="Enter Full Name"
                name="name"
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
                  message: "Please Enter email",
                },
                {type: "email"}
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
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please Enter  Phone Number",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="(000) 000 0000"
                name="phoneNumber"
                onChange={handleChange}
                className="h-12 border-2 cursor-pointer border-neutral-400"
                type="tel"
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
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please Enter message",
                },
              ]}
            >
              <TextArea
                placeholder="Enter Message"
                name="message"
                onChange={handleChange}
                className="py-2 border-2 cursor-pointer border-neutral-400"
                type="text"
              />
            </Form.Item>
          </Col>
          <Col className="grid grid-cols-1">
            <Button
              htmlType="submit"
              type="primary"
              className="h-12 my-8 text-xl border-2 cursor-pointer border-neutral-300 pattern"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Col>
        </Form>
        <div className="space-y-5 lg:px-6 lg:w-2/5">
          <Col>
            <h1 className="pb-2 text-xl font-bold">Visit our loaction</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              saepe sed blanditiis?
            </p>
          </Col>
          <Col>
            <h1 className="pb-2 text-lg font-bold">Message Us</h1>
            <p className="text-lg">info@RestAssuredHotel.com</p>
            <a className="text-lg" href="tel:+233245264999">+233 24 526 4999</a>
          </Col>
          <Col>
            <h1 className="pb-2 text-lg font-bold">Follow Us</h1>
            <Col className="flex items-center gap-4 pt-2">
              <FaFacebookF className="w-8 h-8 p-1 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
              <FaTwitter className="w-8 h-8 p-1 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
              <FaLinkedin className="w-8 h-8 p-1 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
              <FaInstagram className="w-8 h-8 p-1 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
              <FaYoutube className="w-8 h-8 p-1 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
              <FaWhatsapp className="w-8 h-8 p-1 rounded-lg cursor-pointer bg-slate-200 hover:-translate-y-1" />
            </Col>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Connect;
