import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft, FaStar } from 'react-icons/fa';

interface FarmData {
  id: number;
  img: string;
  title: string;
  location: string;
  desc: string;
  imglogo?: string;
}

const WhatCustomers: React.FC = () => {
  const data: FarmData[] = [
    {
      id: 1,
      desc: "I've been ordering from TABLEFRESH for over a year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.",
      img: "/assets/head.png",
      title: "Sarah Johnson",
      location: "Portland, OR",
    },
    {
      id: 2,
      desc: "I've been ordering from TABLEFRESH for over a year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.",
      img: "/assets/head.png",
      title: "Michael Brown",
      location: "Austin, TX",
    },
    {
      id: 3,
      desc: "I've been ordering from TABLEFRESH for over a year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.",
      img: "/assets/head.png",
      title: "Emily Davis",
      location: "Seattle, WA",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <p className="font-bold text-xl">What Our Customers Say</p>
        <div className="flex gap-4">
          <button className="w-[60px] h-[25px] border border-green-500  flex items-center justify-center text-green-500">
            <FaArrowLeft />
          </button>
          <button className="w-[60px] h-[25px] border border-green-500  flex items-center justify-center text-green-500">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-sm">
            <div className="flex text-yellow-500 gap-1 mb-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-500" />
            </div>
            <p className="text-gray-700 mb-4">{item.desc}</p>
            <div className="flex items-center gap-3">
              <Image src={item.img} height={50} width={50} alt="head" className="rounded-full" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatCustomers;
