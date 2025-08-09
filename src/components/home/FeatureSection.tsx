import React from "react";
import SubHeadding from "../shared/SubHeadding";
import { FeatureCard } from "../ui/FeatureCard";

const Features = [
  {
    id: 1,
    title: "Monster Deliciosa",
    description: "Tropical beauty with large, glossy leaves",
    image: "/assets/fea1.jpg",
    tag: "BestSeller",
    price: 30,
  },
  {
    id: 2,
    title: "Fiddle Leaf Fig",
    description: "Statement plant with a unique,violin shaped foliage",
    image: "/assets/fea2.jpg",
    tag: "New",
    price: 20,
  },
  {
    id: 3,
    title: "Snake Plant",
    description: "Low -maintenance and air-purifying perfect for beginners",
    image: "/assets/fea3.jpg",
    tag: "",
    price: 25,
  },
];

function FeatureSection() {
  return (
    <div className="w-full bg-background-color h-auto py-8 mt-10 ">
      <SubHeadding title="Featured Plants" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 px-8 max-w-7xl mx-auto ">
        {Features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            price={feature.price}
            tag={feature.tag}
            imagePath={feature.image}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
