"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageSliderContentProps {
  gifName: string;
  heading: string;
  description: string;
  color: string;
}

const ImageSliderContent = ({
  gifName,
  heading,
  description,
  color
}: ImageSliderContentProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`w-[350px] h-[350px] bg-white relative rounded-xl flex flex-col justify-center items-center overflow-hidden cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full flex justify-center items-start">
        <img
          src={`/images/our-mission/${gifName}.gif`}
          width={500}
          height={500}
          className="object-cover w-[300px] h-[300px]"
          alt={gifName}
        />
      </div>
      <div
        className={`w-full h-full flex flex-col justify-start items-center rounded-xl  bg-white ${
          isHovered
            ? "absolute top-0 left-0 transition-all ease-in duration-200 p-5 md:p-10"
            : "absolute top-[78%] transition-all ease-out duration-200 pb-10"
        }`}
      >
        <h5 className={`text-lg mb-5 font-bold`}>{heading}</h5>
        <div className={`w-[100px] h-[6px] py-[3px] rounded-full ${color} flex flex-col `}/>

        <p className="text-sm text-center mt-5">{description}</p>
      </div>
    </div>
  );
};

export default ImageSliderContent;
