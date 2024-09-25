import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';




const Header = () => {
    let [show, setShow] = useState(true)
  return (
    <>
  
    <header className='py-5 styl'>
        <Container>
       <Flex className="justify-between">
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <ul className={`lg:flex justify-center text-center z-50 gap-x-10 absolute left-0 top-0 lg:static ${show == true ? "top-[50px] left-[-400px] w-full duration-300 ease-in-out" : "top-[50px] left-0 bg-[gray] w-full duration-300 ease-in-out "}`}>
                    <li className='font-sans text-white lg:text-[#767676] font-normal text-[16px] hover:text-[#262626] hover:font-bold py-3 lg:py-0'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='font-sans text-white lg:text-[#767676] font-normal text-[16px] hover:text-[#262626] hover:font-bold py-3 lg:py-0'>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className='font-sans text-white lg:text-[#767676] font-normal text-[16px] hover:text-[#262626] hover:font-bold py-3 lg:py-0'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='font-sans text-white lg:text-[#767676] font-normal text-[16px] hover:text-[#262626] hover:font-bold py-3 lg:py-0'>
                        <Link to="/contact">Contacts</Link>
                    </li>
                    <li className='font-sans text-white lg:text-[#767676] font-normal text-[16px] hover:text-[#262626] hover:font-bold py-3 lg:py-0'>Journal</li>
                </ul>
            </div>
            <div onClick={()=>setShow(!show)} className="lg:hidden">
                {show == true ? <FaBars/> :   <RxCross2/> }
            </div>
       </Flex>
    </Container>
    </header>

    </>
  )
}

export default Header