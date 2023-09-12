import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FootLinks } from "./Data";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo1.png";
import {
  FaApple,
  FaChevronDown,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Container className="relative w-full h-full text-white sm:px-6 md:px-4 lg:px-16 pattern">
      <Row className="hidden grid-cols-4 sm:grid">
        <>
          {FootLinks.map((foot, index) => {
            return (
              <Col key={index}>
                <h1 className="relative pt-8 mb-2 text-xl font-semibold before:absolute before:-bottom-1 before:left-0 before:w-8 before:h-1 before:bg-white">
                  {foot.title}
                </h1>
                {foot.Links.map((items, index) => {
                  return (
                    <ul key={index} className="py-1">
                      <h6 className="no-underline list-none cursor-pointer">
                        <Link to={items.path}>{items.display}</Link>
                      </h6>
                    </ul>
                  );
                })}
              </Col>
            );
          })}
        </>
      </Row>
      <Row className="grid sm:hidden">
        <>
          {FootLinks.map((foot, index) => {
            return (
              <Col key={index}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<FaChevronDown className="text-white" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="rounded-none shadow-lg pattern"
                  >
                    <Typography fontSize={22} className="py-2 text-white">
                      {foot.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {foot.Links.map((items, index) => {
                        return (
                          <ul key={index} className="py-1">
                            <h6 className="no-underline list-none cursor-pointer">
                              <Link to={items.path}>{items.display}</Link>
                            </h6>
                          </ul>
                        );
                      })}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Col>
            );
          })}
        </>
      </Row>
      <Row>
        <Row className="flex flex-col items-center justify-between px-12 mt-8 sm:px-0 sm:flex-row">
          <img
            src={Logo}
            alt="logo"
            className="object-contain sm:w-40 lg:w-64 lg:h-16"
          />
          <span>
            <h1 className="py-4 text-xl">Connect with us</h1>
            <Col className="flex items-center gap-2">
              <FaFacebookF className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1" />
              <FaTwitter className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1" />
              <FaInstagram className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1" />
              <FaYoutube className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1" />
              <FaWhatsapp className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1" />
              <FaLinkedinIn className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1 " />
            </Col>
          </span>
          <span>
            <h1 className="py-4 text-xl">Download our App</h1>
            <Col className="flex items-center gap-4">
              <span className="flex items-center justify-center gap-2 px-4 py-2 text-black bg-white rounded-lg">
                <FaApple className="w-6 h-6 " />
                <h4>iOS</h4>
              </span>
              <span className="flex items-center justify-center gap-2 px-4 py-2 text-black bg-white rounded-lg">
                <FaGooglePlay className="w-6 h-6" />
                <h4>Andriod</h4>
              </span>
            </Col>
          </span>
        </Row>
      </Row>
      <Row className="px-2 py-8 mt-10 text-center border-t-4">
        <h1 className="text-xl">
          Rest Assured Hotel{" "}
          <span>Copyright &copy; 2023 All Rights Reserved</span>
          <h1 className="py-4 text-md">Created by: F.A.W</h1>
        </h1>
      </Row>
    </Container>
  );
};

export default Footer;
