"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/lib/utils";
import { heroSlides } from "@/constants";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-full h-[88vh] relative">
      <Carousel
        className="w-full h-[88vh] relative"
        responsive={responsive}
        autoPlay
        pauseOnHover={false}
        removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
        infinite
      >
        {heroSlides.map((slide) => (
          <div className="w-full h-[88vh]" key={slide.id}>
            <Image
              src={slide.image}
              alt="food dish"
              width={2000}
              height={1000}
              className="w-full h-full object-cover"
              placeholder="blur"
              blurDataURL={slide.image}
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute top-0 right-0 bg-[#121212]/90 w-full h-full grid place-items-center">
        <p className="text-5xl font-[600] text-[#f0f0f0] text-center">
          Find What You Need
        </p>
      </div>
    </div>
  );
}
