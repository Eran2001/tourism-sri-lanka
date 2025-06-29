import React, { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

const Payments = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loading />;
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24 h-screen mt-27">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#5c3d2e] sm:text-4xl ">
            Pricing &amp; Plans
          </h2>
          <p className=" mt-4 text-base text-[#5c3d2e]">
            Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        {/* Payment Method Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bank Transfers */}
          <div className="bg-teal-700 text-white p-6 shadow-lg rounded text-center">
            <h3 className="text-xl font-semibold mb-4">Bank Transfers</h3>
            <p>
              Bank – COMMERCIAL BANK. <br />
              Name of account – TOURISM LANKA <br />
              Account No – +94 123456789 <br />
              Bank Address – No-16, Jayawardanapura, Colombo – 01 <br />
              Bank Swift Code – HBXXYTE34
            </p>
          </div>

          {/* On Arrival */}
          <div className="bg-teal-700 text-white p-6 shadow-lg rounded text-center">
            <h3 className="text-xl font-semibold mb-4">On Arrival</h3>
            <p>
              You can pay your payments when you come. You will be informed all
              necessary information via e-mail when we accept your tour. (If
              your tour confirms within 3 days prior to arrival)
            </p>
          </div>

          {/* Western Union */}
          <div className="bg-teal-700 text-white p-6 shadow-lg rounded text-center">
            <h3 className="text-xl font-semibold mb-4">Western Union</h3>
            <p>Please contact to get the payment information.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
