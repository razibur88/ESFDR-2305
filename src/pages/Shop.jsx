import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { TiPlus } from "react-icons/ti";
import { HiMinusSm } from "react-icons/hi";
import { SiWindows11 } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import Post from '../components/pagination/Post';
import { ApiData } from '../components/ContextApi';
import Pagination from '../components/pagination/Pagination';

const Shop = () => {

  let data = useContext(ApiData)
  let [cshow, setCshow] = useState(false)
  let [category, setCategory] = useState([])
  let [currentPage, setCurrentPage] = useState(1)
  let [perPage, setPerPage] = useState(6)
  let [activeMulti, setActiveMulti] = useState("")
  let [cateFilter, setCateFilter] = useState([])
  let [lowPrice, setLowPrice] = useState([])
  let [highPrice, setHighPrice] = useState([])
  let [brandShow, setBrandShow] = useState([])
  let [brandCategory, setBrandCategory] = useState([])
  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage
  let allPage = data.slice(firstPage, lastPage)
  let pageNumber = []

  for(let i= 0; i < data.length / perPage; i++){
    pageNumber.push(i)
  }
  
  let paginate = (pageNumber)=>{
    setCurrentPage(pageNumber + 1);
  }
  
  let next = ()=>{
    if(currentPage < pageNumber.length){
      setCurrentPage((state)=> state + 1)
    }
  }

  let prev = () =>{
    if(currentPage > 0){
      setCurrentPage((state) => state - 1)
    }
  }
  let handleShowShop = (e) => {
    setPerPage(e.target.value)
  }
  let handleShow = () =>{
    setCshow(!cshow)
  }

  useEffect(()=>{
    setCategory([...new Set(data.map((item)=> item.category))])
    setBrandShow([...new Set(data.map((item)=> item.brand))])
  },[data])

  let handleCategory = (citem) =>{
   let categoryFilter = data.filter((item)=> item.category == citem) 
   setCateFilter(categoryFilter);
  
  }
  let handleAllpage = ()=>{
    setCateFilter(data)
  }

  let handleActive = ()=>{
    setActiveMulti("active");
  }

  let handlePrice = (value)=>{
    setLowPrice(value.low);
    setHighPrice(value.high);

    let priceFilter = data.filter((item)=> item.price > value.low && item.price < value.high)
    if(priceFilter.length > 0){
      setCateFilter(priceFilter)
    } else{
      setCateFilter("")
    }
      
   
  }


  let handleBrand = (bitem) =>{
    let brandFilter = data.filter((item)=> item.brand == bitem) 
    setCateFilter(brandFilter)
  }
  
  
  

  return (
    <Container>
      <h2 className="font-sans text-[49px] font-bold pt-10">Products</h2>
      <p className="font-sans text-[16px] font-normal pt-4"><Link to="/">Home</Link>  	&#62;  Products</p>
      <div className="py-10">
      <Flex>
        <div className="w-[20%]">
          <div className="">
            <div onClick={handleShow} className="flex justify-between items-center px-2">
            <h2 className="font-sans text-[24px] font-bold">Shop by Category</h2>
            {cshow == true ? <HiMinusSm/>: <TiPlus/> }
            
            </div>
            <div className="">
              {cshow &&
              <ul>
                <li onClick={handleAllpage} className="font-sans text-[18px] font-normal capitalize">All Data</li>
                {category.map((item)=>(
                <li onClick={()=>handleCategory(item)} className="font-sans text-[18px] font-normal capitalize">{item}</li>
                ))}
              </ul>
              }
            </div>
              <div className="">
                <h2 className="font-sans text-[24px] font-bold">Price</h2>
                <ul>
                  <li onClick={()=>handlePrice({low:0, high:10})}>$0 - $9</li>
                  <li onClick={()=>handlePrice({low:10, high:19})}>$10 - $19</li>
                  <li onClick={()=>handlePrice({low:20, high:29})}>$20 - $29</li>
                  <li onClick={()=>handlePrice({low:30, high:39})}>$30 - $39</li>
                  <li onClick={()=>handlePrice({low:40, high:59})}>$40 - $59</li>
                </ul>
              </div>

              <div className="">
                <h2 className="font-sans text-[24px] font-bold">Brand</h2>
                <ul>
                  {brandShow.map((item)=>(
                  <li onClick={()=>handleBrand(item)} className="font-sans text-[18px] font-normal capitalize">{item}</li>
                  ))}
                </ul>
              </div>


          </div>
        </div>
        <div className="w-[80%]">
              <div className="flex items-center">
                <div className="w-[30%]">
                  <div className="flex">
                    <div onClick={()=>setActiveMulti("")} className="p-5 hover:bg-[#262626] hover:text-white duration-300 ease-in-out">
                      <SiWindows11/>
                    </div>
                   <div onClick={handleActive} className={`${activeMulti == "active" ? "p-5 bg-[#262626] text-white duration-300 ease-in-out" : "p-5 hover:bg-[#262626] hover:text-white duration-300 ease-in-out"}`}>
                   <FaBars/>
                   </div>
                  </div>
                </div>
                <div className="w-[70%]">
                    <div className="flex justify-end gap-x-14">
                    <div className="">
                    <label>Sort by: :</label>
                    <select className='w-[200px] border-2 border-[#262626] h-[40px] text-center'>
                      <option value="">Featured</option>
                      <option value="">Featured</option>
                      <option value="">Featured</option>
                      <option value="">Featured</option>
                    </select>
                    </div>
                    <div className="">
                    <label>Show :</label>
                    <select onChange={handleShowShop} className='w-[100px] border-2 border-[#262626] h-[40px] text-center'>
                      <option value="6">6</option>
                      <option value="12">12</option>
                      <option value="18">18</option>
                    </select>
                    </div>
                    </div>
                </div>
              </div>
                  {cateFilter ?
                  <Post allPage={allPage} cateFilter={cateFilter && cateFilter} activeMulti={activeMulti} brandCategory={brandCategory}/>
                  :
                  <h2>Does not Price </h2>
                  }
              
            
              <Pagination pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} currentPage={currentPage} cateFilter={cateFilter}/>
             
        </div>
      </Flex>
      </div>
    </Container>
  )
}

export default Shop