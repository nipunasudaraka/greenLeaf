"use client";

import React from "react";
import { plantData } from "@/lib/moc-data/palantsData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ProductCard } from "./ProductCard";

interface PlantsGridProps {
  category: number | null;
  priceRange: string;
  waterNeeds: string;
  lightNeeds: string;
}

export default function PlantsGrid({
  category,
  priceRange,
  waterNeeds,
  lightNeeds,
}: PlantsGridProps) {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = React.useState(1);

  function priceFilter(plantPrice: number) {
    if (!priceRange) return true;
    if (priceRange === "500+") return plantPrice >= 500;
    const [min, max] = priceRange.split("-").map(Number);
    return plantPrice >= min && plantPrice <= max;
  }

  const filteredPlants = plantData.filter((plant) => {
    const categoryMatch = category ? plant.category === category : true;
    const priceMatch = priceFilter(plant.price);
    const waterMatch =
      waterNeeds && waterNeeds !== "Any"
        ? plant.waterNeeds === waterNeeds
        : true;
    const lightMatch =
      lightNeeds && lightNeeds !== "Any"
        ? plant.lightNeeds === lightNeeds
        : true;
    return categoryMatch && priceMatch && waterMatch && lightMatch;
  });

  const totalPages = Math.ceil(filteredPlants.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredPlants.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  React.useEffect(() => {
    setCurrentPage(1);
  }, [category, priceRange, waterNeeds, lightNeeds]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Shop Plants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {currentItems.length === 0 ? (
          <p>No plants found with current filters.</p>
        ) : (
          currentItems.map((plant) => (
            <ProductCard
              key={plant.id}
              id={plant.id} // ✅ Pass id for dynamic routing
              title={plant.name}
              price={plant.price}
              tag={plant.tag}
              imagePath={plant.img + ".jpg"}
              sell={plant.sell}
              description=""
              ratings={plant.ratings}
            />
          ))
        )}
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(currentPage - 1);
                }}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage(i + 1);
                  }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
