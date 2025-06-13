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
      img: "/assets/farmProduct/fresh Strawberries1.png",
      title: "Fresh Strawberries",
      street: "2.5 kilometers away",
      season: "Available all year"
    },
    {
      id: 2, 
      img: "/assets/farmProduct/fresh Strawberries2.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 3, 
      img: "/assets/farmProduct/fresh Strawberries3.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 4, 
      img: "/assets/farmProduct/fresh Strawberries4.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 5, 
      img: "/assets/farmProduct/fresh Strawberries5.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 6, 
      img: "/assets/farmProduct/fresh Strawberries5.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 7,
      img: "/assets/farmProduct/fresh Strawberries7.png",
      title: "Fresh Strawberries",
      street: "2.5 kilometers away",
      season: "Available all year"
    },
    {
      id: 8, 
      img: "/assets/farmProduct/fresh Strawberries7.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 9, 
      img: "/assets/farmProduct/fresh Strawberries7.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    {
      id: 10, 
      img: "/assets/farmProduct/fresh Strawberries7.png",
      title: "Organic Tomatoes",
      street: "5 kilometers away",
      season: "Summer season"
    },
    
  ];

  return (
    <div className="container">
      <h2 className="text-xl font-bold">Farm Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 py-3 gap-[px]">
        {data.map((product) => (
          <div key={product.id} className="py-3">
            <Image src={product.img} alt={product.title} width={200} height={150} />
            <p className='font-bold'>{product.title}</p>
            <p>{product.street}</p>
            <p>{product.season}</p>
            <div className="flex gap-[30px]">
                <p className="font-bold">$25 per box</p>
                <strong className='flex gap-[8px] font-bold'> <p className='text-yellow-500 mt-1'><IoStarSharp/>  </p> 4.8 (98)</strong>
            </div>
          </div>
        ))}
      </div>
      <WhatCustomers/>
    </div>
  );
};

export default FarmProduct;
