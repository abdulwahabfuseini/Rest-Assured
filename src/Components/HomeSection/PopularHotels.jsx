import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mostpopularhotel } from "./HomeData";
import { Autoplay, Navigation } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { List } from "antd";
import HotelBook from "./HotelBook";


const Popular = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);

  return (
    <div className="w-full h-[680px]">
      <div className="relative">
        <header className="py-5 text-xl text-center text-white h-44 pattern"  data-aos="fade-left">
          @REST ASSURED HOTEL
          <p className="pt-3 text-sm sm:text-lg">
            Share your moments and have a better rest{" "}
          </p>
        </header>

        <List className="absolute w-full h-full px-3 top-28 sm:px-6 lg:px-10"  data-aos="fade-up">
          <Swiper
            navigation={{ nextEl, prevEl }}
            spaceBetween={8}
            loop={true}
            speed={1000}
            modules={[Autoplay, Navigation]}
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full "
            breakpoints={{
              0: {
                slidesPerView: 1.3,
              },
              400: {
                slidesPerView: 1.4,
              },
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {Mostpopularhotel.map((hotel, index) => (
              <SwiperSlide
                key={index}
                className="mb-12 text-center bg-transparent border-2 shadow-sm border-slate-200"
              >
                <HotelBook
                  name={hotel.name}
                  cover={hotel.cover}
                  price={hotel.price}
                  rating={hotel.rating}
                  discount={hotel.discount}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center gap-6 py-10">
            <button ref={(node) => setPrevtEl(node)}>
              <FaChevronLeft className="w-8 h-8 p-2 text-lg font-bold text-white rounded-full sm:w-10 sm:h-10 pattern" />
            </button>
            <button ref={(node) => setNextEl(node)}>
              <FaChevronRight className="w-8 h-8 p-2 text-lg font-bold text-white rounded-full sm:w-10 sm:h-10 pattern " />
            </button>
          </div>
        </List>
      </div>
    </div>
  );
};

export default Popular;
