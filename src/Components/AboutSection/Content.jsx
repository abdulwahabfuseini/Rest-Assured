import React from "react";
import { ContentData } from "./AboutData";

const Content = () => {
  return (
    <div className="w-full h-full px-4 py-12 mb-20 pattern"  data-aos="fade-down">
      <header className="pb-16 text-3xl text-center text-white capitalize">Why Book your extended stay with us?</header>
      <div className="flex flex-wrap items-center justify-center lg:gap-4 sm:gap-4">
        {ContentData.map((item) => {
          return (
            <div key={item.id} className="grid p-5 mb-4 bg-white place-items-center w-full sm:w-[320px] h-52"  data-aos="fade-up">
              <h4 className="text-3xl">{item.icon}</h4>
              <h1 className="py-3 text-xl">{item.title}</h1>
              <p className="text-lg text-center">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
