import React, { useContext, } from 'react'
import Container from './Container'
import { FaHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import Slider from 'react-slick';
import { MdArrowForwardIos ,MdArrowBackIosNew } from "react-icons/md";
import { ApiData } from './ContextApi';
import Year from "../assets/year.png"
import NewReusable from './NewReusable';





function SampleNextArrow(props) {
    const { style,onClick } = props;
    return (
      <div className='absolute left-0 top-[50%] translate-y-[-50%] z-50 text-center leading-[40px] w-[40px] h-[40px] bg-[#979797] rounded-full'
        
        onClick={onClick}
      ><MdArrowBackIosNew  className='inline-block'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='absolute right-0 top-[50%] translate-y-[-50%] z-50 text-center leading-[40px] w-[40px] h-[40px] bg-[#979797] rounded-full'
        onClick={onClick}
      ><MdArrowForwardIos className='inline-block'/></div>
    );
  }

const Newarrivals = () => {
  let data = useContext(ApiData)

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            
           
          ]
    }



  return (
    <div>
        <Container>
            <h2 className="font-sans text-[24px] font-bold pt-10">New Arrivals</h2>
            <Slider {...settings}>
            {data.map((item)=>(
              <NewReusable item={item}/>
            ))}
            </Slider>
            <div className="py-20">
                <img src={Year} alt="" />
            </div>

        </Container>
    </div>
  )
}

export default Newarrivals