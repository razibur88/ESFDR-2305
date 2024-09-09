import React from 'react'
import BanImg from "../assets/banner.png"
import Slider from "react-slick";
import Container from "../components/Container"
import Flex from "../components/Flex"
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";



const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                position:"absolute",
                left:"100px",
                top:"50%",
                transform:"translateY(-50%)"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                color: "transparent",
                borderRight: "0px blue solid",
                padding:"10px 0"
              }}
            >
              0{i + 1}
            </div>
          )
      };
  return (
    <div>
        <Slider {...settings}>
        <div className="">
            <img src={BanImg} alt="" />
        </div>
        <div className="">
            <img src={BanImg} alt="" />
        </div>
        <div className="">
            <img src={BanImg} alt="" />
        </div>
        <div className="">
            <img src={BanImg} alt="" />
        </div>
    </Slider>

    <Container>
        <Flex className="justify-between py-6">
            <div className="">
                <p className="font-sans font-normal text-[16px]"><span className='text-[24px] font-bold'>2</span> Two years warranty</p>
            </div>
            <div className="">
                <div className="flex items-center gap-x-3">
                    <MdLocalShipping/>
                    <h4 className="font-sans font-normal text-[16px]">Free shipping</h4>
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-x-3">
                <AiOutlineReload/>
                <h4 className="font-sans font-normal text-[16px]">Return policy in 30 days</h4>
                </div>
            </div>
        </Flex>
    </Container>
        
    </div>
  )
}

export default Banner