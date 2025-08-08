import CategoryGrid from "@/components/home/CategoryGrid";
import FeatureSection from "@/components/home/FeatureSection";
import Hero from "@/components/home/Hero";
import { SideBar } from "@/components/shared/navbar/SideBar";
import SubHeadding from "@/components/shared/SubHeadding";

import { ThreeDCardDemo } from "@/components/ui/FeatureCard";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 mt-10 mb-10">
        <div className="relative max-w-md">
          <Input
            type="text"
            placeholder="Search for plants..."
            className="w-full pl-10"
          />
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        </div>
      </div>

      <SubHeadding title="Shop by Category" />

      <CategoryGrid />

      {/* <ThreeDCardDemo />
       */}

      <FeatureSection />

      <SideBar />
    </div>
  );
}
