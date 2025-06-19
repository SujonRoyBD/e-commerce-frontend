'use client';

import React from 'react';
import HeroSection from '@/components/common/HeroSection';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import WhatCustomers from '../what_ourCustomers/page';
import AccordionDemo from '../according/page';
import Link from 'next/link';
import { BlogData } from '../../../components/data/page';
// ✅ blogBlogDataData import করছো

const OurBlog = () => {
 
  return (
    <div>
      <HeroSection
        heading="Our Blog"
        paragraph="Stay updated with the latest news and insights about organic farming"
        image="/assets/findFresh1.png"
      />

      <div className="container text-center py-8 space-y-2">
        <p className="text-green-500 font-medium">Mission Table Fresh</p>
        <h2 className="text-2xl font-bold text-gray-800">
          Connecting People Through Food, Building Community Through Tradition
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Taking control from corporations and putting it back in the hands of the people, where it belongs.
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
        {BlogData?.map((item) => (
          <div key={item.id}>
            <Image src={item.img} alt={item.title} width={500} height={300} className="rounded-md w-full" />
            <div className="flex justify-between text-lg text-gray-500 mt-3">
              <p>{item.date}</p>
              <p>{item.location}</p>
            </div>
            <h3 className="font-bold text-lg mt-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>

            <Link href={`/ourBlog/${item.id}`} className="inline-flex items-center text-green-600 font-semibold mt-3 hover:underline">
              Read more <FaArrowRight className="ml-2 mt-[2px]" />
            </Link>
          </div>
        ))}
      </div>

      <WhatCustomers />
      <AccordionDemo />
    </div>
  );
};

export default OurBlog;
