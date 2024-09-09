import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/productSlice";

const Post = ({allPage,cateFilter,activeMulti}) => {
  let [filterShow, setFilterShow] = useState([])
  let [count, setCount] = useState(true)

  let dispatch = useDispatch()
  

  useEffect(()=>{
    let cateFilterSingle = cateFilter.slice(0,5)
    setFilterShow(cateFilterSingle)
  },[cateFilter])

  let handleAllShowData = ()=>{
    setFilterShow(cateFilter)
    setCount(false)
  }

  let handleShowLess = () =>{
    let cateFilterSingle = cateFilter.slice(0,5)
    setFilterShow(cateFilterSingle)
    setCount(true)
  }

  let handleShopCartProduct = (item)=>{
    dispatch(addToCart({...item, qun:1}))
  }

  return (
    <>
    {cateFilter.length > 0 ? 
    <>
      <div className="flex justify-between flex-wrap">
        {filterShow.map((item)=>(
        <div className="w-[32%]">
        <Link to={`/shop/${item.id}`}>
        <div className="relative group">
        <img src={item.thumbnail} alt="" />
        <div className="absolute bottom-0 left-0 w-full bg-[#F5F5F5] duration-300 ease-in-out px-5 h-[0px] overflow-hidden group-hover:h-[120px] flex items-center justify-end">
          <div className="">
            <div className="">
              <ul className="flex items-center justify-end gap-x-2">
                <li className="font-sans text-[16px] font-normal">
                  Add to Wish List
                </li>
                <li>
                  <FaHeart />
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex items-center justify-end gap-x-2">
                <li className="font-sans text-[16px] font-normal">Compare</li>
                <li>
                  <IoGitCompare />
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex items-center justify-end gap-x-2">
                <li className="font-sans text-[16px] font-normal">
                  Add to Cart
                </li>
                <li>
                  <FaCartPlus />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 px-2">
        <div className="flex justify-between items-center">
          <h2>{item.title}</h2>
          <p>${item.price}</p>
        </div>
      </div>
        </Link>
        </div>
        ))}
    </div>
    <div className="mt-6">
    {count ? cateFilter.length > 5 &&
    <div className="">
      <h2 onClick={handleAllShowData} className="font-sans text-[16px] font-normal cursor-pointer">Show All</h2>
    </div>
    :
    cateFilter.length > 5 && 
   <div className="">
     <h2 onClick={handleShowLess} className="font-sans text-[16px] font-normal">Hide</h2>
   </div>
    }
    </div>
    </>
    :
      <div className={`${activeMulti == "active" ? "" : "flex justify-between flex-wrap"}`}>
        {allPage.map((item)=>(
        <div className="w-[32%]">
        <div className="relative group">
        <Link to={`/shop/${item.id}`}>
        <img src={item.thumbnail} alt="" />
        </Link>
        <div className="absolute bottom-0 left-0 w-full bg-[#F5F5F5] duration-300 ease-in-out px-5 h-[0px] overflow-hidden group-hover:h-[120px] flex items-center justify-end">
          <div className="">
            <div className="">
              <ul className="flex items-center justify-end gap-x-2">
                <li className="font-sans text-[16px] font-normal">
                  Add to Wish List
                </li>
                <li>
                  <FaHeart />
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex items-center justify-end gap-x-2">
                <li className="font-sans text-[16px] font-normal">Compare</li>
                <li>
                  <IoGitCompare />
                </li>
              </ul>
            </div>
            <div onClick={()=>handleShopCartProduct(item)} className="">
              <ul className="flex items-center justify-end gap-x-2">
                <li className="font-sans text-[16px] font-normal">
                  Add to Cart
                </li>
                <li>
                  <FaCartPlus />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 px-2">
        <div className="flex justify-between items-center">
          <h2>{item.title}</h2>
          <p>${item.price}</p>
        </div>
      </div>
        </div>
        ))}
      </div>
}
    </>
  );
};

export default Post;
