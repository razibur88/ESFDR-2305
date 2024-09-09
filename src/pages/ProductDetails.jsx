import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Rate } from 'antd';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/slice/productSlice";

const ProductDetails = () => {
  let dispatch = useDispatch()
  let productId = useParams();
  let [singleProduct, setSingleProduct] = useState({});
  let [show, setShow] = useState(false)
  let [rating, setRating] = useState(0)
  let getId = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleProduct(response.data);
        setRating(response.data.reviews[0].rating)
      });
  };

  useEffect(() => {
    getId();
  }, []);


  

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return singleProduct.rating > index + 1 ? (
      <IoIosStar className="text-[gold]" />
    ) : singleProduct.rating > number ? (
      <IoIosStarHalf className="text-[gold]" />
    ) : (
      <IoIosStarOutline className="text-[gold]" />
    );
  });

  let handleAddtoCart = (item) =>{
    dispatch(addToCart({...item, qun:1}))
    
  }
  

  return (
    <Container>
      <Flex className="flex-wrap justify-between">
        {singleProduct?.images?.map((item) => (
          <div className="w-[48%]">
            <img src={item} alt="" />
          </div>
        ))}
      </Flex>
      <div className="">
        <h3 className="font-sans text-[24px] font-bold py-5">Product</h3>
        <div className="flex items-center">
          {clientRating}
          <p className="pl-3">Review</p>
        </div>
        <div className="flex items-center gap-x-5 py-3">
          <del>$44.00</del>
          <h4 className="font-sans text-[20px] font-bold">$44.00</h4>
        </div>
        <div className="">
          <h3>STATUS: {singleProduct.stock}</h3>
        </div>
        <div className="my-3">
          <button className="w-[200px] h-[50px] border-2 border-[#262626] font-sans font-normal hover:bg-[#262626] hover:text-white duration-300 ease-in-out">
          Add to Wish List
          </button>
          <Link to="/cart">
          <button onClick={()=>handleAddtoCart(singleProduct)} className="w-[200px] h-[50px] border-2 border-[#262626] font-sans font-normal hover:bg-[#262626] hover:text-white duration-300 ease-in-out ml-5">
            Add to Cart
          </button>
          </Link>
        </div>
        <div className="w-[900px] py-10">
        <div onClick={()=>setShow(!show)} className=" flex justify-between items-center">
          <h2 className="font-sans text-[20px] font-bold">FEATURES  & DETAILS</h2>
          <p className="text-[20px] font-bold">+</p>
        </div>
        {show &&
        <p>{singleProduct.description}</p>
        }

        <div className="pt-10">
        {singleProduct && 
           <Rate disabled value={rating} />
        
        }
        </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
