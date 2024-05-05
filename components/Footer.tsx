import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitterFilled, IconBrandYoutubeFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#ffd700] rounded-t-3xl px-12 md:px-32 py-10">
      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-x-10">
        <Link href="#">
          <div className="py-2 px-4 rounded-lg hover:bg-gray-100 transition ease-in">
            <h2 className="">Home</h2>
          </div>
        </Link>

        <Link href="/">
          <div className="py-2 px-4 rounded-lg hover:bg-gray-100 transition ease-in">
            <h2>About us</h2>
          </div>
        </Link>

        <Link href="/">
          <div className="py-2 px-4 rounded-lg hover:bg-gray-100 transition ease-in">
            <h2>Mission</h2>
          </div>
        </Link>

        <Link href="/">
          <div className="py-2 px-4 rounded-lg hover:bg-gray-100 transition ease-in">
            <h2>Campaigns</h2>
          </div>
        </Link>

        <Link href="/">
          <div className="py-2 px-4 rounded-lg hover:bg-gray-100 transition ease-in">
            <h2>Why Volunteer?</h2>
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Image
          src={"/logo/logo_3.png"}
          width={1920}
          height={854}
          alt="WE FULFILL FOUNDATION"
          className="h-28 w-48 object-contain"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-sm text-center">
        <p className="">
          1-9/10-11, Upper Ground Floor, Sector-16, Rohini, Delhi-110089
        </p>
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
          <p>Mobile No: 9990505152</p>
        </div>
        <p className="mt-5">PAN NO: AAATO2418E</p>
      </div>

      <div className="flex justify-center items-center my-5 text-sm md:text-base">
        <div className="flex text-white">
          <p className="py-2 px-5 bg-[#d61c4d] rounded-l-full">REGN. NO. U/S 80G, AAATO24182F20216</p>
          <p className="p-2 bg-slate-600 rounded-r-full">REGN. NO. U/S 12A, AAATO2418EE20218</p>
        </div>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <div className="flex gap-3">
          <IconBrandFacebookFilled size={20} />
          <IconBrandInstagram size={20} />
          <IconBrandYoutubeFilled size={20} />
          <IconBrandTwitterFilled size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
