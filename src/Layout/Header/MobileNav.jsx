import React, { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MobileNavigation } from "../Data";

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
    <nav className="relative z-50 lg:hidden">
      <div onClick={() => setIsOpen(true)}>
        <HiMiniBars3BottomRight className="h-8 font-bold cursor-pointer w-9" />
      </div>
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-5 -mt-5 rounded-full bg-Header"
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
          <LiaTimesSolid className="w-6 font-bold cursor-pointer h-7" />
        </div>
        <div className="space-y-5 text-xl text-center">
          {MobileNavigation.map((link, index) => {
            const { display, path } = link;
            return (
              <li
                className="text-xl font-medium list-none hover:text-yellow-400"
                key={index}
              >
                <Link to={path}>{display}</Link>
              </li>
            );
          })}
        </div>
      </motion.ul>
    </nav>
  );
};

export default MobileNav;
