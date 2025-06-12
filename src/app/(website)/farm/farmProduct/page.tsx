import Image from 'next/image';
import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import WhatCustomers from '../../what_ourCustomers/page';

interface FarmProductType {
  id: number;
  img: string;
  title: string;
  street: string;
  season: string;
}

const FarmProduct = () => {
  const data: FarmProductType[] = [
    {
      id: 1,
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Fresh Strawberries",
      street: "2.5 kilometers away",
      season: "Available all year"
    },
    {
      id: 2, 
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 6, 
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 3, 
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 4, 
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 5, 
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 1,
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Fresh Strawberries",
      street: "2.5 kilometers away",
      season: "Available all year"
    },
    {
      id: 2, 
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 6, 
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 3, 
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 4, 
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 5, 
      img: "/assets/greenfarm1/greenfarm1.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
  ];

  return (
    <div className="px-4">
      <h2>Farm Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 py-3">
        {data.map((product) => (
          <div key={product.id} className="py-3">
            <Image src={product.img} alt={product.title} width={180} height={100} />
            <p className='font-bold'>{product.title}</p>
            <p>{product.street}</p>
            <p>{product.season}</p>
            <div className="flex gap-[30px]">
                <p>$25 per box</p>
                <p className='flex gap-[8px]'> <strong className='text-yellow-500 mt-1'><IoStarSharp/></strong> 4.8 (98)</p>
            </div>
          </div>
        ))}
      </div>
      <WhatCustomers/>
    </div>
  );
};

export default FarmProduct;
