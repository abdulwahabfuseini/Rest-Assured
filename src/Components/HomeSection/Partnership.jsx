import React from "react";
import { OurPartnership } from "./HomeData";
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row } from "reactstrap";

const Partnership = () => {
  return (
    <div className="w-full h-full pb-4 mb-12 bg-gray-100">
      <div className="relative">
        <header className="w-full py-5 text-3xl text-center">
          PartnerShips
        </header>
        <Swiper
          spaceBetween={6}
          loop={true}
          speed={3000}
          modules={[Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 2.5,
            },
            400: {
              slidesPerView: 3.5,
            },
            600: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          <Col>
            {OurPartnership.map((item, index) => {
              return (
                <SwiperSlide key={index} className="my-6">
                  <Row>
                    <img
                      src={item.cover}
                      alt=""
                      className="object-contain w-full h-32 "
                    />
                  </Row>
                </SwiperSlide>
              );
            })}
          </Col>
        </Swiper>
      </div>
    </div>
  );
};

export default Partnership;
