import { HeartFilledIcon } from "@radix-ui/react-icons";
import { Heart } from "lucide-react";
import React from "react";

const WhyVolunteerUs = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-10 justify-between items-center mt-20">
      <div>
        <div>
          <h2 className="text-5xl md:text-7xl font-bold drop-shadow-lg">Why </h2>
          <h2 className="text-[#ffdd1f] font-outline-2 text-5xl md:text-7xl font-bold drop-shadow-lg">
            Volunteer Us?
          </h2>
        </div>
        <div className="flex flex-col p-5 md:p-10 gap-5">
          <div className="flex gap-3 ">
            <div>
              <HeartFilledIcon className="w-5 h-fit mt-1 text-[#d61c4d]" />
            </div>
            <p className="text-justify">
              Volunteering is not only rewarding, but it&apos;s also a lot of fun!
              You&apos;ll experience the joy of giving back, making a positive
              impact, and seeing the difference you can make in the lives of
              others.
            </p>
          </div>
          <div className="flex gap-3">
            <div>
              <HeartFilledIcon className="w-5 h-fit mt-1 text-[#d61c4d]" />
            </div>
            <p className="text-justify">
              As a volunteer with WEFULFILL FOUNDATION, you have the opportunity
              to directly impact the lives of those in need. Your time and
              effort contribute to meaningful projects and initiatives that
              create positive change in communities.
            </p>
          </div>
          <div className="flex items-start justify-start gap-3">
            <div>
              <HeartFilledIcon className="w-5 h-fit mt-1 text-[#d61c4d]" />
            </div>
            <p className="text-justify">
              Volunteering with WEFULFILL FOUNDATION offers you the chance to
              develop new skills, gain valuable experience, and broaden your
              horizons. Whether it&apos;s through hands-on work in the field or
              behind-the-scenes support, you&apos;ll have the opportunity to grow
              personally and professionally.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-[#ffd700] relative drop-shadow-xl cursor-pointer">
          <div className="absolute left-0 top-0 w-full h-full text-sm flex flex-col gap-10 justify-center items-center">
            <div className="p-10 rounded-full drop-shadow-lg bg-white flex flex-col items-center justify-center gap-3 w-[280px] h-[280px] md:w-[400px] md:h-[400px] hover:scale-110 hover:duration-700 transition-all ease-in-out">
              <Heart className="text-[#ffd700]"/>
              <p className="text-center text-sm md:text-lg ">&quot;Where compassion meets action, creating ripples of kindness that touch lives and shape futures.&quot;</p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVolunteerUs;
