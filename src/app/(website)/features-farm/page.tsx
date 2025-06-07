import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Features = () => {
  const data = [
    {
      id: "1",
      img: "/aseats/greenfarm1/greenfarm1.png",
      imglogo: "/aseats/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
    },
    {
      id: "1",
      img: "/aseats/greenfarm1/greenfarm1.png",
      imglogo: "/aseats/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
    },
    {
      id: "1",
      img: "/aseats/greenfarm1/greenfarm1.png",
      imglogo: "/aseats/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
    },
    
    {
      id: "1",
      img: "/aseats/greenfarm1/greenfarm1.png",
      imglogo: "/aseats/head.png",
      title: "Green Valley Farm",
      location: "Sacramento, CA 95814",
      desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
    },
    
  ];

  return (
    <div>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-[24px] px-8 py-8">
         {data.map((item) => (
        <div key={item.id}>
          <Image src={item.img} alt="Logo" width={372} height={260} />
          <div className="flex gap-[8px] py-[24px]">
            <div>
             <Image src={item.imglogo} alt="Logo" width={56} height={56} />
            </div>
            <div>
                 <h2 className="font-bold ">{item.title}</h2>
                <p className="flex gap-[5px]"> <CiLocationOn className="mt-1" /> {item.location}</p>
            </div>
        </div> 
          
         
          <p>{item.desc}</p>
          <div className="flex gap-[8px]">
            <FaStar className='text-yellow-500'/>
            <div className="flex gap-[8px]">
                <p className="font-bold">4.9</p>
                <p>(127)</p>
            </div>
          </div>
          <button className="font-bold text-green-500">View farms</button>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Features;
