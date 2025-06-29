import React, { useEffect } from "react";

const HireVehicles = () => {
  useEffect(() => {
    document.title = "Drive Lanka | Hire Vehicles";
  }, []);
  return (
    <div className="h-screen flex justify-center items-center text-8xl">
      Hire Vehicles
    </div>
  );
};

export default HireVehicles;
