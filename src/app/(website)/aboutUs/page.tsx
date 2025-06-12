import HeroSection from '@/components/common/HeroSection';
import Image from 'next/image';
import React from 'react';
import WhatCustomers from '../what_ourCustomers/page';

const AboutUs = () => {
    return (
        <div>
            <HeroSection heading='About Us' paragraph='lorem ipsum is a dummy of placeholder text commutnity used in graphic design publishigng and web Development' image="/assets/aboutUs.png" />

            <div className="flex justify-center items-center text-center py-7"> 
                <div>
                    <p className="text-green-500">About Table Fresh</p>
                <p className="text-black font-bold text-2xl">Your Online Source For Fresh Food and Vegitables</p>
                <p>Our core concept is to bring local people togather with fresh a healthy food</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 container">
                <div className="w-2/8">
                    <Image src="/assets/about/aboutUs1.png" alt="logo" width={500} height={800}/>
                </div>
               <div className="w-2/8 flex justify-center items-center mx-auto ">
                 <div >
                    <p className="font-bold text-2xl">Conecting 60 milions gardens accross america</p>
                    <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and </p>
                </div>
               </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 container py-8">
                <div className="w-2/8 order-1 md:order-2 ">
                    <Image src="/assets/about/aboutUs1.png" alt="logo" width={500} height={800}/>
                </div>
               <div className="w-2/8 order-2 md:order-1 flex justify-center items-center mx-auto ">
                 <div >
                    <p className="font-bold text-2xl">Conecting 60 milions gardens accross america</p>
                    <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and </p>
                </div>
               </div>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-2">
                <div className="w-2/8">
                    <Image src="/assets/about/aboutUs1.png" alt="logo" width={500} height={800}/>
                </div>
               <div className="w-2/8 flex justify-center items-center mx-auto ">
                 <div >
                    <p className="font-bold text-2xl">Conecting 60 milions gardens accross america</p>
                    <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and </p>
                </div>
               </div>
            </div>
            <WhatCustomers/>
        </div>
    );
};

export default AboutUs;