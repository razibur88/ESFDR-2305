import React from 'react'
import Container from '../components/Container'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { RiCloseLine } from "react-icons/ri";
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { productDecrement, productIncrement, removeProduct } from '../components/slice/productSlice';

const Cart = () => {
  let dispatch = useDispatch()
  let cartInfo = useSelector((state)=> state.product.cartItem)

  let handleDecrement = (id) =>{
    dispatch(productDecrement(id))
    
  }

  let {totalPrice, totalQuntity} = cartInfo.reduce((acc, item)=>{
    acc.totalPrice += item.price * item. qun
    acc.totalQuntity += item.qun
    return acc
  },{totalPrice:0, totalQuntity:0})


  
  
  return (
    <Container>
      <div>
            <h3 className="font-sans text-[30px] font-bold pt-10">Cart</h3>
            <h3 className="font-sans text-[16px] font-normal pt-4"> <Link to="/">Home</Link> <span> &#62; </span>  <Link to="/cart">Cart</Link></h3>

        </div>
      <div className="lg:grid grid-cols-4 px-[20px] py-[33px] bg-[#F5F5F3] hidden mt-5">
            <h4 className='font-dm-sans font-bold text-base text-black leading-[23px]'>Product</h4>
            <h4 className='font-dm-sans font-bold text-base text-black leading-[23px]'>Price</h4>
            <h4 className='font-dm-sans font-bold text-base text-black leading-[23px]'>Quantity</h4>
            <h4 className='font-dm-sans font-bold text-base text-black leading-[23px]'>Total</h4>
        </div>

        {cartInfo.map((item,i)=>(
          <div className="lg:grid grid-cols-4 px-[20px] py-[3px] items-center border-[1px] border-[#F0F0F0] my-3">
              <div className="flex items-center justify-between">
                  <div className="w-[10%]">
                      <button onClick={()=> dispatch(removeProduct(i))}>
                      <RiCloseLine  className='text-[30px]'/>
                      </button>
                  </div>
                  <div className="w-[35%]">
                      <img className='w-[100px]' src={item.thumbnail} alt="product" />
                  </div>
                  <div className="w-[50%]">
                  <h4 className='font-dm-sans font-bold text-base text-black leading-[23px]'>{item.title}</h4>
                  </div>
              </div>
              <div className="col-span-3 grid grid-cols-3">
              <div className="">
              <h4 className='font-dm-sans font-bold text-xl text-black leading-[23px]'>${item.price}</h4>
              </div>
              <div className="">
              <div className="flex items-center justify-around border-[#F0F0F0] border-[1px] lg:w-[139px]  ">
                <div className="">
                  <button onClick={()=>handleDecrement(i)} className='font-dm-sans font-normal text-[#767676] text-base leading-[30px] '><FaMinus /></button>
                </div>
                <div className="">
                  <h4 className='font-dm-sans font-normal text-[#767676] text-base leading-[30px] '>{item.qun}</h4>
                </div>
                <div className="">
                  <button onClick={()=>dispatch(productIncrement(i))} className='font-dm-sans font-normal text-[#767676] text-base leading-[30px] '><FaPlus /></button>
                </div>
              </div>
              </div>
              <div className="">
              <h4 className='font-dm-sans font-bold text-xl text-black leading-[23px]'>${(item.price * item.qun).toFixed(2)}</h4>
              </div>
              </div>
          </div>
          ))
      }


        <div className="flex justify-between items-center p-[20px] border-t-[0px] border-[1px] border-[#F0F0F0]">
            <div className="">
            <div className="flex items-center gap-[23px]">
            <div className="">
              <select className='border-[#F0F0F0] border-[1px] lg:w-[255px] py-[10px] px-[20px] focus-visible:outline-none font-dm-sans font-normal text-[#767676] text-base leading-[30px]   ' name="" id="">
                <option value="">size</option>
                <option value="">size</option>
                <option value="">size</option>
                <option value="">size</option>
                <option value="">size</option>
              </select>
            </div>
            <div className="">
            <h4 className='font-dm-sans font-bold text-sm text-black leading-[23px]'>Apply coupon</h4>
            </div>
          </div>
            </div>
            <div className="">
            <h4 className='font-dm-sans font-bold text-sm text-black leading-[23px]'>Update cart</h4>
            </div>
        </div>
        <div className="flex items-center lg:justify-end mt-[54px]">
            <div className="">
            <h4 className='font-dm-sans font-bold text-xl text-black leading-[23px] pb-[24px] lg:text-right'>Cart totals</h4>
            <div className="flex items-center lg:w-[644px] px-[20px]  border-[#F0F0F0] border-[1px] ">
                <div className="w-[50%] border-r-[1px] py-[15px]">
                    <h4 className='font-dm-sans font-bold text-base text-black leading-[23px]'>Quantity</h4>
                </div>
                <div className="w-[50%] py-[15px] pl-[20px]">
                <h4 className='font-dm-sans font-normal text-base text-black leading-[23px]'>{totalQuntity}</h4>
                </div>
            </div>
            <div className="flex items-center lg:w-[644px] px-[20px]  border-[#F0F0F0] border-[1px] ">
                <div className="w-[50%] border-r-[1px] py-[15px]">
                    <h4 className='font-dm-sans font-bold text-base text-black leading-[23px]'>Total</h4>
                </div>
                <div className="w-[50%] py-[15px] pl-[20px]">
                <h4 className='font-dm-sans font-normal text-base text-black leading-[23px]'>$ {totalPrice.toFixed(2)}</h4>
                </div>
            </div>
            <div className="mt-[30px] lg:text-right">
            <button type='submit' className='py-[16px] px-[25px] bg-black text-white font-dm-sans font-bold text-sm leading-[18px]'>Proceed to Checkout</button>
          </div>
            </div>
        </div>

        
    </Container>
  )
}

export default Cart