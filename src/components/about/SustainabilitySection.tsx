import Image from "next/image";
import React from "react";
import SubHeadding from "../shared/SubHeadding";
import CommitmentCard from "./CommitmentCard";
import { LuRecycle } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

function SustainabilitySection() {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-aut max-w-7xl lg:py-20">
      <SubHeadding title="Our Sustainability Promise" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center w-full p-5 ">
        <div className="flex items-center justify-center order-1 lg:order-2">
          <Image
            src="/assets/Sustainability.jpg"
            alt="Sustainability"
            width={500}
            height={500}
            className="object-cover rounded-lg lg:h-[500px] shadow-md"
          />
        </div>

        {/* text section */}
        <div className="flex flex-col w-full items-start justify-center lg:justify-start order-2 lg:order-1  ">
          <SubHeadding
            title="Our Commitment to the Planet"
            headingClassName="text-lg text-center lg:text-2xl  lg:text-start"
            className="text-center flex items-center justify-center lg:justify-start w-full"
          />
          <p className="text-sm lg:text-lg font-inter text-secondary-color text-center lg:text-start px-5 lg:px-0">
            We are dedicated to minimizing our environmental impact through
            sustainable practices. Our eco-friendly packaging reduces waste, and
            we avoid pesticides to protect our plants and the environment. We
            prioritize local sourcing to support our community and reduce our
            carbon footprint.
          </p>

          <div className="flex justify-center items-center w-full lg:justify-start  gap-2 mt-5 lg:mt-20 ">
            <CommitmentCard title="Eco Packaging" Icon={LuRecycle} />
            <CommitmentCard title="No Pesticides" Icon={PiPlant} />
            <CommitmentCard title="Local Sourcing" Icon={TbTruckDelivery} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainabilitySection;
