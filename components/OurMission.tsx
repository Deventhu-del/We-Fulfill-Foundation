import ImageSliderContent from "./ImageSliderContent";

const OurMission = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <div className="relative w-full h-full bg-our-mission-img pt-32 px-10 md:px-24 lg:px-32 pb-32">

        <div className="w-full h-full flex flex-col items-center justify-center gap-5">
          <h3 className="text-6xl md:text-8xl text-black drop-shadow-xl font-extrabold  w-full flex justify-center items-center mb-10">
            Our Mission
          </h3>
          <div className="flex flex-wrap justify-center items-center w-full h-full gap-10">
            <ImageSliderContent
            color="bg-orange-500"
              gifName="empowering"
              heading="Empowering Future"
              description="Our mission is to empower individuals and communities to break the cycle of poverty and unlock their full potential. Through education, healthcare, and economic empowerment initiatives."
            />

            <ImageSliderContent
            color="bg-blue-600"
              gifName="transforming"
              heading="Transforming Lives"
              description="At the heart of our work is the belief that every individual deserves the opportunity to thrive. By providing access to quality education, healthcare, and essential services, we are transforming the lives of underprivileged children, families, and communities, creating lasting positive change that ripples through generations."
            />

            <ImageSliderContent
            color="bg-[#117653]"
              gifName="building"
              heading="Fostering Change, Together"
              description="Through collaborative efforts and the generosity of supporters like you, we are building a better world where compassion, equality, and opportunity prevail. Join us in our mission to make this vision a reality. Your donation today will make a tangible difference in the lives of those in need and contribute to a more just and compassionate world for all."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
