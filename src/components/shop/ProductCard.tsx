"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/lib/utils";

const tagColors: Record<string, string> = {
  NewArrival: "bg-emerald-500",
  BestSelling: "bg-red-500",
  Seasonal: "bg-blue-500",
  Premium: "bg-purple-500",
  Limited: "bg-amber-500",
};

interface FeatureCardProps {
  title: string;
  description: string;
  price: number;
  tag: string;
  imagePath: string;
  sell?: number;
  ratings?: number;
  onAddToCart?: () => void;
}

export function ProductCard({
  title,
  price,
  tag,
  imagePath,
  onAddToCart,
  sell,
  ratings,
}: FeatureCardProps) {
  return (
    <CardContainer className="inter-var w-full flex justify-center items-center">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[320px] md:w-[380px] h-auto rounded-xl border">
        <CardItem translateZ="100" className="w-full  relative">
          <Image
            src={imagePath}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-t-xl group-hover/card:shadow-xl"
            alt={title}
          />
          <div
            className={cn(
              "absolute top-2 right-2 text-white px-2 py-1 rounded-md text-xs font-semibold",
              tagColors[tag] || ""
            )}
          >
            {tag}
          </div>
        </CardItem>

        {/* title and price */}
        <div className="flex  justify-between items-center mt-2 px-4">
          <CardItem
            translateZ={20}
            as="h1"
            className="py-2 rounded-xl text-xl font-bold font-playfairDisplay dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            translateZ={20}
            as="p"
            className="text-xl font-bold font-inter "
          >
            ${price}
          </CardItem>
        </div>

        {/* CTA */}
        <div className="flex justify-between items-center mt-5 px-4 pb-4">
          <CardItem
            translateZ={20}
            as="h1"
            className="py-2 rounded-xl text-xl font-bold font-inter dark:text-white"
          >
            {ratings}{" "}
            <span className="text-sm font-normal text-secondary-color">
              ({sell})
            </span>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-sm bg-secondary-color hover:bg-primary-color text-white text-xs font-bold transition-colors"
            onClick={onAddToCart}
          >
            Add to Cart
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
