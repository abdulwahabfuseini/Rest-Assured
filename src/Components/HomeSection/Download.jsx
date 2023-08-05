import React from "react";
import { FaCheck } from "react-icons/fa";
import { DownloadApp } from "./HomeData";

const Download = () => {
  return (
    <div className="w-full lg:h-[470px] h-full text-white px-4 sm:px-6 lg:px-20 py-4 mb-32 overflow-hidden pattern"  data-aos="fade-left">
      {DownloadApp.map((app, index) => {
        return (
          <div key={index} className="flex flex-col gap-1 sm:flex-row"  data-aos="fade-up">
            <div className="w-full sm:w-1/2">
              <h1>{app.title}</h1>
              <h1 className="my-2 text-3xl">{app.SubTile1}</h1>
              <h1 className="text-3xl m">{app.SubTile2}</h1>
              <div className="mt-4 space-y-1">
                {app.procedure.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="flex items-center text-sm md:text-lg"
                      data-aos="fade-down"
                    >
                      <FaCheck className="w-3 h-2" />
                      <span>{item.display}</span>
                    </p>
                  );
                })}
                <div className="flex items-center gap-2 py-10">
                  {app.get.map((store, index) => {
                    return (
                      <span
                        key={index}
                        className="flex items-center justify-center gap-2 px-4 py-2 text-black bg-white rounded-lg"
                      >
                        <p className="text-2xl">{store.icon}</p>
                        <h4>{store.name}</h4>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full py-0 sm:w-1/2"  data-aos="fade-left">
              {app.mobile.map((smart, index) => {
                return (
                  <div key={index}>
                    <img src={smart.phone} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Download;
