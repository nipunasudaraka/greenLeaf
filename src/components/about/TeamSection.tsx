import React from "react";
import SubHeadding from "../shared/SubHeadding";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

function TeamSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-5 bg-background-color mt-5 py-5 lg:py-20">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
        <SubHeadding title="Meet Our Team" />

        <div className="flex flex-col lg:flex-row  items-center justify-center lg:justify-between w-full gap-6  p-5 max-w-4xl lg:mt-10 ">
          <div className="flex flex-col items-center justify-center">
            <Avatar>
              <AvatarImage src="/assets/customers/u5.jpg" />
              <AvatarFallback>SG</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold font-playfairDisplay">
              Sophia Green
            </h3>
            <p className="text-sm text-center text-secondary-color">
              Plant Enthusiast & Founder
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar>
              <AvatarImage src="/assets/customers/u6.jpg" />
              <AvatarFallback>EW</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold font-playfairDisplay">
              Ethan Woods
            </h3>
            <p className="text-sm text-center text-secondary-color">
              Horticultural Expert
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Avatar>
              <AvatarImage src="/assets/customers/u3.jpg" />
              <AvatarFallback>OB</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold font-playfairDisplay">
              Olivia Bloom
            </h3>
            <p className="text-sm text-center text-secondary-color">
              Customer Care Expert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
