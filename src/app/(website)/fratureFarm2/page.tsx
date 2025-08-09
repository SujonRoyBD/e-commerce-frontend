import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";


interface FarmData {
  id: string;
  img: string;
  imglogo: string;
  title: string;
  location: string;
  desc: string;
}

const Features2 = () => {
  const data: FarmData[]  = [
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
     { id: "5",
      img: "/assets/greenfarm1/greenfarm1.png",
      imglogo: "/assets/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
    },
    {
      id: "6",
      img: "/assets/greenfarm1/greenfarm2.png",
      imglogo: "/assets/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
    },
    {
      id: "7",
      img: "/assets/greenfarm1/greenfarm4.png",
      imglogo: "/assets/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
    },
    
    {
      id: "8",
      img: "/assets/greenfarm1/greenfarm3.png",
      imglogo: "/assets/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing seasonal vegetables and herbs.",
    },
    
  ];

  return (
    <div>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] container py-8">
         {data.map((item) => (
        <div key={item.id}>
          <div className="relative"> 
           <div className="bg-white p-2 rounded-full absolute right-2 top-2"> <FaRegComment /></div>
           <div className="z-20"> <Image src={item.img} alt="Logo" width={372} height={260} className='w-[430px] md:w-[372px]'/></div>
            </div>
          <div className="flex gap-[8px] py-[24px]">
            <div>
             <Image src={item.imglogo} alt="Logo" width={56} height={56} />
            </div>
            <div>
                 <h2 className="font-bold">{item.title}</h2>
                <p className="flex gap-[5px]"> <CiLocationOn className="mt-1" /> {item.location}</p>
            </div>
        </div> 
          
         
          <p>{item.desc}</p>
          <div className="flex gap-9 py-3">
            <div className="flex gap-[8px]">
            <FaStar className='text-yellow-500'/>
            <div className="flex gap-[8px]">
                <p className="font-bold">4.9</p>
                <p>(127)</p>
            </div>
          </div>
          <div>
            <Link href={`/farm/${item.id}`}>
         <div className="flex gap-3">
           <span className="font-bold text-green-500">View farms</span>
          <div className="mt-2 w-4 text-green-500"> <FaArrowRight/></div>
         </div>
         </Link>
          </div>
          </div>
         
        </div>
      ))}
     </div>
    </div>
  );
};

export default Features2;
