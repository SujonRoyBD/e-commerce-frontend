"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Leaf } from "lucide-react";

interface FarmData {
  id: string;
  img: string;
  imglogo: string;
  title: string;
  location: string;
  desc: string;
  category: string;
  rating: number;
  reviewCount: number;
}

const data: FarmData[] = [
  {
    id: "5",
    img: "/assets/greenfarm1/greenfarm1.png",
    imglogo: "/assets/head.png",
    title: "Sunflower Micro-Meadow",
    location: "Folsom, CA 95630",
    desc: "Organic microgreens, edible flowers, and natural pollinator honey.",
    category: "Microgreens",
    rating: 4.9,
    reviewCount: 78,
  },
  {
    id: "6",
    img: "/assets/greenfarm1/greenfarm2.png",
    imglogo: "/assets/head.png",
    title: "Old Oak Berry Ranch",
    location: "Rocklin, CA 95677",
    desc: "Sun-ripened strawberries, blackberries, and homemade artisanal jams.",
    category: "Berries & Jams",
    rating: 4.9,
    reviewCount: 110,
  },
  {
    id: "7",
    img: "/assets/greenfarm1/greenfarm4.png",
    imglogo: "/assets/head.png",
    title: "Highland Root Farm",
    location: "Grass Valley, CA 95945",
    desc: "Heirloom carrots, organic potatoes, and cold-pressed olive oils.",
    category: "Root Crops",
    rating: 4.8,
    reviewCount: 65,
  },
  {
    id: "8",
    img: "/assets/greenfarm1/greenfarm3.png",
    imglogo: "/assets/head.png",
    title: "Cedar Creek Artisan Dairy",
    location: "Nevada City, CA 95959",
    desc: "Pasture-raised raw cheeses, farm fresh milk, and cultured organic butter.",
    category: "Farm Dairy",
    rating: 5.0,
    reviewCount: 142,
  },
];

const Features2 = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-2">
            <Leaf className="w-3.5 h-3.5" /> Neighborhood Artisans
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Explore Nearby Farm Collections
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-xl">
            Direct from smallholder artisan growers. Clean food harvested by real people in your neighborhood.
          </p>
        </div>
        <Link
          href="/farm/1"
          className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 group flex-shrink-0"
        >
          View all collections <FaArrowRight className="ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                    <Image src={item.imglogo} alt={item.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-emerald-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="flex items-center text-xs text-gray-500 mt-0.5">
                      <CiLocationOn className="text-emerald-600 mr-1 text-sm flex-shrink-0" />
                      {item.location}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1.5 pt-3">
                  <FaStar className="text-amber-400 text-sm" />
                  <span className="text-xs font-bold text-gray-900">{item.rating}</span>
                  <span className="text-xs text-gray-400">({item.reviewCount})</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-emerald-700 font-medium">In Season Now</span>
              <Link
                href={`/farm/${item.id}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 group-hover:translate-x-0.5 transition-transform"
              >
                View produce <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features2;
