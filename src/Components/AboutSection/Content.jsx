import React from "react";
import { ContentData } from "./AboutData";

const Content = () => {
  return (
    <div className="w-full h-full px-4 py-12 mb-20 pattern"  data-aos="fade-down">
      <header className="pb-10 text-3xl text-center text-white capitalize">Why Book your extended stay with us?</header>
      <div className="flex flex-wrap items-center justify-center sm:gap-4 gap-y-2">
        {ContentData.map((item) => {
          return (
            <div key={item.id} className="grid p-5  bg-white shadow-md rounded-lg text-dry place-items-center w-full sm:w-[320px] h-52"  data-aos="fade-up">
              <img src={item?.icon} alt={item?.title} className="object-contain w-32 h-16"/>
              <h1 className="py-1 text-xl font-semibold">{item.title}</h1>
              <p className="text-lg text-center">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
