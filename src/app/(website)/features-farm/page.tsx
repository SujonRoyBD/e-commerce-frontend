"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Sprout } from "lucide-react";

interface FarmData {
  id: string;
  img: string;
  imglogo: string;
  title: string;
  location: string;
  desc: string;
  price?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
}

const data: FarmData[] = [
  {
    id: "1",
    img: "/assets/greenfarm1/greenfarm1.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
    price: 50,
    rating: 4.9,
    reviewCount: 128,
    badge: "Certified Organic",
  },
  {
    id: "2",
    img: "/assets/greenfarm1/greenfarm2.png",
    imglogo: "/assets/head.png",
    title: "Oak Ridge Organic",
    location: "Auburn, CA 95603",
    desc: "Heirloom berries, artisan honey, and pesticide-free orchard fruits.",
    price: 75,
    rating: 4.8,
    reviewCount: 94,
    badge: "Eco-Harvest",
  },
  {
    id: "3",
    img: "/assets/greenfarm1/greenfarm3.png",
    imglogo: "/assets/head.png",
    title: "Riverbend Homestead",
    location: "Davis, CA 95616",
    desc: "Fresh heirloom tomatoes, cage-free eggs, and regenerative microgreens.",
    price: 60,
    rating: 4.9,
    reviewCount: 152,
    badge: "Locally Grown",
  },
  {
    id: "4",
    img: "/assets/greenfarm1/greenfarm4.png",
    imglogo: "/assets/head.png",
    title: "Meadow View Gardens",
    location: "Elk Grove, CA 95624",
    desc: "Hand-picked greens, root crops, and artisan sourdough baking flour.",
    price: 90,
    rating: 5.0,
    reviewCount: 86,
    badge: "Family Owned",
  },
];

const Features = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-2">
            <Sprout className="w-3.5 h-3.5" /> Featured Producers
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Top Rated Local Farms
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-xl">
            Support independent family growers producing chemical-free harvest right in your county.
          </p>
        </div>
        <Link
          href="/farm/1"
          className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 group flex-shrink-0"
        >
          Explore all farms <FaArrowRight className="ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Farm Image with badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Card Content */}
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
                <div className="flex items-center gap-1.5 pt-3 pb-1">
                  <FaStar className="text-amber-400 text-sm" />
                  <span className="text-xs font-bold text-gray-900">{item.rating}</span>
                  <span className="text-xs text-gray-400">({item.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Card Footer CTA */}
            <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-gray-400 block">Avg. box</span>
                <span className="text-sm font-bold text-emerald-700">${item.price}</span>
              </div>
              <Link
                href={`/farm/${item.id}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                View Farm <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
