import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className='bg-[#F5F5F3] py-[50px]'>

    <Container>
        <Flex className="flex justify-between">
            <div className="w-[15%]">
                <h3 className='font-sans text-[#262626] text-[16px] font-bold'>MENU</h3>
                <ul className='pt-5'>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Home</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Shop</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>About</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Contact</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Journal</li>
                </ul>
            </div>
            <div className="w-[15%]">
            <h3 className='font-sans text-[#262626] text-[16px] font-bold'>SHOP</h3>
                <ul className='pt-5'>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Category 1</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Category 1</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Category 1</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Category 1</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Category 1</li>
                </ul>
            </div>
            <div className="w-[25%]">
            <h3 className='font-sans text-[#262626] text-[16px] font-bold'>HELP</h3>
                <ul className='pt-5'>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Privacy Policy</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Terms & Conditions</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Special E-shop</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Shipping</li>
                    <li className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>Secure Payments</li>
                </ul>
            </div>
            <div className="w-[25%]">
                <p className='font-sans text-[#262626] text-[16px] font-bold'>(052) 611-5711</p>
                <span className='font-sans text-[#262626] text-[16px] font-bold py-2'>company@domain.com</span>
                <h5 className='font-sans text-[#6D6D6D] text-[14px] font-normal py-1'>575 Crescent Ave. Quakertown, PA 18951</h5>
            </div>
            <div className="w-[20%]">
                <img src={Logo} alt="" />
            </div>
        </Flex>
    </Container>
    </footer>
  )
}

export default Footer