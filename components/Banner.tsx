import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Facebook, Instagram, X } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Banner = () => {
  return (
    <div className="w-full bg-black text-white py-3 px-10 text-sm font-poppins flex justify-between items-center">
      <div className="flex justify-center items-center gap-3">
        <p>Join the movement</p>
        <div className="w-2 h-2 bg-red-500 rounded-full" />
        <p>Make a difference!</p>
      </div>

      <div className="flex gap-2">
        <a
          href="mailto:janjagritisewasansthan@gmail.com"
          className="flex gap-2"
        >
          Email:
          <span className="hover:underline">
            janjagritisewasansthan@gmail.com
          </span>
        </a>
        <p>|</p>
        <p>Mobile No: 9990505152</p>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <p>Social Networks: </p>
        <div className="flex gap-3 cursor-pointer">
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

export default Banner;
