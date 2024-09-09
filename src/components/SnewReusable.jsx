import React from "react";
import NewPng from "../assets/new.png";
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import Container from "./Container";
import Flex from "./Flex";

const SnewReusable = () => {
  return (
    <>
      <Container>
        <h2 className="font-sans text-[20px] font-bold">Special Offers</h2>
        <Flex className="justify-between flex-wrap">
          <div className="w-[24%]">
            <div className="relative group">
              <img src={NewPng} alt="" />
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
                      <li className="font-sans text-[16px] font-normal">
                        Compare
                      </li>
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
                <h2>hdhdh</h2>
                <p>$7373</p>
              </div>
            </div>
          </div>
          <div className="w-[24%]">
            <div className="relative group">
              <img src={NewPng} alt="" />
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
                      <li className="font-sans text-[16px] font-normal">
                        Compare
                      </li>
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
                <h2>hdhdh</h2>
                <p>7373</p>
              </div>
            </div>
          </div>
          <div className="w-[24%]">
            <div className="relative group">
              <img src={NewPng} alt="" />
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
                      <li className="font-sans text-[16px] font-normal">
                        Compare
                      </li>
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
                <h2>hdhdh</h2>
                <p>7373</p>
              </div>
            </div>
          </div>
          <div className="w-[24%]">
            <div className="relative group">
              <img src={NewPng} alt="" />
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
                      <li className="font-sans text-[16px] font-normal">
                        Compare
                      </li>
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
                <h2>hdhdh</h2>
                <p>7373</p>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default SnewReusable;
