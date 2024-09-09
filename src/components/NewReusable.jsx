import React, { useContext } from "react";
import { ApiData } from './ContextApi';
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";

const NewReusable = ({item}) => {
   
  return (
    <>
    <div className="relative group">
    <img src={item.thumbnail} alt="" />
    <div className="absolute bottom-0 left-0 w-full bg-[#F5F5F5] duration-300 ease-in-out px-5 h-[0px] overflow-hidden group-hover:h-[120px] flex items-center justify-end">
        <div className="">
        <div className="">
            <ul className='flex items-center justify-end gap-x-2'>
                <li className="font-sans text-[16px] font-normal">Add to Wish List</li>
                <li><FaHeart/></li>
            </ul>
        </div>
        <div className="">
            <ul className='flex items-center justify-end gap-x-2'>
                <li className="font-sans text-[16px] font-normal">Compare</li>
                <li><IoGitCompare/></li>
            </ul>
        </div>
        <div className="">
            <ul className='flex items-center justify-end gap-x-2'>
                <li className="font-sans text-[16px] font-normal">Add to Cart</li>
                <li><FaCartPlus/></li>
            </ul>
        </div>
        </div>
    </div>
</div>
<div className="pt-3 px-2">
   <div className="flex justify-between items-center">
   <h2>{item.title}</h2>
   <p>{item.price}</p>
   </div>
</div>
</>
  );
};

export default NewReusable;
