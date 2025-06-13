import HeroSection from '@/components/common/HeroSection';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import WhatCustomers from '../what_ourCustomers/page';
import Link from 'next/link';

const blogData = [
  {
    id: 1,
    img: "/assets/blog/blog1.png",
    date: "May 27, 2025",
    location: "Sarah Johnson",
    title: "The Benefits of Organic Farming1",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: 2,
    img: "/assets/blog/blog2.png",
    date: "May 28, 2025",
    location: "Mark Lee",
    title: "The Benefits of Organic Farming2",
    desc: "Learn how eco-friendly farming methods help protect the environment.",
  },
  {
    id: 3,
    img: "/assets/blog/blog3.png",
    date: "May 27, 2025",
    location: "Sarah Johnson",
    title: "The Benefits of Organic Farming3",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: 4,
    img: "/assets/blog/blog4.png",
    date: "May 28, 2025",
    location: "Mark Lee",
    title: "The Benefits of Organic Farming4",
    desc: "Learn how eco-friendly farming methods help protect the environment.",
  },
  {
    id: 5,
    img: "/assets/blog/blog5.png",
    date: "May 27, 2025",
    location: "Sarah Johnson",
    title: "The Benefits of Organic Farming5",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: 6,
    img: "/assets/blog/blog6.png",
    date: "May 28, 2025",
    location: "Mark Lee",
    title: "The Benefits of Organic Farming6",
    desc: "Learn how eco-friendly farming methods help protect the environment.",
  },
  {
    id: 7,
    img: "/assets/blog/blog7.png",
    date: "May 27, 2025",
    location: "Sarah Johnson",
    title: "The Benefits of Organic Farming7",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: 8,
    img: "/assets/blog/blog8.png",
    date: "May 28, 2025",
    location: "Mark Lee",
    title: "The Benefits of Organic Farming8",
    desc: "Learn how eco-friendly farming methods help protect the environment.",
  },
  {
    id: 9,
    img: "/assets/blog/blog9.png",
    date: "May 27, 2025",
    location: "Sarah Johnson",
    title: "The Benefits of Organic Farming9",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: 10,
    img: "/assets/blog/blog10.png",
    date: "May 28, 2025",
    location: "Mark Lee",
    title: "The Benefits of Organic Farming10",
    desc: "Learn how eco-friendly farming methods help protect the environment.",
  },
  {
    id: 11,
    img: "/assets/blog/blog11.png",
    date: "May 27, 2025",
    location: "Sarah Johnson",
    title: "The Benefits of Organic Farming11",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: 12,
    img: "/assets/blog/blog12.png",
    date: "May 28, 2025",
    location: "Mark Lee",
    title: "The Benefits of Organic Farming12",
    desc: "Learn how eco-friendly farming methods help protect the environment.",
  },
];

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
        {blogData.map((item) => (
          <div key={item.id}>
            <Image src={item.img} alt={item.title} width={500} height={300} className="rounded-md w-full" />
            <div className="flex justify-between text-sm text-gray-500 mt-3">
              <p>{item.date}</p>
              <p>{item.location}</p>
            </div>
            <h3 className="font-bold text-lg mt-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>

            <Link href={`/blogdetails/${item.title}`} className="inline-flex items-center text-green-600 font-semibold mt-3 hover:underline">
              Read more <FaArrowRight className="ml-2 mt-[2px]" />
            </Link>
          </div>
        ))}
      </div>

      <WhatCustomers />
    </div>
  );
};

export default OurBlog;
