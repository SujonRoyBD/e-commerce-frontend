// app/farm/[id]/page.tsx
'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface FarmData {
  id: string;
  img: string;
  imglogo: string;
  title: string;
  location: string;
  desc: string;
}

const data: FarmData[] = [
  {
    id: "1",
    img: "/assets/greenfarm1/greenfarm1.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: "2",
    img: "/assets/greenfarm1/greenfarm2.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: "3",
    img: "/assets/greenfarm1/greenfarm3.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: "4",
    img: "/assets/greenfarm1/greenfarm4.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
];

const FarmDetailsPage = () => {
  const params = useParams();
  const { id } = params;

  const farm = data.find((item) => item.id === id);

  if (!farm) return <div>Farm not found</div>;

  return (
    <div className="  py-4">
      <Image src={farm.img} alt={farm.title} width={200} height={50}  className="w-full h-[300px]"/>
      <div className="container">
        <div className="flex gap-3">
          <div>
            <Image src="/assets/head.png" alt="head" width={50} height={50}/>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{farm.title}</h2>
        <p className="flex items-center gap-2 text-gray-500"><CiLocationOn /> {farm.location}</p>
          </div>
        </div>
        <p className="py-4">{farm.desc}</p>
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <p className="font-bold">4.9 (127 reviews)</p>
        </div>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Book Visit</button>
      </div>
    </div>
  );
};

export default FarmDetailsPage;
