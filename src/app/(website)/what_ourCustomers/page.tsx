'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

interface FarmData {
  id: number;
  img: string;
  title: string;
  location: string;
  desc: string;
}

const WhatCustomers: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const data: FarmData[] = [
    {
      id: 1,
      desc: "I've been ordering from TABLEFRESH for over a year now...",
      img: "/assets/head.png",
      title: "Sarah Johnson",
      location: "Portland, OR",
    },
    {
      id: 2,
      desc: "Amazing service! Everything is so fresh and on time.",
      img: "/assets/head.png",
      title: "Michael Brown",
      location: "Austin, TX",
    },
    {
      id: 3,
      desc: "Best place to get fresh farm products online!",
      img: "/assets/head.png",
      title: "Emily Davis",
      location: "Seattle, WA",
    },
     {
      id: 1,
      desc: "I've been ordering from TABLEFRESH for over a year now...",
      img: "/assets/head.png",
      title: "Sarah Johnson",
      location: "Portland, OR",
    },
    {
      id: 2,
      desc: "Amazing service! Everything is so fresh and on time.",
      img: "/assets/head.png",
      title: "Michael Brown",
      location: "Austin, TX",
    },
    {
      id: 3,
      desc: "Best place to get fresh farm products online!",
      img: "/assets/head.png",
      title: "Emily Davis",
      location: "Seattle, WA",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <p className="font-bold text-xl">What Our Customers Say</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="border border-black rounded-[10px] py-2 px-6 text-base font-bold leading-normal text-black"
          >
            <FaArrowLeft/>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="border border-black rounded-[10px] py-2 px-6 text-base font-bold leading-normal text-black"
          >
            <FaArrowRight/>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 border rounded-lg shadow-sm bg-white h-full">
              <div className="flex text-yellow-500 gap-1 mb-2">
                <FaStar /><FaStar /><FaStar /><FaStar />
                <FaStar className="text-gray-400" />
              </div>
              <p className="text-gray-700 mb-4">{item.desc}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={item.img}
                  height={50}
                  width={50}
                  alt="head"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
   
    </div>
  );
};

export default WhatCustomers;
