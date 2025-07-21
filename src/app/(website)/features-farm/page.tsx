"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
interface FarmData {
  id: string;
  img: string;
  imglogo: string;
  title: string;
  location: string;
  desc: string;
  price?: number;
  q?: number;
}

const Features = () => {


  const data: FarmData[] = [
    {
      id: "1",
      img: "/assets/greenfarm1/greenfarm1.png",
      imglogo: "/assets/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
      price: 50,
    },
    {
      id: "2",
      img: "/assets/greenfarm1/greenfarm2.png",
      imglogo: "/assets/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
      price: 75,
    },
    {
      id: "3",
      img: "/assets/greenfarm1/greenfarm3.png",
      imglogo: "/assets/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
      price: 60,
    },
    {
      id: "4",
      img: "/assets/greenfarm1/greenfarm4.png",
      imglogo: "/assets/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
      price: 90,
    },
  ];

  return (
    <div className="container py-8">


      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {data.map((item) => {

          return (
            <div key={item.id} className="border p-4 rounded shadow-sm">
              <div className="relative">
                <div className="bg-white p-2 rounded-full absolute right-2 top-2">
                  <FaRegComment />
                </div>
                <Image
                  src={item.img}
                  alt="Farm Image"
                  width={372}
                  height={260}
                  className="w-full object-cover"
                />
              </div>

              <div className="flex gap-2 py-4 items-center">
                <Image src={item.imglogo} alt="Logo" width={56} height={56} />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="flex items-center gap-1 text-sm text-gray-500">
                    <CiLocationOn /> {item.location}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600">{item.desc}</p>

              <div className="flex items-center gap-2 py-2">
                <FaStar className="text-yellow-500" />
                <span className="font-bold">4.9</span>
                <span className="text-gray-500 text-sm">(127)</span>
              </div>

              <div className="flex gap-2 my-2">
                <span className="text-sm font-semibold text-green-700">
                  Price: ${item.price}
                </span>
              </div>

              
                 
              <Link
                href={`/farm/${item.id}`}
                className="flex gap-2 mt-3 text-green-600 font-semibold"
              >
                View farms <FaArrowRight className="mt-[2px]" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
