import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export const Navigation = [
  {
    id: 1,
    display: "Overview",
    path: "/",
  },
  {
    id: 2,
    display: "About Us",
    path: "/about-us",
  },
  {
    id: 3,
    display: "Gallery",
    path: "/gallery",
  },
  {
    id: 4,
    display: "Review",
    path: "/review",
  },
  {
    id: 6,
    display: "Offer",
    path: "/offer",
  },
  {
    id: 7,
    display: "Contact Us",
    path: "/contact-us",
  },
];

export const MobileNavigation = [
  {
    id: 1,
    display: "Overview",
    path: "/",
  },
  {
    id: 2,
    display: "Know About Us",
    path: "/about-us",
  },
  {
    id: 3,
    display: "Our Gallery",
    path: "/gallery",
  },
  {
    id: 4,
    display: "Hotel Reviews",
    path: "/review",
  },
  {
    id: 6,
    display: "Our Offer",
    path: "/offer",
  },
  {
    id: 7,
    display: "Contact Us",
    path: "/contact-us",
  },
];

// ======= Footer Data =======

export const FootLinks = [
  {
    id: 1,
    title: "Company",
    Links: [
      { display: "Home", path: "/" },
      { display: "About Us", path: "/about-us" },
      { display: "Gellery", path: "/gallery" },
      { display: "Blog", path: "/blog" },
      { display: "FAQ", path: "*" },
      { display: "Partner with us", path: "*" },
    ],
  },
  {
    id: 2,
    title: "Rest Assured",
    Links: [
      { display: "Legal Notice", path: "*" },
      { display: "Terms & Condition", path: "*" },
      { display: "Privacy Policy", path: "*" },
      { display: "Career", path: "*" },
      { display: "Contact Us", path: "/contact-us" },
      { display: "Gallery", path: "/gallery" },
    ],
  },
  {
    id: 3,
    title: "Plan Your Stay",
    Links: [
      { display: "My Booking" },
      { display: "Meeting & Events" },
      { display: "See our Offer", path: "/offer" },
      { display: "See our Top Hotels", path: "/review" },
      { display: "Book now", path: "/" },
    ],
  },
  {
    id: 4,
    title: "Top Destinations",
    Links: [
      { display: "California Hotel" },
      { display: "Kumerica Hotel" },
      { display: "Accra City Hotel" },
      { display: "Habour View Hotel" },
      { display: "HighWay Hotel" },
    ],
  },
];

export const Socialconnect = [
  {
    id: 1,
    icon: (
      <FaFacebookF className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1 " />
    ),
    title: "Rest Assured Hotel",
    color: "rgb(0, 0,0, 0.9)",
    link: "https://web.facebook.com/",
  },
  {
    id: 2,
    icon: (
      <FaTwitter className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1 " />
    ),
    title: "@Rest_Assured_Hotel",
    color: "rgb(0, 0,0, 0.9)",
    link: "https://twitter.com/home",
  },
  {
    id: 3,
    icon: (
      <FaInstagram className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1 " />
    ),
    title: "Rest_Assured_Hotel",
    color: "rgb(0, 0,0, 0.9)",
    link: "https://www.instagram.com/",
  },

  {
    id: 4,
    icon: (
      <FaYoutube className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1 " />
    ),
    title: "Rest Assured Hotel",
    color: "rgb(0, 0,0, 0.9)",
    link: "https://www.youtube.com/",
  },

  {
    id: 5,
    icon: (
      <FaWhatsapp className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1 " />
    ),
    title: "0277984606",
    color: "rgb(0, 0,0, 0.9)",
    link: "https://wa.me/277984606",
  },

  {
    id: 6,
    icon: (
      <FaLinkedin className="w-10 h-10 p-2 cursor-pointer sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-glass rounded-xl hover:translate-y-1 " />
    ),
    title: "abdulwahabfuseini78",
    color: "rgb(0, 0,0, 0.9)",
    link: "https://www.linkedin.com/",
  },
];
