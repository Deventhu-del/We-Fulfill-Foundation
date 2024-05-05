import { IndianRupee } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const DonationSlider = () => {
  return (
    <div className="h-full w-full bg-[#ffc300] drop-shadow-xl rounded-3xl py-10 px-10 lg:px-20  text-white font-poppins flex justify-between items-center gap-5 flex-col lg:flex-row">
      <div className="z-10 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
        <div className="text-5xl w-full h-full font-semibold text-black flex items-end justify-center lg:justify-start gap-1 lg:gap-5 ">
          <h2 className="underline">Make a Donation</h2>
          <div className="w-fit h-full lg:w-full">
            <Image
              src={"/piggy-bank.png"}
              width={64}
              height={64}
              alt="piggy-bank"
            />
          </div>
        </div>
        <p className="text-gray-800 mt-5">
          Join us in building a brighter future
        </p>
        <p className="text-[#d61c4d] text-sm mt-5 font-semibold w-[90%] text-center lg:text-left">
          WE FULFILL FOUNDATION is registered under section 80G of the Income
          Tax Act, allowing eligible donors to avail tax exemptions on
          their contributions.
        </p>
      </div>
      <div className="">
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <div className="px-8 py-3 border-2 rounded-full hover:border-black hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200 ">
            <p className="flex">
              <IndianRupee /> 100
            </p>
          </div>
          <div className="px-8 py-3 border-2 rounded-full hover:border-black hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200">
            <p className="flex">
              <IndianRupee /> 200
            </p>
          </div>
          <div className="px-8 py-3 border-2 rounded-full hover:border-black hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200">
            <p className="flex">
              <IndianRupee /> 500
            </p>
          </div>
          <div className="px-8 py-3 border-2 rounded-full hover:border-black hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200">
            <p className="flex">
              <IndianRupee /> 1000
            </p>
          </div>
          <div className="px-8 py-3 border-2 rounded-full hover:border-black hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200">
            <p className="flex">Custom Amount</p>
          </div>
        </div>
        <div className="flex w-full items-center mt-8 gap-2 lg:gap-5 ">
          <div className="flex w-full">
            <div className="h-12 w-10 bg-black flex justify-end items-center rounded-l-full">
              <IndianRupee size={20} className="mr-1" />
            </div>
            <Input
              type="number"
              className="rounded-r-full h-12 border-2 border-black text-black text-lg font-bold"
              value={100}
            />
          </div>
          <Button
            type="submit"
            className="rounded-full h-12 px-3 lg:px-12"
          >
            Donate now!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DonationSlider;
