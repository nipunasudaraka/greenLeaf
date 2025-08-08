"use client";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description?: string;
  imagePath: string;
}

export function CategoryCard({
  title,
  description,
  imagePath,
}: CategoryCardProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card aspect-square rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-end p-6",
          "bg-cover bg-center bg-no-repeat"
        )}
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/20 transition duration-300 group-hover/card:from-black/90"></div>

        {/* Content */}
        <div className="relative z-10 space-y-2">
          <h2 className="font-bold text-xl md:text-2xl text-white">{title}</h2>
          <p className="font-normal text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}
