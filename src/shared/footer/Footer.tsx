import Image from 'next/image';
import React from 'react';
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="container pb-9">
            <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4  justify-between gap-[80px]">
                <div>
                   <Image src="/assets/logo.png" alt="Logo" width={105} height={54} className='py-[24px]'/>
                   <p className="">Lorem ipsum is a dummy or placeholder text commonly used in graphics design.</p>
                   <div className="flex gap-4">
                    <FiFacebook/>
                    <BsInstagram/>
                    <FiTwitter/>
                   </div>
                </div>
                <div>
                    <button className="font-bold py-[24px]">Quick Links</button> 
                    <p>About Us</p> 
                    <p>Mission</p>
                    <p>Become a Seller</p>
                    <p>Blog</p>
                </div>
                <div>
                      <button className="font-bold py-[24px]">Customer Service</button>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className=''>
                    <button className="font-bold py-[24px]">Contact Us</button>
                    <div className='py-[1px]'>
                    <p>123 Organi Way</p>
                    <p>Farmville, CA 90210</p>
                    </div>
                     <div className='py-[1px]'>
                    <p>Email: info@tablefresh.com</p>
                    <p>Phone: (000) 123-0000</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Footer;