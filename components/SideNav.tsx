import Image from "next/image";
import { Heart, X } from "lucide-react";
import { Button } from "./ui/button";

const SideNav = ({ isOpen, onClose }: any) => {
  return (
    <div
      className={`absolute left-0 top-0 min-h-screen py-5 px-8 md:px-14 bg-white ${
        isOpen
          ? "flex flex-col drop-shadow-xl transition-all ease-in duration-500"
          : "hidden"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Image
            src={"/logo/logo_3.png"}
            width={1920}
            height={854}
            alt="WE FULFILL FOUNDATION"
            className="h-28 w-48 object-contain"
          />
        </div>
        <div
          onClick={onClose}
          className="cursor-pointer p-5 rounded-full hover:bg-gray-100"
        >
          <X className="w-[24px] h-[24px]" />
        </div>
      </div>
      <div className="flex flex-col mt-10 text-lg">
        <a href="/">
          <div className="px-8 h-16 flex items-center justify-start hover:bg-gray-100 rounded-lg cursor-pointer">
            Home
          </div>
        </a>

        <a href="#about-us">
          <div className="px-8 h-16 flex items-center justify-start hover:bg-gray-100 rounded-lg cursor-pointer">
            About Us
          </div>
        </a>

        <a href="#our-mission">
          <div className="px-8 h-16 flex items-center justify-start hover:bg-gray-100 rounded-lg cursor-pointer">
            Mission
          </div>
        </a>

        <a href="#our-campaigns">
          <div className="px-8 h-16 flex items-center justify-start hover:bg-gray-100 rounded-lg cursor-pointer">
            Campaigns
          </div>
        </a>

        <a href="#why-volunteer-us">
          <div className="px-8 h-16 flex items-center justify-start hover:bg-gray-100 rounded-lg cursor-pointer">
            Why Volunteer?
          </div>
        </a>

        <div className="px-8 mt-10 w-full">
          <Button
            variant={"destructive"}
            className="rounded-full py-8 px-12 flex justify-center items-center text-lg gap-2 "
          >
            Donate Now <Heart className="text-white" width={15} height={15} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
