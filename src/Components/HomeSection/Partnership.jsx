import React from "react";
import { OurPartnership } from "../../assets/Data";


const Partnership = () => {
  return (
    <div className="w-full lg:h-[900px] sm:h-[880px] h-[1700px] mb-10">
      <div className="relative">
        <header className="h-40 py-5 text-3xl text-center bg-green-200">
          PartnerShips
        </header>
        <div className="absolute w-full h-full px-3 top-24 sm:px-8 lg:px-20">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2">
            {OurPartnership.map((item, index) => (
              <div key={index} className="p-2 pb-4 bg-white shadow-lg">
                <img
                  src={item.image}
                  alt="/"
                  className="object-cover w-full h-60"
                />
                <h1 className="py-2 text-xl font-semibold ">
                  {item.company}
                </h1>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
