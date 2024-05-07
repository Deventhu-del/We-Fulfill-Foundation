"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-modified";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const ImageCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="w-full h-[100vh]">
          <Image
            src={"/images/carousel/1.jpg"}
            width={1600}
            height={1200}
            alt="1"
            className="object-cover object-center w-full h-full"
          />
        </CarouselItem>
        <CarouselItem className="h-[100vh]">
          <Image
            src={"/images/carousel/2.jpg"}
            width={1080}
            height={767}
            alt="2"
            className="object-cover object-center w-full h-full"
          />
        </CarouselItem>
        <CarouselItem className="h-[100vh]">
          <Image
            src={"/images/carousel/3.jpg"}
            width={1080}
            height={705}
            alt="3"
            className="object-cover object-center w-full h-full"
          />
        </CarouselItem>
        <CarouselItem className="h-[100vh]">
          <Image
            src={"/images/carousel/4.jpg"}
            width={1080}
            height={613}
            alt="4"
            className="object-cover object-center w-full h-full"
          />
        </CarouselItem>
        <CarouselItem className="h-[100vh]">
          <Image
            src={"/images/carousel/5.jpg"}
            width={1600}
            height={1200}
            alt="5"
            className="object-cover object-center w-full h-full"
          />
        </CarouselItem>
        <CarouselItem className="h-[100vh]">
          <Image
            src={"/images/carousel/7.jpg"}
            width={3072}
            height={4096}
            alt="7"
            className="object-cover object-center w-full h-full"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
