"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Heart, Menu } from "lucide-react";
import SideNav from "./SideNav";

const Navbar2 = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleNavMenu = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <nav className="w-full sticky bg-white top-0 z-[1000] h-[90px] py-3 px-5 md:px-14 xl:px-24 flex justify-between items-center font-poppins text-black">
      {showSideNav && <SideNav isOpen={showSideNav} onClose={toggleNavMenu} />}
      <div className="flex justify-center items-center">
        <div
          className="hidden max-lg:block cursor-pointer p-5 rounded-full hover:bg-gray-100"
          onClick={() => setShowSideNav(!showSideNav)}
        >
          <Menu />
        </div>
        <div className="flex justify-center items-center max-md:hidden">
          <Image
            src={"/logo/logo_1.jpg"}
            width={1111}
            height={1060}
            alt="WE FULFILL FOUNDATION"
            className="w-fit h-16 object-contain"
          />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <Image
            src={"/logo/logo.png"}
            width={1920}
            height={1080}
            alt="WE FULFILL FOUNDATION"
            className="w-fit h-20 object-contain"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-0 xl:gap-x-5 max-lg:hidden text-sm xl:text-base">
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

      <div className="flex gap-5">
        <div className="flex justify-center items-center max-md:hidden">
          <Image
            src={"/logo/logo_41.png"}
            width={1600}
            height={1278}
            alt="WE FULFILL FOUNDATION"
            className="w-fit h-16 object-contain"
          />
        </div>
        <Button
          variant={"destructive"}
          className="rounded-full py-8 px-8 xl:px-12 gap-2 flex justify-center items-center text-sm xl:text-lg max-lg:hidden"
        >
          Donate Now <Heart className="text-white" width={15} height={15} />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar2;
