import React from "react";
import { CustomerAvatar } from "../home/CustomerAvatar";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  customerName: string;
  plantName: string;
  review: string;
  rating: number;
  imagePath?: string;
}

function TestimonialCard({
  customerName,
  plantName,
  review,
  rating,
  imagePath,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <CustomerAvatar imagePath={imagePath} />
      <div className="text-lg text-yellow-500 flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <p className="text-center text-secondary-color font-inter">"{review}"</p>
      <h1 className="text-xl font-bold font-inter">{customerName}</h1>
      <p className="text-center font-inter text-sm text-muted-foreground">
        {plantName}
      </p>
    </div>
  );
}

export default TestimonialCard;
