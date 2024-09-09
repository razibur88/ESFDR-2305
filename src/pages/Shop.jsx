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
  },[data])

  let handleCategory = (citem) =>{
   let categoryFilter = data.filter((item)=> item.category == citem) 
   setCateFilter(categoryFilter);
  
  }
  let handleAllpage = ()=>{
    setCateFilter("")
  }

  let handleActive = ()=>{
    setActiveMulti("active");
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
              <Post allPage={allPage} cateFilter={cateFilter} activeMulti={activeMulti}/>
              <Pagination pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} currentPage={currentPage}/>
        </div>
      </Flex>
      </div>
    </Container>
  )
}

export default Shop