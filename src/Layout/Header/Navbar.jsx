import React, { useEffect, useState } from "react";
import { Navigation } from "../../assets/Data";
import { Link } from "react-router-dom";
import { CgUser } from "react-icons/cg";
import MobileNav from "./MobileNav";
import Logo from "../../assets/images/Logo1.png";
import { FaUserPlus, FaUser, FaFolder } from "react-icons/fa";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <div>
      <nav
        className={`${
          sticky ? "bg-dry text-white h-14" : "h-16  bg-white shadow-md"
        } fixed top-0 left-0 z-50 w-full py-3 px-6 flex items-center justify-between`}
      >
        <div className="logo">
          <img src={Logo} alt="Logo" className="sm:w-full h-9 sm:h-12" />
        </div>
        <ul className="items-center hidden gap-6 lg:flex">
          {Navigation.map((link, index) => {
            const { display, path } = link;
            return (
              <li
                className="font-medium list-none text-md hover:text-blue-800"
                key={index}
              >
                <Link to={path}>{display}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div onClick={() => setOpenProfile(!openProfile)}>
              <CgUser className="w-12 h-8 cursor-pointer" />
            </div>
            <div
              className={`${
                openProfile ? "right-0" : " -right-96"
              } absolute  w-[280px] top-12 bg-white shadow-xl h-40 space-y-4 py-6 transition-all text-dry duration-500  p-4`}
            >
              <li className="list-none">
                <Link
                  to="/sign-in"
                  className="flex items-center gap-3 text-xl font-medium list-none hover:text-Header"
                >
                  <FaUser />
                  Log in
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/register"
                  className="flex items-center gap-3 text-xl font-medium list-none hover:text-Header"
                >
                  <FaUserPlus />
                  Sign up
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/Booking"
                  className="flex items-center gap-3 text-xl font-medium list-none hover:text-Header"
                >
                  <FaFolder />
                  Manage my bookings
                </Link>
              </li>
            </div>
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
