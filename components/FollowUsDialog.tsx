import { X } from "lucide-react";
import Image from "next/image";

const FollowUsDialog = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 z-[1000] bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <div className="fixed left-[50%] top-[50%] z-50 p-5  md:p-12 flex w-3/4 translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg">
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-3 mt-5">
          <div className="w-full h-full flex flex-col gap-5 justify-center">
            <h2 className="text-xl lg:text-4xl font-bold">
              Follow our Social Media Handles
            </h2>
            <div className="flex flex-col gap-2 text-xs lg:text-base">
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

            <div className="w-1/2 rounded-2xl  max-lg:hidden">
              <Image
                src={"/logo/logo-text.png"}
                width={1920}
                height={953}
                alt="WE FULFILL FOUNDATION"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full h-[200px] lg:h-full flex justify-center items-center">
            <div className="w-full h-full">
              <video autoPlay muted loop className="w-full h-full">
                <source src="/videos/follow-us.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-1/2">
                <Image
                  src={"/images/instagram-qr.jpg"}
                  width={844}
                  height={788}
                  alt="instagram"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full h-1/2">
                <Image
                  src={"/images/facebook-qr.jpg"}
                  width={623}
                  height={646}
                  alt="facebook"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="w-3/4 lg:hidden">
              <Image
                src={"/logo/logo-text.png"}
                width={1920}
                height={953}
                alt="WE FULFILL FOUNDATION"
                className="w-full h-full object-contain rounded-2xl"
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
