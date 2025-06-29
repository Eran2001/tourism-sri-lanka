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
          <Link to="tour-itineraries" className="text-[#5c3d2e]">
            Tour Itineraries
          </Link>
          <Link to="hire-vehicles" className="text-[#5c3d2e]">
            Hire Vehicles
          </Link>
          <Link to="day-tours" className="text-[#5c3d2e]">
            Day Tours
          </Link>
          <Link to="best-things-to-do-in-sri-lanka" className="text-[#5c3d2e]">
            Best things to do in Sri Lanka
          </Link>
          <Link to="attractions" className="text-[#5c3d2e]">
            Attractions
          </Link>
          <Link to="recommended-stays" className="text-[#5c3d2e]">
            Recommended Stays
          </Link>
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
        <div className="flex flex-col space-y-4 max-lg:space-y-8 text-black">
          <Link
            to="/"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/clients"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Clients
          </Link>
          <Link
            to="/payments"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Payments
          </Link>
          <Link
            to="/contact"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Services
          </Link>
          <Link
            to="tour-itineraries"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Tour Itineraries
          </Link>
          <Link
            to="hire-vehicles"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Hire Vehicles
          </Link>
          <Link
            to="day-tours"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Day Tours
          </Link>
          <Link
            to="best-things-to-do-in-sri-lanka"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Best things to do in Sri Lanka
          </Link>
          <Link
            to="attractions"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Attractions
          </Link>
          <Link
            to="recommended-stays"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Recommended Stays
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default SecondaryNavBar;
