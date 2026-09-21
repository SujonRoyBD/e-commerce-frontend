import HeroSection from "@/components/common/HeroSection";
import Image from "next/image";
import React from "react";
import WhatCustomers from "../what_ourCustomers/page";
import { Dna, ShieldAlert, Sprout, Globe, Compass, Users } from "lucide-react";

const OurMission = () => {
  return (
    <div className="space-y-12 md:space-y-20 pb-12">
      <HeroSection
        heading="Our Mission"
        paragraph="Taking control back from corporate monopolies and placing clean nutrition into the hands of communities."
        image="/assets/aboutUs.png"
      />

      {/* Mission Banner */}
      <section className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
          <Sprout className="w-3.5 h-3.5" /> Table Fresh Principles
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Connecting People Through Food, Building Community Through Tradition
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
          We envision a transparent, regenerative food system where families eat real, nutrient-rich produce and local food growers prosper with dignity.
        </p>
      </section>

      {/* Historical Journey Section */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <Compass className="w-4 h-4" /> A Journey Through Time
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              From the Ancient Silk Road to Modern Monopolies
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              For millennia, food has transformed cultures and sparked human cooperation. Ancient trade networks carried indigenous seeds, heirloom spices, and honest harvest across continents without destroying natural soil cycles.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Today, food is flown around the world in plastic wrapping. Every mega-store features identical-looking produce treated with preserving chemicals, where seasonality no longer applies. But at what cost to health and flavor?
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Table Fresh brings back seasonal, real-time harvesting where produce is picked ripe and enjoyed fresh.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/assets/about/aboutUs1.png"
              alt="Food journey"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* The 3 Core Pillars */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/assets/about/aboutUs2.png"
              alt="Organic crops"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Why We Stand Against Industrial Agribusiness
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our food should heal our bodies, not enrich pesticide manufacturers. We advocate for three core standards:
            </p>

            <div className="space-y-3 pt-2">
              <div className="bg-white rounded-xl border border-gray-150 border-l-4 border-l-emerald-600 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Dna className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-gray-900 text-base">Non-GMO Seed Integrity</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Protecting heirloom seeds and natural plant varieties from corporate genetic patents.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-150 border-l-4 border-l-emerald-600 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldAlert className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-gray-900 text-base">Zero Synthetic Chemical Sprays</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Promoting regenerative composting and natural pest control over harmful glyphosates.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-150 border-l-4 border-l-emerald-600 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-gray-900 text-base">Decentralized Neighborhood Markets</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Direct peer-to-peer selling where independent farmers keep 95% of retail revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <WhatCustomers />
    </div>
  );
};

export default OurMission;
