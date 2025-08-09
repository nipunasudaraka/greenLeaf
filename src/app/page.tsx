import CategoryGrid from "@/components/home/CategoryGrid";
import FeatureSection from "@/components/home/FeatureSection";
import Hero from "@/components/home/Hero";
import SubscribeSection from "@/components/home/SubscribeSection";
import { Testimonial } from "@/components/home/Testimonial";
import SubHeadding from "@/components/shared/SubHeadding";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center md:mt-16 w-full">
      <Hero />
      <div className="container mx-auto px-4 mt-10 mb-10 w-full max-w-7xl ">
        <div className="relative w-full max-w-8xl mx-auto">
          <Input
            type="text"
            placeholder="Search for plants..."
            className="w-full pl-10 lg:pl-14 h-10 lg:h-14 max-w8xl"
          />
          <CiSearch className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl lg:text-2xl" />
        </div>
      </div>

      <SubHeadding title="Shop by Category" />

      <CategoryGrid />

      <FeatureSection />

      <div className="flex flex-col w-full max-w-8xl mx-auto  justify-center items-center h-[600px] ">
        <SubHeadding title="What Our Customers Say" />

        <Testimonial />
      </div>

      <SubscribeSection />
    </div>
  );
}
