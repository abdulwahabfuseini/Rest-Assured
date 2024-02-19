import React, { useEffect, useState } from "react";
import { Navigation } from "../Data";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import Logo from "../../assets/images/Logo1.png";

import User from "./User";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <div className={`${
      sticky
        ? "text-white pattern shadow-lg fixed top-0 left-0 z-50 w-full py-3"
        : " bg-white shadow-md"
    } px-4 sm:px-6 py-4`}>
      <nav
        className="flex items-center justify-between mx-auto max-w-7xl"
      >
        <Link to="/">
          <div className="logo">
            <img
              src={Logo}
              alt="Logo"
              className="object-contain sm:w-64 h-9 sm:h-12"
            />
          </div>
        </Link>
        <ul className="items-center hidden gap-6 lg:flex">
          {Navigation.map((link, index) => {
            const { display, path } = link;
            return (
              <li
                className="text-lg font-semibold list-none cursor-pointer hover:text-yellow-400"
                key={index}
              >
                <NavLink to={path}>{display}</NavLink>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-center gap-3">
          <User />
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
