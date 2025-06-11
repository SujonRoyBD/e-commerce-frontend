import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";


const Search = () => {
    return (
        <div className="px-[120px]">
            <div className="w-[1000px] h-[90px] rounded-[99px] px-[20px] shadow-xl flex gap-[151px] border bg-white flex items-center justify-between">
                <div>
                 <p>Where</p>
                 <input type="text" placeholder="Search destinations or Enter zip code" className='rounded-[99px] w-[270px]'/>
                </div>
                <div className="w-[1px] h-[80px] bg-gray-400"/>
                <div>
                    <p>Filter by catagory</p>
                    <p className="flex gap-[112px]">All  <MdKeyboardArrowDown/> </p>
                </div>
                <div className="bg-green-500 rounded-full w-[48px] h-[48px] flex justify-center items-center ">
                    <IoSearch className="text-white w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default Search;