import HeroSection from "@/components/common/HeroSection";
import Image from "next/image";
import React from "react";
import WhatCustomers from "../what_ourCustomers/page";

const AboutUs = () => {
  return (
    <div>
      <HeroSection
        heading="About Us"
        paragraph="lorem ipsum is a dummy of placeholder text commutnity used in graphic design publishigng and web Development"
        image="/assets/aboutUs.png"
      />

      <div className="flex justify-center items-center text-center py-7">
        <div>
          <p className="text-green-500">About Table Fresh</p>
          <p className="text-black font-bold text-2xl">
            Your Online Source For Fresh Food and Vegitables
          </p>
          <p>
            Our core concept is to bring local people togather with fresh a
            healthy food
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 container">
        <div className="w-2/8">
          <Image
            src="/assets/about/aboutUs2.png"
            alt="logo"
            width={500}
            height={800}
          />
        </div>
        <div className="w-2/8 flex justify-center items-center mx-auto ">
          <div>
            <p className="font-bold text-2xl py-[24px]">
              Connecting 60+ Million Gardens Across <br/> America
            </p>
            <p>
              With over 60 million gardens in America, peoples are growing fresh vegetables for months of the year with no way to market them. Initially we wanted to offer an alternative way to sell or trade your excess produce, making extra income for the average gardener. 
            </p>
            <p className="py-[24px]">
             But its more than that! Your family health is important, and being able to buy the freshest and healthiest food is the goal of every person. 
            </p>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 container py-8">
        <div className="w-2/8 order-1 md:order-2 ">
          <Image
            src="/assets/about/aboutUs3.png"
            alt="logo"
            width={500}
            height={800}
          />
        </div>
        <div className="w-2/8 order-2 md:order-1 flex justify-center items-center mx-auto ">
          <div>
            <p className="font-bold text-2xl py-[24px]">A Time When Food Was Pure</p>
            <p>
              There was a time when nearly everyone had their own garden,.
              Having food that was healthy, chemical free and non gmo was never
              a problem.
            </p>
            <p className="py-[24px]">
              That has all changed, the government and corporations control
              nearly all of our food supply, our food is laced with herbicides
              and pesticides, preservatives, food dyes.
            </p>
            <p>
              Consuming these products puts your and your families health at
              risk.
            </p>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="w-2/8">
          <Image
            src="/assets/about/aboutUs1.png"
            alt="logo"
            width={500}
            height={800}
          />
        </div>
        <div className="w-2/8 flex justify-center items-center mx-auto ">
          <div>
            <p className="font-bold text-2xl py-[24px]">Our goal is to build community</p>
            <p>
              With over 60 million gardens and millions more producing some sort
              of food product, such as organic flours, baked good, locally made
              foods, jams , jellies, preserves, smoked meats , cheese, fruit ,
              everything locally sourced.
            </p>
            <p className="py-[24px]">
              We want to connect everyone so you have access to clean healthy
              locally grown and produced food.
            </p>
          </div>
        </div>
      </div>
      <WhatCustomers />
    </div>
  );
};

export default AboutUs;
