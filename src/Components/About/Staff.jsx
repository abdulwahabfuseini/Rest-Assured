import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { TopStaff } from "../../assets/Data";

const Staff = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);

  return (
    <div className="w-full h-[650px]">
      <div className="relative">
        <header className="h-40 py-5 text-xl text-center bg-green-200">
          Our Top Staff
        </header>
        <div className="absolute w-full h-full px-4 top-24 sm:px-10 lg:px-24">
          <Swiper
            navigation={{ nextEl, prevEl }}
            spaceBetween={8}
            loop={true}
            speed={1000}
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full "
            breakpoints={{
              0: {
                slidesPerView: 1.6,
              },
              400: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 2.8,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
          
            }}
          >
            {TopStaff.map((staff, index) => (
              <SwiperSlide
                key={index}
                className="pb-2 space-y-1 text-center bg-transparent border-2 shadow-lg border-slate-200 h-96"
              >
               <img src={staff.image} alt="" className="w-80 h-60 md:h-72 "/>
               <h1>{staff.name}</h1>
               <p>{staff.position}</p>
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

export default Staff;
