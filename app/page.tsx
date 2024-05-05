import Banner from "@/components/Banner";
import DonationSlider from "@/components/DonationSlider";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import OurCampaigns from "@/components/OurCampaigns";
import OurMission from "@/components/OurMission";
import Stats from "@/components/Stats";
import WhatWeDo from "@/components/WhatWeDo";
import WhyDonateUs from "@/components/WhyDonateUs";

export default function Home() {
  return (
    <main>
      <div className="max-lg:hidden">
        <Banner />
      </div>
      <div className="w-full relative">
        <ImageCarousel />
        <div className="bg-black opacity-50 absolute top-0 left-0 h-full w-full" />
        <div className="absolute bottom-40 left-10 text-white text-4xl md:text-6xl lg:text-6xl font-bold">
          <p className="text-lg font-normal">
            <span className="text-[#ffc300] mr-3">-</span>Join us in changing
            lives today.
          </p>
          <h1 className="">EVERY DONATION, BIG OR SMALL</h1>
          <h1 className="text-[#ffc300]">MAKES A DIFFERENCE.</h1>
        </div>
      </div>

      <div className="w-full h-full bg-gray-200" id="about-us">
        <div className="p-5 w-full z-50 -mt-32">
          <DonationSlider />
        </div>
        <WhatWeDo />
      </div>

      <div id="our-mission">
        <OurMission />
      </div>

      <Stats />

      <div id="our-campaigns">
        <OurCampaigns />
      </div>

      <WhyDonateUs />

      <Footer />
    </main>
  );
}
