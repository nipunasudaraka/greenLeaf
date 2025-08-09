import Banner from "@/components/shop/Banner";
import { Filters } from "@/components/shop/Filters";
import React from "react";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

function Shop() {
  return (
    <div className="flex mt-10 lg:mt-16 w-full h-screen">
      {/* Sidebar */}
      <aside
        className="w-64  p-4 border-r border-secondary-color hidden lg:block"
        aria-label="Product filters"
      >
        <h1 className="text-xl font-playfairDisplay text-primary-color font-bold">
          Filters
        </h1>

        {/* categories */}
        <div className="flex flex-col items-start mt-6">
          <Filters />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 lg:p-6">
        <Banner />
        <div className="lg:mr-44 ">
          <div className="container mx-auto px-4 mt-10 mb-10 w-full max-w-7xl ">
            <div className="relative w-full max-w-8xl mx-auto">
              <Input
                type="text"
                placeholder="Search for plants..."
                className="w-full pl-10 lg:pl-14 h-10 lg:h-14 max-w8xl"
              />
              <CiSearch className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl lg:text-2xl" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Shop;
