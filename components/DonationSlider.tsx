import { IndianRupee } from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


const DonationSlider = () => {
  const [donationValue, setDonationValue] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const changeDonationValue = (value: number) => {
    setDonationValue(value);
    setShowCustomInput(false); // Hide the custom amount input field
  };

  const handleCustomAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomAmount(event.target.value);
  };

  return (
    <div className="h-full w-full bg-[#ffc300] drop-shadow-xl rounded-3xl py-10 px-10 lg:px-20  text-white font-poppins flex justify-between items-center gap-5 flex-col lg:flex-row">
      <div className="z-10 w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start">
        <div className="text-5xl w-full h-full font-semibold text-black flex items-center justify-center lg:justify-start gap-1 lg:gap-5 ">
          <h2 className="underline lg:w-full lg:h-full lg:flex-1">
            Make a Donation
          </h2>
          <div className="w-fit lg:w-full lg:h-full flex justify-start items-center max-[500px]:hidden">
            <img
              src={"/piggy-bank.png"}
              width={64}
              height={64}
              alt="piggy-bank"
              className="w-[64px] h-[64px] object-contain"
            />
          </div>
        </div>
        <p className="text-gray-800 mt-5">
          Join us in building a brighter future
        </p>
        <p className="text-[#d61c4d] text-sm mt-5 font-semibold w-[90%] text-center lg:text-left">
          WE FULFILL FOUNDATION (a unit of Om Shri Sai Janjagriti Sewa Sansthan)
          is registered under section 80G of the Income Tax Act, allowing
          eligible donors to avail tax exemptions on their contributions.
        </p>
      </div>
      <div className="">
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <div
            className="px-3 md:px-5 lg:px-8 py-3 border-2 border-white rounded-full hover:border-black hover:bg-black text-white cursor-pointer transition-all ease-in-out duration-200 "
            onClick={() => changeDonationValue(100)}
          >
            <p className="flex">
              <IndianRupee /> 100
            </p>
          </div>
          {/* Add other donation options */}
          <div
            className="px-3 md:px-5 lg:px-8 py-3 border-2 border-white rounded-full hover:border-black hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200"
            onClick={() => changeDonationValue(200)}
          >
            <p className="flex">
              <IndianRupee /> 200
            </p>
          </div>
          {/* Add other donation options */}
          <div
            className="px-3 md:px-5 lg:px-8 py-3 border-2 border-white rounded-full hover:border-black hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200"
            onClick={() => changeDonationValue(500)}
          >
            <p className="flex">
              <IndianRupee /> 500
            </p>
          </div>
          {/* Add other donation options */}
          <div
            className="px-3 md:px-5 lg:px-8 py-3 border-2 border-white rounded-full hover:border-black hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200"
            onClick={() => changeDonationValue(1000)}
          >
            <p className="flex">
              <IndianRupee /> 1000
            </p>
          </div>
          <div
            className="px-3 md:px-5 lg:px-8 py-3 border-2 border-white rounded-full hover:border-black hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200"
            onClick={() => setShowCustomInput(true)}
          >
            <p className="flex">Custom Amount</p>
          </div>
        </div>
        {showCustomInput && (
          <div className="flex w-full items-center mt-8 gap-2 lg:gap-5 flex-col md:flex-row">
            <div className="flex w-full">
              <div className="h-12 w-10 bg-black flex justify-end items-center rounded-l-full">
                <IndianRupee size={20} className="mr-1" />
              </div>
              <Input
                type="number"
                className="rounded-r-full h-12 border-2 border-black text-black text-lg font-bold"
                value={customAmount}
                placeholder="Enter the amount here!"
                onChange={handleCustomAmountChange}
              />
            </div>
            <a href="/donate">
              <Button type="submit" className="rounded-full h-12 px-8 lg:px-12">
                Donate now!
              </Button>
            </a>
          </div>
        )}

        {!showCustomInput && (
          <div className="flex w-full items-center mt-8 gap-2 lg:gap-5 flex-col md:flex-row">
            <div className="flex w-full">
              <div className="h-12 w-10 bg-black flex justify-end items-center rounded-l-full">
                <IndianRupee size={20} className="mr-1" />
              </div>
              <Input
                type="number"
                className="rounded-r-full h-12 border-2 border-black text-black text-lg font-bold"
                value={donationValue}
                onChange={handleCustomAmountChange}
              />
            </div>
            <a href="/donate">
              <Button type="submit" className="rounded-full h-12 px-8 lg:px-12">
                Donate now!
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationSlider;
