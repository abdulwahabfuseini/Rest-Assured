import React from "react";
import Navbar from "./header/Navbar";
import Footer from "./Footer";
import Chat from "./Chat";

const Layout = ({ children }) => {
  return (
    <>
      <div className="relative text-black bg-white">
        <Navbar />
        {children}
        <Chat />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
