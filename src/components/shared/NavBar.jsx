import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import Drawer from "../ui/Drawer";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`py-[6px] flex justify-around items-center fixed top-0 w-full z-[10000] transition-colors duration-300 ${
          isScrolled ? "bg-[#f9f5e3] text-[#5c3d2e]" : "bg-[#006D5B] text-white"
        }`}
      >
        <div>
          <ul className="flex justify-center items-center gap-4">
            <li className="flex items-center space-x-2 max-sm:hidden">
              <FaPhone className="w-4 h-4" />
              <span className="text-sm">
                Contact our support team : +94 (77) 123 4567
              </span>
            </li>
            <li className="flex items-center space-x-2 ">
              <IoMail className="w-4 h-4 " />
              <span className="text-sm">info@drivelanka.com</span>
            </li>
            <li>
              <FaFacebookF className="w-4 h-4" />
            </li>
            <li>
              <FaXTwitter className="w-4 h-4" />
            </li>
          </ul>
        </div>
        <div className="hidden xl:flex justify-center items-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/payments">Payments</Link>
          <Link to="/blogs">Our BLog</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        {/* <div className="xl:hidden flex justify-end p-4">
          <RxHamburgerMenu
            onClick={() => setIsDrawerOpen(true)}
            className=" w-6 h-6 cursor-pointer"
          />
        </div> */}

        {/* Mobile Drawer */}
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          title="Tourism"
          width="w-80"
        >
          <div className="flex flex-col space-y-4 text-black">
            <Link to="/" onClick={() => setIsDrawerOpen(false)}>
              Home
            </Link>
            <Link to="/clients" onClick={() => setIsDrawerOpen(false)}>
              Clients
            </Link>
            <Link to="/payments" onClick={() => setIsDrawerOpen(false)}>
              Payments
            </Link>
            <Link to="/contact" onClick={() => setIsDrawerOpen(false)}>
              Contact Us
            </Link>
            <Link to="/about" onClick={() => setIsDrawerOpen(false)}>
              About Us
            </Link>
            <Link to="/services" onClick={() => setIsDrawerOpen(false)}>
              Services
            </Link>
          </div>
        </Drawer>
      </nav>
    </>
  );
};

export default NavBar;
