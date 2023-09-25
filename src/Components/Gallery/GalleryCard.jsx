import React from "react";
import { Container, Row } from "reactstrap";
import Hotel1 from "../../assets/images/hotel8.jpg";
import Hotel2 from "../../assets/images/Hotel13.jpg";
import Hotel3 from "../../assets/images/Hotel12.jpg";
import Hotel4 from "../../assets/images/Hotel14.jpg";
import Hotel5 from "../../assets/images/Hotel16.webp";
import Hotel6 from "../../assets/images/Hotel17.jpg";
import Room1 from "../../assets/images/Room-1.jpg";
import Room2 from "../../assets/images/room2.jpg";
import Room4 from "../../assets/images/Room4.jpg";
import Room5 from "../../assets/images/Room6.jpg";
import ShoowRoom1 from "../../assets/images/showroom4.webp";
import ShoowRoom2 from "../../assets/images/showroom5.webp";
import ShoowRoom3 from "../../assets/images/showroom6.webp";
import ShoowRoom4 from "../../assets/images/showroom7.jpeg";
import ShoowRoom5 from "../../assets/images/showroom8.jpeg";
import Book from "../../assets/images/book1.jpg";
import Book2 from "../../assets/images/blog1.jpg";
import pool1 from "../../assets/images/pool2.jpg";
import pool2 from "../../assets/images/pool5.jpg";
import fit1 from "../../assets/images/fit2.jpg";
import fit2 from "../../assets/images/fit3.jpg";
import fit4 from "../../assets/images/fit6.jpeg";
import fit5 from "../../assets/images/showroom1.webp";
import hall1 from "../../assets/images/hall7.jpeg";
import hall2 from "../../assets/images/hall7.jpg";



const GalleryCard = () => {
  return (
    <Container className="w-full h-full px-2 py-10 md:pt-12 md:pb-5 sm:px-5 md:px-4 lg:px-12">
      <header className="pb-5 text-center">
        <header className="text-lg font-semibold sm:text-3xl">Our ShowRoom</header>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          saepe aut iusto debitis quo laboriosam?
        </p>
      </header>
      <Row className="grid grid-cols-2 grid-rows-6 py-4 sm:grid-cols-3 lg:grid-cols-4" >
        <img src={ShoowRoom1} alt="Gallery" className="object-cover w-full h-full row-span-2 p-1" />
        <img src={Hotel1} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={ShoowRoom3} alt="Gallery" className="object-cover w-full h-full row-span-2 p-1" />
        <img src={Hotel2} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={ShoowRoom2} alt="Gallery" className="object-cover w-full h-full row-span-2 p-1" />
        <img src={ShoowRoom4} alt="Gallery" className="object-cover w-full h-full row-span-2 p-1" />
        <img src={Room1} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={Room2} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={ShoowRoom5} alt="Gallery" className="object-cover w-full h-full row-span-2 p-1" />
        <img src={Hotel3} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={Hotel4} alt="Gallery" className="object-cover w-full h-full row-span-2 p-1" />
        <img src={Room5} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={Hotel5} alt="Gallery" className="object-cover w-full h-full row-span-2 p-1" />
        <img src={Room4} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={Book} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={Book2} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={fit1} alt="Gallery" className="object-cover w-full h-full row-span-2 p-1" />
        <img src={fit4} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={fit2} alt="Gallery" className="object-cover w-full h-full row-span-2 p-1" />
        <img src={hall1} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={fit5} alt="Gallery" className="object-cover w-full h-full row-span-2 p-1" />
        <img src={hall2} alt="Gallery" className="object-cover w-full h-full row-span-2 p-1" />
        <img src={Hotel6} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={pool1} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
        <img src={pool2} alt="Gallery" className="object-cover w-full h-full row-span-1 p-1" />
      </Row>
    </Container>
  );
};

export default GalleryCard;


