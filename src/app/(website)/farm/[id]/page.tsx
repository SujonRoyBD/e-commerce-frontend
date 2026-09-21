"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { ShieldCheck, Calendar, CheckCircle2 } from "lucide-react";
import FarmProducts from "../../farmProduct2/page";
import { Button } from "@/components/ui/button";

interface FarmData {
  id: string;
  img: string;
  imglogo: string;
  title: string;
  certifiedTag: string;
  location: string;
  desc: string;
  acres: string;
  established: string;
}

const data: FarmData[] = [
  {
    id: "1",
    img: "/assets/greenfarm1/greenfarm1.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
    certifiedTag: "100% Certified Organic • Pesticide-Free",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic homestead specializing in seasonal vegetables, heirloom tomatoes, and natural culinary herbs. We practice regenerative agriculture and compost recycling.",
    acres: "18 Acres",
    established: "2014",
  },
  {
    id: "2",
    img: "/assets/greenfarm1/greenfarm2.png",
    imglogo: "/assets/head.png",
    title: "Oak Ridge Organic",
    certifiedTag: "Non-GMO Project Verified • Raw Honey",
    location: "Auburn, CA 95603",
    desc: "Perched along the Sierra foothills, Oak Ridge focuses on heritage berry bushes, wildflower apiaries, and sun-dried orchard stone fruits.",
    acres: "25 Acres",
    established: "2011",
  },
  {
    id: "3",
    img: "/assets/greenfarm1/greenfarm3.png",
    imglogo: "/assets/head.png",
    title: "Riverbend Homestead",
    certifiedTag: "Regenerative Soil • Cage-Free",
    location: "Davis, CA 95616",
    desc: "Located along Putah Creek, offering chemical-free heirloom squashes, fresh microgreens, and pasture-collected eggs.",
    acres: "12 Acres",
    established: "2017",
  },
  {
    id: "4",
    img: "/assets/greenfarm1/greenfarm4.png",
    imglogo: "/assets/head.png",
    title: "Meadow View Gardens",
    certifiedTag: "Eco-Harvest Certified • Heirloom Flour",
    location: "Elk Grove, CA 95624",
    desc: "Hand-harvested leafy greens, sweet organic carrots, and cold-milled heritage grain flours.",
    acres: "30 Acres",
    established: "2008",
  },
];

const FarmDetailsPage = () => {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "1";
  const farm = data.find((item) => item.id === id) || data[0];

  const [visitBooked, setVisitBooked] = useState(false);

  return (
    <div className="space-y-8 md:space-y-12 pb-16">
      {/* Farm Banner */}
      <section className="container mx-auto px-4 sm:px-6 pt-6">
        <div className="relative w-full h-[240px] sm:h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-md">
          <Image
            src={farm.img}
            alt={farm.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white hidden sm:block">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-600/90 text-xs font-bold uppercase tracking-wider mb-2">
              Verified Producer
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold">{farm.title}</h1>
          </div>
        </div>

        {/* Farm Profile Header Card */}
        <div className="relative -mt-10 sm:-mt-14 max-w-4xl mx-auto bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-emerald-500 flex-shrink-0 shadow-sm">
                <Image src={farm.imglogo} alt={farm.title} fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{farm.title}</h2>
                <p className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-700 font-semibold mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  {farm.certifiedTag}
                </p>
                <p className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <CiLocationOn className="text-emerald-600 text-sm" />
                  {farm.location}
                </p>
              </div>
            </div>

            {/* Book Visit Button & Action */}
            <div className="w-full sm:w-auto">
              <Button
                onClick={() => setVisitBooked(true)}
                className={`w-full sm:w-auto rounded-full px-6 py-2.5 font-semibold text-sm transition-all ${
                  visitBooked
                    ? "bg-emerald-800 text-white"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg"
                }`}
              >
                {visitBooked ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-1.5" /> Visit Request Sent!
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 mr-1.5" /> Book a Farm Tour
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Description & Stats */}
          <div className="pt-6 space-y-4">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {farm.desc}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <span className="text-[11px] text-gray-400 block font-medium">Customer Rating</span>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <FaStar className="text-amber-400 text-sm" />
                  <span className="font-bold text-sm text-gray-800">4.9 / 5.0</span>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <span className="text-[11px] text-gray-400 block font-medium">Farm Size</span>
                <span className="font-bold text-sm text-gray-800">{farm.acres}</span>
              </div>
              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <span className="text-[11px] text-gray-400 block font-medium">Established</span>
                <span className="font-bold text-sm text-gray-800">{farm.established}</span>
              </div>
              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <span className="text-[11px] text-gray-400 block font-medium">Harvest Dispatch</span>
                <span className="font-bold text-sm text-emerald-700">Same-Day Pick</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Products Grid */}
      <FarmProducts />
    </div>
  );
};

export default FarmDetailsPage;
