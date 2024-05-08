import { X } from "lucide-react";
import Image from "next/image";

const FollowUsDialog = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <div className="fixed left-[50%] top-[50%] z-50 p-10 xl:mt-[50px] flex w-3/4 translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg">
        <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="w-full h-full flex flex-col gap-5 mt-3">
            <h2 className="text-xl md:text-4xl font-bold">
              Follow our Social Media Handles
            </h2>
            <div className="flex flex-col gap-2 text-xs md:text-base">
              <p>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/wefulfill.foundation/"
                  className="underline"
                >
                  @wefulfill.foundation
                </a>
              </p>
              <p>
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/people/We-Fulfill-Foundation/61559157448196/?mibextid=ZbWKwL"
                  className="underline"
                >
                  @wefulfill.foundation
                </a>
              </p>
            </div>

            <div className="p-5 w-full bg-slate-700 text-white rounded-2xl flex mt-5 text-sm max-md:hidden">
              <div className="flex flex-col justify-center items-center gap-3 px-3">
                <p className="text-lg font-semibold text-center">
                  WE FULFILL FOUNDATION
                </p>
                <p className="text-center">
                  -In association with Om Shri Jan Jagriti Seva Sansthan
                </p>
              </div>
              <Image
                src={"/logo/logo.png"}
                width={1920}
                height={1080}
                alt="WE FULFILL FOUNDATION"
                className="w-32 h-fit md:h-28 md:w-48 object-contain rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full h-full flex justify-end items-end">
            <div className="w-1/2">
              <video autoPlay muted loop>
                <source src="/videos/follow-us.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="w-1/2 h-full">
              <Image src={'/images/instagram-qr.jpg'} width={844} height={788} alt="instagram"/>
            </div>
          </div>

          <div className="p-5 text-xs w-full bg-slate-700 text-white rounded-2xl flex justify-center items-center gap-2 mt-5 flex-col md:hidden md:flex-row">
            <div className="flex flex-col justify-center items-center gap-3 px-3">
              <p className="text-[14px] md:text-lg font-semibold text-center">
                WE FULFILL FOUNDATION
              </p>
              <p className="text-center">
                -In association with Om Shri Jan Jagriti Seva Sansthan
              </p>
            </div>
            <Image
              src={"/logo/logo.png"}
              width={1920}
              height={1080}
              alt="WE FULFILL FOUNDATION"
              className="w-32 h-fit md:h-28 md:w-48 object-contain rounded-2xl"
            />
          </div>

          <div
            className="ml-10 p-5 rounded-full hover:bg-gray-100 cursor-pointer hover:text-red-500 transition-all ease-in-out duration-150 absolute top-0 right-0"
            onClick={onClose}
          >
            <X />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUsDialog;
