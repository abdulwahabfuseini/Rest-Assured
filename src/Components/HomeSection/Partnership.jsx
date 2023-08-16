import React from "react";
import { OurPartnership } from "./HomeData";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row } from "reactstrap";

const Partnership = () => {
  return (
    <div className="w-full h-screen">
      <div className="relative">
        <header className="w-full py-5 text-3xl text-center text-white h-44 pattern"  >
          PartnerShips
        </header>
        <div className="absolute w-full h-full px-3 top-24 sm:px-8 lg:px-10" >
          <Swiper
            spaceBetween={10}
            loop={true}
            speed={3000}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
              },
              400: {
                slidesPerView: 1.5,
              },
              600: {
                slidesPerView: 2.4,
              },
              768: {
                slidesPerView: 2.4,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <Col>
              {OurPartnership.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center pb-8 mb-24 text-center border-2 border-green-100 shadow-md"
                  >
                    <Row>
                      <img
                        src={item.cover}
                        alt="/"
                        className="object-cover w-full h-40 sm:h-60"
                      />
                      <h1 className="py-2 text-xl font-semibold ">
                        {item.company}
                      </h1>
                      <p>{item.desc}</p>
                    </Row>
                  </SwiperSlide>
                );
              })}
            </Col>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
