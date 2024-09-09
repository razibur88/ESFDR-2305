import React from 'react'
import Container from './Container'
import Flex from './Flex'
import SalesBig from "../assets/big.png"
import sideOne from "../assets/sidetop.png"
import sideTwo from "../assets/sidebtm.png"
 
const Sales = () => {
  return (
    <div>
        <Container>
            <Flex className="justify-between">
                <div className="w-[48%]">
                    <img src={SalesBig} alt="" />
                </div>
                <div className="w-[48%]">
                    <div className="pb-[35px]">
                        <img src={sideOne} alt="" />
                    </div>
                    <div className="">
                        <img src={sideTwo} alt="" />
                    </div>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Sales