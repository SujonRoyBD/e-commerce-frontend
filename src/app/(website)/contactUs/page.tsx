import React from 'react';
import { MdWifiCalling2 } from "react-icons/md";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLocationOn } from "react-icons/ci";

const ContactUs = () => {
    return (
        <div className="container mt-9">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="w-2/5 bg-[url('/assets/telephone1.png')] bg-cover bg-center" >
                   <div>
                     <p>Contact Information</p>
                    <p>Say something to start a live</p>
                   </div>
                   <div>
                        <p className='flex'><MdWifiCalling2/> +1 (888) 000-0000</p>
                   </div>
                </div>
                <div className="flex flex-col w-3/5 bg-white px-4 h-[300px]shdow-l-md">
                    <input type='text' placeholder='Name' className="mt-4 bg-gray-100 px-2"/>
                    <input type='text' placeholder='Email' className="mt-4 bg-gray-100 px-2"/>
                    <input type='text' placeholder='Phone' className="mt-4 bg-gray-100 px-2"/>
                    <textarea className='mt-4 bg-gray-100 px-2 h-[150px]'placeholder='your text'/>
                    <button className='bg-green-500 mt-3 h-9 rounded-lg '>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;