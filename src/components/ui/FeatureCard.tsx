"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/lib/utils";

const tagColors: Record<string, string> = {
  New: "bg-emerald-500",
  BestSeller: "bg-red-500",
  Sale: "bg-blue-500",
  Featured: "bg-purple-500",
  Limited: "bg-amber-500",
};

interface FeatureCardProps {
  title: string;
  description: string;
  price: number;
  tag: string;
  imagePath: string;
  onAddToCart?: () => void;
}

export function FeatureCard({
  title,
  description,
  price,
  tag,
  imagePath,
  onAddToCart,
}: FeatureCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
        <CardItem translateZ="100" className="w-full mt-4 relative">
          <Image
            src={imagePath}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
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

        {/* title and description */}
        <div className="flex flex-col justify-start items-start mt-2">
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
            className="text-xs font-normal font-inter text-secondary-color"
          >
            {description}
          </CardItem>
        </div>

        {/* CTA */}
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as="h1"
            className="py-2 rounded-xl text-xl font-bold font-inter dark:text-white"
          >
            ${price}
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
