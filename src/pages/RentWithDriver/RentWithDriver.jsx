import React, { useEffect } from "react";

const RentWithDriver = () => {
  useEffect(() => {
    document.title = "Drive Lanka | Rent A Driver";
  }, []);
  return (
    <div className="h-screen flex justify-center items-center text-8xl">
      Rent With Driver
    </div>
  );
};

export default RentWithDriver;
