import HeroSection from "@/components/common/HeroSection";
import Image from "next/image";
import React from "react";
import WhatCustomers from "../what_ourCustomers/page";

const OurMission = () => {
  return (
    <div className="">
      <HeroSection
        heading="Our Mission"
        paragraph="lorem ipsum is a dummy of placeholder text commutnity used in graphic design publishigng and web Development"
        image="/assets/aboutUs.png"
      />

      <div className="container flex justify-center items-center text-center py-7">
        <div>
          <p className="text-green-500">Mission Table Fresh</p>
          <p className="text-black font-bold text-2xl">
            Connecting People Through Food, Building Community Through Tradition
          </p>
          <p>
            Taking control from corporations and putting it back in the hands of
            the people, where it belongs.
          </p>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-9">
        <div className="w-full md:w-2/8 order-1 md:order-2">
          <Image
            src="/assets/about/aboutUs1.png"
            alt="logo"
            width={500}
            height={800}
          />
        </div>
        <div className="w-full  md:w-2/8 order-2 md:order-1 flex justify-center items-center mx-auto ">
          <div>
            <p className="font-bold text-2xl py-[24px]">
              A Journey Through Time
            </p>
           <div className="bg-white w-full md:w-[628px] h-[80px]">
             <p>
              For millennia, food has changed and transformed cultures and
              societies. Ships sailed around the world seeking routes to the Far
              East in search of spices.
            </p>
           </div> 
            <p className="py-[24px]">
              The Silk Road, the world first global trade route, carried food,
              spices, gold and goods from the Far East to the Middle East and
              European continent.
            </p>
            <p>
              Today food is flown around the world in a matter of hours. Every
              grocery store has amazing selection with seasonality no longer
              applying. “But, at what cost”.
            </p>
          </div>
        </div>
      </div>
      <div className="container  grid grid-cols-1 md:grid-cols-2 py-8 gap-7">
        <div className="w-full md:w-2/8 ">
          <Image
            src="/assets/about/aboutUs2.png"
            alt="logo"
            width={500}
            height={800}
          />
        </div>
        <div className="w-full md:w-2/8 justify-center items-center mx-auto ">
          <div className="bg-white rounded-[8px] border-l-[4px] border-[#039B06] p-3 ">
            <p className="font-bold text-2xl">
             Genetic Modification
            </p>
            <p>
              Altering the natural structure of our food for profit over health.
            </p>
          </div>
          <div className="bg-white rounded-[8px] border-l-[4px] border-[#039B06] p-3 mt-3 ">
            <p className="font-bold text-2xl">
             Genetic Modification
            </p>
            <p>
              Altering the natural structure of our food for profit over health.
            </p>
          </div>
          <div className="bg-white rounded-[8px] border-l-[4px] border-[#039B06] p-3 mt-3">
            <p className="font-bold text-2xl">
             Genetic Modification
            </p>
            <p>
              Altering the natural structure of our food for profit over health.
            </p>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-9">
        <div className="w-full md:w-2/8 order-1 md:order-2">
          <Image
            src="/assets/about/aboutUs3.png"
            alt="logo"
            width={500}
            height={800}
          />
        </div>
        <div className="w-full md:w-2/8 order-2 md:order-1 flex justify-center items-center mx-auto ">
          <div>
            <p className="font-bold text-2xl py-[24px]">Table Fresh Mission</p>
            <p>
              Our mission is to connect people through food, fresh grown
              vegetables , building community with a healthy fresh alternative
              to grocery stores.
            </p>
            <p className="py-[24px]">
              We re not stopping there, we want to include everyone. From small
              farms to organic farms and food makers, such as flour, cheese and
              smoked meats. Preserves, like jellies and jams and canned goods
              from home processors. Home bakers with artisan breads and baked
              goods. Cooks and caterers
            </p>
            <p>
              Let Table Fresh serve as the platform to launch you own small food
              business, local and healthy. Taking control from the government
              and corporations and putting it back in the hands of the people,
              where it belongs!
            </p>
          </div>
        </div>
      </div>
      <WhatCustomers />
    </div>
  );
};

export default OurMission;
