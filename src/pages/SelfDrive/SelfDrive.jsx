import React, { useEffect } from "react";

const SelfDrive = () => {
  useEffect(() => {
    document.title = "Drive Lanka | Self Drive";
  }, []);
  return (
    <div className="h-screen flex justify-center items-center text-8xl">
      Self Drive
    </div>
  );
};

export default SelfDrive;
