import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { BookOpenText, CookingPot, Heart, Stethoscope } from "lucide-react";

const WhatWeDo = () => {
  return (
    <MaxWidthWrapper className="px-0">
      <div className="relative w-full min-h-screen pt-32 px-10 md:px-24 lg:px-32 pb-32 flex flex-col gap-10 lg:flex-row justify-center items-center ">
        <div className="flex flex-col gap-6 w-full h-full">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold">
              About <span className="text-[#d61c4d]">Us</span> &
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold text-[#d61c4d]">
              What We Do
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <p className="w-full md:w-3/4 text-justify text-[12px] lg:text-base ml-2 italic">
              We&apos;re more than just an NGO!
            </p>

            <p className="w-full md:w-3/4 text-justify text-[12px] lg:text-base ml-2">
              We're a family dedicated to making a meaningful difference in the
              lives of those who need it most. From supporting orphaned children
              to providing care for the elderly, and assisting impoverished
              communities, our mission is simple: to spread love and
              create lasting change.
            </p>
          </div>

          <div className="w-full h-full flex justify-center md:justify-start items-center max-lg:hidden">
            <a href="#our-campaigns">
              <Button
                variant={"default"}
                className="p-8 w-fit text-md mt-3 ml-2"
              >
                Know More
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-rows-2 grid-cols-2 gap-2 md:gap-5">
          <div className="flex flex-col justify-center items-start p-2 md:p-5 gap-y-3">
            <div className="bg-white p-5 w-fit rounded-full text-black shadow-xl hover:scale-110 transition-all ease-in-out cursor-pointer">
              <CookingPot className="h-8 w-8" />
            </div>
            <h5 className="text-[16px] md:text-lg font-semibold">
              Food & Water
            </h5>
            <p className="text-sm">
              Distribute meals and necessities to the homeless and hungry.
            </p>
          </div>

          <div className="flex flex-col justify-center items-start p-2 md:p-5 gap-y-3">
            <div className="bg-white p-5 w-fit rounded-full text-black shadow-xl hover:scale-110 transition-all ease-in-out cursor-pointer">
              <BookOpenText className="h-8 w-8" />
            </div>
            <h5 className="text-[16px] md:text-lg font-semibold">
              Education Help
            </h5>
            <p className="text-sm">
              Empowering lives through education. Knowledge for every dream.
            </p>
          </div>

          <div className="flex flex-col justify-center items-start p-2 md:p-5 gap-y-3">
            <div className="bg-white p-5 w-fit rounded-full text-black shadow-xl hover:scale-110 transition-all ease-in-out cursor-pointer">
              <Stethoscope className="h-8 w-8" />
            </div>
            <h5 className="text-[16px] md:text-lg font-semibold">
              Medical Help
            </h5>
            <p className="text-sm">
              Providing vital medical aid to those in need.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start p-2 md:p-5 gap-y-3">
            <div className="bg-white p-5 w-fit rounded-full text-black shadow-xl hover:scale-110 transition-all ease-in-out cursor-pointer">
              <Heart className="h-8 w-8" />
            </div>
            <h5 className="text-[16px] md:text-lg font-semibold">
              Emotional Support
            </h5>
            <p className="text-sm">
              Empowering hearts through compassionate listening and guidance.
            </p>
          </div>
        </div>

        <div className="w-full h-full flex justify-center md:justify-start items-center lg:hidden">
          <a href="#our-campaigns">
            <Button variant={"default"} className="p-8 w-fit text-md mt-3 ml-2">
              Know More
            </Button>
          </a>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WhatWeDo;
