"use client";

import React from "react";
import HeroSection from "@/components/common/HeroSection";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import WhatCustomers from "../what_ourCustomers/page";
import AccordionDemo from "../according/page";
import Link from "next/link";
import { BlogData } from "@/components/data/page";
import { Calendar, User, BookOpen } from "lucide-react";

const OurBlog = () => {
  return (
    <div className="space-y-12 md:space-y-16 pb-12">
      <HeroSection
        heading="The Table Fresh Journal"
        paragraph="Field notes, culinary wisdom, and sustainable farming insights straight from local growers."
        image="/assets/findFresh1.png"
      />

      {/* Intro Header */}
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-2">
          <BookOpen className="w-3.5 h-3.5" /> Organic Knowledge Base
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Stories of Soil, Season, and Sustenance
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Discover why chemical-free gardening matters, how to store seasonal produce, and recipes from neighborhood producers.
        </p>
      </div>

      {/* Responsive Blog Grid: 1 on mobile, 2 on tablet, 3 on desktop */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BlogData?.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Article Cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    Organic Guide
                  </span>
                </div>

                {/* Article Info */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-emerald-600" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <Link
                  href={`/ourBlog/${item.id}`}
                  className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 group-hover:translate-x-1 transition-transform"
                >
                  Read full story <FaArrowRight className="ml-1.5 text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Community & FAQ */}
      <WhatCustomers />
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <AccordionDemo />
      </div>
    </div>
  );
};

export default OurBlog;
