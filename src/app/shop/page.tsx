"use client";

import React, { useState } from "react";
import Banner from "@/components/shop/Banner";
import { Filters } from "@/components/shop/Filters";
import PlantsGrid from "@/components/shop/PlantsGrid";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

export default function Shop() {
  const [category, setCategory] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<string>("");
  const [waterNeeds, setWaterNeeds] = useState<string>("");
  const [lightNeeds, setLightNeeds] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Clear all filters
  const clearFilters = () => {
    setCategory(null);
    setPriceRange("");
    setWaterNeeds("");
    setLightNeeds("");
    setSearchTerm("");
  };

  return (
    <div className="flex mt-10 lg:mt-16 w-full">
      {/* Sidebar */}
      <aside
        className="w-64 p-4 border-r border-secondary-color hidden lg:block"
        aria-label="Product filters"
      >
        <h1 className="text-xl font-playfairDisplay text-primary-color font-bold">
          Filters
        </h1>
        <Filters
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          waterNeeds={waterNeeds}
          setWaterNeeds={setWaterNeeds}
          lightNeeds={lightNeeds}
          setLightNeeds={setLightNeeds}
          clearFilters={clearFilters}
        />
      </aside>

      {/* Main content */}
      <main className="flex-1 lg:p-6">
        <Banner />
        <div className="lg:mr-44">
          <div className="container mx-auto px-4 mt-10 mb-10 w-full max-w-8xl relative">
            <Input
              type="text"
              placeholder="Search for plants..."
              className="w-full pl-10 lg:pl-14 h-10 lg:h-14 max-w8xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <CiSearch className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl lg:text-2xl" />
          </div>
        </div>

        <div className="mb-96 lg:mr-48">
          <PlantsGrid
            category={category}
            priceRange={priceRange}
            waterNeeds={waterNeeds}
            lightNeeds={lightNeeds}
            // searchTerm={searchTerm}
          />
        </div>
      </main>
    </div>
  );
}
