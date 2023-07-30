import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mostpopularhotel } from "../../assets/Data";
import { Autoplay, Navigation } from "swiper";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Card, Image, List, Rate, Typography } from "antd";

const Popular = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);

  return (
    <div className="w-full h-[680px]">
      <div className="relative">
        <header className="h-44 py-5 text-xl text-center bg-green-200">
          <h1>@REST ASSURED HOTEL</h1>
          <p className="pt-3 text-sm sm:text-md">Share your moments and have a better rest </p>
        </header>
      
        <List className="absolute w-full h-full px-3 top-28 sm:px-10 lg:px-10">
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
                className="text-center bg-transparent border-2 shadow-lg border-slate-200"
              >
               <Card
                 cover={ <Image src={hotel.image} alt="" className="w-full object-cover" style={{height: 180, width: 500}} />}
                
                 actions={[ <Rate allowHalf value={hotel.rating} className="text-md"/>]}
                 title={hotel.name}
               >
                <Card.Meta
                 title={
                  <Typography.Paragraph> 
                    Price: ${hotel.price}
                    <Typography.Text delete type="danger" className="pl-4">
                      {parseFloat(hotel.price + (hotel.price * hotel.discount)/ 100).toFixed(2)}
                    </Typography.Text>
                  </Typography.Paragraph>
                }
                >
                </Card.Meta>

               </Card>
                
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
        </List>
      </div>
    </div>
  );
};

export default Popular;
