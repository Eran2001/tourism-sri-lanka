import React, { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    document.title = "Drive Lanka | FAQs";
  }, []);
  return (
    <div className="h-screen flex justify-center items-center text-8xl">
      FAQ
    </div>
  );
};

export default FAQ;
