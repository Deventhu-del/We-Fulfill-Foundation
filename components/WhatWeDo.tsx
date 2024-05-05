import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { BookOpenText, CookingPot, Stethoscope } from "lucide-react";

const WhatWeDo = () => {
  return (
    <MaxWidthWrapper className="px-0">
      <div className="relative w-full h-full pt-32 px-10 md:px-24 lg:px-32 pb-32 flex flex-col gap-10 lg:flex-row  justify-center items-start ">
        <div className="flex flex-col gap-8 mt-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold">Story About</h2>
            <h2 className="text-5xl md:text-7xl font-bold text-[#d61c4d]">
              What We Do
            </h2>
          </div>
          <p className="w-full md:w-3/4 text-justify text-sm lg:text-base ml-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et illum
            ab tenetur ducimus cupiditate maiores beatae sed magnam repudiandae
            repellendus.
          </p>

          <div className="w-full h-full flex justify-center md:justify-start items-center">
            <Button variant={"default"} className="p-8 w-fit text-md mt-3 ml-2">
              Know More
            </Button>
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
              Distribute meals and necessities to the homeless and hungry.
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
              Distribute meals and necessities to the homeless and hungry.
            </p>
          </div>
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
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WhatWeDo;
