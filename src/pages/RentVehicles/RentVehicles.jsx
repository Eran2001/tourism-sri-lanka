import React, { useEffect } from "react";

const RentVehicles = () => {
  useEffect(() => {
    document.title = "Drive Lanka | Rent Vehicles";
  }, []);
  return (
    <div className="h-screen flex justify-center items-center text-8xl">
      Rent Vehicles
    </div>
  );
};

export default RentVehicles;
