import Image from "next/image";
import React from "react";
import SubHeadding from "../shared/SubHeadding";
import CommitmentCard from "./CommitmentCard";
import { LuRecycle } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

function SustainabilitySection() {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-aut">
      <SubHeadding title="Our Sustainability Promise" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center w-full p-5">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/Sustainability.jpg"
            alt="Sustainability"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col items-start justify-center ">
          <SubHeadding
            title="Our Commitment to the Planet"
            headingClassName="text-lg text-center lg:text-2xl"
            className="text-center flex items-center justify-center w-full"
          />
          <p className="text-sm text-secondary-color text-center px-5">
            We are dedicated to minimizing our environmental impact through
            sustainable practices. Our eco-friendly packaging reduces waste, and
            we avoid pesticides to protect our plants and the environment. We
            prioritize local sourcing to support our community and reduce our
            carbon footprint.
          </p>

          <div className="flex justify-center items-center w-full  gap-2 mt-5">
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
