import React from "react";
import Image from "next/image";

function AboutBanner() {
  return (
    <div className="relative w-full h-80 lg:h-[600px]">
      <Image
        src="/assets/about.jpg"
        fill
        alt="Banner"
        className="object-cover "
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-30 lg:rounded-xl">
        <h1 className="text-3xl lg:text-5xl font-bold text-white font-playfairDisplay">
          Our Story
        </h1>
        <p className="text-xs lg:text-sm font-inter text-center text-white mt-2 lg:mt-5">
          Rooted in nature, grown with love
        </p>
      </div>
    </div>
  );
}

export default AboutBanner;
