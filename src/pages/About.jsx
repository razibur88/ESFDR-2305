import React from 'react'
import Container from '../components/Container'
import New from "../assets/new.png"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='mb-[131px]'>
    <Container>
        <h2><Link to="/">Home</Link> / <span>About</span></h2>
      <div className="lg:grid gap-x-[40px] grid-cols-2">
        <div className=""><img className='w-full' src={New} alt="products" /></div>
        <div className=""><img className='w-full'  src={New} alt="products" /></div>
      </div>
      <div className="mt-[128px] mb-[118px]">
        <h3 className='font-dm-sans font-normal text-[39px] text-[#262626] leading-[52px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>
      </div>
      <div className="lg:grid grid-cols-3 gap-x-[40px] ">
      <div className="">
        <h2 className='font-dm-sans font-bold text-[25px] text-[#262626] leading-[36px] pb-[11px] '>Our Vision</h2>
        <p className='font-dm-sans font-normal text-base text-justify text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      <div className="">
        <h2 className='font-dm-sans font-bold text-[25px] text-[#262626] leading-[36px] pb-[11px] '>Our Vision</h2>
        <p className='font-dm-sans font-normal text-base text-justify text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      <div className="">
        <h2 className='font-dm-sans font-bold text-[25px] text-[#262626] leading-[36px] pb-[11px] '>Our Vision</h2>
        <p className='font-dm-sans font-normal text-base text-justify text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      
      
    </Container>
    </section>
  )
}

export default About