import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="lg:mr-44 ">
      <div className="relative w-full h-60 ">
        <Image
          src="/assets/shopIMG.jpg"
          fill
          alt="Banner"
          className="object-cover lg:rounded-xl"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-30 lg:rounded-xl">
          <h1 className="text-2xl lg:text-5xl font-bold text-white font-playfairDisplay">
            Explore Our Collection
          </h1>
          <p className="text-xs lg:text-sm font-inter text-center text-white mt-2 lg:mt-5">
            Healthy, handpicked plants delivered to yor door
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
