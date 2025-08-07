import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/assets/heroIMG.jpg"
        alt="Hero Image"
        fill
        priority
        className="object-cover object-right md:object-center"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="absolute inset-0 container mx-auto px-4 mt-10 ">
        <div className="flex flex-col h-full items-center justify-end max-w-3xl mx-auto pb-16">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfairDisplay text-primary-color text-center mb-6">
            Bring Nature Into Your Space
          </h1>

          {/* Description */}
          <p className="text-lg md:text-lg text-center font-playfairDisplay text-secondary-color max-w-2xl">
            Discover a wide selection of plants to enhance your home or office.
            From low-maintenance succulents to vibrant flowering plants, we have
            something for every space and style.
          </p>
          {/* Call to Action */}
          <Button className="bg-primary-color text-white hover:bg-secondary-color mt-8">
            Browse Plants
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
