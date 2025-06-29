import React from "react";
import Button from "@/components/ui/Button";
import OurTeam from "../Home/OurTeam";

const About = () => {
  return (
    <>
      <div className="py-10 px-4 sm:px-6 lg:px-8 bg-white text-[#5c3d2e] mt-27">
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

          <p className="text-lg leading-relaxed mb-4">
            At <span className="font-semibold">Visit In Lanka Car Rentals</span>
            , we are committed to offering reliable, affordable, and
            high-quality transportation solutions across Sri Lanka. Whether
            you're a tourist looking to explore our beautiful island or a local
            in need of convenient travel, we have the perfect vehicle for you.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Our fleet ranges from economy cars to luxury sedans, SUVs, and vans
            — all maintained to the highest standards for your comfort and
            safety. We also offer chauffeur-driven services for those who prefer
            a more relaxed travel experience.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            With over a decade of experience in the car rental industry, we
            understand what our customers need: transparent pricing, flexible
            plans, and 24/7 customer support. That’s exactly what we deliver —
            no hidden charges, no stress.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Whether it’s for business, leisure, or special events,{" "}
            <span className="font-semibold">Visit In Lanka</span> ensures your
            journey starts the right way. Come ride with us and experience the
            difference!
          </p>

          <div className="text-center">
            <Button
              text="Contact Us"
              onClick={() => Notification.success("Hello")}
              className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 bg-[#006D5B]"
            />
          </div>
        </div>
      </div>
      <OurTeam />
    </>
  );
};

export default About;
