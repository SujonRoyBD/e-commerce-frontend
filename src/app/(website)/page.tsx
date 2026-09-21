"use client";

import React from "react";
import HeroSection from "@/components/common/HeroSection";
import Features from "./features-farm/page";
import Search from "./search/page";
import Banner from "./banner-ads/page";
import WhatCustomers from "./what_ourCustomers/page";
import Features2 from "./fratureFarm2/page";

const HomePage = () => {
  return (
    <div className="space-y-4 sm:space-y-8 pb-12">
      <section>
        <HeroSection
          heading="Find Fresh Fruits and Vegetables Locally"
          paragraph="Discover crisp, chemical-free produce harvested fresh by local family farms and neighborhood gardens."
          image="/assets/findFresh1.png"
        />
      </section>

      <section>
        <Search />
      </section>

      <Features />
      <Banner />
      <Features2 />
      <WhatCustomers />
    </div>
  );
};

export default HomePage;