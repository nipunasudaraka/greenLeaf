import React from "react";
import Image from "next/image";
import SubHeadding from "../shared/SubHeadding";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function SubscribeSection() {
  return (
    <div className="flex justify-center items-center  my-16 bg-background-color w-full h-auto py-16">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center bg-white h-auto rounded-xl shadow-md mx-6 px-14 lg:py-12">
        <div className="w-full flex items-center justify-center p-4 lg:col-span-1">
          <Image
            src="/assets/subsPlant.png"
            alt="Subscribe"
            width={400}
            height={400}
          />
        </div>
        <div className="w-full flex flex-col items-end justify-end py-4 lg:p-4 lg:col-span-2  lg:mt-32">
          <SubHeadding title="Get Monthly Plant Tips & Deals" />
          <p className="text-center text-secondary-color font-inter text-sm  mb-4">
            Join our newsletter for exclusive offers and plant care advice.
          </p>

          <div className="w-full flex flex-col lg:flex-row gap-2 items-center">
            <Input placeholder="Enter your email" />
            <Button className="bg-secondary-color text-white mt-2 lg:mt-0 w-full lg:w-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection;
