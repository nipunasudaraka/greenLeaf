import AboutBanner from "@/components/about/AboutBanner";
import SustainabilitySection from "@/components/about/SustainabilitySection";
import SubHeadding from "@/components/shared/SubHeadding";
import React from "react";

function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <AboutBanner />

      <div className="flex flex-col items-center justify-center bg-background-color w-full h-auto">
        <div className=" flex flex-col items-center justify-center w-full max-w-4xl px-4 py-8 gap-3">
          <SubHeadding title="Why We Started" />
          <p className="text-sm text-secondary-color text-center">
            Our journey began with a simple love for plants and a desire to
            bring the beauty of nature into every home. We believe that plants
            have the power to transform spaces. uplift spirits. and connect us
            to the natural world. Driven by this passion. we set out to create a
            plant shop that offers a curated selection of healthy. vibrant
            plants. along with expert advice and support to help our customers
            succeed in their plant-growing endeavors.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center w-full max-w-4xl px-5 py-8 gap-3">
          <SubHeadding title="What We Stand For" />
          <p className="text-sm text-secondary-color text-center">
            At Verdant. we are committed to provding exceptional quality and
            service. We carefully source our plants from trusted growers.
            ensuring that each one is nurtured with care and attention. Our team
            of plant enthusiasts is dedicated to shanng their knowledge and
            expertise. offering personalized guidance to help you choose the
            perfect plants for your space and lifestyle. We believe in fostering
            a community of plant lovers. where everyone can discover the joy of
            growing and caring for plants.
          </p>
        </div>
      </div>

      <SustainabilitySection/>



    </main>
  );
}

export default About;
