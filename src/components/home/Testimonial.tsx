import * as React from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    customerName: "Sarah Johnson",
    plantName: "Monstera Deliciosa",
    review:
      "I love my new Monstera! It's added so much life to my living room. The plant arrived in perfect condition and was easy to care for.",
    rating: 5,
    imagePath: "/assets/customers/u1.jpg",
  },
  {
    customerName: "Michael Chen",
    plantName: "Snake Plant",
    review:
      "Great experience with GreenLeaf! The snake plant is thriving and the customer service was excellent.",
    rating: 5,
    imagePath: "/assets/customers/u2.jpg",
  },
  {
    customerName: "Emily Davis",
    plantName: "Peace Lily",
    review:
      "Beautiful peace lily and excellent care instructions. It's been flowering non-stop since I got it!",
    rating: 5,
    imagePath: "/assets/customers/u3.jpg",
  },
  {
    customerName: "David Wilson",
    plantName: "Fiddle Leaf Fig",
    review:
      "The fiddle leaf fig is gorgeous and exactly as described. Very happy with my purchase.",
    rating: 5,
    imagePath: "/assets/customers/u4.jpg",
  },
  {
    customerName: "Lisa Thompson",
    plantName: "ZZ Plant",
    review:
      "Perfect low-maintenance plant for my office. Shipping was fast and the plant was well-packaged.",
    rating: 5,
    imagePath: "/assets/customers/u5.jpg",
  },
];

export function Testimonial() {
  return (
    <div className="relative w-full overflow-hidden px-4 sm:px-6">
      <Carousel className="mx-auto max-w-7xl">
        <CarouselContent className="-ml-2 sm:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden">
                <CardContent className="flex aspect-square items-center justify-center p-4 sm:p-6">
                  <TestimonialCard
                    customerName={testimonial.customerName}
                    plantName={testimonial.plantName}
                    review={testimonial.review}
                    rating={testimonial.rating}
                    imagePath={testimonial.imagePath}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
