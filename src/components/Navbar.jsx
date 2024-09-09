import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch,FaCartPlus,FaUserCheck  } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeProduct } from './slice/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Navbar = () => {
    let cartInfo = useSelector((state)=> state.product.cartItem)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    
    let [cartShow, setCartShow] = useState(false)
    let [cartCountShow, setcartCountShow] = useState(false)
    let [cartAcctShow, setcartAccShow] = useState(false)
    let cartRef = useRef()
    let cartcountRef = useRef()
    let cartaccRef = useRef()
    let cartShowRef = useRef()

    useEffect(()=>{
        window.addEventListener("click",(e)=>{
            if(cartRef.current.contains(e.target) == true){
                setCartShow(!cartShow)
            }else{
                setCartShow(false) 
            }
            if(cartcountRef.current.contains(e.target) ==  true){
                setcartCountShow(!cartCountShow)
            }else{
                setcartCountShow(false)
            }
            if(cartaccRef.current.contains(e.target) ==  true){
                setcartAccShow(!cartAcctShow)
            }else{
                setcartAccShow(false)
            }
            if(cartShowRef.current.contains(e.target)){
                setcartCountShow(true)
            }
        })
    },[cartShow,cartCountShow,cartAcctShow])


    let handleChek = () =>{
        setTimeout(() => {
            toast("Wow so easy!") 
        }, 1000);
        navigate("/checkout")
        setcartCountShow(false)
    }
    
  return (
    <nav className='py-5 bg-[#F5F5F3]'>
        <Container>
        <Flex className="items-center">
            <div className="w-1/4 relative">
                <div ref={cartRef} className="flex items-center justify-center lg:justify-start gap-x-2">
                    <FaBarsStaggered/>
                    <h2 className="font-sans font-normal text-[16px] hidden lg:block">Shop by Category</h2>
                </div>
                {cartShow &&
                <div className="absolute z-50 left-0 top-[50px] w-[320px]">
                    <ul className='bg-[#262626] py-5'>
                        <li className='font-sans font-normal text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-7 duration-300 ease-in-out hover:text-white py-3'>Accesories</li>
                        <li className='font-sans font-normal text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-7 duration-300 ease-in-out hover:text-white py-3'>Furniture</li>
                        <li className='font-sans font-normal text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-7 duration-300 ease-in-out hover:text-white py-3'>Electronics</li>
                        <li className='font-sans font-normal text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-7 duration-300 ease-in-out hover:text-white py-3'>Clothes</li>
                        <li className='font-sans font-normal text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-7 duration-300 ease-in-out hover:text-white py-3'>Bags</li>
                        <li className='font-sans font-normal text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-7 duration-300 ease-in-out hover:text-white py-3'>Home appliances</li>
                    </ul>
                </div>
                }
            </div>
            <div className="w-1/2">
                <div className="relative">
                    <input className='h-[50px] w-full border-2 border-[#262626] pl-3' type="text" placeholder='Search....' />
                    <div className="absolute top-[50%] translate-y-[-50%] right-10">
                        <FaSearch/>
                    </div>
                </div>
            </div>
            <div className="w-1/4 relative">
                <div className="">
                <div className="flex justify-end gap-x-7">
                   <div ref={cartaccRef} className="">
                   <FaUserCheck/>
                   </div>
                   <div ref={cartcountRef} className="relative">
                        {cartInfo.length > 0 ? 
                        <div className="absolute left-[10px] top-[-10px] h-[20px] w-[20px] bg-[#585858] text-center rounded-full text-white">
                           {cartInfo.length}

                        </div>
                        :
                        ""
                        
                        }
                        <FaCartPlus />
                      
                   </div>
                </div>
                </div>
                <div className="" ref={cartShowRef}>
                {cartCountShow &&
                <div className="w-[360px] z-50 absolute top-[50px] left-[-274px] lg:left-0">
                    {cartInfo.map((item,i)=>(
                    <>
                        <div className="flex justify-around items-center bg-[#F5F5F3]">
                        <div className="py-5">
                            <img className='w-[80px] h-[80px]' src={item.thumbnail} alt="" />
                        </div>
                        <div className="">
                            <h4 className="font-sans font-normal text-[16px]">{item.title}</h4>
                            <p className="font-sans font-normal text-[16px]">${item.price}</p>
                        </div>
                        <div onClick={()=>dispatch(removeProduct(i))} className="">
                                <RxCross1/>
                        </div>
                    </div>
                    
                    </>
                    ))}
                    <div className="">
                        
                        <button  className='w-[150px] h-[50px] border-2 border-[#262626] font-sans font-normal hover:bg-[#262626] hover:text-white duration-300 ease-in-out'>View Cart</button>
                        
                        
                        <button onClick={handleChek} className='w-[150px] h-[50px] border-2 border-[#262626] font-sans font-normal hover:bg-[#262626] hover:text-white duration-300 ease-in-out ml-5'>Checkout</button>
                        
                    </div>
                </div>
                }
                </div>
                {cartAcctShow &&
                <div className="absolute z-50 top-[50px] left-[-131px] lg:left-0  w-[200px]">
                    <ul className='bg-white '>
                        <li className='h-[50px] font-sans text-[#2B2B2B] font-normal text-[16px] hover:bg-[#2B2B2B] hover:text-white text-center duration-300 ease-in-out leading-[50px]'>My Account</li>
                        <li className='h-[50px] font-sans text-[#2B2B2B] font-normal text-[16px] hover:bg-[#2B2B2B] hover:text-white text-center duration-300 ease-in-out leading-[50px]'>Log Out</li>
                    </ul>
                </div>
                }   
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Flex>
    </Container>
    </nav>
  )
}

export default Navbar