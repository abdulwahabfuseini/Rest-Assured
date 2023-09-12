import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "../Data";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 100,
      transition: {
        type: "spring",
        SVGAngletiffness: 180,
        dumping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <>
      <nav className="relative pt-7 lg:hidden">
        <div onClick={() => setIsOpen(true)}>
          <FaBars className="w-6 font-bold cursor-pointer h-7" />
        </div>
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className="w-6 h-6 rounded-full bg-Header"
        ></motion.div>
        <motion.ul
          variants={ulVariants}
          initial="hidden"
          animate={isOpen ? "visible" : ""}
          className={`${
            isOpen ? "left-0" : "left-full"
          } fixed top-0 bottom-0 flex flex-col items-center justify-center w-full text-white transition-all duration-500 pattern`}
        >
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5"
          >
            <FaTimes className="w-6 font-bold cursor-pointer h-7" />
          </div>
          <div className="space-y-5 text-xl text-center">
            {Navigation.map((link, index) => {
              const { display, path } = link;
              return (
                <li
                  className="font-medium list-none text-md hover:text-yellow-400"
                  key={index}
                >
                  <Link to={path}>{display}</Link>
                </li>
              );
            })}
          </div>
        </motion.ul>
      </nav>
    </>
  );
};

export default MobileNav;
