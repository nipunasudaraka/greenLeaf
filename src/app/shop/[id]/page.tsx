"use client";

import React from "react";
import { plantData } from "@/lib/moc-data/palantsData";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  const productId = params.id;
  const product = plantData.find((p) => p.id.toString() === productId);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-bold">
        Product not found!
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 p-10 max-w-5xl mx-auto h-screen justify-center items-center">
      {/* Product Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={product.img + ".jpg"}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-start md:w-1/2 space-y-5">
        <h1 className="text-3xl font-bold font-playfairDisplay">
          {product.name}
        </h1>
        <p className="text-lg text-gray-700">
          {product.description ||
            "Beautiful plant to add greenery to your space."}
        </p>
        <p className="text-2xl font-bold">${product.price}</p>

        <p className="text-sm text-gray-500">
          Tag: <span className="font-semibold">{product.tag}</span>
        </p>
        <p className="text-sm text-gray-500">
          Ratings: ⭐ {product.ratings} ({product.sell} sold)
        </p>

        <button className="bg-primary-color text-white px-6 py-3 rounded-md hover:bg-secondary-color transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
