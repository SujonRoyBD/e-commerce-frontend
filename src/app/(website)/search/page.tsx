"use client";

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MapPin, Filter } from "lucide-react";

const categories = [
  "All Categories",
  "Fresh Fruits",
  "Organic Vegetables",
  "Herbs & Seasoning",
  "Artisan Breads",
  "Honey & Preserves",
  "Dairy & Farm Eggs",
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");

  return (
    <div id="search" className="container mx-auto px-4 sm:px-6">
      <div className="max-w-4xl mx-auto -mt-8 sm:-mt-10 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-full shadow-xl border border-gray-100 p-2 sm:p-3 transition-all hover:shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            {/* Location / Search text */}
            <div className="w-full sm:flex-1 flex items-center px-3 sm:px-4 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-gray-200">
              <MapPin className="w-5 h-5 text-emerald-600 mr-2.5 flex-shrink-0" />
              <div className="w-full text-left">
                <label className="block text-[11px] font-bold tracking-wider text-gray-500 uppercase">
                  Location or Farm
                </label>
                <input
                  type="text"
                  placeholder="Enter zip code, city, or produce..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full text-sm font-medium text-gray-800 placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0 p-0"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full sm:w-56 flex items-center px-3 sm:px-4 py-2 sm:py-0">
              <Filter className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
              <div className="w-full text-left">
                <label className="block text-[11px] font-bold tracking-wider text-gray-500 uppercase">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-sm font-medium text-gray-800 bg-transparent border-none outline-none focus:ring-0 p-0 cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit search button */}
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl sm:rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg flex-shrink-0"
            >
              <IoSearch className="w-5 h-5" />
              <span className="sm:hidden">Search Fresh Produce</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;