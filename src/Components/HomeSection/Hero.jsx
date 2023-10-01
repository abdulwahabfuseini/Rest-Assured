import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { HeroSlide, ServiceProvide } from "./HomeData";
import { FaPlusCircle } from "react-icons/fa";
import { BsChevronCompactRight } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Button, Card, DatePicker, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    console.log("Received values of form:", values);
    navigate("/review")
    alert(
      "Thanks for reserving a table, we will love to see you at the exact time."
    );
  };

  return (
    <>
      <Container className="w-full h-full py-[74px] relative">
        <Row className="flex flex-col items-center sm:flex-row">
          <Col className="w-full sm:w-1/2 lg:w-9/12">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              speed={1000}
              modules={[Autoplay]}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              className="w-full h-[350px] sm:h-[430px]"
            >
              {HeroSlide.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={slide.cover}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col className="w-full sm:w-1/2 lg:w-3/12">
            <Card className="rounded-none pattern">
              <h1 className="py-5 text-2xl font-bold text-center text-white">
                Your Stay
              </h1>
              <Form form={form} onFinish={handleSubmit}>
                <Col className="flex items-center gap-2">
                  <Form.Item
                    name="CheckIn"
                    rules={[{ required: true, message: "Field is reguired" }]}
                  >

                  <DatePicker
                      name="CheckIn"
                      placeholder="Check In"
                      size="large"
                      className="w-full py-2 text-white border-2 border-yellow-300 bg-white backdrop-blur-lg h-14"
                    />
                  </Form.Item>
                  <Form.Item
                    name="CheckOut"
                    rules={[{ required: true, message: "Field is reguired" }]}
                  >
 
                   <DatePicker
                      name="CheckOut"
                      placeholder="Check Out"
                      size="large"
                      className="w-full py-2 text-white border-2 border-yellow-300 bg-white backdrop-blur-lg h-14"
                    />

                  </Form.Item>
                </Col>
                <Form.Item
                  name="people"
                  rules={[{ required: true, message: "Field is required" }]}
                >
                  <Input
                    name="people"
                    prefix={
                      <AiOutlineUser className="w-6 h-6 font-bold text-yellow-400" />
                    }
                    className="w-full  border-2 outline-none border-yellow-300 focus:none h-14"
                    placeholder="Number of people"
                  />
                </Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  className="flex items-center justify-center w-full gap-4 p-3 my-10 font-semibold bg-yellow-400 border-none h-12"
                >
                  <h1>FIND A HOTEL</h1>
                  <BsChevronCompactRight className="text-lg " />
                </Button>
                <Col
                  type="primary"
                  className="flex items-center gap-2 p-3 cursor-pointer"
                >
                  <FaPlusCircle className="text-lg text-yellow-400" />
                  <h5 className="font-semibold text-white">Add special code</h5>
                </Col>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row className="flex flex-wrap items-center justify-center w-full h-full gap-12 py-8 sm:gap-20 sm:py-14 lg:gap-24 lg:py-20">
          {ServiceProvide.map((service, index) => {
            const { cover, name } = service;
            return (
              <Col
                key={index}
                className="flex flex-col items-center space-y-4 lg:space-y-8"
              >
                <img src={cover} alt="" className="w-12 h-12 sm:w-16 sm:h-16" />
                <p className="text-sm font-semibold sm:text-lg">{name}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Hero;
