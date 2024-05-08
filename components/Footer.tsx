import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#ffd700] rounded-t-3xl px-12 md:px-32 py-10">
      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-x-10">
        <Link href="/">
          <div className="py-2 px-4 rounded-lg hover:bg-gray-100 transition ease-in">
            <h2 className="">Home</h2>
          </div>
        </Link>

        <Link href="#about-us">
          <div className="py-2 px-4 rounded-lg hover:bg-gray-100 transition ease-in">
            <h2>About us</h2>
          </div>
        </Link>

        <Link href="#our-mission">
          <div className="py-2 px-4 rounded-lg hover:bg-gray-100 transition ease-in">
            <h2>Mission</h2>
          </div>
        </Link>

        <Link href="#our-campaigns">
          <div className="py-2 px-4 rounded-lg hover:bg-gray-100 transition ease-in">
            <h2>Campaigns</h2>
          </div>
        </Link>

        <Link href="#why-volunteer-us">
          <div className="py-2 px-4 rounded-lg hover:bg-gray-100 transition ease-in">
            <h2>Why Volunteer?</h2>
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Image
          src={"/logo/logo-removebg.png"}
          width={666}
          height={375}
          alt="WE FULFILL FOUNDATION"
          className="h-28 w-48 object-contain"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-sm text-center">
        {/* ADDRESS */}
        {/* <p className="">
          1-9/10-11, Upper Ground Floor, Sector-16, Rohini, Delhi-110089
        </p> */}
        <div className="flex flex-col lg:flex-row gap-2">
          <a
            href="mailto:janjagritisewasansthan@gmail.com"
            className="flex gap-2"
          >
            Email:
            <span className="hover:underline">
              janjagritisewasansthan@gmail.com
            </span>
          </a>
          <p className="max-lg:hidden">|</p>
          <a
            href="mailto:wefulfillfoundation@gmail.com"
            className="flex gap-2"
          >
            <p className="hover:underline">
            wefulfillfoundation@gmail.com
            </p>
          </a>
        </div>
        <p className="mt-5">PAN NO: AAATO2418E</p>
      </div>

      <div className="flex justify-center items-center my-5 text-sm md:text-base">
        <div className="flex text-white">
          <p className="py-2 px-5 bg-[#d61c4d] rounded-l-full">
            REGN. NO. U/S 80G, AAATO24182F20216
          </p>
          <p className="p-2 bg-slate-600 rounded-r-full">
            REGN. NO. U/S 12A, AAATO2418EE20218
          </p>
        </div>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <div className="flex gap-3">
          <a href="https://www.facebook.com/profile.php?id=61559157448196&mibextid=ZbWKwL">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <IconBrandFacebook size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Facebook</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>

          <a href="https://www.instagram.com/wefulfill.foundation?igsh=MWRuZ2FjcWhmMzVjNA">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <IconBrandInstagram size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
