"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FaStar, FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CheckCircle2, MessageSquare } from "lucide-react";

interface CustomerReview {
  id: number;
  desc: string;
  img: string;
  title: string;
  location: string;
  verifiedBadge: string;
  rating: number;
}

const reviews: CustomerReview[] = [
  {
    id: 1,
    desc: "I've been ordering through Table Fresh for 8 months. The heirloom tomatoes taste like real sunshine and the honey from Oak Ridge is unbelievable!",
    img: "/assets/head.png",
    title: "Sarah Johnson",
    location: "Portland, OR",
    verifiedBadge: "Verified Buyer",
    rating: 5,
  },
  {
    id: 2,
    desc: "As a chef, having direct access to neighborhood farmers who pick produce the morning of delivery has completely elevated our home kitchen meals.",
    img: "/assets/head.png",
    title: "Michael Brown",
    location: "Austin, TX",
    verifiedBadge: "Verified Chef",
    rating: 5,
  },
  {
    id: 3,
    desc: "Knowing my family eats 100% chemical-free strawberries and pasture-raised farm eggs gives me true peace of mind. Excellent customer support!",
    img: "/assets/head.png",
    title: "Emily Davis",
    location: "Seattle, WA",
    verifiedBadge: "Verified Buyer",
    rating: 5,
  },
  {
    id: 4,
    desc: "Table Fresh connected us to a local gardener with 50+ heirloom fruit trees. The freshness blows any standard supermarket away!",
    img: "/assets/head.png",
    title: "David Martinez",
    location: "Sacramento, CA",
    verifiedBadge: "Verified Buyer",
    rating: 5,
  },
];

const WhatCustomers: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-2">
            <MessageSquare className="w-3.5 h-3.5" /> Community Stories
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-xl">
            Real feedback from conscious eaters, home cooks, and families supporting local agriculture.
          </p>
        </div>

        {/* Carousel Prev / Next controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-gray-700 hover:text-emerald-700 flex items-center justify-center transition-all shadow-sm active:scale-95"
            aria-label="Previous review"
          >
            <FaArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-gray-700 hover:text-emerald-700 flex items-center justify-center transition-all shadow-sm active:scale-95"
            aria-label="Next review"
          >
            <FaArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-4"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id} className="h-auto">
            <div className="p-6 rounded-2xl border border-gray-150 bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between relative">
              <FaQuoteLeft className="absolute top-6 right-6 text-emerald-100 text-3xl pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex text-amber-400 gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed relative z-10 mb-6 italic">
                  &ldquo;{item.desc}&rdquo;
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-emerald-200 flex-shrink-0">
                  <Image src={item.img} fill alt={item.title} className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.location}</p>
                </div>
                <div className="ml-auto flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{item.verifiedBadge}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatCustomers;
