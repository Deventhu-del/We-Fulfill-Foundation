import { Facebook, Instagram, Twitter, X, Youtube } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-black text-white py-3 px-10 text-sm font-poppins flex justify-between items-center">
      <div className="flex justify-center items-center gap-3">
        <p>Join the movement</p>
        <div className="w-2 h-2 bg-red-500 rounded-full" />
        <p>Make a difference!</p>
      </div>

      <div className="flex gap-2">
        <a href="mailto:janjagritisewasansthan@gmail.com" className="flex gap-2">
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
        <div className="flex gap-3">
          <Facebook size={20} />
          <Instagram size={20} />
          <Youtube size={20} />
          <Twitter size={20} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
