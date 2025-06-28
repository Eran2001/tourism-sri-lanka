import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "../ui/Drawer";

const SecondaryNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed z-[10000] top-8 bg-[#f4d35e] flex justify-between items-center px-6 py-6">
        <h1 className="text-[#5c3d2e] font-bold text-xl">TOUR</h1>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-4">
          <a href="#gallery1" className="text-[#5c3d2e]">
            Tour Itineraries
          </a>
          <a href="#gallery2" className="text-[#5c3d2e]">
            Hire Vehicles
          </a>
          <a href="#gallery3" className="text-[#5c3d2e]">
            Day Tours
          </a>
          <a href="#gallery4" className="text-[#5c3d2e]">
            Best things to do in Sri Lanka
          </a>
          <a href="#gallery5" className="text-[#5c3d2e]">
            Attractions
          </a>
          <a href="#gallery6" className="text-[#5c3d2e]">
            Recommended Stays
          </a>
        </ul>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <RxHamburgerMenu
            className="text-[#5c3d2e] w-6 h-6 cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          />
        </div>
      </nav>

      {/* Drawer for Mobile */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Tour Menu"
        width="w-80"
      >
        <div className="flex flex-col space-y-4 text-black">
          <Link to="/" onClick={() => setIsDrawerOpen(false)}>
            Home
          </Link>
          <Link to="/client" onClick={() => setIsDrawerOpen(false)}>
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
          <a href="#gallery1" onClick={() => setIsDrawerOpen(false)}>
            Tour Itineraries
          </a>
          <a href="#gallery2" onClick={() => setIsDrawerOpen(false)}>
            Hire Vehicles
          </a>
          <a href="#gallery3" onClick={() => setIsDrawerOpen(false)}>
            Day Tours
          </a>
          <a href="#gallery4" onClick={() => setIsDrawerOpen(false)}>
            Best things to do in Sri Lanka
          </a>
          <a href="#gallery5" onClick={() => setIsDrawerOpen(false)}>
            Attractions
          </a>
          <a href="#gallery6" onClick={() => setIsDrawerOpen(false)}>
            Recommended Stays
          </a>
        </div>
      </Drawer>
    </>
  );
};

export default SecondaryNavBar;
