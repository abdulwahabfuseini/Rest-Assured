import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mostpopularhotel } from "../../assets/Data";
import { Autoplay, Navigation } from "swiper";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const Popular = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);

  return (
    <div className="w-full h-[500px]">
      <div className="relative">
        <header className="h-40 py-5 text-xl text-center bg-green-200">
          <h1>@REST ASSURED HOTEL</h1>
          <p className="pt-3 text-sm">Share your moments and have a better rest </p>
        </header>
      
        <div className="absolute w-full h-full px-4 top-24 sm:px-10 lg:px-24">
          <Swiper
            navigation={{ nextEl, prevEl }}
            spaceBetween={14}
            loop={true}
            speed={1000}
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full "
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
          
            }}
          >
            {Mostpopularhotel.map((hotel, index) => (
              <SwiperSlide
                key={index}
                className="p-2 text-center bg-transparent border-2 shadow-lg border-slate-200 h-96"
              >
                <img
                  src={hotel.image}
                  alt=""
                  className="object-cover w-full h-40"
                />
                <div className="flex items-center justify-center gap-1 py-2">
                  <FaStar className="w-4 h-3 text-yellow-500" />
                  <FaStar className="w-4 h-3 text-yellow-500" />
                  <FaStar className="w-4 h-3 text-yellow-500" />
                  <FaStarHalfAlt className="w-4 h-3 text-yellow-500" />
                  <FaStarHalfAlt className="w-4 h-3 text-yellow-500" />
                </div>
                <p className="pb-3">{hotel.name}</p>
                <p className="text-Header">
                  ${hotel.price} /{" "}
                  <span className="text-sm text-gray-600 ">Per night</span>
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center gap-6 py-10">
            <button ref={(node) => setPrevtEl(node)}>
              <FaChevronLeft className="w-8 h-8 p-2 font-bold bg-green-200 rounded-full text-dry" />
            </button>
            <button ref={(node) => setNextEl(node)}>
              <FaChevronRight className="w-8 h-8 p-2 font-bold bg-green-200 rounded-full text-dry" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
