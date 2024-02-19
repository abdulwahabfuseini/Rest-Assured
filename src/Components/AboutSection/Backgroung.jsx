import React from "react";
import Restaurant from "../../assets/images/Restaurant.jpg";
import about1 from "../../assets/images/about1.jpg";
import Playground from "../../assets/images/meeting1.jpg";
import { Container, Row } from "reactstrap";
import AboutCard from "./AboutCard";

export const AboutData = [
  {
    title: "We provide best places for Rest and business meetings",
    style: "flex flex-col-reverse py-5 sm:py-0 sm:flex-row items-center gap-3",
    Cover: about1,
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Reprehenderit saepe harum delectus nihil, ducimus temporibusquidem dolor animi incidunt tempore eligendi soluta ipsa expedita Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit saepe harum delectus nihil, ducimus temporibus",
  },
  {
    title: "Restaurant & Bar",
    style: "flex flex-col-reverse sm:flex-row-reverse gap-y-5 gap-x-8 items-center",
    Cover: Restaurant,

    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Reprehenderit saepe harum delectus nihil, ducimus temporibusquidem dolor animi incidunt tempore eligendi soluta ipsa expedita Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit saepe harum delectus nihil, ducimus temporibus",
  },
  {
    title: "Meetings & PlayGround",
    style: "flex flex-col-reverse sm:flex-row gap-5 items-center",
    Cover: Playground,
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Reprehenderit saepe harum delectus nihil, ducimus temporibusquidem dolor animi incidunt tempore eligendi soluta ipsa expedita Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit saepe harum delectus nihil, ducimus temporibus",
  },
];

const Background = () => {
  return (
    <Container className="w-full h-full px-3 pt-12 mx-auto mb-14 md:pb-5 sm:px-5 md:px-4 lg:px-8 max-w-7xl">
      <Row className="">
        {AboutData.map((items, index) => {
          const { title, desc, Cover, style } = items;
          return (
            <>
              <AboutCard
                title={title}
                desc={desc}
                style={style}
                Cover={Cover}
              />
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default Background;
