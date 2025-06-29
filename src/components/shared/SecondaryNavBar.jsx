import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "../ui/Drawer";

const SecondaryNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed z-[10000] top-8 bg-[#f4d35e] flex justify-between items-center px-6 py-6">
        <Link to="/" className="text-[#5c3d2e] font-bold text-xl">
          Drive Lanka
        </Link>

        {/* Desktop Links */}
        <ul className="flex max-xl:hidden gap-4">
          <Link to="fleet" className="text-[#5c3d2e]">
            Our Fleet
          </Link>
          <Link to="hire-vehicles" className="text-[#5c3d2e]">
            Hire Vehicles
          </Link>

          <Link to="with-driver" className="text-[#5c3d2e]">
            Rent with Driver
          </Link>
          <Link to="self-drive" className="text-[#5c3d2e]">
            Self Drive
          </Link>
          <Link to="faqs" className="text-[#5c3d2e]">
            FAQs
          </Link>
          <Link to="special-offers" className="text-[#5c3d2e]">
            Special Offers
          </Link>
        </ul>

        {/* Mobile Hamburger */}
        <div className="xl:hidden">
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
            to="/services"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/clients"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Clients
          </Link>
          <Link
            to="/blogs"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Our Blog
          </Link>
          <Link
            to="/about"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Contact Us
          </Link>

          <Link
            to="fleet"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Our Fleet
          </Link>
          <Link
            to="hire-vehicles"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Hire Vehicles
          </Link>
          <Link
            to="with-driver"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Rent with Driver
          </Link>
          <Link
            to="self-drive"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Self Drive
          </Link>
          <Link
            to="faqs"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            FAQs
          </Link>
          <Link
            to="special-offers"
            className="border-b pb-2"
            onClick={() => setIsDrawerOpen(false)}
          >
            Special Offers
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default SecondaryNavBar;
