"use client";

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

export function Filters() {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {/* category */}
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-md font-playfairDisplay text-primary-color font-bold">
          Category
        </h1>
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Indoor</Label>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox id="terms-2" />
          <Label htmlFor="terms-2">Outdoor</Label>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox id="terms-3" />
          <Label htmlFor="terms-3">Succulents</Label>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox id="terms-4" />
          <Label htmlFor="terms-4">Flowering</Label>
        </div>
      </div>

      {/* price range */}
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-md font-playfairDisplay text-primary-color font-bold">
          Price Range
        </h1>
        <div className="w-full flex items-center gap-3">
          <div>
            <Select>
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
        </div>
      </div>
      {/* Light need */}
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-md font-playfairDisplay text-primary-color font-bold">
          Light Needs
        </h1>
        <div className="w-full flex items-center gap-3">
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Light Needs" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Light Needs</SelectLabel>
                  <SelectItem value="0-50">Low Light</SelectItem>
                  <SelectItem value="50-100">Medium Light</SelectItem>
                  <SelectItem value="100-200">Bright Light</SelectItem>
                  <SelectItem value="500+">Full Sun</SelectItem>
                  <SelectItem value="200-500">Any</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {/* water need */}
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-md font-playfairDisplay text-primary-color font-bold">
          Water Needs
        </h1>
        <div className="w-full flex items-center gap-3">
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Water Needs" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Water Needs</SelectLabel>
                  <SelectItem value="0-50">Low Water</SelectItem>
                  <SelectItem value="50-100">Moderate Water</SelectItem>
                  <SelectItem value="100-200">High Water</SelectItem>
                  <SelectItem value="200-500">Any</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
