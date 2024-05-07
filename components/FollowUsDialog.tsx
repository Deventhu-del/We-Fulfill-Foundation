import { X } from "lucide-react";

const FollowUsDialog = ({onClose}: any) => {
  return (
    
    <div className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <div className="fixed left-[50%] top-[50%] mt-[50px] z-50 p-10 flex w-full max-w-[1000px] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
        <div className="w-full h-full flex justify-between items-center">
          <div className="w-full h-full flex flex-col gap-5">
            <h2 className="text-4xl font-bold">Follow our Social Media Handles</h2>
            <div className="flex flex-col gap-2">
              <p>
                Instagram:{" "}
                <a href="https://www.instagram.com/wefulfill.foundation/" className="underline">
                  @wefulfill.foundation
                </a>
              </p>
              <p>
                Facebook:{" "}
                <a href="https://www.facebook.com/people/We-Fulfill-Foundation/61559157448196/?mibextid=ZbWKwL" className="underline">
                  @wefulfill.foundation
                </a>
              </p>
            </div>
          </div>
          <div className="w-full h-full flex justify-end items-start">
            <div className="w-1/2">
              <video autoPlay muted loop>
                <source src="/videos/follow-us.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="ml-10 p-5 rounded-full hover:bg-gray-100 cursor-pointer hover:text-red-500 transition-all ease-in-out duration-150" onClick={onClose}>
              <X />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUsDialog;
