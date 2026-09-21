import HeroSection from "@/components/common/HeroSection";
import Image from "next/image";
import React from "react";
import WhatCustomers from "../what_ourCustomers/page";
import { CheckCircle2, HeartHandshake, Leaf, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="space-y-12 md:space-y-20 pb-12">
      <HeroSection
        heading="About Table Fresh"
        paragraph="Reconnecting communities with healthy, pesticide-free harvest grown by real people in your neighborhood."
        image="/assets/aboutUs.png"
      />

      {/* Intro Mission Statement */}
      <section className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
          <Leaf className="w-3.5 h-3.5" /> Our Core Vision
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Your Online Source for Fresh Food and Honest Harvest
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
          Our core concept is simple: bring local people together with wholesome, transparently grown food, bypassing industrial supply chains.
        </p>
      </section>

      {/* Section 1: Connecting Gardens */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/assets/about/aboutUs2.png"
              alt="Local harvest"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Grassroots Agriculture
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Connecting 60+ Million Home Gardens Across America
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              With over 60 million home gardeners growing bountiful vegetables every summer, tons of fresh produce goes unused with no direct market. We created Table Fresh to turn surplus backyard gardens into vibrant neighborhood markets.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              When you buy local, your food didn’t spend weeks in cargo shipping or artificial ripening rooms. It traveled minutes, not miles.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-sm font-semibold text-gray-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero chemical preservatives or synthetic waxes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Fair earnings directly to small gardeners & growers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: A Time When Food Was Pure */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Honest Nutrition
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Reviving a Time When Food Was Pure
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              There was a time when nearly every neighborhood had local food artisans. Having food that was chemical-free, nutrient-dense, and non-GMO was the standard, not an expensive luxury.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Over the last fifty years, industrial mega-corporations homogenized food with synthetic pesticides, herbicides, and genetic modifications. Consuming these products compromises human health and destroys local soil biodiversity.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We stand for regenerative agriculture that restores our natural vitality.
            </p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/assets/about/aboutUs3.png"
              alt="Pure fresh vegetables"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Building Community */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/assets/about/aboutUs1.png"
              alt="Community farming"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Community First
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Our Goal is to Build Resilient Local Communities
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Beyond fresh vegetables, we celebrate smallholder food artisans: organic flours, sourdough bakers, raw honey harvesters, preserve makers, goat cheese crafters, and local culinary innovators.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              By connecting table to garden, we build an independent food economy that keeps dollars local and nurtures true friendship among neighbors.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <Users className="w-6 h-6 text-emerald-600 mb-1" />
                <p className="font-bold text-lg text-gray-900">12,000+</p>
                <p className="text-xs text-gray-600">Local Food Lovers</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <HeartHandshake className="w-6 h-6 text-emerald-600 mb-1" />
                <p className="font-bold text-lg text-gray-900">450+</p>
                <p className="text-xs text-gray-600">Verified Producers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <WhatCustomers />
    </div>
  );
};

export default AboutUs;
