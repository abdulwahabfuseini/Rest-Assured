import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { HeroSlide } from "../../assets/Data";
import {
  // BiCalendar,
  // BiSolidEditLocation,
  BiSolidLeftArrow,
  BiSolidRightArrow,
  // BiUser,
} from "react-icons/bi";
// import { Button, Checkbox, Form, Input } from "antd";

const Hero = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);

  return (
    <>
      <Container>
        <Row className="">
          <Col className="relative">
            <Swiper
              navigation={{ nextEl, prevEl }}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              speed={1000}
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              className="w-full  bg-dry h-[400px]  sm:h-[200px] md:h-[520px]  lg:h-screen"
            >
              {HeroSlide.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={slide.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col className="relative">
            <button
              ref={(node) => setPrevtEl(node)}
              className="absolute z-30 p-2 text-white border-4 rounded-full cursor-pointer border-glass -top-52 md:-top-72 sm:-top-28 left-4 md:left-10 lg:-top-96 bg-Header"
            >
              <BiSolidLeftArrow />
            </button>
            <button
              ref={(node) => setNextEl(node)}
              className="absolute z-30 p-2 text-white border-4 rounded-full cursor-pointer border-glass -top-52 md:-top-72 sm:-top-28 right-4 md:right-10 lg:-top-96 bg-Header"
            >
              <BiSolidRightArrow />
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
