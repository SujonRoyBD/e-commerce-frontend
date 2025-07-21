// app/farm/[id]/page.tsx
'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import FarmProducts from '../../farmProduct2/page';



interface FarmData {
  id: string;
  img: string;
  imglogo: string;
  title: string;
  error: string;
  location: string;
  desc: string;
}

const data: FarmData[] = [
  {
    id: "1",
    img: "/assets/greenfarm1/greenfarm1.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
    error:"This farm produces organic products",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: "2",
    img: "/assets/greenfarm1/greenfarm2.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
    error:"This farm produces organic products",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: "3",
    img: "/assets/greenfarm1/greenfarm3.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
    error:"This farm produces organic products",
    location: "Sacramento, CA 95814",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: "4",
    img: "/assets/greenfarm1/greenfarm4.png",
    imglogo: "/assets/head.png",
    title: "Green Valley Farm",
    error:"This farm produces organic products",
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
      <Image src={farm.img} alt={farm.title} width={200} height={50}  className="container h-[300px]"/>
      <div className="container py-4">
        <div className="flex gap-3">


          {/* fdfdfd */}
          <div>
            <Image src="/assets/head.png" alt="head" width={80} height={80}/>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{farm.title}</h2>
        <p className="flex items-center gap-2 text-green-500"><MdErrorOutline className="text-green-500"/> {farm.error}</p>
        <p className="flex items-center gap-2 text-gray-500"><CiLocationOn className="text-green-500"/> {farm.location}</p>
          </div>
        </div>
        <p className="py-5">{farm.desc}</p>
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <p className="font-bold">4.9 (127 reviews)</p>
        </div>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Book Visit</button>
      </div>
      <div>
      </div>
      <FarmProducts/>
    </div>
  );
};

export default FarmDetailsPage;
