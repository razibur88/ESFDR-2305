import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch, FaCartPlus, FaUserCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "./slice/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApiData } from "./ContextApi";

const Navbar = () => {
  const data = useContext(ApiData);
  const cartInfo = useSelector((state) => state.product.cartItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cartShow, setCartShow] = useState(false);
  const [cartCountShow, setcartCountShow] = useState(false);
  const [cartAcctShow, setcartAccShow] = useState(false);
  const [searchChange, setSearchChange] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1); // Track active search result

  const cartRef = useRef();
  const cartcountRef = useRef();
  const cartaccRef = useRef();
  const cartShowRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current.contains(e.target)) {
        setCartShow(!cartShow);
      } else {
        setCartShow(false);
      }
      if (cartcountRef.current.contains(e.target)) {
        setcartCountShow(!cartCountShow);
      } else {
        setcartCountShow(false);
      }
      if (cartaccRef.current.contains(e.target)) {
        setcartAccShow(!cartAcctShow);
      } else {
        setcartAccShow(false);
      }
      if (cartShowRef.current.contains(e.target)) {
        setcartCountShow(true);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [cartShow, cartCountShow, cartAcctShow]);

  const handleChek = () => {
    setTimeout(() => {
      toast("Wow so easy!");
    }, 1000);
    navigate("/checkout");
    setcartCountShow(false);
  };

  const handleCartPage = () => {
    navigate("/cart");
    setcartCountShow(false);
  };

  const handleSearch = (e) => {
    setSearchChange(e.target.value);
    if (e.target.value === "") {
      setSearchFilter([]);
      setActiveIndex(-1); // Reset active index
    } else {
      const searchOne = data.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchFilter(searchOne);
    }
  };

  const handleSearchProduct = (id) => {
    navigate(`/shop/${id}`);
    setSearchFilter([]);
    setSearchChange("");
  };

  const handleKeyDown = (e) => {
    if (searchFilter.length > 0) {
      if (e.key === "ArrowDown") {
        setActiveIndex((prevIndex) =>
          prevIndex < searchFilter.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
      } else if (e.key === "Enter" && activeIndex >= 0) {
        // Navigate to the selected product
        handleSearchProduct(searchFilter[activeIndex].id);
      }
    }
  };

  return (
    <nav className="py-5 bg-[#F5F5F3]">
      <Container>
        <Flex className="items-center">
          {/* Left: Shop by Category */}
          <div className="w-1/4 relative">
            <div
              ref={cartRef}
              className="flex items-center justify-center lg:justify-start gap-x-2"
            >
              <FaBarsStaggered />
              <h2 className="font-sans font-normal text-[16px] hidden lg:block">
                Shop by Category
              </h2>
            </div>
            {cartShow && (
              <div className="absolute z-50 left-0 top-[50px] w-[320px]">
                <ul className="bg-[#262626] py-5">
                  {["Accesories", "Furniture", "Electronics", "Clothes", "Bags", "Home appliances"].map((category) => (
                    <li
                      key={category}
                      className="font-sans font-normal text-[16px] text-[rgba(255,255,255,0.7)] pl-4 hover:pl-7 duration-300 ease-in-out hover:text-white py-3"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Center: Search */}
          <div className="w-1/2 relative">
            <div className="relative">
              <input
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                className="h-[50px] w-full border-2 border-[#262626] pl-3"
                type="text"
                placeholder="Search...."
                value={searchChange}
              />
              <div className="absolute top-[50%] translate-y-[-50%] right-10">
                <FaSearch />
              </div>
            </div>

            {searchFilter.length > 0 && (
              <div className="absolute left-0 top-[70px] w-full z-50 bg-white shadow-md max-h-[400px] overflow-y-auto">
                {searchFilter.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => handleSearchProduct(item.id)}
                    className={`flex justify-between items-center px-4 py-2 cursor-pointer ${
                      index === activeIndex ? "bg-gray-200" : ""
                    }`} // Highlight the active search result
                  >
                    <div className="py-5">
                      <img
                        className="w-[80px] h-[80px]"
                        src={item.thumbnail}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex-grow pl-4">
                      <h4 className="font-sans font-normal text-[16px]">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Cart & Account */}
          <div className="w-1/4 relative">
            <div className="flex justify-end gap-x-7">
              <div ref={cartaccRef}>
                <FaUserCheck />
              </div>
              <div ref={cartcountRef} className="relative">
                {cartInfo.length > 0 && (
                  <div className="absolute left-[10px] top-[-10px] h-[20px] w-[20px] bg-[#585858] text-center rounded-full text-white">
                    {cartInfo.length}
                  </div>
                )}
                <FaCartPlus />
              </div>
            </div>

            {/* Cart details */}
            {cartCountShow && (
              <div className="absolute z-50 w-[360px] top-[50px] left-[-274px] lg:left-0 bg-[#F5F5F3]">
                {cartInfo.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-around items-center py-5"
                  >
                    <img
                      className="w-[80px] h-[80px]"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                    <div>
                      <h4 className="font-sans font-normal text-[16px]">
                        {item.title}
                      </h4>
                      <p className="font-sans font-normal text-[16px]">
                        ${item.price}
                      </p>
                    </div>
                    <div onClick={() => dispatch(removeProduct(i))}>
                      <RxCross1 />
                    </div>
                  </div>
                ))}
                {cartInfo.length > 0 && (
                  <div className="flex justify-between p-4">
                    <button
                      onClick={handleCartPage}
                      className="w-[150px] h-[50px] border-2 border-[#262626] font-sans font-normal hover:bg-[#262626] hover:text-white"
                    >
                      Cart Page
                    </button>
                    <button
                      onClick={handleChek}
                      className="w-[150px] h-[50px] border-2 border-[#262626] font-sans font-normal hover:bg-[#262626] hover:text-white"
                    >
                      Checkout
                    </button>
                  </div>
                )}
                
              </div>
            )}
            {cartAcctShow && (
              <div className="absolute z-50 w-[200px] top-[50px] left-[-131px] lg:left-[106px] bg-white">
                <ul>
                  <li className="h-[50px] text-center leading-[50px] text-[#2B2B2B] font-sans text-[16px] hover:bg-[#2B2B2B] hover:text-white cursor-pointer">
                    My Account
                  </li>
                  <li className="h-[50px] text-center leading-[50px] text-[#2B2B2B] font-sans text-[16px] hover:bg-[#2B2B2B] hover:text-white cursor-pointer">
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </Flex>
      </Container>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;

