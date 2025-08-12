"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/moc-data/categories";

interface FiltersProps {
  category: number | null;
  setCategory: (val: number | null) => void;
  priceRange: string;
  setPriceRange: (val: string) => void;
  waterNeeds: string;
  setWaterNeeds: (val: string) => void;
  lightNeeds: string;
  setLightNeeds: (val: string) => void;
  clearFilters: () => void;
}

export function Filters({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  waterNeeds,
  setWaterNeeds,
  lightNeeds,
  setLightNeeds,
  clearFilters,
}: FiltersProps) {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {/* Category */}
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-md font-playfairDisplay text-primary-color font-bold">
          Category
        </h1>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center gap-3">
              <Checkbox
                id={`category-${cat.id}`}
                checked={category === cat.id}
                onCheckedChange={(checked) =>
                  setCategory(checked ? cat.id : null)
                }
              />
              <Label htmlFor={`category-${cat.id}`}>{cat.name}</Label>
            </div>
          ))}
          {/* Add option to clear category */}
          {category !== null && (
            <button
              onClick={() => setCategory(null)}
              className="text-sm text-red-500 hover:underline mt-1"
            >
              Clear Category
            </button>
          )}
        </div>
      </div>

      {/* Price Range */}
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-md font-playfairDisplay text-primary-color font-bold">
          Price Range
        </h1>
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Price Range</SelectLabel>
              <SelectItem value="0-50">$0 - $50</SelectItem>
              <SelectItem value="50-100">$50 - $100</SelectItem>
              <SelectItem value="100-200">$100 - $200</SelectItem>
              <SelectItem value="200-500">$200 - $500</SelectItem>
              <SelectItem value="500+">$500+</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Light Needs */}
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-md font-playfairDisplay text-primary-color font-bold">
          Light Needs
        </h1>
        <Select value={lightNeeds} onValueChange={setLightNeeds}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Light Needs" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Light Needs</SelectLabel>
              <SelectItem value="Low Light">Low Light</SelectItem>
              <SelectItem value="Medium Light">Medium Light</SelectItem>
              <SelectItem value="Bright Light">Bright Light</SelectItem>
              <SelectItem value="Full Sun">Full Sun</SelectItem>
              <SelectItem value="Any">Any</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Water Needs */}
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-md font-playfairDisplay text-primary-color font-bold">
          Water Needs
        </h1>
        <Select value={waterNeeds} onValueChange={setWaterNeeds}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Water Needs" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Water Needs</SelectLabel>
              <SelectItem value="Low Water">Low Water</SelectItem>
              <SelectItem value="Moderate Water">Moderate Water</SelectItem>
              <SelectItem value="High Water">High Water</SelectItem>
              <SelectItem value="Any">Any</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={clearFilters}
        className="mt-4 bg-secondary-color text-white py-2 rounded hover:bg-primary-color
      >
        Clear Filters
      </button>
    </div>
  );
}
