import React from "react";
import footerBg from "../assets/images/FooterBg.jpg";
import { Col, Container, Row } from "reactstrap";
import { FootLinks } from "../assets/Data";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="relative w-full h-[740px] sm:h-52 lg:h-[350px] bg-main">
      <Row>
        <img
          src={footerBg}
          alt="FooterBg"
          className="object-cover w-full h-[740px]  sm:h-[560px] lg:h-[350px]"
        />
      </Row>
      <Row className="absolute top-0 left-0 w-full h-full py-3 text-white bg-transparents lg:h-[350px] sm:h-[560px] md:px-9 sm:px-5">
        <Row className="grid grid-cols-2 space-x-4 space-y-8 sm:space-y-4 sm:grid-cols-4 lg:grid-cols-6">
          <Col className="mt-8 space-y-2">
            <img src={Logo} alt="Logo" className="w-40"  />
            <h1> Place to have a better rest </h1>
          </Col> 
          <Col className="space-y-3 ">
            <heade className="text-lg">Follow Us</heade>
            <div className="flex gap-3">
              <FaFacebookF className="w-6 h-6 " />
              <FaTwitter className="w-6 h-6 " />
              <FaInstagram className="w-6 h-6 " />
            </div>
            <div className="flex gap-3">
              <FaYoutube className="w-6 h-6 " />
              <FaWhatsapp className="w-6 h-6 " />
              <FaWhatsapp className="w-6 h-6 " />
            </div>
          </Col>
          {FootLinks.map((foot, index) => {
            const { title } = foot;
            return (
              <Col>
                <header key={index} className="">
                  <h1 className="relative pb-2 text-lg text-white md:text-xl">
                    {title}
                  </h1>
                </header>
                <ul className="space-y-2">
                  {foot.Links.map((item, index) => {
                    const { display, path } = item;
                    return (
                      <li
                        key={index}
                        className="cursor-pointer hover:text-red-500"
                      >
                        <Link to={path}>{display}</Link>
                      </li>
                    );
                  })}
                </ul>
                <ul className="space-y-2">
                  {foot.Links.map((item, index) => {
                    const { Location, location, Tel, Email } = item;
                    return (
                      <li
                        key={index}
                        className="cursor-pointer hover:text-red-500"
                      >
                        <p>{Location}</p>
                        <p>{location}</p>
                        <a href={`Tel:${Tel}`}>{Tel}</a>
                        <a href={`mailto:${Email}`}>{Email}</a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            );
          })}
          <Col>
            <h1>Recent Post</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, assumenda.</p>            
          </Col>
        </Row>
        <h4 className="text-xl font-bold text-center capitalize py-11 text-Header">copyright &copy; 2023 all right reserved|fendi bosslyn</h4>
      </Row>
    </Container>
  );
};

export default Footer;
