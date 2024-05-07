import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import WhyVolunteerUs from "./WhyVolunteerUs";

const OurCampaigns = () => {
  return (
    <div className="w-full bg-gray-200 pt-32 px-10 md:px-24 lg:px-32 pb-32">
      <h3 className="text-5xl md:text-7xl font-bold">
        Our
        <span className="text-[#ffdd1f] font-outline-2 text-5xl md:text-7xl font-bold drop-shadow-lg">
          {" "}
          Campaigns
        </span>
      </h3>

      <div className="flex pt-12 pb-24 justify-between items-start w-full h-full flex-col lg:flex-row gap-10">
        <div className="max-lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[700px] h-full max-h-[400px] rounded-xl drop-shadow-lg"
          >
            <CarouselContent className="max-w-[700px] h-full max-h-[400px] rounded-xl">
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/medical/1.jpg"}
                  width={1600}
                  height={1200}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>

              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/medical/4.jpg"}
                  width={1600}
                  height={1200}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-full lg:w-[500px]">
          <div className="font-semibold">
            <h4 className="text-3xl">
              Free Medical
              <span> &amp;</span>
            </h4>
            <h4 className="text-3xl text-[#d61c4d]">Blood Donation Camp</h4>
          </div>
          <div className="text-justify text-sm mt-5">
            <p>
              Our dedicated team of healthcare professionals conducted thorough
              medical check-ups, offering consultations, screenings, and basic
              medications to attendees.
            </p>
            <p>
              The blood donation drive saw an overwhelming response from donors,
              who selflessly stepped forward to give the gift of life.
            </p>
            <p>
              Individuals with specific medical concerns received personalized
              attention and guidance from our experienced doctors.
            </p>
            <p>
              Through active participation and support, donors demonstrated
              their commitment to serving those in need within our community.
            </p>
          </div>
        </div>

        {/* RESPONSIVE CAROUSEL */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[700px] h-full max-h-[400px] rounded-xl drop-shadow-lg"
          >
            <CarouselContent className="max-w-[700px] h-full max-h-[400px] rounded-xl">
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/medical/1.jpg"}
                  width={1600}
                  height={1200}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/medical/2.jpg"}
                  width={1600}
                  height={1200}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/medical/3.jpg"}
                  width={1600}
                  height={1200}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/medical/4.jpg"}
                  width={1600}
                  height={1200}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="flex py-24 justify-between items-start w-full h-full flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[500px]">
          <div className="font-semibold">
            <h4 className="text-3xl">
              Providing <span className="text-[#d61c4d]"> Food</span>
              <span> &amp;</span>
            </h4>
            <h4 className="text-3xl">
              <span className="text-[#d61c4d]">Education</span> to
              Underprivileged Children
            </h4>
          </div>
          <div className="text-justify mt-5">
            <p>
              We established food distribution centers in underserved
              communities, providing meals to children and their families. These
              nutritious meals not only alleviated hunger but also supported
              their overall health and well-being.
            </p>
            <p>
              In collaboration with local schools and educational institutions,
              we implemented various initiatives to enhance access to education.
              This included providing scholarships, school supplies, and
              educational resources to disadvantaged children, empowering them
              to pursue their dreams.
            </p>
          </div>
        </div>
        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[700px] h-full max-h-[400px] rounded-xl drop-shadow-lg"
          >
            <CarouselContent className="max-w-[700px] h-full max-h-[400px] rounded-xl">
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/food/1.jpg"}
                  width={1600}
                  height={1200}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/food/2.jpg"}
                  width={1600}
                  height={1200}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/food/3.jpg"}
                  width={1600}
                  height={1200}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/food/4.jpg"}
                  width={1080}
                  height={767}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="flex py-24 justify-between items-start w-full h-full flex-col lg:flex-row gap-10">
        <div className="max-lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[700px] h-full max-h-[400px] rounded-xl drop-shadow-lg"
          >
            <CarouselContent className="max-w-[700px] h-full max-h-[400px] rounded-xl">
              
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/samuhik/2.jpg"}
                  width={1080}
                  height={695}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-full lg:w-[500px]">
          <div className="font-semibold">
            <h4 className="text-3xl">
              <span className="text-[#d61c4d]">Samuhik</span> Vivah
            </h4>
          </div>
          <div className="text-justify mt-5">
            <p>
              Saamoohik Vivah, or collective weddings, hold a special
              significance in our culture. They not only celebrate the union of
              couples but also reinforce the bonds of solidarity and inclusivity
              within society. Our campaign aimed to organize Saamoohik Vivah
              events that provided couples from economically disadvantaged
              backgrounds with the opportunity to solemnize their marriage in a
              dignified manner.
            </p>
            <p>
              In addition to facilitating the wedding ceremonies, we provided
              couples with essential support services, including wedding attire,
              jewelry, catering, and logistical assistance.
            </p>
          </div>
        </div>

        {/* RESPONSIVE */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[700px] h-full max-h-[400px] rounded-xl drop-shadow-lg"
          >
            <CarouselContent className="max-w-[700px] h-full max-h-[400px] rounded-xl">
              
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/samuhik/2.jpg"}
                  width={1080}
                  height={695}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="flex py-24 justify-between items-start w-full h-full flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[500px]">
          <div className="font-semibold">
            <h4 className="text-3xl">
              Providing <span className="text-[#d61c4d]"> Nourishment</span>
              <span> &amp;</span>
            </h4>
            <h4 className="text-3xl">
              <span className="text-[#d61c4d]">Clothing</span> to Those in Need
            </h4>
          </div>
          <div className="text-justify mt-5">
            <p>
              We organized food distribution programs to ensure that elderly
              individuals had access to nutritious meals. These programs not
              only provided nourishment but also fostered a sense of community
              and belonging.
            </p>
            <p>
              In collaboration with local communities and organizations, we
              conducted clothing drives to collect warm clothing items such as
              jackets, sweaters, and blankets for distribution to elderly
              individuals in need.
            </p>
          </div>
        </div>
        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-[700px] h-full max-h-[400px] rounded-xl drop-shadow-lg"
          >
            <CarouselContent className="max-w-[700px] h-full max-h-[400px] rounded-xl">
              
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/nourishment/2.jpg"}
                  width={1080}
                  height={787}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
              <CarouselItem className="rounded-xl">
                <Image
                  src={"/images/our-campaigns/nourishment/3.jpg"}
                  width={1080}
                  height={705}
                  alt="1"
                  className="object-cover w-full h-full rounded-xl"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div id="why-volunteer-us">
        <WhyVolunteerUs />
      </div>
    </div>
  );
};

export default OurCampaigns;
