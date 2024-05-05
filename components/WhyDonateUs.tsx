import Image from "next/image";
import React from "react";

const WhyDonateUs = () => {
  return (
    <div className="pt-32 px-10 md:px-24 lg:px-32 flex flex-col gap-10">
      <div className="flex flex-col items-center justify-center text-center gap-10">
        <h4 className="text-7xl font-bold">
          Why <span className="text-[#ffd700]"> Donate?</span>
        </h4>
        <p className="text-lg w-3/4">
          &quot;Join our community of change-makers at WEFULFILL FOUNDATION.
          Your donations qualify for tax benefits under sections 80G and 12A of
          the Income Tax Act, maximizing your impact.
          Transform lives today.&quot;
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="md:w-1/2 h-full">
          <Image
            src={"/images/donate-now.png"}
            width={1080}
            height={585}
            alt="donate now"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyDonateUs;
