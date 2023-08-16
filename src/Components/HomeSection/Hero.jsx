import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { HeroSlide, ServiceProvide } from "./HomeData";
import { FaPlusCircle } from "react-icons/fa";
import { BsChevronCompactRight } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Card, DatePicker, Form } from "antd";

const Hero = () => {
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
              className="w-full h-[350px] sm:h-[420px]"
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
              <Form>
                <Col className="flex items-center gap-2 text-white">
                  <DatePicker className="order-2 w-64 py-2 text-white border-2 border-yellow-300 bg-glass backdrop-blur-lg h-14"/>
                  <DatePicker className="order-2 w-64 py-2 text-white border-2 border-yellow-300 bg-glass backdrop-blur-lg h-14"/>
                </Col>
                <Col className="flex items-center justify-between gap-4 p-4 my-3 text-white border-2 border-yellow-300 rounded-md bg-glass backdrop-blur-lg">
                  <input className="w-full bg-transparent border-none outline-none focus:none" />
                  <AiOutlineUser className="w-6 h-6 font-bold text-yellow-400" />
                </Col>
                <Col
                  type="primary"
                  className="flex items-center justify-center w-full gap-6 p-3 my-10 font-semibold bg-yellow-400 border-none"
                >
                  <h1>FIND A ROOM</h1>
                  <BsChevronCompactRight className="text-lg " />
                </Col>
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
          {
            ServiceProvide.map((service, index) => {
              const {cover, name} = service
              return(
                <Col key={index} className="flex flex-col items-center space-y-4 lg:space-y-8">
                <img src={cover} alt="" className="w-12 h-12 sm:w-16 sm:h-16" />
                <p className="text-sm font-semibold sm:text-lg">{name}</p>
              </Col>
              )
            })
          }
        </Row>
      </Container>
    </>
  );
};

export default Hero;
