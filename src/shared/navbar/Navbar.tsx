'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { GiRoyalLove } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='flex items-center justify-between px-8 py-3'>
     
        <div>
          <Link href='/'>
          <Image
            src="/assets/logo.png"
            alt="discount"
            height={60}
            width={100}
          />
        </Link>
        </div>

          <div className="gap-8 flex">
            <Link href="/">Home</Link>
          <Link href="/aboutUs">About</Link>
          <Link href="/ourMisson">Mission</Link>
          <Link href="/dashboard">Become a seller</Link>
          <Link href="/dashboard">Blog</Link>
          <Link href="/dashboard">FAQ</Link>
          <Link href="/dashboard">Contact</Link>
          </div>


          <div className="flex gap-4">
            <Link href="/cart">
            <FaRegComment className='text-2xl' />
          </Link>
          <Link href='/login'>
            < BsCart2 className='text-2xl' />
          </Link>

            <Link href="/cart">
            <Image src="/assets/head.png" alt="head" height={50} width={50}/>
          </Link>
          <div className="flex items-center justify-center w-[25px] h-[10px] bg-green-500 gap-2">
             <GiRoyalLove/>
            <p>Donate</p>
          </div>
            
          
          </div> 
        
      </div>

      <div className='flex hidden md:block flex-col'>
        <div className='flex items-center justify-between px-4 py-2'>
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="discount"
              height={60}
              width={140}
            />
          </Link>

          <Link href="/cart">
            <FaCartArrowDown className='text-2xl' />
          </Link>

          <div className='cursor-pointer' onClick={() => setIsActive(!isActive)}>
            {isActive ? (
              <IoMenu className='w-8 h-8' />
            ) : (
              <RxCross2 className='w-8 h-8' />
            )}
          </div>
        </div>
        {!isActive && (
          <div className='bg-orange-500 w-full text-black flex flex-col px-6 py-4 gap-2'>
            <Link href='/dashboard'>Dashboard</Link>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact Us</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
