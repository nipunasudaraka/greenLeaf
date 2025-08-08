import React from "react";
import { CategoryCard } from "@/components/ui/CategoryCard";

const categories = [
  {
    id: 1,
    title: "Indoor Plants",
    image: "/assets/indoorPlant.jpg",
  },
  {
    id: 2,
    title: "Outdoor Plants",
    image: "/assets/outdoorPlant.jpg",
  },
  {
    id: 3,
    title: "Succulents",
    image: "/assets/succulents.jpg",
  },
  {
    id: 4,
    title: "Indoor Plants",
    image: "/assets/floweringPlant.jpg",
  },
];

function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 items-center justify-items-center">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          imagePath={category.image}
        />
      ))}
    </div>
  );
}

export default CategoryGrid;
